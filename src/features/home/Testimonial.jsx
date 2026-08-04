import { useState, useMemo, useEffect, useCallback } from "react";
import { Star, Globe } from "lucide-react";
import {
  TESTIMONIALS,
  TESTIMONIALS_PER_PAGE,
} from "@/constants/testimonialData";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./Testimonial.module.css";

const AUTOPLAY_INTERVAL = 4000;

const Testimonial = () => {
  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = Math.ceil(TESTIMONIALS.length / TESTIMONIALS_PER_PAGE);

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, pageIndex) => {
      const start = pageIndex * TESTIMONIALS_PER_PAGE;
      return TESTIMONIALS.slice(start, start + TESTIMONIALS_PER_PAGE);
    });
  }, [totalPages]);

  const goNext = useCallback(() => {
    setActivePage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handleDotClick = (index) => {
    setIsPaused(true);
    setActivePage(index);
  };

  useEffect(() => {
    if (isPaused || totalPages <= 1) {
      return undefined;
    }

    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext, isPaused, totalPages]);

  return (
    <section className={styles.section}>
      <OrganicShape position="bottom-right" width={260} color="#e3eafe" zIndex={0} flipX flipY />

      <div className={styles.banner}>
        <div className={styles.bannerLeft}>
          <span className={styles.eyebrow}>Testimonial</span>
          <h2 className={styles.heading}>Business Review</h2>
        </div>

        <p className={styles.bannerText}>
          Explore customer reviews to understand business reputations, with
          insights on customer satisfaction, reliability, and service quality
          for better decision-making.
        </p>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.track}>
          <div
            className={styles.trackInner}
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((pageItems, pageIndex) => (
              <div className={styles.cardsGrid} key={pageIndex}>
                {pageItems.map((testimonial) => (
                  <div key={testimonial.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <img
                        src={`/assets/images/testimonials/${testimonial.logo}`}
                        alt={testimonial.company}
                        className={styles.logo}
                      />
                      <div>
                        <p className={styles.companyName}>{testimonial.company}</p>
                        <p className={styles.website}>
                          <Globe size={12} /> {testimonial.website}
                        </p>
                      </div>
                    </div>

                    <p className={styles.reviewText}>{testimonial.review}</p>

                    <div className={styles.reviewerRow}>
                      <img
                        src={`/assets/images/testimonials/avatar-${testimonial.id}.jpg`}
                        alt={testimonial.reviewerName}
                        className={styles.avatar}
                      />
                      <div>
                        <p className={styles.reviewerName}>
                          {testimonial.reviewerName}
                        </p>
                        <p className={styles.reviewerTitle}>
                          {testimonial.reviewerTitle}
                        </p>
                        <div className={styles.stars}>
                          {Array.from({ length: testimonial.rating }).map(
                            (_, index) => (
                              <Star
                                key={index}
                                size={14}
                                fill="#f59e0b"
                                color="#f59e0b"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className={styles.dots}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial page ${index + 1}`}
                className={`${styles.dot} ${
                  activePage === index ? styles.dotActive : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;