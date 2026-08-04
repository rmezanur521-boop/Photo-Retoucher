import { ArrowRight} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import OrganicShape from "@/shared/decorations/OrganicShape";
import ServiceHighlightCard from "@/features/our-services/ServiceHighlightCard";
import styles from "./OurServicesHero.module.css";

const HERO_THUMBNAILS = [
  {
    id: "clipping-path",
    label: "Product Photo",
    description: "Clean cutouts for any background",
  },
  {
    id: "background-removal",
    label: "Background Removal",
    description: "Clean cutouts for any background",
  },
  {
    id: "jewelry-retouching",
    label: "Ecommerce Photo",
    description: "Clean cutouts for any background",
  },
  {
    id: "image-masking",
    label: "Image Masking",
    description: "Clean cutouts for any background",
  },
];

const OurServicesHero = () => {
  return (
    <section className={styles.hero}>

      <OrganicShape position="bottom-left" width={200} color="#e3eafe" zIndex={0} flipY />

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
            icon={<ArrowRight size={16} />}
          >
            How it works
          </Button>
        </div>

        <div className={styles.thumbnailRow}>
          {HERO_THUMBNAILS.map((thumb) => (
            <ServiceHighlightCard
              key={thumb.id}
              title={thumb.label}
              description={thumb.description}
              beforeImage={`/assets/images/services/${thumb.id}-before.jpg`}
              afterImage={`/assets/images/services/${thumb.id}-after.jpg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;