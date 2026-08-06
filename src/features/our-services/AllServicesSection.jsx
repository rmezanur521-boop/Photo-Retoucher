import { useState, useMemo } from "react";
import SectionTitle from "@/shared/section-title/SectionTitle";
import FilterTabs from "@/shared/filter-tabs/FilterTabs";
import AllServiceCard from "@/features/our-services/AllServiceCard";
import { SERVICE_CATEGORIES, SERVICES_LIST } from "@/constants/services";
import styles from "./AllServicesSection.module.css";

const AllServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") {
      return SERVICES_LIST;
    }
    return SERVICES_LIST.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="We&apos;re Your Virtual"
          heading={[
                      "All our ",
                      { text: "photo-editing ", highlight: true },
                      "services",
                    ]}
          subtext="From simple clipping paths to advanced photo retouching, we provide all the image solution you need."
          align="center"
        />

        <FilterTabs
          categories={SERVICE_CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          className={styles.tabsScope}
        />

        <div className={styles.grid}>
          {filteredServices.map((service) => (
            <AllServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;