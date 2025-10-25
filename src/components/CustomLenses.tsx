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
    name: "קיוי",
    image: kiwiImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 2,
    name: "פּטל",
    image: framboiseImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 3,
    name: "תות",
    image: fraiseImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 4,
    name: "ענבי שועל",
    image: cassisImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 5,
    name: "אוכמניות",
    image: bleuetsImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 6,
    name: "אוכמנית",
    image: myrtilleImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 7,
    name: "דיג",
    image: pecheImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 8,
    name: "לגזום",
    image: quetscheImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 9,
    name: "ענבים",
    image: raisinImg,
    description: "עדשות פוטוכרומיות",
  },
  {
    id: 10,
    name: "בלקברי",
    image: mureImg,
    description: "עדשות פוטוכרומיות",
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
            עדשות פוטוכרומיות
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            בחר את גוון העדשה הפוטוכרומי שלך
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
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
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
              ? `להמשיך עם ${lensColors.find((l) => l.id === selectedColor)?.name}`
              : "בחר גוון"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomLenses;
