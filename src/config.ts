type BilingualText = { it: string; es: string };

export const siteConfig = {
  name: "Drusila Miranda",
  title: "Creative Marketing Strategist & Meta Ads Specialist",
  defaultLang: "it" as "it" | "es",

  description: {
    it: "Drusila Miranda — Strategia creativa, contenuti e Meta Ads per trasformare attenzione in conversazioni e vendite.",
    es: "Drusila Miranda — Estrategia creativa, contenido y Meta Ads para convertir atención en conversaciones y ventas.",
  } as BilingualText,

  accentColor: "#D4A853",
  colors: {
    primaryDark: "#1A1A1A",
    primary: "#8B7355",
    primaryLight: "#C4A77D",
    accent: "#D4A853",
    surface: "#F5F0E8",
    surfaceLight: "#FAF7F2",
  },

  tagline: {
    it: "Creo sistemi di contenuto e advertising che trasformano attenzione in conversazioni e vendite.",
    es: "Creo sistemas de contenido y publicidad que convierten atención en conversaciones y ventas.",
  } as BilingualText,

  // Positioning statement
  positioning: {
    it: "Lavoro con strategia, creatività e test per identificare i messaggi che generano risultati reali.",
    es: "Trabajo con estrategia, creatividad y test para encontrar lo que realmente convierte.",
  } as BilingualText,

  about: {
    it: "Sono una creative marketing strategist peruviana basata in Italia. Unisco la creatività latina con la mentalità strategica europea per creare sistemi che generano risultati reali. Non creo contenuti per pubblicare — creo contenuti per convertire.",
    es: "Soy una creative marketing strategist peruana basada en Italia. Combino la creatividad latina con la mentalidad estratégica europea para crear sistemas que generan resultados reales. No creo contenido por publicar — creo contenido para convertir.",
  } as BilingualText,

  quote: {
    it: "Non creo contenuti per pubblicare. Creo contenuti per convertire.",
    es: "No creo contenido por publicar. Creo contenido para convertir.",
  } as BilingualText,

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

  // 6-step method from client brief
  method: [
    { number: "01", title: { it: "Analisi Desiderio", es: "Análisis de Deseo" } as BilingualText },
    { number: "02", title: { it: "Strategia Creativa", es: "Estrategia Creativa" } as BilingualText },
    { number: "03", title: { it: "Sviluppo Contenuti", es: "Desarrollo de Contenidos" } as BilingualText },
    { number: "04", title: { it: "Test Creatività", es: "Test de Creatividades" } as BilingualText },
    { number: "05", title: { it: "Ads", es: "Ads" } as BilingualText },
    { number: "06", title: { it: "Conversione WhatsApp", es: "Conversión WhatsApp" } as BilingualText },
  ],

  portfolio: {
    comingSoon: {
      it: "I miei primi progetti sono in corso. Vuoi essere il prossimo?",
      es: "Mis primeros proyectos están en curso. ¿Quieres ser el próximo?",
    } as BilingualText,
  },

  cta: {
    title: {
      it: "Analizziamo il tuo brand",
      es: "Analizamos tu marca",
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
    email: "Drusilamiranda.creator@gmail.com",
    instagram: "https://instagram.com/drusilla_miranda",
    tiktok: "https://tiktok.com/@pameladlcm",
    linktree: "https://linktr.ee/DrusilaMiranda",
    whatsapp: "https://wa.me/393898853199",
  },
};
