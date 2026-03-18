import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import "./HeroSection.css";

interface HeroSectionProps {
  isChatFocused: boolean;
}

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const HeroSection = ({ isChatFocused }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdRef = useRef(0);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      // Add trail point
      trailIdRef.current += 1;
      setTrail((prev) => [
        ...prev.slice(-12),
        { x: clientX, y: clientY, id: trailIdRef.current },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Clean old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Calculate avatar tilt based on mouse position
  const avatarTiltX = (mousePosition.y - window.innerHeight / 2) / 60;
  const avatarTiltY = (mousePosition.x - window.innerWidth / 2) / 60;

  return (
    <div
      className={`hero-section ${isChatFocused ? "chat-focused" : ""}`}
      ref={containerRef}
    >
      {/* Language switcher */}
      <div className="language-switcher">
        <button
          className={`lang-btn ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
        <span className="lang-divider">/</span>
        <button
          className={`lang-btn ${language === "fr" ? "active" : ""}`}
          onClick={() => setLanguage("fr")}
        >
          FR
        </button>
      </div>

      {/* Meteor trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="meteor-trail"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            left: point.x,
            top: point.y,
            background: `radial-gradient(circle, rgba(201, 169, 97, ${0.3 - index * 0.02}) 0%, transparent 70%)`,
          }}
        />
      ))}

      {/* Cursor glow removed as requested */}

      {/* Background name */}
      <div className="background-name">
        <span>MATTHIEU</span>
        <span>FOREL</span>
      </div>

      {/* Grid pattern overlay */}
      <div className="grid-overlay" />

      {/* Avatar section - moves up slightly when chat is focused */}
      <motion.div
        className="avatar-section"
        animate={{
          y: isChatFocused ? -40 : 0,
          scale: isChatFocused ? 0.9 : 1,
          opacity: isChatFocused ? 0.8 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="avatar-3d-container"
          style={{
            rotateX: -avatarTiltX,
            rotateY: avatarTiltY,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <div className="avatar-3d">
            <img src="./photo.jpg" alt="Matthieu Forel" />
            <div className="avatar-glow" />
            <div className="avatar-ring" />
          </div>
        </motion.div>

        {/* Name and baseline - only visible when chat is NOT focused */}
        {!isChatFocused && (
          <motion.div
            className="hero-identity"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.2 }}
          >
            <div className="hero-name">Matthieu Forel</div>
            <div className="hero-baseline">
              {language === "fr"
                ? "CTO & Tech Lead • 12+ ans • Architecture, IA/ML & Leadership"
                : "CTO & Tech Lead • 12+ years • Architecture, AI/ML & Leadership"}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSection;
