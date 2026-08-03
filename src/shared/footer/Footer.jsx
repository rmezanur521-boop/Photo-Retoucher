import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_RESOURCE_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_CONTACT_INFO,
  FOOTER_BOTTOM_LINKS,
} from "@/constants/footerData";
import { ROUTES } from "@/constants/routes";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className={styles.footer}>
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
            <ShieldCheck size={20} />
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