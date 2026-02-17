import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <Expertise />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
