import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, Sparkles } from "lucide-react";
import { library } from "@/data/library";

const subjectBg: Record<string, string> = {
  P: "bg-[hsl(var(--subject-physics))]",
  C: "bg-[hsl(var(--subject-chemistry))]",
  M: "bg-[hsl(var(--subject-math))]",
  B: "bg-[hsl(var(--subject-biology))]",
};

const subjectGlow: Record<string, string> = {
  P: "from-[hsl(var(--subject-physics)/0.25)]",
  C: "from-[hsl(var(--subject-chemistry)/0.25)]",
  M: "from-[hsl(var(--subject-math)/0.25)]",
  B: "from-[hsl(var(--subject-biology)/0.25)]",
};

const Notes = () => {
  useEffect(() => {
    document.title = "Learning Library · MindNest";
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="size-7 text-primary" />
        <h1 className="text-3xl font-bold">Learning Library</h1>
      </div>
      <p className="text-muted-foreground mb-8">
        Maharashtra State Board CET · Std XI syllabus · Pick a subject and dive into any chapter.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {library.map((subject) => (
          <section
            key={subject.code}
            className={`glow-card rounded-2xl p-6 bg-gradient-to-br ${subjectGlow[subject.code]} to-transparent border border-border/50`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`size-11 rounded-xl ${subjectBg[subject.code]} flex items-center justify-center font-bold text-white text-lg shadow-lg`}
              >
                {subject.code}
              </div>
              <div>
                <h2 className="text-xl font-bold">{subject.name}</h2>
                <p className="text-xs text-muted-foreground">
                  {subject.chapters.length} chapters
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {subject.chapters.map((chapter, i) => (
                <Link
                  key={chapter.slug}
                  to={`/notes/${subject.code}/${chapter.slug}`}
                  className="group flex items-center justify-between p-3 rounded-xl bg-secondary/40 hover:bg-secondary transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="size-7 shrink-0 rounded-lg bg-background/60 text-xs font-semibold flex items-center justify-center text-muted-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium truncate">{chapter.name}</span>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 glow-card rounded-2xl p-5 flex items-center gap-3 border border-primary/20">
        <Sparkles className="size-5 text-primary" />
        <p className="text-sm text-muted-foreground">
          Every chapter opens a complete learning page — notes, formulas, definitions, practice
          MCQs, flashcards and previous-year questions.
        </p>
      </div>
    </div>
  );
};

export default Notes;
