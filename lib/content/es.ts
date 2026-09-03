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
    line: "GO + BE. Always in motion",
    hint: "desliza",
    creditLabel: ["COVER", "ISSUE 01", "PRÓXIMAMENTE", "2027"],
  },
  home: {
    eyebrow: "Quiénes somos",
    heading: "Organized Chaos.",
    lede: "Somos un estudio boutique de diseño que conecta cultura, estrategia y sistemas digitales para construir identidades a medida y lenguajes visuales con estructura, pensamiento crítico y espacio para la imperfección humana. Trabajamos desde el Antimarketing, con el tiempo y el criterio que cada proyecto necesita.",
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
        slug: "sigesa",
        description:
          "Branding completo: piezas gráficas, web, brand guidelines, logo y aplicaciones, plantillas de Word y PowerPoint.",
        treatment: "Galería de aplicaciones, scroll horizontal corto, cero texto de proceso.",
        image: "/images/work-sigesa.png",
        imageAlt: "Logotipo de Sigesa",
        tags: ["Branding", "Graphic Design"],
        links: [{ label: "Centro de marca", href: "/sigesa/centro-de-marca/index.html" }],
      },
      {
        idx: "02",
        stamp: "Digital",
        title: "Sigesa Formación",
        slug: "sigesa-formacion",
        description:
          "Después de varios años trabajando con Sigesa, detectamos una necesidad: ¿cómo aliviar la carga de soporte técnico? Desarrollamos su propio portal de formación — grabación de vídeos, elaboración de cursos, tests — para que los usuarios pudieran resolver dudas sin depender siempre de soporte.",
        treatment: "Un portal de formación propio para que el soporte técnico dejara de ser un cuello de botella.",
        image: "/images/work-sigesa-formacion.png",
        imageAlt: "Logotipo de Sigesa Formación sobre fondo azul",
        tags: ["Digital", "Web", "Better processes"],
        links: [{ label: "formacion2.sigesa.com", href: "https://formacion2.sigesa.com/" }],
      },
      {
        idx: "03",
        stamp: "Branding",
        title: "Sploro",
        slug: "sploro",
        description:
          "Rebranding de Sploro: unificación de la marca principal y sus submarcas bajo un mismo sistema visual, con aplicaciones, plantillas y brand guidelines.",
        treatment: "Una marca y varias submarcas, hablando por fin el mismo idioma visual.",
        image: "/images/work-sploro.gif",
        imageAlt: "Logotipo animado de Sploro",
        tags: ["Branding", "Graphic Design"],
      },
      {
        idx: "04",
        stamp: "Graphic Design",
        title: "Sploro Book",
        slug: "sploro-book",
        description:
          "Diseño editorial para Sploro: ilustración, infografías y artes finales listos para impresión.",
        treatment: "De la idea al mercado, contado en papel.",
        image: "/images/work-sploro-book.png",
        imageAlt: "Portada del libro editorial de Sploro",
        tags: ["Graphic Design"],
      },
      {
        idx: "05",
        stamp: "Brand + Comms",
        title: "Horus ML",
        slug: "horus-ml",
        description:
          "El proyecto que mejor comunica la filosofía de Gobe: la comunicación no fabrica personalidad, la revela. Branding completo, diseño y desarrollo web, comunicación en redes, estrategia y piezas creativas, aplicaciones, plantillas y vídeos.",
        treatment: "Cita/manifiesto corto integrado en la composición + piezas de marca y comunicación.",
        image: "/images/work-horusml.gif",
        imageAlt: "Logotipo animado de Horus ML",
        tags: ["Branding", "Web", "Graphic Design"],
      },
      {
        idx: "06",
        stamp: "Apps",
        title: "Horus Hydro",
        slug: "horus-hydro",
        description:
          "Diseño de la interfaz de Horus Hydro, una app para smartwatch que monitoriza la hidratación de pacientes.",
        treatment: "Hidratación monitorizada desde la muñeca, en tiempo real.",
        image: "/images/work-horus-hydro.png",
        imageAlt: "Interfaz de Horus Hydro en un smartwatch",
        tags: ["Apps", "Digital"],
      },
      {
        idx: "07",
        stamp: "Branding + AI",
        title: "AI4Teen",
        slug: "ai4teen",
        description:
          "AI4Teen es uno de los proyectos de Horus: una herramienta de detección de la depresión en adolescentes, con identidad de marca propia.",
        treatment: "Una identidad propia para una herramienta que detecta lo que a veces cuesta ver.",
        image: "/images/work-ai4teen.png",
        imageAlt: "Logotipo de AI4Teen",
        tags: ["Branding", "AI"],
      },
      {
        idx: "08",
        stamp: "Branding + AI",
        title: "Aitheroscope",
        slug: "aitheroscope",
        description:
          "Aitheroscope, otro proyecto de Horus: detección de aterosclerosis a través de un escáner de retina, con identidad de marca propia.",
        treatment: "Un escáner de retina que detecta lo que no se ve a simple vista.",
        image: "/images/work-aitheroscope.png",
        imageAlt: "Logotipo de Aitheroscope",
        tags: ["Branding", "AI"],
      },
      {
        idx: "09",
        stamp: "Brand + Product",
        title: "Zazú Asesor Virtual",
        slug: "zazu",
        description:
          "El ejemplo perfecto de Gobe completo: marca + UX + producto digital + tecnología. Branding completo, desarrollo web, diseño de mascota en 3D, desarrollo de una plataforma privada para clientes, automatizaciones, optimización de procesos internos y estrategias conjuntas con el equipo de marketing.",
        treatment: 'Estudio de caso en dos actos: "la marca" → "la plataforma", con capturas de producto reales.',
        image: "/images/work-zazu.gif",
        imageAlt: "Zazú, Asesor Virtual — mascota robot animada",
        tags: ["Branding", "Digital", "Apps", "Better processes"],
      },
      {
        idx: "10",
        stamp: "Branding",
        title: "Movilex",
        slug: "movilex",
        description:
          "Movilex es una empresa española de gestión de residuos que necesitaba abrirse al mercado europeo. El encargo inicial era un rebranding, pero antes de tocar el logo hicimos un benchmark de marcas del sector a nivel español y europeo.\n\nEse análisis reveló un patrón: todo el sector recurre al mismo código visual — verde, hojas, naturaleza — como atajo para parecer sostenible. Es un lenguaje gastado por sobreuso, y no ayudaba a Movilex a competir en un mercado más amplio y exigente. Así que propusimos romper con él: sustituir el verde por azul, alejando la marca del greenwashing habitual del sector y acercándola a un posicionamiento más amplio y contemporáneo, coherente con su ambición de crecer fuera de España.\n\nLa propuesta no se quedó en un cambio de color — implicaba replantear cómo el sector entero se presenta a sí mismo, y fue precisamente ese enfoque el que convenció al CEO.\n\nA partir de ahí desarrollamos un sistema de marca completo: nuevo logotipo minimalista, paleta de color, iconografía y dirección de fotografía, documentado en un brandbook de 113 páginas junto con dos dossieres comerciales. El sistema se aplicó a todos los soportes reales de la operación — lonas de camiones, uniformes, fábricas, oficinas y materiales digitales — implementado junto al equipo interno de la empresa.\n\nEl trabajo de discurso y narrativa de marca lo desarrolló un especialista en branding verbal; todo el desarrollo visual, de principio a fin, fue responsabilidad propia.",
        treatment: "Todo el sector del reciclaje usa el mismo verde. Nosotras propusimos azul.",
        image: "/images/work-movilex.png",
        imageAlt: "Rótulo de Movilex en fachada industrial",
        tags: ["Branding", "Graphic Design"],
      },
      {
        idx: "11",
        stamp: "Impacto social",
        title: "Inspira STEAM",
        slug: "inspira-steam",
        description:
          "Un programa de mentoría liderado por Mari Luz Guenaga desde la Universidad de Deusto, que acerca la ciencia y la tecnología a chicas de 6º de primaria y 1º de la ESO, con mujeres profesionales de la ciencia y la tecnología como mentoras — trabajando directamente la brecha de género en STEAM. Llevamos años colaborando: rebranding completo, la web entera rehecha, un cuaderno impreso para el Día de la Niña y la Mujer en la Ciencia, y la edición de vídeos donde esas profesionales cuentan su propia experiencia. También rediseñamos la web de Galaxia, un proyecto hermano dentro del mismo universo STEAM.",
        treatment:
          "Mini caso de estudio con varios formatos a la vez (marca, web, pieza impresa, vídeo) — el arco de una colaboración de varios años.",
        image: "/images/work-inspirasteam.gif",
        imageAlt: "Logotipo animado de Inspira STEAM",
        tags: ["Branding", "Web", "Graphic Design"],
        links: [
          { label: "inspirasteam.net", href: "https://inspirasteam.net/" },
          { label: "Galaxia", href: "https://galaxia.steam.eus/es/" },
        ],
      },
      {
        idx: "12",
        stamp: "Branding + Mentoring",
        title: "Peticlín",
        slug: "peticlin",
        description:
          "Branding + mentoría: en una sesión de trabajo online de dos horas, desarrollamos una imagen de marca efectiva que comunicara sus valores, junto con un manual de marca básico para empezar a elaborar piezas de comunicación rápidamente.",
        treatment: "Una marca entera, resuelta en una sesión de dos horas.",
        image: "/images/work-peticlin.png",
        imageAlt: "Logotipo de Peticlín, un perro de globo",
        tags: ["Branding", "Mentoring"],
      },
      {
        idx: "13",
        stamp: "Branding + Mentoring",
        title: "La Ludoteca Móvil",
        slug: "la-ludoteca-movil",
        description:
          "Otro taller de elaboración de marca: qué queríamos comunicar, a quién nos dirigíamos, qué queríamos transmitir. El primer boceto del logo lo hizo uno de sus hijos — nosotras nos encargamos de vectorizarlo y aplicarlo a distintos formatos. También hicimos un taller web con WordPress para elaborar su página.",
        treatment: "El primer boceto lo dibujó un niño. Nosotras lo convertimos en una marca.",
        image: "/images/work-ludoteca-movil.png",
        imageAlt: "Logotipo de La Ludoteca Móvil",
        tags: ["Branding", "Mentoring", "Web"],
      },
      {
        idx: "14",
        stamp: "Mentoring + Web",
        title: "Alumbra",
        slug: "alumbra",
        description:
          "Taller de Shopify con Marietta Torres, directora de Alumbra, para crear su propia tienda online.",
        treatment: "Enseñarle a construir su propia tienda, en vez de construirla nosotras por ella.",
        image: "/images/work-alumbra.png",
        imageAlt: "Producto artesanal de piel de la tienda Alumbra",
        tags: ["Web", "Digital", "Mentoring"],
        links: [{ label: "alumbrastore.com", href: "https://alumbrastore.com/" }],
      },
    ],
  },
  experiments: {
    eyebrow: "Antes de nada",
    heading: "Lo que Gobe construye",
    lede: "Vimos flujos rotos, trámites que dan pereza, aprendizaje que no se adapta a nadie. Usamos el diseño para arreglarlo.",
    items: [
      {
        idx: "E1",
        stamp: "Producto propio",
        title: "Menta",
        slug: "menta",
        description:
          "María empezó Gobe y un doctorado en Humanidades y Comunicación en la Universidad de Burgos casi al mismo tiempo, sin planearlo así. Las dos cosas acabaron cruzándose: necesitaba una forma de evaluar de verdad si alguien estaba aprendiendo en un entorno online, y esa pregunta de investigación se convirtió en Menta.\n\nDespués de años trabajando con empresas y centros educativos, vimos el mismo problema una y otra vez: itinerarios de prácticas gestionados a golpe de hoja de cálculo, correos perdidos, seguimiento que nadie hacía bien. Menta centraliza todo eso — itinerarios, seguimiento, evaluación — y usa IA para adaptarse a cada persona en vez de tratar a todos igual.\n\nNo es solo una herramienta de gestión. Las prácticas y la formación son, para muchos estudiantes, la primera puerta real al mercado laboral — y cuando ese proceso está mal gestionado, quien pierde es la persona, no la empresa. Menta busca que esa puerta se abra mejor: menos carga administrativa para tutores y responsables de formación, más tiempo real de acompañamiento para quien está aprendiendo.\n\nYa está en producción y disponible. By Gobe, por nadie más.",
        treatment: "Las prácticas no tenían por qué ser un lío de Excel y correos sueltos.",
        image: "/images/work-menta.png",
        imageAlt: "Pantalla de acceso de Menta",
        tags: ["Digital", "Apps", "AI", "Better processes"],
        links: [{ label: "Ir a Menta", href: "https://www.menta-gobe.com/" }],
      },
      {
        idx: "E2",
        stamp: "Experimento IA",
        title: "GPT de Hacienda",
        slug: "gpt-de-hacienda",
        description:
          "María, quien lidera Gobe, se cansó de perder horas descifrando cartas de la Agencia Tributaria que nadie entiende a la primera. Construyó un GPT gratuito que traduce esa jerga a español normal, y lo contó en LinkedIn.\n\nEn días, más de 25.000 personas ya lo usaban, y varios medios se hicieron eco solos, sin que lo pidiéramos. Luego llegó una llamada de Telefónica, en nombre de la Agencia Tributaria, pidiendo que lo retiráramos. Lo adaptamos sin perder lo esencial: sigue siendo gratis, y nunca buscamos venderlo a nadie.",
        treatment: "Nos pidieron que lo quitáramos, no Hacienda — Telefónica, en su nombre.",
        image: "/images/work-gpt-hacienda.png",
        imageAlt: "Ficha del GPT Asesor Virtual en Agencia Tributaria Española",
        tags: ["AI", "Digital", "Better processes"],
        links: [
          {
            label: "Abrir el GPT",
            href: "https://chatgpt.com/g/g-84fADpCol-asesor-virtual-en-agencia-tributaria-espanola",
          },
          {
            label: "Entrevista en YouTube",
            href: "https://www.youtube.com/watch?v=zQ0C4xb_jtg",
          },
        ],
        press: [
          {
            label: "El Confidencial",
            href: "https://www.elconfidencial.com/tecnologia/2024-11-15/historia-maria-disenadora-chatbot-openai-renta_4002345/",
          },
          {
            label: "Genbeta",
            href: "https://www.genbeta.com/inteligencia-artificial/disenadora-creo-chatgpt-hacienda-ahora-agencia-tributaria-le-ha-solicitado-que-elimine",
          },
          {
            label: "Pymes y Autónomos",
            href: "https://www.pymesyautonomos.com/fiscalidad-y-contabilidad/crean-agente-chatgpt-especialista-aeat-hacienda-obliga-a-cerrarlo-a-pocas-horas",
          },
          {
            label: "El Economista",
            href: "https://www.eleconomista.es/tecnologia/noticias/13299629/04/25/crean-un-chatgpt-capaz-de-responder-a-cualquier-duda-sobre-la-agencia-tributaria-es-gratis-y-funciona-las-24-horas.html",
          },
          {
            label: "Xataka Móvil",
            href: "https://www.xatakamovil.com/movil-y-sociedad/usuario-creo-chatgpt-hacienda-agencia-tributaria-pide-elimine-todavia-puedes-usarlo-tu-movil-asi-facil",
          },
        ],
      },
    ],
  },
  studio: {
    eyebrow: "Studio",
    heading: "Tres personas, no un organigrama",
    lede: "Somos un equipo experto que mantiene una comunicación directa con nuestros clientes. No solo pensamos el proyecto, también lo diseñamos.",
    team: [
      {
        name: "María González",
        role: "Founder — Digital & UX",
        bio: "Un unicornio: domina cualquier herramienta de diseño [vectorial, 3D, código] y se implica hasta el final. Gobe, Menta y el GPT de Hacienda nacieron de su cabeza, los pensó, los construyó, los llevó hasta que existieron. No le teme a la incertidumbre. Donde hay un problema, encuentra la salida.",
        linkedin: "https://www.linkedin.com/in/mariagonzalezdebenito/",
        photo: "/images/team-maria.jpg",
      },
      {
        name: "Elena González",
        role: "Project Manager — USA",
        bio: "La manager de las managers. Organiza, resuelve, crea, y aporta orden a nuestro caos. Ha diseñado campañas para grandes marcas y llevado startups hasta aceleradoras internacionales. Tiene el pulso de la cultura visual actual y lidera equipos en USA con ese mismo instinto: firme cuando toca, cercana siempre.",
        linkedin: "https://www.linkedin.com/in/elena-gonci/",
        photo: "/images/team-elena.jpg",
      },
      {
        name: "Antígona Corral",
        role: "Art & Visual Concepts",
        bio: "Arte y conceptualización. La que mira dos veces antes de dibujar. Dirigió la imagen de marca de una gran empresa, y hoy aplica esa misma mirada en Gobe. Encuentra el porqué detrás de cada trazo, y el toque que hace irrepetible cada proyecto.",
        linkedin: "https://www.linkedin.com/in/antigonacg/",
        photo: "/images/team-antigona.jpg",
      },
    ],
  },
  talk: {
    eyebrow: "Talk",
    heading: "Contacto sin fricción",
    lede: "Si tienes una idea o proyecto, estamos aquí:",
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
    privacyLabel: "Privacidad",
  },
  legal: {
    privacy: {
      title: "Política de Privacidad",
      updated: "Última actualización: septiembre de 2026",
      intro:
        "Esta página resume cómo tratamos los datos personales en relación con este sitio web y con el contacto directo con Gobe. Es un resumen en lenguaje sencillo de nuestra Política de Protección de Datos y Seguridad interna, auditada externamente; no sustituye asesoramiento legal.",
      sections: [
        {
          heading: "Responsable del tratamiento",
          body: "GOBE SOLUCIONES Y CONSULTORÍA, S.L. — NIF B72509169, con domicilio en Avenida de Burgos nº 26, 20036 Madrid. Representante legal: María González de Benito.",
        },
        {
          heading: "Delegado de Protección de Datos",
          body: "De acuerdo con el artículo 37.1 del RGPD y el artículo 34.1 de la LOPDGDD, Gobe no está obligada a designar un Delegado de Protección de Datos y no lo ha designado. Para cualquier consulta sobre privacidad, puedes escribirnos a info@gobesoluciones.com.",
        },
        {
          heading: "Qué datos tratamos y con qué finalidad",
          body: "Esta web no incluye formularios que recojan datos personales. Cuando te pones en contacto con nosotros por correo electrónico o redes sociales, tratamos únicamente los datos que tú mismo nos facilitas (por ejemplo, nombre y correo electrónico) con la finalidad de gestionar tu solicitud y responderte.",
        },
        {
          heading: "Legitimación",
          body: "La base legal es la ejecución de medidas precontractuales a tu solicitud (cuando nos escribes por un posible proyecto o colaboración) y, en su caso, el cumplimiento de obligaciones legales aplicables a la gestión administrativa, fiscal y contable de la actividad.",
        },
        {
          heading: "Conservación",
          body: "Conservamos los datos durante el tiempo necesario para atender tu solicitud y, cuando corresponda, durante los plazos exigidos por la normativa fiscal y mercantil aplicable.",
        },
        {
          heading: "Destinatarios",
          body: "No cedemos tus datos a terceros, salvo obligación legal.",
        },
        {
          heading: "Tus derechos",
          body: "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a info@gobesoluciones.com. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que el tratamiento no se ajusta a la normativa.",
        },
        {
          heading: "Cookies",
          body: "Esta web no utiliza cookies de analítica, publicidad ni seguimiento de la navegación.",
        },
      ],
    },
  },
};
