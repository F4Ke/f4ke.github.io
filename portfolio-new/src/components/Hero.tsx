import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";
import { useLanguage } from "../i18n/LanguageContext";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  // Apple-like scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const handleScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Scroll instantané sans animation
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "auto", // Instantané
      });
    }
  };

  // Canvas supprimé - fond noir simple

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <motion.div className="hero-content" style={{ opacity, scale, y }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="hero-text"
        >
          <div className="hero-title-wrapper">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.div
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src="./photo.jpg" alt="Matthieu Forel" />
            </motion.div>
          </div>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="gradient-text">{t.hero.role}</span>
          </motion.h2>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {t.hero.subtitle}
            <br />
            {t.hero.subtitle2}
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">{t.hero.stats.years}</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">{t.hero.stats.technologies}</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">{t.hero.stats.commitment}</div>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contact");
              }}
            >
              <span>{t.hero.cta}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h12m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#experience"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("experience");
              }}
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>{t.hero.scroll}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
