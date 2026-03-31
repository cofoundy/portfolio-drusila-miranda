# Propuesta de Diseño: Drusila Miranda

## Identidad
Drusila es una estratega creativa y creadora de contenido UGC peruana que vive en Italia. Opera en la intersección de dos culturas y dos mercados — el italiano y el latinoamericano. No es solo una marketer: es una puente cultural que entiende cómo comunicar en ambos mundos. Su portfolio debe reflejar esa dualidad: sofisticación europea con calidez latina.

## Audiencia
- **Clientes potenciales en Italia:** B&Bs, restaurantes, pequeños negocios que necesitan contenido y ads
- **Clientes potenciales en LatAm:** Marcas que quieren expandirse o comunicar profesionalmente
- **Colaboradores/agencias:** Que buscan freelancers de UGC y Meta Ads
- **Marcas buscando UGC creators:** Portfolios son credenciales en este espacio

## Secciones Propuestas (en orden)

1. **Hero** — Nombre grande, tagline bilingüe, toggle IT/ES, foto profesional con glow dorado, CTA "Parliamo" / "Hablemos"
2. **Chi Sono / Sobre Mí** — Quién es, su historia Perú→Italia, qué la diferencia. Quote personal flotante.
3. **Servizi / Servicios** — 3 cards: Strategia Creativa, UGC Content, Meta Ads. Cada una con icono, descripción, items. Efecto hover gold.
4. **Il Mio Metodo / Mi Método** — Proceso de trabajo en 4 pasos numerados (01-04): Analisi, Strategia, Creazione, Ottimizzazione. Layout horizontal con línea conectora.
5. **Portfolio / Casi di Studio** — Grid de proyectos. Placeholder elegante "In Arrivo / Próximamente" para el B&B. Diseñado para expandirse cuando tenga casos reales.
6. **Contattami / Contacto** — CTA cálido con email y link a WhatsApp. Fondo dorado sutil.

## Secciones que NO incluir
- **Experience/Timeline** — No es empleada, es freelancer. No aplica timeline corporativo.
- **Education** — No hay datos y no es relevante para su audiencia (clientes buscan resultados, no títulos).
- **Skills pills** — Genérico. Sus skills se comunican mejor a través de los servicios.
- **Testimonials** — No tiene aún. Mejor omitir que inventar.

## Metáfora Visual
Un editorial de moda italiano: páginas limpias con tipografía elegante, espacios generosos, toques dorados como joyas discretas. Cada sección respira. El negro ancla, el beige acoge, el dorado eleva. Como abrir una revista Vogue Italia en versión digital minimalista.

---

## Paleta (6 colores)

| Token | Hex | Uso | Justificación |
|-------|-----|-----|---------------|
| primaryDark | #1A1A1A | Headings, footer bg, nav text | Negro profundo — base de luxury branding |
| primary | #8B7355 | Borders, badges, detalles | Bronze cálido — sofisticación sin frialdad |
| primaryLight | #C4A77D | Shimmer, highlights | Gold claro — brillo sutil |
| accent | #D4A853 | CTAs, hover, puntos de atención | Dorado — el color que el cliente pidió, warmth + luxury |
| surface | #F5F0E8 | Section backgrounds | Crema/beige — calidez, editorial |
| surfaceLight | #FAF7F2 | Hero bg, secciones claras | Marfil — la más clara, limpia |

**Esquema:** Monocromático cálido (negro → bronze → gold → beige → marfil). Toda la paleta vive en la familia warm neutral/gold. Contraste WCAG AA cumplido: #1A1A1A sobre #FAF7F2 = 18.1:1.

## Tipografía

| Uso | Font | Por qué |
|-----|------|---------|
| Headings | **Playfair Display** (serif) | Elegancia editorial, luxury positioning. Contraste thick/thin evoca revistas de moda. |
| Body | **Inter** (sans-serif) | Legibilidad impecable, moderno, no compite con Playfair. |
| Accent | **Playfair Display Italic** | Para quotes y taglines — drama sutil. |

## Efecto Visual Único

