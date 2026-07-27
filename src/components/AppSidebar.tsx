import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, Brain, Calendar, BarChart3, MessageSquareText, LogOut, ClipboardList, Rocket, Crown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const items = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/notes", label: "Notes", icon: BookOpen },
  { to: "/quizzes", label: "Quizzes", icon: Brain },
  { to: "/tutor", label: "AI Tutor", icon: MessageSquareText },
  { to: "/planner", label: "Study Planner", icon: Calendar },
  { to: "/mock-tests", label: "Mock Tests", icon: ClipboardList },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
];

export const AppSidebar = () => {
  const navigate = useNavigate();
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };
  return (
    <aside className="w-64 shrink-0 h-screen sticky top-0 flex flex-col bg-sidebar/80 backdrop-blur-xl border-r border-sidebar-border">
      <div className="p-6 flex items-center gap-3">
        <img src={logo} alt="MindNest logo" className="size-10" />
        <div>
          <div className="text-xl font-bold text-gradient leading-tight">MindNest</div>
          <div className="text-xs text-muted-foreground">CET Prep Platform</div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-gradient-primary text-primary-foreground glow-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`
            }
          >
            <Icon className="size-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 space-y-3">
        <NavLink
          to="/premium"
          className="block rounded-2xl p-4 relative overflow-hidden border border-amber-400/30"
          style={{ background: "linear-gradient(140deg, hsl(270 60% 22% / 0.9), hsl(280 55% 15% / 0.9))" }}
        >
          <div className="absolute -top-8 -right-8 size-24 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-1">
              <Rocket className="size-4 text-amber-300" />
              <span className="font-bold text-sm text-gradient">Unlock MindNest Premium</span>
            </div>
            <p className="text-[11px] text-muted-foreground mb-3 leading-snug">
              AI-powered learning for serious CET aspirants.
            </p>
            <div className="space-y-1 mb-3 text-xs">
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Monthly</span>
                <span className="font-semibold">₹499<span className="text-muted-foreground font-normal">/mo</span></span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-amber-300 flex items-center gap-1"><Crown className="size-3" /> Yearly</span>
                <span className="font-semibold">₹2,999<span className="text-amber-300/70 font-normal ml-1">-50%</span></span>
              </div>
            </div>
            <div className="w-full py-2 rounded-lg bg-gradient-primary text-primary-foreground text-xs font-bold text-center glow-primary">
              Upgrade to Premium
            </div>
          </div>
        </NavLink>
        <button
          onClick={signOut}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-sidebar-accent"
        >
          <LogOut className="size-4" /> Sign out
        </button>
      </div>
    </aside>
  );
};
