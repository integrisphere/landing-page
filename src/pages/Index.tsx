import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ApproachSection from "@/components/ApproachSection";
import ServicesPreview from "@/components/ServicesPreview";

const Index = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <Hero />
        <ServicesPreview />
        <ApproachSection />
      </div>
    </Layout>
  );
};

export default Index;
