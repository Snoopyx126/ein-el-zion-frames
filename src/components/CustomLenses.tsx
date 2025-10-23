import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const lensColors = [
  {
    id: 1,
    name: "כחול",
    color: "#1E90FF",
    description: "הגנה מפני אור כחול",
  },
  {
    id: 2,
    name: "אפור",
    color: "#808080",
    description: "ניטרלי וקלאסי",
  },
  {
    id: 3,
    name: "חום",
    color: "#8B4513",
    description: "משפר ניגודיות",
  },
  {
    id: 4,
    name: "ירוק",
    color: "#228B22",
    description: "מפחית עייפות עיניים",
  },
  {
    id: 5,
    name: "ורוד",
    color: "#FF69B4",
    description: "סגנון אופנתי",
  },
  {
    id: 6,
    name: "זהב",
    color: "#FFD700",
    description: "יוקרתי ואלגנטי",
  },
  {
    id: 7,
    name: "כתום",
    color: "#FF8C00",
    description: "משפר חדות ראייה",
  },
  {
    id: 8,
    name: "סגול",
    color: "#9370DB",
    description: "סגנון ייחודי",
  },
  {
    id: 9,
    name: "שחור",
    color: "#000000",
    description: "הגנה מקסימלית מהשמש",
  },
  {
    id: 10,
    name: "שקוף",
    color: "#F0F0F0",
    description: "קלאסי ונקי",
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
            התאמה אישית של הזכוכיות
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            בחרו את צבע הזכוכיות המושלם עבורכם מתוך 10 אפשרויות ייחודיות
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
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: lens.color }}
                  />
                  {selectedColor === lens.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center animate-scale-in">
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
              ? `המשיכו עם ${lensColors.find((l) => l.id === selectedColor)?.name}`
              : "בחרו צבע זכוכיות"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomLenses;
