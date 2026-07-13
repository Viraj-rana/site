export type Locale = "en" | "ru";

export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      career: "Career",
      projects: "Projects",
      certificates: "Certificates",
      blogs: "Blogs",
      toggle: "Toggle navigation",
    },
    home: {
      title: "SWE | AI/ML Research Engineer",
      pageTitle: "Viraj Rana - Portfolio",
    },
    about: {
      pageTitle: "Viraj Rana - About",
      heading: "About",
      subtitle: "SWE | AI/ML Research Engineer",
      bio: "I’m Viraj Rana, an SWE | AI/ML research engineer focused on artificial intelligence and machine learning. I hold a Bachelor’s in Computer Engineering (AI/ML) from Gurugram University and a Master’s in Computer Engineering with a focus on neural networks from the University of Penn. I build end-to-end solutions combining LLMs, retrieval (RAG), AI-Agents, and structured data, including taxonomy enrichment, automated validation workflows, and scalable Python pipelines. More recently, I’ve focused on AI agent systems, developing a LangGraph-based multi-agent framework to automate ad-tech platform research, extracting API insights, audience taxonomies, and reach estimates. I’m particularly interested in building intelligent systems at the intersection of structured knowledge, retrieval, and AI agents.",
      skills: "Skills",
      domains: "Domains & Expertise",
      technologies: "Technologies & Tools",
      languages: "Languages",
      spokenEnglish: "English",
      spokenHindi: "Hindi",
    },
    career: {
      pageTitle: "Viraj Rana - Career",
      heading: "Career",
    },
    projects: {
      pageTitle: "Viraj Rana - Projects",
      heading: "Projects",
      empty: "Projects coming soon.",
    },
    certificates: {
      pageTitle: "Viraj Rana - Certificates",
      heading: "Certificates",
      empty: "Certificates coming soon.",
    },
    blogs: {
      pageTitle: "Viraj Rana - Blogs",
      heading: "Blogs",
      empty: "Blog posts coming soon.",
    },
    footer: {
      getInTouch: "Get In Touch",
      builtWith: "Built with ❤️",
      email: "Email",
    },
    meta: {
      description:
        "Portfolio of Viraj Rana - SWE | AI/ML Research Engineer",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      career: "Карьера",
      projects: "Проекты",
      certificates: "Сертификаты",
      blogs: "Блог",
      toggle: "Открыть меню",
    },
    home: {
      title: "SWE | Инженер-исследователь ИИ / МО",
      pageTitle: "Вирадж Рана — Портфолио",
    },
    about: {
      pageTitle: "Вирадж Рана — Обо мне",
      heading: "Обо мне",
      subtitle: "SWE | Инженер-исследователь ИИ / МО",
      bio: "Я Вирадж Рана, SWE | инженер-исследователь ИИ / МО, специализирующийся на искусственном интеллекте и машинном обучении. У меня есть степень бакалавра по компьютерной инженерии (ИИ/МО) Университета Гуруграма и магистратура по компьютерной инженерии с фокусом на нейронные сети Университета Пенн. Я разрабатываю комплексные решения, объединяющие LLM, retrieval (RAG), AI-агентов и структурированные данные, включая обогащение таксономий, автоматизированные процессы валидации и масштабируемые Python-пайплайны. В последнее время я сосредоточен на системах AI-агентов и разрабатываю multi-agent фреймворк на базе LangGraph для автоматизации исследований ad-tech платформ: извлечение API-инсайтов, аудиенсных таксономий и оценки охвата. Мне особенно интересно создавать интеллектуальные системы на стыке структурированных знаний, retrieval и AI-агентов.",
      skills: "Навыки",
      domains: "Направления и экспертиза",
      technologies: "Технологии и инструменты",
      languages: "Языки",
      spokenEnglish: "Английский",
      spokenHindi: "Хинди",
    },
    career: {
      pageTitle: "Вирадж Рана — Карьера",
      heading: "Карьера",
    },
    projects: {
      pageTitle: "Вирадж Рана — Проекты",
      heading: "Проекты",
      empty: "Проекты скоро появятся.",
    },
    certificates: {
      pageTitle: "Вирадж Рана — Сертификаты",
      heading: "Сертификаты",
      empty: "Сертификаты скоро появятся.",
    },
    blogs: {
      pageTitle: "Вирадж Рана — Блог",
      heading: "Блог",
      empty: "Посты блога скоро появятся.",
    },
    footer: {
      getInTouch: "Связаться",
      builtWith: "Сделано с ❤️",
      email: "Email",
    },
    meta: {
      description:
        "Портфолио Вираджа Раны — SWE | инженер-исследователь ИИ / МО",
    },
  },
} as const;

export type UiDict = (typeof ui)[Locale];
