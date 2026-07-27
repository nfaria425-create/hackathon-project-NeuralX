import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { BarChart3, Trophy, Flame, Target } from "lucide-react";

type Attempt = { score: number; total: number; topic_id: string | null; created_at: string };

const Analytics = () => {
  const { user } = useAuth();
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [topicNames, setTopicNames] = useState<Record<string, string>>({});

  useEffect(() => { document.title = "Analytics · MindNest"; }, []);
  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: a }, { data: p }, { data: t }] = await Promise.all([
        supabase.from("quiz_attempts").select("score,total,topic_id,created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20),
        supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
        supabase.from("topics").select("id,name"),
      ]);
      setAttempts(a ?? []); setProfile(p);
      setTopicNames(Object.fromEntries((t ?? []).map((x: any) => [x.id, x.name])));
    })();
  }, [user]);

  const totalQ = attempts.reduce((s, a) => s + a.total, 0);
  const totalC = attempts.reduce((s, a) => s + a.score, 0);
  const accuracy = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

  const stats = [
    { label: "Accuracy", value: `${accuracy}%`, icon: Target, color: "from-blue-500 to-cyan-400" },
    { label: "Quizzes Taken", value: attempts.length, icon: Trophy, color: "from-fuchsia-500 to-pink-500" },
    { label: "Total XP", value: profile?.xp ?? 0, icon: BarChart3, color: "from-emerald-500 to-teal-400" },
    { label: "Best Streak", value: `${profile?.longest_streak ?? 0}d`, icon: Flame, color: "from-orange-500 to-amber-500" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="size-7 text-primary" />
        <h1 className="text-3xl font-bold">Your Analytics</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="glow-card rounded-2xl p-5">
            <div className={`size-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3`}>
              <s.icon className="size-5 text-white" />
            </div>
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="glow-card rounded-3xl p-6">
        <h2 className="text-xl font-bold mb-4">Recent Quiz Attempts</h2>
        {attempts.length === 0 ? (
          <p className="text-muted-foreground">Take your first quiz to see analytics here.</p>
        ) : (
          <div className="space-y-2">
            {attempts.map((a, i) => {
              const pct = Math.round((a.score / a.total) * 100);
              return (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/40">
                  <div className="flex-1">
                    <div className="font-medium">{a.topic_id ? topicNames[a.topic_id] ?? "Topic" : "Quiz"}</div>
                    <div className="text-xs text-muted-foreground">{new Date(a.created_at).toLocaleString()}</div>
                  </div>
                  <div className="w-32 h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="font-bold w-16 text-right">{a.score}/{a.total}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
