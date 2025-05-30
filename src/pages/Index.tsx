
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import PricingSection from "@/components/PricingSection";
import BootcampSection from "@/components/BootcampSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <CoursesSection />
      <PricingSection />
      <BootcampSection />
      <Footer />
    </div>
  );
};

export default Index;
