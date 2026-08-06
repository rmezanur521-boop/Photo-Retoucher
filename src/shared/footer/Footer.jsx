import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_RESOURCE_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_CONTACT_INFO,
  FOOTER_BOTTOM_LINKS,
} from "@/constants/footerData";
import { ROUTES } from "@/constants/routes";
import OrganicShape from "@/shared/decorations/OrganicShape";
import Button from "@/shared/buttons/Button";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className={styles.footer}>
        <section className={styles.ctaBanner}>
        <div className={styles.ctaOverlay} />

        <div className={styles.ctaContainer}>
          <div className={styles.ctaLeft}>
            <img
              src="/assets/icons/your-best-work.svg"
              alt="Your best work. Our Editing."
              className={styles.ctaTagline}
            />
            <h2 className={styles.ctaHeading}>
              Ready to save time and scale your business?
            </h2>
            <p className={styles.ctaSubtext}>
              Join thousands of businesses that trust us for high-quality image
              editing, every time.
            </p>
          </div>

          <div className={styles.ctaDivider} />

          <div className={styles.ctaRight}>
            <h3 className={styles.ctaRightHeading}>Let&apos;s get started</h3>
            <p className={styles.ctaSubtext}>
              Upload your images and receive your first edit within 6 hours.
            </p>
            <Button
              to={ROUTES.REGISTER}
              variant="light"
              icon={<ArrowRight size={16} />}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
        <OrganicShape position="bottom-left" width={150} color="#e3eafe" zIndex={0} flipY className={styles.cornerShape} />
        <OrganicShape position="bottom-right" width={150} color="#e3eafe" zIndex={0} flipX flipY className={styles.cornerShape} />

        <div className={styles.container}>
          <div className={styles.brandColumn}>
            <Link to={ROUTES.HOME} className={styles.logo}>
              <img
                src="/assets/logos/logo-icon.svg"
                alt="Photo Retoucher"
                className={styles.logoIcon}
              />
              <span className={styles.logoText}>
                <img
                  src="/assets/logos/logo-text.svg"
                />
              </span>
            </Link>

            <p className={styles.brandDescription}>
              Your virtual photo editing and design studio. Fast, reliable, and
              built for your success.
            </p>

            <div className={styles.socialLinks}>
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialIcon}
                  aria-label={social.label}
                >
                  <img src={`/assets/icons/${social.icon}`} alt={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul>
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul>
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to={ROUTES.OUR_SERVICES} className={styles.viewAllLink}>
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <ul>
              {FOOTER_RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={16} />
                <span>{FOOTER_CONTACT_INFO.email}</span>
              </li>
              <li>
                <span className={styles.contactIndent}>
                  {FOOTER_CONTACT_INFO.usToll}
                </span>
              </li>
              <li>
                <span className={styles.contactIndent}>
                  {FOOTER_CONTACT_INFO.ukToll}
                </span>
              </li>
              <li>
                <Mail size={16} />
                <span>{FOOTER_CONTACT_INFO.altEmail}</span>
              </li>
            </ul>

            <div className={styles.securityBadge}>
              <img src="/assets/icons/security.svg" alt="" />
              <div>
                <p className={styles.securityTitle}>100% Security Guaranteed</p>
                <p className={styles.securitySubtitle}>
                  Your images are safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            Photo Retoucher is a brand of Outsource Experts Ltd. &copy;{" "}
            {currentYear} All rights reserved.
          </p>

          <ul className={styles.bottomLinks}>
            {FOOTER_BOTTOM_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
  );
};

export default Footer;