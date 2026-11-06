import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './i18n';

const LangContext = createContext(null);

function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'en' || fromUrl === 'ar') return fromUrl;
  try {
    const saved = localStorage.getItem('taj-lang');
    if (saved === 'en' || saved === 'ar') return saved;
  } catch { /* storage unavailable */ }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    try { localStorage.setItem('taj-lang', lang); } catch { /* ignore */ }
  }, [lang, t.dir]);

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));
  return <LangContext.Provider value={{ lang, t, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
