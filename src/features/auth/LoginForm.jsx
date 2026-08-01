import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { SOCIAL_LOGIN_PROVIDERS } from "@/constants/authData";
import Button from "@/shared/buttons/Button";
import { loginUser } from "@/services/authService";
import styles from "./LoginForm.module.css";

const INITIAL_STATE = { email: "", password: "", rememberPassword: true };

const LoginForm = () => {
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
    await loginUser(formData);
    setIsSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.heading}>Welcome Back</h1>
      <p className={styles.subtext}>
        Welcome back to us-Let&apos;s get back to your account.
      </p>

      <div className={styles.divider} />

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

        <Link to={ROUTES.CONTACT} className={styles.forgotLink}>
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
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
        Don&apos;t have an account?{" "}
        <Link to={ROUTES.REGISTER}>Register now!</Link>
      </p>
    </form>
  );
  <OrganicShape
  position="bottom-left"
  width={170}
  left={0}
  bottom={0}
  zIndex={0}
/>
};

export default LoginForm;