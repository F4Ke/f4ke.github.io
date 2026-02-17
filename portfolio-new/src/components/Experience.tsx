import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.css";
import { useLanguage } from "../i18n/LanguageContext";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const experiences = t.experience.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t.experience.title}</span>{" "}
            {t.experience.titleHighlight}
          </h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                <div className="highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span key={hIndex} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    {t.experience.viewWebsite} →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="freelance-section glass"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3>Freelance & Consulting</h3>
          <p>
            Since 2018, I've collaborated with startups and businesses to
            architect and develop high-quality MVPs, mobile applications, and
            scalable APIs. Successfully delivered projects including medical
            taxi platforms, community-driven food applications, bank onboarding
            solutions, and various tailored software products.
          </p>
          <div className="freelance-clients">
            <span>CAREE</span>
            <span>TocTocToque</span>
            <span>Syliane</span>
            <span>Delubac</span>
            <span>And Many More...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
