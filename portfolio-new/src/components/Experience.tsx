import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "REALITE.IO",
      role: "Founder & Chief Technology Officer",
      period: "2025 - Present",
      description:
        "Architecting an AI-powered financial intelligence platform from the ground up. Full ownership of technical strategy, infrastructure, and ML implementation.",
      website: "https://www.realite.io/",
      highlights: [
        "AI/ML",
        "Financial Tech",
        "System Architecture",
        "Technical Leadership",
      ],
    },
    {
      company: "Sweep",
      role: "Technical Consultant",
      period: "2025",
      description:
        "Engaged to resolve critical performance bottlenecks and architect scalable data pipelines for Europe's leading sustainability platform.",
      website: "https://www.sweep.net/",
      highlights: [
        "Performance Engineering",
        "Data Architecture",
        "Scale",
        "Strategic Consulting",
      ],
    },
    {
      company: "Mooncard",
      role: "Core Banking Architect",
      period: "2024",
      description:
        "Brought in to design and implement mission-critical banking infrastructure handling thousands of concurrent transactions with zero tolerance for failure.",
      website: "https://www.mooncard.co/",
      highlights: [
        "Core Banking",
        "High Availability",
        "Financial Systems",
        "Golang",
      ],
    },
    {
      company: "Hivebrite",
      role: "Technical Lead - Architecture Migration",
      period: "2021 - 2023",
      description:
        "Spearheaded complete architectural transformation from monolith to microservices, achieving 90%+ performance improvement and enabling global scale.",
      website: "https://www.hivebrite.io",
      highlights: [
        "Microservices",
        "Golang",
        "gRPC",
        "Architecture",
        "Team Leadership",
      ],
    },
    {
      company: "Station HQ",
      role: "Senior Technical Consultant",
      period: "2020 - 2021",
      description:
        "Delivered high-performance Web Extensions and GraphQL infrastructure, enabling seamless collaboration for thousands of enterprise users.",
      website: "https://stationhq.com/",
      highlights: ["Web Extensions", "GraphQL", "TypeScript", "Performance"],
    },
    {
      company: "Tilkee",
      role: "Technical Pillar & Lead Architect",
      period: "2014 - 2020",
      description:
        "Central technical authority for 6 years. Architected microservices infrastructure, led engineering team, and drove all major technical decisions.",
      website: "https://www.tilkee.com/en/",
      highlights: [
        "Technical Leadership",
        "Microservices",
        "AWS",
        "Ruby on Rails",
        "Elixir/Phoenix",
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
            <span className="gradient-text">Select</span> Engagements
          </h2>
          <p className="section-subtitle">
            Trusted by industry leaders to solve their most critical technical
            challenges
          </p>
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
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="role gradient-text">{exp.role}</p>
                  </div>
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
                    Visit Website →
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
            <span>And Many More...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