### Toggle Bilingüe IT/ES
- Botón flotante en esquina superior (o en nav): **IT | ES**
- Al hacer click, TODO el contenido cambia de idioma sin reload
- Transición suave: fade-out 200ms → swap → fade-in 200ms
- El toggle es el statement: "Trabajo en dos mundos"
- Implementación: config.ts con keys `it` y `es`, JavaScript client-side

### Gold Accent Animations
- Líneas shimmer doradas entre secciones
- Hover en cards: borde dorado aparece con transición
- Números del método (01-04) con text-stroke dorado
- CTA button con gradient gold hover

---

## Layout ASCII (Mobile-First)

### Hero (375px)
```
┌─────────────────────┐
│     [IT | ES]       │  ← toggle arriba derecha
│                     │
│  ┌─────────────┐    │
│  │   FOTO      │    │
│  │  (circular  │    │
│  │   gold ring)│    │
│  └─────────────┘    │
│                     │
│  DRUSILA MIRANDA    │  ← Playfair Display, 2xl
│                     │
│  Creative Strategist│  ← Inter, muted
│  & UGC Creator      │
│                     │
│  "Strategia e       │  ← Playfair Italic, gold
│   creatività per    │
│   far crescere      │
│   il tuo brand"     │
│                     │
│  [ Parliamo →  ]    │  ← CTA button gold
│                     │
└─────────────────────┘
```

### Hero (Desktop 1280px)
```
┌────────────────────────────────────────────────┐
│  DRUSILA MIRANDA    [IT | ES]                  │
│                                                │
│  ┌──────────────────────┬────────────────────┐ │
│  │                      │                    │ │
│  │  DRUSILA             │    ┌──────────┐    │ │
│  │  MIRANDA             │    │  FOTO    │    │ │
│  │                      │    │ (con     │    │ │
│  │  Creative Strategist │    │  gold    │    │ │
│  │  & UGC Creator       │    │  glow)   │    │ │
│  │                      │    └──────────┘    │ │
│  │  "Strategia e..."   │                    │ │
│  │                      │                    │ │
│  │  [ Parliamo → ]      │                    │ │
│  └──────────────────────┴────────────────────┘ │
└────────────────────────────────────────────────┘
```

### Servizi (Mobile)
```
┌─────────────────────┐
│  SERVIZI            │
│  ─────── (gold bar) │
│                     │
│  ┌─────────────────┐│
│  │ ✦ 01            ││
│  │ Strategia       ││
│  │ Creativa        ││
│  │                 ││
│  │ Pianificazione  ││
│  │ strategica...   ││
│  │                 ││
│  │ • Brand audit   ││
│  │ • Content plan  ││
│  │ • Positioning   ││
│  └─────────────────┘│
│                     │
│  ┌─────────────────┐│
│  │ ✦ 02            ││
│  │ UGC Content     ││
│  │ ...             ││
│  └─────────────────┘│
│                     │
│  ┌─────────────────┐│
│  │ ✦ 03            ││
│  │ Meta Ads        ││
│  │ ...             ││
│  └─────────────────┘│
└─────────────────────┘
```

### Il Mio Metodo (Mobile)
```
┌─────────────────────┐
│  IL MIO METODO      │
│  ─────── (gold bar) │
│                     │
│  01 ─── Analisi     │
│  │                  │
│  02 ─── Strategia   │
│  │                  │
│  03 ─── Creazione   │
│  │                  │
│  04 ─── Ottimizzaz. │
│                     │
│  (línea vertical    │
│   gold conectando   │
│   los 4 pasos)      │
└─────────────────────┘
```

### Portfolio (Mobile)
```
┌─────────────────────┐
│  PORTFOLIO          │
│  ─────── (gold bar) │
│                     │
│  ┌─────────────────┐│
│  │                 ││
│  │  ✦ Coming Soon  ││
│  │                 ││
│  │  Sto lavorando  ││
│  │  sui miei primi ││
│  │  casi di studio ││
│  │                 ││
│  │  [Contattami →] ││
│  └─────────────────┘│
└─────────────────────┘
```
