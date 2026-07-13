export interface SocialLink {
  label: { en: string; ru: string };
  url: string;
  icon: string;
}

export const intro = {
  name: "Viraj Rana",
  names: {
    en: "Viraj Rana",
    ru: "Вирадж Рана",
    hi: "विराज राणा",
  },
  title: {
    en: "SWE | AI/ML Research Engineer",
    ru: "SWE | Инженер-исследователь ИИ / МО",
  },
};

export const socialLinks: SocialLink[] = [
  {
    label: { en: "Email", ru: "Email" },
    url: "mailto:hackteck404@gmail.com",
    icon: "bi:envelope-fill",
  },
  {
    label: { en: "Telegram", ru: "Telegram" },
    url: "https://t.me/elitecod0",
    icon: "bi:telegram",
  },
  {
    label: { en: "GitHub", ru: "GitHub" },
    url: "https://github.com/Viraj-rana",
    icon: "bi:github",
  },
];
