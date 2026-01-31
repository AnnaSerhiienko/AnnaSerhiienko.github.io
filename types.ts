
export interface Project {
  id: number;
  title: string;
  category: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  gallery?: string[];
  description: string;
  link: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

// Fixed: Added missing CHAT and CONTACT sections to resolve compilation errors
export enum SectionId {
  HERO = 'hero',
  WORK = 'work',
  ABOUT = 'about',
  CHAT = 'chat',
  CONTACT = 'contact',
}
