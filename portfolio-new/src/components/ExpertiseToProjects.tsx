import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ExpertiseToProjects.css";
import { useLanguage } from "../i18n/LanguageContext";

const ExpertiseToProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={containerRef} className="expertise-to-projects">
      <motion.div className="transition-content" style={{ opacity, scale }}>
        <motion.div className="transition-line line-1" style={{ y: y1 }} />
        <motion.div className="transition-line line-2" style={{ y: y2 }} />

        <motion.div className="transition-text">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {language === "fr" ? (
              <>
                D'<span className="gradient-text">Expertise</span> à{" "}
                <span className="gradient-text">Exécution</span>
              </>
            ) : (
              <>
                From <span className="gradient-text">Expertise</span> to{" "}
                <span className="gradient-text">Execution</span>
              </>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === "fr"
              ? "Transformant la vision stratégique en solutions concrètes qui redéfinissent les standards de l'industrie"
              : "Transforming strategic vision into concrete solutions that redefine industry standards"}
          </motion.p>
        </motion.div>

        <motion.div className="transition-stats">
          {[
            { value: "12+", label: language === "fr" ? "Années" : "Years" },
            {
              value: "60+",
              label: language === "fr" ? "Projets" : "Projects",
            },
            {
              value: "99.99%",
              label: language === "fr" ? "Uptime" : "Uptime",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExpertiseToProjects;
