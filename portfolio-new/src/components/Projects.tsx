import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import { useLanguage } from "../i18n/LanguageContext";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const gradients = [
    "linear-gradient(135deg, #c9a961 0%, #8b7355 100%)",
    "linear-gradient(135deg, #8b7355 0%, #c9a961 100%)",
    "linear-gradient(135deg, #e8d5b7 0%, #c9a961 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  ];

  const links = [
    "https://www.realite.io/",
    undefined,
    "https://www.realite.io/",
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  const projects = t.projects.items.map((item, index) => ({
    ...item,
    gradient: gradients[index],
    link: links[index],
  }));

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t.projects.title}</span>{" "}
            {t.projects.titleHighlight}
          </h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>{t.projects.cta.title}</h3>
          <p>{t.projects.cta.subtitle}</p>
          <a href="#contact" className="btn btn-primary btn-large">
            <span>{t.projects.cta.button}</span>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
