export interface LocalizedString {
  en: string;
  ru: string;
}

export interface BlogPost {
  title: LocalizedString;
  date?: string;
  description: LocalizedString;
  url: string;
  image?: string;
  imageAlt?: LocalizedString;
}

export const BLOG_SITE_URL = "https://virajblog.online";
export const BLOG_ARCHIVE_URL = `${BLOG_SITE_URL}/blog/index.html`;
export const BLOG_ARCHIVE_URL_RU = `${BLOG_SITE_URL}/ru/blog/index.html`;

const cardDefault = "/site/blog/card-default.png";

/** Newest writing posts on virajblog.online (sync titles manually when you publish). */
export const blogPosts: BlogPost[] = [
  {
    title: {
      en: "Spotting the Bill Before You Ship a Robot Brain",
      ru: "Spotting the Bill Before You Ship a Robot Brain",
    },
    date: "15 November 2026",
    description: {
      en: "A back-of-the-envelope for embodied AI: what you pay when a general model closes the loop at 2 Hz versus a 7B VLA on the GPU next to the arm, plus what still breaks in the field.",
      ru: "A back-of-the-envelope for embodied AI: what you pay when a general model closes the loop at 2 Hz versus a 7B VLA on the GPU next to the arm, plus what still breaks in the field.",
    },
    url: `${BLOG_SITE_URL}/blog/robot-brain-at-the-edge.html`,
    image: cardDefault,
    imageAlt: {
      en: "Embodied AI cost planning",
      ru: "Embodied AI cost planning",
    },
  },
  {
    title: {
      en: "One Brain for the Robot, or a Small Model at the Wrist?",
      ru: "One Brain for the Robot, or a Small Model at the Wrist?",
    },
    date: "14 November 2026",
    description: {
      en: "After OpenAI folded robotics into its foundation-model teams, the real question is latency and money at the edge: a giant multimodal API in the cloud versus a vision-language-action model that runs on the machine.",
      ru: "After OpenAI folded robotics into its foundation-model teams, the real question is latency and money at the edge: a giant multimodal API in the cloud versus a vision-language-action model that runs on the machine.",
    },
    url: `${BLOG_SITE_URL}/blog/vla-or-one-brain-for-robots.html`,
    image: cardDefault,
    imageAlt: {
      en: "Robot control architecture",
      ru: "Robot control architecture",
    },
  },
  {
    title: {
      en: "OpenAI Merges Its Robotics Team Into the Main Model Stack",
      ru: "OpenAI Merges Its Robotics Team Into the Main Model Stack",
    },
    date: "13 November 2026",
    description: {
      en: "On 13 November 2026 OpenAI confirmed it no longer keeps a stand-alone robotics group. Researchers moved to core research and applied hardware, with the bet that GPT-6 Astra-class models can drive robots without a separate pipeline.",
      ru: "On 13 November 2026 OpenAI confirmed it no longer keeps a stand-alone robotics group. Researchers moved to core research and applied hardware, with the bet that GPT-6 Astra-class models can drive robots without a separate pipeline.",
    },
    url: `${BLOG_SITE_URL}/blog/openai-robotics-reorganization.html`,
    image: "https://virajblog.online/images/openai-robotics-reorganization-robot-lab-12067de2.webp",
    imageAlt: {
      en: "Engineer at a laptop beside humanoid robots on an assembly line",
      ru: "Engineer at a laptop beside humanoid robots on an assembly line",
    },
  },
  {
    title: {
      en: "Muse Ember: Meta's Small Model for the Work Agents Repeat",
      ru: "Muse Ember: Meta's Small Model for the Work Agents Repeat",
    },
    date: "10 November 2026",
    description: {
      en: "Meta's smallest Muse model launched on 9 November 2026. Same short-prompt price as Haiku 5.5 and GPT-6 Luna, a higher score on most agent tests, and about $0.14 per Artificial Analysis task.",
      ru: "Meta's smallest Muse model launched on 9 November 2026. Same short-prompt price as Haiku 5.5 and GPT-6 Luna, a higher score on most agent tests, and about $0.14 per Artificial Analysis task.",
    },
    url: `${BLOG_SITE_URL}/blog/muse-ember.html`,
    image: cardDefault,
    imageAlt: {
      en: "Small language model for agents",
      ru: "Small language model for agents",
    },
  },
];