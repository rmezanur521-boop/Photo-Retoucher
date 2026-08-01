import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/shared/buttons/Button";
import { submitContactForm } from "@/services/contactService";
import styles from "./ContactForm.module.css";

const INITIAL_FORM_STATE = {
  fullName: "",
  phoneNumber: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const response = await submitContactForm(formData);

    if (response.success) {
      setIsSubmitted(true);
      setFormData(INITIAL_FORM_STATE);
    }

    setIsSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Contact Information</h2>

      <div className={styles.field}>
        <label htmlFor="fullName">
          Full Name<span className={styles.required}>*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter your name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phoneNumber">
            Phone Number<span className={styles.required}>*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="Enter your number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">
            E-Mail<span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {isSubmitted && (
        <p className={styles.successMessage}>
          Thank you! Your message has been sent successfully.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        fullWidth
        icon={<ArrowRight size={16} />}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;