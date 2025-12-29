import { Link } from "react-router-dom";
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
    benefit: "Pure, raw honey with natural healing properties",
    image: sidrHoney,
    slug: "sidr-honey",
  },
  {
    id: 2,
    name: "Kashmiri Saffron",
    benefit: "Premium saffron threads for health and flavor",
    image: saffron,
    slug: "kashmiri-saffron",
  },
  {
    id: 3,
    name: "Shilajit",
    benefit: "Ancient mineral supplement for vitality",
    image: shilajit,
    slug: "shilajit",
  },
  {
    id: 4,
    name: "Dry Fruits",
    benefit: "Nutritious selection of premium dried fruits",
    image: dryFruits,
    slug: "dry-fruits",
  },
  {
    id: 5,
    name: "Dried Garlic",
    benefit: "Immune-boosting natural superfood",
    image: driedGarlic,
    slug: "dried-garlic",
  },
  {
    id: 6,
    name: "Lavender Cream",
    benefit: "Soothing natural skincare with lavender",
    image: lavenderCream,
    slug: "lavender-cream",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Our Collection
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Featured Products
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated selection of authentic, pure wellness products
            inspired by prophetic traditions.
          </p>
        </div>

        {/* Products Grid */}
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
                <p className="text-muted-foreground text-sm mb-4">
                  {product.benefit}
                </p>
                <Button variant="outline-sage" size="sm" className="w-full" asChild>
                  <Link to={`/products/${product.slug}`}>View Product</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;