export const DESIGNER_NAME = "Anna Serhiienko";
export const DESIGNER_ROLE = "Graphic Designer";
export const DESIGNER_BIO = "My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.";

export const WORK_CATEGORIES = [
  "Brand design",
  "UI/UX design",
  "Marketing and advertising",
  "Illustration",
  "Game design"
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

export const PROJECTS = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    category: "Brand design",
    mediaUrl: "https://picsum.photos/seed/branding1/800/600",
    mediaType: "image",
    description: "Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.",
    link: "#",
    technologies: ["Illustrator", "Brand Strategy", "Indesign"]
  },
  {
    id: 11,
    title: "EcoLife Packaging",
    category: "Brand design",
    mediaUrl: "https://picsum.photos/seed/branding2/800/600",
    mediaType: "image",
    description: "Sustainable packaging design and identity for an organic skincare line.",
    link: "#",
    technologies: ["Packaging", "Print Design", "Photoshop"]
  },
  {
    id: 2,
    title: "Ethereal Finance App",
    category: "UI/UX design",
    mediaUrl: "https://picsum.photos/seed/uiux1/800/600",
    mediaType: "image",
    description: "A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.",
    link: "#",
    technologies: ["Figma", "Prototyping", "User Research"]
  },
  {
    id: 6,
    title: "Nebula Dashboard",
    category: "UI/UX design",
    mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    mediaType: "video",
    description: "Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.",
    link: "#",
    technologies: ["Figma", "React", "Motion Design"]
  },
  {
    id: 4,
    title: "Summer Campaign 2024",
    category: "Marketing and advertising",
    mediaUrl: "https://picsum.photos/seed/marketing1/800/600",
    mediaType: "image",
    description: "A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",
    link: "#",
    technologies: ["Photoshop", "After Effects", "Social Media"]
  },
  {
    id: 12,
    title: "Tech Summit Billboards",
    category: "Marketing and advertising",
    mediaUrl: "https://picsum.photos/seed/marketing2/800/600",
    mediaType: "image",
    description: "Large format print advertisements and digital displays for an international technology conference.",
    link: "#",
    technologies: ["Print", "Visual Layout", "Advertising"]
  },
  {
    id: 5,
    title: "Neon City Tales",
    category: "Illustration",
    mediaUrl: "https://picsum.photos/seed/illustration1/800/600",
    mediaType: "image",
    description: "A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.",
    link: "#",
    technologies: ["Procreate", "Digital Painting", "Color Theory"]
  },
  {
    id: 13,
    title: "Children's Book Art",
    category: "Illustration",
    mediaUrl: "https://picsum.photos/seed/illustration2/800/600",
    mediaType: "image",
    description: "Whimsical character designs and full-page spreads for a children's storybook about space exploration.",
    link: "#",
    technologies: ["Vector Art", "Character Design", "Storytelling"]
  },
  {
    id: 10,
    title: "Apex Gaming Assets",
    category: "Game design",
    mediaUrl: "https://picsum.photos/seed/gameart1/800/600",
    mediaType: "image",
    description: "Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.",
    link: "#",
    technologies: ["Blender", "Photoshop", "Unity"]
  },
  {
    id: 14,
    title: "Pixel Quest UI",
    category: "Game design",
    mediaUrl: "https://picsum.photos/seed/gameart2/800/600",
    mediaType: "image",
    description: "User interface elements and HUD design for a retro-style adventure game.",
    link: "#",
    technologies: ["Pixel Art", "Game UI", "Sprite Design"]
  }
];

export const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anna-serhiienko-1459a6187/', icon: 'Linkedin' },
  { name: 'Dribbble', url: 'https://dribbble.com/ArtistAnn', icon: 'Dribbble' },
];

export const SYSTEM_INSTRUCTION = `You are an AI portfolio assistant for ${DESIGNER_NAME}, a ${DESIGNER_ROLE}.
Bio: ${DESIGNER_BIO}

Skills: ${SKILLS.join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

Your goal is to be helpful, professional, and creative. Answer questions about Anna's work, experience, and contact information based on the provided data.`;