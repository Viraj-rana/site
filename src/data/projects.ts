export interface LocalizedString {
  en: string;
  ru: string;
}

export interface Project {
  title: LocalizedString;
  date?: string;
  description: LocalizedString;
  bullets?: LocalizedString[];
  contributors?: LocalizedString;
  githubUrl?: string;
}

/** Newest first so the timeline groups by year correctly. */
export const projects: Project[] = [
  {
    title: {
      en: "Medical AI — LLM Medical Assistant",
      ru: "Medical AI — медицинский ассистент на LLM",
    },
    date: "2025",
    description: {
      en: "Domain-specific AI agent medical assistant that analyzes uploaded medical reports using specialist agents and returns structured insights. Also supports term-insurance document analysis.",
      ru: "Медицинский ассистент на доменных AI-агентах: анализирует загруженные медзаключения, использует специалистов и возвращает структурированные выводы. Также анализирует полисы term insurance.",
    },
    bullets: [
      {
        en: "Specialist simulations for cardiologist, psychologist, and pulmonologist perspectives.",
        ru: "Симуляции специалистов: кардиолог, психолог и пульмонолог.",
      },
      {
        en: "Multidisciplinary team mode combines agent outputs into ranked diagnostic suggestions with reasoning.",
        ru: "Мультидисциплинарный режим объединяет выводы агентов в ранжированные гипотезы диагнозов с обоснованием.",
      },
      {
        en: "Built with Streamlit, LangChain, and local Mistral via Ollama for privacy-respecting offline inference.",
        ru: "Стек: Streamlit, LangChain и локальный Mistral через Ollama для приватного офлайн-инференса.",
      },
      {
        en: "Upload medical reports, analyze clinical terms, and export results (including JSON-oriented outputs).",
        ru: "Загрузка отчётов, анализ медицинских терминов и экспорт результатов (включая JSON-ориентированный вывод).",
      },
    ],
    githubUrl: "https://github.com/Viraj-rana/Medical-AI",
  },
  {
    title: {
      en: "Multi-Voice AI Assistant",
      ru: "Multi-Voice AI Assistant",
    },
    date: "2025",
    description: {
      en: "Modular voice chat AI that lets users speak with different AI characters, each with unique personalities and voices for conversation and role-play.",
      ru: "Модульный голосовой AI-чат: общение с разными AI-персонажами, у каждого свой характер и голос — для диалога и ролевых сценариев.",
    },
    bullets: [
      {
        en: "Speech-driven interaction with selectable character personas (e.g., serious dialogue or OS-style role play).",
        ru: "Голосовое взаимодействие с выбором персонажей (серьёзный диалог или ролевой сценарий в стиле ОС).",
      },
      {
        en: "Modular architecture for swapping models, voices, and conversation styles.",
        ru: "Модульная архитектура: смена моделей, голосов и стилей общения.",
      },
    ],
    githubUrl: "https://github.com/Viraj-rana/Multi-Voice-AI-Assistant",
  },
  {
    title: {
      en: "Testify — AI App Management Platform",
      ru: "Testify — AI-платформа управления приложениями",
    },
    date: "2025",
    description: {
      en: "AI-congested application management tool for working with accessible project data across an app workflow.",
      ru: "AI-ориентированный инструмент управления приложениями для работы с доступными данными проекта в рабочем процессе.",
    },
    bullets: [
      {
        en: "Built with Vite, TypeScript, React, shadcn/ui, and Tailwind CSS.",
        ru: "Стек: Vite, TypeScript, React, shadcn/ui и Tailwind CSS.",
      },
      {
        en: "Includes frontend app structure plus Supabase-backed project scaffolding for data workflows.",
        ru: "Фронтенд-структура приложения и заготовка с Supabase для data-воркфлоу.",
      },
    ],
    githubUrl: "https://github.com/Viraj-rana/Testify",
  },
  {
    title: {
      en: "Offline Chatbot RAG Document",
      ru: "Офлайн-чатбот RAG по документам",
    },
    date: "2025",
    description: {
      en: "Offline RAG chatbot for document Q&A — retrieve relevant context from local documents and answer with grounded generation.",
      ru: "Офлайн RAG-чатбот для Q&A по документам: извлекает релевантный контекст из локальных файлов и отвечает grounded-генерацией.",
    },
    bullets: [
      {
        en: "Document ingestion + retrieval pipeline for local/private knowledge bases.",
        ru: "Пайплайн загрузки документов и retrieval для локальных/приватных баз знаний.",
      },
      {
        en: "Designed for privacy-first usage without relying on always-online cloud APIs.",
        ru: "Фокус на приватности: работа без постоянного доступа к облачным API.",
      },
    ],
    githubUrl: "https://github.com/Viraj-rana/Offline-chatbot-RAG-document-",
  },
  {
    title: {
      en: "AI Data Analyst Review",
      ru: "AI Data Analyst Review",
    },
    date: "2025",
    description: {
      en: "AI data-analyst review system that helps inspect, summarize, and reason over analytical datasets and review outputs.",
      ru: "Система AI-аналитика: помогает просматривать, суммировать и анализировать датасеты и результаты ревью.",
    },
    bullets: [
      {
        en: "Supports AI-assisted review workflows for data analysis tasks.",
        ru: "AI-assisted воркфлоу для задач анализа данных.",
      },
      {
        en: "Useful for quickly turning raw data signals into readable analytical conclusions.",
        ru: "Быстро превращает сырые data-сигналы в читаемые аналитические выводы.",
      },
    ],
    githubUrl: "https://github.com/Viraj-rana/AI-dataAnalyst-review",
  },
  {
    title: {
      en: "Voice Agent — Silero",
      ru: "Голосовой агент — Silero",
    },
    date: "2025",
    description: {
      en: "Voice agent project integrated with Silero for speech processing and conversational voice interactions.",
      ru: "Голосовой агент с интеграцией Silero для обработки речи и голосового диалога.",
    },
    bullets: [
      {
        en: "Speech-focused agent pipeline for interactive voice responses.",
        ru: "Голосовой пайплайн агента для интерактивных speech-ответов.",
      },
      {
        en: "Uses Silero components to support practical voice-agent experimentation.",
        ru: "Использует компоненты Silero для практических экспериментов с voice-агентами.",
      },
    ],
    githubUrl: "https://github.com/Viraj-rana/voice-agent-silero",
  },
  {
    title: {
      en: "Neural Memory Context Window Repair Tool",
      ru: "Инструмент ремонта neural memory / context window",
    },
    date: "2024",
    description: {
      en: "Tooling focused on repairing and managing neural memory / LLM context-window behavior for more stable long-context interactions.",
      ru: "Инструмент для ремонта и управления neural memory / context window LLM для более стабильной работы с длинным контекстом.",
    },
    bullets: [
      {
        en: "Targets context-window degradation and memory consistency issues in agent/LLM workflows.",
        ru: "Решает деградацию context window и проблемы согласованности памяти в агентных/LLM-воркфлоу.",
      },
      {
        en: "Helps recover usable conversational and task state across longer sessions.",
        ru: "Помогает восстанавливать usable state диалога и задач в длинных сессиях.",
      },
    ],
  },
  {
    title: {
      en: "AI Agents with Generative AI",
      ru: "AI-агенты с Generative AI",
    },
    date: "2023",
    description: {
      en: "Exploration and implementation of generative-AI powered agents for multi-step reasoning, tool use, and autonomous task handling.",
      ru: "Исследование и реализация агентов на generative AI для multi-step рассуждений, tool use и автономных задач.",
    },
    bullets: [
      {
        en: "Designed agent loops combining planning, generation, and evaluation steps.",
        ru: "Агентные циклы: планирование, генерация и оценка результатов.",
      },
      {
        en: "Applied generative models to practical automation scenarios beyond single-turn prompting.",
        ru: "Применение generative-моделей к автоматизации за пределами single-turn промптов.",
      },
    ],
  },
  {
    title: {
      en: "RAG Agents",
      ru: "RAG-агенты",
    },
    date: "2022",
    description: {
      en: "Retrieval-Augmented Generation agents that combine document retrieval with LLM generation for grounded answers.",
      ru: "RAG-агенты: сочетание document retrieval и LLM-генерации для grounded-ответов.",
    },
    bullets: [
      {
        en: "Built retrieval + generation pipelines to reduce hallucination and improve answer grounding.",
        ru: "Пайплайны retrieval + generation для снижения галлюцинаций и лучшего grounded-ответа.",
      },
      {
        en: "Structured agent workflows around context gathering, ranking, and response synthesis.",
        ru: "Агентные воркфлоу: сбор контекста, ранжирование и синтез ответа.",
      },
    ],
  },
  {
    title: {
      en: "Audio Analyzer",
      ru: "Аудиоанализатор",
    },
    date: "2021",
    description: {
      en: "Audio analysis project for inspecting speech/audio signals and extracting useful acoustic and content features.",
      ru: "Проект аудиоанализа: исследование речевых/аудиосигналов и извлечение полезных акустических и содержательных признаков.",
    },
    bullets: [
      {
        en: "Processed audio inputs for feature extraction and downstream classification/analysis tasks.",
        ru: "Обработка аудио для feature extraction и downstream классификации/анализа.",
      },
      {
        en: "Laid foundations for later voice-agent and speech-recognition work.",
        ru: "Заложил основу для последующих voice-agent и speech-recognition проектов.",
      },
    ],
  },
  {
    title: {
      en: "NN Trainer Library for Deep Neural Networks",
      ru: "NN Trainer Library для глубоких нейронных сетей",
    },
    date: "2020",
    description: {
      en: "Machine-learning library for training deep neural networks with reusable training utilities and experiment workflows.",
      ru: "ML-библиотека для обучения глубоких нейронных сетей с переиспользуемыми утилитами тренировки и экспериментальными воркфлоу.",
    },
    bullets: [
      {
        en: "Encapsulated common DNN training loops, metrics tracking, and model checkpointing patterns.",
        ru: "Общие DNN training loops, метрики и checkpointing моделей.",
      },
      {
        en: "Focused on practical deep-learning experimentation and reusable trainer APIs.",
        ru: "Фокус на практике deep learning и переиспользуемых trainer API.",
      },
    ],
  },
  {
    title: {
      en: "Object Motion Detectors with AI",
      ru: "AI-детекторы движения объектов",
    },
    date: "2020",
    description: {
      en: "Computer-vision system for detecting object motion using AI models for tracking and event signaling.",
      ru: "CV-система детекции движения объектов на AI-моделях для трекинга и сигнализации событий.",
    },
    bullets: [
      {
        en: "Used AI-based vision pipelines to detect and follow moving objects in video streams.",
        ru: "AI vision-пайплайны для детекции и сопровождения движущихся объектов в видео.",
      },
      {
        en: "Applied motion events to practical monitoring and automation scenarios.",
        ru: "События движения для мониторинга и автоматизации.",
      },
    ],
  },
  {
    title: {
      en: "Weapons Detection Project for Traffic Police",
      ru: "Проект детекции оружия для ГИБДД / traffic police",
    },
    date: "2019",
    description: {
      en: "AI project oriented toward assisting traffic police with weapons-related visual detection in operational contexts.",
      ru: "AI-проект для поддержки traffic police в визуальной детекции оружия в операционных сценариях.",
    },
    bullets: [
      {
        en: "Explored vision-based detection models for safety and enforcement assistance.",
        ru: "Vision-модели детекции для задач безопасности и правопорядка.",
      },
      {
        en: "Focused on practical signal detection and alerting concepts for field support tools.",
        ru: "Практические концепции детекции сигналов и оповещения для полевых инструментов.",
      },
    ],
  },
  {
    title: {
      en: "Vehicle Crash AI Project",
      ru: "AI-проект по авариям транспорта",
    },
    date: "2019",
    description: {
      en: "AI system for vehicle crash analysis / detection using visual and event-driven model approaches.",
      ru: "AI-система анализа/детекции ДТП на визуальных и event-driven подходах.",
    },
    bullets: [
      {
        en: "Applied AI techniques to identify crash-related patterns from sensors/visual inputs.",
        ru: "AI-методы для выявления crash-паттернов по сенсорам/видеовходам.",
      },
      {
        en: "Aimed at supporting faster situational awareness for safety workflows.",
        ru: "Цель — ускорить situational awareness для safety-воркфлоу.",
      },
    ],
  },
  {
    title: {
      en: "Human Voice Recognition — Male or Female",
      ru: "Распознавание голоса — мужской / женский",
    },
    date: "2019",
    description: {
      en: "Speech classification project that recognizes whether a human voice sample is male or female.",
      ru: "Проект классификации речи: определение мужского или женского голоса по аудиосемплу.",
    },
    bullets: [
      {
        en: "Extracted acoustic features from voice samples for gender classification.",
        ru: "Извлечение акустических признаков из голоса для классификации пола.",
      },
      {
        en: "Trained and evaluated models for robust male/female voice prediction.",
        ru: "Обучение и оценка моделей для устойчивого прогноза male/female.",
      },
    ],
  },
  {
    title: {
      en: "Website Image Carousel — 360° Effect",
      ru: "Веб-карусель изображений — эффект 360°",
    },
    date: "2018",
    description: {
      en: "Interactive website carousel with a 360° visual effect for immersive image browsing.",
      ru: "Интерактивная веб-карусель с эффектом 360° для immersive просмотра изображений.",
    },
    bullets: [
      {
        en: "Implemented smooth carousel transitions and 360-style interaction on the frontend.",
        ru: "Плавные переходы карусели и 360-взаимодействие на фронтенде.",
      },
      {
        en: "Focused on engaging UX for product/media presentation pages.",
        ru: "Фокус на engaging UX для product/media-страниц.",
      },
    ],
  },
  {
    title: {
      en: "E-commerce Website with Payment Gateway",
      ru: "E-commerce сайт с платёжным шлюзом",
    },
    date: "2018",
    description: {
      en: "Full e-commerce website with catalog/cart flows and integrated payment gateway checkout.",
      ru: "Полноценный e-commerce сайт с каталогом/корзиной и интегрированным платёжным шлюзом.",
    },
    bullets: [
      {
        en: "Built storefront UX for browsing products and completing purchases.",
        ru: "Storefront UX: просмотр товаров и оформление покупки.",
      },
      {
        en: "Integrated payment gateway flows for secure online transaction handling.",
        ru: "Интеграция payment gateway для безопасных онлайн-транзакций.",
      },
    ],
  },
  {
    title: {
      en: "Proxy Server",
      ru: "Прокси-сервер",
    },
    date: "2018",
    description: {
      en: "Custom proxy server project for request forwarding, networking experimentation, and traffic control concepts.",
      ru: "Кастомный прокси-сервер для forwarding запросов, сетевых экспериментов и контроля трафика.",
    },
    bullets: [
      {
        en: "Handled request/response forwarding between clients and upstream servers.",
        ru: "Пересылка request/response между клиентами и upstream-серверами.",
      },
      {
        en: "Explored networking, routing, and intermediary service design.",
        ru: "Изучение networking, routing и дизайна intermediary-сервисов.",
      },
    ],
  },
  {
    title: {
      en: "Clone Operating System Features",
      ru: "Клон функций операционной системы",
    },
    date: "2018",
    description: {
      en: "Educational project cloning selected operating-system features to understand OS internals and process abstractions.",
      ru: "Учебный проект: клонирование выбранных функций ОС для понимания internals и процессных абстракций.",
    },
    bullets: [
      {
        en: "Implemented core OS-like concepts such as process/task abstractions and feature simulations.",
        ru: "Реализация OS-подобных концепций: абстракции процессов/задач и симуляции функций.",
      },
      {
        en: "Strengthened fundamentals around systems programming and OS architecture.",
        ru: "Укрепил базу в systems programming и архитектуре ОС.",
      },
    ],
  },
  {
    title: {
      en: "OSLint — People Tracking Tool (Email & Phone)",
      ru: "OSLint — инструмент трекинга (email и телефон)",
    },
    date: "2018",
    description: {
      en: "OSINT-style tooling for tracking/linking people using email and phone identifiers (research / educational use).",
      ru: "OSINT-подобный инструмент для связывания людей по email и телефону (research / educational use).",
    },
    bullets: [
      {
        en: "Aggregated identifier-based lookup workflows for email and phone signals.",
        ru: "Воркфлоу поиска по идентификаторам: email и телефон.",
      },
      {
        en: "Built as an investigative-style utilities project for learning OSINT patterns.",
        ru: "Утилитарный investigative-проект для изучения OSINT-паттернов.",
      },
    ],
  },
];
