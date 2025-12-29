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
    description: "Pure, raw honey with natural healing properties from ancient Sidr trees.",
    price: "From $45",
    image: sidrHoney,
    slug: "sidr-honey",
    category: "Honey",
  },
  {
    id: 2,
    name: "Kashmiri Saffron",
    description: "Premium grade saffron threads for health, flavor, and wellness.",
    price: "From $35",
    image: saffron,
    slug: "kashmiri-saffron",
    category: "Spices",
  },
  {
    id: 3,
    name: "Shilajit",
    description: "Himalayan mineral resin for energy, vitality, and overall wellness.",
    price: "From $55",
    image: shilajit,
    slug: "shilajit",
    category: "Supplements",
  },
  {
    id: 4,
    name: "Premium Dry Fruits",
    description: "Nutritious selection of almonds, walnuts, dates, and more.",
    price: "From $25",
    image: dryFruits,
    slug: "dry-fruits",
    category: "Dry Fruits",
  },
  {
    id: 5,
    name: "Dried Garlic",
    description: "Natural immune-boosting superfood, carefully dried for potency.",
    price: "From $15",
    image: driedGarlic,
    slug: "dried-garlic",
    category: "Superfoods",
  },
  {
    id: 6,
    name: "Lavender Cream",
    description: "Soothing natural skincare made with pure lavender essence.",
    price: "From $28",
    image: lavenderCream,
    slug: "lavender-cream",
    category: "Skincare",
  },
];

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop | Sunnah & Soul - Premium Natural Products</title>
        <meta 
          name="description" 
          content="Shop our collection of authentic Sunnah-inspired products. Premium Sidr honey, Kashmiri saffron, Shilajit, dry fruits, and natural skincare." 
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
                  Our Collection
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Shop All Products
                </h1>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground text-lg">
                  Discover pure, authentic wellness products crafted with care.
                </p>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover-lift animate-fade-up opacity-0"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards"
                    }}
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden bg-background p-6">
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 text-xs font-medium bg-card text-accent rounded-full border border-border">
                          {product.category}
                        </span>
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="text-accent font-semibold mb-4">{product.price}</p>
                      <Button variant="gold" size="sm" className="w-full" asChild>
                        <Link to={`/products/${product.slug}`}>View Details</Link>
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

export default Shop;