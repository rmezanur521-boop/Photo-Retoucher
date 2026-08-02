import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import SectionTitle from "@/shared/section-title/SectionTitle";
import styles from "./PhotoEditingShowcase.module.css";

const THUMBNAILS = [
  {
    id: "toy",
    beforeImage: "/assets/images/services/thumb-toy-before.jpg",
    afterImage: "/assets/images/services/thumb-toy-after.jpg",
  },
  {
    id: "lighting",
    beforeImage: "/assets/images/services/clipping-path-befor.jpg",
    afterImage: "/assets/images/services/clipping-path-after.jpg",
  },
  {
    id: "onesie",
    beforeImage: "/assets/images/services/thumb-onesie-before.jpg",
    afterImage: "/assets/images/services/thumb-onesie-after.jpg",
  },
  {
    id: "model",
    beforeImage: "/assets/images/services/image-masking-before.jpg",
    afterImage: "/assets/images/services/image-masking-after.jpg",
  },
];

const PhotoEditingShowcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="We're Your Virtual"
          heading="All our photo-editing"
          highlight="services"
          subtext="From simple clipping paths to advanced photo retouching, we provide all the image solution you need."
          align="center"
        />

        <div className={styles.demo}>
          <BeforeAfterCard
            beforeImage="/assets/images/services/demo-bag-before.jpg"
            afterImage="/assets/images/services/demo-bag-after.jpg"
          />

          <div className={styles.demoCaption}>
            <h3 className={styles.demoTitle}>Fine Feather Masking</h3>
            <p className={styles.demoText}>
              Fine From simple clipping paths to advanced photo retouching,
            </p>
          </div>

          <div className={styles.thumbGrid}>
            {THUMBNAILS.map((thumb) => (
              <div key={thumb.id} className={styles.thumbCard}>
                <div className={styles.thumbSide}>
                  <span className={styles.thumbBadge}>Before</span>
                  <img src={thumb.beforeImage} alt="Before" />
                </div>
                <div className={styles.thumbSide}>
                  <span className={`${styles.thumbBadge} ${styles.thumbBadgeAfter}`}>
                    After
                  </span>
                  <img src={thumb.afterImage} alt="After" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoEditingShowcase;