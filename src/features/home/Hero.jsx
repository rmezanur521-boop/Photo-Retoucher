import { useEffect, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import { HERO_STATS, HERO_SLIDES } from "@/constants/heroData";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./Hero.module.css";

const AUTOPLAY_INTERVAL = 5000;

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handleDotClick = (index) => {
    setIsPaused(true);
    setActiveSlide(index);
  };

  const handleVisualClick = () => {
    setIsPaused(true);
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const activeItem = HERO_SLIDES[activeSlide];

  return (
    <div className={styles.heroWrapper}>
       <OrganicShape
        position="bottom-left"
        width={260}
        color="#e3eafe"
        zIndex={0}
        flipY
        className={styles.heroShapeLeft}
      />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.badge}>
                <img src="/assets/icons/home-first.svg" alt="" className={styles.badgeIcon} />
                PROFESSIONAL IMAGE EDITING SERVICE
              </span>
            <h1 className={styles.heading}>
              Get perfectly edited images in as little as{" "}
              <span className={styles.highlight}>
                6 hours
                <svg
                  className={styles.underline}
                  viewBox="0 0 220 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12C40 4 100 3 150 8C175 10.5 200 14 217 18"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 19C40 15 100 15 150 18C175 19.5 200 21 217 22"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
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
                 <img src="/assets/images/avatar-4.jpg" alt="Client" />
                 <img src="/assets/images/avatar-5.jpg" alt="Client" />
              </div>
              <span className={styles.trustText}>
                Trusted by 4,200+ Businesses
              </span>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualCard} onClick={handleVisualClick}>
              <BeforeAfterCard
                beforeImage={activeItem.beforeImage}
                afterImage={activeItem.afterImage}
                variant="plain"
              />
            </div>

            <div className={styles.dots}>
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`${styles.dot} ${
                    index === activeSlide ? styles.dotActive : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Show ${slide.id} example`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.statsBar}>
        <div className={styles.statsContainer}>
          {HERO_STATS.map(({ id, icon, value, label }, i) => (
            <div className={styles.stat} key={i}>
              <div className={styles.iconCircle}>
                <img src={icon} alt={label} className={styles.statIcon} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
              {i < HERO_STATS.length - 1 && <div className={styles.divider} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;