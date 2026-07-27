import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Calendar, BarChart3, Trophy, Flame, Check, Circle, Clock, SkipForward, CalendarPlus, Sparkles, RefreshCw } from "lucide-react";
import { levelProgress, xpForNextLevel, awardXp } from "@/lib/xp";
import { toast } from "sonner";

type Profile = { display_name: string; xp: number; level: number; current_streak: number };
type Task = { id: string; title: string; time_slot: string | null; completed: boolean; sort_order: number };
type Subj = { id: string; name: string; code: string; color: string };
type Mock = { subject_id: string; score: number };
type PlanBlock = { time: string; task: string };
type PlannerRow = { plan_type: string; plan: { title?: string; blocks?: PlanBlock[] } };

const subjectGradient: Record<string, string> = {
  P: "from-blue-500 to-blue-400",
  C: "from-fuchsia-500 to-pink-500",
  M: "from-emerald-500 to-teal-400",
  B: "from-orange-500 to-amber-500",
};
const subjectBg: Record<string, string> = {
  P: "bg-blue-500",
  C: "bg-fuchsia-500",
  M: "bg-emerald-500",
  B: "bg-orange-500",
};

const XP_PER_TASK = 20;
const today = () => new Date().toISOString().slice(0, 10);
const tomorrow = () => new Date(Date.now() + 86400000).toISOString().slice(0, 10);

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [subjects, setSubjects] = useState<Subj[]>([]);
  const [mocks, setMocks] = useState<Record<string, number>>({});
  const [planner, setPlanner] = useState<PlannerRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Dashboard · MindNest CET Prep";
    if (!user) return;
    (async () => {
      setLoading(true);
      const d = today();
      const [{ data: p }, { data: t }, { data: s }, { data: m }, { data: pl }] = await Promise.all([
        supabase.from("profiles").select("display_name,xp,level,current_streak").eq("id", user.id).maybeSingle(),
        supabase.from("study_tasks").select("id,title,time_slot,completed,sort_order").eq("user_id", user.id).eq("task_date", d).order("sort_order"),
        supabase.from("subjects").select("id,name,code,color").order("sort_order"),
        supabase.from("mock_performance").select("subject_id,score").eq("user_id", user.id),
        supabase.from("planners").select("plan_type,plan").eq("user_id", user.id).maybeSingle(),
      ]);
      setProfile(p as any);
      setSubjects(s ?? []);
      setMocks(Object.fromEntries((m ?? []).map((x: Mock) => [x.subject_id, x.score])));
      setPlanner(pl as any);

      let todays = (t ?? []) as Task[];
      // Seed today's tasks from the ACTIVE planner (only if empty)
      if (todays.length === 0 && pl && (pl as any).plan?.blocks?.length) {
        const blocks = ((pl as any).plan.blocks as PlanBlock[]).map((b, i) => ({
          user_id: user.id,
          task_date: d,
          title: b.task,
          time_slot: b.time,
          sort_order: i + 1,
        }));
        const { data: ins } = await supabase.from("study_tasks").insert(blocks).select("id,title,time_slot,completed,sort_order").order("sort_order");
        todays = (ins ?? []) as Task[];
      }
      setTasks(todays);
      setLoading(false);
    })();
  }, [user]);

  const refreshFromPlanner = async () => {
    if (!user || !planner?.plan?.blocks?.length) return;
    const d = today();
    await supabase.from("study_tasks").delete().eq("user_id", user.id).eq("task_date", d);
    const blocks = planner.plan.blocks.map((b, i) => ({
      user_id: user.id, task_date: d, title: b.task, time_slot: b.time, sort_order: i + 1,
    }));
    const { data: ins } = await supabase.from("study_tasks").insert(blocks).select("id,title,time_slot,completed,sort_order").order("sort_order");
    setTasks((ins ?? []) as Task[]);
    toast.success("Today's tasks refreshed from your planner");
  };

  const toggle = async (task: Task) => {
    if (!user) return;
    const nowCompleted = !task.completed;
    setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, completed: nowCompleted } : t)));
    await supabase.from("study_tasks").update({ completed: nowCompleted }).eq("id", task.id);
    if (nowCompleted) {
      await awardXp(user.id, XP_PER_TASK);
      const { data: p } = await supabase.from("profiles").select("display_name,xp,level,current_streak").eq("id", user.id).maybeSingle();
      setProfile(p as any);
      toast.success(`+${XP_PER_TASK} XP`);
    }
  };

  const skip = async (task: Task) => {
    if (!user) return;
    await supabase.from("study_tasks").delete().eq("id", task.id);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    toast("Task skipped");
  };

  const moveToTomorrow = async (task: Task) => {
    if (!user) return;
    await supabase.from("study_tasks").update({ task_date: tomorrow(), completed: false }).eq("id", task.id);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    toast.success("Moved to tomorrow");
  };

  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const pct = total ? Math.round((completed / total) * 100) : 0;
  const xpToday = completed * XP_PER_TASK;
  const nextTask = useMemo(() => tasks.find((t) => !t.completed), [tasks]);
  const xp = profile?.xp ?? 0;
  const level = profile?.level ?? 1;
  const planLabel = planner?.plan_type === "ai" ? "🤖 AI Planner" : planner?.plan_type === "standard" ? "📘 Standard Planner" : null;

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Welcome back, {profile?.display_name ?? "Student"}! <span className="inline-block animate-pulse">👋</span>
          </h1>
          <p className="text-muted-foreground mt-1">Let's crush your CET preparation today!</p>
        </div>
        <div className="glow-card rounded-2xl px-5 py-3 flex items-center gap-4">
          <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary">
            <Trophy className="size-6 text-primary-foreground" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Your Level</div>
            <div className="text-xl font-bold text-gradient">Level {level}</div>
          </div>
          <div className="border-l border-border pl-4 flex items-center gap-2">
            <Flame className="size-5 text-orange-400" />
            <div>
              <div className="text-xs text-muted-foreground">Streak</div>
              <div className="font-bold">{profile?.current_streak ?? 0} days</div>
            </div>
          </div>
        </div>
      </div>

      {/* XP bar */}
      <div className="glow-card rounded-2xl p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">XP Progress</span>
          <span className="text-xs text-muted-foreground">{xp} XP · {xpForNextLevel(xp)} XP to Level {level + 1}</span>
        </div>
        <div className="h-3 rounded-full bg-secondary overflow-hidden">
          <div className="h-full bg-gradient-primary transition-all" style={{ width: `${levelProgress(xp)}%` }} />
        </div>
      </div>

      {/* Today's Tasks + stats */}
      {!loading && !planner && (
        <div className="glow-card rounded-3xl p-8 text-center">
          <Sparkles className="size-10 text-primary mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Set up your Study Planner</h2>
          <p className="text-muted-foreground mb-5">Your dashboard shows today's tasks from your active planner.</p>
          <Link to="/onboarding" className="inline-block px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow-primary">
            Choose your planner
          </Link>
        </div>
      )}

      {planner && (
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="glow-card rounded-2xl p-5">
            <div className="text-xs text-muted-foreground">Today's Progress</div>
            <div className="text-2xl font-bold mt-1">{completed}/{total} <span className="text-sm text-muted-foreground font-normal">tasks · {pct}%</span></div>
            <div className="h-2 mt-3 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-gradient-primary transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
          <div className="glow-card rounded-2xl p-5">
            <div className="text-xs text-muted-foreground">XP Earned Today</div>
            <div className="text-2xl font-bold mt-1 text-gradient">+{xpToday} XP</div>
            <div className="text-xs text-muted-foreground mt-2">Streak · {profile?.current_streak ?? 0} days 🔥</div>
          </div>
          <div className="glow-card rounded-2xl p-5">
            <div className="text-xs text-muted-foreground">Next Scheduled Task</div>
            <div className="text-sm font-semibold mt-1 line-clamp-2">{nextTask ? nextTask.title : "🎉 All done for today!"}</div>
            {nextTask?.time_slot && <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Clock className="size-3" />{nextTask.time_slot}</div>}
          </div>
        </div>
      )}

      {/* Two-column main */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's tasks */}
        {planner && (
          <div className="glow-card rounded-3xl p-6">
            <div className="flex items-start justify-between mb-2 gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Calendar className="size-5 text-primary" />
                  <h2 className="text-xl font-bold">Today's Tasks</h2>
                  {planLabel && <span className="text-xs px-2 py-0.5 rounded-md bg-primary/15 text-primary">{planLabel}</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-1">From your active planner</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={refreshFromPlanner} title="Refresh from planner" className="p-2 rounded-lg hover:bg-secondary">
                  <RefreshCw className="size-4 text-muted-foreground" />
                </button>
                <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary font-semibold text-sm">
                  {completed}/{total}
                </span>
              </div>
            </div>
            <div className="space-y-3 mt-5">
              {tasks.length === 0 && (
                <p className="text-sm text-muted-foreground py-4 text-center">No tasks for today. Refresh from planner or regenerate.</p>
              )}
              {tasks.map((t) => (
                <div
                  key={t.id}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${
                    t.completed ? "bg-secondary/30 border-border opacity-70" : "bg-secondary/40 border-border hover:border-primary/50"
                  }`}
                >
                  <button onClick={() => toggle(t)} className="shrink-0">
                    {t.completed ? (
                      <div className="size-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="size-4 text-emerald-400" />
                      </div>
                    ) : (
                      <Circle className="size-7 text-muted-foreground" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium ${t.completed ? "line-through text-muted-foreground" : ""}`}>{t.title}</div>
                    {t.time_slot && (
                      <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Clock className="size-3" /> {t.time_slot}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => moveToTomorrow(t)} title="Move to tomorrow" className="p-2 rounded-lg hover:bg-secondary">
                      <CalendarPlus className="size-4 text-muted-foreground" />
                    </button>
                    <button onClick={() => skip(t)} title="Skip task" className="p-2 rounded-lg hover:bg-secondary">
                      <SkipForward className="size-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {planner.plan_type === "ai" && (
              <button
                onClick={() => navigate("/onboarding")}
                className="mt-5 w-full py-2 rounded-xl border border-border text-sm hover:bg-secondary flex items-center justify-center gap-2"
              >
                <Sparkles className="size-4" /> Regenerate AI planner
              </button>
            )}
          </div>
        )}

        {/* Mock performance */}
        <div className="glow-card rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="size-5 text-primary" />
            <h2 className="text-xl font-bold">Mock CET Exam Performance</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">Your recent test scores across subjects</p>
          <div className="space-y-5">
            {subjects.map((s) => {
              const score = mocks[s.id] ?? 0;
              return (
                <div key={s.id}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`size-10 rounded-xl ${subjectBg[s.code]} flex items-center justify-center font-bold text-white`}>
                      {s.code}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{score > 0 ? `Score: ${score}%` : "Not attempted"}</div>
                    </div>
                    <div className="text-sm font-bold">{score}%</div>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${subjectGradient[s.code]} transition-all`} style={{ width: `${Math.max(score, 4)}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Link to="/quizzes" className="glow-card rounded-2xl p-6 hover:border-primary/60 transition-all">
          <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-3 glow-primary">
            <Trophy className="size-6 text-primary-foreground" />
          </div>
          <div className="font-semibold">Take a Quiz</div>
          <div className="text-sm text-muted-foreground">Earn XP for every correct answer</div>
        </Link>
        <Link to="/tutor" className="glow-card rounded-2xl p-6 hover:border-primary/60 transition-all">
          <div className="size-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center mb-3">
            <BarChart3 className="size-6 text-white" />
          </div>
          <div className="font-semibold">AI Tutor</div>
          <div className="text-sm text-muted-foreground">Ask any doubt, get instant help</div>
        </Link>
        <Link to="/planner" className="glow-card rounded-2xl p-6 hover:border-primary/60 transition-all">
          <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-3">
            <Calendar className="size-6 text-white" />
          </div>
          <div className="font-semibold">Study Planner</div>
          <div className="text-sm text-muted-foreground">Your personalized schedule</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
