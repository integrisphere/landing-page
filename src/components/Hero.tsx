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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-surface animate-fade-in">
      {/* Subtle background overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="px-6 py-3 bg-secondary border border-border text-muted-foreground rounded-full text-sm font-medium shadow-subtle">
                AI by AI - Asset Integrity by Artificial Intelligence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
              Empowering Global
              <span className="block font-normal text-primary mt-2">Asset Integrity</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mt-4">
                Through Engineering Excellence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              From pipelines to boilers, we deliver world-class inspection and engineering solutions 
              powered by custom AI technologies—ensuring asset safety, regulatory compliance, 
              and cost-efficiency worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
              <Button variant="default" size="lg" className="text-base px-8 py-6 shadow-medium hover:shadow-strong transition-all duration-500" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-base px-8 py-6 shadow-subtle hover:shadow-medium transition-all duration-500" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:text-accent transition-colors duration-300" />
                <h3 className="font-medium text-lg mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-1 h-16 bg-gradient-to-b from-border to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;