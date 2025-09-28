"use client"

import useSWR from "swr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CommonHeader from "@/components/common-header"

type Guide = {
  id: string
  name: string
  location: string
  skills: string[]
  certificateId: string
  verified: boolean
  photo?: string
  contact?: { phone?: string; whatsapp?: string; email?: string }
  rating: number
  experience: string
  languages: string[]
  specialties: string[]
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function GuidesPage() {
  const { data, error, isLoading } = useSWR<{ guides: Guide[] }>("/api/guides", fetcher)

  return (
    <main>
      <CommonHeader />

      <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">Meet Local Guides</h1>
          <p className="text-muted-foreground text-pretty">
            Connect with verified local guides who know Jharkhand's hidden gems, cultural stories, and best trails.
          </p>
        </header>

        {isLoading && <p>Loading guides…</p>}
        {error && <p className="text-destructive">Failed to load guides.</p>}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.guides?.map((guide) => (
            <Card key={guide.id} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
                  <img
                    src={guide.photo || "/placeholder.svg?height=64&width=64&query=local%20guide%20portrait"}
                    alt={`Portrait of ${guide.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl">{guide.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Guide</Badge>
                    {guide.verified && <Badge className="bg-accent text-accent-foreground">Verified</Badge>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{guide.location}</p>
                <div className="text-sm">
                  <span className="font-medium">Experience:</span> {guide.experience}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Languages:</span> {guide.languages.join(", ")}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Specialties:</span> {guide.specialties.join(", ")}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Rating:</span> ⭐ {guide.rating}/5
                </div>
                <p className="text-xs text-muted-foreground">Certificate ID: {guide.certificateId}</p>

                {guide.contact && (
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Contact</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.contact.phone && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={`tel:${guide.contact.phone}`}>Call</a>
                        </Button>
                      )}
                      {guide.contact.whatsapp && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={`https://wa.me/${guide.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            WhatsApp
                          </a>
                        </Button>
                      )}
                      {guide.contact.email && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={`mailto:${guide.contact.email}`}>Email</a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
