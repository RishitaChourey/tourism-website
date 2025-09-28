"use client"

import useSWR from "swr"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import CommonHeader from "@/components/common-header"

type Product = {
  id: string
  name: string
  artisan: string
  location: string
  price: number
  description: string
  craftMethod: string
  history: string
  whereFound: string
  images: string[]
  category: string
  inStock: boolean
  rating: number
  reviews: number
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

function ProductCard({ product }: { product: Product }) {
  const [showPurchase, setShowPurchase] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(0)

  const handlePurchase = () => {
    setShowPurchase(true)
  }

  const handleSubmitReview = () => {
    // In a real app, this would submit to an API
    console.log("Review submitted:", { rating, review })
    setShowReview(false)
    setReview("")
    setRating(0)
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
          <img
            src={product.images[0] || "/placeholder.svg?height=200&width=200&query=handcraft%20product"}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{product.category}</Badge>
            <span className="text-lg font-bold">₹{product.price}</span>
          </div>
          <CardTitle className="text-xl text-balance">{product.name}</CardTitle>
          <p className="text-sm text-muted-foreground">by {product.artisan}</p>
          <p className="text-sm text-muted-foreground">{product.location}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-pretty">{product.description}</p>

        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm">Craft Method</h4>
            <p className="text-sm text-muted-foreground">{product.craftMethod}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm">Cultural History</h4>
            <p className="text-sm text-muted-foreground">{product.history}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm">Where Found</h4>
            <p className="text-sm text-muted-foreground">{product.whereFound}</p>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <Button className="w-full" disabled={!product.inStock} onClick={handlePurchase}>
            {product.inStock ? "Buy Now" : "Out of Stock"}
          </Button>

          <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowReview(true)}>
            Write Review
          </Button>
        </div>

        {/* Purchase Dialog */}
        <Dialog open={showPurchase} onOpenChange={setShowPurchase}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Complete Purchase</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-2xl font-bold">₹{product.price}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Scan QR code to pay via UPI</p>
                <div className="mx-auto w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
                  <img src="/upi-qr-code.jpg" alt="UPI QR Code" className="w-full h-full object-contain" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">UPI ID: artisan@paytm (Demo)</p>
              </div>

              <Button className="w-full" onClick={() => setShowPurchase(false)}>
                Payment Completed
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Review Dialog */}
        <Dialog open={showReview} onOpenChange={setShowReview}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Write a Review</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Rating</label>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer ${
                        star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Review</label>
                <Textarea
                  placeholder="Share your experience with this product..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSubmitReview} disabled={!rating || !review.trim()}>
                  Submit Review
                </Button>
                <Button variant="outline" onClick={() => setShowReview(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export default function MarketplacePage() {
  const { data, error, isLoading } = useSWR<{ products: Product[] }>("/api/marketplace", fetcher)

  return (
    <main>
      <CommonHeader />

      <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">Craftsmen Marketplace</h1>
          <p className="text-muted-foreground text-pretty">
            Discover authentic handcrafted products from local artisans. Each piece tells a story of Jharkhand's rich
            cultural heritage.
          </p>
        </header>

        {isLoading && <p>Loading products…</p>}
        {error && <p className="text-destructive">Failed to load products.</p>}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
