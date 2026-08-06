import { useState, useMemo } from "react";
import PageHeader from "@/shared/page-header/PageHeader";
import SectionTitle from "@/shared/section-title/SectionTitle";
import FilterTabs from "@/shared/filter-tabs/FilterTabs";
import PortfolioCard from "@/features/portfolio/PortfolioCard";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/constants/portfolioData";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      <PageHeader
        eyebrow="Frequently Asked Question"
        title="Our Work,"
        highlight="Advantage"
        subtext="Explore a selection of real projects completed by our team. From clipping path to advanced retouching, every edit is crafted with precision, consistency, and attention to detail."
      />
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="We&apos;re Your Virtual"
            heading="All our photo-editing"
            highlight="services"
            subtext="From simple clipping paths to advanced photo retouching, we provide all the image solution you need."
          />

          <FilterTabs
            categories={PORTFOLIO_CATEGORIES}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <div className={styles.grid}>
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} id={item.id} />
            ))}
          </div>
        </div>
      </section>

      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default Portfolio;