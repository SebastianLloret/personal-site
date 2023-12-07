export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Simple URL Shortener",
    techs: ["JavaScript", "Express"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Little Venice",
    techs: ["WordPress", "PHP", "TypeScript"],
    link: "https://littlevenicerestaurant.com/",
    isComingSoon: false,
  },
];

export default projects;
