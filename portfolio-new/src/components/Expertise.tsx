import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Expertise.css';

const Expertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseAreas = [
    {
      icon: '👑',
      title: 'Technical Leadership & Architecture',
      description: 'Strategic CTO-level guidance for ambitious projects. I architect distributed systems, lead engineering teams, and drive technical strategy that aligns with business objectives.',
      tags: ['System Design', 'Microservices', 'Team Leadership', 'Agile/Scrum', 'Code Review', 'Strategic Planning', 'Technical Mentoring'],
    },
    {
      icon: '⚡',
      title: 'High-Performance Backend',
      description: 'Building ultra-scalable APIs and microservices that handle millions of requests. Expert in performance optimization, database design, and distributed systems.',
      tags: ['Ruby on Rails', 'Golang', 'Elixir/Phoenix', 'Node.js', 'Python', 'Rust', 'GraphQL', 'gRPC', 'REST APIs'],
    },
    {
      icon: '☁️',
      title: 'Cloud & Infrastructure',
      description: 'Architecting cloud-native applications with zero-downtime deployments. Expert in AWS, containerization, and infrastructure as code.',
      tags: ['AWS (EC2, S3, RDS, Lambda, ECS/EKS)', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Firebase'],
    },
    {
      icon: '🗄️',
      title: 'Database & Data Engineering',
      description: 'Designing high-performance database architectures that scale. Expert in SQL, NoSQL, caching strategies, and data optimization.',
      tags: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis', 'Timeseries', 'ORM (ActiveRecord, Prisma)', 'Query Optimization'],
    },
    {
      icon: '🎨',
      title: 'Frontend & Mobile',
      description: 'Creating stunning, responsive user interfaces with modern frameworks. Full-stack expertise from backend to pixel-perfect UIs.',
      tags: ['React', 'TypeScript', 'Next.js', 'Redux', 'RxJS', 'Angular', 'React Native', 'Ionic', 'Swift', 'Java'],
    },
    {
      icon: '🚀',
      title: 'Performance & Optimization',
      description: 'Transforming slow systems into lightning-fast applications. Expert in profiling, optimization, and scalability strategies.',
      tags: ['Performance Tuning', 'Load Testing', 'Caching Strategies', 'Profiling', 'Scalability', 'High-Performance Computing'],
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
            <span className="title-accent gradient-text">Elite</span> Technical Expertise
          </h2>
          <p className="section-subtitle">
            The complete technology stack to transform your vision into a high-performance, scalable reality
          </p>
        </motion.div>

        <motion.div
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="expertise-card glass"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-icon">{area.icon}</div>
              <h3>{area.title}</h3>
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

        <motion.div
          className="tech-showcase"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="showcase-title">Technologies I Master</h3>
          <div className="tech-cloud">
            {[
              'Ruby on Rails', 'Golang', 'Elixir', 'Phoenix', 'Rust', 'Python', 'TypeScript', 'JavaScript',
              'React', 'Next.js', 'Node.js', 'GraphQL', 'gRPC', 'PostgreSQL', 'MongoDB', 'Redis',
              'Elasticsearch', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Microservices',
              'System Design', 'Performance Optimization', 'Team Leadership', 'Agile', 'TDD', 'DDD'
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="tech-bubble"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.02 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(102, 126, 234, 0.2)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;

