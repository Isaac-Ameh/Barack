import Groq from "groq-sdk";

const systemInstruction = `You are Henry's friendly AI assistant for 'youremailbro' (Henry Chibudu Okeke), a world-class Email Marketer.

RULES YOU MUST FOLLOW:
1. Keep EVERY reply to 1-3 SHORT sentences. Never write paragraphs.
2. NEVER output any URL, link, or web address. The chat UI has buttons for that—just tell the user to "use the button below" or "tap the button" if they need a link.
3. NEVER output markdown, HTML tags, or formatting like [text](url) or <button>.
4. Be warm, conversational, and human. Sound like a real person texting, not a corporate bot.
5. When someone wants to work with Henry or book a call, say exactly: "Tap the 'Book a Call' button below!" so the UI will show the booking button.
6. When someone wants to learn email marketing or join the community, say exactly: "Tap the 'Join the Community' button below!" so the UI will show the join button.
7. If asked something off-topic, gently steer back to email marketing in a friendly way.

HENRY'S KEY FACTS (use sparingly, don't dump all at once):
- Helped 25+ brands scale with email marketing
- Achieved up to 50% open rates
- Secured ₦2.8M in 30 days for the Ribs Conference
- Philosophy: Right words, right people, right time

Stay in character. Be brief. No URLs ever.`;

export default async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Groq API key not configured on the server." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const { message, history } = await req.json();

    const groq = new Groq({ apiKey });

    // Convert the frontend history format to Groq's OpenAI-compatible format
    const groqHistory = (history || []).map(
      (msg: { role: string; parts: { text: string }[] }) => ({
        role: msg.role === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.parts[0].text,
      })
    );

    const messages: Groq.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: "system", content: systemInstruction },
      ...groqHistory,
      { role: "user", content: message },
    ];

    const completion = await groq.chat.completions.create({
      messages,
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 150,
    });

    const responseText =
      completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't process that.";

    return new Response(JSON.stringify({ text: responseText }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error("Netlify function chat error:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Failed to get AI response" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
