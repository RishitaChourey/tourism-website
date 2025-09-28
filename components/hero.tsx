"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 id="hero-title" className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Discover Jharkhand: Forests, Falls, Temples, and Timeless Culture
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Plan your trip with AI-powered itineraries, verified local guides, and a marketplace that directly
              connects you with communities across Jharkhand.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/itinerary"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Create your itinerary"
              >
                Plan with AI Itinerary
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Browse destinations"
              >
                Explore Destinations
              </Link>
              <Link
                href="/mobile"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Get the mobile app"
              >
                Get the App
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              <div className="rounded-md border p-3">
                <dt className="text-xs text-muted-foreground">Verified Guides</dt>
                <dd className="text-base font-semibold">Local & Certified</dd>
              </div>
              <div className="rounded-md border p-3">
                <dt className="text-xs text-muted-foreground">Marketplace</dt>
                <dd className="text-base font-semibold">Artisans & Communities</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <img
              src="/jharkhand-landscape-montage-with-waterfalls-and-fo.jpg"
              alt="Jharkhand landscapes including waterfalls and forests"
              className="h-auto w-full rounded-lg border object-cover shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
