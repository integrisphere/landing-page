import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Gauge, 
  Flame, 
  Camera, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Eye
} from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      id: "pipeline",
      icon: Wrench,
      title: "Pipeline Integrity Services",
      description: "Comprehensive solutions for pipeline asset management and integrity assurance.",
      features: [
        "Leak Detection Systems: Scalable systems including pressure-based detection, flow imbalance monitors, acoustic sensors, and thermal imaging drones with AI pattern recognition",
        "Smart Pigging Programs: Inline Inspection (ILI) using magnetic flux leakage (MFL) or ultrasonic pigs to assess internal wall loss with predictive analytics",
        "Cathodic Protection Optimization: Audit and optimize CP systems for buried pipelines with AI fine-tuning based on soil resistivity",
        "Corrosion Assessments: Corrosion mapping, hotspot identification, and correlation with AI-detected trends in humidity, temperature, and fluid composition",
        "Chemical Injection Programs: Batch or continuous inhibitor dosing with AI adjusting rates to keep corrosion below 0.05 mm/year"
      ],
      aiIntegration: "Our AI continuously analyzes inline inspection data, corrosion probe readings, and SCADA inputs to predict areas of concern months in advance, reducing false alarms and enabling real-time leak detection.",
      benefits: ["Up to 50% reduction in unnecessary inspections", "Up to 30% chemical cost savings", "Real-time leak detection"]
    },
    {
      id: "pressure",
      icon: Gauge,
      title: "Pressure Equipment & Vessel Inspection",
      description: "National Board, API certified inspection programs for critical pressure equipment.",
      features: [
        "National Board, API 510, 570, 653 Inspections: Full certified inspection programs for boilers, pressure vessels, piping, and tanks",
        "Risk-Based Inspection (RBI) Programs: Custom RBI plans including inspection execution, reporting, and regulatory compliance",
        "Fitness for Service (FFS) Assessments: Custom FFS evaluations to extend asset life and avoid unplanned shutdowns",
        "Root Cause & Failure Analysis: Investigating equipment failures using metallurgical testing, fracture analysis, and AI-assisted degradation pattern matching",
        "Regulatory Compliance Management: Ensuring adherence to all relevant industry standards and regulations"
      ],
      aiIntegration: "Historical reports and photos are analyzed with machine vision to detect wear patterns or damage growth over time, leading to proactive repairs and optimized shutdown intervals.",
      benefits: ["Extended asset life", "Avoided unplanned shutdowns", "Millions saved in repair costs"]
    },
    {
      id: "boiler",
      icon: Flame,
      title: "Boiler and Heat Recovery Systems",
      description: "Advanced analysis and optimization for boiler systems and heat recovery equipment.",
      features: [
        "Boiler Feed Water System Analysis: AI analyzes water chemistry, scaling trends, and past inspection findings to fine-tune chemical dosing",
        "HRSG Inspections: On-site inspections using drones, Visual and NDT to assess fouling, cracks, and discoloration",
        "Discoloration and Component Damage Trending: Computer vision detects surface anomalies while AI correlates with water treatment data",
        "Chemical Treatment Optimization: Prevent overheating, scaling, or corrosion through AI-optimized chemical programs",
        "Equipment Coverage: Boilers, Heat Exchangers, Cooling Towers, Evaporators, RO Systems, Deaerators, and Cogeneration Units"
      ],
      aiIntegration: "Real-time chemical data is continuously analyzed by machine learning models to predict scaling trends, optimize cleaning schedules, and proactively protect critical components—extending the life of HRSGs and boilers, boosting efficiency, and dramatically reducing fuel consumption.",
      benefits: ["Extended equipment life", "Boosted efficiency", "Dramatically reduced fuel consumption"]
    },
    {
      id: "drone",
      icon: Camera,
      title: "Drone Inspections & CUI Detection",
      description: "Advanced aerial inspections and corrosion under insulation detection services.",
      features: [
        "Structural Drone Inspections: High-resolution drones for elevated flare stacks, bridges, tanks, and pipe racks reducing risk and inspection time",
        "CUI Detection: Infrared and thermal imaging detect moisture under insulation before corrosion spreads with AI anomaly pattern recognition",
        "Leak Detection Surveys: Regulatory-compliant surveys replacing costly helicopter operations, up to 400 km per flight with ultra-high-resolution cameras",
        "Real-time GPS Reporting: Leaks automatically detected, geolocated, and reported with exact GPS coordinates and real-time notifications",
        "Onboard AI Processing: Each drone equipped with onboard leak recognition software for immediate analysis and alerts"
      ],
      aiIntegration: "Each drone image is analyzed in real-time by our system to detect minute changes in heat signatures and surface textures indicative of corrosion, with AI highlighting regions with anomaly patterns not visible to the human eye.",
      benefits: ["Reduced safety risks", "Cost-effective surveys", "Immediate leak detection"]
    },
    {
      id: "corrosion",
      icon: Shield,
      title: "Advanced Corrosion Management",
      description: "Comprehensive corrosion assessment and mitigation planning services.",
      features: [
        "Internal and External Assessments: Using UT, MFL, ER probes, and coupons to assess wall loss and pitting with comprehensive analysis",
        "Customized Corrosion Monitoring Programs: Tailored programs for specific fluid type, pressure, and temperature with SCADA integration",
        "SCADA Integration: Real-time monitoring and data collection for continuous assessment and immediate alerts",
        "Mitigation Strategy Development: AI-assisted evaluations determine optimal mix of coatings, chemical inhibitors, and operational changes",
        "Advanced Analytics: SLMs evaluate data from different corrosion methods to recommend pigging frequency and inhibitor adjustments"
      ],
      aiIntegration: "SLMs evaluate data from different corrosion methods to recommend adjustments in inhibitors or pigging frequency, saving cost and preventing leaks through intelligent analysis of multiple data streams.",
      benefits: ["Prevented leaks", "Optimized maintenance", "Extended asset life"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={servicesHero} 
            alt="AI-powered industrial control systems" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl text-primary-foreground text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium backdrop-blur-sm">
                AI-Enhanced Services • Proven Results
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              AI-Enhanced Asset Integrity
              <span className="block text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Every service enhanced with custom AI solutions for superior decision-making, 
              cost reduction, and enhanced safety across global operations.
            </p>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Request Service Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <service.icon className="h-10 w-10 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Key Features:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Brain className="h-5 w-5 text-accent" />
                        <span className="text-lg font-semibold text-accent">AI Integration</span>
                      </div>
                      <p className="text-foreground mb-4">{service.aiIntegration}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="text-center p-3 bg-success/10 rounded-lg">
                            <div className="text-sm font-medium text-success">{benefit}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-surface rounded-lg p-8 shadow-strong">
                      <div className="space-y-6">
                        <div className="text-center">
                          <service.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-foreground mb-2">Service Highlights</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-card rounded-lg border border-border">
                            <Eye className="h-8 w-8 text-accent mx-auto mb-2" />
                            <div className="text-sm font-medium text-foreground">Real-time</div>
                            <div className="text-xs text-muted-foreground">Monitoring</div>
                          </div>
                          <div className="text-center p-4 bg-card rounded-lg border border-border">
                            <BarChart3 className="h-8 w-8 text-accent mx-auto mb-2" />
                            <div className="text-sm font-medium text-foreground">Predictive</div>
                            <div className="text-xs text-muted-foreground">Analytics</div>
                          </div>
                          <div className="text-center p-4 bg-card rounded-lg border border-border">
                            <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
                            <div className="text-sm font-medium text-foreground">Automated</div>
                            <div className="text-xs text-muted-foreground">Optimization</div>
                          </div>
                          <div className="text-center p-4 bg-card rounded-lg border border-border">
                            <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                            <div className="text-sm font-medium text-foreground">Enhanced</div>
                            <div className="text-xs text-muted-foreground">Safety</div>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full" asChild>
                          <Link to={`/contact?service=${service.id}`}>
                            Get Service Details
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your Asset Integrity?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Our AI-enhanced services have helped clients save millions while improving safety and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/contact">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;