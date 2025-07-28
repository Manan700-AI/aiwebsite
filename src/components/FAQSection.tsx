import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can AI solutions be implemented in our business?",
      answer: "Implementation timelines vary based on complexity, but most of our AI solutions can be deployed within 2-8 weeks. We start with a comprehensive assessment and provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do we need technical expertise to use your AI tools?",
      answer: "Not at all! Our AI solutions are designed to be user-friendly. We provide comprehensive training for your team and ongoing support to ensure smooth adoption. No prior technical knowledge is required."
    },
    {
      question: "What kind of ROI can we expect from AI implementation?",
      answer: "Our clients typically see 25-40% improvement in operational efficiency, 60% reduction in manual processing time, and significant cost savings within 3-6 months of implementation."
    },
    {
      question: "Is our data secure with your AI solutions?",
      answer: "Absolutely. We implement enterprise-grade security measures, including data encryption, secure APIs, and compliance with industry standards like GDPR and SOC 2. Your data privacy is our top priority."
    },
    {
      question: "Can your AI solutions integrate with our existing systems?",
      answer: "Yes, our AI solutions are designed to integrate seamlessly with most existing business systems including CRMs, ERPs, and communication platforms. We conduct a compatibility assessment before implementation."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We offer 24/7 technical support, regular system updates, performance monitoring, and continuous optimization. Our team is always available to help you maximize the value of your AI investment."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI solutions and implementation process
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="px-8 py-6 text-left hover:bg-blue-50 transition-colors">
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;