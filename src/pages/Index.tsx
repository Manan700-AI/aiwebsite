import React from "react";
import AINavbar from "@/components/AINavbar";
import AIFooter from "@/components/AIFooter";
import AIChatbot from "@/components/AIChatbot";
import AuthButton from "@/components/AuthButton";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Link } from "react-router-dom";
import { Bot, Brain, Zap, Users, ArrowRight, CheckCircle, Star, Award } from "lucide-react";
import aiDashboardHero from "@/assets/bright-ai-dashboard.jpg";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AINavbar />
      <AIChatbot />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
                <Bot className="w-4 h-4 mr-2" />
                Next-Generation AI Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
                Empowering Businesses with
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Intelligent Automation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
                Transform your organization with cutting-edge AI training and automation solutions. 
                Join thousands of businesses already leveraging AI for competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
                <Link 
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6 opacity-0 animate-fade-in" style={{animationDelay: "0.8s"}}>
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 text-blue-600 mr-1" />
                  <span className="text-sm font-medium">15+ Companies</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative opacity-0 animate-fade-in" style={{animationDelay: "1s"}}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={aiDashboardHero}
                  alt="AI Dashboard Interface" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-xs text-gray-600">Efficiency Boost</div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">$2.4M</div>
                  <div className="text-xs text-gray-600">Cost Savings</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Excellence That Drives
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Real Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and proven results to deliver exceptional AI solutions 
              that transform businesses and accelerate growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Expert AI Training</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive training programs designed by industry experts to upskill your team and maximize AI adoption.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />Corporate workshops & bootcamps</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />Individual learning paths</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />Industry-recognized certification</li>
              </ul>
            </div>
            
            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Smart Automation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-powered automation solutions that streamline operations, reduce costs, and boost productivity.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />Intelligent workflow optimization</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />End-to-end process automation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />Custom AI tool development</li>
              </ul>
            </div>
            
            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Dedicated Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ongoing support and strategic consultation to ensure your AI initiatives deliver maximum value.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />24/7 technical support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />Strategic AI consultation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />Implementation guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business with
              <span className="text-blue-200"> AI Excellence?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the AI revolution and unlock your organization's full potential with our expert guidance. 
              Start your transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Get Started Today <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg"
              >
                View Our Services
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="flex items-center justify-center mt-12 space-x-8 text-blue-200">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm">Industry Leader</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Proven Results</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm">1000+ Professionals Trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIFooter />
    </div>
  );
};

export default Index;
