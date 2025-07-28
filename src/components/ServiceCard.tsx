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
        "transform hover:-translate-y-2 hover:scale-[1.02]",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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