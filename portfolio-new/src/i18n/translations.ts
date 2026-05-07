// Dynamic quarter calculation
const getCurrentQuarter = () => {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const year = now.getFullYear();
  const quarter = Math.floor(month / 3) + 1; // 1-4

  // Get next quarter
  let nextQuarter = quarter + 1;
  let nextYear = year;

  if (nextQuarter > 4) {
    nextQuarter = 1;
    nextYear = year + 1;
  }

  return { quarter: nextQuarter, year: nextYear };
};

const { quarter, year } = getCurrentQuarter();

// Service icons will be injected by the Services component
export const serviceIcons = {
  rocket: 'rocket',
  robot: 'robot',
  lightning: 'lightning',
  suit: 'suit',
} as const;

export const translations = {
  en: {
    nav: {
      home: "Home",
      expertise: "Expertise",
      services: "Services",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Available for New Projects • Fast Delivery • Production-Ready",
      title: "Matthieu FOREL",
      role: "Chief Technology Officer",
      subtitle: "Building exceptional digital products. From MVP to scaling.",
      subtitle2: "AI, Web3, Cloud. Production-ready in weeks, not months. Trusted by 60+ companies.",
      stats: {
        years: "Years",
        technologies: "Projects Delivered",
        commitment: "Client Satisfaction",
      },
      cta: "Get Free Estimate",
      ctaSecondary: "My Work",
      scroll: "Scroll to discover",
    },
    expertise: {
      title: "Core",
      titleHighlight: "Expertise",
      subtitle: "Comprehensive technical leadership across the full stack",
      areas: {
        leadership: {
          title: "Technical Leadership & Architecture",
          description: "Strategic CTO-level guidance for ambitious projects. I architect distributed systems, lead engineering teams, and drive technical strategy that aligns with business objectives.",
        },
        ai: {
          title: "AI & Machine Learning",
          description: "Building production-ready AI systems that deliver real business value. Expert in LLMs, computer vision, NLP, and ML pipelines from prototype to scale.",
        },
        backend: {
          title: "High-Performance Backend",
          description: "Building ultra-scalable APIs and microservices that handle millions of requests. Expert in performance optimization, database design, and distributed systems.",
        },
        frontend: {
          title: "Modern Frontend & UX",
          description: "Crafting exceptional user experiences with cutting-edge frameworks. From responsive design to complex state management and real-time applications.",
        },
        cloud: {
          title: "Cloud & DevOps Excellence",
          description: "Architecting cloud-native solutions with automated CI/CD pipelines. Expert in AWS, containerization, and infrastructure as code for maximum reliability.",
        },
        blockchain: {
          title: "Blockchain & Web3",
          description: "Building decentralized applications and smart contracts. Deep expertise in Ethereum, Solidity, and the entire Web3 ecosystem.",
        },
      },
    },

    services: {
      title: "",
      titleHighlight: "Services",
      subtitle: "High-performance solutions tailored to your ambitions",
      popularBadge: "Recommended",
      ctaButton: "Discuss Your Project",
      packages: [
        {
          icon: "rocket" as const,
          name: "MVP Development",
          description: "Transform your vision into a production-ready product. Full-stack development from strategy to deployment.",
          features: [
            "Product strategy & UX design",
            "Full-stack development (Frontend + Backend + DB)",
            "Cloud deployment & infrastructure",
            "Admin dashboard & analytics",
            "Post-launch support & iterations",
          ],
          timeline: "6-8 weeks",
          featured: true,
        },
        {
          icon: "robot" as const,
          name: "AI Integration",
          description: "Leverage cutting-edge AI to create competitive advantages. LLMs, computer vision, NLP, or custom ML models.",
          features: [
            "AI strategy & feasibility study",
            "Model selection & fine-tuning",
            "Seamless API integration",
            "Performance optimization",
            "Continuous monitoring & improvements",
          ],
          timeline: "3-5 weeks",
          featured: false,
        },
        {
          icon: "lightning" as const,
          name: "Technical Rescue",
          description: "Resolve critical performance bottlenecks, modernize legacy systems, or migrate to scalable architecture.",
          features: [
            "In-depth technical audit",
            "Performance optimization (10x improvements)",
            "Architecture refactoring",
            "Knowledge transfer & documentation",
            "Long-term advisory support",
          ],
          timeline: "2-4 weeks",
          featured: false,
        },
        {
          icon: "suit" as const,
          name: "CTO as a Service",
          description: "Strategic technical leadership on-demand. Guide your team, make critical decisions, and scale with confidence.",
          features: [
            "Strategic planning sessions",
            "Architecture & technology decisions",
            "Team leadership & mentoring",
            "Code reviews & best practices",
            "Investor-ready technical documentation",
          ],
          timeline: "Flexible engagement",
          featured: false,
        },
      ],
      guarantees: [
        {
          icon: "✅",
          title: "Excellence Guaranteed",
          description: "Uncompromising quality standards. Every line of code matters.",
        },
        {
          icon: "⚡",
          title: "Rapid Execution",
          description: "Production-ready solutions delivered in weeks, not months.",
        },
        {
          icon: "🛡️",
          title: "Enterprise-Grade",
          description: "Clean architecture, best practices, comprehensive documentation.",
        },
        {
          icon: "💬",
          title: "Direct Partnership",
          description: "Work directly with an experienced CTO. No intermediaries.",
        },
      ],
    },

    projects: {
      title: "Featured",
      titleHighlight: "Projects",
      subtitle: "Building systems that scale, perform, and deliver business value",
      cta: {
        title: "Ready to Build Something Extraordinary?",
        subtitle: "Let's transform your vision into a high-performance, scalable reality",
        button: "Start Your Project",
      },
      items: [
        {
          title: "NORTHVANE",
          description: "AI-powered signals for stocks, crypto & prediction markets. Real-time sentiment tracking and market intelligence alerts.",
          tech: ["AI/ML", "Python", "Real-time Analytics", "Financial Tech"],
        },
        {
          title: "SYSTÈME BANCAIRE CENTRAL",
          description: "Robust banking infrastructure handling thousands of concurrent transactions with zero downtime and military-grade security.",
          tech: ["Golang", "Ruby on Rails", "PostgreSQL", "gRPC"],
        },
        {
          title: "ACTUALITÉS RÉELLES",
          description: "AI-powered video generation platform creating TikTok/Instagram content for financial and social news. Multi-voice, multi-language automation at scale.",
          tech: ["AI/ML", "Video Generation", "TTS", "Multi-language", "Automation"],
        },
        {
          title: "MIGRATION DES MICROSERVICES",
          description: "Led transformation from monolithic architecture to high-performance microservices, achieving 90%+ response time reduction.",
          tech: ["Golang", "gRPC", "Docker", "Kubernetes", "Elasticsearch"],
        },
        {
          title: "PLATEFORME DATA DURABILITÉ",
          description: "Enterprise-scale data engineering platform for sustainability metrics, processing millions of data points daily.",
          tech: ["Ruby on Rails", "PostgreSQL", "GraphQL", "AWS"],
        },
        {
          title: "PLATEFORME INTELLIGENCE DOCUMENTAIRE",
          description: "Intelligent document sharing and analytics platform with real-time tracking and insights.",
          tech: ["Ruby on Rails", "Angular", "AWS", "Microservices"],
        },
        {
          title: "PLATEFORME COMMUNAUTAIRE",
          description: "Highly customizable all-in-one community hub with advanced features and scalable architecture.",
          tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
        },
      ],
    },
    experience: {
      title: "Selected",
      titleHighlight: "Missions",
      subtitle: "Freelance & Consulting",
      viewWebsite: "View Website",
      freelance: {
        title: "Freelance & Consulting",
        description: "Since 2018, I've collaborated with startups and businesses to architect and develop high-quality MVPs, mobile applications, and scalable APIs. Successfully delivered projects including medical taxi platforms, community-driven food applications, bank onboarding solutions, and various tailored software products.",
        andMore: "And Many More...",
      },
      items: [
        {
          company: "NORTHVANE",
          period: "2025 - Present",
          description: "Stop Guessing. Start Winning. Building AI-powered signals for stocks, crypto & prediction markets. Real-time sentiment tracking, AI price predictions, and market intelligence alerts. Full technical ownership: infrastructure, ML pipelines, real-time analytics, and go-to-market strategy.",
          website: "https://www.northvane.app/",
          highlights: ["AI/ML Production", "Real-time Analytics", "0→1 Product", "Technical Strategy"],
        },
        {
          company: "Sweep",
          period: "2025",
          description: "Brought in as the technical expert to solve critical performance issues others couldn't crack. Eliminated bottlenecks causing 10x slowdowns, redesigned data architecture for 100x scale, delivered measurable ROI within weeks. Europe's top sustainability platform now handles enterprise load effortlessly.",
          website: "https://www.sweep.net/",
          highlights: ["10x Performance Gain", "100x Scale", "Data Architecture", "Rapid Impact"],
        },
        {
          company: "Mooncard",
          period: "2024",
          description: "Engaged to architect the most critical infrastructure: core banking systems handling millions in daily transactions. Designed fault-tolerant architecture with zero downtime requirement. Every transaction matters—built systems that never fail.",
          website: "https://www.mooncard.co/",
          highlights: ["Zero Downtime", "Financial Systems", "Fault Tolerance", "Mission Critical"],
        },
        {
          company: "Hivebrite",
          period: "2021 - 2023",
          description: "Brought in to lead the complete reimagining of a legacy monolith serving millions globally. Architected and executed migration to modern microservices—90% faster response times, infinite scalability, zero business disruption. Mentored team through the transformation.",
          website: "https://www.hivebrite.io",
          highlights: ["90% Faster", "Zero Downtime Migration", "Microservices", "Team Leadership"],
        },
        {
          company: "Station HQ",
          period: "2020 - 2021",
          description: "Called in to engineer high-performance browser extensions and GraphQL APIs powering collaboration for thousands of enterprise teams. Optimized for speed and reliability—users don't wait, systems don't break.",
          website: "https://stationhq.com/",
          highlights: ["Browser Extensions", "GraphQL", "Enterprise Scale", "Performance"],
        },
        {
          company: "Tilkee",
          period: "2014 - 2020",
          description: "Served as the technical foundation for 6 years. From early-stage startup to established SaaS—architected every major system, led engineering team, made every critical technical decision. Built microservices infrastructure on AWS that scaled the company from zero to thousands of customers.",
          website: "https://www.tilkee.com/en/",
          highlights: ["6 Years Leadership", "0→Scale", "AWS Infrastructure", "Team Building"],
        },
      ],
    },
    contact: {
      title: "Let's Build Something",
      titleHighlight: "Exceptional",
      subtitle: "Get your free project estimate in 24 hours. No commitment, just honest advice.",
      urgency: `🔥 Limited slots available for Q${quarter} ${year}`,
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@company.com",
        company: "Company",
        companyPlaceholder: "Your company name",
        subject: "Subject",
        subjectPlaceholder: "What can I help you with?",
        serviceType: "Service Type",
        message: "Message",
        messagePlaceholder: "Tell me about your project, challenges, or goals...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
        services: {
          consultation: "Consultation / Discovery Call",
          quote: "Project Quote",
          cto: "CTO / Technical Leadership",
          architecture: "System Architecture Review",
          development: "Full-Stack Development",
          other: "Other",
        },
      },
      info: {
        email: "Email",
        location: "Location",
        locationValue: "Worldwide (Remote)",
        availability: "Availability",
        availabilityValue: "Open to new projects",
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      expertise: "Expertise",
      services: "Services",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      badge: "Disponible pour Nouveaux Projets • Livraison Rapide • Production-Ready",
      title: "Matthieu FOREL",
      role: "Directeur Technique",
      subtitle: "Construction de produits digitaux exceptionnels. Du MVP au scaling.",
      subtitle2: "IA, Web3, Cloud. Production-ready en semaines, pas en mois. La confiance de 60+ entreprises.",
      stats: {
        years: "Années",
        technologies: "Projets Livrés",
        commitment: "Satisfaction Client",
      },
      cta: "Devis Gratuit",
      ctaSecondary: "Mes Réalisations",
      scroll: "Défiler pour découvrir",
    },
    expertise: {
      title: "Principale",
      titleHighlight: "Expertise",
      subtitle: "Leadership technique complet sur toute la stack",
      areas: {
        leadership: {
          title: "Leadership Technique & Architecture",
          description: "Guidance stratégique niveau CTO pour des projets ambitieux. J'architecture des systèmes distribués, dirige des équipes d'ingénieurs et pilote la stratégie technique alignée avec les objectifs business.",
        },
        ai: {
          title: "IA & Machine Learning",
          description: "Construction de systèmes IA production-ready qui délivrent une vraie valeur business. Expert en LLMs, computer vision, NLP et pipelines ML du prototype à la mise à l'échelle.",
        },
        backend: {
          title: "Backend Haute Performance",
          description: "Construction d'APIs et microservices ultra-scalables gérant des millions de requêtes. Expert en optimisation de performance, design de bases de données et systèmes distribués.",
        },
        frontend: {
          title: "Frontend Moderne & UX",
          description: "Création d'expériences utilisateur exceptionnelles avec des frameworks de pointe. Du design responsive à la gestion d'état complexe et applications temps réel.",
        },
        cloud: {
          title: "Cloud & Excellence DevOps",
          description: "Architecture de solutions cloud-native avec pipelines CI/CD automatisés. Expert AWS, containerisation et infrastructure as code pour une fiabilité maximale.",
        },
        blockchain: {
          title: "Blockchain & Web3",
          description: "Construction d'applications décentralisées et smart contracts. Expertise approfondie en Ethereum, Solidity et tout l'écosystème Web3.",
        },
      },
    },

    services: {
      title: "",
      titleHighlight: "Services",
      subtitle: "Solutions haute performance adaptées à vos ambitions",
      popularBadge: "Recommandé",
      ctaButton: "Discutons de Votre Projet",
      packages: [
        {
          icon: "rocket" as const,
          name: "Développement MVP",
          description: "Transformez votre vision en produit production-ready. Développement full-stack de la stratégie au déploiement.",
          features: [
            "Stratégie produit & design UX",
            "Développement full-stack (Frontend + Backend + DB)",
            "Déploiement cloud & infrastructure",
            "Dashboard admin & analytics",
            "Support post-lancement & itérations",
          ],
          timeline: "6-8 semaines",
          featured: true,
        },
        {
          icon: "robot" as const,
          name: "Intégration IA",
          description: "Exploitez l'IA de pointe pour créer des avantages compétitifs. LLMs, computer vision, NLP ou modèles ML custom.",
          features: [
            "Stratégie IA & étude de faisabilité",
            "Sélection & fine-tuning de modèles",
            "Intégration API transparente",
            "Optimisation de performance",
            "Monitoring & améliorations continues",
          ],
          timeline: "3-5 semaines",
          featured: false,
        },
        {
          icon: "lightning" as const,
          name: "Sauvetage Technique",
          description: "Résolvez les goulots d'étranglement critiques, modernisez les systèmes legacy ou migrez vers une architecture scalable.",
          features: [
            "Audit technique approfondi",
            "Optimisation performance (10x améliorations)",
            "Refactoring d'architecture",
            "Transfert de connaissances & documentation",
            "Support conseil long terme",
          ],
          timeline: "2-4 semaines",
          featured: false,
        },
        {
          icon: "suit" as const,
          name: "CTO as a Service",
          description: "Leadership technique stratégique à la demande. Guidez votre équipe, prenez les bonnes décisions et scalez en confiance.",
          features: [
            "Sessions de planification stratégique",
            "Décisions architecture & technologies",
            "Leadership & mentorat d'équipe",
            "Code reviews & best practices",
            "Documentation technique pour investisseurs",
          ],
          timeline: "Engagement flexible",
          featured: false,
        },
      ],
      guarantees: [
        {
          icon: "✅",
          title: "Excellence Garantie",
          description: "Standards de qualité sans compromis. Chaque ligne de code compte.",
        },
        {
          icon: "⚡",
          title: "Exécution Rapide",
          description: "Solutions production-ready livrées en semaines, pas en mois.",
        },
        {
          icon: "🛡️",
          title: "Niveau Entreprise",
          description: "Architecture propre, best practices, documentation complète.",
        },
        {
          icon: "💬",
          title: "Partenariat Direct",
          description: "Travaillez directement avec un CTO expérimenté. Sans intermédiaires.",
        },
      ],
    },

    projects: {
      title: "Projets",
      titleHighlight: "Phares",
      subtitle: "Construire des systèmes qui scalent, performent et délivrent de la valeur business",
      cta: {
        title: "Prêt à Construire Quelque Chose d'Extraordinaire ?",
        subtitle: "Transformons votre vision en une réalité haute performance et scalable",
        button: "Démarrer Votre Projet",
      },
      items: [
        {
          title: "NORTHVANE",
          description: "Signaux AI pour stocks, crypto & prediction markets. Tracking de sentiment en temps réel et alertes d'intelligence de marché.",
          tech: ["IA/ML", "Python", "Analytics Temps Réel", "FinTech"],
        },
        {
          title: "SYSTÈME BANCAIRE CENTRAL",
          description: "Infrastructure bancaire robuste gérant des milliers de transactions simultanées avec zéro downtime et sécurité de niveau militaire.",
          tech: ["Golang", "Ruby on Rails", "PostgreSQL", "gRPC"],
        },
        {
          title: "ACTUALITÉS RÉELLES",
          description: "Plateforme de génération vidéo IA créant du contenu TikTok/Instagram pour l'actualité financière et sociale. Automatisation multi-voix, multi-langue à grande échelle.",
          tech: ["IA/ML", "Génération Vidéo", "TTS", "Multi-langue", "Automatisation"],
        },
        {
          title: "MIGRATION DES MICROSERVICES",
          description: "Direction de la transformation d'une architecture monolithique vers des microservices haute performance, réduisant le temps de réponse de 90%+.",
          tech: ["Golang", "gRPC", "Docker", "Kubernetes", "Elasticsearch"],
        },
        {
          title: "PLATEFORME DATA DURABILITÉ",
          description: "Plateforme d'ingénierie data à l'échelle entreprise pour les métriques de durabilité, traitant des millions de points de données quotidiennement.",
          tech: ["Ruby on Rails", "PostgreSQL", "GraphQL", "AWS"],
        },
        {
          title: "PLATEFORME INTELLIGENCE DOCUMENTAIRE",
          description: "Plateforme intelligente de partage et d'analytics de documents avec tracking et insights temps réel.",
          tech: ["Ruby on Rails", "Angular", "AWS", "Microservices"],
        },
        {
          title: "PLATEFORME COMMUNAUTAIRE",
          description: "Hub communautaire tout-en-un hautement personnalisable avec fonctionnalités avancées et architecture scalable.",
          tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
        },
      ],
    },
    experience: {
      title: "Missions",
      titleHighlight: "Sélectionnées",
      subtitle: "Freelance & Consulting",
      viewWebsite: "Voir le Site",
      freelance: {
        title: "Freelance & Consulting",
        description: "Depuis 2018, je collabore avec des startups et entreprises pour architecturer et développer des MVPs de haute qualité, applications mobiles et APIs scalables. Projets livrés avec succès incluant des plateformes de taxis médicaux, applications alimentaires communautaires, solutions d'onboarding bancaire et divers produits logiciels sur mesure.",
        andMore: "Et Bien Plus...",
      },
      items: [
        {
          company: "NORTHVANE",
          period: "2025 - Présent",
          description: "Stop Guessing. Start Winning. Signaux AI pour stocks, crypto & prediction markets. Tracking de sentiment en temps réel, prédictions de prix AI, et alertes d'intelligence de marché. Propriété technique complète : infrastructure, pipelines ML, analytics temps réel et stratégie go-to-market.",
          website: "https://www.northvane.app/",
          highlights: ["Production IA/ML", "Analytics Temps Réel", "Produit 0→1", "Stratégie Technique"],
        },
        {
          company: "Sweep",
          period: "2025",
          description: "Recruté en tant qu'expert technique pour résoudre des problèmes de performance critiques que d'autres n'ont pas pu résoudre. Élimination des goulots d'étranglement causant des ralentissements 10x, refonte de l'architecture data pour une échelle 100x, ROI mesurable en quelques semaines. La plateforme de durabilité leader en Europe gère désormais la charge entreprise sans effort.",
          website: "https://www.sweep.net/",
          highlights: ["Gain Performance 10x", "Échelle 100x", "Architecture Data", "Impact Rapide"],
        },
        {
          company: "Mooncard",
          period: "2024",
          description: "Engagé pour architecturer l'infrastructure la plus critique : systèmes bancaires centraux gérant des millions de transactions quotidiennes. Conception d'une architecture tolérante aux pannes avec exigence de zéro downtime. Chaque transaction compte—construction de systèmes qui ne tombent jamais en panne.",
          website: "https://www.mooncard.co/",
          highlights: ["Zéro Downtime", "Systèmes Financiers", "Tolérance aux Pannes", "Mission Critique"],
        },
        {
          company: "Hivebrite",
          period: "2021 - 2023",
          description: "Recruté pour diriger la refonte complète d'un monolithe legacy servant des millions d'utilisateurs mondialement. Architecture et exécution de la migration vers des microservices modernes—temps de réponse 90% plus rapides, scalabilité infinie, zéro perturbation business. Mentorat de l'équipe à travers la transformation.",
          website: "https://www.hivebrite.io",
          highlights: ["90% Plus Rapide", "Migration Zéro Downtime", "Microservices", "Leadership Équipe"],
        },
        {
          company: "Station HQ",
          period: "2020 - 2021",
          description: "Appelé pour développer des extensions navigateur haute performance et des APIs GraphQL alimentant la collaboration pour des milliers d'équipes entreprise. Optimisé pour la vitesse et la fiabilité—les utilisateurs n'attendent pas, les systèmes ne cassent pas.",
          website: "https://stationhq.com/",
          highlights: ["Extensions Navigateur", "GraphQL", "Échelle Entreprise", "Performance"],
        },
        {
          company: "Tilkee",
          period: "2014 - 2020",
          description: "Fondation technique pendant 6 ans. De startup early-stage à SaaS établi—architecture de chaque système majeur, direction de l'équipe engineering, prise de chaque décision technique critique. Construction d'une infrastructure microservices sur AWS qui a fait passer l'entreprise de zéro à des milliers de clients.",
          website: "https://www.tilkee.com/en/",
          highlights: ["Leadership 6 Ans", "0→Scale", "Infrastructure AWS", "Construction Équipe"],
        },
      ],
    },
    contact: {
      title: "Construisons Quelque Chose",
      titleHighlight: "d'Exceptionnel",
      subtitle: "Recevez votre devis gratuit en 24 heures. Sans engagement, juste des conseils honnêtes.",
      urgency: `🔥 Places limitées disponibles pour Q${quarter} ${year}`,
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre.email@entreprise.com",
        company: "Entreprise",
        companyPlaceholder: "Nom de votre entreprise",
        subject: "Sujet",
        subjectPlaceholder: "Comment puis-je vous aider ?",
        serviceType: "Type de Service",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre projet, défis ou objectifs...",
        send: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l'envoi. Veuillez réessayer.",
        services: {
          consultation: "Consultation / Appel Découverte",
          quote: "Devis de Projet",
          cto: "CTO / Leadership Technique",
          architecture: "Revue d'Architecture Système",
          development: "Développement Full-Stack",
          other: "Autre",
        },
      },
      info: {
        email: "Email",
        location: "Localisation",
        locationValue: "Monde Entier (Remote)",
        availability: "Disponibilité",
        availabilityValue: "Ouvert aux nouveaux projets",
      },
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;

