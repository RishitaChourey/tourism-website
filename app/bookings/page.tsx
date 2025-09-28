"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import CommonHeader from "@/components/common-header"

export default function BookingsPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [packageId, setPackageId] = useState("waterfalls-weekend")
  const [persons, setPersons] = useState(2)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function submit() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date, packageId, persons }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Booking failed")
      router.push(`/payments?ref=${encodeURIComponent(data.id)}`)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <CommonHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground">
            Reserve your experience. You will be redirected to the Payments page after confirmation.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="package">Package</Label>
              <Input id="package" value={packageId} onChange={(e) => setPackageId(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="persons">Number of Persons</Label>
              <Input
                id="persons"
                type="number"
                min={1}
                value={persons}
                onChange={(e) => setPersons(Number.parseInt(e.target.value || "1", 10))}
              />
            </div>
            <div>
              <Button onClick={submit} disabled={loading} className="bg-accent text-accent-foreground">
                {loading ? "Submitting…" : "Submit Booking"}
              </Button>
            </div>
            {error && (
              <p className="text-destructive" role="alert">
                {error}
              </p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
