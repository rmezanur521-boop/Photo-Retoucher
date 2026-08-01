import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Search, Menu, X, ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { SERVICES_LIST } from "@/constants/services";
import Button from "@/shared/buttons/Button";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About us", path: ROUTES.ABOUT },
  { label: "Portfolio", path: ROUTES.PORTFOLIO },
  { label: "How it works", path: ROUTES.HOW_IT_WORKS },
  { label: "Pricing", path: ROUTES.PRICING },
  { label: "Blog", path: ROUTES.BLOGS },
  { label: "Contact us", path: ROUTES.CONTACT },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link
          to={ROUTES.HOME}
          className={styles.logo}
          onClick={closeMobileMenu}
        >
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

        <nav
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.navLinksOpen : ""
          }`}
        >
          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={styles.dropdownTrigger} type="button">
              Our Services
              <ChevronDown size={16} />
            </button>

            {isServicesOpen && (
              <ul className={styles.dropdownMenu}>
                {SERVICES_LIST.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.id}`}
                      className={styles.dropdownItem}
                      onClick={closeMobileMenu}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
              onClick={closeMobileMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconButton} type="button" aria-label="Search">
            <Search size={18} />
          </button>

          <Link to={ROUTES.LOGIN} className={styles.loginLink}>
            Login
          </Link>

          <Button
            to={ROUTES.REGISTER}
            variant="primary"
            icon={<ArrowRight size={16} />}
          >
            Get Started Free
          </Button>

          <button
            className={styles.menuToggle}
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;