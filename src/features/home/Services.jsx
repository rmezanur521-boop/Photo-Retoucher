import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { SERVICES_LIST } from "@/constants/services";
import SectionTitle from "@/shared/section-title/SectionTitle";
import ServiceCard from "@/shared/cards/ServiceCard";
import Button from "@/shared/buttons/Button";
import StudioIntro from "./StudioIntro";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <>
      <StudioIntro />

      <section className={styles.servicesGrid}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="We're Your Virtual"
            heading="Professional image editing services to grow your"
            highlight="business"
            subtext="From simple clipping paths to advanced photo retouching, we provide all the image solutions you need."
          />

          <div className={styles.grid}>
            {SERVICES_LIST.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className={styles.viewAllWrapper}>
            <Button
              to={ROUTES.PRICING}
              variant="primary"
              icon={<ArrowRight size={16} />}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;