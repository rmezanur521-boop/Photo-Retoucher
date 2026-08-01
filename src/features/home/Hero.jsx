import { ArrowRight, PlayCircle } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import OrganicShape from "@/shared/decorations/OrganicShape";
import HeroStats from "./HeroStats";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <OrganicShape position="bottom-left" className={styles.heroShapeLeft} />
        <OrganicShape position="top-right" className={styles.heroShapeRight} />

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
                icon={<PlayCircle size={16} />}
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

      <HeroStats />
    </>
  );
};

export default Hero;