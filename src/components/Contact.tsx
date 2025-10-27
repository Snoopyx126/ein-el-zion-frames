import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs requis");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast.success("Merci ! Votre message a été envoyé. Nous vous contacterons bientôt.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending contact email:", error);
      toast.error("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Commencez votre voyage
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Prêt à créer votre paire parfaite ? Prenez rendez-vous avec nos experts en lunetterie
            et donnons vie à votre vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant border border-border animate-scale-in bg-card">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@exemple.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de vos préférences et de ce que vous recherchez..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full text-base sm:text-lg min-h-[48px] touch-manipulation"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi..." : "Prendre rendez-vous"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-foreground mb-4 sm:mb-8">
                Contactez-nous
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Nos experts en lunetterie sont là pour vous aider à trouver ou créer les montures parfaites.
                Que vous recherchiez quelque chose d'audacieux et élégant ou de subtil et sophistiqué,
                nous vous guiderons à chaque étape du processus de personnalisation.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                  <a 
                    href="mailto:Atelierdesarts.12@gmail.com" 
                    className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    Atelierdesarts.12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">WhatsApp</h4>
                  <a 
                    href="https://wa.me/33698409687" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2 min-h-[44px]"
                  >
                    +33 6 98 40 96 87
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Adresse</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    178 Avenue Daumesnil<br />75012 Paris
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-secondary border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground block mb-2">Horaires de consultation :</strong>
                Lundi - Jeudi : 10:00 - 18:00<br />
                Vendredi : 10:00 - 16:00<br />
                Samedi - Dimanche : Fermé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
