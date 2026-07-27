import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Calendar, Sparkles, Loader2, AlertCircle } from "lucide-react";

type PlanBlock = { time: string; task: string };
type Plan = { title: string; blocks: PlanBlock[]; weekly_focus?: string[]; tips?: string[] };
type State = { status: "loading" | "empty" | "ready" | "error"; data?: { plan_type: string; plan: Plan }; error?: string };

const Planner = () => {
  const { user } = useAuth();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => { document.title = "Study Planner · MindNest"; }, []);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    setState({ status: "loading" });
    (async () => {
      const { data, error } = await supabase
        .from("planners")
        .select("plan_type, plan")
        .eq("user_id", user.id)
        .maybeSingle();
      if (cancelled) return;
      if (error) { setState({ status: "error", error: error.message }); return; }
      if (!data) { setState({ status: "empty" }); return; }
      setState({ status: "ready", data: data as any });
    })();
    return () => { cancelled = true; };
  }, [user]);

  if (state.status === "loading") {
    return (
      <div className="max-w-2xl mx-auto glow-card rounded-3xl p-10 text-center">
        <Loader2 className="size-8 text-primary mx-auto mb-3 animate-spin" />
        <p className="text-muted-foreground">Loading your plan…</p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="max-w-2xl mx-auto glow-card rounded-3xl p-10 text-center">
        <AlertCircle className="size-10 text-destructive mx-auto mb-3" />
        <h1 className="text-2xl font-bold mb-2">Couldn't load your plan</h1>
        <p className="text-muted-foreground mb-6">{state.error}</p>
        <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary">
          Try again
        </button>
      </div>
    );
  }

  if (state.status === "empty") {
    return (
      <div className="max-w-2xl mx-auto glow-card rounded-3xl p-10 text-center">
        <Sparkles className="size-10 text-primary mx-auto mb-3" />
        <h1 className="text-2xl font-bold mb-2">No plan yet</h1>
        <p className="text-muted-foreground mb-6">Set up your study plan to see your daily schedule.</p>
        <Link to="/onboarding" className="inline-block px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary">
          Create my plan
        </Link>
      </div>
    );
  }

  const p = state.data!.plan;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <Calendar className="size-7 text-primary" />
        <h1 className="text-3xl font-bold">{p.title ?? "Your Study Plan"}</h1>
      </div>
      <p className="text-muted-foreground mb-6 capitalize">{state.data!.plan_type === "ai" ? "AI-personalized" : "Standard"} plan · saved automatically</p>

      <div className="glow-card rounded-3xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Daily Schedule</h2>
        <div className="space-y-3">
          {(p.blocks ?? []).map((b, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/40 border border-border">
              <div className="text-sm font-mono text-primary w-32">{b.time}</div>
              <div className="flex-1 font-medium">{b.task}</div>
            </div>
          ))}
        </div>
      </div>

      {p.weekly_focus && p.weekly_focus.length > 0 && (
        <div className="glow-card rounded-3xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">This Week's Focus</h2>
          <ul className="space-y-2 list-disc list-inside text-foreground/90">
            {p.weekly_focus.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      )}

      {p.tips && p.tips.length > 0 && (
        <div className="glow-card rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-4">AI Tips</h2>
          <ul className="space-y-2 list-disc list-inside text-foreground/90">
            {p.tips.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <Link to="/onboarding" className="text-sm text-primary hover:underline">↻ Regenerate plan (only if you choose)</Link>
      </div>
    </div>
  );
};

export default Planner;
