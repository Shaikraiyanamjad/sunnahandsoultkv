import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Begin Your Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Experience the Purity of Sunnah
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Discover products that honor tradition while nurturing your
            wellbeing. Pure, authentic, and crafted with care.
          </p>
          <Button
            variant="hero"
            asChild
            className="
    group
    px-4 py-2 text-sm
    md:px-6 md:py-3 md:text-lg
    xl:px-8 xl:py-4 xl:text-xl
  "
          >
            <Link to="/shop" className="flex items-center">
              Start Your Sunnah Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
