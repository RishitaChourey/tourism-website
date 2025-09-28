import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CommonHeader() {
  return (
    /* Enhanced header with gradient background using new color palette */
    <header className="bg-gradient-to-r from-[#156064] via-[#00c49a] to-[#156064] shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/jharkhand-tourism-logo.jpg"
            alt="Jharkhand Tourism Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <span className="font-bold text-xl text-white">Jharkhand Tourism</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/itinerary" className="text-white hover:text-gray-200 transition-colors font-medium">
            Itinerary AI
          </Link>
          <Link href="/destinations" className="text-white hover:text-gray-200 transition-colors font-medium">
            Destinations
          </Link>
          <Link href="/guides" className="text-white hover:text-gray-200 transition-colors font-medium">
            Local Guides
          </Link>
          <Link href="/marketplace" className="text-white hover:text-gray-200 transition-colors font-medium">
            Marketplace
          </Link>
          <Link href="/bookings" className="text-white hover:text-gray-200 transition-colors font-medium">
            Bookings
          </Link>
          <Button
            asChild
            className="bg-[#fb8f67] hover:bg-[#ffc2b4] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Link href="/mobile">Get the App</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
