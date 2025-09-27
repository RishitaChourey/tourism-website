"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function FeatureCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-balance">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-muted-foreground text-pretty">{description}</p>
        <div>
          <Button asChild>
            <Link href={href}>Explore</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  return (
    <main>
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold">
            Jharkhand Tourism
          </Link>
          <nav className="flex items-center gap-3">
            <Link href="/itinerary" className="underline-offset-4 hover:underline">
              Itinerary AI
            </Link>
            <Link href="/marketplace" className="underline-offset-4 hover:underline">
              Marketplace
            </Link>
            <Link href="/bookings" className="underline-offset-4 hover:underline">
              Bookings
            </Link>
            <Button asChild variant="default" className="bg-primary text-primary-foreground">
              <Link href="/mobile">Get the App</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className={cn("bg-primary text-primary-foreground")}>
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              Discover Jharkhand: Nature, Culture, and Living Heritage
            </h1>
            <p className="text-primary-foreground/90 text-pretty leading-relaxed">
              Your entry point for information, bookings, payments, and an immersive mobile experience with GPS-based
              points you can redeem at local tourism stores.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground">
                <Link href="/itinerary">Plan with AI</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/marketplace">Meet Local Guides</Link>
              </Button>
            </div>
          </div>
          <div className="h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src="/jharkhand-landscape-waterfalls-and-forests.jpg"
              alt="Jharkhand landscape with waterfalls and forests"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-3">
        <FeatureCard
          title="AI-Powered Itinerary"
          description="Get 3 optimized travel plans with day-wise breakdown tailored to your interests and time."
          href="/itinerary"
        />
        <FeatureCard
          title="Bookings & Payments"
          description="Reserve stays and experiences, then complete secure payments directly on the site."
          href="/bookings"
        />
        <FeatureCard
          title="Verified Marketplace"
          description="Book certified guides and buy directly from local artisans with digital certificates."
          href="/marketplace"
        />
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Jharkhand Tourism</p>
          <Link href="/mobile" className="underline underline-offset-4">
            Download the Mobile App
          </Link>
        </div>
      </footer>
    </main>
  )
}
