"use client"

import { Button } from "@/components/ui/button"
import CommonHeader from "@/components/common-header"
import { Smartphone, MapPin, Download, Shield, Bell } from "lucide-react"

export default function MobilePage() {
  return (
    <div>
      <CommonHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">
            Experience Jharkhand on Mobile
          </h1>
          <p className="text-muted-foreground text-pretty">
            Immersive virtual tours, GPS-based points collection, and easy redemption at local tourism partner stores.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 items-center">
          <img src="/mobile-app-virtual-tour-map-of-jharkhand.jpg" alt="Mobile app showing a virtual tour and map of Jharkhand" className="h-full w-full object-cover" />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Jharkhand Tourism Mobile App</h2>
            <p className="text-muted-foreground">
              Discover the features of our official tourism app.
            </p>

            {/* ✅ App Benefits */}
            <div className="bg-[var(--brand-yellow)] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[var(--brand-teal-dark)] mb-4">App Benefits</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--brand-teal-dark)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--brand-teal-dark)]">GPS Triggered Audio Guides</h4>
                    <p className="text-sm text-[var(--brand-teal-dark)]/80">
                      Hands-free narration with location-based triggers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-[var(--brand-teal-dark)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--brand-teal-dark)]">Personalized AR Exploration</h4>
                    <p className="text-sm text-[var(--brand-teal-dark)]/80">
                      Augmented reality experiences tailored to you
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-[var(--brand-teal-dark)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--brand-teal-dark)]">Download AI Plans Offline</h4>
                    <p className="text-sm text-[var(--brand-teal-dark)]/80">
                      Personalized itineraries available without internet
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[var(--brand-teal-dark)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--brand-teal-dark)]">SOS Button & Safety Alerts</h4>
                    <p className="text-sm text-[var(--brand-teal-dark)]/80">
                      Emergency assistance and safety notifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <Bell className="w-5 h-5 text-[var(--brand-teal-dark)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--brand-teal-dark)]">Weather & Event Alerts</h4>
                    <p className="text-sm text-[var(--brand-teal-dark)]/80">
                      Real-time notifications for weather updates and local events
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Download Section */}
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">Download Now</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  asChild
                  className="bg-[var(--brand-teal-bright)] hover:bg-[var(--brand-teal-bright)]/90"
                >
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    Google Play Store
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--brand-teal-bright)] text-[var(--brand-teal-bright)] hover:bg-[var(--brand-teal-bright)] hover:text-white bg-transparent"
                >
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    Apple App Store
                  </a>
                </Button>
              </div>
            </div>

            {/* ✅ Points & Redemption */}
            <div className="space-y-2 bg-muted p-4 rounded-lg">
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
    </div>
  )
}
