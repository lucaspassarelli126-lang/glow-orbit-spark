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
        className="w-full h-full opacity-60"
        colors={["#000000", "#111111", "#222222", "#3a3a3a"]}
        speed={0.3}
      />
      {/* Overlay escuro para garantir leitura das fontes em qualquer situação */}
      <div className="absolute inset-0 bg-black/50" />
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
