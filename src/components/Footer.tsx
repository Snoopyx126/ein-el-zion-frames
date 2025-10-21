import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-right">
            <img 
              src={logo} 
              alt="עין אל ציון Logo" 
              className="h-20 w-20 rounded-full object-cover mx-auto md:mr-0 md:ml-auto mb-4"
            />
            <p className="font-playfair text-lg text-accent italic">
              Signez votre regard
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-playfair text-xl font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  בית
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  קולקציה
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  אודות
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  צור קשר
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-playfair text-xl font-semibold mb-4">יצירת קשר</h4>
            <p className="mb-2">
              <a href="mailto:contact@eyealzion.com" className="hover:text-accent transition-colors">
                contact@eyealzion.com
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+972501234567" className="hover:text-accent transition-colors">
                050-123-4567
              </a>
            </p>
            <p className="text-sm opacity-80">
              תל אביב, ישראל
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {currentYear} עין אל ציון. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
