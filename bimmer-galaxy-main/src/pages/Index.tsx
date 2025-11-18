import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedModels from "@/components/FeaturedModels";
import AboutBMW from "@/components/AboutBMW";
import AllModels from "@/components/AllModels";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategorySection />
      <FeaturedModels />
      <AboutBMW />
      <AllModels />
      <Footer />
    </div>
  );
};

export default Index;
