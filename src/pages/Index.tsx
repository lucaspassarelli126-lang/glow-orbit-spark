import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AppSection from "@/components/AppSection";
import DarkSection from "@/components/DarkSection";
import GlobalAccount from "@/components/GlobalAccount";
import AppFeatures from "@/components/AppFeatures";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import { MeshGradient } from "@paper-design/shaders-react";

const Index = () => (
  <div className="min-h-screen relative bg-black overflow-x-hidden">
    <div className="fixed inset-0 z-0 pointer-events-none">
      <MeshGradient
        className="w-full h-full"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={0.5}
      />
    </div>
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <Products />
      <AppSection />
      <DarkSection />
      <GlobalAccount />
      <AppFeatures />
      <FeaturesGrid />
      <Footer />
    </div>
  </div>
);

export default Index;
