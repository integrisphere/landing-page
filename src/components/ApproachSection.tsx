import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Search, 
  Settings, 
  Brain, 
  BarChart3, 
  RefreshCw,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Shield,
  Leaf,
  Target
} from "lucide-react";
import aiMonitoring from "@/assets/ai-monitoring.jpg";

const ApproachSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Comprehensive Gap Analysis",
      description: "Rigorous evaluation of your current integrity management system against industry best practices and regulatory standards.",
      highlights: [
        "Identify missing systems or processes hindering optimal performance",
        "Benchmark existing protocols against globally recognized frameworks (API 1160, ASME B31.8, CSA Z662)",
        "Highlight over-engineering or redundant measures for efficient resource allocation"
      ]
    },
    {
      icon: Settings,
      title: "System Integration & Optimization",
      description: "Holistic optimization focusing on how different systems interact when addressing single issues like internal corrosion.",
      highlights: [
        "Integrated analysis of coatings, inline pigging, chemical injection, material selection, and process control",
        "Optimize resource allocation while maintaining corrosion control",
        "Reduce costs, minimize environmental impact, ensure fit-for-purpose solutions"
      ]
    },
    {
      icon: Brain,
      title: "Advanced Tools for Enhanced Understanding",
      description: "Leverage cutting-edge tools and methodologies for efficiency, effectiveness, and fit-for-purpose solutions.",
      highlights: [
        "ER Probes, Coupon Testing, Smart Pigs with Advanced Sensors",
        "Digital Twin Technology, Machine Learning Models, Geospatial Mapping",
        "IoT-Enabled Sensors, Predictive Analytics Software"
      ]
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making",
      description: "Methodology rooted in data-driven decisions, ensuring every action is backed by reliable information.",
      highlights: [
        "Real-time data collection using ER probes, coupons, and IoT sensors",
        "Software integration providing unified view of pipeline integrity",
        "Scenario modeling using digital twins and simulation tools"
      ]
    },
    {
      icon: RefreshCw,
      title: "Continuous Improvement Framework",
      description: "Pipeline integrity management requires ongoing refinement through performance audits and adaptive strategies.",
      highlights: [
        "Regular performance audits ensuring alignment with evolving standards",
        "Feedback loops incorporating lessons learned from past incidents",
        "Dynamic strategy adjustments based on new technologies and operational demands"
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Eliminate redundant measures and optimize resource utilization",
      metric: "Up to 50% savings"
    },
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Maintain compliance while proactively addressing potential risks",
      metric: "Zero incidents"
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Reduce chemical usage and energy consumption through smart integration",
      metric: "Up to 30% reduction"
    },
    {
      icon: Target,
      title: "Operational Excellence",
      description: "Improve overall pipeline reliability and uptime, maximizing asset value",
      metric: "99.9% uptime"
    }
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <benefit.icon className="h-6 w-6 text-accent" />
                      <h4 className="font-semibold text-lg">{benefit.title}</h4>
                    </div>
                    <p className="text-primary-foreground/80 text-sm mb-2">{benefit.description}</p>
                    <div className="text-accent font-bold">{benefit.metric}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="space-y-6">
                <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-accent mb-2">Up to 50%</div>
                  <div className="text-primary-foreground/80">Cost Reduction in Unnecessary Inspections</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-accent mb-2">Up to 30%</div>
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