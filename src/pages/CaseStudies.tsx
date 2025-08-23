import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Gauge,
  Droplets,
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "feedwater-optimization",
      icon: Droplets,
      title: "Feedwater Chemical Optimization",
      client: "Major Power Generation Company",
      industry: "Power Generation",
      challenge:
        "A large power plant was experiencing excessive chemical costs and scaling issues in their boiler feedwater system, leading to frequent cleaning cycles and reduced efficiency.",
      solution:
        "Implemented our AI-powered Boiler Performance Predictor™ to analyze real-time water chemistry data and optimize chemical dosing rates while predicting scaling trends.",
      implementation: [
        "Installed IoT sensors for real-time water chemistry monitoring",
        "Deployed custom AI models trained on historical data",
        "Integrated with existing SCADA systems",
        "Implemented predictive maintenance scheduling",
      ],
      results: {
        savings: "$300,000",
        efficiency: "15%",
        reduction: "50%",
        timeframe: "6 months",
      },
      metrics: [
        "Up to $300K annual savings through reduced chemical overdosing",
        "Up to 15% improvement in boiler efficiency",
        "Up to 50% reduction in unplanned cleaning cycles",
        "Up to 98% accuracy in scaling predictions",
      ],
    },
    {
      id: "pipeline-leak-prevention",
      icon: Shield,
      title: "Pipeline Leak Prevention",
      client: "International Oil & Gas Company",
      industry: "Oil & Gas",
      challenge:
        "A major pipeline operator faced recurring leak incidents costing millions in environmental cleanup, regulatory fines, and lost production.",
      solution:
        "Deployed our Leak Pattern Identifier™ AI system with smart pigging integration and real-time corrosion monitoring to predict leak locations before failures occur.",
      implementation: [
        "Installed 500+ IoT corrosion sensors along pipeline",
        "Implemented AI-enhanced smart pigging program",
        "Deployed drone surveillance with thermal imaging",
        "Created predictive maintenance protocols",
      ],
      results: {
        savings: "$1,200,000",
        efficiency: "85%",
        reduction: "90%",
        timeframe: "12 months",
      },
      metrics: [
        "Up to $1.2M+ in avoided environmental cleanup costs",
        "Up to 85% reduction in leak incidents",
        "Up to 90% improvement in early detection",
        "Zero regulatory violations achieved",
      ],
    },
    {
      id: "pressure-vessel-optimization",
      icon: Gauge,
      title: "Pressure Vessel Life Extension",
      client: "Chemical Processing Facility",
      industry: "Chemical & Fertilizer",
      challenge:
        "Critical pressure vessels were approaching end-of-life with potential replacement costs exceeding $5M, threatening production continuity.",
      solution:
        "Applied our Degradation Trend Analyzer™ with fitness-for-service assessments to safely extend vessel life while maintaining compliance.",
      implementation: [
        "Comprehensive NDT inspection program",
        "AI-powered degradation analysis",
        "Risk-based inspection scheduling",
        "Continuous structural health monitoring",
      ],
      results: {
        savings: "$2,800,000",
        efficiency: "40%",
        reduction: "60%",
        timeframe: "18 months",
      },
      metrics: [
        "Up to $2.8M saved by extending vessel life",
        "Up to 40% reduction in inspection frequency",
        "Up to 60% decrease in maintenance costs",
        "100% regulatory compliance maintained",
      ],
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      value: "$4.3M+",
      description: "Total client savings across all case studies",
    },
    {
      icon: TrendingUp,
      title: "Efficiency Gains",
      value: "47%",
      description: "Average improvement in operational efficiency",
    },
    {
      icon: Clock,
      title: "Faster ROI",
      value: "6 months",
      description: "Average time to positive return on investment",
    },
    {
      icon: Shield,
      title: "Safety Improvement",
      value: "95%",
      description: "Reduction in safety incidents across projects",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Proven Success Stories
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Real-world case studies demonstrating the transformative power of
            AI-driven asset integrity solutions across diverse industries and
            applications.
          </p>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Measurable Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-enhanced solutions deliver quantifiable results that
              directly impact your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-card border border-border rounded-lg p-6 shadow-medium"
              >
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-10 w-10 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {benefit.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <study.icon className="h-10 w-10 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {study.title}
                      </h2>
                      <p className="text-accent font-medium">
                        {study.industry}
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 shadow-medium">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 shadow-medium">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Our Solution
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {study.solution}
                    </p>
                    <h4 className="text-lg font-medium text-foreground mb-3">
                      Implementation Steps:
                    </h4>
                    <ul className="space-y-2">
                      {study.implementation.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-success mb-4">
                      Key Results
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="bg-primary rounded-lg p-8 text-primary-foreground shadow-strong">
                    <div className="text-center space-y-6">
                      <study.icon className="h-16 w-16 text-accent mx-auto" />
                      <h3 className="text-2xl font-bold">{study.client}</h3>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-accent">
                            {study.results.savings}
                          </div>
                          <div className="text-sm text-primary-foreground/80">
                            Total Savings
                          </div>
                        </div>
                        <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-accent">
                            {study.results.efficiency}
                          </div>
                          <div className="text-sm text-primary-foreground/80">
                            Efficiency Gain
                          </div>
                        </div>
                        <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-accent">
                            {study.results.reduction}
                          </div>
                          <div className="text-sm text-primary-foreground/80">
                            Cost Reduction
                          </div>
                        </div>
                        <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-accent">
                            {study.results.timeframe}
                          </div>
                          <div className="text-sm text-primary-foreground/80">
                            Implementation
                          </div>
                        </div>
                      </div>

                      <Button variant="premium" className="w-full" asChild>
                        <Link to={`/contact?case-study=${study.id}`}>
                          Discuss Similar Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Success Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Our Clients Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology and cutting-edge AI technology consistently
              deliver exceptional results across industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 shadow-medium text-center">
              <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Data-Driven Decisions
              </h3>
              <p className="text-muted-foreground">
                Every recommendation backed by comprehensive data analysis and
                AI-powered insights.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-medium text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Rapid Implementation
              </h3>
              <p className="text-muted-foreground">
                Streamlined deployment process ensures quick time-to-value and
                immediate impact.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-medium text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Continuous Support
              </h3>
              <p className="text-muted-foreground">
                Ongoing monitoring and optimization ensure sustained performance
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join industry leaders who have transformed their operations with
            IntegriSphere Solutions. Let's discuss how we can deliver similar
            results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/contact">
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/services">Explore Our Services</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
