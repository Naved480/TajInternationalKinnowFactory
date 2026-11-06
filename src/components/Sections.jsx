import { useLang } from '../LangContext';
import { company, images } from '../data';
import { CheckIcon, PhoneIcon, WhatsAppIcon } from './Icons';

function Heading({ kicker, title, lead, center = true, light = false }) {
  return (
    <div className={`heading ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <header className="hero" id="home" style={{ backgroundImage: `url(${images.sorting})` }}>
      <div className="hero-inner reveal">
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.text}</p>
        <div className="actions">
          <a className="btn" href="#products">{t.hero.cta1}</a>
          <a className="btn ghost" href="#contact">{t.hero.cta2}</a>
        </div>
      </div>
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        {t.hero.tagline}
      </div>
    </header>
  );
}

export function Facts() {
  const { t } = useLang();
  return (
    <section className="facts" aria-label="Key facts">
      {t.facts.map((f) => (
        <div className="fact reveal" key={f.l}>
          <strong>{f.v}</strong>
          <span>{f.l}</span>
        </div>
      ))}
    </section>
  );
}

export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section className="section" id="about">
      <div className="split">
        <div className="about-media reveal">
          <img src={images.nameSign} alt="Taj International Kinno Factory name board" className="about-main" loading="lazy" />
          <img src={images.office} alt="Factory office building" className="about-inset" loading="lazy" />
          <span className="about-badge">{a.badge}</span>
        </div>
        <div className="reveal">
          <Heading kicker={a.kicker} title={a.title} center={false} />
          <p className="body">{a.p1}</p>
          <p className="body">{a.p2}</p>
        </div>
      </div>
      <div className="features">
        {a.features.map((f) => (
          <article className="feature reveal" key={f.t}>
            <div className="ico" aria-hidden="true">{f.i}</div>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Products() {
  const { t } = useLang();
  const p = t.products;
  const pics = [images.closeup, images.grader, images.cartons];
  return (
    <section className="section tinted" id="products">
      <Heading kicker={p.kicker} title={p.title} lead={p.lead} />
      <div className="cards">
        {p.items.map((it, i) => (
          <article className="product reveal" key={it.t}>
            <div className="product-img">
              <img src={pics[i]} alt={it.t} loading="lazy" />
              <span className="tag">{it.tag}</span>
            </div>
            <div className="product-copy">
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="specs reveal">
        <h3>{p.specsTitle}</h3>
        <dl>
          {p.specs.map(([k, v]) => (
            <div className="spec-row" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Processing() {
  const { t } = useLang();
  const p = t.processing;
  const pics = [images.bays, images.handPacking, images.washing, images.washing, images.inspection, images.grader, images.openCartons, images.coldInside];
  return (
    <section className="section" id="processing">
      <Heading kicker={p.kicker} title={p.title} lead={p.lead} />
      <div className="process-showcase reveal">
        <img src={images.sorting} alt="Kinnow on the Taj International sorting line" loading="lazy" />
        <img src={images.grader} alt="Multi-lane size grading machine" loading="lazy" />
        <img src={images.inspection} alt="Inspection of Kinnow under lights" loading="lazy" />
      </div>
      <ol className="steps">
        {p.steps.map((s, i) => (
          <li className="step reveal" key={s.t}>
            <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
            <img src={pics[i]} alt="" aria-hidden="true" loading="lazy" className="step-thumb" />
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Facilities() {
  const { t } = useLang();
  const f = t.facilities;
  const pics = [images.sorting, images.coldInside, images.front, images.handPacking];
  return (
    <section className="section dark" id="facilities">
      <Heading kicker={f.kicker} title={f.title} lead={f.lead} light />
      <div className="facility-grid">
        {f.items.map((it, i) => (
          <article className="facility reveal" key={it.t}>
            <img src={pics[i]} alt={it.t} loading="lazy" />
            <div className="facility-copy">
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Packaging() {
  const { t } = useLang();
  const p = t.packaging;
  return (
    <section className="section" id="packaging">
      <div className="split reverse">
        <div className="reveal">
          <Heading kicker={p.kicker} title={p.title} lead={p.lead} center={false} />
          <ul className="checklist">
            {p.points.map((pt) => (
              <li key={pt}><CheckIcon /> <span>{pt}</span></li>
            ))}
          </ul>
        </div>
        <div className="pack-mosaic reveal">
          <img src={images.readyToShip} alt="Strapped TAJ Kinnow Mandarin cartons" loading="lazy" className="pm-tall" />
          <img src={images.closeup} alt="Kinnow packed with TAJ tissue wrap" loading="lazy" />
          <img src={images.cartons} alt="TAJ Kinnow Mandarin export cartons" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function Markets() {
  const { t } = useLang();
  const m = t.markets;
  return (
    <section className="section tinted" id="markets">
      <Heading kicker={m.kicker} title={m.title} lead={m.lead} />
      <div className="regions">
        {m.regions.map((r, i) => (
          <article className="region reveal" key={r.t}>
            <span className="region-num">{i + 1}</span>
            <h3>{r.t}</h3>
            <p>{r.c}</p>
          </article>
        ))}
      </div>
      <div className="buyers reveal">
        <h3>{m.buyersTitle}</h3>
        <div className="chips">
          {m.buyers.map((b) => <span className="chip" key={b}>{b}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  const { t } = useLang();
  const l = t.leadership;
  return (
    <section className="section" id="team">
      <Heading kicker={l.kicker} title={l.title} />
      <div className="people">
        {company.people.map((p) => {
          const info = l.people[p.key];
          const initials = info.n.split(' ').filter(Boolean).slice(-2).map((w) => w[0]).join('');
          return (
            <article className="person reveal" key={p.key}>
              <div className="avatar" aria-hidden="true">{initials}</div>
              <span className="role">{info.r}</span>
              <h3>{info.n}</h3>
              <a className="person-phone" href={`tel:+${p.intl}`}><bdi>{p.phone}</bdi></a>
              <div className="person-actions">
                <a className="btn small" href={`tel:+${p.intl}`}><PhoneIcon width={14} height={14} /> {l.call}</a>
                <a className="btn small wa" href={`https://wa.me/${p.intl}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={14} height={14} /> {l.whatsapp}</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useLang();
  return (
    <section className="band" style={{ backgroundImage: `url(${images.coldInside})` }}>
      <div>
        <h2>{t.cta.title}</h2>
        <p>{t.cta.text}</p>
      </div>
      <a className="btn" href="#contact">{t.cta.btn}</a>
    </section>
  );
}
