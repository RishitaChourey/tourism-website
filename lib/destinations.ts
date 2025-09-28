export type HowToReach = {
  air: string
  rail: string
  road: string
}

export type Hotspot = {
  name: string
  description: string
}

export type Destination = {
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  heroImage: string
  howToReach: HowToReach
  bestTime: {
    months: number[] // 1-12
    rationale: string
  }
  hotspots: Hotspot[]
  location?: { lat: number; lng: number }
  monthRecommendations?: Record<number, string[]> // month -> recommended hotspot names
}

export const DESTINATIONS: Destination[] = [
  {
    slug: "netarhat",
    name: "Netarhat",
    shortDescription: "The Queen of Chotanagpur — misty hills, pine forests, and breathtaking sunrises.",
    longDescription:
      "Netarhat is a serene hill station famed for its sunrise and sunset points, pine forests, and cool climate. Ideal for nature lovers and quiet retreats.",
    heroImage: "/netarhat-jharkhand-sunrise-hills.jpg",
    howToReach: {
      air: "Nearest airport: Ranchi (approx. 156 km). Taxis/buses available from Ranchi to Netarhat.",
      rail: "Nearest major railhead: Ranchi or Latehar. Local taxis/buses ply to Netarhat.",
      road: "Well connected by road from Ranchi, Latehar, and Daltonganj. Scenic ghat roads.",
    },
    bestTime: {
      months: [10, 11, 12, 1, 2, 3],
      rationale: "October–March offers clear skies and pleasant temperatures for viewpoints and forest walks.",
    },
    hotspots: [
      { name: "Sunrise Point", description: "Panoramic view of dawn over the hills." },
      { name: "Sunset Point", description: "Golden hour over thick forests and valleys." },
      { name: "Pine Forest Trails", description: "Shaded walks amid tall pines." },
    ],
    monthRecommendations: {
      10: ["Sunrise Point", "Pine Forest Trails"],
      11: ["Sunrise Point", "Sunset Point"],
      12: ["Sunrise Point", "Sunset Point"],
      1: ["Sunrise Point", "Pine Forest Trails"],
      2: ["Sunset Point", "Pine Forest Trails"],
      3: ["Sunrise Point", "Sunset Point", "Pine Forest Trails"],
    },
  },
  {
    slug: "patratu",
    name: "Patratu Valley & Dam",
    shortDescription: "Winding valley roads, reservoir views, and photo-perfect viewpoints near Ranchi.",
    longDescription:
      "Patratu features a beautiful dam and a picturesque valley road with hairpin bends and sweeping views. Popular for drives and short day trips.",
    heroImage: "/patratu-dam-valley-jharkhand.jpg",
    howToReach: {
      air: "Nearest airport: Ranchi (approx. 40–45 km).",
      rail: "Nearest railhead: Ranchi/Patratu. Local transport options available.",
      road: "Good road connectivity from Ranchi. The valley drive is the highlight.",
    },
    bestTime: {
      months: [9, 10, 11, 12, 1, 2, 3, 4],
      rationale:
        "Post-monsoon to spring offers clearer skies and lush surroundings. Even summer mornings/evenings are pleasant.",
    },
    hotspots: [
      { name: "Patratu Dam Viewpoint", description: "Reservoir and mountain vistas." },
      { name: "Valley Hairpin Drive", description: "Scenic bends perfect for photography." },
      { name: "Lakefront Promenade", description: "Relax by the water with snacks." },
    ],
    monthRecommendations: {
      9: ["Patratu Dam Viewpoint", "Valley Hairpin Drive"],
      10: ["Patratu Dam Viewpoint", "Lakefront Promenade"],
      11: ["Valley Hairpin Drive", "Lakefront Promenade"],
      12: ["Patratu Dam Viewpoint", "Valley Hairpin Drive"],
      1: ["Patratu Dam Viewpoint"],
      2: ["Lakefront Promenade"],
      3: ["Patratu Dam Viewpoint", "Valley Hairpin Drive"],
      4: ["Lakefront Promenade"],
    },
  },
  {
    slug: "betla-national-park",
    name: "Betla National Park",
    shortDescription: "Wildlife haven with sal forests, waterfalls, and historic forts.",
    longDescription:
      "Betla is part of the Palamu Tiger Reserve, known for elephants, deer species, and diverse flora. The area includes scenic waterfalls and old forts.",
    heroImage: "/betla-national-park-sal-forest.jpg",
    howToReach: {
      air: "Nearest airport: Ranchi (approx. 170–180 km).",
      rail: "Nearest railheads: Daltonganj/Barwadih. Local transport to Betla available.",
      road: "Accessible by road from Ranchi, Daltonganj, and Latehar.",
    },
    bestTime: {
      months: [11, 12, 1, 2],
      rationale: "Cool and dry months are best for safaris and wildlife sightings.",
    },
    hotspots: [
      { name: "Jungle Safari", description: "Guided rides to spot wildlife (early morning/late afternoon)." },
      { name: "Palamu Forts", description: "Historic forts nestled within the reserve." },
      { name: "Waterfall Trails", description: "Seasonal falls and forest streams." },
    ],
    monthRecommendations: {
      11: ["Jungle Safari", "Palamu Forts"],
      12: ["Jungle Safari", "Palamu Forts"],
      1: ["Jungle Safari", "Waterfall Trails"],
      2: ["Jungle Safari", "Palamu Forts"],
    },
  },
  {
    slug: "hundru-falls",
    name: "Hundru Falls",
    shortDescription: "Spectacular plunge waterfall on the Subarnarekha River near Ranchi.",
    longDescription:
      "Hundru Falls cascades dramatically into a rocky gorge, with pools and scenic viewpoints. Monsoon/post-monsoon amplify its grandeur.",
    heroImage: "/hundru-falls-jharkhand-waterfall.jpg",
    howToReach: {
      air: "Nearest airport: Ranchi (~45 km).",
      rail: "Nearest railhead: Ranchi/Hatia. Hire taxis or take buses to the falls.",
      road: "Connected by road from Ranchi; last stretch includes steps/pathways to viewpoints.",
    },
    bestTime: {
      months: [8, 9, 10],
      rationale: "Monsoon and just after for the most powerful flow.",
    },
    hotspots: [
      { name: "Main Viewpoint", description: "Front-on view of the waterfall." },
      { name: "Rock Pools", description: "Caution advised; check safety conditions." },
      { name: "Downstream Gorge", description: "Photo spots with mist and spray." },
    ],
    monthRecommendations: {
      8: ["Main Viewpoint", "Downstream Gorge"],
      9: ["Main Viewpoint", "Rock Pools"],
      10: ["Main Viewpoint"],
    },
  },
  {
    slug: "deoghar",
    name: "Deoghar",
    shortDescription: "Spiritual center with Baidyanath Jyotirlinga, vibrancy peaks during Shravani Mela.",
    longDescription:
      "Deoghar is a pilgrimage city known for the Baidyanath Temple complex, sacred traditions, and a bustling cultural scene during Shravani Mela.",
    heroImage: "/deoghar-baidyanath-temple-jharkhand.jpg",
    howToReach: {
      air: "Nearest airports: Deoghar (domestic) and Ranchi.",
      rail: "Nearest railhead: Jasidih Junction (connected to major cities).",
      road: "Good road connectivity from nearby towns; local transit to the temple.",
    },
    bestTime: {
      months: [7, 8, 10, 11, 12, 1, 2, 3],
      rationale: "July–August for Shravani Mela (crowded); Oct–Mar for pleasant weather and quieter visits.",
    },
    hotspots: [
      { name: "Baidyanath Temple", description: "One of the 12 Jyotirlingas, central pilgrimage site." },
      { name: "Naulakha Mandir", description: "Ornate temple with unique architecture." },
      { name: "Tapovan Caves", description: "Ancient caves and scenic surroundings." },
    ],
    monthRecommendations: {
      7: ["Baidyanath Temple"],
      8: ["Baidyanath Temple"],
      10: ["Naulakha Mandir", "Tapovan Caves"],
      11: ["Baidyanath Temple", "Tapovan Caves"],
      12: ["Baidyanath Temple", "Naulakha Mandir"],
      1: ["Baidyanath Temple"],
      2: ["Naulakha Mandir"],
      3: ["Tapovan Caves"],
    },
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug)
}

export function monthsBetween(start: Date, end: Date): number[] {
  const s = new Date(start.getFullYear(), start.getMonth(), 1)
  const e = new Date(end.getFullYear(), end.getMonth(), 1)
  const months: number[] = []
  const cur = new Date(s)
  while (cur <= e) {
    months.push(cur.getMonth() + 1) // 1-12
    cur.setMonth(cur.getMonth() + 1)
  }
  return months
}

export function suggestForDateRange(dest: Destination, start?: Date, end?: Date) {
  if (!start || !end) return { months: [], suggested: [] as string[] }

  const months = monthsBetween(start, end)
  const suggestions = new Set<string>()
  for (const m of months) {
    const list = dest.monthRecommendations?.[m]
    if (list) {
      for (const s of list) suggestions.add(s)
    }
  }
  return { months, suggested: Array.from(suggestions) }
}
