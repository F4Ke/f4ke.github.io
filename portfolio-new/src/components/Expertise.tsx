import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Expertise.css";
import { useLanguage } from "../i18n/LanguageContext";
import {
  CrownIcon,
  BrainIcon,
  ServerIcon,
  ChainIcon,
  CloudIcon,
  PaletteIcon,
} from "./Icons";

const Expertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      icon: <CrownIcon />,
      title: t.expertise.areas.leadership.title,
      description: t.expertise.areas.leadership.description,
      tags: [
        "System Design",
        "Microservices",
        "Team Leadership",
        "Agile/Scrum",
        "Code Review",
        "Strategic Planning",
        "Technical Mentoring",
      ],
    },
    {
      icon: <BrainIcon />,
      title: t.expertise.areas.ai.title,
      description: t.expertise.areas.ai.description,
      tags: [
        "LLMs (GPT, Claude)",
        "Computer Vision",
        "NLP",
        "TensorFlow",
        "PyTorch",
        "ML Pipelines",
        "AI Integration",
        "Prompt Engineering",
      ],
    },
    {
      icon: <ServerIcon />,
      title: t.expertise.areas.backend.title,
      description: t.expertise.areas.backend.description,
      tags: [
        "Ruby on Rails",
        "Golang",
        "Elixir/Phoenix",
        "Node.js",
        "Python",
        "Rust",
        "GraphQL",
        "gRPC",
        "REST APIs",
      ],
    },
    {
      icon: <CloudIcon />,
      title: t.expertise.areas.cloud.title,
      description: t.expertise.areas.cloud.description,
      tags: [
        "AWS (EC2, S3, RDS, Lambda, ECS/EKS)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD",
        "Firebase",
      ],
    },
    {
      icon: <PaletteIcon />,
      title: t.expertise.areas.frontend.title,
      description: t.expertise.areas.frontend.description,
      tags: [
        "React",
        "TypeScript",
        "Next.js",
        "Redux",
        "RxJS",
        "Angular",
        "React Native",
        "Ionic",
        "Swift",
        "Java",
      ],
    },
    {
      icon: <ChainIcon />,
      title: t.expertise.areas.blockchain.title,
      description: t.expertise.areas.blockchain.description,
      tags: [
        "Ethereum",
        "Solidity",
        "Web3.js",
        "Smart Contracts",
        "DeFi",
        "NFTs",
        "Hardhat",
        "Truffle",
      ],
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="expertise" className="expertise" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t.expertise.title}{" "}
            <span className="gradient-text">{t.expertise.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.expertise.subtitle}</p>
        </motion.div>

        <motion.div
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="expertise-card glass"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-header">
                <div className="card-icon">{area.icon}</div>
                <h3>{area.title}</h3>
              </div>
              <p>{area.description}</p>
              <div className="tech-tags">
                {area.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hidden tech showcase for SEO and LLM indexing */}
        <div
          className="tech-showcase-seo"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
          aria-hidden="true"
        >
          <h3>Technologies and Expertise</h3>
          <p>
            Expert in Ruby on Rails, Golang, Elixir, Phoenix, Rust, Python,
            TypeScript, JavaScript, React, Next.js, Node.js, GraphQL, gRPC,
            PostgreSQL, MongoDB, Redis, Elasticsearch, AWS, Docker, Kubernetes,
            Terraform, CI/CD, Microservices, System Design, Performance
            Optimization, Team Leadership, Agile, TDD, DDD, Software
            Architecture, Distributed Systems, Cloud Infrastructure, DevOps,
            Backend Development, Frontend Development, Full Stack Development,
            Technical Leadership, CTO, Staff Engineer, Senior Engineer,
            Scalability, High Availability, Database Design, API Design,
            Security, Testing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
