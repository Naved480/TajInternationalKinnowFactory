import { useEffect } from 'react';
import { LangProvider, useLang } from './LangContext';
import Header from './components/Header';
import { About, CtaBand, Facilities, Facts, Hero, Leadership, Markets, Packaging, Processing, Products } from './components/Sections';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return undefined; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function Page() {
  const { lang } = useLang();
  useReveal(lang);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Facts />
        <About />
        <Products />
        <Processing />
        <Facilities />
        <Packaging />
        <Markets />
        <Leadership />
        <Gallery />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <LangProvider><Page /></LangProvider>;
}
