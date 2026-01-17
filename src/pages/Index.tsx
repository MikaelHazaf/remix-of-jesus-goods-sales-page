import { lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";

// Lazy load sections below the fold for faster initial load
const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const KitContentsSection = lazy(() => import("@/components/landing/KitContentsSection"));
const BenefitsSection = lazy(() => import("@/components/landing/BenefitsSection"));
const PricingSection = lazy(() => import("@/components/landing/PricingSection"));
const TestimonialsSection = lazy(() => import("@/components/landing/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const FooterCTA = lazy(() => import("@/components/landing/FooterCTA"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="h-32" />}>
        <ProblemSection />
        <KitContentsSection />
        <BenefitsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FooterCTA />
      </Suspense>
    </main>
  );
};

export default Index;
