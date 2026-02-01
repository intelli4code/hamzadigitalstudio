import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesSection from "@/components/FeaturesSection";
import BentoSection from "@/components/BentoSection";
import StickyCardsSection from "@/components/StickyCardsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TransformSection from "@/components/TransformSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Preloader } from "@/components/ui/preloader";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <MagneticCursor />
      <Header />
      <main>
        <HeroSection />
        <WorkflowSection />
        <FeaturesSection />
        <BentoSection />
        <ProcessSection />
        {/* <StickyCardsSection /> */}
        <TransformSection />
        <StepsSection />
        <TestimonialsSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
