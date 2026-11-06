import { useEffect, useState } from 'react';
import { useLang } from '../LangContext';
import { company, images } from '../data';
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon } from './Icons';

export const NAV_IDS = ['home', 'about', 'products', 'processing', 'packaging', 'markets', 'gallery', 'contact'];

export default function Header() {
  const { t, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'home';
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <div className="topbar">
        <span>{t.top[0]}</span>
        <span className="topbar-contact">
          <a href={`tel:+${company.people[0].intl}`}><PhoneIcon width={13} height={13} /> <bdi>{company.people[0].phone}</bdi></a>
          <a href={`mailto:${company.emails[0]}`}><MailIcon width={13} height={13} /> {company.emails[0]}</a>
        </span>
      </div>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Main">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img src={images.logo} alt="Taj International logo" className="brand-logo" />
          <span>{t.brand[0]}<small>{t.brand[1]}</small></span>
        </a>
        <div className={`navlinks ${open ? 'open' : ''}`}>
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="lang" type="button" onClick={toggle}>{t.switchTo}</button>
          <button className="menu-btn" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </>
  );
}
