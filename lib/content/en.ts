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
    line: "Enter if you're curious.",
    hint: "scroll",
    creditLabel: ["COVER", "ISSUE 01", "COMING SOON", "2027"],
  },
  home: {
    eyebrow: "Who we are",
    heading: "Structure, critical thinking and sensibility.",
    lede: "Gobe is a boutique design studio working at the intersection of culture, strategy and digital systems. We build identities and visual systems with structure, critical thinking and sensibility. We don't work from aggressive marketing. We don't sell empty aesthetics. We design systems built to last.",
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
        description:
          'A purely visual presentation: logotype, a clinical-corporate colour system, applications. No long storytelling — we let the identity speak for itself, almost like a full-screen style sheet.',
        treatment: "An applications gallery, a short horizontal scroll, zero process copy.",
        image: "/images/work-sigesa.png",
        imageAlt: "Sigesa logotype on a blue background",
      },
      {
        idx: "02",
        stamp: "Brand + Product",
        title: "Zazú",
        description:
          "The perfect example of full-scope Gobe: brand + UX + digital product + technology. It earns the portfolio's longest format — from the identity to the real screens of the private client platform.",
        treatment: 'A two-act case study: "the brand" → "the platform," with real product screenshots.',
        image: "/images/work-zazu.png",
        imageAlt: "Zazú, Virtual Advisor — logotype and robot mascot",
      },
      {
        idx: "03",
        stamp: "Brand + Comms",
        title: "Horus ML",
        description:
          "The project that best communicates Gobe's philosophy: communication doesn't manufacture personality, it reveals it. Presented with more copy than the rest.",
        treatment: "A short quote/manifesto built into the layout, plus brand and communications pieces.",
        image: "/images/work-horusml.png",
        imageAlt: "Horus.ml logotype on a dark blue gradient",
      },
      {
        idx: "04",
        stamp: "Social impact",
        title: "Inspira STEAM",
        description:
          "A mentoring programme led by Mari Luz Guenaga from the University of Deusto, bringing science and technology closer to 6th-grade and 1st-year-secondary girls, with women science and technology professionals as mentors — directly addressing the gender gap in STEAM. We've been collaborating for years: a full rebrand, the entire website rebuilt, a printed notebook for the Day of the Girl and Woman in Science, and video editing for the professionals sharing their own experience. We also redesigned the website for Galaxia, a sibling project in the same STEAM universe.",
        treatment:
          "A mini case study spanning several formats at once (brand, web, print, video) — the arc of a multi-year collaboration.",
        image: "/images/work-inspirasteam.png",
        imageAlt: "Inspira STEAM homepage",
      },
      {
        idx: "05",
        stamp: "Rebranding",
        title: "Movilex",
        description:
          "An industrial rebrand with a real purpose (circular economy, WEEE recycling). A more serious, direct tone within the portfolio.",
        treatment: "Focused on the brand system as applied to industrial/technical environments.",
        image: "/images/work-movilex.jpg",
        imageAlt: "Movilex signage on an industrial facade",
      },
    ],
  },
  experiments: {
    eyebrow: "Experiments / Own Projects",
    heading: "What Gobe builds on its own initiative",
    lede: 'A deliberately different zone from Selected Work: rawer, more lab-like. The implicit message is "nobody commissioned this from us."',
    items: [
      {
        idx: "E1",
        stamp: "Own product",
        title: "Menta",
        description:
          'Education + UX + personalisation + AI. Gobe\'s own platform for personalised learning paths and practice. Explicitly labelled "By Gobe," never as client work.',
        treatment: "A live product demo (a mockup of the real interface), no client logo.",
        image: "/images/work-menta.png",
        imageAlt: "Menta login screen",
      },
      {
        idx: "E2",
        stamp: "AI experiment",
        title: "GPT de Hacienda",
        description:
          "A custom GPT for questions about the Spanish Tax Agency, published as soon as the technology allowed it. Real press coverage (El Economista, Hipertextual, Applesfera, Softzone, Telecinco). Shows how Gobe uses AI to build genuinely useful things, not as a buzzword.",
        treatment: "Real press clippings (with links) plus the GPT itself, embedded or linked.",
        image: "",
        imageAlt: "",
      },
    ],
  },
  studio: {
    eyebrow: "Studio",
    heading: "Three people, not an org chart",
    lede: "An editorial 'profile card' format instead of a corporate bio: a real black-and-white portrait, a role, one line in their own voice. No stock photography.",
    team: [
      {
        name: "María González",
        role: "Founder — Digital & UX",
        bio: "A unicorn: she can use any design tool — vector, 3D, code — and ship final pieces at full speed.",
        linkedin: "https://www.linkedin.com/in/mariagonzalezdebenito/",
        photo: "/images/team-maria.jpg",
      },
      {
        name: "Elena González",
        role: "Project Manager — USA",
        bio: "The manager of managers. She organises, solves, creates. Experience leading teams, working in the United States — she's the one who brings order to our chaos.",
        linkedin: "https://www.linkedin.com/in/elena-gonci/",
        photo: "/images/team-elena.jpg",
      },
      {
        name: "Antígona Corral",
        role: "Art & Visual Concepts",
        bio: "Art and conceptualisation. A voracious reader, full of artistic references — she's the one who brings coherence, references and a distinctive touch to every project.",
        linkedin: "https://www.linkedin.com/in/antigonacg/",
        photo: "/images/team-antigona.jpg",
      },
    ],
  },
  talk: {
    eyebrow: "Talk",
    heading: "Frictionless contact",
    lede: "A three-field form, no CRM dressed up as conversation. Every current channel stays as-is.",
    formLabels: { name: "Name", email: "Email", message: "Message", send: "Send →" },
    formNote:
      "A single three-field form — a project, a mentoring request, or anything else comes in through the same place.",
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
