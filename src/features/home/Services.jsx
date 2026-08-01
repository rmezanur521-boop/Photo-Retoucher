import { Timer, Sparkles, Tag, ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { SERVICES_LIST } from "@/constants/services";
import SectionTitle from "@/shared/section-title/SectionTitle";
import ServiceCard from "@/shared/cards/ServiceCard";
import Button from "@/shared/buttons/Button";
import styles from "./Services.module.css";


const FEATURE_ITEMS = [
  {
    id: "turnaround",
    iconName: "icon-turnaround",
    title: "Fast Turnaround",
    description: "Get your edited image within 6-24 hours. Rush Delivery available.",
  },
  {
    id: "quality",
    iconName: "icon-quality",
    title: "Pixel-Perfect Quality",
    description: "Get your edited image within 6-24 hours. Rush Delivery available.",
  },
  {
    id: "support",
    iconName: "icon-24-7",
    title: "24/7 Support",
    description: "Get your edited image within 6-24 hours. Rush Delivery available.",
  },
];

const GUARANTEE_ITEMS = [
  { id: "setup", iconName: "/assets/images/studio-photographer.jpg", label: "No Setup Fee" },
  { id: "bulk", iconName: "icon-check-2", label: "Bulk Discounts" },
  { id: "guarantee", iconName: "icon-check-3", label: "Satisfaction Guaranteed" },
];

const Services = () => {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introImageWrapper}>
            <img
              src="/assets/images/studio-photographer.jpg"
              alt="Photo editing studio"
              className={styles.introImage}
            />

            <div className={styles.supportBadge}>
              <div className={styles.iconSlot} data-icon-name="icon-support" />
              <div className={styles.supportBadgeText}>
                <span className={styles.supportBadgeTime}>24/7</span>
                <span className={styles.supportBadgeLabel}>Support</span>
              </div>
            </div>
          </div>

          <div className={styles.introContent}>
            <span className={styles.eyebrow}>We're Your Virtual</span>

            <h2 className={styles.introHeading}>
              <span className={styles.underline}>Photo Editing and</span>{" "}
              <span className={styles.underlinePrimary}>Design Studio</span>
            </h2>

            <p className={styles.introText}>
              Professional photo editing services for e-commerce, product,
              apparel, headshot, and portrait photography. We're available
              24/7, with turnarounds in as little as six hours.
            </p>

            <div className={styles.featureList}>
              {FEATURE_ITEMS.map(({ id, iconName, title, description }) => (
                <div key={id} className={styles.featureItem}>
                  <div className={styles.featureIconWrapper}>
                    <div className={styles.iconSlot} data-icon-name={iconName} />
                  </div>
                  <div className={styles.featureTextWrapper}>
                    <h3 className={styles.featureTitle}>{title}</h3>
                    <p className={styles.featureDescription}>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.priceBox}>
              <div className={styles.priceBoxLeft}>
                <div className={styles.priceIconWrapper}>
                  <div className={styles.iconSlot} data-icon-name="icon-price" />
                </div>
                <div className={styles.priceTextWrapper}>
                  <span className={styles.priceLabel}>Starting At</span>
                  <span className={styles.priceValue}>$0.25</span>
                </div>
              </div>

              <div className={styles.priceBoxDivider} />

              <div className={styles.guaranteeList}>
                {GUARANTEE_ITEMS.map(({ id, iconName, label }) => (
                  <div key={id} className={styles.guaranteeItem}>
                    <div className={styles.iconSlotSmall} data-icon-name={iconName} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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