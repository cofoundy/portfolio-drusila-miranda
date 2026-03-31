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

  // 6 services from client brief
  services: [
    {
      number: "01",
      emoji: "🎯",
      title: { it: "Strategia Creativa", es: "Estrategia Creativa" } as BilingualText,
      description: {
        it: "Definisco la base del marketing del brand: angoli, messaggi e direzione strategica.",
        es: "Defino la base estratégica del negocio.",
      } as BilingualText,
      items: {
        it: ["Analisi brand", "Studio audience", "Identificazione desiderio", "Angolo strategico"],
        es: ["Análisis de marca", "Audiencia", "Deseo", "Ángulo estratégico"],
      },
      duration: { it: "3–5 giorni", es: "3–5 días" } as BilingualText,
      deliverables: {
        it: ["Documento strategico", "Direzione contenuti"],
        es: ["Documento estratégico", "Dirección de contenidos"],
      },
    },
    {
      number: "02",
      emoji: "📱",
      title: { it: "Sistema di Contenuti (30 giorni)", es: "Sistema de Contenidos (30 días)" } as BilingualText,
      description: {
        it: "Creo contenuti pensati per convertire, non per pubblicare.",
        es: "Creo contenido para convertir, no para publicar.",
      } as BilingualText,
      items: {
        it: ["15–30 hook", "Script", "Idee video", "Calendario"],
        es: ["15–30 hooks", "Guiones", "Ideas de video", "Calendario"],
      },
      duration: { it: "5–7 giorni", es: "5–7 días" } as BilingualText,
      deliverables: {
        it: ["Contenuti per 30 giorni", "Struttura video"],
        es: ["Contenido para 30 días", "Estructura de video"],
      },
    },
    {
      number: "03",
      emoji: "🧪",
      highlight: true,
      title: { it: "Test Creatività & Ottimizzazione", es: "Test de Creatividades & Optimización" } as BilingualText,
      description: {
        it: "Testo diverse creatività per identificare cosa funziona.",
        es: "Testeo creatividades para encontrar lo que funciona.",
      } as BilingualText,
      items: {
        it: ["Test di angoli", "Test hook", "Analisi dati", "Ottimizzazione"],
        es: ["Test de ángulos", "Test de hooks", "Análisis de datos", "Optimización"],
      },
      duration: { it: "2–4 settimane", es: "2–4 semanas" } as BilingualText,
      deliverables: {
        it: ["Contenuti vincenti", "Miglioramento performance"],
        es: ["Contenido ganador", "Mejora de rendimiento"],
      },
    },
    {
      number: "04",
      emoji: "📊",
      title: { it: "Meta Ads (Performance)", es: "Meta Ads (Performance)" } as BilingualText,
      description: {
        it: "Gestisco campagne per trasformare contenuti in risultati.",
        es: "Gestión de campañas enfocadas en resultados.",
      } as BilingualText,
      items: {
        it: ["Setup campagne", "Test", "Scaling"],
        es: ["Setup de campañas", "Testing", "Scaling"],
      },
      duration: { it: "Continuo (min. 30 giorni)", es: "Continuo (mín. 30 días)" } as BilingualText,
      deliverables: {
        it: ["Campagne ottimizzate", "Report risultati"],
        es: ["Campañas optimizadas", "Reporte de resultados"],
      },
    },
    {
      number: "05",
      emoji: "💬",
      highlight: true,
      title: { it: "Sistema di Conversione WhatsApp", es: "Sistema de Conversión WhatsApp" } as BilingualText,
      description: {
        it: "Trasformo l'interesse in conversazioni reali su WhatsApp.",
        es: "Convierto interés en conversaciones reales en WhatsApp.",
      } as BilingualText,
      items: {
        it: ["Strategia ingresso", "Retargeting", "Ottimizzazione"],
        es: ["Estrategia de ingreso", "Retargeting", "Optimización"],
      },
      duration: { it: "2–4 settimane", es: "2–4 semanas" } as BilingualText,
      deliverables: {
        it: ["Contatti reali", "Conversazioni"],
        es: ["Contactos reales", "Conversaciones"],
      },
    },
    {
      number: "06",
      emoji: "⚡",
      premium: true,
      title: { it: "Sistema Completo (30 giorni)", es: "Sistema Completo (30 días)" } as BilingualText,
      description: {
        it: "Strategia + contenuti + ads + conversione WhatsApp. Sistema completo per generare clienti.",
        es: "Estrategia + contenido + ads + conversión WhatsApp. Sistema completo para generar clientes.",
      } as BilingualText,
      items: {
        it: ["Tutto incluso", "Strategia a risultato", "Sistema end-to-end"],
        es: ["Todo incluido", "Estrategia orientada a resultados", "Sistema end-to-end"],
      },
      duration: { it: "30 giorni", es: "30 días" } as BilingualText,
      deliverables: {
        it: ["Sistema completo", "Clienti generati"],
        es: ["Sistema completo", "Clientes generados"],
      },
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
