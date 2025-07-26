import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Fuel, 
  Zap, 
  FlaskConical, 
  Mountain, 
  Droplets, 
  Building2,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Shield,
  Clock
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Fuel,
      title: "Oil & Gas",
      subtitle: "Upstream, Midstream, Downstream",
      description: "Comprehensive asset integrity solutions for the entire oil and gas value chain, from wellheads to refineries.",
      challenges: [
        "Pipeline corrosion and leak detection",
        "Pressure vessel integrity management",
        "Offshore platform monitoring",
        "Refinery equipment optimization"
      ],
      solutions: [
        "Smart pigging with AI analysis",
        "Real-time corrosion monitoring",
        "Predictive maintenance scheduling",
        "Emergency response systems"
      ],
      results: "50% reduction in unplanned shutdowns, $2M+ annual savings"
    },
    {
      icon: Zap,
      title: "Power Generation",
      subtitle: "Gas, Steam, HRSGs",
      description: "Advanced monitoring and optimization for power generation facilities to maximize efficiency and reliability.",
      challenges: [
        "Boiler tube failures",
        "HRSG performance degradation",
        "Steam turbine blade monitoring",
        "Cooling system optimization"
      ],
      solutions: [
        "AI-powered boiler analysis",
        "Thermal imaging inspections",
        "Vibration monitoring systems",
        "Chemical treatment optimization"
      ],
      results: "15% improvement in fuel efficiency, 30% reduction in maintenance costs"
    },
    {
      icon: FlaskConical,
      title: "Chemical & Fertilizer Processing",
      subtitle: "Process Optimization & Safety",
      description: "Specialized solutions for chemical processing facilities requiring high safety standards and process optimization.",
      challenges: [
        "Corrosive environment monitoring",
        "Process vessel integrity",
        "Heat exchanger fouling",
        "Emergency containment systems"
      ],
      solutions: [
        "Corrosion-resistant monitoring",
        "Real-time process optimization",
        "Fouling prediction models",
        "Automated safety protocols"
      ],
      results: "25% increase in process efficiency, zero safety incidents"
    },
    {
      icon: Mountain,
      title: "Mining & Minerals",
      subtitle: "Heavy Industry Applications",
      description: "Robust asset integrity solutions designed for the harsh environments of mining and mineral processing operations.",
      challenges: [
        "Extreme environmental conditions",
        "Heavy machinery monitoring",
        "Tailings dam integrity",
        "Conveyor system optimization"
      ],
      solutions: [
        "Ruggedized sensor networks",
        "Drone-based inspections",
        "Structural health monitoring",
        "Predictive wear analysis"
      ],
      results: "40% reduction in equipment downtime, improved worker safety"
    },
    {
      icon: Droplets,
      title: "Water and Wastewater Facilities",
      subtitle: "Infrastructure Management",
      description: "Comprehensive monitoring solutions for water treatment and distribution infrastructure.",
      challenges: [
        "Pipeline leak detection",
        "Treatment plant optimization",
        "Pump station monitoring",
        "Storage tank integrity"
      ],
      solutions: [
        "Smart water network monitoring",
        "Treatment process optimization",
        "Energy efficiency improvements",
        "Quality assurance systems"
      ],
      results: "30% reduction in water losses, improved treatment efficiency"
    },
    {
      icon: Building2,
      title: "Health Services",
      subtitle: "Critical Infrastructure",
      description: "Specialized asset management for healthcare facilities where reliability is essential for patient safety.",
      challenges: [
        "HVAC system reliability",
        "Steam sterilization systems",
        "Backup power systems",
        "Medical gas distribution"
      ],
      solutions: [
        "Critical system monitoring",
        "Preventive maintenance scheduling",
        "Air quality management",
        "Emergency system redundancy"
      ],
      results: "99.9% system uptime, improved patient safety standards"
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Industry-Specific Analytics",
      description: "Custom AI pipelines designed for each industry's unique operational environment and challenges."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Built-in compliance features for industry-specific standards and regulations."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous monitoring and real-time alerts tailored to industry critical processes."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Delivering specialized asset integrity solutions across critical industries worldwide, 
            with custom-built AI pipelines for each operational environment.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <industry.icon className="h-10 w-10 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{industry.title}</h2>
                      <p className="text-accent font-medium">{industry.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Challenges:</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Our Solutions:</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-success mb-2">Proven Results:</h4>
                    <p className="text-foreground">{industry.results}</p>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-surface rounded-lg p-8 shadow-strong border border-border">
                    <div className="text-center space-y-6">
                      <industry.icon className="h-20 w-20 text-accent mx-auto" />
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{industry.title}</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card rounded-lg p-4 border border-border">
                            <div className="text-2xl font-bold text-accent">24/7</div>
                            <div className="text-sm text-muted-foreground">Monitoring</div>
                          </div>
                          <div className="bg-card rounded-lg p-4 border border-border">
                            <div className="text-2xl font-bold text-accent">AI</div>
                            <div className="text-sm text-muted-foreground">Powered</div>
                          </div>
                          <div className="bg-card rounded-lg p-4 border border-border">
                            <div className="text-2xl font-bold text-accent">99%</div>
                            <div className="text-sm text-muted-foreground">Accuracy</div>
                          </div>
                          <div className="bg-card rounded-lg p-4 border border-border">
                            <div className="text-2xl font-bold text-accent">Real</div>
                            <div className="text-sm text-muted-foreground">Time</div>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to={`/contact?industry=${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            Get Industry Solution
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Industries Choose IntegriSphere</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Our industry-specific approach ensures solutions that understand and address 
              the unique challenges of your operational environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-foreground/10 p-6 rounded-full w-fit mx-auto mb-6 backdrop-blur-sm">
                  <benefit.icon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Optimize Your Industry Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our industry specialists to discover how IntegriSphere Solutions 
            can transform your asset integrity management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Industry Specialist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Industry Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;