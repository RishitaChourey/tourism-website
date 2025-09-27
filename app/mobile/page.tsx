"use client"

import { Button } from "@/components/ui/button"

export default function MobilePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-balance">Experience Jharkhand on Mobile</h1>
        <p className="text-muted-foreground text-pretty">
          Immersive virtual tours, GPS-based points collection, and easy redemption at local tourism partner stores.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 items-center">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/mobile-app-virtual-tour-map-of-jharkhand.jpg"
            alt="Mobile app showing a virtual tour and map of Jharkhand"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Download the App</h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                App Store
              </a>
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Points & Redemption</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Earn points by visiting locations; GPS verifies presence.</li>
              <li>Redeem points at partnered local stores and attractions.</li>
              <li>Special badges and seasonal challenges to boost rewards.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
