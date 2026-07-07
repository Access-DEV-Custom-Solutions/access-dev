import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Moyo",
      quote:
        "ACCESS DEV transformed our outdated website into a modern platform that doubled our student enrollment. Their attention to detail and commitment to deadlines was exceptional.",
      rating: 5,
      color: "#2355E1",
    },
    {
      id: 2,
      name: "David Chikwanda",
      quote:
        "The mobile app they built for our farmers marketplace has been a game-changer. Truly transformative work.",
      rating: 5,
      color: "#008F88",
    },
    {
      id: 3,
      name: "Precious Ndlovu",
      quote:
        "Working with ACCESS DEV on our AI chatbot was seamless. They understood our vision and delivered beyond expectations. The team is professional and highly skilled.",
      rating: 5,
      color: "#8B5CF6",
    },
    {
      id: 4,
      name: "Tendai Makoni",
      quote:
        "Our e-commerce redesign was completed in just 3 weeks. Sales increased by 40% within the first month. I highly recommend ACCESS DEV for any digital project.",
      rating: 5,
      color: "#E255A1",
    },
  ];

  // Track viewport to decide cards per view
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const PER_VIEW = isMobile ? 1 : 2;

  // Group testimonials into pages based on PER_VIEW
  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < testimonials.length; i += PER_VIEW) {
      result.push(testimonials.slice(i, i + PER_VIEW));
    }
    return result;
  }, [PER_VIEW]);

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  // Keep page index in range if PER_VIEW changes (e.g. resize) and pages shrink
  useEffect(() => {
    if (page > pages.length - 1) {
      setPage(0);
    }
  }, [pages, page]);

  const goTo = (newPage, dir) => {
    setDirection(dir);
    setPage((newPage + pages.length) % pages.length);
  };

  const handlePrev = () => goTo(page - 1, -1);
  const handleNext = () => goTo(page + 1, 1);

  const currentPage = pages[page] || [];

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-bg">
        <div className="testimonials-glow testimonials-glow-1"></div>
        <div className="testimonials-glow testimonials-glow-2"></div>
        <div className="testimonials-grid-pattern"></div>
      </div>

      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="testimonials-header-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
            </svg>
          </div>
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Trusted by businesses across Africa
          </p>
        </motion.div>

        <div className="testimonials-slider">
          <button
            className="testimonial-nav-btn testimonial-nav-prev"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="testimonial-viewport">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${page}-${PER_VIEW}`}
                className="testimonial-page"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {currentPage.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="testimonial-card"
                    style={{ "--card-color": testimonial.color }}
                  >
                    <div className="testimonial-glow-border"></div>

                    <div
                      className="testimonial-quote-icon"
                      style={{ color: testimonial.color }}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        opacity="0.15"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <p className="testimonial-quote">"{testimonial.quote}"</p>

                    <div className="testimonial-author">
                      <span
                        className="testimonial-author-line"
                        style={{ background: testimonial.color }}
                      ></span>
                      <h4>{testimonial.name}</h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="testimonial-nav-btn testimonial-nav-next"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="testimonial-dots">
          {pages.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === page ? "active" : ""}`}
              onClick={() => goTo(i, i > page ? 1 : -1)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
