import { useLanguage } from "../i18n/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-seo">
          {language === "fr" ? (
            <>
              <h2 className="footer-title">
                CTO Freelance Lyon | Directeur Technique & Développeur Freelance
              </h2>
              <p className="footer-description">
                Matthieu FOREL, <strong>CTO Freelance basé à Lyon</strong>, accompagne les startups et entreprises dans leur transformation digitale. 
                Avec <strong>11+ années d'expérience</strong> en tant que <strong>Directeur Technique</strong> et <strong>développeur freelance</strong>, 
                j'interviens sur des missions de <strong>conseil CTO</strong>, <strong>architecture cloud</strong>, <strong>développement AI/ML</strong> et 
                <strong>leadership technique</strong>.
              </p>
              <p className="footer-description">
                Basé à <strong>Lyon</strong>, je travaille avec des clients en <strong>France</strong> et à l'international en <strong>remote</strong>. 
                Expert en <strong>Ruby on Rails</strong>, <strong>Golang</strong>, <strong>Elixir</strong>, <strong>React</strong>, <strong>TypeScript</strong>, 
                <strong>AWS</strong>, <strong>Kubernetes</strong> et <strong>microservices</strong>.
              </p>
              <div className="footer-keywords">
                <span>CTO Lyon</span>
                <span>CTO Freelance Lyon</span>
                <span>Directeur Technique Lyon</span>
                <span>Freelance Dev Lyon</span>
                <span>Développeur Freelance Lyon</span>
                <span>Consultant CTO</span>
                <span>Architecture Cloud</span>
                <span>AI/ML Expert</span>
              </div>
            </>
          ) : (
            <>
              <h2 className="footer-title">
                CTO Freelance Lyon | Chief Technology Officer & Technical Leader
              </h2>
              <p className="footer-description">
                Matthieu FOREL, <strong>CTO Freelance based in Lyon</strong>, helps startups and companies with their digital transformation. 
                With <strong>11+ years of experience</strong> as a <strong>Chief Technology Officer</strong> and <strong>freelance developer</strong>, 
                I provide <strong>CTO consulting</strong>, <strong>cloud architecture</strong>, <strong>AI/ML development</strong> and 
                <strong>technical leadership</strong> services.
              </p>
              <p className="footer-description">
                Based in <strong>Lyon, France</strong>, I work with clients across <strong>France</strong> and internationally in <strong>remote</strong>. 
                Expert in <strong>Ruby on Rails</strong>, <strong>Golang</strong>, <strong>Elixir</strong>, <strong>React</strong>, <strong>TypeScript</strong>, 
                <strong>AWS</strong>, <strong>Kubernetes</strong> and <strong>microservices</strong>.
              </p>
              <div className="footer-keywords">
                <span>CTO Lyon</span>
                <span>CTO Freelance Lyon</span>
                <span>Chief Technology Officer</span>
                <span>Freelance Dev Lyon</span>
                <span>Technical Leader</span>
                <span>CTO Consultant</span>
                <span>Cloud Architecture</span>
                <span>AI/ML Expert</span>
              </div>
            </>
          )}
        </div>

        <div className="footer-bottom">
          <p>© 2026 Matthieu FOREL. All rights reserved.</p>
          <p className="footer-location">Lyon, France 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

