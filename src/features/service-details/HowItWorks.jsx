import styles from "./HowItWorks.module.css";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";

const STEPS = [
  {
    number: "01",
    icon: "/assets/icons/upload-cloud.svg",
    title: "Order your edits",
    description:
      "Upload your images, let us know what you need, and get a clear, budget-friendly price instantly",
  },
  {
    number: "02",
    icon: "/assets/icons/edit-pencil.svg",
    title: "Our experts edit your images",
    description:
      "Our professional designers carefully edit your images by hand with maximum precision",
  },
  {
    number: "03",
    icon: "/assets/icons/clock-outline.svg",
    title: "Get your images back fast",
    description:
      "Our professional designers carefully edit your images by hand with maximum precision",
  },
];

const CheckCircleIcon = () => (
  <svg viewBox="0 0 64 64" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="var(--color-primary)" />
    <path
      d="M20 33 L28 41 L44 24"
      stroke="#FFFFFF"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Our Process</span>
          <h2 className={styles.heading}>
            How it <span>Works</span>
          </h2>
          <p className={styles.subtext}>
            A simple, smooth process to get your images edited perfectly
          </p>

          <div className={styles.steps}>
            {STEPS.map((step, index) => (
              <div key={step.number} className={styles.stepRow}>
                <div className={styles.stepNumberCol}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  {index !== STEPS.length - 1 && (
                    <span className={styles.stepConnector} />
                  )}
                </div>

                <div className={styles.stepBody}>
                  <div className={styles.stepContent}>
                    <div className={styles.stepIcon}>
                      <img src={step.icon} alt="" />
                    </div>
                    <div className={styles.stepInfo}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepText}>{step.description}</p>
                    </div>
                  </div>
                  {index !== STEPS.length - 1 && (
                    <span className={styles.stepDivider} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.visualWrapper}>
            <svg
              className={styles.connectorLines}
              viewBox="0 0 460 560"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              {/* upload card -> edit card */}
              <path
                d="M60 145 C 20 165, 20 180, 140 200"
                stroke="#0041FF"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* edit card -> completed card */}
              <path
                d="M310 345 C 370 365, 370 385, 230 400"
                stroke="#0041FF"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Step 1 - Upload */}
            <div className={`${styles.card} ${styles.uploadCard}`}>
              <div className={styles.browserDots}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.uploadIcon}>
                <img src="/assets/icons/upload-cloud.svg" alt="" />
              </div>
              <span className={styles.uploadLine} />
            </div>
            <div className={`${styles.badge} ${styles.uploadBadge}`}>
              <strong>1. You Upload</strong>
              <span>Share your images and requirements.</span>
            </div>

            {/* Step 2 - Edit (before / after compare) */}
            <div className={`${styles.card} ${styles.editCard}`}>
              <BeforeAfterCard
                variant="plain"
                beforeImage="/assets/images/services/clipping-path-before.jpg"
                afterImage="/assets/images/services/clipping-path-after.jpg"
                aspectRatio="250 / 145"
              />
            </div>
            <div className={`${styles.badge} ${styles.editBadge}`}>
              <strong>2. We Edit</strong>
              <span>Share your images and requirements.</span>
            </div>
            {/* Step 3 - Completed */}
            <div className={`${styles.card} ${styles.completedCard}`}>
              <div className={styles.completedIcon}>
                <CheckCircleIcon />
              </div>
              <span className={styles.completedLine} />
              <span className={styles.completedText}>Completed</span>
            </div>
            <div className={`${styles.badge} ${styles.completedBadge}`}>
              <strong>3. You receive</strong>
              <span>Share your images and requirements.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;