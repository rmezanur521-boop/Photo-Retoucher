import { useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES_LIST } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import PhotoEditingShowcase from "@/features/service-details/PhotoEditingShowcase";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./ServiceDetails.module.css";
import SectionTitle from "@/shared/section-title/SectionTitle";
import HowItWorks from "@/features/service-details/HowItWorks";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const service =
    SERVICES_LIST.find((item) => item.id === serviceId) || SERVICES_LIST[0];

  return (
    <main>
      <section className={styles.hero}>
        <OrganicShape
          position="bottom-left"
          width={160}
          color="#e3eafe"
          zIndex={0}
          flipY
        />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Professional Photo Editing</span>
            <h1 className={styles.heading}>{service.label}</h1>
            <p className={styles.subtext}>{service.description}</p>

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
          </div>

          <div className={styles.heroVisual}>
            <BeforeAfterCard
              beforeImage={`/assets/images/services/${service.id}-before.jpg`}
              afterImage={`/assets/images/services/${service.id}-after.jpg`}
            />
          </div>
        </div>
      </section>

      <PhotoEditingShowcase />
      <HowItWorks />
      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default ServiceDetails;