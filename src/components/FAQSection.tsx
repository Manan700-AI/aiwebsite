import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes automate different from other AI service providers?",
      answer: "We focus on practical implementation and comprehensive training. Our team combines deep AI expertise with real-world business experience, ensuring solutions that actually work and teams that can use them effectively."
    },
    {
      question: "How long does it take to see results from AI implementation?",
      answer: "Most clients see initial improvements within 4-6 weeks of implementation. Full benefits typically materialize within 3-6 months, depending on the complexity of the solution and scope of integration."
    },
    {
      question: "Do we need technical expertise to work with your AI solutions?",
      answer: "No prior AI experience is required. Our comprehensive training programs are designed for all skill levels, and we provide ongoing support to ensure your team can effectively use and maintain the AI systems."
    },
    {
      question: "What industries do you serve?",
      answer: "We work across all industries including healthcare, finance, manufacturing, retail, and professional services. Our AI solutions are customized to meet the specific needs and regulations of your industry."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, access controls, and compliance with regulations like GDPR and HIPAA. All AI models can be deployed on-premises or in private cloud environments."
    },
    {
      question: "What kind of ROI can we expect from AI implementation?",
      answer: "Our clients typically see a 300-500% ROI within the first year through increased efficiency, reduced costs, and improved decision-making. We provide detailed ROI projections during the consultation phase."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI services and implementation process.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <div className="px-8 pb-6 border-t border-blue-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;