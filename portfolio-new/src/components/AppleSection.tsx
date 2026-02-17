import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AppleSection.css';

interface AppleSectionProps {
  children: React.ReactNode;
  className?: string;
  parallaxSpeed?: number;
  scaleEffect?: boolean;
  fadeEffect?: boolean;
}

const AppleSection = ({ 
  children, 
  className = '', 
  parallaxSpeed = 0.3,
  scaleEffect = true,
  fadeEffect = true 
}: AppleSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100 * parallaxSpeed, -100 * parallaxSpeed]);
  
  // Scale effect (zoom in as you scroll)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scaleEffect ? [0.95, 1, 0.95] : [1, 1, 1]
  );
  
  // Opacity effect
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    fadeEffect ? [0.3, 1, 1, 0.3] : [1, 1, 1, 1]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`apple-section ${className} ${isVisible ? 'visible' : ''}`}
      style={{ y, scale, opacity }}
    >
      {children}
    </motion.div>
  );
};

export default AppleSection;

