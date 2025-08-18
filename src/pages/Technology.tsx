import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cpu, 
  Database, 
  Eye, 
  BarChart3, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Gauge
} from "lucide-react";
import technologyHero from "@/assets/technology-hero.jpg";

const Technology = () => {
  const aiSuite = [
    {
      icon: Brain,
      title: "Predictive Maintenance Models",
      description: "Machine learning algorithms that analyze historical data to predict equipment failures before they occur.",
      features: ["Failure pattern recognition", "Maintenance schedule optimization", "Risk assessment automation"]
    },
    {
      icon: BarChart3,
      title: "Turnaround Optimization Tools",
      description: "AI-driven planning tools that minimize downtime and maximize efficiency during maintenance turnarounds.",
      features: ["Resource allocation optimization", "Critical path analysis", "Cost-benefit modeling"]
    },
    {
      icon: Eye,
      title: "Remote Monitoring Integration",
      description: "IoT sensors connected to AI analytics for continuous asset health monitoring.",
      features: ["24/7 real-time monitoring", "Automated alert systems", "Trend analysis and reporting"]
    },
    {
      icon: Zap,
      title: "Failure Mode Prediction Engines",
      description: "Advanced algorithms that identify potential failure modes and recommend preventive actions.",
      features: ["Multi-variable analysis", "Scenario modeling", "Risk mitigation strategies"]
    }
  ];

  const tools = [
    {
      name: "Degradation Trend Analyzer™",
      description: "Proprietary tool that tracks asset degradation patterns and predicts remaining useful life.",
      icon: BarChart3,
      benefits: ["85% accuracy in failure prediction", "Extended asset life by 30%", "Reduced maintenance costs"]
    },
    {
      name: "Boiler Performance Predictor™",
      description: "AI-powered system that optimizes boiler efficiency and predicts maintenance needs.",
      icon: Gauge,
      benefits: ["15% fuel savings", "Reduced emissions", "Optimized cleaning schedules"]
    },
    {
      name: "Leak Pattern Identifier™",
      description: "Advanced pattern recognition system for early leak detection and location identification.",
      icon: Eye,
      benefits: ["99.7% accuracy rate", "Real-time notifications", "GPS coordinate precision"]
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "Proprietary SLM Technology",
      description: "Small Language Models developed per client, ensuring private, contextual insights without compromising data security.",
      highlights: ["Client-specific training", "Data privacy protection", "Contextual insights"]
    },
    {
      icon: Database,
      title: "Integrated Data Analysis",
      description: "AI seamlessly integrates across inspections, water analysis, photo evaluation, and SCADA data.",
      highlights: ["Multi-source integration", "Real-time processing", "Unified insights dashboard"]
    },
    {
      icon: Cpu,
      title: "Edge Computing Capabilities",
      description: "Local processing power ensures real-time decision making even in remote locations.",
      highlights: ["Low latency processing", "Offline capabilities", "Enhanced security"]
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  AI Technology • Proven Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
                Revolutionizing Asset Integrity
                <span className="block text-primary">with AI-Driven Solutions</span>
              </h1>
              <p className="text-xl mb-10 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
                Our proprietary AI technologies transform traditional asset management into 
                predictive, proactive, and profitable operations.
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  Explore AI Implementation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Suite Overview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our AI Suite</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence solutions designed specifically for asset integrity management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {aiSuite.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border-2 border-border rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0">
                      <item.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-base text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Proprietary Tools */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Proprietary AI Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading tools developed in-house to solve specific asset integrity challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 text-center"
              >
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <tool.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{tool.name}</h3>
                <p className="text-muted-foreground mb-6">{tool.description}</p>
                <div className="space-y-2">
                  {tool.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-success/10 text-success text-sm font-medium py-2 px-3 rounded-full">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique approach to AI implementation ensures maximum value and security for every client
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className="bg-gradient-primary p-6 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {item.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <div className="text-sm font-semibold text-primary">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white shadow-glow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">99.7%</div>
                <div className="text-lg font-medium">AI Accuracy Rate</div>
                <div className="text-sm text-white/80">Across all monitoring systems</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">85%</div>
                <div className="text-lg font-medium">Cost Reduction</div>
                <div className="text-sm text-white/80">Average client savings</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-lg font-medium">Monitoring</div>
                <div className="text-sm text-white/80">Continuous asset surveillance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AI Implementation Process</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Our proven methodology ensures seamless integration of AI solutions with your existing systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Comprehensive analysis of your current systems and data sources" },
              { step: "02", title: "Development", description: "Custom AI model development tailored to your specific requirements" },
              { step: "03", title: "Integration", description: "Seamless integration with existing SCADA and monitoring systems" },
              { step: "04", title: "Optimization", description: "Continuous learning and model refinement for improved performance" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent text-primary text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-primary-foreground/80">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Implement AI in Your Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our AI-driven solutions can transform your asset integrity management 
            and deliver measurable ROI in the first year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Implementation Cases</Link>
            </Button>
          </div>
        </div>
        </section>
      </div>
    </Layout>
  );
};

export default Technology;