import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  gradient: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tech,
  gradient,
  index,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect - each card moves at different speed
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 - index * 20, -100 + index * 20],
  );

  // Scale effect on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // Rotation effect for depth
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <motion.div
      ref={cardRef}
      className="project-card glass"
      style={{ y, scale, rotateX }}
      whileHover={{
        y: -15,
        scale: 1.03,
        rotateX: 0,
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="project-gradient" style={{ background: gradient }}></div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map((techItem, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
