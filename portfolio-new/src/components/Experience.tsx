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

  const experiences = [
    {
      company: "REALITE.IO",
      period: "2025 - Present",
      description:
        "Building the future of financial intelligence from the ground up. Zero to production in record time—architecting AI-powered market analysis platform processing millions of data points daily. Full technical ownership: infrastructure, ML pipelines, real-time analytics, and go-to-market strategy.",
      website: "https://www.realite.io/",
      highlights: [
        "AI/ML Production",
        "Real-time Analytics",
        "0→1 Product",
        "Technical Strategy",
      ],
    },
    {
      company: "Sweep",
      period: "2025",
      description:
        "Brought in as the technical expert to solve critical performance issues others couldn't crack. Eliminated bottlenecks causing 10x slowdowns, redesigned data architecture for 100x scale, delivered measurable ROI within weeks. Europe's top sustainability platform now handles enterprise load effortlessly.",
      website: "https://www.sweep.net/",
      highlights: [
        "10x Performance Gain",
        "100x Scale",
        "Data Architecture",
        "Rapid Impact",
      ],
    },
    {
      company: "Mooncard",
      period: "2024",
      description:
        "Engaged to architect the most critical infrastructure: core banking systems handling millions in daily transactions. Designed fault-tolerant architecture with zero downtime requirement. Every transaction matters—built systems that never fail.",
      website: "https://www.mooncard.co/",
      highlights: [
        "Zero Downtime",
        "Financial Systems",
        "Fault Tolerance",
        "Mission Critical",
      ],
    },
    {
      company: "Hivebrite",
      period: "2021 - 2023",
      description:
        "Brought in to lead the complete reimagining of a legacy monolith serving millions globally. Architected and executed migration to modern microservices—90% faster response times, infinite scalability, zero business disruption. Mentored team through the transformation.",
      website: "https://www.hivebrite.io",
      highlights: [
        "90% Faster",
        "Zero Downtime Migration",
        "Microservices",
        "Team Leadership",
      ],
    },
    {
      company: "Station HQ",
      period: "2020 - 2021",
      description:
        "Called in to engineer high-performance browser extensions and GraphQL APIs powering collaboration for thousands of enterprise teams. Optimized for speed and reliability—users don't wait, systems don't break.",
      website: "https://stationhq.com/",
      highlights: [
        "Browser Extensions",
        "GraphQL",
        "Enterprise Scale",
        "Performance",
      ],
    },
    {
      company: "Tilkee",
      period: "2014 - 2020",
      description:
        "Served as the technical foundation for 6 years. From early-stage startup to established SaaS—architected every major system, led engineering team, made every critical technical decision. Built microservices infrastructure on AWS that scaled the company from zero to thousands of customers.",
      website: "https://www.tilkee.com/en/",
      highlights: [
        "6 Years Leadership",
        "0→Scale",
        "AWS Infrastructure",
        "Team Building",
      ],
    },
  ];

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
