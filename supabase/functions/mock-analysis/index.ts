// MHT CET Mock Test AI performance analysis
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { stream, title, totalMarks, obtainedMarks, percentage, subjectStats, weakChapters, strongChapters, timeSeconds } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("LOVABLE_API_KEY not configured");

    const prompt = `A Std XI CET aspirant just completed an MHT CET ${stream} full-length mock test: "${title}".
Overall: ${obtainedMarks}/${totalMarks} marks (${percentage}%), time ${Math.round(timeSeconds / 60)} min.

Subject-wise:
${subjectStats.map((s: any) => `- ${s.name}: ${s.correct}/${s.total} correct, accuracy ${s.accuracy}%, time ${Math.round(s.timeSeconds / 60)} min`).join("\n")}

Weakest chapters (by accuracy): ${weakChapters.join(", ") || "none"}
Strongest chapters: ${strongChapters.join(", ") || "none"}

Return a personalised report in valid JSON ONLY (no markdown fences) with keys:
{
  "overall": "2-3 sentence performance summary with expected MHT CET rank band",
  "strongSubjects": ["max 2"],
  "weakSubjects": ["max 2"],
  "weakChapters": ["max 5"],
  "topicsToRevise": ["max 5 concept names"],
  "suggestedNotes": ["max 3 chapter names to re-read"],
  "suggestedQuizzes": ["max 3 chapter names to re-quiz"],
  "suggestedFlashcards": ["max 3 chapter names"],
  "recommendedMock": "next mock test label the student should attempt",
  "studyAdvice": ["4-6 short actionable tips"]
}`;

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are an expert MHT CET coach. Reply ONLY with valid JSON matching the requested schema." },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (resp.status === 429) return new Response(JSON.stringify({ error: "Rate limit" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (resp.status === 402) return new Response(JSON.stringify({ error: "Payment required" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!resp.ok) {
      const t = await resp.text();
      console.error("mock-analysis gateway error", resp.status, t);
      return new Response(JSON.stringify({ error: "Gateway error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const data = await resp.json();
    const raw = data.choices?.[0]?.message?.content ?? "{}";
    let parsed: any = {};
    try { parsed = JSON.parse(raw); } catch { parsed = { overall: raw }; }
    return new Response(JSON.stringify(parsed), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("mock-analysis error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
