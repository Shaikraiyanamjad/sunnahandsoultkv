import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sunnah & Soul - Our Story & Mission</title>
        <meta 
          name="description" 
          content="Learn about Sunnah & Soul's mission to bring pure, authentic wellness products inspired by prophetic traditions. Discover our ethical sourcing philosophy." 
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
                  Our Story
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  About Sunnah & Soul
                </h1>
                <div className="gold-divider" />
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-lg mx-auto">
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                    Our Beginning
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Sunnah & Soul was born from a simple yet profound desire: to reconnect 
                    with the natural remedies and wholesome nourishment encouraged by the 
                    Prophet ﷺ. In a world filled with processed products and synthetic 
                    solutions, we sought to return to the pure, authentic ingredients that 
                    have nurtured generations.
                  </p>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 mt-12">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We are committed to sourcing and providing the finest natural products 
                    that align with prophetic traditions. Every product we offer is carefully 
                    selected, tested for authenticity, and handled with the utmost care to 
                    preserve its natural properties.
                  </p>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 mt-12">
                    Ethical Sourcing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We work directly with trusted farmers, beekeepers, and artisans who share 
                    our values of purity and sustainability. From the Sidr trees of Yemen to 
                    the saffron fields of Kashmir, we ensure every product maintains its 
                    authentic quality from source to your home.
                  </p>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 mt-12">
                    Our Promise
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    When you choose Sunnah & Soul, you're choosing products that are pure, 
                    authentic, and crafted with intention. We promise to never compromise on 
                    quality, to always be transparent about our sourcing, and to continuously 
                    seek the best that nature has to offer.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;