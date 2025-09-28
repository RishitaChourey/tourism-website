import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DESTINATIONS } from "@/lib/destinations"

export const metadata = {
  title: "Destinations | Jharkhand Tourism",
}

function DestinationCard({
  slug,
  name,
  short,
  img,
  bestMonths,
}: {
  slug: string
  name: string
  short: string
  img: string
  bestMonths: number[]
}) {
  const months = bestMonths.map((m) => new Date(2000, m - 1, 1).toLocaleString("en", { month: "short" })).slice(0, 4)

  return (
    <Link href={`/destinations/${slug}`} className="block">
      <Card className="h-full hover:shadow-md transition">
        <div className="h-40 w-full overflow-hidden">
          <img src={img || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
        </div>
        <CardHeader>
          <CardTitle className="text-balance">{name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground text-pretty">{short}</p>
          <div className="flex flex-wrap gap-2">
            {months.map((m) => (
              <Badge key={m} variant="secondary">
                {m}
              </Badge>
            ))}
          </div>
          <div className="text-sm underline underline-offset-4">View details</div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function DestinationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-balance">Top Destinations in Jharkhand</h1>
        <p className="text-muted-foreground">
          Explore highlights including Netarhat, Patratu, Betla National Park, Hundru Falls, and Deoghar.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <DestinationCard
            key={d.slug}
            slug={d.slug}
            name={d.name}
            short={d.shortDescription}
            img={d.heroImage}
            bestMonths={d.bestTime.months}
          />
        ))}
      </section>
    </main>
  )
}
