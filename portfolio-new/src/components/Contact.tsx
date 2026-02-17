import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "consultation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        serviceType: "consultation",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Let's Build</span> Together
          </h2>
          <p className="section-subtitle">
            Ready to transform your vision into reality? Get in touch for a
            consultation or quote.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-card glass">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:matthieu.lc.forel@gmail.com">
                matthieu.lc.forel@gmail.com
              </a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Lyon, France</p>
            </div>

            <div className="info-card glass">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:+33783272070">+33 7.83.27.20.70</a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">⚡</div>
              <h3>Response Time</h3>
              <p>Within 24 hours</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">Service Type *</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="consultation">
                  Consultation / Discovery Call
                </option>
                <option value="quote">Project Quote</option>
                <option value="cto">CTO / Technical Leadership</option>
                <option value="architecture">System Architecture Review</option>
                <option value="development">Full-Stack Development</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project, challenges, or goals..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12m0 0l-6-6m6 6l-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div
                className="submit-message success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you within 24
                hours.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="submit-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>
        </div>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>© 2026 Matthieu FOREL. Crafted with precision and passion.</p>
          <p className="footer-tagline">
            <span className="gradient-text">
              Transforming visions into scalable reality
            </span>
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
