import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Sparkles, ListChecks, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const STANDARD_PLAN = {
  title: "Standard CET Study Planner",
  blocks: [
    { time: "06:30 - 07:15", task: "Physics — Vectors (concept + notes)" },
    { time: "07:30 - 08:00", task: "Chemistry — Chemical Bonding (notes review)" },
    { time: "09:00 - 09:30", task: "Mathematics practice quiz" },
    { time: "10:00 - 10:20", task: "Biology flashcards (20 cards)" },
    { time: "16:00 - 16:20", task: "Revision — yesterday's topics" },
    { time: "17:00 - 18:00", task: "Daily mock test + review" },
    { time: "18:00 - 18:10", task: "Break — hydrate & rest eyes" },
  ],
  weekly_focus: [
    "Complete 2 Physics chapters",
    "Finish Chemistry NCERT organic module",
    "Attempt 1 full-length PCM/PCB mock",
    "Revise weak chapters twice",
  ],
  tips: [
    "Do a 10-min recap before sleeping",
    "Attempt a mixed quiz every alternate day",
    "Solve at least 1 PYQ set per week",
  ],
};

const Onboarding = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<"choice" | "ai">("choice");
  const [answers, setAnswers] = useState({
    target: "",
    hours: "",
    timing: "",
    weak: "",
    strong: "",
    school: "",
    examDate: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => { document.title = "Get Started · MindNest"; }, []);

  const useStandard = async () => {
    if (!user) return;
    setLoading(true);
    await supabase.from("planners").upsert({ user_id: user.id, plan_type: "standard", plan: STANDARD_PLAN });
    // clear today's tasks so dashboard regenerates from new plan
    const today = new Date().toISOString().slice(0, 10);
    await supabase.from("study_tasks").delete().eq("user_id", user.id).eq("task_date", today);
    await supabase.from("profiles").update({ onboarded: true }).eq("id", user.id);
    toast.success("Standard plan ready!");
    navigate("/");
  };

  const generateAi = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-planner", { body: { answers } });
      if (error) throw error;
      await supabase.from("planners").upsert({ user_id: user.id, plan_type: "ai", plan: data.plan });
      const today = new Date().toISOString().slice(0, 10);
      await supabase.from("study_tasks").delete().eq("user_id", user.id).eq("task_date", today);
      await supabase.from("profiles").update({ onboarded: true }).eq("id", user.id);
      toast.success("Your personalized plan is ready!");
      navigate("/");
    } catch (e: any) {
      toast.error(e.message ?? "Couldn't generate plan");
    } finally {
      setLoading(false);
    }
  };

  if (step === "choice") {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-10">
            <div className="size-14 rounded-2xl bg-gradient-primary glow-primary mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="size-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">How would you like to study?</h1>
            <p className="text-muted-foreground">Choose the planner that will drive your dashboard.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <button onClick={useStandard} disabled={loading} className="glow-card rounded-3xl p-8 text-left hover:border-primary/60 transition-all">
              <div className="size-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <ListChecks className="size-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">📘 Standard CET Study Planner</h2>
              <p className="text-sm text-muted-foreground">Structured routine: daily schedule, weekly goals, revision, quizzes, flashcards, mock tests and break reminders.</p>
            </button>
            <button onClick={() => setStep("ai")} className="glow-card rounded-3xl p-8 text-left hover:border-primary/60 transition-all bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 glow-primary">
                <Sparkles className="size-6 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold mb-2">🤖 Personalized AI Study Planner</h2>
              <p className="text-sm text-muted-foreground">Answer a few questions and let AI build a plan around your target, timings and weak/strong subjects.</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full glow-card rounded-3xl p-8">
        <h1 className="text-2xl font-bold mb-1">Tell me about your goals</h1>
        <p className="text-muted-foreground mb-6">Your dashboard will show today's tasks from this plan.</p>
        <div className="space-y-4">
          {[
            { k: "target", label: "Target CET score", placeholder: "e.g. 150+" },
            { k: "hours", label: "Available daily study hours", placeholder: "e.g. 5 hours" },
            { k: "timing", label: "Preferred study timings", placeholder: "e.g. Morning 6-9, Evening 5-8" },
            { k: "weak", label: "Weak subjects / topics", placeholder: "e.g. Organic Chemistry, Vectors" },
            { k: "strong", label: "Strong subjects", placeholder: "e.g. Mathematics, Physics" },
            { k: "school", label: "School / Coaching timings", placeholder: "e.g. School 10-4, Coaching 6-8" },
            { k: "examDate", label: "CET exam date", placeholder: "e.g. May 2027" },
          ].map((f) => (
            <div key={f.k}>
              <label className="text-sm font-medium mb-1 block">{f.label}</label>
              <input
                value={(answers as any)[f.k]}
                onChange={(e) => setAnswers({ ...answers, [f.k]: e.target.value })}
                placeholder={f.placeholder}
                className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-primary outline-none"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={() => setStep("choice")} className="px-5 py-3 rounded-xl border border-border hover:bg-secondary">Back</button>
          <button
            onClick={generateAi}
            disabled={loading}
            className="flex-1 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 className="size-4 animate-spin" /> Generating…</> : "Generate my plan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
