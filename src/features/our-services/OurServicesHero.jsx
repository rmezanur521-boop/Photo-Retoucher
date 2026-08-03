import { ArrowRight, PlayCircle } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./OurServicesHero.module.css";

const HERO_THUMBNAILS = [
  { id: "product-photo", label: "Product Photo" },
  { id: "background-removal", label: "Background Removal" },
  { id: "ecommerce-photo-editing", label: "Ecommerce Photo" },
  { id: "image-masking", label: "Image Masking" },
];

const OurServicesHero = () => {
  return (
    <section className={styles.hero}>
      <OrganicShape position="top-right" />

      <div className={styles.container}>
        <h1 className={styles.heading}>
          Photo Retoucher Ltd Is Your Virtual
          <br />
          <span>Photo Editing</span> Studio
        </h1>

        <p className={styles.subtext}>
          Upload your images and let our expert designers handle the tedious
          work. Get clean, consistent, pixel-perfect results delivered in as
          little as six hours.
        </p>

        <div className={styles.actions}>
          <Button
            to={ROUTES.REGISTER}
            variant="primary"
            icon={<ArrowRight size={16} />}
          >
            Get My Image Edit
          </Button>
          <Button
            to={ROUTES.HOW_IT_WORKS}
            variant="outline"
            icon={<PlayCircle size={16} />}
          >
            How it works
          </Button>
        </div>

        <div className={styles.thumbnailRow}>
          {HERO_THUMBNAILS.map((thumb) => (
            <div key={thumb.id} className={styles.thumbnailCard}>
              <img
                src={`/assets/images/services/${thumb.id}-after.jpg`}
                alt={thumb.label}
              />
              <span>{thumb.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;