import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import ExpertiseToProjects from "./components/ExpertiseToProjects";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ParticlesBackground from "./components/ParticlesBackground";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  useSmoothScroll();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        <ParticlesBackground />
        <Navigation />
        <Hero />
        <Expertise />
        <ExpertiseToProjects />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
