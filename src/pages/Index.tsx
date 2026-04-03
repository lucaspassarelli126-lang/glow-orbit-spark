import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AppSection from "@/components/AppSection";
import DarkSection from "@/components/DarkSection";
import GlobalAccount from "@/components/GlobalAccount";
import AppFeatures from "@/components/AppFeatures";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Products />
    <AppSection />
    <DarkSection />
    <AppFeatures />
    <FeaturesGrid />
    <Footer />
  </div>
);

export default Index;
