import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Contact.css";
import { useLanguage } from "../i18n/LanguageContext";
import { EmailIcon, GlobeIcon, LightningIcon } from "./Icons";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

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

    try {
      // Using FormSubmit.co - free form backend service
      const response = await fetch(
        "https://formsubmit.co/ajax/matthieu.lc.forel@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            serviceType: formData.serviceType,
            message: formData.message,
            _subject: `New Contact from Portfolio: ${formData.serviceType}`,
            _template: "table",
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          serviceType: "consultation",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-card glass">
              <div className="info-icon">
                <EmailIcon />
              </div>
              <h3>{t.contact.info.email}</h3>
              <a href="mailto:matthieu.lc.forel@gmail.com">
                matthieu.lc.forel@gmail.com
              </a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">
                <GlobeIcon />
              </div>
              <h3>{t.contact.info.location}</h3>
              <p>{t.contact.info.locationValue}</p>
            </div>

            <div className="info-card glass">
              <div className="info-icon">
                <LightningIcon />
              </div>
              <h3>{t.contact.info.availability}</h3>
              <p>{t.contact.info.availabilityValue}</p>
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
              <label htmlFor="name">{t.contact.form.name} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">{t.contact.form.company}</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t.contact.form.companyPlaceholder}
              />
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">
                {t.contact.form.serviceType} *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="consultation">
                  {t.contact.form.services.consultation}
                </option>
                <option value="quote">{t.contact.form.services.quote}</option>
                <option value="cto">{t.contact.form.services.cto}</option>
                <option value="architecture">
                  {t.contact.form.services.architecture}
                </option>
                <option value="development">
                  {t.contact.form.services.development}
                </option>
                <option value="other">{t.contact.form.services.other}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message} *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>{t.contact.form.sending}</span>
              ) : (
                <>
                  <span>{t.contact.form.send}</span>
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
                ✓ {t.contact.form.success}
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="submit-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ {t.contact.form.error}
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
