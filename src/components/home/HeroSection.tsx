import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-honey.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-4">
                The Kashmir Vault
              </span>
            </div>
            
            <h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Pure Sunnah Products,{" "}
              <span className="text-primary">Naturally Crafted</span>
            </h1>
            
            <p 
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              Ethically sourced • Authentic • Inspired by Sunnah
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="order-1 lg:order-2 animate-fade-up opacity-0"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Premium Sidr Honey - Sunnah & Soul"
                className="w-full h-auto max-h-[600px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;