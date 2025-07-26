import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Wrench, 
  Gauge, 
  Flame, 
  Camera, 
  Shield,
  Brain
} from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Wrench,
      title: "Pipeline Integrity Services",
      description: "Comprehensive leak detection, smart pigging programs, cathodic protection optimization, and corrosion assessments.",
      features: ["Leak Detection Systems", "Smart Pigging Programs", "Cathodic Protection", "Corrosion Assessments"],
      aiFeature: "AI predicts areas of concern months in advance through continuous data analysis."
    },
    {
      icon: Gauge,
      title: "Pressure Equipment & Vessel Inspection",
      description: "National Board, API 510, 570, 653 inspections with RBI planning and fitness for service assessments.",
      features: ["Certified Inspections", "RBI Programs", "FFS Assessments", "Failure Analysis"],
      aiFeature: "Machine vision detects wear patterns and damage growth over time."
    },
    {
      icon: Flame,
      title: "Boiler and Heat Recovery Systems",
      description: "Advanced analysis of boiler feed water systems, HRSG inspections, and component damage trending.",
      features: ["Feed Water Analysis", "HRSG Inspections", "Component Trending", "Chemical Optimization"],
      aiFeature: "Real-time chemical data analysis predicts scaling trends and optimizes cleaning schedules."
    },
    {
      icon: Camera,
      title: "Drone Inspections & CUI Detection",
      description: "High-resolution drone inspections for elevated structures and advanced CUI detection using thermal imaging.",
      features: ["Structural Inspections", "CUI Detection", "Leak Detection Surveys", "Real-time Analysis"],
      aiFeature: "Real-time image analysis detects minute changes in heat signatures and surface textures."
    },
    {
      icon: Shield,
      title: "Advanced Corrosion Management",
      description: "Comprehensive internal and external corrosion assessments with customized monitoring programs.",
      features: ["Corrosion Assessments", "Monitoring Programs", "Mitigation Plans", "SCADA Integration"],
      aiFeature: "AI-assisted evaluations recommend optimal mix of coatings, inhibitors, and operational changes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Asset Integrity Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every service enhanced with custom AI solutions for superior decision-making, 
            cost reduction, and enhanced safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">AI Integration</span>
                  </div>
                  <p className="text-sm text-foreground">{service.aiFeature}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;