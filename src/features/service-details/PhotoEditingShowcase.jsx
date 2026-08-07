import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import SectionTitle from "@/shared/section-title/SectionTitle";
import styles from "./PhotoEditingShowcase.module.css";

const THUMBNAILS = [
  {
    id: "toy",
     beforeImage: "/assets/images/services/background-removal-before.jpg",
    afterImage: "/assets/images/services/background-removal-after.jpg",
  },
  {
    id: "lighting",
     beforeImage: "/assets/images/services/clipping-path-before.jpg",
    afterImage: "/assets/images/services/clipping-path-after.jpg",
  },
  {
    id: "onesie",
    beforeImage: "/assets/images/services/ghost-mannequin-before.jpg",
    afterImage: "/assets/images/services/ghost-mannequin-after.jpg",
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
          eyebrow="We&apos;re Your Virtual"
          heading={[
                      "All our ",
                      { text: "photo-editing ", highlight: true },
                      "services",
                    ]}
          subtext="From simple clipping paths to advanced photo retouching, we provide all the image solution you need."
          align="center"
        />
        <div className={styles.demo}>
          <div className={styles.heroCompare}>
            <BeforeAfterCard
              variant="plain"
              beforeImage="/assets/images/hero-before.jpg"
              afterImage="/assets/images/hero-after.jpg"
              afterLabel="Before"
            />
          </div>

          <div className={styles.demoCaption}>
            <h3 className={styles.demoTitle}>Fine Feather Masking</h3>
            <p className={styles.demoText}>
              Fine From simple clipping paths to advanced photo retouching,
            </p>
          </div>

          <div className={styles.thumbGrid}>
            {THUMBNAILS.map((thumb) => (
              <BeforeAfterCard
                key={thumb.id}
                variant="thumb"
                beforeImage={thumb.beforeImage}
                afterImage={thumb.afterImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoEditingShowcase;