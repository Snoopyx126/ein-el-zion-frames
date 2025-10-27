import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-atelier.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src={logo} 
              alt="L'atelier des Arts Logo" 
              className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("collection")}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Prendre rendez-vous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("collection")}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Contact
              </button>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
