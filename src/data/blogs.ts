export interface LocalizedString {
  en: string;
  ru: string;
}

export interface BlogPost {
  title: LocalizedString;
  date?: string;
  description: LocalizedString;
  url?: string;
}

/** Blog posts can be added later. */
export const blogPosts: BlogPost[] = [];
