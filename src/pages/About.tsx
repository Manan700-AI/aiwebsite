
import React from "react";
import AINavbar from "@/components/AINavbar";
import AIFooter from "@/components/AIFooter";
import AIChatbot from "@/components/AIChatbot";
import { Target, Eye, Award, Users, Brain, Zap } from "lucide-react";
import brightTeamCollaboration from "@/assets/bright-team-collaboration.jpg";
import brightOfficeBuilding from "@/assets/bright-office-building.jpg";

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
              About aitamate
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
            <div className="relative">
              <img 
                src={brightTeamCollaboration}
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To catalyze AI-adoption and make intelligent process optimization accessible to businesses of all sizes.
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
                real-world implementation, aitamate was created to bridge this divide.
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
            <div className="order-2 lg:order-1 relative">
              <img 
                src={brightOfficeBuilding}
                alt="Modern office building"
                className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Eye className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To unleash human creativity with the power of augmented intelligence.
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <h4 className="font-semibold text-gray-900">Integrity & Transparency</h4>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-semibold text-gray-900">Innovation</h4>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-semibold text-gray-900">Human-centricity</h4>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-semibold text-gray-900">Growth</h4>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-semibold text-gray-900">Excellence</h4>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-semibold text-gray-900">Agility</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that showcase our global impact and innovation leadership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Global Training Impact</h3>
              <p className="text-gray-600">
                Conducted Technical Trainings to teams in 11 countries, spreading AI knowledge and expertise across diverse markets and cultures.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Market-Leading Innovation</h3>
              <p className="text-gray-600">
                Developed a market leading Recruitment assisting app that reduces time to hire significantly while enhancing the quality of hires.
              </p>
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
