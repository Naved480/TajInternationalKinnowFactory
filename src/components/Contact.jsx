import { useState } from 'react';
import { useLang } from '../LangContext';
import { company, images } from '../data';
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons';

const empty = { name: '', company: '', country: '', email: '', phone: '', count: '', qty: '', message: '' };

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const buildBody = () => [
    [f.name, form.name], [f.company, form.company], [f.country, form.country], [f.email, form.email],
    [f.phone, form.phone], [f.count, form.count || f.countOptions[0]], [f.qty, form.qty],
  ].filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n') + (form.message ? `\n\n${form.message}` : '');

  const valid = () => {
    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim())) { setError(f.required); return false; }
    setError('');
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!valid()) return;
    const subject = `${f.subject}${form.company ? ` – ${form.company}` : ''}`;
    const href = `mailto:${company.emails[0]}?cc=${company.emails[1]}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBody())}`;
    window.location.href = href;
  };

  const sendWhatsapp = () => {
    if (!valid()) return;
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`${f.subject}\n\n${buildBody()}`)}`, '_blank', 'noopener');
  };

  return (
    <section className="section" id="contact">
      <div className="heading center">
        <div className="kicker">{c.kicker}</div>
        <h2>{c.title}</h2>
        <p className="lead">{c.lead}</p>
      </div>

      <div className="contact">
        <div className="contact-info reveal">
          <img src={images.card} alt="Taj International business card" className="card-img" loading="lazy" />
          <div className="info-row">
            <PinIcon />
            <div><strong>{c.addressLabel}</strong><p>{c.address[0]}<br />{c.address[1]}</p></div>
          </div>
          <div className="info-row">
            <MailIcon />
            <div><strong>{c.emailLabel}</strong>
              {company.emails.map((m) => <p key={m}><a href={`mailto:${m}`}>{m}</a></p>)}
            </div>
          </div>
          <div className="info-row">
            <PhoneIcon />
            <div><strong>{c.phoneLabel}</strong>
              {company.people.map((p) => (
                <p key={p.key}><a href={`tel:+${p.intl}`}><bdi>{p.phone}</bdi></a> — {t.leadership.people[p.key].n}</p>
              ))}
            </div>
          </div>
        </div>

        <form className="contact-card reveal" onSubmit={sendEmail} noValidate>
          <h3>{c.formTitle}</h3>
          <div className="form-grid">
            <label>{f.name} *<input value={form.name} onChange={set('name')} autoComplete="name" /></label>
            <label>{f.company}<input value={form.company} onChange={set('company')} autoComplete="organization" /></label>
            <label>{f.country}<input value={form.country} onChange={set('country')} autoComplete="country-name" /></label>
            <label>{f.email}<input type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
            <label>{f.phone}<input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" /></label>
            <label>{f.count}
              <select value={form.count} onChange={set('count')}>
                {f.countOptions.map((o, i) => <option key={o} value={i === 0 ? '' : o}>{o}</option>)}
              </select>
            </label>
            <label className="full">{f.qty}<input value={form.qty} onChange={set('qty')} /></label>
            <label className="full">{f.message}<textarea rows={4} value={form.message} onChange={set('message')} /></label>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="form-actions">
            <button className="btn" type="submit"><MailIcon width={15} height={15} /> {f.sendEmail}</button>
            <button className="btn wa" type="button" onClick={sendWhatsapp}><WhatsAppIcon width={15} height={15} /> {f.sendWhatsapp}</button>
          </div>
          <p className="smallnote">{f.note}</p>
        </form>
      </div>

      <div className="map reveal">
        <iframe
          title="Map — Kot Momin Road, Lalliani, Sargodha"
          src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
