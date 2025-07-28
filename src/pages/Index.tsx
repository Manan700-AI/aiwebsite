import React from "react";
import AINavbar from "@/components/AINavbar";
import AIFooter from "@/components/AIFooter";
import AIChatbot from "@/components/AIChatbot";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AINavbar />
      <AIChatbot />
      
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      
      <AIFooter />
    </div>
  );
};

export default Index;