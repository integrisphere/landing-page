import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Users, Target, Heart, TrendingUp, ArrowRight } from "lucide-react";
import inspectionTeam from "@/assets/inspection-team.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations."
    },
    {
      icon: Target,
      title: "Commitment", 
      description: "Dedicated to delivering exceptional results and exceeding client expectations through unwavering dedication."
    },
    {
      icon: Users,
      title: "Client-Oriented",
      description: "Every solution is tailored to our clients' unique needs, ensuring maximum value and satisfaction."
    },
    {
      icon: TrendingUp,
      title: "Self-Development",
      description: "Continuous learning and innovation drive our team to stay at the forefront of industry advancement."
    },
    {
      icon: Globe,
      title: "Respect",
      description: "We foster an inclusive environment that values diverse perspectives and promotes collaborative excellence."
    }
  ];

  const stats = [
    { number: "4", label: "Global Offices", sublabel: "Canada, Indonesia, Philippines, Kenya" },
    { number: "50+", label: "Years Combined", sublabel: "Industry Experience" },
    { number: "100+", label: "Projects Completed", sublabel: "Across Multiple Industries" },
    { number: "24/7", label: "AI Monitoring", sublabel: "Continuous Asset Protection" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="IntegriSphere engineering team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl text-primary-foreground">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium backdrop-blur-sm">
                Engineering Heritage • Global Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Engineering Excellence Meets
              <span className="block text-accent">AI Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl leading-relaxed mb-8">
              Built on 25+ years of Western Canadian engineering excellence, we've evolved into a global leader 
              by providing forward-thinking solutions in asset integrity that traditional inspections couldn't deliver.
            </p>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Get to Know Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-8 shadow-medium">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create measurable value for our clients' risk management strategies by delivering 
                  innovative, independent, and sustainable integrity solutions that exceed expectations 
                  and drive operational excellence.
                </p>
              </div>
              
              <div className="bg-primary rounded-lg p-8 text-primary-foreground">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  To be the global leader in asset integrity services, driving efficiency, safety, 
                  and sustainability through engineering excellence and AI-driven insights that 
                  transform how industries manage their critical assets.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={inspectionTeam} 
                alt="IntegriSphere inspection team" 
                className="w-full rounded-lg shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">IntegriSphere Solutions: Forged from Engineering Heritage, Powered by Agentic AI</h2>
            <div className="bg-card border border-border rounded-lg p-8 shadow-medium">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our foundation is built upon over 25 years of engineering excellence in Western Canada. The heritage company at our core spent decades serving the region's most critical industries—oil and gas, utilities, and Petrochemical. We pioneered rigorous asset integrity programs, mastering proactive risk management, precision inspections, and operational efficiencies. Our reputation was defined by uncompromising attention to detail, deep regulatory expertise, and a relentless drive to extend asset lifespans while optimizing costs.
                </p>
                <p>
                  Recognizing the future demanded a quantum leap, not incremental improvements, we evolved. We didn't just adopt AI; we pioneered <em>Agentic Integrity Management</em>. By fusing our engineering DNA with a visionary AI leader, IntegriSphere was born. We have moved beyond simple prediction by embedding decades of field-tested knowledge into the core of our <strong>advanced reasoning models</strong>. Our platform operates as a dynamic digital expert that doesn't just process data—it autonomously sees, reasons, and strategizes.
                </p>
                <p>
                  Today, IntegriSphere Solutions represents the true convergence of engineering discipline and transformative AI. We deliver <em>prescriptive integrity management</em> that turns complex data not just into foresight, but into optimal, validated strategy. Our proprietary <em>agentic AI</em> embeds 25 years of operational wisdom into its core reasoning engine, creating an autonomous, closed-loop system that continuously learns and optimizes your assets.
                </p>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">The IntegriSphere Advantage:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">Strategic Prescription:</h4>
                      <p className="text-muted-foreground">Move beyond mere prediction. Our AI reasons through countless scenarios to prescribe the optimal, risk-assessed action plan.</p>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">Eradicate Surprises:</h4>
                      <p className="text-muted-foreground">Identify complex, hidden threats 6-18 months before failure, giving you an unprecedented strategic window.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">Radical Efficiency:</h4>
                      <p className="text-muted-foreground">Slash operational costs by up to 50% through intelligent, AI-prescribed workflows that eliminate waste.</p>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">Automated, Ironclad Compliance:</h4>
                      <p className="text-muted-foreground">Generate flawless, auditable integrity trails that automatically exceed the most stringent regulatory standards.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground">
                  From the oil sands, SAGD, upstream, Midstream, Downstream, and power generation of Alberta and Saskatchewan to BC's Chemical networks, our solutions are engineered for Western Canada's extremes—and scaled globally. We honor the precision of our engineering roots while harnessing the strategic power of agentic AI to redefine what's possible.
                </p>
                <p className="text-xl font-bold text-accent mt-4"><em>This is Integrity. Evolved.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 text-center"
              >
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Asset Integrity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust IntegriSphere Solutions to protect their critical assets 
            and optimize their operations through AI-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
