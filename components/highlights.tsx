export default function Highlights() {
  const items = [
    {
      title: "AI-Powered Itinerary",
      desc: "Personalized, context-aware plans with day-wise breakdown.",
    },
    {
      title: "Verified Local Guides",
      desc: "Digital certificates and reviews for trusted experiences.",
    },
    {
      title: "Direct Marketplace",
      desc: "Support artisans and communities without intermediaries.",
    },
    {
      title: "Bookings & Payments",
      desc: "Secure checkout and easy reservation management.",
    },
  ]

  return (
    <section aria-labelledby="highlights-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <h2 id="highlights-title" className="text-balance text-2xl font-semibold sm:text-3xl">
          Everything you need for your Jharkhand journey
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.title} className="rounded-lg border p-4">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
