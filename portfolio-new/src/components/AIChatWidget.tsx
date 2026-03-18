import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { sendMessage, type ChatMessage } from "../services/chatApi";
import {
  AboutSection,
  ProjectsSection,
  SkillsSection,
  FunSection,
  ContactSection,
} from "./SystemComponents";
import "./AIChatWidget.css";

// Cookie utilities
const COOKIE_MESSAGES_KEY = "ai_chat_messages";
const COOKIE_REMAINING_KEY = "ai_chat_remaining";
const COOKIE_EXPIRY_DAYS = 1; // 1 day

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

interface QuickAction {
  label: string;
  action: string;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  quickActions?: QuickAction[];
  timestamp: Date;
  isIntro?: boolean;
  systemAction?: string; // ABOUT, PROJECTS, SKILLS, FUN, CONTACT
  showTextWithAction?: boolean; // Show text even if systemAction is present (for rate limit, etc.)
}

interface AIChatWidgetProps {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  isChatFocused: boolean;
  setIsChatFocused: (focused: boolean) => void;
}

const AIChatWidget = ({
  setActiveSection,
  isChatFocused,
  setIsChatFocused,
}: AIChatWidgetProps) => {
  const { language } = useLanguage();

  const getIntroMessage = () => {
    if (language === "fr") {
      return {
        title: "Matthieu Forel",
        role: "CTO & Tech Lead",
        description:
          "12+ années à construire des produits qui scalent.\nExpert en Architecture, IA/ML & Leadership Technique.",
        askMe: "Demandez-moi ce que vous voulez.",
      };
    }
    return {
      title: "Matthieu Forel",
      role: "CTO & Tech Lead",
      description:
        "12+ years building products that scale.\nExpert in Architecture, AI/ML & Technical Leadership.",
      askMe: "Ask me anything.",
    };
  };

  const getQuickActions = (): QuickAction[] => {
    if (language === "fr") {
      return [
        { label: "Quel est ton parcours ?", action: "about" },
        { label: "Montre-moi tes projets", action: "projects" },
        { label: "Quelles sont tes compétences ?", action: "skills" },
        { label: "Qu'est-ce que tu fais en dehors du code ?", action: "fun" },
        { label: "Comment te contacter ?", action: "contact" },
      ];
    }
    return [
      { label: "What's your background?", action: "about" },
      { label: "Show me your projects", action: "projects" },
      { label: "What are your skills?", action: "skills" },
      { label: "What do you do outside of coding?", action: "fun" },
      { label: "How to contact you?", action: "contact" },
    ];
  };

  const intro = getIntroMessage();

  // Load messages from cookie or use intro message
  const loadMessagesFromCookie = (): Message[] => {
    const savedMessages = getCookie(COOKIE_MESSAGES_KEY);
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        return parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
      } catch (e) {
        console.error("Failed to parse saved messages:", e);
      }
    }
    // Default intro message
    return [
      {
        id: "intro",
        text: `**${intro.title}**\n${intro.role}\n\n${intro.description}\n\n_${intro.askMe}_`,
        sender: "ai",
        timestamp: new Date(),
        isIntro: true,
      },
    ];
  };

  // Load questions remaining from cookie
  const loadQuestionsRemaining = (): number => {
    const saved = getCookie(COOKIE_REMAINING_KEY);
    return saved ? parseInt(saved, 10) : 7;
  };

  const [messages, setMessages] = useState<Message[]>(loadMessagesFromCookie());
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>(
    [],
  );
  const [questionsRemaining, setQuestionsRemaining] = useState(
    loadQuestionsRemaining(),
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Save messages to cookie whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      setCookie(
        COOKIE_MESSAGES_KEY,
        JSON.stringify(messages),
        COOKIE_EXPIRY_DAYS,
      );
    }
  }, [messages]);

  // Save questions remaining to cookie whenever it changes
  useEffect(() => {
    setCookie(
      COOKIE_REMAINING_KEY,
      questionsRemaining.toString(),
      COOKIE_EXPIRY_DAYS,
    );
  }, [questionsRemaining]);

  const scrollToBottom = () => {
    // Only scroll if there are more than 2 messages (user started conversation)
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Update conversation history for context
    const newHistory: ChatMessage[] = [
      ...conversationHistory,
      { role: "user", content: messageText },
    ];

    try {
      const response = await sendMessage(messageText, newHistory, language);

      setQuestionsRemaining(response.remaining);

      // Update conversation history with assistant response
      setConversationHistory([
        ...newHistory,
        { role: "assistant", content: response.reply },
      ]);

      // Update active section if system action detected
      if (response.systemAction) {
        setActiveSection(response.systemAction.toLowerCase());
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.reply,
        sender: "ai",
        timestamp: new Date(),
        systemAction: response.systemAction,
        // Show text with action if it's an error (rate limit, network error, etc.)
        showTextWithAction: response.error ? true : undefined,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text:
          language === "fr"
            ? "Tu as atteint la limite de questions pour aujourd'hui (7 max). Contacte-moi directement !"
            : "You've reached the daily question limit (7 max). Contact me directly!",
        sender: "ai",
        timestamp: new Date(),
        systemAction: "contact",
        showTextWithAction: true, // Show text AND contact component
      };
      console.log("Rate limit error message:", errorMessage);
      setMessages((prev) => [...prev, errorMessage]);
      setActiveSection("contact");
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (action: QuickAction) => {
    setIsChatFocused(true);
    handleSend(action.label);
  };

  const handleInputFocus = () => {
    setIsChatFocused(true);
  };

  // Format message text with markdown-like styling
  const formatMessage = (text: string, isIntro?: boolean) => {
    if (isIntro) {
      const lines = text.split("\n");
      return (
        <div className="intro-message">
          {lines.map((line, idx) => {
            if (line.startsWith("**") && line.endsWith("**")) {
              return (
                <h2 key={idx} className="intro-name">
                  {line.slice(2, -2)}
                </h2>
              );
            }
            if (line.startsWith("_") && line.endsWith("_")) {
              return (
                <p key={idx} className="intro-ask">
                  {line.slice(1, -1)}
                </p>
              );
            }
            if (line === "") return <br key={idx} />;
            return (
              <p key={idx} className="intro-line">
                {line}
              </p>
            );
          })}
        </div>
      );
    }

    // Format regular messages with markdown support
    const formatTextWithMarkdown = (text: string) => {
      // Split by double newlines for paragraphs
      const paragraphs = text.split("\n\n");

      return (
        <>
          {paragraphs.map((paragraph, pIdx) => {
            if (!paragraph.trim()) return null;

            // Process bold (**text**)
            const boldRegex = /\*\*(.+?)\*\*/g;
            const italicRegex = /\*(.+?)\*/g;

            // First pass: bold
            const withBold = paragraph.replace(boldRegex, (_match, content) => {
              return `<BOLD>${content}</BOLD>`;
            });

            // Second pass: italic
            const withItalic = withBold.replace(
              italicRegex,
              (_match, content) => {
                return `<ITALIC>${content}</ITALIC>`;
              },
            );

            // Parse the formatted string
            const segments = withItalic.split(
              /(<BOLD>|<\/BOLD>|<ITALIC>|<\/ITALIC>)/,
            );
            let isBold = false;
            let isItalic = false;

            const elements = segments.map((segment, idx) => {
              if (segment === "<BOLD>") {
                isBold = true;
                return null;
              }
              if (segment === "</BOLD>") {
                isBold = false;
                return null;
              }
              if (segment === "<ITALIC>") {
                isItalic = true;
                return null;
              }
              if (segment === "</ITALIC>") {
                isItalic = false;
                return null;
              }

              if (!segment) return null;

              if (isBold) {
                return <strong key={idx}>{segment}</strong>;
              }
              if (isItalic) {
                return <em key={idx}>{segment}</em>;
              }
              return <span key={idx}>{segment}</span>;
            });

            return <p key={pIdx}>{elements}</p>;
          })}
        </>
      );
    };

    return formatTextWithMarkdown(text);
  };

  // Handle "ask more" from system components
  const handleAskMore = (question: string) => {
    setIsChatFocused(true);
    handleSend(question);
  };

  // Render system component based on action
  const renderSystemComponent = (action: string) => {
    console.log("Rendering system component:", action);
    switch (action.toUpperCase()) {
      case "ABOUT":
        return <AboutSection onAskMore={handleAskMore} />;
      case "PROJECTS":
        return <ProjectsSection onAskMore={handleAskMore} />;
      case "SKILLS":
        return <SkillsSection />;
      case "FUN":
        return <FunSection />;
      case "CONTACT":
        console.log("Rendering ContactSection");
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className={`chat-container ${isChatFocused ? "focused" : ""}`}>
      <div className="chat-widget">
        {/* Questions remaining indicator */}
        {questionsRemaining > 0 && (
          <div className="questions-remaining">
            {language === "fr"
              ? `${questionsRemaining} question${questionsRemaining > 1 ? "s" : ""} restante${questionsRemaining > 1 ? "s" : ""}`
              : `${questionsRemaining} question${questionsRemaining > 1 ? "s" : ""} remaining`}
          </div>
        )}

        {/* Messages area - hide intro message when not focused */}
        <div className="chat-widget-messages">
          {messages
            .filter((msg) => isChatFocused || !msg.isIntro)
            .map((msg) => (
              <motion.div
                key={msg.id}
                className={`chat-message ${msg.sender} ${msg.isIntro ? "intro" : ""}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Show text if there's no system action, OR if showTextWithAction is true */}
                {msg.text && (!msg.systemAction || msg.showTextWithAction) && (
                  <div className="message-text">
                    {formatMessage(msg.text, msg.isIntro)}
                  </div>
                )}
                {/* Render system component if action detected */}
                {msg.systemAction && (
                  <>
                    {console.log(
                      "Message has systemAction:",
                      msg.systemAction,
                      "for message:",
                      msg.id,
                    )}
                    {renderSystemComponent(msg.systemAction)}
                  </>
                )}
                {msg.quickActions && (
                  <div className="message-actions">
                    {msg.quickActions.map((action, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => handleQuickAction(action)}
                        className="action-btn"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {action.label}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          {isTyping && (
            <div className="typing-indicator">
              <span />
              <span />
              <span />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area - always visible */}
        <div className="chat-widget-input">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={handleInputFocus}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={
              language === "fr"
                ? "Posez-moi une question..."
                : "Ask me anything..."
            }
          />
          <motion.button
            onClick={() => handleSend()}
            className="send-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>

        {/* Quick actions - always shown below input */}
        <motion.div
          className="quick-actions-bar"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {getQuickActions().map((action, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleQuickAction(action)}
              className="quick-action-pill"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {action.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AIChatWidget;
