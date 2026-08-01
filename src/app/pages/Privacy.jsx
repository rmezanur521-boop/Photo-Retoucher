import PageHeader from "@/shared/page-header/PageHeader";
import { PRIVACY_SECTIONS } from "@/constants/privacyData";
import headerStyles from "@/shared/page-header/PageHeader.module.css";
import styles from "./Privacy.module.css";

const Privacy = () => {
  return (
    <main>
      <PageHeader
        eyebrow="Privacy Policy"
        title={
          <>
            Questions About Your{" "}
            <span className={headerStyles.highlight}>Privacy?</span>
          </>
        }
        subtext="We are committed to protecting your privacy and handling your data with transparency, security, and care."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.effectiveDate}>Effective as of August 22, 2021</p>

          <p className={styles.paragraph}>
            Thank you for choosing Photo Retoucher Ltd (&quot;Path&quot;,
            &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By signing up or
            otherwise visiting, using, or engaging with our website and
            services, this Privacy Policy explains how we use any personal
            information we collect about you when you use this site.
          </p>

          {PRIVACY_SECTIONS.map((section) => (
            <div key={section.id} className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Privacy;