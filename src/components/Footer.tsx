import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="עין אל ציון Logo" 
              className="h-20 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="font-playfair text-lg text-accent italic">
              Signez votre regard
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-playfair text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-playfair text-xl font-semibold mb-4">Contact</h4>
            <p className="mb-2">
              <a href="mailto:contact@eyealzion.com" className="hover:text-accent transition-colors">
                contact@eyealzion.com
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+972123456789" className="hover:text-accent transition-colors">
                +972 12 345 6789
              </a>
            </p>
            <p className="text-sm opacity-80">
              Tel Aviv, Israel
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {currentYear} עין אל ציון. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
