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
          <div className="rounded-lg overflow-hidden flex justify-center">
            <div className="mobile-container w-full max-w-xs h-[800px] bg-white rounded-2xl shadow-2xl flex flex-col">
              {/* Header */}
              <header className="bg-teal-700 p-4 pt-8 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h1 className="text-lg font-bold">Jharkhand Discover</h1>
                  </div>
                  <button className="p-2 rounded-full hover:bg-teal-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                </div>
              </header>

              {/* Main Scrollable Content */}
              <main className="flex-grow overflow-y-auto p-4 pb-20">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded mb-4">
                  ⚠️ Weather Alert: Heavy rain expected in Ranchi until 6 PM.
                </div>

                <h2 className="font-semibold mb-2">Today's Exploration Toolkit</h2>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 bg-teal-50 border rounded-xl shadow-sm">🎧 <p className="text-xs mt-1">Audio</p></div>
                  <div className="text-center p-3 bg-teal-50 border rounded-xl shadow-sm">👁️ <p className="text-xs mt-1">AR</p></div>
                  <div className="text-center p-3 bg-teal-50 border rounded-xl shadow-sm">⬇️ <p className="text-xs mt-1">Plans</p></div>
                </div>

                <h2 className="font-semibold mb-2">Your Personalized Itinerary</h2>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white border rounded-xl shadow-sm">
                    <img src="https://placehold.co/60x60/86efac/4a4a4a?text=Falls" className="w-14 h-14 rounded-lg mr-3" />
                    <div>
                      <p className="font-semibold">Hundru Falls</p>
                      <p className="text-xs text-gray-500">25 min drive</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white border rounded-xl shadow-sm">
                    <img src="https://placehold.co/60x60/a7f3d0/4a4a4a?text=Temple" className="w-14 h-14 rounded-lg mr-3" />
                    <div>
                      <p className="font-semibold">Baidyanath Dham</p>
                      <p className="text-xs text-gray-500">+150 pts</p>
                    </div>
                  </div>
                </div>
              </main>

              {/* Bottom Navigation */}
              <nav className="flex justify-around items-center bg-white border-t p-2">
                <a href="#" className="flex flex-col items-center text-teal-600"><span>🏠</span><span className="text-xs">Home</span></a>
                <a href="#" className="flex flex-col items-center text-gray-500"><span>🗺️</span><span className="text-xs">Map</span></a>
                <a href="#" className="flex flex-col items-center text-gray-500"><span>📌</span><span className="text-xs">Plan</span></a>
                <a href="#" className="flex flex-col items-center text-gray-500"><span>⭐</span><span className="text-xs">Rewards</span></a>
              </nav>
            </div>
          </div>

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
