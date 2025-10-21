import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-eyewear.jpg";

const Hero = () => {
  const scrollToCollection = () => {
    const element = document.getElementById("collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury eyewear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
          עין אל ציון
        </h1>
        <p className="font-playfair text-2xl sm:text-3xl md:text-4xl text-accent italic mb-8">
          Signez votre regard
        </p>
        <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover the art of personalized luxury eyewear. Each frame is crafted to reflect your unique style and vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={scrollToCollection}
            className="text-lg px-8 py-6"
          >
            Explore Collection
          </Button>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg px-8 py-6"
          >
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToCollection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-primary-foreground animate-bounce hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
