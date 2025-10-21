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
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to your backend
    toast.success("Thank you! We'll be in touch soon to schedule your consultation.");
    
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
            Begin Your Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to create your perfect pair? Book a consultation with our eyewear specialists 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-luxury animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
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
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+972 XX XXX XXXX"
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
                    placeholder="Tell us about your style preferences and what you're looking for..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full text-lg"
                >
                  Book Your Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div>
              <h3 className="font-playfair text-3xl font-semibold text-foreground mb-8">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our eyewear specialists are here to help you find or create the perfect frames. 
                Whether you're looking for something bold and statement-making or subtle and sophisticated, 
                we'll guide you through every step of the personalization process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:contact@eyealzion.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@eyealzion.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a 
                    href="tel:+972123456789" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +972 12 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Tel Aviv, Israel
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-secondary/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Consultation Hours:</strong><br />
                Sunday - Thursday: 10:00 AM - 6:00 PM<br />
                Friday: 10:00 AM - 2:00 PM<br />
                Saturday: By appointment only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
