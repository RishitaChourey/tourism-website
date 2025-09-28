import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDestinationBySlug } from "@/lib/destinations"
import DestinationPlanner from "@/components/destination-planner"

type PageProps = {
  params: { slug: string }
  searchParams: Record<string, string | string[] | undefined>
}

export function generateMetadata({ params }: PageProps) {
  const dest = getDestinationBySlug(params.slug)
  if (!dest) return {}
  return {
    title: `${dest.name} | Jharkhand Tourism`,
    description: dest.shortDescription,
  }
}

export default function DestinationDetail({ params }: PageProps) {
  const dest = getDestinationBySlug(params.slug)
  if (!dest) return notFound()

  const bestMonths = dest.bestTime.months.map((m) => new Date(2000, m - 1, 1).toLocaleString("en", { month: "short" }))

  return (
    <main>
      <section className="relative">
        <div className="h-64 md:h-80 w-full overflow-hidden">
          <img src={dest.heroImage || "/placeholder.svg"} alt={dest.name} className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold text-balance">{dest.name}</h1>
            <p className="text-muted-foreground text-pretty">{dest.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              {bestMonths.map((m) => (
                <Badge key={m} variant="secondary">
                  {m}
                </Badge>
              ))}
            </div>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-pretty leading-relaxed">{dest.longDescription}</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Reach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <strong className="block">By Air</strong>
                <p className="text-muted-foreground">{dest.howToReach.air}</p>
              </div>
              <div>
                <strong className="block">By Rail</strong>
                <p className="text-muted-foreground">{dest.howToReach.rail}</p>
              </div>
              <div>
                <strong className="block">By Road</strong>
                <p className="text-muted-foreground">{dest.howToReach.road}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hotspots</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3">
                {dest.hotspots.map((h) => (
                  <li key={h.name}>
                    <div className="font-medium">{h.name}</div>
                    <div className="text-muted-foreground">{h.description}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <DestinationPlanner destSlug={dest.slug} />
        </aside>
      </section>
    </main>
  )
}
