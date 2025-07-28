import React from "react";
import ServiceCard from "./ServiceCard";
import chatbotHero from "@/assets/chatbot-hero.jpg";
import voiceAgent from "@/assets/voice-agent.jpg";
import automation from "@/assets/automation.jpg";
import processAudit from "@/assets/process-audit.jpg";
import aiTraining from "@/assets/ai-training.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "24/7 Conversational AI for Smarter Customer Support",
      description: "Deploy intelligent chatbots that automate customer interactions, handle FAQs, and enhance user experience with real-time support.",
      imageSrc: chatbotHero,
      imageAlt: "AI Chatbot Interface"
    },
    {
      title: "Human-like Voice AI for Seamless Customer Conversations",
      description: "Build voice assistants that speak fluently, resolve queries naturally, and deliver a smooth omnichannel support experience.",
      imageSrc: voiceAgent,
      imageAlt: "Voice AI Agent"
    },
    {
      title: "Automate Repetitive Tasks & Maximize Efficiency",
      description: "Leverage AI to streamline operations, reduce manual work, and enhance productivity through process automation workflows.",
      imageSrc: automation,
      imageAlt: "AI Process Automation"
    },
    {
      title: "Deep AI-Powered Insight into Your Business Processes",
      description: "We analyze your end-to-end operations using AI to uncover inefficiencies, suggest improvements, and future-proof your workflows.",
      imageSrc: processAudit,
      imageAlt: "Business Process Audit"
    },
    {
      title: "Empower Your Team with the Power of AI Tools",
      description: "We train your staff on industry-leading AI tools tailored to your business needs—no prior technical knowledge required.",
      imageSrc: aiTraining,
      imageAlt: "AI Tool Training"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
            Our AI Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Intelligent AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Discover our comprehensive suite of AI-powered solutions designed to revolutionize 
            your business operations and drive unprecedented growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <span className="font-medium">Explore All Solutions</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;