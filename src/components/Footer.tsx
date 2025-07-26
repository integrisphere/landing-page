import { Link } from "react-router-dom";
import { Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Pipeline Integrity", href: "/services#pipeline" },
    { name: "Pressure Equipment", href: "/services#pressure" },
    { name: "Boiler Systems", href: "/services#boiler" },
    { name: "Drone Inspections", href: "/services#drone" },
    { name: "Corrosion Management", href: "/services#corrosion" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  const offices = [
    { city: "Calgary", country: "Canada", primary: true },
    { city: "Jakarta", country: "Indonesia" },
    { city: "Manila", country: "Philippines" },
    { city: "Nairobi", country: "Kenya" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">I</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">IntegriSphere</span>
                <span className="text-sm text-primary-foreground/80">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Empowering Global Asset Integrity Through Engineering Excellence and AI-Driven Innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:info@integrisphere.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Global Offices</h3>
            <div className="space-y-3">
              {offices.map((office) => (
                <div key={`${office.city}-${office.country}`} className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-primary-foreground">
                      {office.city}
                      {office.primary && <span className="text-accent ml-1">(HQ)</span>}
                    </div>
                    <div className="text-primary-foreground/80">{office.country}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} IntegriSphere Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <span>AI by AI - Asset Integrity by Artificial Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;