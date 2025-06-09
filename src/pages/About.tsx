
import React from "react";
import AINavbar from "@/components/AINavbar";
import AIFooter from "@/components/AIFooter";
import AIChatbot from "@/components/AIChatbot";
import { Target, Eye, Award, Users, Brain, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <AINavbar />
      <AIChatbot />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AI-tamate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize AI and make intelligent automation 
              accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses worldwide with cutting-edge AI solutions that drive 
                innovation, efficiency, and growth. We believe that every organization, 
                regardless of size, should have access to the transformative power of 
                artificial intelligence.
              </p>
              <p className="text-gray-600">
                Through our comprehensive training programs and intelligent automation 
                solutions, we're building a future where AI enhances human capabilities 
                and creates unprecedented opportunities for success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why We Started</h3>
              <p className="text-blue-100 mb-4">
                Founded by AI experts who witnessed the gap between AI potential and 
                real-world implementation, AI-tamate was created to bridge this divide.
              </p>
              <p className="text-blue-100">
                We've helped over 500+ companies successfully integrate AI into their 
                operations, resulting in an average 40% increase in operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Eye className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To create a world where AI amplifies human potential and drives 
                  sustainable business growth across all industries.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-600">Accessible AI for everyone</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-600">Ethical AI implementation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-600">Continuous innovation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                    <p className="text-gray-600">We deliver exceptional quality in every solution we create.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                    <p className="text-gray-600">We work closely with our clients to understand their unique needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Brain className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600">We stay at the forefront of AI technology and methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to transforming businesses with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Avg. Efficiency Increase</div>
            </div>
          </div>
        </div>
      </section>

      <AIFooter />
    </div>
  );
};

export default About;
