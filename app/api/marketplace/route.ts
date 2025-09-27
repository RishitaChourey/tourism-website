import { NextResponse } from "next/server"

export async function GET() {
  // Demo dataset: verified guides and artisans with digital certificates
  const items = [
    {
      id: "guide-ram",
      type: "guide",
      name: "Ram Kumar",
      location: "Ranchi, Jharkhand",
      skills: ["Waterfall trails", "Tribal culture", "Hindi, English"],
      certificateId: "JHT-GUIDE-2025-0001",
      verified: true,
      photo: "/local-guide.jpg",
      contact: { phone: "+91 98765 43210", whatsapp: "+91 98765 43210" },
    },
    {
      id: "artisan-meera",
      type: "artisan",
      name: "Meera Devi",
      location: "Jamshedpur, Jharkhand",
      skills: ["Dokra metal craft", "Terracotta"],
      certificateId: "JHT-ART-2025-0042",
      verified: true,
      photo: "/artisan-portrait.png",
      contact: { phone: "+91 99887 66554" },
    },
    {
      id: "guide-anita",
      type: "guide",
      name: "Anita Singh",
      location: "Netarhat, Jharkhand",
      skills: ["Sunset points", "Bird watching", "Hindi"],
      certificateId: "JHT-GUIDE-2025-0023",
      verified: true,
      photo: "/guide-portrait.jpg",
      contact: { phone: "+91 90909 12345", email: "anita@example.com" },
    },
  ]
  return NextResponse.json({ items })
}
