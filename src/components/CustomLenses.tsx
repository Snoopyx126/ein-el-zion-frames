import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

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
    description: "Verre photochromique",
  },
  {
    id: 2,
    name: "Framboise",
    image: framboiseImg,
    description: "Verre photochromique",
  },
  {
    id: 3,
    name: "Fraise",
    image: fraiseImg,
    description: "Verre photochromique",
  },
  {
    id: 4,
    name: "Cassis",
    image: cassisImg,
    description: "Verre photochromique",
  },
  {
    id: 5,
    name: "Bleuets",
    image: bleuetsImg,
    description: "Verre photochromique",
  },
  {
    id: 6,
    name: "Myrtille",
    image: myrtilleImg,
    description: "Verre photochromique",
  },
  {
    id: 7,
    name: "Pêche",
    image: pecheImg,
    description: "Verre photochromique",
  },
  {
    id: 8,
    name: "Quetsche",
    image: quetscheImg,
    description: "Verre photochromique",
  },
  {
    id: 9,
    name: "Raisin",
    image: raisinImg,
    description: "Verre photochromique",
  },
  {
    id: 10,
    name: "Mûre",
    image: mureImg,
    description: "Verre photochromique",
  },
];

const CustomLenses = () => {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

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
            Verres Photochromiques
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Choisissez votre teinte de verre photochromique - passez la souris pour voir l'activation au soleil
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {lensColors.map((lens, index) => (
            <Card
              key={lens.id}
              className={`group cursor-pointer hover:shadow-luxury transition-all duration-500 border-2 animate-scale-in ${
                selectedColor === lens.id
                  ? "border-accent shadow-luxury"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedColor(lens.id)}
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto overflow-hidden rounded-full shadow-lg">
                    <img
                      src={lens.image}
                      alt={lens.name}
                      className="w-[200%] h-full object-cover transition-transform duration-700 ease-in-out group-hover:translate-x-[-50%]"
                    />
                  </div>
                  {selectedColor === lens.id && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center animate-scale-in shadow-lg">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {lens.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
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
              : "Choisissez une teinte"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomLenses;
