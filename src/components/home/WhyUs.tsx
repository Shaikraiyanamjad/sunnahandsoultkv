import { Heart, Leaf, Shield, CheckCircle, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Sunnah-Inspired Wellness",
    description: "Products rooted in prophetic traditions and natural healing wisdom.",
  },
  {
    icon: Leaf,
    title: "Pure & Authentic",
    description: "100% natural ingredients with no artificial additives or preservatives.",
  },
  {
    icon: Shield,
    title: "No Chemicals",
    description: "Free from harmful chemicals, pesticides, and synthetic compounds.",
  },
  {
    icon: CheckCircle,
    title: "Carefully Sourced",
    description: "Ethically and sustainably sourced from trusted farmers and suppliers.",
  },
  {
    icon: Award,
    title: "Trusted Quality",
    description: "Rigorous quality testing to ensure purity and authenticity.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Our Promise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Why Sunnah & Soul
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 animate-fade-up opacity-0"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards"
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;