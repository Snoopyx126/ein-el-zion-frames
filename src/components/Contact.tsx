import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("אנא מלאו את כל השדות הנדרשים");
      return;
    }

    // Here you would typically send the form data to your backend
    toast.success("תודה! ניצור איתכם קשר בקרוב לתיאום פגישת הייעוץ.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            התחילו את המסע שלכם
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            מוכנים ליצור את הזוג המושלם שלכם? קבעו פגישת ייעוץ עם מומחי המשקפיים שלנו
            ובואו נביא את החזון שלכם לחיים.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-luxury animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 text-right">
                    שם מלא *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="השם המלא שלך"
                    required
                    className="w-full text-right"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 text-right">
                    דוא"ל *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 text-right">
                    טלפון
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="050-123-4567"
                    className="w-full text-right"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 text-right">
                    הודעה *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ספרו לנו על העדפות הסגנון שלכם ומה אתם מחפשים..."
                    required
                    className="w-full min-h-[150px] text-right"
                    dir="rtl"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full text-lg"
                >
                  קביעת פגישת ייעוץ
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="text-right">
              <h3 className="font-playfair text-3xl font-semibold text-foreground mb-8">
                צרו קשר
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                מומחי המשקפיים שלנו כאן כדי לעזור לכם למצוא או ליצור את המסגרות המושלמות.
                בין אם אתם מחפשים משהו נועז ובולט או עדין ומתוחכם,
                אנו נדריך אתכם בכל שלב של תהליך ההתאמה האישית.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">דוא"ל</h4>
                  <a 
                    href="mailto:contact@eyealzion.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@eyealzion.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">טלפון</h4>
                  <a 
                    href="tel:+972501234567" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    050-123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">מיקום</h4>
                  <p className="text-muted-foreground">
                    תל אביב, ישראל
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-secondary/50 border border-border text-right">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">שעות פגישות ייעוץ:</strong><br />
                ראשון - חמישי: 10:00 - 18:00<br />
                שישי: 10:00 - 14:00<br />
                שבת: לפי תיאום מראש בלבד
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
