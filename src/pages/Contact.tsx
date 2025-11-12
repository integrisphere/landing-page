import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Linkedin,
  Youtube,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const firstNameInputRef = useRef(null);

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = "service_vbqv9k8";
  const EMAILJS_TEMPLATE_ID = "template_bp234om";
  const EMAILJS_PUBLIC_KEY = "QWriqh51dJ4Oi3mlL";

  // Auto-focus first input when contact form section becomes visible
  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.hash === "#contact-form" &&
        firstNameInputRef.current
      ) {
        setTimeout(() => {
          firstNameInputRef.current?.focus();
        }, 100);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Handle "Start Conversation" button click
  const handleStartConversation = (e) => {
    e.preventDefault();
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Focus the first input after scrolling
      setTimeout(() => {
        firstNameInputRef.current?.focus();
      }, 500);
    }
  };

  const offices = [
    {
      city: "Calgary",
      country: "Canada",
      primary: true,
      address: "Suite 200, 1234 Industrial Blvd",
      postal: "Calgary, AB T2E 7H1",
      phone: "+1 (403) 555-0123",
      email: "calgary@integrisphere.com",
      timezone: "MST (UTC-7)",
    },
    {
      city: "Vancouver",
      country: "Canada",
      address: "Harbour Centre, 555 W Hastings St",
      postal: "Vancouver, BC V6B 4N6",
      phone: "+1 (604) 555-0199",
      email: "vancouver@integrisphere.com",
      timezone: "PST (UTC-8)",
    },
    {
      city: "Oman",
      country: "OM",
      address: "Office Address, Muscat",
      postal: "Postal Code",
      phone: "+968 1234 5678",
      email: "oman@integrisphere.com",
      timezone: "GST (UTC+4)",
    },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        service: formData.service || "General Inquiry",
        message: formData.message,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
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
              Ready to transform your asset integrity management? Contact our
              experts to discuss your specific needs and discover how our
              AI-driven solutions can optimize your operations.
            </p>
            <Button
              variant="premium"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={handleStartConversation}
            >
              Start Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
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

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800">
                    Failed to send message. Please try again or contact us
                    directly.
                  </span>
                </div>
              )}

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      ref={firstNameInputRef}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-2 border-border focus:border-accent transition-colors duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-2 border-border focus:border-accent transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-2 border-border focus:border-accent transition-colors duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-2 border-border focus:border-accent transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-2 border-border focus:border-accent transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border-2 border-border rounded-md bg-background text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Pipeline Integrity Services">
                      Pipeline Integrity Services
                    </option>
                    <option value="Pressure Equipment Inspection">
                      Pressure Equipment Inspection
                    </option>
                    <option value="Boiler and Heat Recovery Systems">
                      Boiler and Heat Recovery Systems
                    </option>
                    <option value="Logistics Intelligence & Optimization">
                      Logistics Intelligence & Optimization
                    </option>
                    <option value="Drone Inspections & CUI Detection">
                      Drone Inspections & CUI Detection
                    </option>
                    <option value="Advanced Corrosion Management">
                      Advanced Corrosion Management
                    </option>
                    <option value="General Consultation">
                      General Consultation
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, challenges, or specific requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-border focus:border-accent transition-colors duration-200"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
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
                    <span>+14034371609</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>24/7 Emergency Support Available</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-surface rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Why Choose IntegriSphere?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      AI-powered predictive maintenance reducing failures by 85%
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      50% reduction in unnecessary inspection costs
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      24/7 real-time monitoring and alert systems
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Global expertise with local market knowledge
                    </span>
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
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Reach Us Globally
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices worldwide, we're positioned to serve your asset
              integrity needs locally.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-medium border border-border text-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Calgary</h3>
                  <p className="text-sm text-muted-foreground">Canada</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Vancouver</h3>
                  <p className="text-sm text-muted-foreground">Canada</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Oman</h3>
                  <p className="text-sm text-muted-foreground">OM</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold text-foreground">
                    Global Contact
                  </span>
                </div>
                <p className="text-muted-foreground">info@integrisphere.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
