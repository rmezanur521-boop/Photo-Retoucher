import { useState, useMemo } from "react";
import PageHeader from "@/shared/page-header/PageHeader";
import SectionTitle from "@/shared/section-title/SectionTitle";
import FilterTabs from "@/shared/filter-tabs/FilterTabs";
import ServiceCard from "@/shared/cards/ServiceCard";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";
//import { SERVICE_CATEGORIES, SERVICES_LIST } from "@/constants/services";
import headerStyles from "@/shared/page-header/PageHeader.module.css";
import styles from "./Pricing.module.css";

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") {
      return SERVICES_LIST;
    }
    return SERVICES_LIST.filter(
      (service) => service.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Photo Retoucher Ltd Is Your{" "}
            <span className={headerStyles.highlight}>
              Virtual Photo Editing
            </span>{" "}
            Studio
          </>
        }
        subtext="Upload your images and let our expert designers handle the tedious work. Get clean, consistent, pixel-perfect results delivered in as little as six hours."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="We're Your Virtual"
            heading="All our photo-editing"
            highlight="services"
            subtext="From simple clipping paths to advanced photo retouching, we provide all the image solution you need."
          />

          <FilterTabs
            categories={SERVICE_CATEGORIES}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <div className={styles.grid}>
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default Pricing;