import PropTypes from "prop-types";
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

  const getRawNumber = (fullValue, dialCode) => {
    if (!fullValue) return "";
    return fullValue.startsWith(dialCode)
      ? fullValue.slice(dialCode.length)
      : fullValue;
  };

  const emitChange = (dialCode, rawNumber) => {
    const fullValue = `${dialCode}${rawNumber}`;
    onChange({
      target: {
        id,
        name: id,
        value: fullValue,
      },
    });
  };

  const handleSelectCountry = (newCountryId) => {
    const newCountry = COUNTRY_CODES.find((c) => c.id === newCountryId);
    const rawNumber = getRawNumber(value, selectedCountry.label);

    setCountryId(newCountryId);
    setIsOpen(false);

    emitChange(newCountry.label, rawNumber);
  };

  const handleInputChange = (e) => {
    const typedRaw = e.target.value;
    emitChange(selectedCountry.label, typedRaw);
  };

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
        value={getRawNumber(value, selectedCountry.label)}
        onChange={handleInputChange}
        className={styles.input}
        required
      />
    </div>
  );
};

PhoneInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default PhoneInput;