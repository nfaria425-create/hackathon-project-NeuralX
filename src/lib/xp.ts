import { supabase } from "@/integrations/supabase/client";

export const levelFromXp = (xp: number) => Math.floor(xp / 500) + 1;
export const xpForNextLevel = (xp: number) => 500 - (xp % 500);
export const levelProgress = (xp: number) => ((xp % 500) / 500) * 100;

export async function awardXp(userId: string, amount: number) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("xp, current_streak, longest_streak, last_study_date")
    .eq("id", userId)
    .maybeSingle();
  if (!profile) return;

  const today = new Date().toISOString().slice(0, 10);
  const last = profile.last_study_date;
  let streak = profile.current_streak ?? 0;
  if (last !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    streak = last === yesterday ? streak + 1 : 1;
  }
  const newXp = (profile.xp ?? 0) + amount;
  await supabase
    .from("profiles")
    .update({
      xp: newXp,
      level: levelFromXp(newXp),
      current_streak: streak,
      longest_streak: Math.max(profile.longest_streak ?? 0, streak),
      last_study_date: today,
    })
    .eq("id", userId);
}
