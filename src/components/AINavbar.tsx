
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Bot } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AuthButton from "./AuthButton";

const AINavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          onClick={closeMenu}
        >
          <img 
            src="/lovable-uploads/1e29f5f8-2704-4bdc-8b03-b492ed2cfdc9.png" 
            alt="AI-tamate Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="font-display text-xl font-bold text-gray-900">AI-tamate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "relative text-gray-700 hover:text-blue-600 py-2 transition-colors duration-300 font-medium",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full",
                location.pathname === item.path && "text-blue-600 after:w-full"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* Removed AuthButton as requested */}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-xl font-medium py-3 px-6 w-full text-center rounded-lg transition-colors",
                location.pathname === item.path 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          {/* Removed AuthButton from mobile menu as requested */}
        </nav>
      </div>
    </header>
  );
};

export default AINavbar;
