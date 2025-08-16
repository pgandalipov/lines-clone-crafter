import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <HeroSection />
      <div className="relative bg-gradient-subtle">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        <div className="relative z-10">
          <div className="pt-4">
            <ServicesSection />
          </div>
          <AboutSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
