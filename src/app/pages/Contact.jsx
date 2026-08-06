import PageHeader from "@/shared/page-header/PageHeader";
import ContactForm from "@/features/contact/ContactForm";
import PricingCalculator from "@/shared/pricing-calculator/PricingCalculator";
import Faq from "@/shared/faq/Faq";
import headerStyles from "@/shared/page-header/PageHeader.module.css";
import styles from "./Contact.module.css";

const CONTACT_ITEMS = [
  {
    id: "email",
    icon: "/assets/icons/mail.svg",
    text: "hello@pathedits.com",
    href: "mailto:hello@pathedits.com",
  },
  {
    id: "phone-us",
    icon: "/assets/icons/phone.svg",
    text: "US toll-free: (855) 737-0370",
    href: "tel:+18557370370",
  },
  {
    id: "phone-uk",
    icon: "/assets/icons/phone.svg",
    text: "UK toll-free: +44 8081 960370",
    href: "tel:+448081960370",
  },
  {
    id: "location",
    icon: "/assets/icons/location.svg",
    text: "hello@gmail.com",
    href: "mailto:hello@gmail.com",
  },
];

const Contact = () => {
  return (
    <main>
      <PageHeader
        eyebrow="Contact Us"
        title="Need a quote, have a question, or want to "
        highlight="discuss a project?"
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

            <div className={styles.contactInfo}>
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={styles.contactItem}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                  />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
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