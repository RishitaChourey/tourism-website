"use client"

import useSWR from "swr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type MarketplaceItem = {
  id: string
  type: "guide" | "artisan"
  name: string
  location: string
  skills: string[]
  certificateId: string
  verified: boolean
  photo?: string
  contact?: { phone?: string; whatsapp?: string; email?: string }
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function MarketplacePage() {
  const { data, error, isLoading } = useSWR<{ items: MarketplaceItem[] }>("/api/marketplace", fetcher)

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-balance">Marketplace</h1>
        <p className="text-muted-foreground text-pretty">
          Verified local guides and artisans with digital certificates. Connect directly and support local communities.
        </p>
      </header>

      {isLoading && <p>Loading marketplace…</p>}
      {error && <p className="text-destructive">Failed to load marketplace.</p>}

      <div className="grid gap-6 md:grid-cols-3">
        {data?.items?.map((item) => (
          <Card key={item.id} className="h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-16 w-16 rounded-md overflow-hidden bg-muted">
                <img
                  src={item.photo || "/placeholder.svg?height=64&width=64&query=local%20guide%20artisan%20portrait"}
                  alt={`Portrait of ${item.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{item.type}</Badge>
                  {item.verified && <Badge className="bg-accent text-accent-foreground">Verified</Badge>}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">{item.location}</p>
              <p className="text-sm">
                <span className="font-medium">Skills:</span> {item.skills.join(", ")}
              </p>
              <p className="text-xs text-muted-foreground">Certificate ID: {item.certificateId}</p>
              {item.contact && (
                <div className="text-sm">
                  <p className="font-medium">Contact</p>
                  <ul className="list-disc pl-5">
                    {item.contact.phone && <li>Phone: {item.contact.phone}</li>}
                    {item.contact.whatsapp && <li>WhatsApp: {item.contact.whatsapp}</li>}
                    {item.contact.email && <li>Email: {item.contact.email}</li>}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
