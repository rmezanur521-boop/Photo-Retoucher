import styles from "./HowItWorksHero.module.css";

const HowItWorksHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.subtitle}>HOW IT WORKS</span>

          <h1 className={styles.title}>
            The simple way to
            <br />
            get <span>pixel perfect</span>
            <br />
            photo edits
          </h1>

          <p className={styles.description}>
            Here's how we make it easy to get fast, affordable product
            photo edits — all done by hand by pro designers.
          </p>

          <button className={styles.button}>
            Get My Image Edit
            <img src="/assets/icons/arrow-right-white.svg" alt="" />
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.orbitWrapper}>
            <img
              src="/assets/images/how-it-works/how-it-works-group.svg"
              alt="How it works"
              className={styles.orbitImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;