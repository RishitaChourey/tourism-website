"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function youtubeSearchEmbed(query: string) {
  const q = encodeURIComponent(query)
  // Uses YouTube's embed player with a dynamic playlist based on search results
  return `https://www.youtube.com/embed?listType=search&list=${q}&rel=0&modestbranding=1&playsinline=1`
}

export default function YouTubeEmbed({
  src,
  videoId,
  title = "YouTube video",
}: {
  src?: string
  videoId?: string
  title?: string
}) {
  const embedSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`
    : src || "about:blank"

  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        className="h-full w-full rounded-md border"
        src={embedSrc}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </AspectRatio>
  )
}
