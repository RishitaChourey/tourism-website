import { NextResponse } from "next/server"

export async function GET() {
  // Demo dataset: verified local guides
  const guides = [
    {
      id: "guide-ram",
      name: "Ram Kumar",
      location: "Ranchi, Jharkhand",
      skills: ["Waterfall trails", "Tribal culture", "Hindi, English"],
      certificateId: "JHT-GUIDE-2025-0001",
      verified: true,
      photo: "/local-guide-portrait.jpg",
      contact: { phone: "+91 98765 43210", whatsapp: "+91 98765 43210" },
      rating: 4.8,
      experience: "8 years",
      languages: ["Hindi", "English", "Santhali"],
      specialties: ["Waterfall trekking", "Tribal village tours", "Wildlife spotting"],
    },
    {
      id: "guide-anita",
      name: "Anita Singh",
      location: "Netarhat, Jharkhand",
      skills: ["Sunset points", "Bird watching", "Hindi"],
      certificateId: "JHT-GUIDE-2025-0023",
      verified: true,
      photo: "/female-guide-portrait.jpg",
      contact: { phone: "+91 90909 12345", email: "anita@example.com" },
      rating: 4.9,
      experience: "5 years",
      languages: ["Hindi", "English"],
      specialties: ["Sunrise/sunset tours", "Bird watching", "Photography tours"],
    },
    {
      id: "guide-suresh",
      name: "Suresh Mahato",
      location: "Deoghar, Jharkhand",
      skills: ["Temple tours", "Religious history", "Hindi", "Bengali"],
      certificateId: "JHT-GUIDE-2025-0045",
      verified: true,
      photo: "/male-guide-portrait.jpg",
      contact: { phone: "+91 87654 32109", whatsapp: "+91 87654 32109" },
      rating: 4.7,
      experience: "12 years",
      languages: ["Hindi", "Bengali", "English"],
      specialties: ["Temple tours", "Religious ceremonies", "Local festivals"],
    },
  ]

  return NextResponse.json({ guides })
}
