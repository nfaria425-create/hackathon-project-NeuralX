import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquareText, Send, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const Tutor = () => {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm your **MindNest AI Tutor**. Ask me anything about Physics, Chemistry, Mathematics or Biology — I'll explain step by step." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { document.title = "AI Tutor · MindNest"; }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && last.content.startsWith(assistantSoFar.slice(0, Math.max(0, assistantSoFar.length - chunk.length)))) {
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantSoFar } : m);
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-tutor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.access_token ?? import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next }),
      });
      if (resp.status === 429) { toast.error("Rate limit reached, try again in a moment."); setLoading(false); return; }
      if (resp.status === 402) { toast.error("AI credits exhausted. Add credits in Settings → Workspace → Usage."); setLoading(false); return; }
      if (!resp.ok || !resp.body) throw new Error("Stream failed");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = ""; let streamDone = false;
      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nl); buffer = buffer.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const j = line.slice(6).trim();
          if (j === "[DONE]") { streamDone = true; break; }
          try {
            const parsed = JSON.parse(j);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) upsert(c);
          } catch { buffer = line + "\n" + buffer; break; }
        }
      }
    } catch (e: any) {
      toast.error(e.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="size-10 rounded-xl bg-gradient-primary glow-primary flex items-center justify-center">
          <MessageSquareText className="size-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Tutor</h1>
          <p className="text-xs text-muted-foreground">Powered by Lovable AI · Always free for the first 25 messages/day</p>
        </div>
      </div>

      <div className="flex-1 glow-card rounded-3xl p-6 overflow-y-auto space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${m.role === "user" ? "bg-gradient-primary text-primary-foreground" : "bg-secondary/60"}`}>
              <article className="prose prose-invert prose-sm max-w-none prose-p:my-1 prose-headings:my-2">
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </article>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Sparkles className="size-4 animate-pulse" /> Thinking…
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask about a concept, problem, or formula…"
          className="flex-1 px-4 py-3 rounded-2xl bg-input/50 border border-border focus:border-primary outline-none"
        />
        <button onClick={send} disabled={loading} className="px-5 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold glow-primary disabled:opacity-60 flex items-center gap-2">
          <Send className="size-4" /> Send
        </button>
      </div>
    </div>
  );
};

export default Tutor;
