import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyUs from "@/components/home/WhyUs";
import SunnahConnection from "@/components/home/SunnahConnection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sunnah & Soul | Pure Sunnah Products, Naturally Crafted</title>
        <meta 
          name="description" 
          content="Discover authentic, ethically sourced wellness products inspired by prophetic traditions. Premium Sidr honey, Kashmiri saffron, Shilajit, and more." 
        />
        <meta name="keywords" content="Sunnah products, natural wellness, Sidr honey, Kashmiri saffron, Shilajit, Islamic wellness, authentic honey, natural remedies" />
        <link rel="canonical" href="https://sunnahandsoul.com" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturedProducts />
          <WhyUs />
          <SunnahConnection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;