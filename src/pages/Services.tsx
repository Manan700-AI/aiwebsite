
import React from "react";
import AINavbar from "@/components/AINavbar";
import AIFooter from "@/components/AIFooter";
import AIChatbot from "@/components/AIChatbot";
import { Link } from "react-router-dom";
import { Brain, Zap, Users, BookOpen, Cog, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <AINavbar />
      <AIChatbot />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations 
              and empower your team with cutting-edge artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* AI Training Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">AI Training Services</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Empower your team with comprehensive AI education and hands-on training 
                programs designed for all skill levels.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Corporate Training</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Customized workshops and bootcamps for your entire organization.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />AI fundamentals and strategy</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Machine learning implementation</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Change management for AI adoption</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Individual Courses</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Self-paced learning paths for personal skill development.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Beginner to advanced curricula</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Hands-on project experience</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Industry-recognized certificates</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">Success Stories</h4>
                <p className="text-blue-800 text-sm">
                  "AI-tamate's training program transformed our team's capabilities. 
                  We've seen a 60% improvement in project efficiency." - Tech Director, Fortune 500 Company
                </p>
              </div>
              
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
              >
                Start Training Program <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* AI-Enabled Automations */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">AI-Enabled Automations</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Streamline your business processes with intelligent automation solutions 
                that reduce manual work and boost productivity.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Cog className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Workflow Automation</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Automate repetitive tasks and optimize business processes.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Document processing automation</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Customer service chatbots</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Data entry and validation</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Intelligent Business Tools</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    AI-powered tools that enhance decision-making and operations.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Predictive analytics dashboards</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Smart recommendation engines</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />Automated reporting systems</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-green-900 mb-2">Real-World Impact</h4>
                <p className="text-green-800 text-sm">
                  Our automation solutions typically reduce manual processing time by 
                  75% and improve accuracy by 90%.
                </p>
              </div>
              
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
              >
                Explore Automation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure successful AI integration in your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Analyze your current processes and identify AI opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Develop a customized AI roadmap aligned with your goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Deploy AI solutions with minimal disruption to operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring and improvement for maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can transform your business operations.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <AIFooter />
    </div>
  );
};

export default Services;
