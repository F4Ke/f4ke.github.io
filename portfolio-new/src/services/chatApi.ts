import FingerprintJS from "@fingerprintjs/fingerprintjs";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  reply: string;
  remaining: number;
  error?: string;
  systemAction?: string;
}

// Cache the visitor ID
let cachedVisitorId: string | null = null;

// Get unique visitor ID (persists across sessions)
export async function getVisitorId(): Promise<string> {
  if (cachedVisitorId) return cachedVisitorId;

  try {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    cachedVisitorId = result.visitorId;
    return cachedVisitorId;
  } catch (error) {
    // Fallback to localStorage + random ID
    let fallbackId = localStorage.getItem("visitor_id");
    if (!fallbackId) {
      fallbackId = `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("visitor_id", fallbackId);
    }
    cachedVisitorId = fallbackId;
    return fallbackId;
  }
}

// Parse system actions from LLM response
export function parseSystemActions(text: string): { cleanText: string; actions: string[] } {
  const actionRegex = /\[SYSTEM:(\w+)\]/g;
  const actions: string[] = [];
  let match;

  while ((match = actionRegex.exec(text)) !== null) {
    actions.push(match[1]);
  }

  // Remove system tags from displayed text
  const cleanText = text.replace(actionRegex, "").trim();

  return { cleanText, actions };
}

// API endpoint - changes based on environment
// SECURITY: API key is NEVER exposed to the client, only used server-side in Netlify Functions
const API_URL = import.meta.env.DEV
  ? "http://localhost:8888/.netlify/functions/chat"  // Local netlify dev
  : "/.netlify/functions/chat";  // Production (Netlify auto-routes)

// Send message to LLM
export async function sendMessage(
  message: string,
  conversationHistory: ChatMessage[],
  language: string = "fr"
): Promise<ChatResponse> {
  const visitorId = await getVisitorId();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        visitorId,
        conversationHistory: conversationHistory.slice(-10), // Last 10 messages
        language, // Pass user's language preference
      }),
    });

    const data = await response.json();

    if (response.status === 429) {
      // Rate limited
      const { cleanText, actions } = parseSystemActions(data.reply || data.message);
      return {
        reply: cleanText,
        remaining: 0,
        error: "rate_limit",
        systemAction: actions[0],
      };
    }

    if (!response.ok) {
      throw new Error(data.error || "API error");
    }

    const { cleanText, actions } = parseSystemActions(data.reply);

    return {
      reply: cleanText,
      remaining: data.remaining,
      systemAction: actions.length > 0 ? actions[0] : undefined,
    };
  } catch (error) {
    console.error("Chat API error:", error);
    const errorMsg = language === "fr"
      ? "Tu as atteint la limite de questions pour aujourd'hui (7 max). Contacte-moi directement pour en savoir plus !"
      : "You've reached the daily question limit (7 max). Contact me directly to learn more!";
    return {
      reply: errorMsg,
      remaining: 0,
      error: "network_error",
      systemAction: "CONTACT",
    };
  }
}

