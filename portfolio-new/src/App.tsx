import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AIChatWidget from "./components/AIChatWidget";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isChatFocused, setIsChatFocused] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        <HeroSection isChatFocused={isChatFocused} />
        <AIChatWidget
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isChatFocused={isChatFocused}
          setIsChatFocused={setIsChatFocused}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
