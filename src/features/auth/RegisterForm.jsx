import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { SOCIAL_LOGIN_PROVIDERS } from "@/constants/authData";
import Button from "@/shared/buttons/Button";
import PhoneInput from "@/shared/inputs/PhoneInput";
import { registerUser } from "@/services/authService";
import styles from "./RegisterForm.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  rememberPassword: true,
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const response = await registerUser(formData);

    setIsSubmitting(false);

    if (response.success) {
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.heading}>Create your account</h1>
      <p className={styles.subtext}>
        Welcome back to us - Let&apos;s get back to your account.
      </p>

      <div className={styles.divider} />

      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Type your name..."
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phoneNumber">Phone number</label>
        <PhoneInput
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <div className={styles.passwordWrapper}>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className={styles.optionsRow}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="rememberPassword"
            checked={formData.rememberPassword}
            onChange={handleChange}
          />
          Remember Password!
        </label>

        <Link to={ROUTES.LOGIN} className={styles.forgotLink}>
          Login?
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </Button>

      <div className={styles.orDivider}>
        <span />
        <span className={styles.orText}>Or</span>
        <span />
      </div>

      <div className={styles.socialRow}>
        {SOCIAL_LOGIN_PROVIDERS.map((provider) => (
          <button
            key={provider.id}
            type="button"
            className={styles.socialButton}
            aria-label={provider.label}
          >
            <img src={`/assets/icons/${provider.icon}`} alt="" />
          </button>
        ))}
      </div>

      <p className={styles.switchText}>
        Have an account? <Link to={ROUTES.LOGIN}>Login now!</Link>
      </p>
    </form>
  );
};

export default RegisterForm;