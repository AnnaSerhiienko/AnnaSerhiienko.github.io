export interface Project {
  id: number;
  title: string;
  category: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
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

export enum SectionId {
  HERO = 'hero',
  WORK = 'work',
  ABOUT = 'about',
  CONTACT = 'contact',
  CHAT = 'chat',
}