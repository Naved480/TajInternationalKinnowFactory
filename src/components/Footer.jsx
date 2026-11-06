import { useLang } from '../LangContext';
import { company, images } from '../data';
import { NAV_IDS } from './Header';
import { WhatsAppIcon } from './Icons';

export default function Footer() {
  const { t } = useLang();
  return (
    <>
      <footer className="footer">
        <div className="footer-col">
          <div className="footer-brand">
            <img src={images.logo} alt="" aria-hidden="true" />
            <strong>{t.brand[0]}<small>{t.brand[1]}</small></strong>
          </div>
          <p>{t.footer.about}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer.quick}</h4>
          <ul>{NAV_IDS.map((id) => <li key={id}><a href={`#${id}`}>{t.nav[id]}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer.contact}</h4>
          <p>{t.contact.address[0]}<br />{t.contact.address[1]}</p>
          {company.emails.map((m) => <p key={m}><a href={`mailto:${m}`}>{m}</a></p>)}
          {company.people.map((p) => <p key={p.key}><a href={`tel:+${p.intl}`}><bdi>{p.phone}</bdi></a></p>)}
        </div>
      </footer>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Taj International Kinnow Factory · Sargodha, Pakistan</span>
        <span>{t.footer.rights}</span>
      </div>
      <a className="wa-float" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon width={28} height={28} />
      </a>
    </>
  );
}
