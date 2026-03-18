import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import "./SystemComponents.css";

// About/Parcours Component
export const AboutSection = ({
  onAskMore,
}: {
  onAskMore?: (question: string) => void;
}) => {
  const { language } = useLanguage();

  const experiences = [
    {
      company: "REALITE.IO",
      period: "2025 - Present",
      description:
        language === "fr"
          ? "Construction de la plateforme d'intelligence financière de zéro. Traitement de millions de data points quotidiens avec des ML models. Ownership total : infra, ML pipelines, analytics temps réel, stratégie go-to-market."
          : "Building financial intelligence platform from scratch. Processing millions of daily data points with ML models. Full ownership: infra, ML pipelines, real-time analytics, go-to-market strategy.",
      highlights:
        language === "fr"
          ? [
              "AI/ML Production",
              "Real-time Analytics",
              "0→1 Product",
              "Technical Strategy",
            ]
          : [
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
        language === "fr"
          ? "Appelé pour résoudre des problèmes critiques de performance. Élimination des bottlenecks 10x, redesign de l'architecture data pour scaler 100x. ROI mesurable en quelques semaines."
          : "Brought in to solve critical performance issues. Eliminated 10x bottlenecks, redesigned data architecture for 100x scale. Measurable ROI within weeks.",
      highlights:
        language === "fr"
          ? [
              "10x Performance",
              "100x Scale",
              "Data Architecture",
              "Rapid Impact",
            ]
          : [
              "10x Performance",
              "100x Scale",
              "Data Architecture",
              "Rapid Impact",
            ],
    },
    {
      company: "Mooncard",
      period: "2024",
      description:
        language === "fr"
          ? "Architecture des systèmes bancaires core gérant des millions d'euros de transactions quotidiennes. Architecture fault-tolerant avec exigence zero downtime."
          : "Architected core banking systems handling millions in daily transactions. Fault-tolerant architecture with zero downtime requirement.",
      highlights:
        language === "fr"
          ? [
              "Zero Downtime",
              "Financial Systems",
              "Fault Tolerance",
              "Mission Critical",
            ]
          : [
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
        language === "fr"
          ? "Lead de la refonte complète d'un monolithe legacy servant des millions d'utilisateurs. Migration vers microservices : 90% de réduction des temps de réponse, scalabilité infinie, zero disruption business."
          : "Led complete reimagining of legacy monolith serving millions globally. Migration to microservices: 90% faster response times, infinite scalability, zero business disruption.",
      highlights:
        language === "fr"
          ? [
              "90% Faster",
              "Zero Downtime Migration",
              "Microservices",
              "Team Leadership",
            ]
          : [
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
        language === "fr"
          ? "Engineering d'extensions navigateur haute performance et APIs GraphQL pour des milliers d'équipes enterprise. Optimisé pour la vitesse et la fiabilité."
          : "Engineered high-performance browser extensions and GraphQL APIs for thousands of enterprise teams. Optimized for speed and reliability.",
      highlights:
        language === "fr"
          ? ["Browser Extensions", "GraphQL", "Enterprise Scale", "Performance"]
          : [
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
        language === "fr"
          ? "Fondation technique pendant 6 ans. De startup early-stage à SaaS établi. Architecturé tous les systèmes majeurs, dirigé l'équipe engineering, pris toutes les décisions techniques critiques."
          : "Technical foundation for 6 years. From early-stage startup to established SaaS. Architected every major system, led engineering team, made every critical technical decision.",
      highlights:
        language === "fr"
          ? [
              "6 Years Leadership",
              "0→Scale",
              "AWS Infrastructure",
              "Team Building",
            ]
          : [
              "6 Years Leadership",
              "0→Scale",
              "AWS Infrastructure",
              "Team Building",
            ],
    },
  ];

  return (
    <motion.div
      className="system-section about-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>{language === "fr" ? "Mon Parcours" : "My Journey"}</h3>
      <p className="about-intro">
        {language === "fr"
          ? "12+ ans dans la tech, de startup à scale-up. Voici mes missions récentes :"
          : "12+ years in tech, from startup to scale-up. Here are my recent missions:"}
      </p>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="period">{exp.period}</span>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              {exp.highlights && (
                <div className="highlights">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
              {onAskMore && (
                <button
                  className="ask-more-btn"
                  onClick={() =>
                    onAskMore(
                      language === "fr"
                        ? `Parle-moi en détail de ton expérience chez ${exp.company}`
                        : `Tell me more about your experience at ${exp.company}`,
                    )
                  }
                >
                  {language === "fr" ? "En savoir plus +" : "Learn more +"}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Projects Component
export const ProjectsSection = ({
  onAskMore,
}: {
  onAskMore?: (question: string) => void;
}) => {
  const { language } = useLanguage();

  const projects = [
    {
      title: "REALITE.IO",
      description:
        language === "fr"
          ? "Plateforme d'analyse boursière IA avec analytics temps réel et modèles de machine learning."
          : "AI-powered stock market analysis platform with real-time analytics and machine learning models.",
      tech: ["AI/ML", "Python", "Real-time Analytics", "Financial Tech"],
    },
    {
      title:
        language === "fr" ? "SYSTÈME BANCAIRE CENTRAL" : "CORE BANKING SYSTEM",
      description:
        language === "fr"
          ? "Infrastructure bancaire robuste gérant des milliers de transactions concurrentes avec zero downtime et sécurité niveau militaire."
          : "Robust banking infrastructure handling thousands of concurrent transactions with zero downtime and military-grade security.",
      tech: ["Golang", "Ruby on Rails", "PostgreSQL", "gRPC"],
    },
    {
      title: language === "fr" ? "ACTUALITÉS RÉELLES" : "REAL NEWS",
      description:
        language === "fr"
          ? "Plateforme de génération vidéo IA créant du contenu TikTok/Instagram pour actualités financières et sociales. Multi-voix, multi-langue, automation à grande échelle."
          : "AI-powered video generation platform creating TikTok/Instagram content for financial and social news. Multi-voice, multi-language automation at scale.",
      tech: [
        "AI/ML",
        "Video Generation",
        "TTS",
        "Multi-language",
        "Automation",
      ],
    },
    {
      title:
        language === "fr"
          ? "MIGRATION MICROSERVICES"
          : "MICROSERVICES MIGRATION",
      description:
        language === "fr"
          ? "Transformation d'architecture monolithique vers microservices haute performance, réduction de 90%+ des temps de réponse."
          : "Led transformation from monolithic architecture to high-performance microservices, achieving 90%+ response time reduction.",
      tech: ["Golang", "gRPC", "Docker", "Kubernetes", "Elasticsearch"],
    },
    {
      title:
        language === "fr"
          ? "PLATEFORME DATA DURABILITÉ"
          : "SUSTAINABILITY DATA PLATFORM",
      description:
        language === "fr"
          ? "Plateforme data engineering enterprise-scale pour métriques de durabilité, traitement de millions de data points quotidiens."
          : "Enterprise-scale data engineering platform for sustainability metrics, processing millions of data points daily.",
      tech: ["Ruby on Rails", "PostgreSQL", "GraphQL", "AWS"],
    },
    {
      title:
        language === "fr"
          ? "PLATEFORME INTELLIGENCE DOCUMENTAIRE"
          : "DOCUMENT INTELLIGENCE PLATFORM",
      description:
        language === "fr"
          ? "Plateforme de partage de documents intelligent avec tracking et insights temps réel."
          : "Intelligent document sharing and analytics platform with real-time tracking and insights.",
      tech: ["Ruby on Rails", "Angular", "AWS", "Microservices"],
    },
    {
      title:
        language === "fr" ? "PLATEFORME COMMUNAUTAIRE" : "COMMUNITY PLATFORM",
      description:
        language === "fr"
          ? "Hub communautaire all-in-one hautement customizable avec fonctionnalités avancées et architecture scalable."
          : "Highly customizable all-in-one community hub with advanced features and scalable architecture.",
      tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
    },
  ];

  return (
    <motion.div
      className="system-section projects-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>{language === "fr" ? "Projets Phares" : "Featured Projects"}</h3>
      <p className="projects-intro">
        {language === "fr"
          ? "Systèmes qui scalent, performent, et délivrent de la valeur business :"
          : "Building systems that scale, perform, and deliver business value:"}
      </p>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              onAskMore &&
              onAskMore(
                language === "fr"
                  ? `Parle-moi en détail du projet ${project.title}`
                  : `Tell me more about the ${project.title} project`,
              )
            }
            style={{ cursor: onAskMore ? "pointer" : "default" }}
          >
            <h4>{project.title}</h4>
            <p className="description">{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            {onAskMore && (
              <div className="learn-more-hint">
                {language === "fr"
                  ? "Cliquer pour en savoir plus"
                  : "Click to learn more"}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Skills Component
export const SkillsSection = () => {
  const { language } = useLanguage();

  const skills = {
    [language === "fr" ? "Languages & Frameworks" : "Languages & Frameworks"]: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Vue.js",
      "Ruby on Rails",
      "Golang",
      "Elixir/Phoenix",
      "Python",
    ],
    "AI & Machine Learning": [
      "LLMs (OpenAI, Claude)",
      "RAG Systems",
      "Fine-tuning",
      "MLOps",
      "Model Deployment",
      "Vector Databases",
      "Computer Vision",
      "NLP",
    ],
    [language === "fr" ? "Cloud & Infrastructure" : "Cloud & Infrastructure"]: [
      "AWS (Solutions Architect)",
      "GCP",
      "Azure",
      "Kubernetes",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
    ],
    [language === "fr"
      ? "Architecture & Practices"
      : "Architecture & Practices"]: [
      "Microservices",
      "Event-Driven Architecture",
      "System Design",
      "GraphQL",
      "REST APIs",
      "CI/CD",
      "DevOps",
    ],
    [language === "fr" ? "Blockchain & Web3" : "Blockchain & Web3"]: [
      "Smart Contracts",
      "DeFi Applications",
      "Ecosystem Exploration",
    ],
  };

  return (
    <motion.div
      className="system-section skills-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>{language === "fr" ? "Stack Technique" : "Technical Stack"}</h3>
      <p className="skills-intro">
        {language === "fr"
          ? "12+ ans d'expérience avec les technologies modernes :"
          : "12+ years of experience with modern technologies:"}
      </p>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h4>{category}</h4>
            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Fun Component
export const FunSection = () => {
  const { language } = useLanguage();

  const funFacts = [
    {
      icon: "✈️",
      title: language === "fr" ? "Pilote d'avion" : "Pilot",
      description:
        language === "fr"
          ? "Licence PPL obtenue en mars 2025 - Je vole sur Cessna et DR400. Rien de tel qu'une vue à 3000 pieds pour relativiser un bug de prod."
          : "PPL license obtained in March 2025 - Flying Cessna and DR400. Nothing like a 3000-foot view to put a production bug in perspective.",
    },
    {
      icon: "🎵",
      title: language === "fr" ? "Musicien" : "Musician",
      description:
        language === "fr"
          ? "Batteur depuis l'enfance, puis phase DJ/électro pendant plusieurs années. La musique, c'est comme le code : rythme, structure, et créativité."
          : "Drummer since childhood, then DJ/electronic music phase for several years. Music is like code: rhythm, structure, and creativity.",
    },
    {
      icon: "🥊",
      title: language === "fr" ? "Boxeur" : "Boxer",
      description:
        language === "fr"
          ? "Pratiqué la boxe pendant plusieurs années. Discipline, stratégie, et résilience - des qualités qui servent autant sur le ring que dans la tech."
          : "Practiced boxing for several years. Discipline, strategy, and resilience - qualities that serve as well in the ring as in tech.",
    },
  ];

  return (
    <motion.div
      className="system-section fun-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>🎯 {language === "fr" ? "En dehors du code" : "Beyond Code"}</h3>
      <p className="fun-intro">
        {language === "fr"
          ? "Passionné de tech, mais pas que. Voici ce qui m'anime quand je ne suis pas devant un terminal :"
          : "Passionate about tech, but not only. Here's what drives me when I'm not in front of a terminal:"}
      </p>
      <div className="fun-grid">
        {funFacts.map((fact, idx) => (
          <motion.div
            key={idx}
            className="fun-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="fun-icon">{fact.icon}</div>
            <h4>{fact.title}</h4>
            <p>{fact.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Contact Form Component - Uses FormSubmit.co
export const ContactSection = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
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
            message: formData.message,
            _subject: `Portfolio Chat: Message from ${formData.name}`,
            _template: "table",
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="system-section contact-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="form-success">
          ✅{" "}
          {language === "fr"
            ? "Message envoyé ! Je te réponds très vite."
            : "Message sent! I'll get back to you soon."}
        </div>
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <motion.div
        className="system-section contact-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="form-error">
          ❌{" "}
          {language === "fr"
            ? "Erreur d'envoi. Réessaie ou contacte-moi directement : matthieu.lc.forel@gmail.com"
            : "Send error. Try again or reach me at: matthieu.lc.forel@gmail.com"}
        </div>
        <button onClick={() => setStatus("idle")} className="retry-btn">
          {language === "fr" ? "Réessayer" : "Try Again"}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="system-section contact-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>
        {language === "fr"
          ? "Avec plaisir ! Voici mes coordonnées :"
          : "With pleasure! Here are my contact details:"}
      </h3>

      {/* Direct contact info */}
      <div className="contact-direct">
        <div className="contact-item">
          <span className="contact-label">📧 Email</span>
          <a href="mailto:matthieu.lc.forel@gmail.com" className="contact-link">
            matthieu.lc.forel@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">💼 LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/matthieuforel/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/matthieuforel
          </a>
        </div>
      </div>

      <div className="contact-divider">
        <span>
          {language === "fr"
            ? "ou envoie-moi un message"
            : "or send me a message"}
        </span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            placeholder={language === "fr" ? "Ton nom *" : "Your name *"}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <input
          type="text"
          placeholder={
            language === "fr" ? "Entreprise (optionnel)" : "Company (optional)"
          }
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
        <textarea
          placeholder={
            language === "fr" ? "Ton message... *" : "Your message... *"
          }
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={4}
        />
        <button type="submit" disabled={sending}>
          {sending
            ? language === "fr"
              ? "Envoi en cours..."
              : "Sending..."
            : language === "fr"
              ? "Envoyer 🚀"
              : "Send 🚀"}
        </button>
      </form>

      <p className="contact-footer">
        {language === "fr"
          ? "N'hésite pas à m'écrire pour des missions ou des collaborations !"
          : "Don't hesitate to reach out for missions or collaborations!"}
      </p>
    </motion.div>
  );
};
