import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ClipboardList, Clock, Loader2, Flag, Check, X, ArrowLeft, ArrowRight,
  ListChecks, Sparkles, Trophy, Target, BookOpen, TrendingUp, TrendingDown,
  AlertCircle, ChevronRight, BarChart3,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { awardXp } from "@/lib/xp";
import {
  MOCK_TESTS, getMockTest, buildMockQuestions,
  type MockQuestion, type MockTestConfig,
} from "@/data/mockTests";

type Status = "not-visited" | "not-answered" | "answered" | "marked" | "answered-marked";

type AiReport = {
  overall?: string;
  strongSubjects?: string[];
  weakSubjects?: string[];
  weakChapters?: string[];
  topicsToRevise?: string[];
  suggestedNotes?: string[];
  suggestedQuizzes?: string[];
  suggestedFlashcards?: string[];
  recommendedMock?: string;
  studyAdvice?: string[];
};

const diffColor: Record<string, string> = {
  Easy: "text-emerald-400",
  Medium: "text-amber-400",
  Hard: "text-rose-400",
};

const statusClass: Record<Status, string> = {
  "not-visited": "bg-secondary/60 text-muted-foreground border border-border",
  "not-answered": "bg-rose-500/80 text-white",
  "answered": "bg-emerald-500/80 text-white",
  "marked": "bg-violet-500/80 text-white",
  "answered-marked": "bg-blue-500/80 text-white ring-2 ring-emerald-400",
};

