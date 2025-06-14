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
    link: "https://github.com/SebastianLloret/emoji-shortener",
    isComingSoon: false,
  },
  {
    title: "Red Barn HPC",
    techs: ["Odoo", "Python", "Node.js"],
    link: "https://redbarnhpc.com/",
    isComingSoon: false,
  },
];

export default projects;
