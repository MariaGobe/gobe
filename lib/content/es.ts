import type { SiteContent } from "./types";

export const es: SiteContent = {
  locale: "es",
  meta: {
    title: "Gobe — Estudio de diseño creativo",
    description:
      "Gobe es un estudio boutique de diseño que trabaja en la intersección entre cultura, estrategia y sistemas digitales.",
  },
  nav: {
    logo: "GOBE",
    work: "Work",
    studio: "Studio",
    talk: "Talk",
    switchTo: { label: "EN", href: "/en" },
  },
  cover: {
    kicker: "GOBE",
    line: "Enter if you're curious.",
    hint: "desliza",
    creditLabel: ["COVER", "ISSUE 01", "PRÓXIMAMENTE", "2027"],
  },
  home: {
    eyebrow: "Quiénes somos",
    heading: "Estructura, pensamiento crítico y sensibilidad.",
    lede: "Gobe es un estudio boutique de diseño que trabaja en la intersección entre cultura, estrategia y sistemas digitales. Construimos identidades y sistemas visuales con estructura, pensamiento crítico y sensibilidad. No trabajamos desde el marketing agresivo. No vendemos estética vacía. Diseñamos sistemas que se pueden sostener en el tiempo.",
    capabilities: [
      "Branding",
      "Digital",
      "Graphic Design",
      "Web",
      "Apps",
      "AI",
      "Mentoring",
      "Better processes.",
    ],
  },
  work: {
    eyebrow: "Selected Work",
    heading: "Un tratamiento distinto para cada proyecto",
    lede: "Ningún proyecto usa exactamente la misma plantilla. El tipo de trabajo que hicimos dicta cómo se presenta.",
    items: [
      {
        idx: "01",
        stamp: "Branding",
        title: "Sigesa",
        description:
          'Presentación puramente visual: logotipo, sistema de color clínico-corporativo, aplicaciones. Sin storytelling largo — dejamos que la identidad hable sola, en formato casi de "hoja de estilo" a pantalla completa.',
        treatment: "Galería de aplicaciones, scroll horizontal corto, cero texto de proceso.",
        image: "/images/work-sigesa.png",
        imageAlt: "Logotipo de Sigesa sobre fondo azul",
      },
      {
        idx: "02",
        stamp: "Brand + Product",
        title: "Zazú",
        description:
          "El ejemplo perfecto de Gobe completo: marca + UX + producto digital + tecnología. Merece el formato más largo del portfolio — de la identidad a las pantallas reales de la plataforma privada de clientes.",
        treatment: 'Estudio de caso en dos actos: "la marca" → "la plataforma", con capturas de producto reales.',
        image: "/images/work-zazu.png",
        imageAlt: "Zazú, Asesor Virtual — logotipo y mascota robot",
      },
      {
        idx: "03",
        stamp: "Brand + Comms",
        title: "Horus ML",
        description:
          "El proyecto que mejor comunica la filosofía de Gobe: la comunicación no fabrica personalidad, la revela. Se presenta con más texto que el resto.",
        treatment: "Cita/manifiesto corto integrado en la composición + piezas de marca y comunicación.",
        image: "/images/work-horusml.png",
        imageAlt: "Logotipo de Horus.ml sobre fondo azul oscuro degradado",
      },
      {
        idx: "04",
        stamp: "Impacto social",
        title: "Inspira STEAM",
        description:
          "Un programa de mentoría liderado por Mari Luz Guenaga desde la Universidad de Deusto, que acerca la ciencia y la tecnología a chicas de 6º de primaria y 1º de la ESO, con mujeres profesionales de la ciencia y la tecnología como mentoras — trabajando directamente la brecha de género en STEAM. Llevamos años colaborando: rebranding completo, la web entera rehecha, un cuaderno impreso para el Día de la Niña y la Mujer en la Ciencia, y la edición de vídeos donde esas profesionales cuentan su propia experiencia. También rediseñamos la web de Galaxia, un proyecto hermano dentro del mismo universo STEAM.",
        treatment:
          "Mini caso de estudio con varios formatos a la vez (marca, web, pieza impresa, vídeo) — el arco de una colaboración de varios años.",
        image: "/images/work-inspirasteam.png",
        imageAlt: "Página de inicio de Inspira STEAM",
      },
      {
        idx: "05",
        stamp: "Rebranding",
        title: "Movilex",
        description:
          "Rebranding industrial con propósito real (economía circular, reciclaje WEEE). Tono más serio y directo dentro del portfolio.",
        treatment: "Foco en el sistema de marca aplicado a entornos industriales/técnicos.",
        image: "/images/work-movilex.jpg",
        imageAlt: "Rótulo de Movilex en fachada industrial",
      },
    ],
  },
  experiments: {
    eyebrow: "Experiments / Own Projects",
    heading: "Lo que Gobe construye por iniciativa propia",
    lede: 'Zona deliberadamente distinta al Selected Work: más cruda, más de laboratorio. El mensaje implícito es "esto no nos lo encargó nadie".',
    items: [
      {
        idx: "E1",
        stamp: "Producto propio",
        title: "Menta",
        description:
          'Educación + UX + personalización + IA. Plataforma propia de Gobe para itinerarios de aprendizaje y prácticas personalizadas. Etiquetada explícitamente como "By Gobe", nunca como cliente.',
        treatment: "Demo de producto en vivo (mockup de la interfaz real), sin logo de cliente.",
        image: "/images/work-menta.png",
        imageAlt: "Pantalla de acceso de Menta",
      },
      {
        idx: "E2",
        stamp: "Experimento IA",
        title: "GPT de Hacienda",
        description:
          "Un GPT personalizado para dudas sobre la Agencia Tributaria española, publicado en cuanto la tecnología lo permitió. Repercusión real en prensa (El Economista, Hipertextual, Applesfera, Softzone, Telecinco). Demuestra cómo Gobe usa IA para construir cosas útiles, no como buzzword.",
        treatment: "Recorte de prensa real (con enlaces) + el propio GPT embebido o enlazado.",
        image: "",
        imageAlt: "",
      },
    ],
  },
  studio: {
    eyebrow: "Studio",
    heading: "Tres personas, no un organigrama",
    lede: 'Formato de "ficha" editorial en vez de bio corporativa: retrato real en blanco y negro, rol, una frase con voz propia. Sin foto de stock.',
    team: [
      {
        name: "María González",
        role: "Founder — Digital & UX",
        bio: "Un unicornio: puede usar cualquier herramienta de diseño — vectorial, 3D, programación — y desarrollar piezas finales a toda velocidad.",
        linkedin: "https://www.linkedin.com/in/mariagonzalezdebenito/",
        photo: "/images/team-maria.jpg",
      },
      {
        name: "Elena González",
        role: "Project Manager — USA",
        bio: "La manager de las managers. Organiza, resuelve, crea. Experiencia liderando equipos, trabajando en Estados Unidos — es quien aporta orden a nuestro caos.",
        linkedin: "https://www.linkedin.com/in/elena-gonci/",
        photo: "/images/team-elena.jpg",
      },
      {
        name: "Antígona Corral",
        role: "Art & Visual Concepts",
        bio: "Arte y conceptualización. Devoradora de libros, llena de referencias artísticas — es quien aporta coherencia, referencias y el toque único a cada proyecto.",
        linkedin: "https://www.linkedin.com/in/antigonacg/",
        photo: "/images/team-antigona.jpg",
      },
    ],
  },
  talk: {
    eyebrow: "Talk",
    heading: "Contacto sin fricción",
    lede: "Un formulario de tres campos, sin CRM disfrazado de conversación. Todos los canales actuales se mantienen.",
    formLabels: { name: "Nombre", email: "Email", message: "Mensaje", send: "Enviar →" },
    formNote:
      "Un único formulario de tres campos — un proyecto, una mentoría o cualquier otra cosa entran por el mismo sitio.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/gobesoluciones/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/gobe-soluciones/" },
      { label: "TikTok", href: "https://www.tiktok.com/@gobesoluciones" },
      { label: "Facebook", href: "https://www.facebook.com/gobesoluciones" },
      { label: "Behance", href: "http://behance.net/gobe" },
      { label: "Pinterest", href: "https://pin.it/2EndtkY" },
      { label: "info@gobesoluciones.com", href: "mailto:info@gobesoluciones.com" },
    ],
  },
  footer: {
    line: "GOBE",
    meta: "GO + BE = Always in motion",
  },
};
