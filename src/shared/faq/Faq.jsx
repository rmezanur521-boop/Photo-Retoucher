import { useState } from "react";
import { Link } from "react-router-dom"
import { Plus, Minus } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { FAQ_ITEMS } from "@/constants/faqData";
import OrganicShape from "@/shared/decorations/OrganicShape";
import SectionTitle from "@/shared/section-title/SectionTitle";
import styles from "./Faq.module.css";

const Faq = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faq}>
      <OrganicShape position="bottom-left" width={220} color="#e3eafe" zIndex={0} flipY />

      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.titleWrap}>
            <img
              src="/assets/icons/faq-question.svg"
              alt=""
              className={styles.infoIcon}
            />
            <SectionTitle
              align="left"
              eyebrow="Frequently Asked Question"
              heading={[
                "Read our FAQ's for ",
                { text: "Clarification", highlight: true },
              ]}
              subtext="Professional photo editing services for e-commerce, product, apparel, headshot, and portrait photography."
            />
          </div>

          <div className={styles.supportCard}>
            <span className={styles.supportIcon}>
              <img src="/assets/icons/headphones.svg" alt="" />
            </span>
            <div>
              <p className={styles.supportTitle}>Still have question?</p>
              <p className={styles.supportSubtitle}>
                Our support team is here to help you.
              </p>
              <Link to={ROUTES.CONTACT} className={styles.supportLink}>
                Contact us →
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.accordionList}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.accordionItem} ${
                  isOpen ? styles.accordionItemOpen : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.accordionTrigger}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.toggleIcon}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                  <span className={styles.question}>{item.question}</span>
                </button>

                {isOpen && (
                  <p className={styles.answer}>{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;