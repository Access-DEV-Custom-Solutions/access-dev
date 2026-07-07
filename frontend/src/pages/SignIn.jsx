import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const API_BASE = "http://access-dev.onrender.com";

function SignIn() {
  const navigate = useNavigate();
  const [step, setStep] = useState("email"); // 'email' | 'code'
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const requestOtp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/auth/request-otp`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.detail || "Could not send verification code.");
      }

      setInfoMessage(`A 6-digit code was sent to ${email}.`);
      setStep("code");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.detail || "Invalid or expired code.");
      }

      localStorage.setItem("access_token", data.token);
      localStorage.setItem("user_email", data.email);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToEmail = () => {
    setStep("email");
    setCode("");
    setErrorMessage("");
    setInfoMessage("");
  };

  const handleResend = async () => {
    setErrorMessage("");
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/auth/request-otp`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.detail || "Could not resend code.");
      }
      setInfoMessage(`A new code was sent to ${email}.`);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="signin-page">
      <div className="signin-bg">
        <div className="signin-glow signin-glow-1"></div>
        <div className="signin-glow signin-glow-2"></div>
        <div className="signin-glow signin-glow-3"></div>
        <div className="signin-grid-pattern"></div>
        <div className="signin-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="signin-particle"
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

      <div className="signin-container">
        <motion.div
          className="signin-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          <motion.div
            className="signin-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <img
              src="/without background.png"
              alt="ACCESS DEV"
              className="signin-logo-img"
            />
          </motion.div>

          <motion.div
            className="signin-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="signin-title">Welcome Back</h1>
            <p className="signin-subtitle">
              {step === "email"
                ? "Sign in with your email"
                : "Enter the code we sent you"}
            </p>
          </motion.div>

          {errorMessage && (
            <motion.div
              className="signin-alert signin-alert-error"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errorMessage}
            </motion.div>
          )}

          {infoMessage && !errorMessage && (
            <motion.div
              className="signin-alert signin-alert-info"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {infoMessage}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {step === "email" ? (
              <motion.form
                key="email-step"
                className="signin-form"
                onSubmit={requestOtp}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="signin-form-group">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="signin-btn"
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
                      Sending Code...
                    </>
                  ) : (
                    <>
                      Send Code
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
            ) : (
              <motion.form
                key="code-step"
                className="signin-form"
                onSubmit={verifyOtp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="signin-form-group">
                  <label htmlFor="code">
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
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0110 0v4"></path>
                    </svg>
                    Verification Code
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    id="code"
                    placeholder="123456"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                    required
                  />
                </div>

                <div className="signin-forgot">
                  <button
                    type="button"
                    className="signin-linklike"
                    onClick={handleResend}
                    disabled={isSubmitting}
                  >
                    Resend code
                  </button>
                </div>

                <motion.button
                  type="submit"
                  className="signin-btn"
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
                      Verifying...
                    </>
                  ) : (
                    <>
                      Verify & Sign In
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

                <button
                  type="button"
                  className="signin-linklike signin-back"
                  onClick={handleBackToEmail}
                >
                  ← Use a different email
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <motion.p
            className="signin-footer-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Don't have an account?{" "}
            <Link to="/signup" className="signin-link">
              Create Account
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default SignIn;
