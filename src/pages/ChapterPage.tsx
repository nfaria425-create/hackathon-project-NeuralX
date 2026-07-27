import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  Target,
  FileText,
  Sigma,
  BookMarked,
  ListChecks,
  HelpCircle,
  Layers,
  History,
  RotateCw,
  MessageSquareText,
  Check,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { findChapter, library } from "@/data/library";

const subjectBg: Record<string, string> = {
  P: "bg-[hsl(var(--subject-physics))]",
  C: "bg-[hsl(var(--subject-chemistry))]",
  M: "bg-[hsl(var(--subject-math))]",
  B: "bg-[hsl(var(--subject-biology))]",
};

const ChapterPage = () => {
  const { subject = "", chapter = "" } = useParams();
  const navigate = useNavigate();
  const chapterData = useMemo(() => findChapter(subject, chapter), [subject, chapter]);
  const subjectData = library.find((s) => s.code === subject);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  useEffect(() => {
    document.title = chapterData
      ? `${chapterData.name} · MindNest`
      : "Chapter · MindNest";
  }, [chapterData]);

  if (!chapterData || !subjectData) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h2 className="text-xl font-semibold mb-2">Chapter not found</h2>
        <Link to="/notes" className="text-primary underline">
          Back to Learning Library
        </Link>
      </div>
    );
  }

  const askAI = () => {
    const q = encodeURIComponent(`Explain the chapter "${chapterData.name}" from ${subjectData.name} (CET Std XI).`);
    navigate(`/tutor?q=${q}`);
  };

  return (
    <div className="max-w-5xl mx-auto pb-16 animate-in fade-in duration-300">
      {/* Breadcrumb + back */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Link to="/notes" className="flex items-center gap-1 hover:text-primary">
          <ArrowLeft className="size-4" /> Library
        </Link>
        <span>/</span>
        <span>{subjectData.name}</span>
        <span>/</span>
        <span className="text-foreground">{chapterData.name}</span>
      </div>

      {/* Hero */}
      <div className="glow-card rounded-2xl p-8 mb-6 border border-border/50 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`size-12 rounded-xl ${subjectBg[subject]} flex items-center justify-center font-bold text-white text-lg shrink-0`}
          >
            {subject}
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              {subjectData.name}
            </div>
            <h1 className="text-3xl font-bold mb-2">{chapterData.name}</h1>
            <p className="text-muted-foreground leading-relaxed">{chapterData.overview}</p>
          </div>
        </div>
        <button
          onClick={askAI}
          className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm glow-primary hover:opacity-90 transition-opacity"
        >
          <MessageSquareText className="size-4" /> Ask AI about this Chapter
        </button>
      </div>

      {/* Objectives */}
      <Section icon={<Target className="size-5 text-primary" />} title="Learning Objectives">
        <ul className="grid sm:grid-cols-2 gap-2">
          {chapterData.objectives.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="size-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mt-0.5 shrink-0">
                {i + 1}
              </span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Accordion type="multiple" defaultValue={["notes", "formulas"]} className="space-y-3">
        {/* Notes */}
        <AccordionCard value="notes" icon={<FileText className="size-5 text-primary" />} title="Notes">
          <article className="prose prose-invert max-w-none prose-p:text-foreground/90 prose-strong:text-primary">
            <ReactMarkdown>{chapterData.notes}</ReactMarkdown>
          </article>
          <p className="text-xs text-muted-foreground italic mt-4">
            Detailed notes can be added here later without changing the layout.
          </p>
        </AccordionCard>

        {/* Formulas */}
        <AccordionCard value="formulas" icon={<Sigma className="size-5 text-primary" />} title="Formula Sheet">
          {chapterData.formulas.length === 0 ? (
            <p className="text-sm text-muted-foreground">No formulas in this chapter.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3">
              {chapterData.formulas.map((f, i) => (
                <div key={i} className="rounded-xl p-4 bg-secondary/40 border border-border/40">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {f.name}
                  </div>
                  <div className="font-mono text-primary text-sm">{f.expr}</div>
                </div>
              ))}
            </div>
          )}
        </AccordionCard>

        {/* Definitions */}
        <AccordionCard value="definitions" icon={<BookMarked className="size-5 text-primary" />} title="Important Definitions">
          <dl className="space-y-3">
            {chapterData.definitions.map((d, i) => (
              <div key={i} className="rounded-xl p-3 bg-secondary/40 border border-border/40">
                <dt className="font-semibold text-primary text-sm">{d.term}</dt>
                <dd className="text-sm text-foreground/80 mt-0.5">{d.meaning}</dd>
              </div>
            ))}
          </dl>
        </AccordionCard>

        {/* Key points */}
        <AccordionCard value="keypoints" icon={<ListChecks className="size-5 text-primary" />} title="Key Points">
          <ul className="space-y-2">
            {chapterData.keyPoints.map((k, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Sparkles className="size-4 text-accent mt-0.5 shrink-0" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </AccordionCard>

        {/* Practice MCQs */}
        <AccordionCard value="mcqs" icon={<HelpCircle className="size-5 text-primary" />} title="Practice Questions">
          <div className="space-y-4">
            {chapterData.mcqs.map((m, qi) => {
              const picked = answers[qi];
              const answered = picked !== undefined;
              return (
                <div key={qi} className="rounded-xl p-4 bg-secondary/40 border border-border/40">
                  <div className="font-medium text-sm mb-3">
                    Q{qi + 1}. {m.q}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {m.options.map((opt, oi) => {
                      const isCorrect = oi === m.answer;
                      const isPicked = oi === picked;
                      const state = !answered
                        ? "bg-background/40 hover:bg-background/70"
                        : isCorrect
                          ? "bg-green-500/20 border-green-500/40"
                          : isPicked
                            ? "bg-red-500/20 border-red-500/40"
                            : "bg-background/30 opacity-70";
                      return (
                        <button
                          key={oi}
                          disabled={answered}
                          onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                          className={`text-left p-2.5 rounded-lg text-sm border border-border/30 transition-all flex items-center gap-2 ${state}`}
                        >
                          {answered && isCorrect && <Check className="size-4 text-green-400" />}
                          {answered && isPicked && !isCorrect && <X className="size-4 text-red-400" />}
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                  {answered && m.explanation && (
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      {m.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </AccordionCard>

        {/* Flashcards */}
        <AccordionCard value="flashcards" icon={<Layers className="size-5 text-primary" />} title="Flashcards">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {chapterData.flashcards.map((c, i) => {
              const isFlipped = !!flipped[i];
              return (
                <button
                  key={i}
                  onClick={() => setFlipped((f) => ({ ...f, [i]: !f[i] }))}
                  className={`min-h-[130px] rounded-xl p-4 text-left border border-border/40 transition-all ${
                    isFlipped
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-secondary/50 hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-wider opacity-70">
                      {isFlipped ? "Answer" : "Question"}
                    </span>
                    <RotateCw className="size-3 opacity-70" />
                  </div>
                  <div className="text-sm font-medium leading-relaxed">
                    {isFlipped ? c.back : c.front}
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground italic mt-3">Tap a card to flip.</p>
        </AccordionCard>

        {/* PYQs */}
        <AccordionCard value="pyqs" icon={<History className="size-5 text-primary" />} title="Previous Year Questions">
          {chapterData.pyqs.length === 0 ? (
            <p className="text-sm text-muted-foreground">No PYQs listed for this chapter.</p>
          ) : (
            <div className="space-y-3">
              {chapterData.pyqs.map((p, i) => (
                <div key={i} className="rounded-xl p-4 bg-secondary/40 border border-border/40">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
                      CET {p.year}
                    </span>
                  </div>
                  <div className="text-sm font-medium mb-1">{p.q}</div>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">Answer: </span>
                    {p.answer}
                  </div>
                </div>
              ))}
            </div>
          )}
        </AccordionCard>
      </Accordion>

      {/* Ask AI CTA */}
      <div className="mt-6 glow-card rounded-2xl p-5 flex items-center justify-between border border-primary/20">
        <div className="flex items-center gap-3">
          <MessageSquareText className="size-5 text-primary" />
          <div>
            <div className="font-semibold text-sm">Need deeper explanation?</div>
            <div className="text-xs text-muted-foreground">
              Chat with the AI tutor about {chapterData.name}.
            </div>
          </div>
        </div>
        <button
          onClick={askAI}
          className="px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm"
        >
          Ask AI
        </button>
      </div>
    </div>
  );
};

const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="glow-card rounded-2xl p-5 mb-3 border border-border/40">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

const AccordionCard = ({
  value,
  icon,
  title,
  children,
}: {
  value: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <AccordionItem
    value={value}
    className="glow-card rounded-2xl border border-border/40 overflow-hidden"
  >
    <AccordionTrigger className="px-5 py-4 hover:no-underline">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-5 pb-5 pt-0">{children}</AccordionContent>
  </AccordionItem>
);

export default ChapterPage;
