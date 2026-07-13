export interface LocalizedString {
  en: string;
  ru: string;
}

export interface CareerEntry {
  title: LocalizedString;
  organization: LocalizedString;
  logo?: string;
  dateRange: LocalizedString;
  project?: LocalizedString;
  description?: LocalizedString[];
  bullets?: LocalizedString[];
  bulletPrefix?: LocalizedString;
}

export const careerEntries: CareerEntry[] = [
  {
    title: {
      en: "Software Engineer",
      ru: "Инженер-программист",
    },
    organization: {
      en: "Win Solutions",
      ru: "Win Solutions",
    },
    logo: "logos/winsolutions.svg",
    dateRange: {
      en: "2025 - Present",
      ru: "2025 — настоящее время",
    },
    description: [
      {
        en: "Currently working at Win Solutions, building and shipping software products with a focus on practical engineering delivery.",
        ru: "В настоящее время работаю в Win Solutions: разрабатываю и запускаю программные продукты с фокусом на практическую инженерию.",
      },
    ],
  },
  {
    title: {
      en: "Software Engineer — Amazon Alexa",
      ru: "Инженер-программист — Amazon Alexa",
    },
    organization: {
      en: "Amazon",
      ru: "Amazon",
    },
    logo: "logos/amazon.svg",
    dateRange: {
      en: "2023",
      ru: "2023",
    },
    description: [
      {
        en: "Software Engineer on the Amazon Alexa team, focused on AI and neural network capabilities for Alexa Gadgets.",
        ru: "Инженер-программист в команде Amazon Alexa с фокусом на ИИ и нейронные сети для Alexa Gadgets.",
      },
    ],
    bullets: [
      {
        en: "Contributed to training and improving neural network models used in Alexa Gadgets experiences.",
        ru: "Участвовал в обучении и улучшении нейронных сетевых моделей для сценариев Alexa Gadgets.",
      },
      {
        en: "Worked on AI features for hang-up / call-ending behavior over voice calls, enabling more natural call control during Alexa Gadgets interactions.",
        ru: "Работал над ИИ-функциями завершения звонка (hang-up) по голосовому вызову, обеспечивая более естественное управление звонками в сценариях Alexa Gadgets.",
      },
      {
        en: "Collaborated on integrating voice-call neural network inference into gadget workflows for reliable real-time response.",
        ru: "Участвовал в интеграции инференса нейронных сетей для голосовых вызовов в пайплайны гаджетов для стабильного отклика в реальном времени.",
      },
    ],
  },
  {
    title: {
      en: "Junior Software Engineer",
      ru: "Младший инженер-программист",
    },
    organization: {
      en: "Concentrix",
      ru: "Concentrix",
    },
    logo: "logos/concentrix.svg",
    dateRange: {
      en: "2022",
      ru: "2022",
    },
    description: [
      {
        en: "Junior Software Engineer building software products with complex backend systems and frontend connectivity.",
        ru: "Младший инженер-программист: разработка программных продуктов со сложным бэкендом и фронтенд-связностью.",
      },
    ],
    bullets: [
      {
        en: "Designed and maintained backend services for business workflows, including API layers, data validation, and request orchestration across services.",
        ru: "Разрабатывал и поддерживал бэкенд-сервисы для бизнес-процессов: API-слой, валидация данных и оркестрация запросов между сервисами.",
      },
      {
        en: "Worked on complex backend integrations connecting databases, internal APIs, and third-party systems for reliable product delivery.",
        ru: "Работал над сложными бэкенд-интеграциями: базы данных, внутренние API и внешние системы для стабильной поставки продукта.",
      },
      {
        en: "Built and improved frontend–backend connectivity so UI features could consume APIs consistently, with clear contracts and error handling.",
        ru: "Улучшал связность фронтенда и бэкенда: UI-функции стабильно работали с API, с чёткими контрактами и обработкой ошибок.",
      },
      {
        en: "Collaborated with product and engineering teams to ship end-to-end software flows from backend logic through connected frontend experiences.",
        ru: "Работал с продуктовыми и инженерными командами над end-to-end сценариями: от бэкенд-логики до связанных фронтенд-интерфейсов.",
      },
    ],
  },
  {
    title: {
      en: "Software Engineer Intern",
      ru: "Стажёр инженера-программиста",
    },
    organization: {
      en: "Internship Program",
      ru: "Программа стажировки",
    },
    logo: "logos/internship.svg",
    dateRange: {
      en: "2022",
      ru: "2022",
    },
    description: [
      {
        en: "Software engineering internship with hands-on experience in application development and team workflows.",
        ru: "Стажировка по разработке ПО с практическим опытом создания приложений и командных процессов.",
      },
    ],
  },
  {
    title: {
      en: "Summer Internship Program",
      ru: "Летняя программа стажировки",
    },
    organization: {
      en: "Internship Program",
      ru: "Программа стажировки",
    },
    logo: "logos/internship.svg",
    dateRange: {
      en: "2022",
      ru: "2022",
    },
    description: [
      {
        en: "Summer internship program focused on practical engineering experience and professional skill development.",
        ru: "Летняя программа стажировки с фокусом на практический инженерный опыт и развитие профессиональных навыков.",
      },
    ],
  },
  {
    title: {
      en: "Master's in Computer Engineering — Neural Networks",
      ru: "Магистратура по компьютерной инженерии — нейронные сети",
    },
    organization: {
      en: "University of Penn",
      ru: "Университет Пенн",
    },
    logo: "logos/penn.svg",
    dateRange: {
      en: "2021",
      ru: "2021",
    },
    description: [
      {
        en: "Graduate studies focused on neural networks and advanced AI/ML methods within computer engineering.",
        ru: "Магистерская программа с акцентом на нейронные сети и современные методы ИИ/МО в области компьютерной инженерии.",
      },
    ],
  },
  {
    title: {
      en: "Community Volunteer",
      ru: "Волонтёр сообщества",
    },
    organization: {
      en: "Community Service",
      ru: "Общественная деятельность",
    },
    logo: "logos/volunteer.svg",
    dateRange: {
      en: "2021",
      ru: "2021",
    },
    description: [
      {
        en: "Community volunteer work supporting local initiatives and collaborative social impact activities.",
        ru: "Волонтёрская деятельность: поддержка локальных инициатив и совместных социально полезных проектов.",
      },
    ],
  },
  {
    title: {
      en: "Intern",
      ru: "Стажёр",
    },
    organization: {
      en: "Goldman Sachs",
      ru: "Goldman Sachs",
    },
    logo: "logos/goldman-sachs.svg",
    dateRange: {
      en: "2021",
      ru: "2021",
    },
    description: [
      {
        en: "Internship at Goldman Sachs with exposure to professional software and technology workflows in a global firm.",
        ru: "Стажировка в Goldman Sachs: знакомство с профессиональными процессами разработки и технологий в международной компании.",
      },
    ],
  },
  {
    title: {
      en: "Intern",
      ru: "Стажёр",
    },
    organization: {
      en: "Wipro",
      ru: "Wipro",
    },
    logo: "logos/wipro.svg",
    dateRange: {
      en: "2019",
      ru: "2019",
    },
    description: [
      {
        en: "Internship at Wipro, gaining early industry experience in software engineering and enterprise technology environments.",
        ru: "Стажировка в Wipro: ранний промышленный опыт в разработке ПО и enterprise-средах.",
      },
    ],
  },
  {
    title: {
      en: "Bachelor's in Computer Engineering — AI/ML",
      ru: "Бакалавриат по компьютерной инженерии — ИИ/МО",
    },
    organization: {
      en: "Gurugram University",
      ru: "Университет Гуруграма",
    },
    logo: "logos/gurugram-university.svg",
    dateRange: {
      en: "2017",
      ru: "2017",
    },
    description: [
      {
        en: "Undergraduate foundation in computer engineering with specialization in artificial intelligence and machine learning.",
        ru: "Базовое высшее образование по компьютерной инженерии со специализацией в искусственном интеллекте и машинном обучении.",
      },
    ],
  },
  {
    title: {
      en: "Primary Schooling — Science",
      ru: "Начальное / школьное образование — естественные науки",
    },
    organization: {
      en: "MP School",
      ru: "MP School",
    },
    logo: "logos/mp-school.svg",
    dateRange: {
      en: "2017",
      ru: "2017",
    },
    description: [
      {
        en: "Primary schooling at MP School with a science focus.",
        ru: "Обучение в MP School с упором на естественно-научное направление.",
      },
    ],
  },
];
