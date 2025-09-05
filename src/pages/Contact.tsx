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
  MessageSquare,
  Users,
  Zap,
  Shield,
} from "lucide-react";

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
  const formSectionRef = useRef(null);

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = "service_vbqv9k8";
  const EMAILJS_TEMPLATE_ID = "template_bp234om";
  const EMAILJS_PUBLIC_KEY = "QWriqh51dJ4Oi3mlL";

  // Smooth scroll to form function
  const scrollToForm = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Focus on first input after scroll completes
      setTimeout(() => {
        firstNameInputRef.current?.focus();
      }, 800);
    }
  };

  // Auto-focus first input when contact form section becomes visible
  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.hash === "#contact-form" &&
        firstNameInputRef.current
      ) {
        scrollToForm();
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
      city: "Jakarta",
      country: "Indonesia",
      address: "Menara Sudirman, 23rd Floor",
      postal: "Jakarta 12190, Indonesia",
      phone: "+62 21 555-0123",
      email: "jakarta@integrisphere.com",
      timezone: "WIB (UTC+7)",
    },
    {
      city: "Manila",
      country: "Philippines",
      address: "BGC Central Plaza, 15th Floor",
      postal: "Taguig City 1630, Philippines",
      phone: "+63 2 555-0123",
      email: "manila@integrisphere.com",
      timezone: "PHT (UTC+8)",
    },
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Westlands Business Park",
      postal: "Nairobi 00100, Kenya",
      phone: "+254 20 555-0123",
      email: "nairobi@integrisphere.com",
      timezone: "EAT (UTC+3)",
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
      <div className="animate-fade-in">
        {/* Hero Section - Redesigned without hero image */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold backdrop-blur-sm">
                    Global Support • Expert Consultation
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
                  Let's Build
                  <span className="block text-primary">Something Great</span>
                  <span className="block text-accent">Together</span>
                </h1>
                <p className="text-xl mb-10 max-w-2xl mx-auto lg:mx-0 text-muted-foreground leading-relaxed">
                  Ready to transform your asset integrity management? Our
                  AI-driven solutions have helped companies reduce failures by
                  85% and cut inspection costs by 50%.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={scrollToForm}
                >
                  Start Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Right Side - Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized advice from our industry experts
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-8 sm:mt-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Global Team
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 support across 4 continents
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:-mt-8">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    AI-Powered
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Cutting-edge technology for predictive maintenance
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Proven Results
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    85% reduction in equipment failures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section
          ref={formSectionRef}
          id="contact-form"
          className="py-20 bg-background"
        >
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        ref={firstNameInputRef}
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border border-input"
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
                        className="border border-input"
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
                      className="border border-input"
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
                      className="border border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
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
                      className="border border-input"
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
                        AI-powered predictive maintenance reducing failures by
                        85%
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
                    <span className="text-lg font-semibold text-foreground">
                      Global Contact
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    contact@integrisphere.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
