"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CommonHeader from "@/components/common-header"

export default function PaymentsPage() {
  const sp = useSearchParams()
  const ref = sp.get("ref") || ""
  const [status, setStatus] = useState<"idle" | "processing" | "paid" | "failed">("idle")
  const [message, setMessage] = useState<string | null>(null)

  async function pay() {
    setStatus("processing")
    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: ref, amount: 4999, currency: "INR" }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Payment error")
      // Simulate redirect; in real life use provider checkout URL
      setMessage(`Payment simulated. Provider URL: ${data.payment_url}`)
      setStatus("paid")
    } catch (e: any) {
      setMessage(e.message)
      setStatus("failed")
    }
  }

  useEffect(() => {
    // Prefill state from ref if needed
  }, [ref])

  return (
    <div>
      <CommonHeader />
      <main className="mx-auto max-w-2xl px-4 py-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-muted-foreground">Booking Reference: {ref || "N/A"}</p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Complete Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Use the button below to simulate a payment. Integrate your real provider later.
            </p>
            <Button
              onClick={pay}
              disabled={!ref || status === "processing"}
              className="bg-accent text-accent-foreground"
            >
              {status === "processing" ? "Processing…" : "Pay Now"}
            </Button>
            {message && <p className={status === "failed" ? "text-destructive" : ""}>{message}</p>}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
