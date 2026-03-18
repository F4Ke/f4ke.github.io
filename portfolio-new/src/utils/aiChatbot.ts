// AI Chatbot Engine - Ultra-smart intent detection (FR/EN)

export type Intent = 
  | 'greeting'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'contact'
  | 'fun'
  | 'about'
  | 'unknown';

export interface ChatResponse {
  intent: Intent;
  message: string;
  quickActions?: QuickAction[];
  language: 'fr' | 'en';
}

export interface QuickAction {
  label: string;
  action: Intent;
  icon?: string;
}

// Detect language from input
export const detectLanguage = (input: string): 'fr' | 'en' => {
  const frenchWords = ['bonjour', 'salut', 'comment', 'quoi', 'pourquoi', 'expérience', 'compétences', 'projets', 'contact', 'appeler', 'email'];
  const lowerInput = input.toLowerCase();
  
  const frenchCount = frenchWords.filter(word => lowerInput.includes(word)).length;
  return frenchCount > 0 ? 'fr' : 'en';
};

// Intent detection with NLP-like patterns
export const detectIntent = (input: string): Intent => {
  const lower = input.toLowerCase();
  
  // Greeting patterns
  if (/^(hi|hello|hey|bonjour|salut|coucou|yo)\b/i.test(lower)) {
    return 'greeting';
  }
  
  // Experience patterns (FR + EN)
  if (/(experience|expérience|parcours|career|carrière|work|travail|job|poste|cto|tech lead)/i.test(lower)) {
    return 'experience';
  }
  
  // Skills patterns (FR + EN)
  if (/(skill|compétence|technolog|stack|tech|language|langage|framework|outil|tool)/i.test(lower)) {
    return 'skills';
  }
  
  // Projects patterns (FR + EN)
  if (/(project|projet|portfolio|réalisation|work|travaux|création)/i.test(lower)) {
    return 'projects';
  }
  
  // Contact patterns (FR + EN)
  if (/(contact|contacter|appel|appeler|email|mail|phone|téléphone|reach|joindre|parler|discuter|talk|chat)/i.test(lower)) {
    return 'contact';
  }
  
  // Fun patterns (FR + EN)
  if (/(fun|amusant|cool|wip|expérimental|experimental|surprise|easter egg)/i.test(lower)) {
    return 'fun';
  }
  
  // About patterns (FR + EN)
  if (/(qui es-tu|who are you|about|à propos|toi|you|yourself|présente)/i.test(lower)) {
    return 'about';
  }
  
  return 'unknown';
};

