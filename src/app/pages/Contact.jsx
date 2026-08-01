import PageHeader from "@/shared/page-header/PageHeader";
import ContactForm from "@/features/contact/ContactForm";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";
import headerStyles from "@/shared/page-header/PageHeader.module.css";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main>
      <PageHeader
        eyebrow="Contact Us"
        title={
          <>
            Need a quote, have a question,
            <br />
            or want to{" "}
            <span className={headerStyles.highlight}>
              discuss a project?
            </span>
          </>
        }
        subtext="Get professionally edited images in as little as 6 hours."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.illustrationWrapper}>
            <img
              src="/assets/images/contact-illustration.jpg"
              alt="Customer support"
              className={styles.illustration}
            />
          </div>

          <ContactForm />
        </div>
      </section>

      <PricingCalculator />
      <Faq />
    </main>
  );
};

export default Contact;