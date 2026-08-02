import styles from "./HowItWorks.module.css";

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
            A simple, smooth process te get your images edited perfectly
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
                  <div className={styles.stepIcon}>
                    <img src={step.icon} alt="" />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.description}</p>
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
              viewBox="0 0 500 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 150 C 0 220, 0 260, 90 300"
                stroke="#0041FF"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              />
              <path
                d="M410 380 C 470 420, 470 460, 400 500"
                stroke="#0041FF"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              />
            </svg>

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

            <div className={`${styles.card} ${styles.editCard}`}>
              <div className={styles.editImageBefore}>
                <img
                  src="/assets/images/how-it-works/edit-before.jpg"
                  alt="Before"
                />
              </div>
              <div className={styles.editImageAfter}>
                <img
                  src="/assets/images/how-it-works/edit-after.jpg"
                  alt="After"
                />
              </div>
              <span className={styles.editHandle}>
                <img src="/assets/icons/slider-arrows.svg" alt="" />
              </span>
            </div>
            <div className={`${styles.badge} ${styles.editBadge}`}>
              <strong>2. We Edit</strong>
              <span>Share your images and requirements.</span>
            </div>

            <div className={`${styles.card} ${styles.completedCard}`}>
              <div className={styles.completedIcon}>
                <img src="/assets/icons/check-circle.svg" alt="" />
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