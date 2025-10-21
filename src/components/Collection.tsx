import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Golden Aviator",
    description: "Classic aviator style with premium gold metal frames",
    image: product1,
    price: "Custom",
  },
  {
    id: 2,
    name: "Tortoise Wayfarer",
    description: "Timeless wayfarer design with elegant tortoiseshell pattern",
    image: product2,
    price: "Custom",
  },
  {
    id: 3,
    name: "Gold Round Optical",
    description: "Sophisticated round frames perfect for any occasion",
    image: product3,
    price: "Custom",
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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Collection
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each piece in our collection is designed to be personalized to your unique style. 
            Choose your base design and let us customize it perfectly for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-luxury transition-all duration-500 border-border overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
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
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-semibold text-lg">
                      {product.price}
                    </span>
                    <Button 
                      variant="hero" 
                      onClick={scrollToContact}
                      className="group-hover:shadow-gold-glow"
                    >
                      Personalize
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-10 py-6"
          >
            Start Your Personalization Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
