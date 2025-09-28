import Link from "next/link"

export default function AppCta() {
  return (
    <section aria-labelledby="app-cta-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="rounded-xl border p-6 sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 id="app-cta-title" className="text-balance text-2xl font-semibold sm:text-3xl">
                Get the Mobile App for Virtual Tours & GPS Rewards
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Enjoy immersive virtual tours, collect GPS-based points, and redeem them at local tourism stores.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/mobile"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Go to mobile app page"
                >
                  Learn More
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Download for Android"
                >
                  Download Android
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Download for iOS"
                >
                  Download iOS
                </a>
              </div>
            </div>

            <div>
              <img
                src="/mobile-app-mockup-jharkhand-tourism.jpg"
                alt="Mobile app mockup for Jharkhand Tourism"
                className="h-auto w-full rounded-lg border object-cover shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
