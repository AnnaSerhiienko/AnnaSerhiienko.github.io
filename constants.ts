import { Project, SocialLink } from './types';
const ASSET_BASE_URL = '/assets';
const APP_ICONS_FULL_COMPOSITION = `${ASSET_BASE_URL}/images/brand/app-icons-splash-screens/full-composition.png`;
const SMART_HOUSE_APP_VIDEO = `${ASSET_BASE_URL}/video/uiux/smart-house-app.mp4`;
const BEAUTY_SHOP_ONBOARDING_VIDEO = `${ASSET_BASE_URL}/video/uiux/Onboarding for Beauty shop.mp4`;
const APP_STORE_SCREENSHOTS = [
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/1 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/2 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/3 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/4 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/5 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/6 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/7 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/8 Cat Wars.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/1 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/2 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/3 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/4 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/5 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/6 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/7 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/8 Elemental Craft.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 1.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 2.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 3.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 4.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 5.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 6.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 7.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Cloud Noise 8.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 1.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 2.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 3.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 4.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 5.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 6.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 7.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Monstrous Evorise 8.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Scriptor 1.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Scriptor 2.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Scriptor 3.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Scriptor 4.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Scriptor 5.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Scriptor 6.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Selara 1.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Selara 2.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Selara 3.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Selara 4.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Selara 5.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Selara 6.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Selara 7.jpg`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 1.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 2.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 3.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 4.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 5.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 6.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 7.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Sky Hero 8.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 1.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 2.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 3.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 4.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 5.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 6.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 7.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 8.png`,
  `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Star Cleaning 9.png`,
];

export const DESIGNER_NAME = "Anna Serhiienko";
export const DESIGNER_ROLE = "Graphic Designer";
export const DESIGNER_BIO = "My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.";

export const WORK_CATEGORIES = [
  "Brand design",
  "UI/UX design",
  "Marketing and advertising"
];

export const SKILLS = [
  "Graphic Design",
  "UI/UX Design",
  "Game Art & Assets",
  "Digital Illustration",
  "Brand Identity",
  "Adobe Creative Suite",
  "Figma",
  "Marketing Creatives"
];

export const PROJECTS: Project[] = [
  // Brand Design
  {
    id: 15,
    title: "App Icons & Splash Screens",
    category: "Brand design",
    mediaUrl: APP_ICONS_FULL_COMPOSITION,
    mediaType: "image",
    description: "A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",
    link: "#app-icons",
    technologies: ["Illustrator", "Icon Design", "Mobile Branding"]
  },
  {
    id: 19,
    title: "RevBack Logo Design",
    category: "Brand design",
    mediaUrl: "https://cdn.dribbble.com/userupload/36126269/file/original-f90f3932c3f7d4e6048c28f799c4cbba.gif",
    mediaType: "image",
    description: "Logo design exploration for the RevBack mobile app with a bold, modern identity.",
    link: "https://dribbble.com/shots/17802180-Logo-design-for-RevBack-mobile-app",
    technologies: ["Logo Design", "Brand Identity", "Illustrator"]
  },

  // UI/UX Design
  {
    id: 16,
    title: "Smart House App",
    category: "UI/UX design",
    mediaUrl: SMART_HOUSE_APP_VIDEO,
    mediaType: "video",
    description: "An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",
    link: "https://dribbble.com/shots/11804880-Smart-house-App",
    technologies: ["Figma", "UI Animation", "IoT Design"]
  },
  {
    id: 18,
    title: "Onboarding for Beauty Shop",
    category: "UI/UX design",
    mediaUrl: BEAUTY_SHOP_ONBOARDING_VIDEO,
    mediaType: "video",
    description: "A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",
    link: "https://dribbble.com/shots/11284581-Onboarding-for-Beauty-shop",
    technologies: ["Figma", "UI/UX", "Onboarding"]
  },
  {
    id: 17,
    title: "App Store Screenshots",
    category: "Marketing and advertising",
    mediaUrl: `${ASSET_BASE_URL}/images/brand/App Store Screenshots/Full_Composition_App Store Screenshots.png`,
    mediaType: "image",
    gallery: APP_STORE_SCREENSHOTS,
    description: "A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",
    link: "#app-store-screenshots",
    technologies: ["App Store", "Marketing", "Visual Design"]
  }
];

export const SOCIALS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anna-serhiienko-1459a6187/', icon: 'Linkedin' },
  { name: 'Dribbble', url: 'https://dribbble.com/ArtistAnn', icon: 'Dribbble' },
];

export const SYSTEM_INSTRUCTION = `You are an AI portfolio assistant for ${DESIGNER_NAME}, a ${DESIGNER_ROLE}.
Bio: ${DESIGNER_BIO}

Skills: ${SKILLS.join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

Your goal is to be helpful, professional, and creative. Answer questions about Anna's work, experience, and contact information based on the provided data.`;