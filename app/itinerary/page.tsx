"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type DayPlan = {
  day: number
  title: string
  activities: string[]
}

type Plan = {
  title: string
  summary: string
  days: DayPlan[]
  estimatedBudget: string
  travelTips?: string[]
}

export default function ItineraryPage() {
  const [originCity, setOriginCity] = useState("")
  const [days, setDays] = useState<number>(3)
  const [interests, setInterests] = useState("nature, culture, food")
  const [context, setContext] = useState("Traveling with family, prefer moderate pace")
  const [loading, setLoading] = useState(false)
  const [plans, setPlans] = useState<Plan[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function generate() {
    setLoading(true)
    setError(null)
    setPlans(null)
    try {
      const res = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originCity, days, interests, context }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to generate itinerary")
      setPlans(data.plans)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-balance">AI-Powered Personalized Itinerary</h1>
        <p className="text-muted-foreground text-pretty">
          Get top 3 optimized travel plans for Jharkhand with a day-wise breakdown based on your interests and context.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Tell us about your trip</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="originCity">Origin City</Label>
            <Input
              id="originCity"
              value={originCity}
              onChange={(e) => setOriginCity(e.target.value)}
              placeholder="Kolkata"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="days">Number of Days</Label>
            <Input
              id="days"
              type="number"
              min={2}
              max={10}
              value={days}
              onChange={(e) => setDays(Number.parseInt(e.target.value || "3", 10))}
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="interests">Interests</Label>
            <Input
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="nature, history, food, adventure"
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="context">Context & Constraints</Label>
            <Textarea
              id="context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g., traveling with kids, prefer vegetarian food, avoid long hikes"
              className="min-h-24"
            />
          </div>
          <div className="md:col-span-2">
            <Button onClick={generate} disabled={loading} className={cn("bg-accent text-accent-foreground")}>
              {loading ? "Generating…" : "Generate 3 Plans"}
            </Button>
          </div>
          {error && (
            <p className="text-destructive md:col-span-2" role="alert">
              {error}
            </p>
          )}
        </CardContent>
      </Card>

      {plans && (
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <Card key={idx} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-balance">{plan.title}</CardTitle>
                <p className="text-muted-foreground text-pretty">{plan.summary}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-medium">Estimated Budget: {plan.estimatedBudget}</p>
                <ul className="space-y-2">
                  {plan.days.map((d) => (
                    <li key={d.day}>
                      <p className="font-medium">
                        Day {d.day}: {d.title}
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        {d.activities.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
                {plan.travelTips && plan.travelTips.length > 0 && (
                  <div>
                    <p className="font-medium">Travel Tips</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      {plan.travelTips.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  )
}
