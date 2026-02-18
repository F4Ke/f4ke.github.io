import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.css";
import { useLanguage } from "../i18n/LanguageContext";

// SVG Icons matching the site style
const RocketIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M12 2L2 7l10 5 10-5-10-5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17l10 5 10-5M2 12l10 5 10-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RobotIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect
      x="3"
      y="11"
      width="18"
      height="10"
      rx="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="2" r="1" fill="currentColor" />
    <path d="M12 3v5" strokeLinecap="round" />
    <circle cx="8" cy="15" r="1" fill="currentColor" />
    <circle cx="16" cy="15" r="1" fill="currentColor" />
    <path d="M3 16h18" strokeLinecap="round" />
  </svg>
);

const LightningIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SuitIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect
      x="4"
      y="8"
      width="16"
      height="12"
      rx="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 12v4" strokeLinecap="round" />
  </svg>
);

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, language } = useLanguage();

  // Map icon identifiers to SVG components
  const iconComponents = {
    rocket: <RocketIcon />,
    robot: <RobotIcon />,
    lightning: <LightningIcon />,
    suit: <SuitIcon />,
  };

  const handleServiceClick = (
    serviceName: string,
    serviceDescription: string,
  ) => {
    // Pre-fill contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Scroll to contact
      contactSection.scrollIntoView({ behavior: "smooth" });

      // Wait for scroll, then fill form
      setTimeout(() => {
        const serviceSelect = document.querySelector(
          'select[name="serviceType"]',
        ) as HTMLSelectElement;
        const messageTextarea = document.querySelector(
          'textarea[name="message"]',
        ) as HTMLTextAreaElement;

        // Only update service type, NEVER touch the message if it has any content
        if (serviceSelect) {
          // Map service names to select options
          const serviceMap: { [key: string]: string } = {
            "MVP Development": "development",
            "Développement MVP": "development",
            "AI Integration": "development",
            "Intégration IA": "development",
            "Technical Rescue": "architecture",
            "Sauvetage Technique": "architecture",
            "CTO as a Service": "cto",
            "CTO en tant que Service": "cto",
          };

          serviceSelect.value = serviceMap[serviceName] || "consultation";
          serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
        }

        // IMPORTANT: Only pre-fill message if it's completely empty
        // This prevents overwriting user's message when clicking different service buttons
        if (messageTextarea) {
          const currentMessage = messageTextarea.value.trim();

          // Only fill if truly empty (no content at all)
          if (currentMessage === "") {
            const message =
              language === "fr"
                ? `Bonjour,\n\nJe suis intéressé par votre service "${serviceName}".\n\n${serviceDescription}\n\nPouvez-vous me contacter pour discuter de mon projet ?\n\nMerci.`
                : `Hello,\n\nI'm interested in your "${serviceName}" service.\n\n${serviceDescription}\n\nCould you contact me to discuss my project?\n\nThank you.`;

            messageTextarea.value = message;
            messageTextarea.dispatchEvent(
              new Event("input", { bubbles: true }),
            );
          }
          // If message has content, do nothing - preserve user's text
        }
      }, 800);
    }
  };

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t.services.title}</span>{" "}
            {t.services.titleHighlight}
          </h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </motion.div>

        <div className="services-grid">
          {t.services.packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`service-card ${pkg.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {pkg.featured && (
                <div className="featured-badge">{t.services.popularBadge}</div>
              )}
              <div className="service-icon">
                {iconComponents[pkg.icon as keyof typeof iconComponents]}
              </div>
              <h3>{pkg.name}</h3>
              <p className="service-description">{pkg.description}</p>
              <ul className="service-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M16.667 5L7.5 14.167 3.333 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleServiceClick(pkg.name, pkg.description)}
                className="btn btn-service"
              >
                {t.services.ctaButton}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
