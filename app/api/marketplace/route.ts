import { NextResponse } from "next/server"

export async function GET() {
  // Demo dataset: handcrafted products from local artisans
  const products = [
    {
      id: "dokra-elephant",
      name: "Dokra Metal Elephant",
      artisan: "Meera Devi",
      location: "Jamshedpur, Jharkhand",
      price: 1200,
      description: "Handcrafted brass elephant using traditional Dokra technique passed down through generations.",
      craftMethod:
        "Lost-wax casting technique using clay, wax, and brass. The process takes 15-20 days from start to finish.",
      history:
        "Dokra art is over 4000 years old, practiced by the Dhokra Damar tribes. It represents one of India's earliest metal casting traditions.",
      whereFound:
        "Primarily found in tribal areas of Jharkhand, West Bengal, and Odisha. Jamshedpur is a major center.",
      images: ["/dokra-brass-elephant.jpg"],
      category: "Metal Craft",
      inStock: true,
      rating: 4.8,
      reviews: 23,
    },
    {
      id: "sohrai-painting",
      name: "Sohrai Wall Art",
      artisan: "Putli Gond",
      location: "Hazaribagh, Jharkhand",
      price: 800,
      description: "Traditional Sohrai painting on canvas depicting harvest festival themes with natural pigments.",
      craftMethod:
        "Natural pigments from clay, charcoal, and flowers applied with bamboo brushes on mud-prepared canvas.",
      history:
        "Sohrai art dates back to the Mesolithic period, found in caves of Hazaribagh. It celebrates the harvest season and cattle.",
      whereFound: "Hazaribagh district caves and villages. UNESCO recognized this ancient rock art tradition.",
      images: ["/sohrai-tribal-painting.jpg"],
      category: "Painting",
      inStock: true,
      rating: 4.9,
      reviews: 18,
    },
    {
      id: "bamboo-basket",
      name: "Woven Bamboo Basket",
      artisan: "Ravi Mahato",
      location: "Ranchi, Jharkhand",
      price: 450,
      description:
        "Intricately woven bamboo basket perfect for storage or decoration, made from locally sourced bamboo.",
      craftMethod:
        "Split bamboo strips are soaked, dried, and woven using traditional interlacing patterns. Takes 3-4 days to complete.",
      history:
        "Bamboo weaving has been practiced by tribal communities for over 1000 years for daily utility and storage.",
      whereFound:
        "Throughout Jharkhand's forested regions, especially around Ranchi and Chaibasa where bamboo grows abundantly.",
      images: ["/woven-bamboo-basket.jpg"],
      category: "Bamboo Craft",
      inStock: true,
      rating: 4.6,
      reviews: 31,
    },
    {
      id: "terracotta-pot",
      name: "Decorative Terracotta Pot",
      artisan: "Kamla Kumari",
      location: "Dumka, Jharkhand",
      price: 350,
      description: "Hand-molded terracotta pot with traditional tribal motifs, perfect for plants or decoration.",
      craftMethod:
        "Local clay is shaped on potter's wheel, dried in shade, decorated with natural dyes, and fired in traditional kilns.",
      history:
        "Terracotta pottery in Jharkhand dates back 3000 years, with each tribe having distinct styles and motifs.",
      whereFound: "Dumka, Pakur, and Sahebganj districts are known for their distinctive terracotta traditions.",
      images: ["/terracotta-decorative-pot.jpg"],
      category: "Pottery",
      inStock: false,
      rating: 4.7,
      reviews: 15,
    },
    {
      id: "tribal-jewelry",
      name: "Silver Tribal Necklace",
      artisan: "Sita Munda",
      location: "Khunti, Jharkhand",
      price: 2500,
      description: "Authentic silver necklace with traditional Munda tribal designs and semi-precious stones.",
      craftMethod:
        "Pure silver is melted, shaped using traditional tools, and decorated with stones using ancient techniques.",
      history:
        "Munda tribal jewelry represents social status and spiritual beliefs, with designs passed down matrilineally.",
      whereFound: "Khunti and surrounding Munda tribal areas, where silversmithing is a hereditary craft.",
      images: ["/tribal-silver-necklace.jpg"],
      category: "Jewelry",
      inStock: true,
      rating: 4.9,
      reviews: 12,
    },
    {
      id: "jute-bag",
      name: "Handwoven Jute Bag",
      artisan: "Geeta Devi",
      location: "Deoghar, Jharkhand",
      price: 280,
      description: "Eco-friendly jute bag with colorful tribal patterns, perfect for daily use or gifting.",
      craftMethod: "Jute fibers are spun into threads, dyed with natural colors, and woven on traditional handlooms.",
      history:
        "Jute weaving became popular in Jharkhand during British era, now combined with traditional tribal aesthetics.",
      whereFound: "Deoghar and Godda districts, where jute cultivation and weaving support many families.",
      images: ["/handwoven-jute-bag.jpg"],
      category: "Textile",
      inStock: true,
      rating: 4.5,
      reviews: 27,
    },
  ]

  return NextResponse.json({ products })
}
