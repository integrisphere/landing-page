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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Industrial pipeline infrastructure" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-lg font-semibold shadow-subtle">
                AI by AI - Asset Integrity by Artificial Intelligence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight text-white">
              Empowering Global
              <span className="block font-bold text-accent-glow mt-4">Asset Integrity</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-medium text-white/90 mt-6">
                Through Engineering Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
              From pipelines to boilers, we deliver world-class inspection and engineering solutions 
              powered by custom AI technologies—ensuring asset safety, regulatory compliance, 
              and cost-efficiency worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-12 justify-center">
              <Button variant="default" size="lg" className="text-lg px-10 py-7 shadow-medium hover:shadow-strong transition-all duration-500" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary shadow-subtle hover:shadow-medium transition-all duration-500" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-accent-glow mb-6 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-semibold text-xl mb-4 text-white">{feature.title}</h3>
                <p className="text-white/80 text-base leading-relaxed">{feature.description}</p>
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