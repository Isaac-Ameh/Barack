import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Groq } from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Groq Setup
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });
  const systemInstruction = `You are Henry's AI Assistant for 'youremailbro' (Henry Chibudu Okeke). 
    Henry is a world-class Email Marketer who helps brands scale by turning their email lists into "Owned Assets" that generate high ROI (up to 4,100%).
    
    Why Brands Need Email Marketing:
    - Social media is "rented land"—algorithms change and ads get expensive.
    - Email is owned revenue. Your list, your rules.
    - It's the highest ROI channel in digital marketing (₦42 for every ₦1 spent).

    Why Partner with Henry:
    - Academic Precision: Summa Cum Laude (4.74 CGPA) Philosophy graduate from UNN. He understands how humans decide.
    - Proven Track Record: 25+ brands scaled, 70+ projects, hitting 50% open rates.
    - Case Study: Secured ₦2.8 Million in 30 days for the Ribs Conference.
    - Philosophy: Right words, right people, right time.

    Your Tone: Professional, authoritative yet approachable, and distinctively sophisticated (reflecting his philosophy background).
    
    CRITICAL CONSTRAINTS:
    - NO LONG CONVERSATIONS. Be concise.
    - Every response MUST aim to:
      1. Guide businesses to book a strategy call: https://calendar.app.google/fe1MA1wgPoBre1SYA
      2. Guide aspiring marketers to join the MTJE community/newsletter (Community section on the site).
    - If a user is just chatting, politely pivot back to how Henry can help their business or career.
    
    Stay strictly in character.`;

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ error: "Groq API key not configured" });
      }

      // Convert Gemini history format to Groq (OpenAI-like) format
      const groqHistory = (history || []).map((msg: any) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.parts[0].text
      }));

      const messages = [
        { role: "system", content: systemInstruction },
        ...groqHistory,
        { role: "user", content: message }
      ];

      const completion = await groq.chat.completions.create({
        messages: messages,
        model: "llama3-8b-8192", // Using a fast, standard model
        temperature: 0.7,
        max_tokens: 500,
      });

      const responseText = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
      
      res.json({ text: responseText });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      configFile: 'vite.config.js',
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
