import { Link } from "react-router-dom";
import { Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo-4x.png";
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
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center group">
                <div className="h-12 w-auto transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={logo}
                    alt="IntegriSphere Logo"
                    className="h-full object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-sm">
              Empowering Global Asset Integrity Through Engineering Excellence
              and AI-Driven Innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-secondary"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@integrisphere.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-secondary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm font-light text-muted-foreground hover:text-primary transition-all duration-300 block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm font-light text-muted-foreground hover:text-primary transition-all duration-300 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">Global Offices</h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={`${office.city}-${office.country}`}
                  className="flex items-start space-x-3"
                >
                  <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-foreground font-light">
                      {office.city}
                      {office.primary && (
                        <span className="text-accent ml-1 font-medium">(HQ)</span>
                      )}
                    </div>
                    <div className="text-muted-foreground font-light">
                      {office.country}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground font-light">
              © {currentYear} IntegriSphere Solutions. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm text-muted-foreground font-light">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <span className="text-center md:text-left">AI by AI - Asset Integrity by Artificial Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
