import { generateText } from "ai"

export const maxDuration = 30

type ClientMessage = {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: Request) {
  const { messages, language }: { messages: ClientMessage[]; language: string } = await req.json()

  // Sanitize
  const safeLanguage = String(language || "English").slice(0, 40)

  // Build a concise conversation transcript
  const transcript = (messages || []).map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`).join("\n")

  const system = `
You are a multilingual tourism support assistant for the official Jharkhand Tourism website.
Always respond in ${safeLanguage}. If the user switches language, immediately respond in that new language.

Site context:
- This website is the entry point for information, bookings, and payments.
- Mobile App: Provides immersive virtual tours and GPS-based points collection that can be redeemed at local tourism stores.
- AI Itinerary: Suggest the top 3 optimized travel plans with a day-wise breakdown when asked.
- Marketplace: Verified local guides and artisans with digital certificates. The marketplace connects tourists and local communities directly.
- Bookings/Payments: Provide guidance and next steps; do not collect sensitive data directly in chat.
- If a user asks for help, provide short, structured answers with bullet points, links to pages (/itinerary, /marketplace, /bookings, /payments, /mobile), and ask clarifying questions when needed.
- Keep answers helpful, respectful, and concise. Do not give legal/medical advice.

Important:
- Stay within Jharkhand Tourism context.
- If uncertain, ask for clarification.
- Use plain, friendly language and proper formatting in ${safeLanguage}.
`

  const { text } = await generateText({
    model: "openai/gpt-5-mini",
    maxOutputTokens: 600,
    temperature: 0.6,
    prompt: `${system}\n\nConversation so far:\n${transcript}\n\nAssistant:`,
  })

  return Response.json({ text })
}
