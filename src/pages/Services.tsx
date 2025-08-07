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
    },
    {
      id: "engineering",
      icon: Brain,
      title: "Engineering Services",
      description: "Comprehensive engineering solutions with AI-enhanced analysis and optimization capabilities.",
      features: [
        "Process Hazard Analysis (PHA) & HAZOP Studies: Facilitated risk assessments identifying deviations, consequences, and safeguards with AI analyzing past reports to flag recurring failure modes",
        "HAZOP Study Development & Facilitation: Engineering new HAZOP studies for greenfield projects with certified leaders defining nodes and building safeguard protocols for full PHA compliance (ISO 17776, IEC 61882)",
        "Corrosion Control Documents (CCD) & Degradation Manuals: Facility-specific corrosion management strategies mapping materials, process fluids, and mitigation protocols",
        "Pressure Safety Valve (PSV) Engineering: Sizing, selection, installation validation, and relief scenario modeling per ASME/API 520/521 with dynamic simulation tools",
        "P&ID Validation & Digital Twin Audits: Field-verified P&ID accuracy checks and discrepancy resolution with computer vision comparing field photos/drawings",
        "Root Cause Analysis (RCA) & Failure Investigation: Forensic engineering combining metallurgy, vibration analysis, and operational forensics",
        "Design Review & Specification Audits: Third-party verification of mechanical, process, and structural designs against client standards",
        "Risk-Based Inspection (RBI) Program Development: Optimize inspection intervals using consequence/probability scoring with AI predicting probability shifts",
        "Fitness-for-Service (FFS) Assessments: Extend asset life with API 579-compliant evaluations of damaged equipment",
        "Management of Change (MOC) Engineering: Technical authorization workflow for process/equipment modifications",
        "Reliability Centered Maintenance (RCM): Failure mode-driven maintenance planning for critical systems",
        "Constructability & Operational Readiness Reviews: Build-phase intervention to eliminate commissioning delays"
      ],
      aiIntegration: "Our AI synthesizes decades of engineering decisions into actionable foresight: HAZOP Acceleration cuts study time by up to 60% with AI-generated deviation/consequence templates, Corrosion Forecasting reduces chemical costs up to 30% with predictive inhibitor dosing, Failure Prevention identifies up to 82% of PSV undersizing issues before commissioning, and Design Assurance eliminates costly rework with automated standards compliance checks.",
      benefits: ["Up to 60% faster HAZOP studies", "Up to 30% chemical cost reduction", "Up to 82% failure prevention"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-surface animate-fade-in">
        {/* Subtle background overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-5xl text-center mx-auto">
            <div className="inline-block mb-8">
              <span className="px-6 py-3 bg-secondary border border-border text-muted-foreground rounded-full text-sm font-medium shadow-subtle">
                AI-Enhanced Services • Proven Results
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-foreground">
              AI-Enhanced Asset Integrity
              <span className="block font-normal text-primary mt-2">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Every service enhanced with custom AI solutions for superior decision-making, 
              cost reduction, and enhanced safety across global operations.
            </p>
            <Button variant="default" size="lg" className="text-base px-10 py-6 shadow-medium hover:shadow-strong transition-all duration-500" asChild>
              <Link to="/contact">
                Request Service Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-6">
                      <div className="bg-primary/10 p-5 rounded-xl">
                        <service.icon className="h-12 w-12 text-primary" />
                      </div>
                      <h2 className="text-3xl font-light text-foreground">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-medium text-foreground">Key Features:</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-4">
                            <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                            <span className="text-foreground font-light leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <Brain className="h-6 w-6 text-accent" />
                        <span className="text-lg font-medium text-accent">AI Integration</span>
                      </div>
                      <p className="text-foreground font-light leading-relaxed mb-6">{service.aiIntegration}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="text-center p-4 bg-success/10 border border-success/20 rounded-lg">
                            <div className="text-sm font-medium text-success">{benefit}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-card border border-border rounded-xl p-10 shadow-subtle">
                      <div className="space-y-8">
                        <div className="text-center">
                          <service.icon className="h-20 w-20 text-primary mx-auto mb-6" />
                          <h3 className="text-2xl font-light text-foreground mb-2">Service Highlights</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-6 bg-secondary/50 border border-border rounded-xl hover:shadow-subtle transition-all duration-300">
                            <Eye className="h-10 w-10 text-primary mx-auto mb-3" />
                            <div className="text-sm font-medium text-foreground">Real-time</div>
                            <div className="text-xs text-muted-foreground font-light">Monitoring</div>
                          </div>
                          <div className="text-center p-6 bg-secondary/50 border border-border rounded-xl hover:shadow-subtle transition-all duration-300">
                            <BarChart3 className="h-10 w-10 text-primary mx-auto mb-3" />
                            <div className="text-sm font-medium text-foreground">Predictive</div>
                            <div className="text-xs text-muted-foreground font-light">Analytics</div>
                          </div>
                          <div className="text-center p-6 bg-secondary/50 border border-border rounded-xl hover:shadow-subtle transition-all duration-300">
                            <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                            <div className="text-sm font-medium text-foreground">Automated</div>
                            <div className="text-xs text-muted-foreground font-light">Optimization</div>
                          </div>
                          <div className="text-center p-6 bg-secondary/50 border border-border rounded-xl hover:shadow-subtle transition-all duration-300">
                            <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                            <div className="text-sm font-medium text-foreground">Enhanced</div>
                            <div className="text-xs text-muted-foreground font-light">Safety</div>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full shadow-subtle hover:shadow-medium transition-all duration-300" asChild>
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