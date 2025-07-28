import React from "react";
import trustedCompanies from "@/assets/trusted-companies.jpg";

const TrustedBySection = () => {
  const companies = [
    "TechCorp", "InnovateLab", "DataFlow Inc", "FutureTech", "AI Solutions", "SmartBiz"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our AI solutions
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <img 
            src={trustedCompanies} 
            alt="Trusted Companies" 
            className="w-full h-64 object-cover rounded-2xl shadow-xl mb-8"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 flex items-center justify-center">
                  <span className="text-gray-700 font-semibold text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;