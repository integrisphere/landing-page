import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Globe,
  Linkedin,
  Youtube
} from "lucide-react";

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
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your asset integrity management? Contact our experts 
            to discuss your specific needs and discover how our AI-driven solutions 
            can optimize your operations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
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

      {/* Global Offices */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Global Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With offices across four continents, we're always close to your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {office.city}
                      {office.primary && <span className="text-accent ml-2">(HQ)</span>}
                    </h3>
                    <p className="text-muted-foreground">{office.country}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{office.address}</p>
                  <p className="text-muted-foreground">{office.postal}</p>
                  <div className="pt-2 space-y-1">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-accent" />
                      <span className="text-foreground">{office.timezone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;