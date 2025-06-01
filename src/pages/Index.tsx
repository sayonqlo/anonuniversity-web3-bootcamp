import { Suspense, lazy } from "react";
import Header from "@/components/Header";
// Convert regular imports to lazy imports
const Hero = lazy(() => import("@/components/Hero"));
const CoursesSection = lazy(() => import("@/components/CoursesSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const BootcampSection = lazy(() => import("@/components/BootcampSection"));
const CertificationSection = lazy(() => import("@/components/CertificationSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Add loading skeleton component
const SectionSkeleton = () => (
  <div className="w-full animate-pulse">
    <div className="h-64 bg-gray-800 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-800 rounded w-2/3 mb-2"></div>
    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Suspense fallback={<SectionSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CoursesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BootcampSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CertificationSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
