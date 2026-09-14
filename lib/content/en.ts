import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "Gobe — Creative design studio",
    description:
      "Gobe is a boutique design studio working at the intersection of culture, strategy and digital systems.",
  },
  nav: {
    logo: "GOBE",
    work: "Work",
    studio: "Studio",
    talk: "Talk",
    switchTo: { label: "ES", href: "/es" },
  },
  cover: {
    kicker: "GOBE",
    line: "GO + BE. Always in motion",
    hint: "scroll",
    creditLabel: ["COVER", "ISSUE 01", "COMING SOON", "2027"],
  },
  home: {
    eyebrow: "Who we are",
    heading: "Organized Chaos.",
    // NOTE: per María & Antígona's copy handoff doc, this paragraph is kept
    // identical (in Spanish) on both the ES and EN pages — only the heading
    // above is locale-fixed in English. Flagged back to María to confirm
    // this is intentional for the English page specifically.
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
    heading: "A different treatment for every project",
    lede: "No project uses exactly the same template. The kind of work we did dictates how it's presented.",
    items: [
      {
        idx: "01",
        stamp: "Branding",
        title: "Sigesa",
        slug: "sigesa",
        description:
          "Full branding: graphic collateral, website, brand guidelines, logo and applications, Word and PowerPoint templates.",
        treatment: "An applications gallery, a short horizontal scroll, zero process copy.",
        image: "/images/work-sigesa.png",
        imageAlt: "Sigesa logotype",
        tags: ["Branding", "Graphic Design"],
      },
      {
        idx: "02",
        stamp: "Digital",
        title: "Sigesa Formación",
        slug: "sigesa-formacion",
        description:
          "After years working with Sigesa, we spotted a need: how do you take the load off technical support? We built their own training portal — video recording, course creation, tests — so users could resolve doubts without always depending on support.",
        treatment: "A training portal of their own, so tech support stopped being a bottleneck.",
        image: "/images/work-sigesa-formacion.png",
        imageAlt: "Sigesa Formación logotype on a blue background",
        tags: ["Digital", "Web", "Better processes"],
        links: [{ label: "formacion2.sigesa.com", href: "https://formacion2.sigesa.com/" }],
      },
      {
        idx: "03",
        stamp: "Branding",
        title: "Sploro",
        slug: "sploro",
        description:
          "A rebrand for Sploro: unifying the main brand and its sub-brands under one visual system, with applications, templates and brand guidelines.",
        treatment: "One brand and several sub-brands, finally speaking the same visual language.",
        image: "/images/work-sploro.gif",
        imageAlt: "Animated Sploro logotype",
        tags: ["Branding", "Graphic Design"],
      },
      {
        idx: "04",
        stamp: "Graphic Design",
        title: "Sploro Book",
        slug: "sploro-book",
        description:
          "Editorial design for Sploro: illustration, infographics and print-ready final art.",
        treatment: "From idea to market, told on paper.",
        image: "/images/work-sploro-book.png",
        imageAlt: "Cover of Sploro's editorial book",
        tags: ["Graphic Design"],
      },
      {
        idx: "05",
        stamp: "Brand + Comms",
        title: "Horus ML",
        slug: "horus-ml",
        description:
          "The project that best communicates Gobe's philosophy: communication doesn't manufacture personality, it reveals it. Full branding, web design and development, social media communication, strategy and creative pieces, applications, templates and videos.",
        treatment: "A short quote/manifesto built into the layout, plus brand and communications pieces.",
        image: "/images/work-horusml.gif",
        imageAlt: "Animated Horus ML logotype",
        tags: ["Branding", "Web", "Graphic Design"],
      },
      {
        idx: "06",
        stamp: "Apps",
        title: "Horus Hydro",
        slug: "horus-hydro",
        description:
          "Interface design for Horus Hydro, a smartwatch app that monitors patients' hydration.",
        treatment: "Hydration monitored from the wrist, in real time.",
        image: "/images/work-horus-hydro.png",
        imageAlt: "Horus Hydro interface on a smartwatch",
        tags: ["Apps", "Digital"],
      },
      {
        idx: "07",
        stamp: "Branding + AI",
        title: "AI4Teen",
        slug: "ai4teen",
        description:
          "AI4Teen is one of Horus's projects: a tool for detecting depression in teenagers, with its own brand identity.",
        treatment: "A brand identity of its own for a tool that spots what's sometimes hard to see.",
        image: "/images/work-ai4teen.png",
        imageAlt: "AI4Teen logotype",
        tags: ["Branding", "AI"],
      },
      {
        idx: "08",
        stamp: "Branding + AI",
        title: "Aitheroscope",
        slug: "aitheroscope",
        description:
          "Aitheroscope, another Horus project: detecting atherosclerosis through a retinal scan, with its own brand identity.",
        treatment: "A retinal scan that detects what the naked eye can't.",
        image: "/images/work-aitheroscope.png",
        imageAlt: "Aitheroscope logotype",
        tags: ["Branding", "AI"],
      },
      {
        idx: "09",
        stamp: "Brand + Product",
        title: "Zazú Virtual Advisor",
        slug: "zazu",
        description:
          "The perfect example of full-scope Gobe: brand + UX + digital product + technology. Full branding, web development, 3D mascot design, a private client platform, automations, internal process optimisation and joint strategy with the marketing team.",
        treatment: 'A two-act case study: "the brand" → "the platform," with real product screenshots.',
        image: "/images/work-zazu.gif",
        imageAlt: "Zazú, Virtual Advisor — animated robot mascot",
        tags: ["Branding", "Digital", "Apps", "Better processes"],
      },
      {
        idx: "10",
        stamp: "Branding",
        title: "Movilex",
        slug: "movilex",
        description:
          "Movilex is a Spanish waste-management company that needed to open up to the European market. The initial brief was a rebrand, but before touching the logo we ran a benchmark of sector brands across Spain and Europe.\n\nThat analysis revealed a pattern: the entire sector reaches for the same visual code — green, leaves, nature — as a shortcut to look sustainable. It's a language worn out by overuse, and it wasn't helping Movilex compete in a wider, more demanding market. So we proposed breaking with it: replacing green with blue, moving the brand away from the sector's usual greenwashing and towards a broader, more contemporary positioning, consistent with its ambition to grow beyond Spain.\n\nThe proposal didn't stop at a colour change — it meant rethinking how the entire sector presents itself, and it was exactly that approach that convinced the CEO.\n\nFrom there we developed a complete brand system: a new minimalist logotype, colour palette, iconography and photography direction, documented in a 113-page brandbook together with two sales dossiers. The system was applied across every real touchpoint of the operation — truck livery, uniforms, factories, offices and digital materials — implemented alongside the company's in-house team.\n\nBrand voice and narrative was developed by a verbal-branding specialist; all visual development, start to finish, was our own responsibility.",
        treatment: "The entire recycling industry uses the same green. We proposed blue.",
        image: "/images/work-movilex.png",
        imageAlt: "Movilex signage on an industrial facade",
        tags: ["Branding", "Graphic Design"],
      },
      {
        idx: "11",
        stamp: "Social impact",
        title: "Inspira STEAM",
        slug: "inspira-steam",
        description:
          "A mentoring programme led by Mari Luz Guenaga from the University of Deusto, bringing science and technology closer to 6th-grade and 1st-year-secondary girls, with women science and technology professionals as mentors — directly addressing the gender gap in STEAM. We've been collaborating for years: a full rebrand, the entire website rebuilt, a printed notebook for the Day of the Girl and Woman in Science, and video editing for the professionals sharing their own experience. We also redesigned the website for Galaxia, a sibling project in the same STEAM universe.",
        treatment:
          "A mini case study spanning several formats at once (brand, web, print, video) — the arc of a multi-year collaboration.",
        image: "/images/work-inspirasteam.gif",
        imageAlt: "Animated Inspira STEAM logotype",
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
          "Branding + mentoring: in a two-hour online working session, we developed an effective brand image that communicated its values, along with a basic brand manual to start producing communication pieces quickly.",
        treatment: "A whole brand, solved in a two-hour session.",
        image: "/images/work-peticlin.png",
        imageAlt: "Peticlín logotype, a balloon dog",
        tags: ["Branding", "Mentoring"],
      },
      {
        idx: "13",
        stamp: "Branding + Mentoring",
        title: "La Ludoteca Móvil",
        slug: "la-ludoteca-movil",
        description:
          "Another brand-building workshop: what did we want to communicate, who were we speaking to, what did we want to convey. The first sketch of the logo was drawn by one of the owner's children — we vectorised it and applied it across formats. We also ran a WordPress web workshop to build their site.",
        treatment: "The first sketch was drawn by a child. We turned it into a brand.",
        image: "/images/work-ludoteca-movil.png",
        imageAlt: "La Ludoteca Móvil logotype",
        tags: ["Branding", "Mentoring", "Web"],
      },
      {
        idx: "14",
        stamp: "Mentoring + Web",
        title: "Alumbra",
        slug: "alumbra",
        description:
          "A Shopify workshop with Marietta Torres, Alumbra's director, to build her own online store.",
        treatment: "Teaching her to build her own store, instead of building it for her.",
        image: "/images/work-alumbra.png",
        imageAlt: "Handcrafted leather product from the Alumbra store",
        tags: ["Web", "Digital", "Mentoring"],
        links: [{ label: "alumbrastore.com", href: "https://alumbrastore.com/" }],
      },
    ],
  },
  experiments: {
    eyebrow: "Before Anything Else",
    heading: "What Gobe builds",
    lede: "We saw broken flows, paperwork nobody wants to deal with, learning that doesn't adapt to anyone. We use design to fix it.",
    items: [
      {
        idx: "E1",
        stamp: "Own product",
        title: "Menta",
        slug: "menta",
        description:
          "María started Gobe and a PhD in Humanities and Communication at the University of Burgos almost at the same time, without planning it that way. The two ended up crossing paths: she needed a real way to assess whether someone was actually learning in an online environment, and that research question became Menta.\n\nAfter years working with companies and schools, we kept seeing the same problem: internship tracks run on spreadsheets, lost emails, follow-up nobody did well. Menta centralises all of that — tracks, follow-up, evaluation — and uses AI to adapt to each person instead of treating everyone the same.\n\nIt's not just a management tool. Internships and training are, for many students, the first real door into the job market — and when that process is badly managed, the person loses out, not the company. Menta wants that door to open better: less admin load for tutors and training leads, more real time for supporting the person who's learning.\n\nIt's now live and available. By Gobe, by no one else.",
        treatment: "Internships didn't have to be a mess of spreadsheets and stray emails.",
        image: "/images/work-menta.png",
        imageAlt: "Menta login screen",
        tags: ["Digital", "Apps", "AI", "Better processes"],
        links: [{ label: "Open Menta", href: "https://www.menta-gobe.com/" }],
      },
      {
        idx: "E2",
        stamp: "AI experiment",
        title: "GPT de Hacienda",
        slug: "gpt-de-hacienda",
        description:
          "María, who leads Gobe, got tired of losing hours deciphering letters from the Spanish Tax Agency that nobody understands on the first read. She built a free GPT that translates that jargon into plain Spanish, and posted about it on LinkedIn.\n\nWithin days, more than 25,000 people were already using it, and several outlets picked it up on their own, unprompted. Then came a call from Telefónica, on behalf of the Tax Agency, asking her to take it down. We adapted it without losing what mattered: it's still free, and we never tried to sell it to anyone.",
        treatment: "They asked us to take it down — not the Tax Agency, Telefónica, on its behalf.",
        image: "/images/work-gpt-hacienda.png",
        imageAlt: "GPT store card for Asesor Virtual en Agencia Tributaria Española",
        tags: ["AI", "Digital", "Better processes"],
        links: [
          {
            label: "Open the GPT",
            href: "https://chatgpt.com/g/g-84fADpCol-asesor-virtual-en-agencia-tributaria-espanola",
          },
          {
            label: "YouTube interview",
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
    heading: "Three people, not an org chart",
    lede: "We're an expert team that keeps direct communication with our clients. We don't just think the project through — we design it too.",
    team: [
      {
        name: "María González",
        role: "Founder — Digital & UX",
        bio: "A unicorn: she masters any design tool [vector, 3D, code] and stays involved until the end. Gobe, Menta and the GPT de Hacienda were born in her head — she thought them up, built them, and carried them through until they existed. She isn't afraid of uncertainty. Wherever there's a problem, she finds the way out.",
        linkedin: "https://www.linkedin.com/in/mariagonzalezdebenito/",
        photo: "/images/team-maria.jpg",
      },
      {
        name: "Elena González",
        role: "Project Manager — USA",
        bio: "The manager of managers. She organises, solves, creates, and brings order to our chaos. She has designed campaigns for major brands and taken startups all the way to international accelerators. She has her finger on the pulse of today's visual culture and leads teams in the US with that same instinct: firm when it counts, approachable always.",
        linkedin: "https://www.linkedin.com/in/elena-gonci/",
        photo: "/images/team-elena.jpg",
      },
      {
        name: "Antígona Corral",
        role: "Art & Visual Concepts",
        bio: "Art and conceptualisation. The one who looks twice before drawing. She led brand image for a major company, and now brings that same eye to Gobe. She finds the why behind every stroke, and the touch that makes every project one of a kind.",
        linkedin: "https://www.linkedin.com/in/antigonacg/",
        photo: "/images/team-antigona.jpg",
      },
    ],
  },
  talk: {
    eyebrow: "Talk",
    heading: "Frictionless contact",
    lede: "If you have an idea or a project, we're here:",
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
    privacyLabel: "Privacy",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: September 2026",
      intro:
        "This page summarises how we handle personal data in relation to this website and direct contact with Gobe. It's a plain-language summary of our internal Data Protection & Security Policy, externally audited; it isn't a substitute for legal advice.",
      sections: [
        {
          heading: "Data controller",
          body: "GOBE SOLUCIONES Y CONSULTORÍA, S.L. — Spanish tax ID (NIF) B72509169, registered at Avenida de Burgos nº 26, 20036 Madrid, Spain. Legal representative: María González de Benito.",
        },
        {
          heading: "Data Protection Officer",
          body: "Under Article 37.1 GDPR and Article 34.1 of Spain's LOPDGDD, Gobe is not required to appoint a Data Protection Officer and has not appointed one. For any privacy question, you can write to us at info@gobesoluciones.com.",
        },
        {
          heading: "What we process, and why",
          body: "This website has no forms that collect personal data. When you contact us by email or social media, we process only the data you provide yourself (for example, your name and email address) to handle your request and reply to you.",
        },
        {
          heading: "Legal basis",
          body: "The legal basis is taking pre-contractual steps at your request (when you write to us about a possible project or collaboration) and, where applicable, compliance with legal obligations tied to administrative, tax and accounting management.",
        },
        {
          heading: "Retention",
          body: "We keep data for as long as needed to handle your request and, where applicable, for the periods required by tax and commercial regulations.",
        },
        {
          heading: "Recipients",
          body: "We do not share your data with third parties, except where legally required.",
        },
        {
          heading: "Your rights",
          body: "You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to info@gobesoluciones.com. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD, www.aepd.es) if you believe the processing doesn't comply with applicable rules.",
        },
        {
          heading: "Cookies",
          body: "This website does not use analytics, advertising, or tracking cookies.",
        },
      ],
    },
  },
};
