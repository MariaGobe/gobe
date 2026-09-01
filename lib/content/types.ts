export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  idx: string;
  slug: string;
  stamp: string;
  title: string;
  description: string;
  treatment: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  links?: WorkLink[];
  /** Press coverage — shown on the case-study page only, not on the card. */
  press?: WorkLink[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  photo: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  locale: "es" | "en";
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    work: string;
    studio: string;
    talk: string;
    switchTo: { label: string; href: string };
  };
  cover: {
    kicker: string;
    line: string;
    hint: string;
    creditLabel: string[];
  };
  home: {
    eyebrow: string;
    heading: string;
    lede: string;
    capabilities: string[];
  };
  work: {
    eyebrow: string;
    heading: string;
    lede: string;
    items: WorkItem[];
  };
  experiments: {
    eyebrow: string;
    heading: string;
    lede: string;
    items: WorkItem[];
  };
  studio: {
    eyebrow: string;
    heading: string;
    lede: string;
    team: TeamMember[];
  };
  talk: {
    eyebrow: string;
    heading: string;
    lede: string;
    social: SocialLink[];
  };
  footer: {
    line: string;
    meta: string;
    privacyLabel: string;
  };
  legal: {
    privacy: {
      title: string;
      updated: string;
      intro: string;
      sections: { heading: string; body: string }[];
    };
  };
};
