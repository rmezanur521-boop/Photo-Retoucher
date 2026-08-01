import OrganicShape from "@/shared/decorations/OrganicShape";
import {
  STUDIO_FEATURES,
  STUDIO_PRICING,
} from "@/constants/studioIntroData";
import styles from "./StudioIntro.module.css";

const StudioIntro = () => {
  return (
    <section className={styles.section}>
      <OrganicShape position="top-right" />

      <div className={styles.container}>
        <div className={styles.visual}>
          <span className={styles.dashedLine} aria-hidden="true">
            <svg width="30" height="440" viewBox="0 0 30 440" fill="none">
              <path
                d="M28 2C20 8 12 14 10 22"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="10"
                y1="30"
                x2="10"
                y2="420"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <div className={styles.imageWrapper}>
            <img
              src="/assets/images/studio-photographer.jpg"
              alt="Photo editing studio"
              className={styles.image}
            />
            <span className={styles.supportBadge}>
              24/7
              <br />
              Support
            </span>
          </div>

          <div className={styles.thumbnailCard}>
            <div className={styles.thumbnailImageWrapper}>
              <img
                src="/assets/images/studio-thumbnail.jpg"
                alt="Background removed preview"
                className={styles.thumbnailImage}
              />
            </div>
            <span className={styles.thumbnailLabel}>
              Background Remove
              <img
                src="/assets/icons/check-circle.svg"
                alt=""
                className={styles.thumbnailCheck}
              />
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>We&apos;re Your Virtual</span>
          <h2 className={styles.heading}>
            Photo Editing and <span>Design Studio</span>
          </h2>
          <p className={styles.text}>
            Professional photo editing services for e-commerce, product,
            apparel, headshot, and portrait photography. We&apos;re available
            24/7, with turnarounds in as little as six hours.
          </p>

          <span className={styles.divider} />

          <ul className={styles.featureList}>
            {STUDIO_FEATURES.map((feature) => (
              <li key={feature.id} className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <img src={`/assets/icons/${feature.icon}.svg`} alt="" />
                </span>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.pricingBox}>
            <div className={styles.pricingLeft}>
              <span className={styles.pricingIcon}>
                <img src="/assets/icons/rocket-1.svg" alt="" />
              </span>
              <div>
                <span className={styles.pricingLabel}>
                  {STUDIO_PRICING.label.toUpperCase()}
                </span>
                <p className={styles.pricingValue}>{STUDIO_PRICING.price}</p>
              </div>
            </div>

            <ul className={styles.pricingChecklist}>
              {STUDIO_PRICING.checklist.map((item) => (
                <li key={item}>
                  <img src="/assets/icons/check-circle.svg" alt="" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioIntro;