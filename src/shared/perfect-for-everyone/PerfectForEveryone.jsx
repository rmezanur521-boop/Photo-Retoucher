import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import SectionTitle from "@/shared/section-title/SectionTitle";
import {
  PERFECT_FOR_FEATURED,
  PERFECT_FOR_ITEMS,
} from "@/constants/perfectForData";
import styles from "./PerfectForEveryone.module.css";

const PerfectForEveryone = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Perfect For Everyone"
          heading="You don't have to do everything"
          highlight="yourself"
          subtext="From simple clipping paths to advanced photo retouching, Outsourced image editing services are ideal if you are…"
        />

        <div className={styles.grid}>
          <div className={styles.featuredCard}>
            <img
              src={`/assets/images/perfect-for/${PERFECT_FOR_FEATURED.id}.jpg`}
              alt={PERFECT_FOR_FEATURED.title}
              className={styles.featuredImage}
            />
            <h3 className={styles.featuredTitle}>
              {PERFECT_FOR_FEATURED.title}
            </h3>
            <p className={styles.featuredDescription}>
              {PERFECT_FOR_FEATURED.description}
            </p>
          </div>

          <div className={styles.itemsColumn}>
            {PERFECT_FOR_ITEMS.map((item) => (
              <div key={item.id} className={styles.itemCard}>
                <img
                  src={`/assets/images/perfect-for/${item.id}.jpg`}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <Button
            to={ROUTES.REGISTER}
            variant="primary"
            icon={<ArrowRight size={16} />}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerfectForEveryone;