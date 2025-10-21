import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import CountrySelector from "@/components/CountrySelector";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slide-down">
            <div className="w-8 h-8 bg-gradient-bmw rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-sm">BMW</span>
            </div>
            <span className="text-xl font-bold text-foreground">BMW</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-fade-in">
            <a href="#all-models" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">All Models</a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">About BMW</a>
            <a href="#innovation" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Innovation</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Experience</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Contact</a>
          </div>
          
          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-4 animate-slide-down">
            <div className="hidden xl:block">
              <CountrySelector />
            </div>
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden xl:inline-flex hover:scale-105 transition-transform">Find a Dealer</Button>
            <Button variant="bmw" size="sm" className="hover:scale-105 transition-transform">Build & Price</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="hover:scale-105 transition-transform"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-card/95 backdrop-blur-md rounded-lg border border-border p-6 space-y-4 animate-slide-down">
            <div className="block xl:hidden mb-4">
              <CountrySelector />
            </div>
            <a href="#all-models" onClick={toggleMenu} className="block text-foreground hover:text-primary transition-colors py-2">All Models</a>
            <a href="#about" onClick={toggleMenu} className="block text-foreground hover:text-primary transition-colors py-2">About BMW</a>
            <a href="#innovation" onClick={toggleMenu} className="block text-foreground hover:text-primary transition-colors py-2">Innovation</a>
            <a href="#experience" onClick={toggleMenu} className="block text-foreground hover:text-primary transition-colors py-2">Experience</a>
            <a href="#contact" onClick={toggleMenu} className="block text-foreground hover:text-primary transition-colors py-2">Contact</a>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="justify-start">Find a Dealer</Button>
              <Button variant="bmw" size="sm" className="justify-start">Build & Price</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;