import { useEffect, useState, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/shared/section-title/SectionTitle";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import Button from "@/shared/buttons/Button";
import { ROUTES } from "@/constants/routes";
import { SERVICES_LIST } from "@/constants/services";
import styles from "./ServicesCarousel.module.css";

const AUTOPLAY_INTERVAL = 2500;

const getIndex = (index, length) => (index + length) % length;

const ServicesCarousel = () => {
  const total = SERVICES_LIST.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => getIndex(prev + 1, total));
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => getIndex(prev - 1, total));
  }, [total]);

  const handleNextClick = () => {
    setIsPaused(true);
    goNext();
  };

  const handlePrevClick = () => {
    setIsPaused(true);
    goPrev();
  };

  const handleCardInteraction = () => {
    setIsPaused(true);
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const prevItem = SERVICES_LIST[getIndex(activeIndex - 1, total)];
  const activeItem = SERVICES_LIST[activeIndex];
  const nextItem = SERVICES_LIST[getIndex(activeIndex + 1, total)];

  return (
    <section className={styles.section}>
      <SectionTitle
        eyebrow="Our Services"
        heading="Starting at USD .20 per image"
        subtext="From simple clipping paths to advanced photo retouching, Outsourced image editing services are ideal if you are..."
      />

      <div className={styles.stage}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={handlePrevClick}
          aria-label="Previous service"
        >
          <ChevronLeft size={20} />
        </button>

        <div className={styles.track}>
          <div className={`${styles.slide} ${styles.slidePeek} ${styles.slideLeft}`}>
            <BeforeAfterCard
              variant="plain"
              beforeImage={`/assets/images/services/${prevItem.id}-before.jpg`}
              afterImage={`/assets/images/services/${prevItem.id}-after.jpg`}
            />
          </div>

          <div
            className={`${styles.slide} ${styles.slideActive}`}
            onClick={handleCardInteraction}
          >
            <div className={styles.activeCard}>
              <BeforeAfterCard
                variant="plain"
                beforeImage={`/assets/images/services/${activeItem.id}-before.jpg`}
                afterImage={`/assets/images/services/${activeItem.id}-after.jpg`}
              />

              <div className={styles.details}>
                <h3 className={styles.title}>{activeItem.label}</h3>
                <p className={styles.description}>{activeItem.description}</p>
                <p className={styles.price}>Starting at $0.20 per image</p>

                <div className={styles.actions}>
                  <Button to={ROUTES.REGISTER} variant="primary" icon={<ArrowRight size={16} />}>
                    Get My Image Edit
                  </Button>
                  <Button
                    to={ROUTES.SERVICE_DETAILS.replace(":serviceId", activeItem.id)}
                    variant="outline"
                    icon={<ArrowRight size={16} />}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.slide} ${styles.slidePeek} ${styles.slideRight}`}>
            <BeforeAfterCard
              variant="plain"
              beforeImage={`/assets/images/services/${nextItem.id}-before.jpg`}
              afterImage={`/assets/images/services/${nextItem.id}-after.jpg`}
            />
          </div>
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={handleNextClick}
          aria-label="Next service"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ServicesCarousel;