import { ArrowRight} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./Hero.module.css";

const STATS = [
  {
    icon: "/assets/icons/image-icon.png",
    value: "50,000+",
    label: "Image Edited Daily",
  },
  {
    icon: "/assets/icons/users-icon.png",
    value: "42,000+",
    label: "Happy Clients",
  },
  {
    icon: "/assets/icons/satisfaction-icon.png",
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: "/assets/icons/turnaround-icon.png",
    value: "6-24h",
    label: "Average Turnaround",
  },
];

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero}>
      <OrganicShape position="bottom-left" width={260} color="#e3eafe" zIndex={0} flipY />

        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.badge}>Photo Editing Simplified</span>

            <h1 className={styles.heading}>
              Get perfectly edited images in as little as{" "}
              <span className={styles.highlight}>6 hours</span>
            </h1>

            <p className={styles.subtext}>
              Professional background removal, retouching, and product photo
              editing that helps your brand look flawless and sell faster.
            </p>

            <div className={styles.actions}>
              <Button
                to={ROUTES.REGISTER}
                variant="primary"
                icon={<ArrowRight size={16} />}
              >
                Get Started Free
              </Button>

              <Button
                to={ROUTES.HOW_IT_WORKS}
                variant="outline"
                icon={<ArrowRight size={16} />}
              >
                How it works
              </Button>
            </div>

            <div className={styles.trust}>
              <div className={styles.avatarStack}>
                <img src="/assets/images/avatar-1.jpg" alt="Client" />
                <img src="/assets/images/avatar-2.jpg" alt="Client" />
                <img src="/assets/images/avatar-3.jpg" alt="Client" />
              </div>
              <span className={styles.trustText}>
                Trusted by 4,200+ Businesses
              </span>
            </div>
          </div>

          <div className={styles.visual}>
            <BeforeAfterCard
              beforeImage="/assets/images/hero-before.jpg"
              afterImage="/assets/images/hero-before.jpg"
              variant="plain"
            />
          </div>
        </div>
      </section>

      <div className={styles.statsBar}>
        <div className={styles.statsContainer}>
          {STATS.map(({ icon, value, label }, i) => (
            <div className={styles.stat} key={i}>
              <div className={styles.iconCircle}>
                <img src={icon} alt={label} className={styles.statIcon} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
              {i < STATS.length - 1 && <div className={styles.divider} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;