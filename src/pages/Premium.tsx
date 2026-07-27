import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Sparkles,
  Brain,
  Zap,
  BarChart3,
  BookOpen,
  Infinity as InfinityIcon,
  Crown,
  LineChart,
  FileText,
  Rocket,
  ArrowLeft,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const freeFeatures = [
  "Structured Notes",
  "Chapter Quizzes",
  "Standard Study Planner",
  "Weekly Mock Test",
  "500+ Practice Questions",
  "Limited AI Tutor",
  "Basic Performance Analytics",
];

const premiumFeatures = [
  { icon: Brain, text: "Unlimited AI Tutor" },
  { icon: Sparkles, text: "Personalized AI Study Planner" },
  { icon: InfinityIcon, text: "Unlimited Mock Tests" },
  { icon: BarChart3, text: "Complete AI Performance Analysis" },
  { icon: Zap, text: "Unlimited Practice Questions" },
  { icon: FileText, text: "Previous Year Papers" },
  { icon: LineChart, text: "Advanced Analytics Dashboard" },
  { icon: BookOpen, text: "Chapter-wise Performance Reports" },
  { icon: Rocket, text: "AI Study Recommendations" },
  { icon: InfinityIcon, text: "Unlimited Flashcards" },
  { icon: Zap, text: "Faster AI Responses" },
];

export default function Premium() {
  const [modalOpen, setModalOpen] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const price = billing === "monthly" ? "₹499" : "₹2,999";
  const period = billing === "monthly" ? "/month" : "/year";

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20 min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Back */}
      <div>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Back to Dashboard
        </Link>
      </div>

      {/* Hero */}
      <section className="text-center space-y-6 pt-4 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glow-card text-xs font-semibold">
          <Crown className="size-4 text-amber-400" />
          <span className="text-gradient">MindNest Premium</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Unlock Your Full <span className="text-gradient">Learning Potential</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master CET with AI-powered personalized learning designed for serious aspirants.
        </p>
      </section>

      {/* Billing toggle */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-full glow-card">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              billing === "monthly" ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
              billing === "yearly" ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Yearly
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">Save 50%</span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <section className="grid md:grid-cols-2 gap-6 flex-1">
        {/* Free */}
        <div className="glow-card rounded-3xl p-8 space-y-6 h-full flex flex-col">
          <div>
            <div className="text-sm text-muted-foreground mb-2">Starter</div>
            <h3 className="text-2xl font-bold">Free Plan</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold">₹0</span>
              <span className="text-muted-foreground">/forever</span>
            </div>
          </div>
          <ul className="space-y-3">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <Check className="size-4 text-muted-foreground shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold mt-auto" disabled>
            Current Plan
          </button>
        </div>

        {/* Premium */}
        <div className="relative rounded-3xl p-8 space-y-6 glow-primary overflow-hidden border border-amber-400/30 h-full flex flex-col"
             style={{ background: "linear-gradient(180deg, hsl(270 60% 20% / 0.9), hsl(280 55% 14% / 0.8))" }}>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 text-xs font-bold text-amber-950">
            RECOMMENDED
          </div>
          <div>
            <div className="text-sm text-amber-300 mb-2 flex items-center gap-2">
              <Crown className="size-4" /> Premium
            </div>
            <h3 className="text-2xl font-bold text-gradient">MindNest Premium</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{price}</span>
              <span className="text-muted-foreground">{period}</span>
            </div>
            {billing === "yearly" && (
              <p className="text-xs text-amber-300 mt-1">Save 50% with Annual Plan</p>
            )}
          </div>
          <ul className="space-y-3">
            {premiumFeatures.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm">
                <div className="size-6 rounded-md bg-gradient-primary flex items-center justify-center shrink-0">
                  <Icon className="size-3.5 text-primary-foreground" />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-3 rounded-xl bg-gradient-primary text-primary-foreground font-bold glow-primary hover:scale-[1.02] transition-transform mt-auto"
          >
            Subscribe Now
          </button>
        </div>
      </section>

      {/* Subscribe modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crown className="size-5 text-amber-400" /> Coming Soon
            </DialogTitle>
            <DialogDescription className="pt-2 text-base">
              Payment Gateway (Stripe / Razorpay) will be integrated in the production version.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setModalOpen(false)} className="mt-4">Got it</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
