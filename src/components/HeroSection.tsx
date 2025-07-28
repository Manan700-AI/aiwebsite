import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import aiBackground from "@/assets/ai-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={aiBackground} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 opacity-0 animate-fade-in">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent block mt-2">
              Intelligent AI Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Automate processes, enhance customer experiences, and unlock unprecedented growth 
            with our cutting-edge artificial intelligence technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">75%</div>
              <div className="text-blue-200">Average Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce" style={{ animationDelay: "1.5s" }}></div>
    </section>
  );
};

export default HeroSection;