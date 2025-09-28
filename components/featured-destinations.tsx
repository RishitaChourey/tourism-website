"use client"

import Link from "next/link"
import { DESTINATIONS } from "@/lib/destinations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FeaturedDestinations() {
  const items = DESTINATIONS.slice(0, 5)
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Top Destinations in Jharkhand</h2>
        <p className="text-muted-foreground leading-relaxed">
          Explore nature getaways, waterfalls, wildlife, and spiritual centers.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((d) => (
          <Card key={d.slug} className="overflow-hidden">
            <div className="h-44 w-full overflow-hidden">
              <img
                src={d.heroImage || "/placeholder.svg?height=176&width=320&query=Jharkhand%20destination"}
                alt={d.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-balance">{d.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-muted-foreground text-pretty">{d.shortDescription}</p>
              <div className="flex items-center gap-2">
                <Button asChild>
                  <Link href={`/destinations/${d.slug}`}>Details</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/destinations">All Destinations</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