// Generate response based on intent
export const generateResponse = (input: string): ChatResponse => {
  const intent = detectIntent(input);
  const language = detectLanguage(input);
  
  const responses: Record<Intent, { fr: string; en: string }> = {
    greeting: {
      fr: "Salut ! 👋 Je suis Matthieu Forel, CTO & Tech Lead avec 12+ ans d'expérience. Je construis des produits qui scalent. Comment puis-je t'aider ?",
      en: "Hey! 👋 I'm Matthieu Forel, CTO & Tech Lead with 12+ years of experience. I build products that scale. How can I help you?"
    },
    experience: {
      fr: "💼 J'ai dirigé des équipes tech chez REALITE.IO (AI/VR), Sweep (Performance), Mooncard (FinTech), et bien d'autres. De la startup au scale-up, j'ai tout vu. Quelle expérience t'intéresse ?",
      en: "💼 I've led tech teams at REALITE.IO (AI/VR), Sweep (Performance), Mooncard (FinTech), and many more. From startup to scale-up, I've seen it all. Which experience interests you?"
    },
    skills: {
      fr: "⚡ Full-stack expert : Backend (Node.js, Python, Go), Frontend (React, Vue, Next.js), Cloud (AWS, GCP, Kubernetes), AI/ML, Architecture... Je maîtrise toute la stack moderne. Quelle techno t'intéresse ?",
      en: "⚡ Full-stack expert: Backend (Node.js, Python, Go), Frontend (React, Vue, Next.js), Cloud (AWS, GCP, Kubernetes), AI/ML, Architecture... I master the entire modern stack. Which tech interests you?"
    },
    projects: {
      fr: "🚀 Plateformes AI, systèmes de paiement à haute disponibilité, infrastructures cloud scalables, applications temps réel... J'ai construit des produits utilisés par des millions d'utilisateurs. Quel type de projet veux-tu découvrir ?",
      en: "🚀 AI platforms, high-availability payment systems, scalable cloud infrastructures, real-time applications... I've built products used by millions. What type of project do you want to explore?"
    },
    contact: {
      fr: "📧 Parfait ! Je suis disponible pour des missions CTO/Tech Lead, du conseil stratégique, ou de l'architecture. Contacte-moi par email ou via le formulaire. Quel type de collaboration t'intéresse ?",
      en: "📧 Perfect! I'm available for CTO/Tech Lead missions, strategic consulting, or architecture work. Contact me by email or via the form. What type of collaboration interests you?"
    },
    fun: {
      fr: "🎮 Section expérimentale ! Ici je teste des trucs cool : animations WebGL, effets de particules, shaders... Un terrain de jeu pour explorer les limites du web moderne. Que veux-tu savoir d'autre ?",
      en: "🎮 Experimental section! Here I test cool stuff: WebGL animations, particle effects, shaders... A playground to explore the limits of modern web. What else do you want to know?"
    },
    about: {
      fr: "👨‍💻 Matthieu Forel, CTO/Tech Lead passionné par l'innovation. 12+ ans à construire des produits tech qui scalent. Expert en architecture, AI/ML, et leadership technique. Basé partout (remote worldwide). Que veux-tu savoir de plus ?",
      en: "👨‍💻 Matthieu Forel, CTO/Tech Lead passionate about innovation. 12+ years building tech products that scale. Expert in architecture, AI/ML, and technical leadership. Based everywhere (remote worldwide). What else do you want to know?"
    },
    unknown: {
      fr: "🤔 Hmm, je ne suis pas sûr de comprendre... (Disclaimer : je ne suis pas un vrai LLM, juste une simulation intelligente !). Essaie de me demander mon expérience, mes compétences, mes projets, ou comment me contacter !",
      en: "🤔 Hmm, I'm not sure I understand... (Disclaimer: I'm not a real LLM, just a smart simulation!). Try asking about my experience, skills, projects, or how to contact me!"
    }
  };
  
  const quickActions = getQuickActions(intent, language);
  
  return {
    intent,
    message: responses[intent][language],
    quickActions,
    language
  };
};

// Generate quick actions based on intent
const getQuickActions = (intent: Intent, language: 'fr' | 'en'): QuickAction[] => {
  const actions: Record<'fr' | 'en', Record<string, QuickAction[]>> = {
    fr: {
      default: [
        { label: '💼 Expérience', action: 'experience', icon: '💼' },
        { label: '⚡ Compétences', action: 'skills', icon: '⚡' },
        { label: '🚀 Projets', action: 'projects', icon: '🚀' },
        { label: '📧 Contact', action: 'contact', icon: '📧' },
        { label: '🎮 Fun (WIP)', action: 'fun', icon: '🎮' }
      ],
      experience: [
        { label: 'REALITE.IO (2021-2024)', action: 'experience' },
        { label: 'Sweep (2020-2021)', action: 'experience' },
        { label: 'Mooncard (2014-2020)', action: 'experience' },
        { label: 'Toutes les expériences', action: 'experience' }
      ]
    },
    en: {
      default: [
        { label: '💼 Experience', action: 'experience', icon: '💼' },
        { label: '⚡ Skills', action: 'skills', icon: '⚡' },
        { label: '🚀 Projects', action: 'projects', icon: '🚀' },
        { label: '📧 Contact', action: 'contact', icon: '📧' },
        { label: '🎮 Fun (WIP)', action: 'fun', icon: '🎮' }
      ],
      experience: [
        { label: 'REALITE.IO (2021-2024)', action: 'experience' },
        { label: 'Sweep (2020-2021)', action: 'experience' },
        { label: 'Mooncard (2014-2020)', action: 'experience' },
        { label: 'All experiences', action: 'experience' }
      ]
    }
  };
  
  return actions[language][intent === 'experience' ? 'experience' : 'default'];
};

