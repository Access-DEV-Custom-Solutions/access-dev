import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://access-dev.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account created:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/contact", {
            state: {
              fromSignup: true,
              userName: formData.fullname,
            },
          });
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <section className="signup-page">
      <div className="signup-bg">
        <div className="signup-glow signup-glow-1"></div>
        <div className="signup-glow signup-glow-2"></div>
        <div className="signup-glow signup-glow-3"></div>
        <div className="signup-grid-pattern"></div>
        <div className="signup-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="signup-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
              }}
            ></div>
          ))}
        </div>
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
              <motion.div
                className="success-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </motion.div>
              <h2>Account Created!</h2>
              <p>Redirecting you to request your custom solution...</p>
            </motion.div>
          ) : (
            <motion.form
              className="signup-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="signup-form-group">
                <label htmlFor="fullname">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Tawanda Madanhire"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                  required
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="email">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="tawanda@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="signup-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="spinner-icon"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M21 12a9 9 0 11-6.219-8.56"></path>
                      </svg>
                    </motion.div>
                    Creating...
                  </>
                ) : (
                  <>
                    Create Account
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.form>
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
