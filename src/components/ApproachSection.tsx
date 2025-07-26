import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, BarChart3, Cog, Eye, ArrowRight } from "lucide-react";
import aiMonitoring from "@/assets/ai-monitoring.jpg";

const ApproachSection = () => {
  const steps = [
    {
      icon: Eye,
      title: "Comprehensive Gap Analysis",
      description: "Rigorous evaluation of your current integrity management system against industry best practices and regulatory standards.",
      highlights: ["Identify missing systems", "Benchmark against global frameworks", "Highlight over-engineering areas"]
    },
    {
      icon: Cog,
      title: "System Integration & Optimization",
      description: "Holistic optimization focusing on how multiple systems interact to address single issues efficiently.",
      highlights: ["Integrated system analysis", "Resource allocation optimization", "Cost reduction strategies"]
    },
    {
      icon: BarChart3,
      title: "Advanced Tools & Analytics",
      description: "Cutting-edge technologies and methodologies for enhanced understanding and efficiency.",
      highlights: ["Digital twin technology", "Machine learning models", "Predictive analytics software"]
    },
    {
      icon: CheckCircle,
      title: "Data-Driven Decision Making",
      description: "Every action backed by reliable information from real-time data collection and analysis.",
      highlights: ["Real-time monitoring", "Software integration", "Scenario modeling"]
    }
  ];

  const benefits = [
    "Cost Efficiency: Eliminate redundant measures and optimize resource utilization",
    "Enhanced Safety: Maintain compliance while proactively addressing risks",
    "Environmental Responsibility: Reduce chemical usage through smart integration",
    "Operational Excellence: Improve pipeline reliability and maximize asset value",
    "Future-Proof Solutions: Stay ahead with state-of-the-art technologies"
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Approach to Integrity Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gap Analysis & Optimization through Engineering Excellence and AI-Driven Innovation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img 
              src={aiMonitoring} 
              alt="AI Monitoring Systems" 
              className="w-full rounded-lg shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Key Benefits of Our Approach</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="space-y-6">
                <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-accent mb-2">50%</div>
                  <div className="text-primary-foreground/80">Cost Reduction in Unnecessary Inspections</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-accent mb-2">30%</div>
                  <div className="text-primary-foreground/80">Chemical Cost Savings</div>
                </div>
                <Button variant="premium" size="lg" asChild>
                  <Link to="/services">
                    Learn More About Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;