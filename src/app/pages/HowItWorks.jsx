import HowItWorksHero from "@/features/how-it-works/HowItWorksHero";
import StepList from "@/features/how-it-works/StepList";
import PerfectForEveryone from "@/shared/perfect-for-everyone/PerfectForEveryone";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";

const HowItWorks = () => {
  return (
    <main>
      <HowItWorksHero />
      <StepList />
      <PerfectForEveryone />
      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default HowItWorks;