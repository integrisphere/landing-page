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
    <section className="py-24 bg-gradient-surface animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Our Approach to Integrity Management
          </h2>
          <p className="text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gap Analysis & Optimization through Engineering Excellence and AI-Driven Innovation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-accent/10 p-4 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <step.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground font-light mb-6 leading-relaxed">{step.description}</p>
                    <ul className="space-y-3">
                      {step.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                          <span className="text-foreground font-light leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-secondary to-muted p-8 rounded-2xl">
              <img 
                src={aiMonitoring} 
                alt="AI Monitoring Systems" 
                className="w-full rounded-xl shadow-medium"
              />
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-foreground mb-8">Key Benefits of Our Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-secondary/50 border border-border rounded-xl p-6 hover:shadow-subtle transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <benefit.icon className="h-6 w-6 text-primary" />
                      <h4 className="font-medium text-lg text-foreground">{benefit.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm font-light mb-3 leading-relaxed">{benefit.description}</p>
                    <div className="text-accent font-medium">{benefit.metric}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="space-y-6">
                <div className="bg-secondary/30 border border-border rounded-xl p-8">
                  <div className="text-4xl font-light text-primary mb-2">Up to 50%</div>
                  <div className="text-muted-foreground font-light">Cost Reduction in Unnecessary Inspections</div>
                </div>
                <div className="bg-secondary/30 border border-border rounded-xl p-8">
                  <div className="text-4xl font-light text-primary mb-2">Up to 30%</div>
                  <div className="text-muted-foreground font-light">Chemical Cost Savings</div>
                </div>
                <Button variant="default" size="lg" className="shadow-medium hover:shadow-strong transition-all duration-300" asChild>
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