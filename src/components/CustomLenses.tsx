import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import ImageZoomDialog from "@/components/ImageZoomDialog";

import kiwiImg from "@/assets/lenses/kiwi.png";
import framboiseImg from "@/assets/lenses/framboise.png";
import fraiseImg from "@/assets/lenses/fraise.png";
import cassisImg from "@/assets/lenses/cassis.png";
import bleuetsImg from "@/assets/lenses/bleuets.png";
import myrtilleImg from "@/assets/lenses/myrtille.png";
import pecheImg from "@/assets/lenses/peche.png";
import quetscheImg from "@/assets/lenses/quetsche.png";
import raisinImg from "@/assets/lenses/raisin.png";
import mureImg from "@/assets/lenses/mure.png";

const lensColors = [
  {
    id: 1,
    name: "Kiwi",
    image: kiwiImg,
    description: "Verres photochromiques",
  },
  {
    id: 2,
    name: "Framboise",
    image: framboiseImg,
    description: "Verres photochromiques",
  },
  {
    id: 3,
    name: "Fraise",
    image: fraiseImg,
    description: "Verres photochromiques",
  },
  {
    id: 4,
    name: "Cassis",
    image: cassisImg,
    description: "Verres photochromiques",
  },
  {
    id: 5,
    name: "Bleuets",
    image: bleuetsImg,
    description: "Verres photochromiques",
  },
  {
    id: 6,
    name: "Myrtille",
    image: myrtilleImg,
    description: "Verres photochromiques",
  },
  {
    id: 7,
    name: "Pêche",
    image: pecheImg,
    description: "Verres photochromiques",
  },
  {
    id: 8,
    name: "Quetsche",
    image: quetscheImg,
    description: "Verres photochromiques",
  },
  {
    id: 9,
    name: "Raisin",
    image: raisinImg,
    description: "Verres photochromiques",
  },
  {
    id: 10,
    name: "Mûre",
    image: mureImg,
    description: "Verres photochromiques",
  },
];

const CustomLenses = () => {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="custom-lenses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Verres photochromiques
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Choisissez votre teinte de verre photochromique
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-12">
          {lensColors.map((lens, index) => (
            <Card
              key={lens.id}
              className={`group cursor-pointer hover:shadow-luxury transition-all duration-500 border-2 animate-scale-in bg-card ${
                selectedColor === lens.id
                  ? "border-primary shadow-luxury ring-2 ring-primary/20"
                  : "border-border hover:border-primary/40"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedColor(lens.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div 
                    className="w-28 h-28 sm:w-36 sm:h-36 mx-auto overflow-hidden rounded-2xl shadow-card cursor-pointer bg-white/50 backdrop-blur-sm border border-border/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomImage({ src: lens.image, alt: lens.name });
                    }}
                  >
                    <img
                      src={lens.image}
                      alt={lens.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 p-2"
                    />
                  </div>
                  {selectedColor === lens.id && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-scale-in shadow-elegant border-2 border-background">
                        <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-1">
                  {lens.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {lens.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center px-4">
          <Button
            variant="luxury"
            size="lg"
            onClick={scrollToContact}
            disabled={!selectedColor}
            className="text-base sm:text-lg px-6 sm:px-10 py-6 w-full sm:w-auto min-h-[48px] touch-manipulation disabled:opacity-50"
          >
            {selectedColor
              ? `Continuer avec ${lensColors.find((l) => l.id === selectedColor)?.name}`
              : "Choisir une teinte"}
          </Button>
        </div>
      </div>

      <ImageZoomDialog
        isOpen={!!zoomImage}
        onClose={() => setZoomImage(null)}
        imageSrc={zoomImage?.src || ""}
        imageAlt={zoomImage?.alt || ""}
      />
    </section>
  );
};

export default CustomLenses;
