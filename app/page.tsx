import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ROISection from "@/components/ROISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FlowSection from "@/components/FlowSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ROISection />
        <TestimonialsSection />
        <PricingSection />
        <FlowSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
