import { useCallback, useEffect, useState } from 'react';
import { useLang } from '../LangContext';
import { gallery } from '../data';
import { CloseIcon } from './Icons';

const CATS = ['all', 'factory', 'processing', 'packing', 'storage'];

export default function Gallery() {
  const { t, lang } = useLang();
  const g = t.gallery;
  const [cat, setCat] = useState('all');
  const [idx, setIdx] = useState(null);
  const items = cat === 'all' ? gallery : gallery.filter((x) => x.cat === cat);

  const step = useCallback((d) => setIdx((i) => (i === null ? null : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (idx === null) return undefined;
    const rtl = lang === 'ar';
    const onKey = (e) => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowRight') step(rtl ? -1 : 1);
      if (e.key === 'ArrowLeft') step(rtl ? 1 : -1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [idx, step, lang]);

  return (
    <section className="section tinted" id="gallery">
      <div className="heading center">
        <div className="kicker">{g.kicker}</div>
        <h2>{g.title}</h2>
      </div>
      <div className="filters" role="tablist">
        {CATS.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={cat === c}
            className={`filter ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
            {g.filters[c]}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {items.map((it, i) => (
          <button type="button" className="g-item" key={it.key} onClick={() => setIdx(i)}>
            <img src={it.src} alt={g.captions[it.key]} loading="lazy" />
            <span className="g-cap">{g.captions[it.key]}</span>
          </button>
        ))}
      </div>

      {idx !== null && items[idx] && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setIdx(null)}>
          <button className="lb-close" type="button" aria-label="Close" onClick={() => setIdx(null)}><CloseIcon /></button>
          <button className="lb-nav lb-prev" type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={items[idx].src} alt={g.captions[items[idx].key]} />
            <figcaption>{g.captions[items[idx].key]} · {idx + 1} / {items.length}</figcaption>
          </figure>
          <button className="lb-nav lb-next" type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
        </div>
      )}
    </section>
  );
}
