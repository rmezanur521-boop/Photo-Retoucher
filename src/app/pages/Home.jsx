import Hero from "@/features/home/Hero";
import Services from "@/features/home/Services";
import WhyChooseUs from "@/features/home/WhyChooseUs";
import Testimonial from "@/shared/testimonial-sectiion/Testimonial";
import PerfectForEveryone from "@/shared/perfect-for-everyone/PerfectForEveryone";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonial />
      <PerfectForEveryone />
      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default Home;