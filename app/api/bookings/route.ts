import { type NextRequest, NextResponse } from "next/server"

// In-memory store for demo; replace with DB later
const BOOKINGS: any[] = []

export async function GET() {
  return NextResponse.json({ bookings: BOOKINGS })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const id = `JHT-${Date.now()}`
    const record = { id, ...body, createdAt: new Date().toISOString(), status: "confirmed" }
    BOOKINGS.push(record)
    return NextResponse.json({ id, status: "confirmed" })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Invalid request" }, { status: 400 })
  }
}
