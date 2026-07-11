import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const API_BASE = "https://access-dev.onrender.com";
// const API_BASE = "http://127.0.0.1:8000";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    whatsapp_number: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const updateField = (field) => (event) =>
    setFormData((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          whatsapp_number: formData.whatsapp_number,
          password: formData.password,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(data.detail || "We could not create your account.");
      setIsSuccess(true);
      setTimeout(() => navigate("/signin"), 1800);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    ["fullname", "Full Name", "text", "Tawanda Madanhire", "name"],
    ["email", "Email Address", "email", "tawanda@example.com", "email"],
    ["whatsapp_number", "WhatsApp Number", "tel", "+263 77 123 4567", "tel"],
    [
      "password",
      "Password",
      "password",
      "At least 8 characters",
      "new-password",
    ],
    [
      "confirmPassword",
      "Confirm Password",
      "password",
      "Re-enter your password",
      "new-password",
    ],
  ];

  return (
    <section className="signup-page">
      <div className="signup-bg">
        <div className="signup-glow signup-glow-1" />
        <div className="signup-glow signup-glow-2" />
        <div className="signup-glow signup-glow-3" />
        <div className="signup-grid-pattern" />
      </div>
      <div className="signup-container">
        <motion.div
          className="signup-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          <motion.div
            className="signup-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <img
              src="/without background.png"
              alt="ACCESS DEV"
              className="signup-logo-img"
            />
          </motion.div>
          <motion.div
            className="signup-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="signup-title">Create Account</h1>
            <p className="signup-subtitle">
              Join ACCESS DEV to request custom solutions
            </p>
          </motion.div>
          {isSuccess ? (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
            >
              <div className="success-icon">✓</div>
              <h2>Account Created!</h2>
              <p>Redirecting you to sign in...</p>
            </motion.div>
          ) : (
            <>
              <>
                {errorMessage && (
                  <div className="signin-alert signin-alert-error">
                    {errorMessage}
                  </div>
                )}
              </>
              <motion.form
                className="signup-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {fields.map(
                  ([name, label, type, placeholder, autoComplete]) => (
                    <div className="signup-form-group" key={name}>
                      <label htmlFor={name}>{label}</label>
                      <input
                        type={type}
                        id={name}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        value={formData[name]}
                        onChange={updateField(name)}
                        required
                        minLength={name === "password" ? 8 : undefined}
                      />
                    </div>
                  ),
                )}
                <motion.button
                  type="submit"
                  className="signup-btn"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating..." : "Create Account"}
                </motion.button>
              </motion.form>
            </>
          )}
          <motion.p
            className="signup-footer-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Already have an account?{" "}
            <Link to="/signin" className="signup-link">
              Sign In
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default SignUp;
