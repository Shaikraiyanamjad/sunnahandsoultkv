import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import sidrHoney from "@/assets/products/sidr-honey.png";
import saffron from "@/assets/products/saffron.png";
import shilajit from "@/assets/products/shilajit.png";
import dryFruits from "@/assets/products/dry-fruits.png";
import driedGarlic from "@/assets/products/dried-garlic.png";
import lavenderCream from "@/assets/products/lavender-cream.png";

const products = [
  {
    id: 1,
    name: "Sidr Honey",
    tagline: "The Gold Standard of Natural Honey",
    description: "Pure, raw honey harvested from ancient Sidr trees. Known for its exceptional healing properties and rich, complex flavor profile.",
    image: sidrHoney,
    slug: "sidr-honey",
  },
  {
    id: 2,
    name: "Kashmiri Saffron",
    tagline: "Red Gold from the Valley",
    description: "Premium grade saffron threads hand-picked from the valleys of Kashmir. Renowned for its vibrant color, aroma, and numerous health benefits.",
    image: saffron,
    slug: "kashmiri-saffron",
  },
  {
    id: 3,
    name: "Himalayan Shilajit",
    tagline: "Ancient Mineral Wisdom",
    description: "Authentic Himalayan mineral resin, rich in fulvic acid and over 80 minerals. A powerful natural supplement for energy and vitality.",
    image: shilajit,
    slug: "shilajit",
  },
  {
    id: 4,
    name: "Premium Dry Fruits",
    tagline: "Nature's Nutrient Powerhouse",
    description: "A curated selection of the finest almonds, walnuts, dates, and raisins. Packed with nutrients for daily nourishment.",
    image: dryFruits,
    slug: "dry-fruits",
  },
  {
    id: 5,
    name: "Dried Garlic",
    tagline: "The Natural Immune Booster",
    description: "Carefully dried to preserve its potent compounds. A natural superfood known for its immune-boosting and heart health properties.",
    image: driedGarlic,
    slug: "dried-garlic",
  },
  {
    id: 6,
    name: "Lavender Cream",
    tagline: "Pure Botanical Skincare",
    description: "Handcrafted skincare infused with pure lavender essence. Soothes, nourishes, and rejuvenates your skin naturally.",
    image: lavenderCream,
    slug: "lavender-cream",
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Our Products | Sunnah & Soul - Natural Wellness Collection</title>
        <meta 
          name="description" 
          content="Explore our complete range of Sunnah-inspired wellness products. From Sidr honey to Kashmiri saffron, discover pure, authentic natural products." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="section-padding bg-secondary">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-4">
                  Our Range
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Our Products
                </h1>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground text-lg">
                  Each product is carefully sourced and selected to bring you the finest 
                  quality natural wellness solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Products List */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="space-y-16">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <div className="bg-secondary rounded-lg p-8 aspect-square flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain max-h-[400px]"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <span className="text-accent text-sm font-medium tracking-widest uppercase mb-2 block">
                        {product.tagline}
                      </span>
                      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        {product.name}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {product.description}
                      </p>
                      <Button variant="gold" size="lg" asChild>
                        <Link to={`/products/${product.slug}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;