type BilingualText = { it: string; es: string };

export const siteConfig = {
  name: "Drusila Miranda",
  title: "Performance Marketing Strategist & Meta Ads Specialist",
  defaultLang: "it" as "it" | "es",

  description: {
    it: "Drusila Miranda — Strategia creativa, contenuti e Meta Ads per trasformare attenzione in conversazioni e vendite.",
    es: "Drusila Miranda — Estrategia creativa, contenido y Meta Ads para convertir atención en conversaciones y ventas.",
  } as BilingualText,

  // All-black theme: bg negro, texto blanco, amarillo pastel como acento
  accentColor: "#F2D675",
  colors: {
    primaryDark: "#000000",
    primary: "#F5F5F5",
    primaryLight: "#A8A8A8",
    accent: "#F2D675",
    surface: "#0A0A0A",
    surfaceLight: "#111111",
  },

  tagline: {
    it: "Trasformo business e servizi in sistemi di marketing che attraggono, convertono e scalano.",
    es: "Transformo negocios y servicios en sistemas de marketing que atraen, convierten y escalan.",
  } as BilingualText,

  positioning: {
    it: "Strategia. Contenuto. Pubblicità. Tutto allineato per generare vendite reali.",
    es: "Estrategia. Contenido. Publicidad. Todo alineado para generar ventas reales.",
  } as BilingualText,

  // Chi Sono
  about: {
    it: "Sono Drusila Miranda, stratega di marketing creativo specializzata in contenuti e advertising digitale. Analizzo il comportamento del cliente e lo trasformo in comunicazione che converte.",
    es: "Soy Drusila Miranda, estratega de marketing creativo especializada en contenido y publicidad digital. Analizo cómo piensa el cliente, qué desea y qué lo frena, y transformo eso en mensajes que convierten.",
  } as BilingualText,

  // Specialization section
  specialization: {
    description: {
      it: "Progetto sistemi di marketing dove contenuti + messaggio + advertising lavorano insieme per vendere.",
      es: "Diseño sistemas de marketing donde contenido + mensaje + publicidad trabajan juntos para generar ventas.",
    } as BilingualText,
    intro: {
      it: "Il mio approccio si basa su:",
      es: "Mi enfoque se basa en:",
    } as BilingualText,
    items: {
      it: [
        "Psicologia del consumatore",
        "Analisi del mercato e del desiderio",
        "Strategia creativa applicata ai contenuti",
        "Esecuzione Meta Ads orientata ai risultati",
      ],
      es: [
        "Psicología del consumidor",
        "Análisis del mercado y del deseo",
        "Estrategia creativa aplicada a contenido y anuncios",
        "Ejecución en Meta Ads orientada a resultados",
      ],
    },
    closing: {
      it: "Non lavoro con supposizioni. Lavoro con strategia e comportamento reale.",
      es: "No trabajo con suposiciones. Trabajo con estructura, datos y comportamiento real del cliente.",
    } as BilingualText,
  },

  // Competenze — 4 blocks grid
  competenceBlocks: [
    {
      icon: "🧠",
      title: { it: "Analisi & Strategia", es: "Análisis & Estrategia" } as BilingualText,
      items: {
        it: [
          "Analisi del mercato e del desiderio",
          "Analisi competitor e trend",
          "Identificazione del \u201Cmass desire\u201D",
          "Costruzione della proposta di valore",
        ],
        es: [
          "Análisis del mercado y del deseo",
          "Análisis de competencia y tendencias",
          "Identificación del \u201Cmass desire\u201D",
          "Construcción de la propuesta de valor",
        ],
      },
    },
    {
      icon: "🎯",
      title: { it: "Messaggio & Copy", es: "Mensaje & Copy" } as BilingualText,
      items: {
        it: [
          "Sviluppo degli angoli di vendita",
          "Copywriting orientato alla vendita",
          "Struttura dei messaggi",
          "Eliminazione delle obiezioni",
        ],
        es: [
          "Desarrollo de ángulos de venta",
          "Copywriting orientado a la conversión",
          "Estructura de mensajes",
          "Eliminación de objeciones",
        ],
      },
    },
    {
      icon: "🎥",
      title: { it: "Contenuti & Creatività", es: "Contenido & Creatividad" } as BilingualText,
      items: {
        it: [
          "Creazione di hook ad alto impatto",
          "Script strategici per contenuti e ads",
          "Strategia di contenuto (Criterio / Vincolo / Autorità)",
          "Direzione creativa video",
        ],
        es: [
          "Creación de hooks de alto impacto",
          "Guiones estratégicos para contenido y ads",
          "Estrategia de contenido (Criterio / Vínculo / Autoridad)",
          "Dirección creativa para video",
        ],
      },
    },
    {
      icon: "🚀",
      title: { it: "Ads & Performance", es: "Ads & Performance" } as BilingualText,
      items: {
        it: [
          "Struttura e gestione campagne Meta Ads",
          "Testing creativo (hook, formati, messaggi)",
          "Ottimizzazione della conversione",
          "Scalabilità delle campagne",
        ],
        es: [
          "Estructura y gestión de campañas Meta Ads",
          "Testing creativo (hooks, formatos, mensajes)",
          "Optimización de conversión",
          "Escalado de campañas",
        ],
      },
    },
  ],

  // Featured system + 3 individual services
  sistemaCompleto: {
    title: { it: "Sistema Completo", es: "Sistema Completo" } as BilingualText,
    badge: { it: "Consigliato", es: "Recomendado" } as BilingualText,
    description: {
      it: "Sistema integrato di acquisizione clienti attraverso contenuti e pubblicità. Progettato per business che vogliono smettere di improvvisare e iniziare a vendere con una struttura chiara.",
      es: "Sistema integral de adquisición de clientes a través de contenido y publicidad. Diseñado para negocios que quieren dejar de improvisar y empezar a vender con estrategia.",
    } as BilingualText,
    items: {
      it: [
        "Analisi strategica del business e del mercato",
        "Identificazione del cliente ideale (desideri, problemi, obiezioni)",
        "Sviluppo del messaggio e degli angoli di vendita",
        "Creazione di 15 script strategici pronti per contenuti e ads",
        "Creazione del video strategico per la campagna",
        "Struttura e configurazione campagne Meta Ads",
        "Testing iniziale e ottimizzazione",
      ],
      es: [
        "Análisis estratégico del negocio y del mercado",
        "Identificación del cliente ideal (deseos, problemas, objeciones)",
        "Desarrollo del mensaje y ángulos de venta",
        "Creación de 15 guiones estratégicos (contenido + ads)",
        "Creación del video estratégico para campaña",
        "Estructura y configuración de campañas Meta Ads",
        "Testeo inicial y optimización",
      ],
    },
    objective: {
      it: "Creare un sistema completo che attragga, converta e generi vendite",
      es: "Crear un sistema que atraiga, convierta y genere ventas",
    } as BilingualText,
  },

  services: [
    {
      number: "01",
      emoji: "🎯",
      title: { it: "Analisi Strategica del Business", es: "Análisis Estratégico del Negocio" } as BilingualText,
      description: {
        it: "Analisi completa basata su comportamento reale del cliente.",
        es: "Evaluación completa basada en comportamiento del cliente.",
      } as BilingualText,
      items: {
        it: ["Posizionamento", "Comunicazione", "Cliente ideale", "Problemi di vendita", "Opportunità di crescita"],
        es: ["Posicionamiento", "Comunicación", "Cliente ideal", "Problemas en ventas", "Oportunidades de mejora"],
      },
      result: {
        it: "Direzione strategica chiara",
        es: "Claridad y dirección estratégica",
      } as BilingualText,
    },
    {
      number: "02",
      emoji: "🎬",
      title: { it: "Script Strategici per Contenuti & Ads", es: "Guiones Estratégicos para Contenido & Ads" } as BilingualText,
      subtitle: { it: "15 video", es: "15 videos" } as BilingualText,
      description: {
        it: "Creazione di 15 script pronti, basati su ricerca del mercato.",
        es: "Creación de 15 guiones listos para grabar.",
      } as BilingualText,
      items: {
        it: ["Ricerca del mercato", "Angoli di vendita", "Hook ad alto impatto", "Struttura persuasiva", "Formati UGC, storytelling, problema-soluzione"],
        es: ["Investigación del cliente", "Ángulos de venta", "Hooks de alto impacto", "Estructura persuasiva", "Formatos UGC, storytelling, problema-solución"],
      },
      result: {
        it: "Contenuti che attirano e convertono",
        es: "Contenido que convierte",
      } as BilingualText,
    },
    {
      number: "03",
      emoji: "📊",
      title: { it: "Campagne Meta Ads + Video Strategico", es: "Campañas Meta Ads + Video Estratégico" } as BilingualText,
      description: {
        it: "Creazione e lancio campagne pubblicitarie.",
        es: "Creación y lanzamiento de campañas.",
      } as BilingualText,
      items: {
        it: ["Video strategico per ads", "Struttura campagna", "Messaggio allineato al mercato", "Setup Meta Ads", "Testing iniziale"],
        es: ["Video estratégico", "Estructura de campaña", "Mensaje alineado al mercado", "Configuración en Meta Ads", "Testeo inicial"],
      },
      result: {
        it: "Generare clienti reali",
        es: "Generar clientes reales",
      } as BilingualText,
    },
  ],

  // 4-step methodology
  method: [
    {
      number: "01",
      title: { it: "Presentazione", es: "Presentación" } as BilingualText,
      description: {
        it: "Hook e messaggi che catturano attenzione.",
        es: "Captar atención con hooks y mensajes alineados al deseo del mercado.",
      } as BilingualText,
    },
    {
      number: "02",
      title: { it: "Valutazione", es: "Evaluación" } as BilingualText,
      description: {
        it: "Contenuti strategici che educano e posizionano.",
        es: "El cliente analiza, compara y entiende el valor a través del contenido estratégico.",
      } as BilingualText,
    },
    {
      number: "03",
      title: { it: "Conversione", es: "Conversión" } as BilingualText,
      description: {
        it: "Riduzione delle obiezioni e aumento della fiducia.",
        es: "Se eliminan objeciones y se construye confianza para facilitar la compra.",
      } as BilingualText,
    },
    {
      number: "04",
      title: { it: "Fidelizzazione e Scaling", es: "Fidelización y Escala" } as BilingualText,
      description: {
        it: "Fidelizzazione e aumento del valore del cliente.",
        es: "Se aumenta el valor del cliente mediante continuidad, recompra y fidelización.",
      } as BilingualText,
    },
  ],
  methodClosing: {
    it: "Questo sistema connette contenuti + pubblicità + vendite in un unico flusso.",
    es: "Este sistema conecta contenido + publicidad + ventas en un solo flujo.",
  } as BilingualText,

  // Portfolio — Adoro Florencia case
  caseStudies: [
    {
      slug: "adoro-florencia",
      name: "Adoro Florencia",
      tagline: {
        it: "B&B boutique nel cuore di Firenze",
        es: "B&B boutique en el corazón de Florencia",
      } as BilingualText,
      location: "Firenze, Italia",
      status: "in-progress",
      logo: "/bnb/adoro-florencia-logo.jpg",
      images: ["/bnb/1.jpg", "/bnb/2.jpg", "/bnb/3.jpg"],
      description: {
        it: "Progetto in corso. Strategia di contenuti + advertising per un B&B a Firenze. Risultati in aggiornamento.",
        es: "Proyecto en curso. Estrategia de contenido + publicidad para un B&B en Florencia. Resultados en actualización.",
      } as BilingualText,
    },
  ],

  portfolio: {
    comingSoon: {
      it: "I miei primi progetti sono in corso. Vuoi essere il prossimo?",
      es: "Mis primeros proyectos están en curso. ¿Quieres ser el próximo?",
    } as BilingualText,
  },

  cta: {
    title: {
      it: "Analizziamo il tuo business",
      es: "Analicemos tu negocio",
    } as BilingualText,
    description: {
      it: "Che tu abbia bisogno di strategia, contenuti, ads o un sistema completo — sono qui per generare risultati.",
      es: "Ya sea que necesites estrategia, contenido, ads o un sistema completo — estoy aquí para generar resultados.",
    } as BilingualText,
    buttonText: {
      it: "Parliamo",
      es: "Hablemos",
    } as BilingualText,
  },

  social: {
    email: "drusilamiranda.creator@gmail.com",
    instagram: "https://instagram.com/drusila.miranda",
    tiktok: "https://tiktok.com/@xica.bella",
    whatsapp: "https://wa.me/393898853199",
  },
};
