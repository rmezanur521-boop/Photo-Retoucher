import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRY_CODES } from "@/constants/countryCodes";
import styles from "./PhoneInput.module.css";

const PhoneInput = ({ value, onChange, id = "phoneNumber" }) => {
  const [countryId, setCountryId] = useState(COUNTRY_CODES[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedCountry = COUNTRY_CODES.find((c) => c.id === countryId);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.countrySelect}>
        <button
          type="button"
          className={styles.countryTrigger}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/assets/icons/flags/${selectedCountry.flag}`}
            alt={selectedCountry.id}
            className={styles.flagIcon}
          />
          <ChevronDown size={14} />
        </button>

        {isOpen && (
          <ul className={styles.countryDropdown}>
            {COUNTRY_CODES.map((country) => (
              <li key={country.id}>
                <button
                  type="button"
                  onClick={() => handleSelectCountry(country.id)}
                >
                  <img
                    src={`/assets/icons/flags/${country.flag}`}
                    alt={country.id}
                    className={styles.flagIcon}
                  />
                  {country.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <span className={styles.divider} />
      <span className={styles.dialCode}>{selectedCountry.label}</span>

      <input
        id={id}
        name={id}
        type="tel"
        placeholder="1705-0001111"
        value={value}
        onChange={onChange}
        className={styles.input}
        required
      />
    </div>
  );
};

export default PhoneInput;