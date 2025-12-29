import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Sunnah & Soul" className="h-[160px] w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-4">
              Inspired by Sunnah, Crafted for You. We bring you pure, authentic 
              wellness products rooted in prophetic traditions and natural healing.
            </p>
            <p className="text-sm text-accent font-medium">
              Crafted with care • Inspired by Sunnah
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Shop", "About", "Our Products", "Knowledge", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@sunnahandsoul.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  hello@sunnahandsoul.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9086677554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sunnah.soul.tkv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors"
                >
                  <Instagram size={16} />
                  @sunnah.soul.tkv
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sunnah & Soul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;