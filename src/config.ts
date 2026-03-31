// Bilingual content type
type BilingualText = { it: string; es: string };

export const siteConfig = {
  name: "Drusila Miranda",
  title: "Creative Strategist & UGC Creator",
  defaultLang: "it" as "it" | "es",

  // SEO
  description: {
    it: "Drusila Miranda — Strategia creativa, UGC e Meta Ads per far crescere il tuo brand in Italia e America Latina.",
    es: "Drusila Miranda — Estrategia creativa, UGC y Meta Ads para hacer crecer tu marca en Italia y Latinoamérica.",
  } as BilingualText,

  // 6-color luxury palette: warm monochromatico (negro → bronze → gold → beige → marfil)
  accentColor: "#D4A853",
  colors: {
    primaryDark: "#1A1A1A",
    primary: "#8B7355",
    primaryLight: "#C4A77D",
    accent: "#D4A853",
    surface: "#F5F0E8",
    surfaceLight: "#FAF7F2",
  },

  // Hero
  tagline: {
    it: "Strategia e creatività per far crescere il tuo brand.",
    es: "Estrategia y creatividad para hacer crecer tu marca.",
  } as BilingualText,

  // About / Chi Sono
  about: {
    it: "Sono una creative strategist e content creator peruviana che vive in Italia. Unisco la creatività latina con la raffinatezza europea per creare strategie di comunicazione che connettono brand e persone. Creo contenuti autentici, gestisco campagne Meta Ads e sviluppo strategie creative per aziende che vogliono crescere nei mercati italiano e latinoamericano.",
    es: "Soy una estratega creativa y creadora de contenido peruana que vive en Italia. Combino la creatividad latina con la sofisticación europea para crear estrategias de comunicación que conectan marcas con personas. Creo contenido auténtico, gestiono campañas de Meta Ads y desarrollo estrategias creativas para empresas que quieren crecer en los mercados italiano y latinoamericano.",
  } as BilingualText,

  quote: {
    it: "Due culture, una visione: far brillare il tuo brand.",
    es: "Dos culturas, una visión: hacer brillar tu marca.",
  } as BilingualText,

  // Services (3)
  services: [
    {
      number: "01",
      title: {
        it: "Strategia Creativa",
        es: "Estrategia Creativa",
      } as BilingualText,
      description: {
        it: "Analizzo il tuo brand, il mercato e il pubblico per creare una strategia di comunicazione su misura che ti differenzi.",
        es: "Analizo tu marca, el mercado y la audiencia para crear una estrategia de comunicación a medida que te diferencie.",
      } as BilingualText,
      items: {
        it: ["Brand audit", "Piano editoriale", "Posizionamento", "Tone of voice"],
        es: ["Auditoría de marca", "Plan editorial", "Posicionamiento", "Tono de voz"],
      },
    },
    {
      number: "02",
      title: {
        it: "UGC Content",
        es: "Contenido UGC",
      } as BilingualText,
      description: {
        it: "Creo contenuti autentici che parlano al tuo pubblico. Video, foto e storie che generano fiducia e conversioni.",
        es: "Creo contenido auténtico que habla a tu público. Videos, fotos e historias que generan confianza y conversiones.",
      } as BilingualText,
      items: {
        it: ["Video UGC", "Storytelling visivo", "Contenuti social", "Reels & TikTok"],
        es: ["Video UGC", "Storytelling visual", "Contenido social", "Reels & TikTok"],
      },
    },
    {
      number: "03",
      title: {
        it: "Meta Ads",
        es: "Meta Ads",
      } as BilingualText,
      description: {
        it: "Gestisco campagne pubblicitarie su Facebook e Instagram ottimizzate per risultati reali: lead, vendite, visibilità.",
        es: "Gestiono campañas publicitarias en Facebook e Instagram optimizadas para resultados reales: leads, ventas, visibilidad.",
      } as BilingualText,
      items: {
        it: ["Facebook Ads", "Instagram Ads", "A/B Testing", "Report & Analisi"],
        es: ["Facebook Ads", "Instagram Ads", "A/B Testing", "Reportes & Análisis"],
      },
    },
  ],

  // Methodology (4 steps)
  method: [
    {
      number: "01",
      title: { it: "Analisi", es: "Análisis" } as BilingualText,
      description: {
        it: "Studio il tuo brand, il mercato e i competitor per capire dove sei e dove vuoi arrivare.",
        es: "Estudio tu marca, el mercado y los competidores para entender dónde estás y a dónde quieres llegar.",
      } as BilingualText,
    },
    {
      number: "02",
      title: { it: "Strategia", es: "Estrategia" } as BilingualText,
      description: {
        it: "Creo un piano d'azione personalizzato con obiettivi chiari e KPI misurabili.",
        es: "Creo un plan de acción personalizado con objetivos claros y KPIs medibles.",
      } as BilingualText,
    },
    {
      number: "03",
      title: { it: "Creazione", es: "Creación" } as BilingualText,
      description: {
        it: "Produco contenuti e campagne che raccontano la tua storia in modo autentico.",
        es: "Produzco contenido y campañas que cuentan tu historia de forma auténtica.",
      } as BilingualText,
    },
    {
      number: "04",
      title: { it: "Ottimizzazione", es: "Optimización" } as BilingualText,
      description: {
        it: "Monitoro i risultati e ottimizzo continuamente per massimizzare il ritorno.",
        es: "Monitoreo los resultados y optimizo continuamente para maximizar el retorno.",
      } as BilingualText,
    },
  ],

  // Portfolio placeholder
  portfolio: {
    comingSoon: {
      it: "Sto lavorando sui miei primi casi di studio. Torna presto per vedere i risultati!",
      es: "Estoy trabajando en mis primeros casos de estudio. ¡Vuelve pronto para ver los resultados!",
    } as BilingualText,
  },

  // CTA
  cta: {
    title: {
      it: "Parliamo del tuo prossimo progetto",
      es: "Hablemos de tu próximo proyecto",
    } as BilingualText,
    description: {
      it: "Che tu abbia bisogno di una strategia, contenuti o campagne ads — sono qui per aiutarti a crescere.",
      es: "Ya sea que necesites una estrategia, contenido o campañas de ads — estoy aquí para ayudarte a crecer.",
    } as BilingualText,
    buttonText: {
      it: "Scrivimi",
      es: "Escríbeme",
    } as BilingualText,
  },

  // Social links
  social: {
    email: "Drusilamiranda.creator@gmail.com",
    instagram: "https://instagram.com/drusilla_miranda",
    tiktok: "https://tiktok.com/@pameladlcm",
    linktree: "https://linktr.ee/DrusilaMiranda",
    whatsapp: "https://wa.me/393898853199",
  },
};
