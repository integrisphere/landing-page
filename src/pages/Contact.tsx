import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Globe,
  Linkedin,
  Youtube,
  ArrowRight
} from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const offices = [
    {
      city: "Calgary",
      country: "Canada",
      primary: true,
      address: "Suite 200, 1234 Industrial Blvd",
      postal: "Calgary, AB T2E 7H1",
      phone: "+1 (403) 555-0123",
      email: "calgary@integrisphere.com",
      timezone: "MST (UTC-7)"
    },
    {
      city: "Jakarta",
      country: "Indonesia",
      address: "Menara Sudirman, 23rd Floor",
      postal: "Jakarta 12190, Indonesia",
      phone: "+62 21 555-0123",
      email: "jakarta@integrisphere.com",
      timezone: "WIB (UTC+7)"
    },
    {
      city: "Manila",
      country: "Philippines",
      address: "BGC Central Plaza, 15th Floor",
      postal: "Taguig City 1630, Philippines",
      phone: "+63 2 555-0123",
      email: "manila@integrisphere.com",
      timezone: "PHT (UTC+8)"
    },
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Westlands Business Park",
      postal: "Nairobi 00100, Kenya",
      phone: "+254 20 555-0123",
      email: "nairobi@integrisphere.com",
      timezone: "EAT (UTC+3)"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={contactHero} 
            alt="IntegriSphere global offices" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl text-primary-foreground text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium backdrop-blur-sm">
                Global Support • Expert Consultation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Get in
              <span className="block text-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your asset integrity management? Contact our experts 
              to discuss your specific needs and discover how our AI-driven solutions 
              can optimize your operations.
            </p>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="#contact-form">
                Start Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-medium">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Request a Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="pipeline">Pipeline Integrity Services</option>
                    <option value="pressure">Pressure Equipment Inspection</option>
                    <option value="boiler">Boiler and Heat Recovery Systems</option>
                    <option value="drone">Drone Inspections & CUI Detection</option>
                    <option value="corrosion">Advanced Corrosion Management</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, challenges, or specific requirements..."
                    rows={5}
                    required 
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-primary rounded-lg p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>info@integrisphere.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>+1 (403) 555-0123 (Global HQ)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>24/7 Emergency Support Available</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-surface rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose IntegriSphere?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">AI-powered predictive maintenance reducing failures by 85%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">50% reduction in unnecessary inspection costs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">24/7 real-time monitoring and alert systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Global expertise with local market knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Reach Us Globally</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices worldwide, we're positioned to serve your asset integrity needs locally.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-medium border border-border text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Calgary</h3>
                  <p className="text-sm text-muted-foreground">Canada</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Jakarta</h3>
                  <p className="text-sm text-muted-foreground">Indonesia</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Manila</h3>
                  <p className="text-sm text-muted-foreground">Philippines</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Nairobi</h3>
                  <p className="text-sm text-muted-foreground">Kenya</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold text-foreground">Global Contact</span>
                </div>
                <p className="text-muted-foreground">contact@integrisphere.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;