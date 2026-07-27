import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { library } from "@/data/library";
import { quizBank, type QuizQuestion, type SubjectCode } from "@/data/quizzes";
import {
  Brain, Check, X, Sparkles, Trophy, Clock, Loader2, AlertCircle, BookOpen,
  Target, TrendingUp, TrendingDown, ArrowRight, ListChecks, Lightbulb,
} from "lucide-react";
import { awardXp } from "@/lib/xp";
import { toast } from "sonner";

const subjectBg: Record<string, string> = {
  P: "bg-[hsl(var(--subject-physics))]",
  C: "bg-[hsl(var(--subject-chemistry))]",
  M: "bg-[hsl(var(--subject-math))]",
  B: "bg-[hsl(var(--subject-biology))]",
};

const PASS_PCT = 60;
const SET_SIZE = 5;

// Deterministic shuffle
function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type ActiveCtx = {
  subjectCode: SubjectCode;
  subjectName: string;
  chapterSlug: string;
  chapterName: string;
  setIndex: number;
  questions: QuizQuestion[];
};

type AiReport = {
  overall?: string;
  strongTopics?: string[];
  weakTopics?: string[];
  revisionChapters?: string[];
  nextChapter?: string;
  suggestedMock?: string;
  tips?: string[];
};

const Quizzes = () => {
  const { user } = useAuth();

  const [active, setActive] = useState<ActiveCtx | null>(null);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [startTs, setStartTs] = useState<number>(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [endTs, setEndTs] = useState<number | null>(null);

  const [aiLoading, setAiLoading] = useState(false);
  const [aiReport, setAiReport] = useState<AiReport | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  useEffect(() => { document.title = "Quizzes · MindNest"; }, []);

  useEffect(() => {
    if (!active || done) return;
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startTs) / 1000)), 1000);
    return () => clearInterval(t);
  }, [active, done, startTs]);

  const setsForChapter = (bank: QuizQuestion[]) => {
    if (bank.length >= SET_SIZE * 2) return 2;
    if (bank.length >= 1) return 1;
    return 0;
  };

  const startQuiz = (subjectCode: SubjectCode, subjectName: string, chapterSlug: string, chapterName: string, setIndex: number) => {
    const bank = quizBank[subjectCode]?.[chapterSlug] ?? [];
    if (!bank.length) { toast.info("No questions for this chapter yet."); return; }
    const seed = (chapterSlug.split("").reduce((a, c) => a + c.charCodeAt(0), 0) + setIndex * 1000) || 1;
    const shuffled = shuffle(bank, seed);
    const picked = shuffled.slice(setIndex * SET_SIZE, setIndex * SET_SIZE + SET_SIZE);
    const questions = picked.length ? picked : shuffled.slice(0, SET_SIZE);
    setActive({ subjectCode, subjectName, chapterSlug, chapterName, setIndex, questions });
    setIdx(0);
    setAnswers(new Array(questions.length).fill(null));
    setSelected(null);
    setDone(false);
    setReviewing(false);
    setAiReport(null);
    setAiError(null);
    setStartTs(Date.now());
    setElapsed(0);
    setEndTs(null);
  };

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    setAnswers((prev) => { const n = [...prev]; n[idx] = i; return n; });
  };

  // Simpler score calc
  const computeScore = (ctx: ActiveCtx, ans: (number | null)[]) =>
    ans.reduce((acc: number, a, i) => acc + (a !== null && a === ctx.questions[i].answer ? 1 : 0), 0);

  const finish = async (ctx: ActiveCtx, finalAns: (number | null)[]) => {
    const finalScore = computeScore(ctx, finalAns);
    const time = Math.floor((Date.now() - startTs) / 1000);
    setEndTs(Date.now());
    setDone(true);
    if (user) {
      try {
        await supabase.from("quiz_attempts").insert({
          user_id: user.id,
          score: finalScore,
          total: ctx.questions.length,
          time_seconds: time,
        });
        await awardXp(user.id, finalScore * 20);
        toast.success(`+${finalScore * 20} XP earned!`);
      } catch { toast.error("Couldn't save your score"); }
    }
    // Kick off AI analysis
    setAiLoading(true); setAiError(null); setAiReport(null);
    try {
      const wrong = ctx.questions
        .map((q, i) => ({ q: q.q, concept: q.concept, difficulty: q.difficulty, correct: q.answer, chosen: finalAns[i] }))
        .filter((w) => w.chosen !== w.correct);
      const subj = library.find((s) => s.code === ctx.subjectCode);
      const allChapters = subj?.chapters.map((c) => c.name) ?? [];
      const { data, error } = await supabase.functions.invoke("quiz-analysis", {
        body: {
          subject: ctx.subjectName,
          chapter: ctx.chapterName,
          score: finalScore,
          total: ctx.questions.length,
          timeSeconds: time,
          wrong,
          allChapters,
        },
      });
      if (error) throw error;
      setAiReport(data as AiReport);
    } catch (e: any) {
      setAiError(e?.message ?? "Couldn't generate AI report");
    } finally {
      setAiLoading(false);
    }
  };

  const next = () => {
    if (!active) return;
    if (idx + 1 < active.questions.length) { setIdx(idx + 1); setSelected(answers[idx + 1]); }
    else finish(active, answers);
  };

  // ==== List view ====
  if (!active) {
    return (
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="size-7 text-primary" />
          <h1 className="text-3xl font-bold">Quizzes</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Pick a chapter to start a CET-level quiz set. Each set has fresh randomized questions. Earn 20 XP per correct answer.
        </p>
        <div className="space-y-8">
          {library.map((s) => (
            <div key={s.code}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`size-9 rounded-lg ${subjectBg[s.code]} flex items-center justify-center font-bold text-white`}>{s.code}</div>
                <h2 className="text-xl font-semibold">{s.name}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {s.chapters.map((chapter) => {
                  const bank = quizBank[s.code as SubjectCode]?.[chapter.slug] ?? [];
                  const sets = setsForChapter(bank);
                  return (
                    <div key={chapter.slug} className="glow-card rounded-2xl p-5">
                      <div className="flex items-start gap-2 mb-2">
                        <BookOpen className="size-4 text-primary mt-1" />
                        <div className="font-semibold flex-1">{chapter.name}</div>
                      </div>
                      <div className="text-xs text-muted-foreground mb-3">
                        {bank.length} question{bank.length !== 1 && "s"} available
                      </div>
                      {sets === 0 ? (
                        <div className="text-xs text-muted-foreground italic">Coming soon</div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {Array.from({ length: sets }).map((_, i) => (
                            <button
                              key={i}
                              onClick={() => startQuiz(s.code as SubjectCode, s.name, chapter.slug, chapter.name, i)}
                              className="text-xs px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                            >
                              <Sparkles className="size-3" /> Set {i + 1}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ==== Result screen ====
  if (done) {
    const finalScore = computeScore(active, answers);
    const total = active.questions.length;
    const pct = Math.round((finalScore / total) * 100);
    const time = endTs ? Math.floor((endTs - startTs) / 1000) : elapsed;
    const passed = pct >= PASS_PCT;
    const incorrect = total - finalScore;

    if (reviewing) {
      return (
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex justify-between items-center">
            <button onClick={() => setReviewing(false)} className="text-sm text-muted-foreground hover:text-foreground">← Back to results</button>
            <div className="text-sm text-muted-foreground">Answer review · {active.chapterName}</div>
          </div>
          {active.questions.map((q, i) => {
            const chosen = answers[i];
            const isRight = chosen === q.answer;
            return (
              <div key={i} className="glow-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isRight ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                    {isRight ? "Correct" : "Incorrect"}
                  </span>
                  <span className="text-xs text-muted-foreground">Q{i + 1} · {q.difficulty} · {q.concept}</span>
                </div>
                <div className="font-semibold mb-3">{q.q}</div>
                <div className="space-y-2 mb-3">
                  {q.options.map((opt, j) => {
                    const isCorrect = j === q.answer;
                    const isChosen = j === chosen;
                    return (
                      <div key={j} className={`p-3 rounded-xl border text-sm flex items-center justify-between ${
                        isCorrect ? "border-emerald-500 bg-emerald-500/10" :
                        isChosen ? "border-red-500 bg-red-500/10" :
                        "border-border"
                      }`}>
                        <span>{opt}</span>
                        {isCorrect && <Check className="size-4 text-emerald-400" />}
                        {isChosen && !isCorrect && <X className="size-4 text-red-400" />}
                      </div>
                    );
                  })}
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  <span className="text-foreground">Your answer:</span> {chosen !== null ? q.options[chosen] : "Not answered"}
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  <span className="text-foreground">Correct answer:</span> {q.options[q.answer]}
                </div>
                <div className="p-3 rounded-xl bg-secondary/50 text-sm">
                  <div className="font-semibold text-primary mb-1">Why this is correct</div>
                  <div className="text-muted-foreground">{q.explanation}</div>
                  <div className="mt-2 text-xs text-muted-foreground">Concept tested: <span className="text-foreground font-medium">{q.concept}</span></div>
                </div>
              </div>
            );
          })}
          <div className="flex gap-3 justify-center pt-2">
            <button onClick={() => setReviewing(false)} className="px-6 py-3 rounded-xl border border-border hover:bg-secondary">Back to results</button>
            <button onClick={() => setActive(null)} className="px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary">Back to chapters</button>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-3xl mx-auto space-y-5">
        <div className="glow-card rounded-3xl p-8 text-center">
          <div className={`size-20 rounded-full mx-auto flex items-center justify-center mb-4 ${passed ? "bg-gradient-primary glow-primary" : "bg-secondary"}`}>
            <Trophy className={`size-10 ${passed ? "text-primary-foreground" : "text-muted-foreground"}`} />
          </div>
          <h1 className="text-3xl font-bold mb-1">Quiz Complete!</h1>
          <p className="text-muted-foreground mb-5">{active.subjectName} · {active.chapterName} · Set {active.setIndex + 1}</p>
          <div className="text-6xl font-bold text-gradient mb-1">{pct}%</div>
          <div className="text-sm text-muted-foreground mb-5">{finalScore} of {total} correct · +{finalScore * 20} XP</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <StatCard icon={<Target className="size-4" />} label="Total Score" value={`${finalScore}/${total}`} />
            <StatCard icon={<Check className="size-4 text-emerald-400" />} label="Correct" value={String(finalScore)} />
            <StatCard icon={<X className="size-4 text-red-400" />} label="Incorrect" value={String(incorrect)} />
            <StatCard icon={<Clock className="size-4" />} label="Time" value={`${Math.floor(time / 60)}:${String(time % 60).padStart(2, "0")}`} />
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${passed ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
              {passed ? "PASS" : "NEEDS PRACTICE"}
            </span>
            <span className="text-xs text-muted-foreground">Accuracy: {pct}%</span>
          </div>
          <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden max-w-md mx-auto">
            <div className={`h-full transition-all ${passed ? "bg-emerald-500" : "bg-red-500"}`} style={{ width: `${pct}%` }} />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {passed
              ? `Solid grasp of ${active.chapterName}. Push into the next chapter to keep momentum.`
              : `A few concepts need another pass — review the wrong answers below, then retry the set.`}
          </p>
          <div className="flex gap-3 justify-center mt-6 flex-wrap">
            <button onClick={() => setReviewing(true)} className="px-5 py-2.5 rounded-xl border border-border hover:bg-secondary flex items-center gap-2">
              <ListChecks className="size-4" /> Review answers
            </button>
            <button onClick={() => startQuiz(active.subjectCode, active.subjectName, active.chapterSlug, active.chapterName, active.setIndex)} className="px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary">
              Retry set
            </button>
            <button onClick={() => setActive(null)} className="px-5 py-2.5 rounded-xl border border-border hover:bg-secondary">
              Back to chapters
            </button>
          </div>
        </div>

        {/* AI Report */}
        <div className="glow-card rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-5 text-primary" />
            <h2 className="text-lg font-bold">AI Performance Analysis</h2>
          </div>
          {aiLoading && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Loader2 className="size-4 animate-spin" /> Generating your personalized report…
            </div>
          )}
          {aiError && (
            <div className="text-sm text-red-400">Couldn't generate report: {aiError}</div>
          )}
          {aiReport && (
            <div className="space-y-4 text-sm">
              {aiReport.overall && (
                <div className="p-3 rounded-xl bg-secondary/50">
                  <div className="text-xs text-primary font-semibold mb-1">Overall</div>
                  <div>{aiReport.overall}</div>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-3">
                <ReportList icon={<TrendingUp className="size-4 text-emerald-400" />} label="Strong topics" items={aiReport.strongTopics} empty="Keep practicing to build strengths." />
                <ReportList icon={<TrendingDown className="size-4 text-red-400" />} label="Weak topics" items={aiReport.weakTopics} empty="No major weak spots — nice work." />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <ReportList icon={<BookOpen className="size-4 text-primary" />} label="Chapters to revise" items={aiReport.revisionChapters} empty="—" />
                <div className="p-3 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-2 text-xs font-semibold mb-1"><ArrowRight className="size-4 text-primary" /> Next chapter</div>
                  <div>{aiReport.nextChapter ?? "—"}</div>
                  {aiReport.suggestedMock && (
                    <div className="mt-2 text-xs text-muted-foreground">Suggested mock: <span className="text-foreground">{aiReport.suggestedMock}</span></div>
                  )}
                </div>
              </div>
              {aiReport.tips && aiReport.tips.length > 0 && (
                <div className="p-3 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-2 text-xs font-semibold mb-2"><Lightbulb className="size-4 text-primary" /> Improvement tips</div>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {aiReport.tips.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ==== Active question ====
  const q = active.questions[idx];
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setActive(null)} className="text-sm text-muted-foreground hover:text-foreground">← Exit quiz</button>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-muted-foreground"><Clock className="size-4" /> {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}</span>
          <span className="font-semibold">{idx + 1} / {active.questions.length}</span>
        </div>
      </div>
      <div className="h-2 bg-secondary rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-gradient-primary transition-all" style={{ width: `${((idx + (selected !== null ? 1 : 0)) / active.questions.length) * 100}%` }} />
      </div>
      <div className="glow-card rounded-3xl p-8">
        <div className="text-xs uppercase text-primary font-semibold mb-2">{active.chapterName} · Set {active.setIndex + 1} · {q.difficulty} · {q.concept}</div>
        <h2 className="text-2xl font-bold mb-6">{q.q}</h2>
        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const isCorrect = i === q.answer;
            const isSel = i === selected;
            const showState = selected !== null;
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={selected !== null}
                className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                  showState && isCorrect ? "border-emerald-500 bg-emerald-500/10" :
                  showState && isSel ? "border-red-500 bg-red-500/10" :
                  "border-border hover:border-primary/60"
                }`}
              >
                <span>{opt}</span>
                {showState && isCorrect && <Check className="size-5 text-emerald-400" />}
                {showState && isSel && !isCorrect && <X className="size-5 text-red-400" />}
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <div className="mt-5 p-4 rounded-xl bg-secondary/50 text-sm">
            <span className="font-semibold text-primary">Explanation: </span>{q.explanation}
          </div>
        )}
        {selected !== null && (
          <button onClick={next} className="mt-6 w-full py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary">
            {idx + 1 === active.questions.length ? "Finish" : "Next question"}
          </button>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="p-3 rounded-xl bg-secondary/50">
    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">{icon} {label}</div>
    <div className="text-lg font-bold">{value}</div>
  </div>
);

const ReportList = ({ icon, label, items, empty }: { icon: React.ReactNode; label: string; items?: string[]; empty: string }) => (
  <div className="p-3 rounded-xl bg-secondary/50">
    <div className="flex items-center gap-2 text-xs font-semibold mb-1">{icon} {label}</div>
    {items && items.length > 0 ? (
      <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground">
        {items.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    ) : (
      <div className="text-muted-foreground italic">{empty}</div>
    )}
  </div>
);

export default Quizzes;
