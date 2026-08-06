import { WHY_CHOOSE_US_ITEMS } from "@/constants/whyChooseUsData";
import { Link } from "react-router-dom"
import SectionTitle from "@/shared/section-title/SectionTitle";
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
            <div key={item.id} className={styles.card}>
              <img
                src={`/assets/icons/why-choose/${item.id}.svg`}
                alt={item.title}
                className={styles.icon}
              />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              {item.linkText && (
                <Link to href={item.linkHref || "#"} className={styles.link}>
                  {item.linkText}
                </Link>
              )}
              <span className={styles.underline} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;