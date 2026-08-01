import { WHY_CHOOSE_US_ITEMS } from "@/constants/whyChooseUsData";
import SectionTitle from "@/shared/section-title/SectionTitle";
import FeatureCard from "@/shared/cards/FeatureCard";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="We're Your Virtual"
          heading="Professional image editing services to grow your"
          highlight="business"
          subtext="From simple clipping paths to advanced photo retouching, we provide all the image solution you need."
        />

        <div className={styles.grid}>
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <FeatureCard
              key={item.id}
              icon={`/assets/icons/why-choose/${item.id}.svg`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;