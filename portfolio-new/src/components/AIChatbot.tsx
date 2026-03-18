import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  generateResponse,
  type ChatResponse,
  type QuickAction,
} from "../utils/aiChatbot";
import "./AIChatbot.css";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  quickActions?: QuickAction[];
  timestamp: Date;
}

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      text: "Hey! 👋 I'm Matthieu Forel, CTO & Tech Lead with 12+ years of experience. Ask me anything!",
      sender: "ai",
      quickActions: [
        { label: "💼 Experience", action: "experience" },
        { label: "⚡ Skills", action: "skills" },
        { label: "🚀 Projects", action: "projects" },
        { label: "📧 Contact", action: "contact" },
        { label: "🎮 Fun", action: "fun" },
      ],
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI thinking (300-800ms)
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 500 + 300),
    );

    // Generate AI response
    const response: ChatResponse = generateResponse(messageText);

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response.message,
      sender: "ai",
      quickActions: response.quickActions,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, aiMessage]);
  };

  const handleQuickAction = (action: QuickAction) => {
    handleSend(action.label);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-chatbot">
      <div className="chat-container">
        <div className="chat-header">
          <div className="avatar">
            <img src="./photo.jpg" alt="Matthieu Forel" />
            <span className="status-indicator"></span>
          </div>
          <div className="header-info">
            <h3>Matthieu Forel</h3>
            <p className="status">CTO & Tech Lead • Online</p>
          </div>
        </div>

        <div className="chat-messages">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={`message ${message.sender}`}
              >
                {message.sender === "ai" && (
                  <div className="message-avatar">
                    <img src="./photo.jpg" alt="AI" />
                  </div>
                )}
                <div className="message-content">
                  <div className="message-bubble">{message.text}</div>
                  {message.quickActions && (
                    <div className="quick-actions">
                      {message.quickActions.map((action, idx) => (
                        <motion.button
                          key={idx}
                          className="quick-action-btn"
                          onClick={() => handleQuickAction(action)}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: idx * 0.05,
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {action.label}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="message ai typing-indicator"
            >
              <div className="message-avatar">
                <img src="./photo.jpg" alt="AI" />
              </div>
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything... (FR/EN)"
            className="chat-input"
          />
          <button onClick={() => handleSend()} className="send-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
