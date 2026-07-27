// Quiz AI performance analysis via Lovable AI
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { subject, chapter, score, total, timeSeconds, wrong, allChapters } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("LOVABLE_API_KEY not configured");

    const wrongText = wrong.length
      ? wrong.map((w: any, i: number) => `${i + 1}. Q: ${w.q}\n   Concept: ${w.concept}\n   Difficulty: ${w.difficulty}`).join("\n")
      : "None — perfect score.";

    const prompt = `A Std XI CET student just finished a quiz.
Subject: ${subject}
Chapter: ${chapter}
Score: ${score}/${total} (${Math.round((score / total) * 100)}%)
Time taken: ${timeSeconds}s

Questions they got WRONG (with concept tags):
${wrongText}

Available chapters in ${subject}: ${allChapters.join(", ")}

Return a concise personalized report in valid JSON only (no markdown fences) with keys:
{
  "overall": "1-2 sentence performance summary",
  "strongTopics": ["concept tags they got right — max 4"],
  "weakTopics": ["concept tags to revise — max 4"],
  "revisionChapters": ["chapter names from the list above — max 2"],
  "nextChapter": "single recommended next chapter from the list",
  "suggestedMock": "short label for a mock test to attempt next",
  "tips": ["3-5 short actionable improvement tips"]
}`;

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are an expert CET coach. Reply ONLY with valid JSON matching the requested schema." },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (resp.status === 429) return new Response(JSON.stringify({ error: "Rate limit" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (resp.status === 402) return new Response(JSON.stringify({ error: "Payment required" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!resp.ok) {
      const t = await resp.text();
      console.error("gateway error", resp.status, t);
      return new Response(JSON.stringify({ error: "Gateway error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const data = await resp.json();
    const raw = data.choices?.[0]?.message?.content ?? "{}";
    let parsed: any = {};
    try { parsed = JSON.parse(raw); } catch { parsed = { overall: raw }; }
    return new Response(JSON.stringify(parsed), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("quiz-analysis error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
