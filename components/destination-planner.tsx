"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getDestinationBySlug, suggestForDateRange } from "@/lib/destinations"

type Props = { destSlug: string }

type DateRange = {
  from?: Date
  to?: Date
}

export default function DestinationPlanner({ destSlug }: Props) {
  const dest = getDestinationBySlug(destSlug)
  const [range, setRange] = React.useState<DateRange>({})

  if (!dest) return null

  const { suggested, months } = suggestForDateRange(dest, range.from, range.to)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Plan by Your Dates</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Select your travel date range to see recommended locations and activities.
        </div>
        <Calendar
          mode="range"
          selected={range as any}
          onSelect={(r: any) => setRange(r)}
          numberOfMonths={1}
          ISOWeek
          className="rounded-md border"
        />
        <div className="flex items-center gap-2 flex-wrap">
          {months.length > 0 ? (
            months.map((m) => {
              const label = new Date(2000, m - 1, 1).toLocaleString("en", { month: "short" })
              return (
                <Badge key={m} variant="secondary">
                  {label}
                </Badge>
              )
            })
          ) : (
            <span className="text-muted-foreground text-sm">No dates selected</span>
          )}
        </div>

        <div className="space-y-2">
          <div className="font-medium">Suggested for your dates</div>
          {suggested.length > 0 ? (
            <ul className="list-disc list-inside text-sm">
              {suggested.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          ) : (
            <div className="text-muted-foreground text-sm">
              Select dates to see tailored suggestions based on seasonality.
            </div>
          )}
        </div>

        <Button variant="secondary" onClick={() => setRange({})}>
          Clear Dates
        </Button>

        <div className="text-xs text-muted-foreground">
          Tip: Best time to visit —{" "}
          {dest.bestTime.months
            .map((m) => new Date(2000, m - 1, 1).toLocaleString("en", { month: "short" }))
            .join(", ")}
        </div>
      </CardContent>
    </Card>
  )
}
