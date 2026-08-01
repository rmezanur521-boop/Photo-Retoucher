import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { FAQ_ITEMS } from "@/constants/faqData";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./Faq.module.css";

const Faq = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faq}>
      <OrganicShape position="bottom-left" />

      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.eyebrow}>Frequently Asked Question</span>

          <img
            src="/assets/icons/faq-question.svg"
            alt=""
            className={styles.infoIcon}
          />

          <h2 className={styles.heading}>
            Read our FAQ&apos;s for <span>Clarification</span>
          </h2>

          <p className={styles.subtext}>
            Professional photo editing services for e-commerce, product,
            apparel, headshot, and portrait photography.
          </p>

          <div className={styles.supportCard}>
            <span className={styles.supportIcon}>
              <img src="/assets/icons/headphones.svg" alt="" />
            </span>
            <div>
              <p className={styles.supportTitle}>Still have question?</p>
              <p className={styles.supportSubtitle}>
                Our support team is here to help you.
              </p>
              <a href={ROUTES.CONTACT} className={styles.supportLink}>
                Contact us →
              </a>
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