import PageHeader from "@/shared/page-header/PageHeader";
import StepList from "@/features/how-it-works/StepList";
import PerfectForEveryone from "@/shared/perfect-for-everyone/PerfectForEveryone";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";
import headerStyles from "@/shared/page-header/PageHeader.module.css";

const HowItWorks = () => {
  return (
    <main>
      <PageHeader
        eyebrow="How It Works"
        title={
          <>
            The simple way to get{" "}
            <span className={headerStyles.highlight}>pixel perfect</span>{" "}
            photo edits
          </>
        }
        subtext="Here's how it works in 5 simple steps, from a quick background removal to a full brand image overhaul."
      />

      <StepList />
      <PerfectForEveryone />
      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default HowItWorks;