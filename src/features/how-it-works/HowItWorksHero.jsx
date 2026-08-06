import styles from "./HowItWorksHero.module.css";
import SectionTitle from "@/shared/section-title/SectionTitle";

const HowItWorksHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SectionTitle
            align="left"
            eyebrow="HOW IT WORKS"
             heading={[
                      "The simple way to get ",
                      { text: "pixel perfect ", highlight: true },
                      "photo edits",
                    ]}
            subtext="Here's how we make it easy to get fast, affordable product photo edits — all done by hand by pro designers."
          />

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