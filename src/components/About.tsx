import { Eye, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "עיצוב מותאם אישית",
    description: "כל מסגרת מותאמת במיוחד לסגנון הייחודי שלך, צורת הפנים והאישיות שלך.",
  },
  {
    icon: Sparkles,
    title: "חומרים איכוtiים",
    description: "אנו משתמשים רק בחומרים האיכותיים ביותר - מתכות פרמיום, אצטטים ועדשות מקוטבות.",
  },
  {
    icon: Users,
    title: "ייעוץ מקצועי",
    description: "עבדו ישירות עם מומחי המשקפיים שלנו ליצירת הזוג המושלם עבורכם.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            אומנות ההתאמה האישית
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-right">
            ב<span className="font-playfair text-accent font-semibold">עין אל ציון</span>, אנו מאמינים שמשקפיים הם יותר מסתם אביזר פונקציונלי.
            זה ביטוי של מי שאתם. לכן אנו מקדישים את עצמנו ליצירת יצירות מותאמות אישית באמת
            המשקפות את הסגנון והחזון האישיים שלכם.
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
            "העיניים שלך מספרות את הסיפור שלך. תנו לנו לעזור לכם למסגר אותו בצורה מושלמת."
          </blockquote>
          <p className="text-lg opacity-90">
            — צוות עין אל ציון
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
