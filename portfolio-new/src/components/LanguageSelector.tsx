import { useLanguage } from '../i18n/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider">/</span>
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => setLanguage('fr')}
        aria-label="Passer en Français"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;

