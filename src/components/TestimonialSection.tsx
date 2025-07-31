import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO, TechFlow Solutions",
      company: "Fortune 500 Company",
      content: "automate's training program transformed our team's capabilities. We've seen a 60% improvement in project efficiency and our developers are now confidently implementing AI solutions.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Rodriguez",
      title: "Head of Operations",
      company: "Global Manufacturing Corp",
      content: "The automation solutions reduced our manual processing time by 75% and improved accuracy by 90%. The ROI was evident within the first quarter of implementation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Dr. Emily Watson",
      title: "Director of Digital Innovation",
      company: "HealthTech Innovations",
      content: "Their AI-powered process audit uncovered inefficiencies we never knew existed. The insights and recommendations have been game-changing for our healthcare delivery system.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-60 blur-3xl translate-x-1/2"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full opacity-70 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations are transforming their operations with our AI solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentTestimonial === index 
                        ? "bg-blue-600 w-8" 
                        : "bg-blue-300 hover:bg-blue-400"
                    )}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Companies Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">75%</div>
            <div className="text-gray-600 font-medium">Average Efficiency Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;