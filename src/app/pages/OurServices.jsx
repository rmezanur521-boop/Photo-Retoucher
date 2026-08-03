import OurServicesHero from "@/features/our-services/OurServicesHero";
import PhotoEditingShowcase from "@/shared/photo-editing-showcase/PhotoEditingShowcase";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";

const OurServices = () => {
  return (
    <main>
      <OurServicesHero />
      <PhotoEditingShowcase />
      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default OurServices;