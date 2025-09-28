"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import CommonHeader from "@/components/common-header"

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
  const [days, setDays] = useState<number>(4)
  const [interests, setInterests] = useState("nature, culture, food")
  const [context, setContext] = useState("Traveling with family, prefer moderate pace")
  const [plans, setPlans] = useState<Plan[] | null>(null)
  const [loading, setLoading] = useState(false)

  function generate() {
    setLoading(true)
    const hardcodedPlans: Plan[] = [
      {
        title: "🏞️ Plan 1: Ranchi + Netarhat Scenic Escape",
        summary: "Highlights: Waterfalls, hills, local culture, Jharkhand cuisine.",
        estimatedBudget: "₹25,000–₹35,000 (family of 4)",
        days: [
          {
            day: 1,
            title: "Delhi → Ranchi (Flight)",
            activities: [
              "Morning flight to Ranchi (~2 hrs)",
              "Visit Rock Garden & Kanke Dam for a relaxed evening",
              "Dinner: Local tribal thali at Angithi or Tribal Kitchen",
              "Stay in Ranchi"
            ]
          },
          {
            day: 2,
            title: "Ranchi Waterfalls Tour",
            activities: [
              "Breakfast with litti chokha & malpua",
              "Visit Hundru Falls, Jonha Falls, Dassam Falls (carry picnic lunch)",
              "Evening at Tagore Hill (sunset, calm family vibes)",
              "Stay in Ranchi"
            ]
          },
          {
            day: 3,
            title: "Ranchi → Netarhat",
            activities: [
              "Drive (6 hrs, scenic forest route)",
              "Visit Upper Ghaghri Falls & Magnolia Point (sunset)",
              "Dinner at a local guesthouse (try handia – rice beer for adults)",
              "Stay in Netarhat"
            ]
          },
          {
            day: 4,
            title: "Netarhat → Ranchi → Delhi",
            activities: [
              "Sunrise at Koel View Point",
              "Drive back to Ranchi, explore local handicrafts & tribal art",
              "Evening flight to Delhi"
            ]
          }
        ]
      },
      {
        title: "🌸 Plan 2: Ranchi + Deoghar Spiritual & Cultural Tour",
        summary: "Highlights: Temples, cultural heritage, food, light nature.",
        estimatedBudget: "₹22,000–₹30,000 (family of 4)",
        days: [
          {
            day: 1,
            title: "Delhi → Ranchi",
            activities: [
              "Flight to Ranchi",
              "Evening: Ranchi Lake + local street food (puchkas, aloo chop, dhuska)",
              "Stay in Ranchi"
            ]
          },
          {
            day: 2,
            title: "Ranchi → Deoghar",
            activities: [
              "Train/road trip (5–6 hrs)",
              "Visit Baidyanath Jyotirlinga Temple",
              "Explore Naulakha Temple, Tapovan Hills",
              "Dinner: Bengali-Jharkhandi fusion cuisine",
              "Stay in Deoghar"
            ]
          },
          {
            day: 3,
            title: "Deoghar → Basukinath → Ranchi",
            activities: [
              "Morning visit to Basukinath Temple",
              "Lunch enroute",
              "Back to Ranchi, evening shopping for tribal handicrafts",
              "Stay in Ranchi"
            ]
          },
          {
            day: 4,
            title: "Ranchi Sightseeing & Return",
            activities: [
              "Morning visit: Tagore Hill & Pahari Mandir",
              "Early dinner with pitha & thekua (local sweets)",
              "Flight to Delhi"
            ]
          }
        ]
      },
      {
        title: "🌳 Plan 3: Ranchi + Betla National Park",
        summary: "Highlights: Wildlife, light adventure, culture, Jharkhand food.",
        estimatedBudget: "₹28,000–₹38,000 (family of 4)",
        days: [
          {
            day: 1,
            title: "Delhi → Ranchi",
            activities: [
              "Arrive Ranchi",
              "Visit Rock Garden & Tagore Hill",
              "Dinner: Try mutton curry with rice & chutneys",
              "Stay in Ranchi"
            ]
          },
          {
            day: 2,
            title: "Ranchi → Betla National Park (Palamu)",
            activities: [
              "Drive (~6 hrs)",
              "Evening jungle safari (elephants, deer, bison, rare leopards)",
              "Stay in forest lodge (kids love it)"
            ]
          },
          {
            day: 3,
            title: "Betla → Ranchi",
            activities: [
              "Morning safari + visit Palamu Fort ruins",
              "Return to Ranchi",
              "Evening stroll at Kanke Dam + street food tasting",
              "Stay in Ranchi"
            ]
          },
          {
            day: 4,
            title: "Ranchi → Delhi",
            activities: [
              "Morning visit to Hundru Falls (short half-day trip)",
              "Local lunch (litti chokha + chokha chicken)",
              "Flight back to Delhi"
            ]
          }
        ]
      }
    ]

    setTimeout(() => {
      setPlans(hardcodedPlans)
      setLoading(false)
    }, 500) // mimic loading
  }

  return (
    <div>
      <CommonHeader />
      <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">AI-Powered Personalized Itinerary</h1>
          <p className="text-muted-foreground text-pretty">
            Get top 3 optimized travel plans for Jharkhand with a day-wise breakdown based on your interests and
            context.
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
                onChange={(e) => setDays(Number.parseInt(e.target.value || "4", 10))}
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
    </div>
  )
}
