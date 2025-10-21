import { Eye, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Personalized Design",
    description: "Every frame is customized to match your unique style, face shape, and personality.",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "We use only the finest materials - premium metals, acetates, and polarized lenses.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Work directly with our eyewear specialists to create your perfect pair.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            The Art of Personalization
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At <span className="font-playfair text-accent font-semibold">עין אל ציון</span>, we believe that eyewear is more than just a functional accessory. 
            It's an expression of who you are. That's why we dedicate ourselves to creating truly personalized pieces 
            that reflect your individual style and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-lg bg-card hover:shadow-luxury transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center p-8 rounded-lg bg-gradient-primary text-primary-foreground animate-fade-in">
          <blockquote className="font-playfair text-2xl sm:text-3xl italic mb-6">
            "Your eyes tell your story. Let us help you frame it perfectly."
          </blockquote>
          <p className="text-lg opacity-90">
            — The עין אל ציון Team
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
