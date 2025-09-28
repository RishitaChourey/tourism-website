import YouTubeEmbed from "./youtube-embed"

export default function ImmersiveMedia() {
  // Using search listType embeds for broad curation. Swap with playlist/video IDs if needed.
  const embeds = [
    {
      title: "Jharkhand 360° Tours",
      // Search-based embed for 360 content
      src: "https://www.youtube.com/embed?listType=search&list=Jharkhand%20360%20tour",
      desc: "Explore 360° views of waterfalls, forests, and hill stations across Jharkhand.",
    },
    {
      title: "Jharkhand Travel Vlogs",
      src: "https://www.youtube.com/embed?listType=search&list=Jharkhand%20travel%20vlog",
      desc: "Get real experiences and tips from creators who’ve traveled across the state.",
    },
  ]

  return (
    <section aria-labelledby="immersive-media-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <h2 id="immersive-media-title" className="text-balance text-2xl font-semibold sm:text-3xl">
          Immersive 360° & Travel Vlogs
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Watch curated 360° tours and vlogs to preview destinations before you go.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {embeds.map((e) => (
            <article key={e.title} aria-label={e.title} className="space-y-3">
              <YouTubeEmbed title={e.title} src={e.src} />
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
