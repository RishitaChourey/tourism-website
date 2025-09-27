import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"

// Helper to parse JSON from model output safely
function tryParseJSON(text: string) {
  try {
    return JSON.parse(text)
  } catch {
    const match = text.match(/```json\s*([\s\S]*?)\s*```/i)
    if (match) {
      try {
        return JSON.parse(match[1])
      } catch {}
    }
    return null
  }
}

export async function POST(req: NextRequest) {
  try {
    const { originCity = "", days = 3, interests = "", context = "" } = await req.json()

    const system = `You are a Jharkhand tourism trip planner. Return STRICT JSON with an array "plans" containing exactly 3 plans.
Each plan has: title, summary, estimatedBudget, travelTips (array), and "days" as an array of day objects with fields: day (number), title, activities (array of strings).
No extra commentary. Keep content culturally accurate for Jharkhand (e.g., Hundru Falls, Betla National Park, Netarhat, Jagannath Temple Ranchi, tribal handicrafts, local cuisine).`

    const user = `Origin: ${originCity}
Days: ${days}
Interests: ${interests}
Context: ${context}
Return JSON only, like: {"plans":[{...},{...},{...}]}`

    const { text } = await generateText({
      model: "openai/gpt-5-mini",
      prompt: `${system}\n\n${user}`,
    })

    const parsed = tryParseJSON(text)
    if (!parsed || !Array.isArray(parsed?.plans)) {
      return NextResponse.json({ error: "AI output could not be parsed" }, { status: 500 })
    }

    return NextResponse.json({ plans: parsed.plans })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Server error" }, { status: 500 })
  }
}
