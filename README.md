# Da i Gemelli · Portofino — V7

Single-file self-contained · Production ready.

## V7 — Changelog
### Posizionamento corretto
- ✓ **Mobile asimmetrico ma più centrale**: "Da i" in alto a sinistra (top:25vh), "Gemelli" in basso a destra (bottom:25vh) — composizione originale ma più vicina al centro
- ✓ Rimosso il centering forzato precedente

### Performance
- ✓ **WebP** invece di JPEG (–25% sulle immagini, ~100KB risparmiati)
- ✓ **CSS minificato** (–30KB)
- ✓ `decoding="async"` su tutte le immagini
- ✓ `loading="lazy"` sulle below-the-fold
- ✓ File totale: **545KB** (era 720KB)

### Accessibilità
- ✓ **Skip link** "Salta al contenuto" per utenti tastiera
- ✓ **prefers-reduced-motion** — disabilita animazioni per chi ha sensibilità al movimento
- ✓ **Focus-visible** ring gold su tutti gli elementi interattivi (solo da tastiera)
- ✓ **ARIA completo** su hamburger menu (aria-expanded, aria-controls, aria-hidden, role=dialog)
- ✓ **Escape key** chiude il mobile menu
- ✓ **Landmark `<main>`** per screen reader
- ✓ Burger menu label dinamica (Apri/Chiudi)

### SEO
- ✓ **JSON-LD structured data** (Schema.org Restaurant) — dati strutturati per Google
- ✓ **Open Graph** tags per condivisione social
- ✓ **Twitter Card** tags
- ✓ **Geo meta** (coordinate Portofino)
- ✓ Canonical URL
- ✓ Theme-color e color-scheme

## Deploy
- **Vercel**: push GitHub → import → deploy automatico
- **Locale**: apri `index.html` (zero server)
