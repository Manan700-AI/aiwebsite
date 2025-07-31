
import React, { useState } from "react";
import AINavbar from "@/components/AINavbar";
import AIFooter from "@/components/AIFooter";
import { Mail, CheckCircle, TrendingUp, Brain, Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to the automate newsletter. You'll receive our next update soon."
      });
      setFormData({ name: "", email: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <AINavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Ahead with AI Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who receive our weekly newsletter 
              packed with AI trends, practical tips, and exclusive insights.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Value Proposition */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What You'll Get
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Latest AI Trends</h3>
                    <p className="text-gray-600">
                      Stay informed about cutting-edge developments in artificial intelligence 
                      and how they impact your industry.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Practical Tips</h3>
                    <p className="text-gray-600">
                      Actionable advice on implementing AI solutions in your business, 
                      from automation to training strategies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Exclusive Content</h3>
                    <p className="text-gray-600">
                      Access to case studies, expert interviews, and early announcements 
                      about our new services and programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">No Spam, Ever</h3>
                    <p className="text-gray-600">
                      Quality over quantity. We send one thoughtful newsletter per week, 
                      and you can unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subscription Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Subscribe Now
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  Join <span className="font-semibold text-blue-600">5,000+</span> professionals 
                  already receiving our newsletter
                </p>
                
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">Trusted by industry leaders</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-xs mt-6 text-center">
                By subscribing, you agree to our privacy policy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Subscribers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-600 mb-4">
                "The automate newsletter is my go-to source for staying current with AI trends. 
                The insights have helped us make better technology decisions."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-gray-500 text-sm">CTO, TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-600 mb-4">
                "Practical, actionable content that I can immediately apply to my work. 
                No fluff, just valuable insights delivered weekly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-gray-500 text-sm">Data Scientist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIFooter />
    </div>
  );
};

export default Newsletter;
