import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { reference, amount, currency } = await req.json()
    if (!reference) return NextResponse.json({ error: "Missing booking reference" }, { status: 400 })

    // Simulate payment intent; integrate real provider later
    const payment_url = `https://payments.example.com/checkout?ref=${encodeURIComponent(reference)}&amount=${amount}&currency=${currency}`
    return NextResponse.json({ reference, payment_url, status: "pending" })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Payment error" }, { status: 400 })
  }
}
