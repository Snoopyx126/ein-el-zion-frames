import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";

const products = [
  {
    id: 1,
    name: "יהלום חלק",
    description: "",
    image: product1,
    price: "התאמה אישית",
  },
  {
    id: 2,
    name: "טורנדו יהלומים",
    description: "",
    image: product2,
    price: "התאמה אישית",
  },
  {
    id: 3,
    name: "יהלום פנימי חלק",
    description: "",
    image: product3,
    price: "התאמה אישית",
  },
  {
    id: 4,
    name: "מכת יהלומים",
    description: "",
    image: product4,
    price: "התאמה אישית",
  },
  {
    id: 5,
    name: "גל יהלום",
    description: "",
    image: product5,
    price: "התאמה אישית",
  },
  {
    id: 6,
    name: "יהלום מעורב",
    description: "",
    image: product6,
    price: "התאמה אישית",
  },
  {
    id: 7,
    name: "יהלום מבריק",
    description: "",
    image: product7,
    price: "התאמה אישית",
  },
  {
    id: 8,
    name: "יהלום אריה",
    description: "",
    image: product8,
    price: "התאמה אישית",
  },
  {
    id: 9,
    name: "יהלום קר",
    description: "",
    image: product9,
    price: "התאמה אישית",
  },
  {
    id: 10,
    name: "קו יהלומים",
    description: "",
    image: product10,
    price: "התאמה אישית",
  },
  {
    id: 11,
    name: "יהלום בהתאמה אישית",
    description: "",
    image: product11,
    price: "התאמה אישית",
  },
  {
    id: 12,
    name: "יהלום בהתאמה אישית",
    description: "",
    image: product12,
    price: "התאמה אישית",
  },

];

const Collection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="collection" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            הקולקציה שלנו
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            כל חתיכה בקולקציה שלנו מעוצבת להתאמה אישית לסגנון הייחודי שלך.
            בחרו את העיצוב הבסיסי ואנחנו נתאים אותו במיוחד עבורכם.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-luxury transition-all duration-500 border-border overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6 text-right">
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 sm:flex-row-reverse">
                    <span className="text-accent font-semibold text-base sm:text-lg text-center sm:text-right">
                      {product.price}
                    </span>
                    <Button 
                      variant="hero" 
                      onClick={scrollToContact}
                      className="group-hover:shadow-gold-glow w-full sm:w-auto min-h-[44px] touch-manipulation"
                    >
                      התאמה אישית
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center px-4">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={scrollToContact}
            className="text-base sm:text-lg px-6 sm:px-10 py-6 w-full sm:w-auto min-h-[48px] touch-manipulation"
          >
            התחילו את מסע ההתאמה האישית שלכם
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
