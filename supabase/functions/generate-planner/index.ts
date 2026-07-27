// Generate Planner — uses tool calling to return structured JSON plan
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { answers } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("LOVABLE_API_KEY not configured");

    const userPrompt = `Build a personalized MHT-CET prep study plan for a Class 11-12 student.
Target CET score: ${answers.target || "150+"}
Daily study hours: ${answers.hours || "5"}
Preferred timings: ${answers.timing || "Flexible"}
Weak subjects: ${answers.weak || "None specified"}
Strong subjects: ${answers.strong || "None specified"}
School / Coaching timings: ${answers.school || "Not specified"}
Exam date: ${answers.examDate || "Not specified"}

Create a realistic today's timetable of 5-8 blocks (mix of concept study, quiz, flashcards, revision, mock test, short break).
Blocks must have concrete tasks with subject + chapter names. Also list weekly focus (3-5 items) and 3-4 personalized tips.`;

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are an expert Indian CET tutor. Return only the structured plan." },
          { role: "user", content: userPrompt },
        ],
        tools: [{
          type: "function",
          function: {
            name: "save_plan",
            description: "Save the student's personalized study plan",
            parameters: {
              type: "object",
              properties: {
                title: { type: "string" },
                blocks: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: { time: { type: "string" }, task: { type: "string" } },
                    required: ["time", "task"], additionalProperties: false,
                  },
                },
                weekly_focus: { type: "array", items: { type: "string" } },
                tips: { type: "array", items: { type: "string" } },
              },
              required: ["title", "blocks", "weekly_focus", "tips"],
              additionalProperties: false,
            },
          },
        }],
        tool_choice: { type: "function", function: { name: "save_plan" } },
      }),
    });

    if (resp.status === 429) return new Response(JSON.stringify({ error: "Rate limit, try again" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (resp.status === 402) return new Response(JSON.stringify({ error: "AI credits exhausted" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!resp.ok) {
      const t = await resp.text();
      console.error("AI gateway error:", resp.status, t);
      throw new Error("AI gateway error");
    }

    const data = await resp.json();
    const args = data.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
    const plan = args ? JSON.parse(args) : { title: "Personalized Plan", blocks: [], weekly_focus: [], tips: [] };

    return new Response(JSON.stringify({ plan }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("generate-planner error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
