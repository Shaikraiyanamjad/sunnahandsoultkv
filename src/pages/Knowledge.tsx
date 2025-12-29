import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Healing Properties of Sidr Honey",
    excerpt: "Discover why Sidr honey has been treasured for centuries and how it can benefit your health naturally.",
    date: "December 15, 2024",
    readTime: "5 min read",
    slug: "healing-properties-sidr-honey",
    category: "Honey",
  },
  {
    id: 2,
    title: "Saffron in Sunnah: History & Health Benefits",
    excerpt: "Explore the rich history of saffron in Islamic tradition and its numerous wellness benefits.",
    date: "December 10, 2024",
    readTime: "7 min read",
    slug: "saffron-sunnah-health-benefits",
    category: "Saffron",
  },
  {
    id: 3,
    title: "Understanding Shilajit: Nature's Mineral Supplement",
    excerpt: "A comprehensive guide to Shilajit, the ancient Himalayan resin known for its powerful healing properties.",
    date: "December 5, 2024",
    readTime: "6 min read",
    slug: "understanding-shilajit",
    category: "Supplements",
  },
  {
    id: 4,
    title: "Natural Healing Foods in Prophetic Medicine",
    excerpt: "Learn about the foods recommended in prophetic traditions and their modern-day health applications.",
    date: "November 28, 2024",
    readTime: "8 min read",
    slug: "natural-healing-foods-prophetic-medicine",
    category: "Wellness",
  },
  {
    id: 5,
    title: "The Benefits of Black Seed Oil",
    excerpt: "Why black seed oil is considered a cure for everything except death, and how to use it effectively.",
    date: "November 20, 2024",
    readTime: "5 min read",
    slug: "benefits-black-seed-oil",
    category: "Oils",
  },
];

const Knowledge = () => {
  return (
    <>
      <Helmet>
        <title>Knowledge | Sunnah & Soul - Wellness Articles & Guides</title>
        <meta 
          name="description" 
          content="Explore our knowledge base with articles about natural wellness, Sunnah-inspired remedies, and the benefits of our products." 
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
                  Learn With Us
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Knowledge Hub
                </h1>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground text-lg">
                  Deepen your understanding of natural wellness and Sunnah-inspired remedies.
                </p>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid gap-8">
                {articles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 animate-fade-up opacity-0"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards"
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-accent rounded-full mb-3">
                          {article.category}
                        </span>
                        <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                          <Link to={`/knowledge/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Link 
                          to={`/knowledge/${article.slug}`}
                          className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                        >
                          Read Article
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </article>
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

export default Knowledge;