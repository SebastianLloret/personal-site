type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "sebastian@lloret.io",
  title: "Hi, I’m Seb 🤌🏼",
  // profile: "/profile.webp",
  description:
    "hola, i'm a *polylingual full-stack swe* with over *5 years* of experience. i'm currently working primarily with *node and typescript* on an open-source ERP solution for small businesses. outside of work i like to practice photography and spend time in nature",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/sebastianlloret/",
    },
    {
      label: "GitHub",
      link: "https://github.com/SebastianLloret/",
    },
    {
      label: "Photos",
      link: "https://photos.lloret.io",
    },
  ],
};

export default presentation;
