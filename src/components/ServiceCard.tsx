import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const ServiceCard = ({ title, description, imageSrc, imageAlt, index }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group",
        "transform hover:-translate-y-3 hover:scale-[1.03]",
        "opacity-0 animate-fade-in cursor-pointer"
      )}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        animationDuration: `${0.6 + index * 0.1}s`
      }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default ServiceCard;