import OurServicesHero from "@/features/our-services/OurServicesHero";
import AllServicesSection from "@/features/our-services/AllServicesSection";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";

const OurServices = () => {
  return (
    <main>
      <OurServicesHero />
      <AllServicesSection />
      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default OurServices;