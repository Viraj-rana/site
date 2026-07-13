export interface Skill {
  label: { en: string; ru: string };
  icon?: string;
  iconType?: "iconify" | "local";
}

export const domains: Skill[] = [
  { label: { en: "Artificial Intelligence", ru: "Искусственный интеллект" } },
  { label: { en: "Machine Learning", ru: "Машинное обучение" } },
  { label: { en: "Neural Networks", ru: "Нейронные сети" } },
  { label: { en: "Software Engineering", ru: "Разработка программного обеспечения" } },
  { label: { en: "Data Analysis", ru: "Анализ данных" } },
  { label: { en: "Software Development", ru: "Разработка ПО" } },
];

export const technologies: Skill[] = [
  { label: { en: "Python", ru: "Python" }, icon: "devicon:python" },
  { label: { en: "C++", ru: "C++" }, icon: "devicon:cplusplus" },
  { label: { en: "TypeScript", ru: "TypeScript" }, icon: "devicon:typescript" },
  { label: { en: "JavaScript", ru: "JavaScript" }, icon: "devicon:javascript" },
  { label: { en: "HTML", ru: "HTML" }, icon: "devicon:html5" },
  { label: { en: "CSS", ru: "CSS" }, icon: "devicon:css3" },
  { label: { en: "Tailwind CSS", ru: "Tailwind CSS" }, icon: "devicon:tailwindcss" },
  { label: { en: "Astro", ru: "Astro" }, icon: "devicon:astro" },
  { label: { en: "FastAPI", ru: "FastAPI" }, icon: "devicon:fastapi" },
  {
    label: { en: "Hugging Face", ru: "Hugging Face" },
    icon: "logos/huggingface-color.svg",
    iconType: "local",
  },
  {
    label: { en: "LangChain", ru: "LangChain" },
    icon: "simple-icons:langchain",
  },
  {
    label: { en: "LangGraph", ru: "LangGraph" },
    icon: "logos/langgraph-color.svg",
    iconType: "local",
  },
  { label: { en: "PostgreSQL", ru: "PostgreSQL" }, icon: "devicon:postgresql" },
  { label: { en: "MySQL", ru: "MySQL" }, icon: "devicon:mysql" },
  { label: { en: "MATLAB", ru: "MATLAB" }, icon: "devicon:matlab" },
  { label: { en: "RStudio", ru: "RStudio" }, icon: "devicon:rstudio" },
  { label: { en: "TensorFlow", ru: "TensorFlow" }, icon: "devicon:tensorflow" },
  { label: { en: "PyTorch", ru: "PyTorch" }, icon: "devicon:pytorch" },
  { label: { en: "NumPy", ru: "NumPy" }, icon: "devicon:numpy" },
  { label: { en: "Pandas", ru: "Pandas" }, icon: "devicon:pandas" },
  {
    label: { en: "Scikit-learn", ru: "Scikit-learn" },
    icon: "devicon:scikitlearn",
  },
  { label: { en: "Jupyter", ru: "Jupyter" }, icon: "devicon:jupyter" },
  {
    label: { en: "GitHub Actions", ru: "GitHub Actions" },
    icon: "devicon:githubactions",
  },
  {
    label: { en: "GitHub Pages", ru: "GitHub Pages" },
    icon: "devicon:github",
  },
  { label: { en: "Git", ru: "Git" }, icon: "devicon:git" },
  { label: { en: "VS Code", ru: "VS Code" }, icon: "devicon:vscode" },
];

export const languages = [
  {
    flag: "\u{1F1EC}\u{1F1E7}",
    name: { en: "English", ru: "Английский" },
  },
  {
    flag: "\u{1F1F7}\u{1F1FA}",
    name: { en: "Russian", ru: "Русский" },
  },
  {
    flag: "\u{1F1EE}\u{1F1F3}",
    name: { en: "Hindi", ru: "Хинди" },
  },
];

export interface FeaturedCertification {
  text: string;
  badgeUrl?: string;
  certificateUrl?: string;
  badgeAlt?: string;
  textSize?: string;
}

export const featuredCertifications: FeaturedCertification[] = [];

export const publications: {
  title: string;
  journal: string;
  date: string;
  abstract: string;
  link: string;
}[] = [];