// ---------- LIST VIEW ----------
const ListView = () => {
  const navigate = useNavigate();
  const groups: ("PCM" | "PCB")[] = ["PCM", "PCB"];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <ClipboardList className="size-7 text-primary" />
        <h1 className="text-3xl font-bold">MHT CET Mock Tests</h1>
      </div>
      <p className="text-muted-foreground mb-6">
        Full-length computer-based tests that replicate the real MHT CET exam interface — question palette,
        timer, mark-for-review, subject navigation and a detailed AI performance dashboard.
      </p>

      {groups.map((stream) => (
        <div key={stream} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{stream} — Full Length Mock Tests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOCK_TESTS.filter((m) => m.stream === stream).map((cfg) => {
              const { questions, totalMarks, subjects } = buildMockQuestions(cfg);
              return (
                <div key={cfg.id} className="glow-card rounded-2xl p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs uppercase tracking-wide text-primary font-semibold">{cfg.stream}</div>
                    <div className={`text-xs font-semibold ${diffColor[cfg.difficulty]}`}>{cfg.difficulty}</div>
                  </div>
                  <div className="font-semibold text-lg mb-1">{cfg.title}</div>
                  <div className="text-xs text-muted-foreground mb-4">
                    {subjects.map((s) => s.name).join(" · ")}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div className="bg-secondary/40 rounded-lg py-2">
                      <div className="text-[10px] text-muted-foreground">Duration</div>
                      <div className="font-bold">{cfg.durationMin}m</div>
                    </div>
                    <div className="bg-secondary/40 rounded-lg py-2">
                      <div className="text-[10px] text-muted-foreground">Questions</div>
                      <div className="font-bold">{questions.length}</div>
                    </div>
                    <div className="bg-secondary/40 rounded-lg py-2">
                      <div className="text-[10px] text-muted-foreground">Marks</div>
                      <div className="font-bold">{totalMarks}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/mock-tests/${cfg.id}`)}
                    className="mt-auto w-full py-2 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm"
                  >
                    Start Test
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

// ---------- EXAM VIEW ----------
type Attempt = {
  cfg: MockTestConfig;
  questions: MockQuestion[];
  subjects: { code: string; name: string; start: number; count: number; marks: number }[];
  totalMarks: number;
  startTs: number;
};

const ExamView = ({ cfg }: { cfg: MockTestConfig }) => {
  const navigate = useNavigate();
  const built = useMemo(() => buildMockQuestions(cfg), [cfg.id]);
  const { questions, subjects, totalMarks } = built;

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => new Array(questions.length).fill(null));
  const [marked, setMarked] = useState<boolean[]>(() => new Array(questions.length).fill(false));
  const [visited, setVisited] = useState<boolean[]>(() => {
    const v = new Array(questions.length).fill(false);
    v[0] = true;
    return v;
  });
  const [remaining, setRemaining] = useState(cfg.durationMin * 60);
  const startRef = useRef(Date.now());
  const submittingRef = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (remaining === 0 && !submittingRef.current) submit();
    // eslint-disable-next-line
  }, [remaining]);

  const currentSubject = useMemo(() => {
    let last = subjects[0];
    for (const s of subjects) if (idx >= s.start) last = s;
    return last;
  }, [idx, subjects]);

  const statusFor = (i: number): Status => {
    const a = answers[i] !== null;
    const m = marked[i];
    if (a && m) return "answered-marked";
    if (m) return "marked";
    if (a) return "answered";
    if (visited[i]) return "not-answered";
    return "not-visited";
  };

  const goto = (i: number) => {
    if (i < 0 || i >= questions.length) return;
    setIdx(i);
    setVisited((v) => { const n = [...v]; n[i] = true; return n; });
  };

  const chooseOption = (o: number) => {
    setAnswers((a) => { const n = [...a]; n[idx] = o; return n; });
  };

  const clearResponse = () => {
    setAnswers((a) => { const n = [...a]; n[idx] = null; return n; });
  };

  const saveAndNext = () => goto(idx + 1);
  const markReviewNext = () => {
    setMarked((m) => { const n = [...m]; n[idx] = true; return n; });
    goto(idx + 1);
  };

  const [confirming, setConfirming] = useState(false);
  const { user } = useAuth();

  const submit = async () => {
    if (submittingRef.current) return;
    submittingRef.current = true;
    const timeSeconds = Math.floor((Date.now() - startRef.current) / 1000);
    // compute subject stats + chapter stats
    const chapterStats: Record<string, { chapterName: string; subject: string; total: number; correct: number; incorrect: number; attempted: number }> = {};
    let obtainedMarks = 0;
    let correct = 0; let incorrect = 0; let attempted = 0;
    const subjectStats = subjects.map((s) => ({ ...s, correct: 0, incorrect: 0, attempted: 0, marks: s.marks, obtained: 0 }));

    questions.forEach((q, i) => {
      const key = `${q.subjectCode}:${q.chapterSlug}`;
      chapterStats[key] ||= { chapterName: q.chapterName, subject: q.subjectName, total: 0, correct: 0, incorrect: 0, attempted: 0 };
      chapterStats[key].total += 1;
      const subjIdx = subjectStats.findIndex((ss) => ss.code === q.subjectCode);
      const ans = answers[i];
      if (ans !== null) {
        attempted += 1;
        chapterStats[key].attempted += 1;
        subjectStats[subjIdx].attempted += 1;
        if (ans === q.answer) {
          correct += 1; obtainedMarks += q.marks;
          chapterStats[key].correct += 1;
          subjectStats[subjIdx].correct += 1;
          subjectStats[subjIdx].obtained += q.marks;
        } else {
          incorrect += 1;
          chapterStats[key].incorrect += 1;
          subjectStats[subjIdx].incorrect += 1;
        }
      }
    });
    const skipped = questions.length - attempted;
    const percentage = totalMarks > 0 ? Math.round((obtainedMarks / totalMarks) * 100) : 0;

    const result = {
      cfgId: cfg.id, title: cfg.title, stream: cfg.stream, durationMin: cfg.durationMin,
      totalMarks, obtainedMarks, percentage, correct, incorrect, attempted, skipped,
      timeSeconds, questions, answers, marked, subjectStats, chapterStats,
      submittedAt: Date.now(),
    };
    try { sessionStorage.setItem(`mock-result:${cfg.id}`, JSON.stringify(result)); } catch {}

    if (user) {
      try {
        await supabase.from("quiz_attempts").insert({
          user_id: user.id, score: correct, total: questions.length, time_seconds: timeSeconds,
        });
        await awardXp(user.id, correct * 5);
      } catch {}
    }
    navigate(`/mock-tests/${cfg.id}/result`);
  };

  const q = questions[idx];
  const hh = String(Math.floor(remaining / 3600)).padStart(2, "0");
  const mm = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  if (!q) {
    return (
      <div className="max-w-[900px] mx-auto glow-card rounded-3xl p-8 text-center">
        <AlertCircle className="size-10 text-amber-400 mx-auto mb-3" />
        <div className="font-semibold text-lg mb-1">No questions available</div>
        <div className="text-sm text-muted-foreground mb-4">This mock test could not be assembled.</div>
        <button onClick={() => navigate("/mock-tests")} className="px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm">Back</button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 bg-background flex flex-col">
      {/* Header */}
      <header className="h-14 border-b border-border flex items-center px-4 gap-4 bg-secondary/40">
        <div className="font-semibold">{cfg.title}</div>
        <div className="text-xs text-muted-foreground hidden md:block">MHT CET Computer Based Test</div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="size-4 text-primary" />
            <span className="font-mono font-bold text-lg">{hh}:{mm}:{ss}</span>
          </div>
          <button onClick={() => setConfirming(true)} className="px-4 py-2 rounded-lg bg-rose-500/90 hover:bg-rose-500 text-white text-sm font-semibold">
            Submit
          </button>
        </div>
      </header>

      {/* Subject nav */}
      <div className="border-b border-border flex bg-background/60">
        {subjects.map((s) => {
          const active = currentSubject?.code === s.code;
          return (
            <button
              key={s.code}
              onClick={() => goto(s.start)}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {s.name} <span className="opacity-60">({s.count})</span>
            </button>
          );
        })}
      </div>

      {/* Body */}
      <div className="flex-1 flex overflow-hidden">
        <section className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-muted-foreground">
                Question <span className="font-bold text-foreground">{idx + 1}</span> of {questions.length}
                <span className="ml-3 text-xs">{q.subjectName} · {q.chapterName}</span>
              </div>
              <div className={`text-xs font-semibold ${diffColor[q.difficulty]}`}>{q.difficulty} · +{q.marks} mark{q.marks > 1 ? "s" : ""}</div>
            </div>
            <div className="text-base md:text-lg font-medium mb-6 leading-relaxed">{q.q}</div>
            <div className="space-y-3 max-w-3xl">
              {q.options.map((opt, i) => {
                const chosen = answers[idx] === i;
                return (
                  <label
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      chosen ? "border-primary bg-primary/10" : "border-border hover:border-primary/40 bg-secondary/30"
                    }`}
                  >
                    <input type="radio" name={`q-${idx}`} className="mt-1 accent-primary" checked={chosen} onChange={() => chooseOption(i)} />
                    <span className="text-sm md:text-base">{opt}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <footer className="border-t border-border p-3 flex flex-wrap items-center gap-2 bg-secondary/30">
            <button onClick={markReviewNext} className="px-3 py-2 rounded-lg bg-violet-500/80 hover:bg-violet-500 text-white text-xs font-semibold">
              Mark for Review & Next
            </button>
            <button onClick={clearResponse} className="px-3 py-2 rounded-lg bg-secondary text-xs font-semibold">
              Clear Response
            </button>
            <div className="ml-auto flex items-center gap-2">
              <button onClick={() => goto(idx - 1)} disabled={idx === 0} className="px-3 py-2 rounded-lg bg-secondary text-xs font-semibold disabled:opacity-50 flex items-center gap-1">
                <ArrowLeft className="size-3" /> Previous
              </button>
              <button onClick={saveAndNext} className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                Save & Next <ArrowRight className="size-3" />
              </button>
            </div>
          </footer>
        </section>

        {/* Right palette */}
        <aside className="w-72 border-l border-border overflow-y-auto bg-secondary/20 hidden lg:block">
          <div className="p-4 space-y-3">
            <div className="text-sm font-semibold">Question Palette</div>
            <div className="grid grid-cols-2 gap-1 text-[10px] text-muted-foreground">
              <div className="flex items-center gap-2"><span className="size-3 rounded bg-emerald-500/80" /> Answered</div>
              <div className="flex items-center gap-2"><span className="size-3 rounded bg-rose-500/80" /> Not Answered</div>
              <div className="flex items-center gap-2"><span className="size-3 rounded bg-violet-500/80" /> Marked</div>
              <div className="flex items-center gap-2"><span className="size-3 rounded bg-blue-500/80" /> Ans+Mark</div>
              <div className="flex items-center gap-2"><span className="size-3 rounded bg-secondary border border-border" /> Not Visited</div>
            </div>
            {subjects.map((s) => (
              <div key={s.code}>
                <div className="text-xs font-semibold mt-3 mb-2 text-muted-foreground">{s.name}</div>
                <div className="grid grid-cols-6 gap-1.5">
                  {Array.from({ length: s.count }).map((_, i) => {
                    const gi = s.start + i;
                    const st = statusFor(gi);
                    const active = gi === idx;
                    return (
                      <button
                        key={gi}
                        onClick={() => goto(gi)}
                        className={`h-8 text-[11px] rounded font-semibold ${statusClass[st]} ${active ? "ring-2 ring-primary" : ""}`}
                      >
                        {gi + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {confirming && (
        <div className="fixed inset-0 z-50 bg-background/80 flex items-center justify-center p-4">
          <div className="glow-card rounded-2xl p-6 max-w-md w-full">
            <div className="font-semibold text-lg mb-1">Submit test?</div>
            <div className="text-sm text-muted-foreground mb-4">
              Answered: {answers.filter((a) => a !== null).length} · Not answered: {answers.filter((a) => a === null).length} · Marked: {marked.filter(Boolean).length}
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setConfirming(false)} className="px-4 py-2 rounded-lg bg-secondary text-sm">Cancel</button>
              <button onClick={submit} className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold">Submit Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ---------- RESULT VIEW ----------
const ResultView = ({ cfg }: { cfg: MockTestConfig }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [ai, setAi] = useState<AiReport | null>(null);
  const [aiErr, setAiErr] = useState<string | null>(null);
  const [reviewIdx, setReviewIdx] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(`mock-result:${cfg.id}`);
      if (raw) setResult(JSON.parse(raw));
    } catch {}
  }, [cfg.id]);

  useEffect(() => {
    if (!result) return;
    const chapterList = Object.values(result.chapterStats) as any[];
    const withAcc = chapterList.map((c) => ({ ...c, accuracy: c.attempted ? Math.round((c.correct / c.attempted) * 100) : 0 }));
    const weak = [...withAcc].sort((a, b) => a.accuracy - b.accuracy).slice(0, 5).map((c) => c.chapterName);
    const strong = [...withAcc].sort((a, b) => b.accuracy - a.accuracy).slice(0, 3).map((c) => c.chapterName);
    const subjectStats = result.subjectStats.map((s: any) => ({
      name: s.name, correct: s.correct, total: s.count,
      accuracy: s.attempted ? Math.round((s.correct / s.attempted) * 100) : 0,
      timeSeconds: Math.round(result.timeSeconds * (s.count / result.questions.length)),
    }));
    setAiLoading(true); setAiErr(null);
    supabase.functions.invoke("mock-analysis", {
      body: {
        stream: result.stream, title: result.title,
        totalMarks: result.totalMarks, obtainedMarks: result.obtainedMarks, percentage: result.percentage,
        timeSeconds: result.timeSeconds, subjectStats,
        weakChapters: weak, strongChapters: strong,
      },
    }).then(({ data, error }) => {
      if (error) throw error;
      setAi(data as AiReport);
    }).catch((e) => setAiErr(e?.message ?? "Couldn't generate AI report"))
      .finally(() => setAiLoading(false));
  }, [result]);

  if (!result) {
    return (
      <div className="max-w-[900px] mx-auto glow-card rounded-3xl p-8 text-center">
        <AlertCircle className="size-10 text-amber-400 mx-auto mb-3" />
        <div className="font-semibold text-lg mb-1">No result found</div>
        <div className="text-sm text-muted-foreground mb-4">Please attempt the test to view your analysis.</div>
        <button onClick={() => navigate(`/mock-tests/${cfg.id}`)} className="px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold">Start Test</button>
      </div>
    );
  }

  const accuracy = result.attempted ? Math.round((result.correct / result.attempted) * 100) : 0;
  // Rough rank estimate — pct → band
  const rank = result.percentage >= 90 ? "Top 1% (Rank 1–2,000)"
    : result.percentage >= 80 ? "Top 5% (Rank 2,001–10,000)"
    : result.percentage >= 65 ? "Top 15% (Rank 10,001–30,000)"
    : result.percentage >= 50 ? "Top 30% (Rank 30,001–70,000)"
    : "Below 50% (Rank 70,000+)";

  const stat = (label: string, value: any, sub?: string) => (
    <div className="glow-card rounded-2xl p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {sub && <div className="text-[10px] text-muted-foreground mt-1">{sub}</div>}
    </div>
  );

  const chapterList = Object.entries(result.chapterStats).map(([k, c]: any) => ({
    key: k, ...c,
    accuracy: c.attempted ? Math.round((c.correct / c.attempted) * 100) : 0,
  }));

  const rating = (acc: number) =>
    acc >= 85 ? { label: "Excellent", cls: "bg-emerald-500/20 text-emerald-300" }
    : acc >= 70 ? { label: "Good", cls: "bg-blue-500/20 text-blue-300" }
    : acc >= 50 ? { label: "Average", cls: "bg-amber-500/20 text-amber-300" }
    : { label: "Needs Improvement", cls: "bg-rose-500/20 text-rose-300" };

  const heatColor = (acc: number) =>
    acc >= 85 ? "bg-emerald-500/80" : acc >= 70 ? "bg-blue-500/80" : acc >= 50 ? "bg-amber-500/80" : acc >= 25 ? "bg-rose-500/80" : "bg-secondary/60";

  const maxSubjMarks = Math.max(...result.subjectStats.map((s: any) => s.count * s.marks));

  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="text-xs text-primary uppercase tracking-wide font-semibold">{result.stream} Mock Result</div>
          <h1 className="text-3xl font-bold">{result.title}</h1>
        </div>
        <button onClick={() => navigate("/mock-tests")} className="px-4 py-2 rounded-lg bg-secondary text-sm">Back to Mock Tests</button>
      </div>

      {/* Score summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {stat("Overall Score", `${result.obtainedMarks}/${result.totalMarks}`)}
        {stat("Percentage", `${result.percentage}%`)}
        {stat("Accuracy", `${accuracy}%`)}
        {stat("Time Taken", `${Math.round(result.timeSeconds / 60)}m`, `of ${result.durationMin}m`)}
        {stat("Rank Estimate", rank)}
        {stat("Attempted", result.attempted, `of ${result.questions.length}`)}
        {stat("Correct", result.correct)}
        {stat("Incorrect", result.incorrect)}
        {stat("Skipped", result.skipped)}
        {stat("Pass/Fail", result.percentage >= 40 ? "PASS" : "FAIL")}
      </div>

      {/* Subject analysis + comparison chart */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glow-card rounded-3xl p-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Target className="size-5 text-primary" /> Subject Analysis</h2>
          <div className="space-y-3">
            {result.subjectStats.map((s: any) => {
              const acc = s.attempted ? Math.round((s.correct / s.attempted) * 100) : 0;
              const chs = chapterList.filter((c) => c.subject === s.name);
              const strong = [...chs].sort((a, b) => b.accuracy - a.accuracy).slice(0, 2).map((c) => c.chapterName);
              const weak = [...chs].sort((a, b) => a.accuracy - b.accuracy).slice(0, 2).map((c) => c.chapterName);
              return (
                <div key={s.code} className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-sm text-muted-foreground">{s.obtained}/{s.count * s.marks} marks · {acc}% acc</div>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-primary" style={{ width: `${acc}%` }} />
                  </div>
                  <div className="text-xs text-muted-foreground grid sm:grid-cols-2 gap-1">
                    <div><TrendingUp className="inline size-3 text-emerald-400 mr-1" />Strong: {strong.join(", ") || "—"}</div>
                    <div><TrendingDown className="inline size-3 text-rose-400 mr-1" />Weak: {weak.join(", ") || "—"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glow-card rounded-3xl p-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><BarChart3 className="size-5 text-primary" /> Subject Comparison</h2>
          <div className="space-y-4">
            {result.subjectStats.map((s: any) => {
              const w = (s.obtained / (maxSubjMarks || 1)) * 100;
              return (
                <div key={s.code}>
                  <div className="flex justify-between text-xs mb-1"><span>{s.name}</span><span>{s.obtained} marks</span></div>
                  <div className="h-3 bg-secondary/40 rounded-full overflow-hidden"><div className="h-full bg-gradient-primary" style={{ width: `${w}%` }} /></div>
                </div>
              );
            })}
          </div>

          <h3 className="text-sm font-semibold mt-6 mb-2">Accuracy Overview</h3>
          <div className="flex items-end gap-2 h-32">
            {result.subjectStats.map((s: any) => {
              const acc = s.attempted ? Math.round((s.correct / s.attempted) * 100) : 0;
              return (
                <div key={s.code} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-gradient-primary rounded-t" style={{ height: `${acc}%` }} />
                  <div className="text-[10px] text-muted-foreground text-center">{s.name.slice(0, 4)}<br />{acc}%</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chapter-wise analysis */}
      <div className="glow-card rounded-3xl p-5">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><BookOpen className="size-5 text-primary" /> Chapter-wise Analysis</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs text-muted-foreground border-b border-border">
              <tr><th className="text-left py-2 pr-3">Chapter</th><th className="pr-3">Attempted</th><th className="pr-3">Correct</th><th className="pr-3">Incorrect</th><th className="pr-3">Accuracy</th><th>Rating</th></tr>
            </thead>
            <tbody>
              {chapterList.map((c) => {
                const r = rating(c.accuracy);
                return (
                  <tr key={c.key} className="border-b border-border/50">
                    <td className="py-2 pr-3"><span className="text-muted-foreground text-xs">{c.subject} ·</span> {c.chapterName}</td>
                    <td className="text-center pr-3">{c.attempted}/{c.total}</td>
                    <td className="text-center pr-3 text-emerald-400">{c.correct}</td>
                    <td className="text-center pr-3 text-rose-400">{c.incorrect}</td>
                    <td className="text-center pr-3">{c.accuracy}%</td>
                    <td className="text-center"><span className={`text-[10px] px-2 py-1 rounded-full ${r.cls}`}>{r.label}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold mt-6 mb-3">Chapter Heatmap</h3>
        <div className="flex flex-wrap gap-1.5">
          {chapterList.map((c) => (
            <div
              key={c.key}
              title={`${c.chapterName} — ${c.accuracy}%`}
              className={`h-9 w-9 rounded-md ${heatColor(c.accuracy)} flex items-center justify-center text-[10px] text-white font-semibold`}
            >
              {c.accuracy}
            </div>
          ))}
        </div>
      </div>

      {/* AI Report */}
      <div className="glow-card rounded-3xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-lg font-bold">AI Performance Report</h2>
        </div>
        {aiLoading && <div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" /> Analyzing your performance…</div>}
        {aiErr && <div className="text-sm text-rose-400 flex items-center gap-2"><AlertCircle className="size-4" /> {aiErr}</div>}
        {ai && (
          <div className="space-y-4 text-sm">
            {ai.overall && <p className="text-foreground leading-relaxed">{ai.overall}</p>}
            <div className="grid md:grid-cols-2 gap-3">
              {ai.strongSubjects?.length ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                  <div className="text-xs font-semibold text-emerald-300 mb-1">Strong Subjects</div>
                  <div className="text-sm">{ai.strongSubjects.join(", ")}</div>
                </div>
              ) : null}
              {ai.weakSubjects?.length ? (
                <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3">
                  <div className="text-xs font-semibold text-rose-300 mb-1">Weak Subjects</div>
                  <div className="text-sm">{ai.weakSubjects.join(", ")}</div>
                </div>
              ) : null}
              {ai.weakChapters?.length ? (
                <div className="bg-secondary/40 rounded-xl p-3">
                  <div className="text-xs font-semibold mb-1">Weak Chapters</div>
                  <div className="text-sm">{ai.weakChapters.join(", ")}</div>
                </div>
              ) : null}
              {ai.topicsToRevise?.length ? (
                <div className="bg-secondary/40 rounded-xl p-3">
                  <div className="text-xs font-semibold mb-1">Topics to Revise</div>
                  <div className="text-sm">{ai.topicsToRevise.join(", ")}</div>
                </div>
              ) : null}
              {ai.suggestedNotes?.length ? (
                <div className="bg-secondary/40 rounded-xl p-3">
                  <div className="text-xs font-semibold mb-1">Suggested Notes</div>
                  <div className="text-sm">{ai.suggestedNotes.join(", ")}</div>
                </div>
              ) : null}
              {ai.suggestedQuizzes?.length ? (
                <div className="bg-secondary/40 rounded-xl p-3">
                  <div className="text-xs font-semibold mb-1">Suggested Quizzes</div>
                  <div className="text-sm">{ai.suggestedQuizzes.join(", ")}</div>
                </div>
              ) : null}
              {ai.suggestedFlashcards?.length ? (
                <div className="bg-secondary/40 rounded-xl p-3">
                  <div className="text-xs font-semibold mb-1">Suggested Flashcards</div>
                  <div className="text-sm">{ai.suggestedFlashcards.join(", ")}</div>
                </div>
              ) : null}
              {ai.recommendedMock ? (
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-3">
                  <div className="text-xs font-semibold text-primary mb-1">Recommended Next Mock</div>
                  <div className="text-sm">{ai.recommendedMock}</div>
                </div>
              ) : null}
            </div>
            {ai.studyAdvice?.length ? (
              <div>
                <div className="text-sm font-semibold mb-2">Personalised Study Advice</div>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {ai.studyAdvice.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Answer review */}
      <div className="glow-card rounded-3xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-lg font-bold">Answer Review</h2>
        </div>
        <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-1.5 mb-4">
          {result.questions.map((q: MockQuestion, i: number) => {
            const a = result.answers[i];
            const correct = a === q.answer;
            const cls = a === null ? "bg-secondary/60 text-muted-foreground" : correct ? "bg-emerald-500/80 text-white" : "bg-rose-500/80 text-white";
            return (
              <button key={i} onClick={() => setReviewIdx(i)} className={`h-8 rounded text-[11px] font-semibold ${cls}`}>{i + 1}</button>
            );
          })}
        </div>
        {reviewIdx !== null && (() => {
          const q = result.questions[reviewIdx] as MockQuestion;
          const a = result.answers[reviewIdx];
          const correct = a === q.answer;
          return (
            <div className="bg-secondary/30 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-muted-foreground">Q{reviewIdx + 1} · {q.subjectName} · {q.chapterName}</div>
                <div className={`text-xs font-semibold ${diffColor[q.difficulty]}`}>{q.difficulty}</div>
              </div>
              <div className="font-medium mb-3">{q.q}</div>
              <div className="space-y-2 mb-3">
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.answer;
                  const isChosen = i === a;
                  return (
                    <div key={i} className={`flex items-center gap-2 p-2 rounded-lg text-sm ${
                      isCorrect ? "bg-emerald-500/15 border border-emerald-500/30"
                        : isChosen ? "bg-rose-500/15 border border-rose-500/30" : "bg-background/40"
                    }`}>
                      {isCorrect ? <Check className="size-4 text-emerald-400" /> : isChosen ? <X className="size-4 text-rose-400" /> : <span className="size-4" />}
                      <span>{opt}</span>
                      {isChosen && <span className="ml-auto text-[10px] uppercase text-muted-foreground">Your answer</span>}
                      {isCorrect && !isChosen && <span className="ml-auto text-[10px] uppercase text-emerald-400">Correct</span>}
                    </div>
                  );
                })}
              </div>
              <div className={`text-xs font-semibold mb-2 ${correct ? "text-emerald-400" : a === null ? "text-muted-foreground" : "text-rose-400"}`}>
                {a === null ? "Not attempted" : correct ? "Correct" : "Incorrect"}
              </div>
              {q.explanation && (
                <div className="text-sm bg-background/40 rounded-lg p-3">
                  <div className="text-xs font-semibold text-primary mb-1">Detailed Solution — why the correct answer is correct</div>
                  <div className="text-muted-foreground">{q.explanation}</div>
                </div>
              )}
              <div className="text-xs mt-2 text-muted-foreground">Concept tested: <span className="text-foreground">{q.concept}</span></div>
              <div className="flex justify-between mt-3">
                <button onClick={() => setReviewIdx(Math.max(0, reviewIdx - 1))} className="text-xs px-3 py-1.5 rounded-lg bg-secondary flex items-center gap-1"><ArrowLeft className="size-3" /> Prev</button>
                <button onClick={() => setReviewIdx(Math.min(result.questions.length - 1, reviewIdx + 1))} className="text-xs px-3 py-1.5 rounded-lg bg-secondary flex items-center gap-1">Next <ChevronRight className="size-3" /></button>
              </div>
            </div>
          );
        })()}
        {reviewIdx === null && <div className="text-sm text-muted-foreground">Click a question number above to view its detailed solution.</div>}
      </div>
    </div>
  );
};

// ---------- Route entry points ----------
const MockTests = () => <ListView />;

export const MockTestExam = () => {
  const { id } = useParams();
  const cfg = id ? getMockTest(id) : undefined;
  useEffect(() => { document.title = `${cfg?.title ?? "Mock Test"} · MindNest`; }, [cfg]);
  if (!cfg) return <div className="text-muted-foreground">Mock test not found.</div>;
  return <ExamView cfg={cfg} />;
};

export const MockTestResult = () => {
  const { id } = useParams();
  const cfg = id ? getMockTest(id) : undefined;
  useEffect(() => { document.title = `${cfg?.title ?? "Mock Test"} Result · MindNest`; }, [cfg]);
  if (!cfg) return <div className="text-muted-foreground">Mock test not found.</div>;
  return <ResultView cfg={cfg} />;
};

export default MockTests;
