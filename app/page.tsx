"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import ChatWidget from "@/components/chat-widget"
import FeaturedDestinations from "@/components/featured-destinations"
import YouTubeEmbed, { youtubeSearchEmbed } from "@/components/youtube-embed"
import CommonHeader from "@/components/common-header"

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
      <CommonHeader />

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
                <Link href="/guides">Meet Local Guides</Link>
              </Button>
            </div>
          </div>
          <div className="h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src="/jharkhand-landscape-montage-with-waterfalls-and-fo.jpg"
              alt="Jharkhand landscape with waterfalls and forests"
              className="h-full w-full object-cover rounded-lg border"
              loading="eager"
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
          title="Craftsmen Marketplace"
          description="Buy authentic handcrafted products directly from local artisans with rich cultural history."
          href="/marketplace"
        />
      </section>

      {/* Featured Destinations Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <FeaturedDestinations />
      </section>

     {/* Immersive Media Section */}
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">
            Immersive 360° Views & Travel Vlogs
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Experience Jharkhand before you go. Enjoy 360° videos and authentic vlogs from travelers and creators.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">360° Virtual Tours</h3>
            <YouTubeEmbed videoId="C7Kvt0bV3TA" title="Enjoy the delicacies of Jharkhand" />
            <p className="text-sm text-muted-foreground">
              Savor authentic tribal flavors and traditional dishes that capture the essence of Jharkhand’s rich culinary heritage.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Travel Vlogs</h3>
            <YouTubeEmbed videoId="xHXM7m9Xd8M" title="Scenic Drone view of Jharkhand" />
            <p className="text-sm text-muted-foreground">
              A breathtaking aerial glimpse capturing Jharkhand’s lush forests, rolling hills, and majestic waterfalls from above.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Video Section */}
    <section className="mx-auto max-w-6xl px-4 py-12">
      <YouTubeEmbed videoId="eDIJv93S_tQ" title="Featured Jharkhand Travel Video" />
    </section>


      {/* Attach chat widget as floating panel */}
      <ChatWidget />

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
