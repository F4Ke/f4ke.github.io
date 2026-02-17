import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "REALITE.IO",
      description:
        "AI-powered stock market analysis and prediction platform with real-time analytics and machine learning models.",
      tech: ["AI/ML", "Python", "Real-time Analytics", "Financial Tech"],
      link: "https://www.realite.io/",
      gradient: "linear-gradient(135deg, #c9a961 0%, #8b7355 100%)",
    },
    {
      title: "Core Banking System",
      description:
        "Robust banking infrastructure handling thousands of concurrent transactions with zero downtime and military-grade security.",
      tech: ["Golang", "Ruby on Rails", "PostgreSQL", "gRPC"],
      gradient: "linear-gradient(135deg, #8b7355 0%, #c9a961 100%)",
    },
    {
      title: "REALITE NEWS",
      description:
        "AI-powered video generation platform creating TikTok/Instagram content for financial and social news. Multi-voice, multi-language automation at scale.",
      tech: [
        "AI/ML",
        "Video Generation",
        "TTS",
        "Multi-language",
        "Automation",
      ],
      link: "https://www.realite.io/",
      gradient: "linear-gradient(135deg, #e8d5b7 0%, #c9a961 100%)",
    },
    {
      title: "Microservices Migration",
      description:
        "Led transformation from monolithic architecture to high-performance microservices, achieving 90%+ response time reduction.",
      tech: ["Golang", "gRPC", "Docker", "Kubernetes", "Elasticsearch"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Sustainability Data Platform",
      description:
        "Enterprise-scale data engineering platform for sustainability metrics, processing millions of data points daily.",
      tech: ["Ruby on Rails", "PostgreSQL", "GraphQL", "AWS"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Document Intelligence Platform",
      description:
        "Intelligent document sharing and analytics platform with real-time tracking and insights.",
      tech: ["Ruby on Rails", "Angular", "AWS", "Microservices"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      title: "Community Platform",
      description:
        "Highly customizable all-in-one community hub with advanced features and scalable architecture.",
      tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
            <span className="gradient-text">Flagship</span> Projects
          </h2>
          <p className="section-subtitle">
            Transforming ambitious visions into production-ready, scalable
            systems
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="project-gradient"
                style={{ background: project.gradient }}
              ></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Ready to Build Something Extraordinary?</h3>
          <p>
            Let's transform your vision into a high-performance, scalable
            reality
          </p>
          <a href="#contact" className="btn btn-primary btn-large">
            <span>Start Your Project</span>
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
