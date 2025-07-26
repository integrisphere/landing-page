import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Brain, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving Canada, Indonesia, Philippines, and Africa"
    },
    {
      icon: Brain,
      title: "Advanced AI Solutions",
      description: "Predictive maintenance, visual trend analysis, failure prediction"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Adherence to CSA Z662, AER, ABSA, API standards"
    },
    {
      icon: TrendingUp,
      title: "Field-Tested Expertise",
      description: "Decades of combined hands-on integrity experience"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Industrial AI Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="space-y-6 text-primary-foreground">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium backdrop-blur-sm">
                AI by AI - Asset Integrity by Artificial Intelligence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Empowering Global
              <span className="block text-accent">Asset Integrity</span>
              Through Engineering Excellence
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl leading-relaxed">
              From pipelines to boilers, we deliver world-class inspection and engineering solutions 
              powered by custom AI technologies—ensuring asset safety, regulatory compliance, 
              and cost-efficiency worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="premium" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 text-primary-foreground hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;