import { Eye, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Design sur mesure",
    description: "Chaque monture est adaptée à votre style unique, la forme de votre visage et votre personnalité.",
  },
  {
    icon: Sparkles,
    title: "Matériaux premium",
    description: "Nous utilisons uniquement les meilleurs matériaux - métaux premium, acétates et verres polarisés.",
  },
  {
    icon: Users,
    title: "Conseil professionnel",
    description: "Travaillez directement avec nos experts en lunetterie pour créer la paire parfaite pour vous.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            L'art de la personnalisation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Chez <span className="font-playfair text-accent font-semibold">L'atelier des Arts</span>, nous croyons que les lunettes sont bien plus qu'un simple accessoire fonctionnel.
            C'est une expression de qui vous êtes. C'est pourquoi nous nous consacrons à créer des œuvres véritablement personnalisées
            qui reflètent votre style et votre vision personnels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 sm:p-8 rounded-lg bg-card hover:shadow-luxury transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center p-6 sm:p-8 rounded-lg bg-gradient-primary text-primary-foreground animate-fade-in">
          <blockquote className="font-playfair text-xl sm:text-2xl md:text-3xl italic mb-4 sm:mb-6 leading-relaxed">
            "Vos yeux racontent votre histoire. Laissez-nous vous aider à l'encadrer parfaitement."
          </blockquote>
          <p className="text-base sm:text-lg opacity-90">
            — L'équipe de L'atelier des Arts
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
