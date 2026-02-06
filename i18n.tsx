import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'uk';

export interface Translations {
  // Navigation
  nav: {
    work: string;
    about: string;
    cv: string;
    hireMe: string;
    brandText: string;
    cvAlert: string;
  };
  // Language Switcher
  languageSwitch: {
    enShort: string;
    ukShort: string;
    enTitle: string;
    ukTitle: string;
  };
  // Hero
  hero: {
    available: string;
    heading1: string;
    heading2: string;
    viewWork: string;
    lead: string;
  };
  // Work Gallery
  work: {
    title: string;
    subtitle: string;
    all: string;
    categories: {
      brandDesign: string;
      uiuxDesign: string;
      marketing: string;
      illustration: string;
      gameDesign: string;
      games: string;
    };
    emptyState: string;
    viewProject: string;
    technologies: string;
    close: string;
  };
  projects: Record<
    number,
    {
      title: string;
      description: string;
      technologies: string[];
    }
  >;
  // About
  about: {
    discovery: string;
    heading1: string;
    heading2: string;
    experience: string;
    years: string;
    proficiencies: string;
    bio: string;
    watermark: string;
    emphasis: string;
    portraitAlt: string;
    experienceText: string;
    skills: {
      graphicDesign: string;
      uiuxDesign: string;
      gameArt: string;
      digitalIllustration: string;
      brandIdentity: string;
      adobeSuite: string;
      figma: string;
      marketingCreatives: string;
    };
  };
  // Contact
  contact: {
    title: string;
    subtitle: string;
  };
  // App Icons & Splash Screens
  appIcons: {
    backToPortfolio: string;
    backToPortfolioAria: string;
    eyebrow: string;
    titlePrimary: string;
    titleEmphasis: string;
    lead: string;
    appIconsTitle: string;
    splashScreensTitle: string;
    fullCompositionTitle: string;
    fullCompositionAlt: string;
    viewMoreProjects: string;
    footerRights: string;
    next: string;
    previous: string;
    iconLabels: string[];
    splashLabels: string[];
  };
  appStoreScreenshots: {
    backToPortfolio: string;
    headerTag: string;
    eyebrow: string;
    title: string;
    lead: string;
  };
  namelaka: {
    backToPortfolio: string;
    headerTag: string;
    eyebrow: string;
    title: string;
  };
  mindzy: {
    backToPortfolio: string;
    eyebrow: string;
    title: string;
    lead: string;
    interfaceTitle: string;
    videoTitle: string;
  };
  marketingVideo: {
    backToPortfolio: string;
    headerTag: string;
    eyebrow: string;
    title: string;
    lead: string;
    featuredTitle: string;
    allVideosTitle: string;
  };
  elementalQuest: {
    backToPortfolio: string;
    headerTag: string;
    eyebrow: string;
    title: string;
    lead: string;
    logoAlt: string;
    mapAlt: string;
  };
  combatPlanes: {
    backToPortfolio: string;
    headerTag: string;
    eyebrow: string;
    title: string;
    lead: string;
    logoAlt: string;
    galleryAlt: string;
  };
  fattyFish: {
    backToPortfolio: string;
    headerTag: string;
    eyebrow: string;
    title: string;
    lead: string;
    logoAlt: string;
    galleryAlt: string;
  };
  // Footer
  footer: {
    rights: string;
    portfolio: string;
    privacy: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      cv: 'CV',
      hireMe: 'Hire Me',
      brandText: 'Serhiienko',
      cvAlert: 'CV download would trigger here (anna_serhiienko_resume.pdf).',
    },
    languageSwitch: {
      enShort: 'EN',
      ukShort: 'UK',
      enTitle: 'English',
      ukTitle: 'Ukrainian',
    },
    hero: {
      available: 'Available for new projects',
      heading1: 'Welcome to my',
      heading2: 'Portfolio',
      viewWork: 'View My Work',
      lead: '',
    },
    work: {
      title: 'Works',
      subtitle: 'Selected projects from 5+ years of craft in branding, digital, and game experiences.',
      all: 'All',
      categories: {
        brandDesign: 'Brand design',
        uiuxDesign: 'UI/UX design',
        marketing: 'Marketing and advertising',
        illustration: 'Illustration',
        gameDesign: 'Game design',
        games: 'Games',
      },
      emptyState: 'Quietly awaiting new masterpieces...',
      viewProject: 'View Project',
      technologies: 'Technologies',
      close: 'Close',
    },
    projects: {
      1: {
        title: 'Lumina Brand Identity',
        description: 'Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.',
        technologies: ['Illustrator', 'Brand Strategy', 'Indesign'],
      },
      11: {
        title: 'EcoLife Packaging',
        description: 'Sustainable packaging design and identity for an organic skincare line.',
        technologies: ['Packaging', 'Print Design', 'Photoshop'],
      },
      15: {
        title: 'App Icons & Splash Screens',
        description: 'A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.',
        technologies: ['Illustrator', 'Icon Design', 'Mobile Branding'],
      },
      19: {
        title: 'RevBack Logo Design',
        description: 'Logo design exploration for the RevBack mobile app with a bold, modern identity.',
        technologies: ['Logo Design', 'Brand Identity', 'Illustrator'],
      },
      20: {
        title: 'Namelaka Icons & Illustration',
        description: 'Iconography and illustration set for Namelaka, covering UI states, empty screens, and branded visuals.',
        technologies: ['Illustration', 'Icon Design', 'UI Assets'],
      },
      21: {
        title: 'Mindzy – Brain Training',
        description: 'Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.',
        technologies: ['UI/UX', 'Game UI', 'Visual Design'],
      },
      2: {
        title: 'Ethereal Finance App',
        description: 'A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.',
        technologies: ['Figma', 'Prototyping', 'User Research'],
      },
      16: {
        title: 'Smart House App',
        description: 'An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.',
        technologies: ['Figma', 'UI Animation', 'IoT Design'],
      },
      18: {
        title: 'Onboarding for Beauty Shop',
        description: 'A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.',
        technologies: ['Figma', 'UI/UX', 'Onboarding'],
      },
      17: {
        title: 'App Store Screenshots',
        description: 'A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.',
        technologies: ['App Store', 'Marketing', 'Visual Design'],
      },
      6: {
        title: 'Nebula Dashboard',
        description: 'Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.',
        technologies: ['Figma', 'React', 'Motion Design'],
      },
      17: {
        title: 'App Store Screenshots',
        description: '',
        technologies: ['App Store', 'Маркетинг', 'Візуальний дизайн'],
      },
      4: {
        title: 'Summer Campaign 2024',
        description: "A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",
        technologies: ['Photoshop', 'After Effects', 'Social Media'],
      },
      12: {
        title: 'Tech Summit Billboards',
        description: 'Large format print advertisements and digital displays for an international technology conference.',
        technologies: ['Print', 'Visual Layout', 'Advertising'],
      },
      5: {
        title: 'Neon City Tales',
        description: 'A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.',
        technologies: ['Procreate', 'Digital Painting', 'Color Theory'],
      },
      13: {
        title: "Children's Book Art",
        description: "Whimsical character designs and full-page spreads for a children's storybook about space exploration.",
        technologies: ['Vector Art', 'Character Design', 'Storytelling'],
      },
      10: {
        title: 'Apex Gaming Assets',
        description: 'Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.',
        technologies: ['Blender', 'Photoshop', 'Unity'],
      },
      14: {
        title: 'Pixel Quest UI',
        description: 'User interface elements and HUD design for a retro-style adventure game.',
        technologies: ['Pixel Art', 'Game UI', 'Sprite Design'],
      },
    },
    about: {
      discovery: 'About Me',
      heading1: 'About',
      heading2: '',
      experience: 'Experience',
      years: 'Years',
      proficiencies: 'Proficiencies',
      bio: "I am a Graphic Designer with 5 years of experience creating design solutions and visual graphics for digital products and brands.\nI work with Figma, Adobe Illustrator, Photoshop, and After Effects. I design branding materials, user interfaces, marketing visuals, and game assets, always focusing on business goals and user experience.",
      watermark: 'Creative',
      emphasis: 'Me',
      portraitAlt: 'Anna Serhiienko portrait',
       experienceText: '',
      skills: {
        graphicDesign: 'Graphic Design',
        uiuxDesign: 'UI/UX Design',
        gameArt: 'Game Art & Assets',
        digitalIllustration: 'Digital Illustration',
        brandIdentity: 'Brand Identity',
        adobeSuite: 'Adobe Creative Suite',
        figma: 'Figma',
        marketingCreatives: 'Marketing Creatives',
      },
    },
    contact: {
      title: "Let's Create Together",
      subtitle: 'Contact section removed.',
    },
    appIcons: {
      backToPortfolio: 'Back to Portfolio',
      backToPortfolioAria: 'Back to portfolio',
      eyebrow: 'Mobile Branding',
      titlePrimary: 'App Icons &',
      titleEmphasis: 'Splash Screens',
      lead: 'A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.',
      appIconsTitle: 'App Icons',
      splashScreensTitle: 'Splash Screens',
      fullCompositionTitle: 'Full Composition',
      fullCompositionAlt: 'App Icons & Splash Screens Full Composition',
      viewMoreProjects: 'View More Projects',
      footerRights: 'All rights reserved.',
      next: 'Next',
      previous: 'Previous',
      iconLabels: [
        'Elemental Quest — Alt Icon',
        'Monstrous Evorise',
        'Cat Wars',
        'Fatty Fish',
        'Feed Me',
        'Elemental Quest',
        'RevBack',
        'Selara',
        'Sky Hero',
      ],
      splashLabels: [
        'Cat Wars',
        'Elemental Craft',
        'Elemental Quest',
        'Fatty Fish',
        'Feed Me',
        'Monstrous Evorise',
        'RevBack',
        'Selara',
      ],
    },
    appStoreScreenshots: {
      backToPortfolio: 'Back to Portfolio',
      headerTag: 'App Store Screenshots',
      eyebrow: 'Marketing',
      title: 'App Store Screenshots',
      lead: '',
    },
    namelaka: {
      backToPortfolio: 'Back to Portfolio',
      headerTag: 'Namelaka',
      eyebrow: 'UI/UX Design',
      title: 'Namelaka Icons & Illustration',
    },
    mindzy: {
      backToPortfolio: 'Back to Portfolio',
      eyebrow: 'UI/UX Design',
      title: 'Mindzy – Brain Training',
      lead: 'A showcase of Mindzy game interfaces and motion previews.',
      interfaceTitle: 'Game Interfaces',
      videoTitle: 'Gameplay Videos',
    },
    marketingVideo: {
      backToPortfolio: 'Back to Portfolio',
      headerTag: 'Motion Design',
      eyebrow: 'Motion Design',
      title: 'Marketing Videos',
      lead: 'A collection of promotional videos and motion graphics for mobile app marketing campaigns.',
      featuredTitle: 'Featured Videos',
      allVideosTitle: 'All Videos',
    },
    elementalQuest: {
      backToPortfolio: 'Back to Portfolio',
      headerTag: 'Game Art',
      eyebrow: 'Game Art & Design',
      title: 'Elemental Quest',
      lead: 'Game map design and visual assets for an adventure puzzle game.',
      logoAlt: 'Elemental Quest Logo',
      mapAlt: 'Elemental Quest Game Map',
    },
    combatPlanes: {
      backToPortfolio: 'Back to Portfolio',
      headerTag: 'Game Art',
      eyebrow: 'Game Art & Design',
      title: 'Combat Planes',
      lead: 'Character design, plane skins, and game maps for an aerial combat mobile game.',
      logoAlt: 'Combat Planes Logo',
      galleryAlt: 'Combat Planes Game Art',
    },
    fattyFish: {
      backToPortfolio: 'Back to Portfolio',
      headerTag: 'Game Art',
      eyebrow: 'Game Art & Design',
      title: 'Fatty Fish',
      lead: 'Character design, game objects, and visual assets for a fun aquatic mobile game.',
      logoAlt: 'Fatty Fish Logo',
      galleryAlt: 'Fatty Fish Game Art',
    },
    footer: {
      rights: 'All rights reserved.',
      portfolio: 'Portfolio',
      privacy: 'Privacy Policy',
    },
  },
  uk: {
    nav: {
      work: 'Роботи',
      about: 'Про мене',
      cv: 'Резюме',
      hireMe: 'Найняти',
      18: {
        title: 'Onboarding for Beauty Shop',
        description: 'Вишуканий онбординг для застосунку б’юті-магазину з фокусом на персоналізації та плавному першому досвіді.',
        technologies: ['Figma', 'UI/UX', 'Онбординг'],
      },
      brandText: 'Сергієнко',
      cvAlert: 'Завантаження резюме відбулося б тут (anna_serhiienko_resume.pdf).',
    },
    languageSwitch: {
      enShort: 'EN',
      ukShort: 'UK',
      enTitle: 'Англійська',
      ukTitle: 'Українська',
    },
    hero: {
      available: 'Відкрита для нових проєктів',
      heading1: 'Ласкаво просимо до мого',
      heading2: 'портфоліо',
      viewWork: 'Переглянути роботи',
      lead: '',
    },
    work: {
      title: 'Роботи',
      subtitle: 'Вибрані проєкти за 5+ років роботи у брендингу, цифровому дизайні та ігровому досвіді.',
      all: 'Усі',
      categories: {
        brandDesign: 'Бренд-дизайн',
        uiuxDesign: 'UI/UX дизайн',
        marketing: 'Маркетинг та реклама',
        illustration: 'Ілюстрація',
        gameDesign: 'Ігровий дизайн',
        games: 'Ігри',
      },
      emptyState: 'Тихо очікуємо нових шедеврів...',
      viewProject: 'Переглянути проєкт',
      technologies: 'Технології',
      close: 'Закрити',
    },
    projects: {
      1: {
        title: 'Lumina Brand Identity',
        description: 'Повна система візуальної айдентики для техстартапу: логотип, типографіка та бренд-матеріали.',
        technologies: ['Illustrator', 'Brand Strategy', 'Indesign'],
      },
      11: {
        title: 'EcoLife Packaging',
        description: 'Дизайн екопакування та айдентики для лінійки органічної косметики.',
        technologies: ['Packaging', 'Print Design', 'Photoshop'],
      },
      15: {
        title: 'App Icons & Splash Screens',
        description: 'Колекція яскравих іконок і сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою айдентикою.',
        technologies: ['Illustrator', 'Icon Design', 'Mobile Branding'],
      },
      19: {
        title: 'RevBack Logo Design',
        description: 'Дослідження логотипу для мобільного застосунку RevBack із сміливою сучасною айдентикою.',
        technologies: ['Logo Design', 'Бренд-айдентика', 'Illustrator'],
      },
      20: {
        title: 'Namelaka Icons & Illustration',
        description: 'Набір іконок та ілюстрацій для Namelaka: UI-стани, порожні екрани та брендовані візуали.',
        technologies: ['Ілюстрації', 'Дизайн іконок', 'UI-ресурси'],
      },
      21: {
        title: 'Mindzy – Brain Training',
        description: 'Набір інтерфейсів Mindzy із різноманітними іграми для тренування мозку та UI-станами.',
        technologies: ['UI/UX', 'Ігровий UI', 'Візуальний дизайн'],
      },
      2: {
        title: 'Ethereal Finance App',
        description: 'Переосмислений мобільний банкінг із фокусом на прозорість і спокій, що зменшує тривожність у фінансових питаннях.',
        technologies: ['Figma', 'Prototyping', 'User Research'],
      },
      16: {
        title: 'Smart House App',
        description: 'Інтуїтивний застосунок для розумного дому зі стильним темним інтерфейсом і плавними анімаціями. Користувачі легко керують освітленням, температурою та пристроями завдяки елегантним мікровзаємодіям і статусам у реальному часі.',
        technologies: ['Figma', 'UI Animation', 'IoT Design'],
      },
      6: {
        title: 'Nebula Dashboard',
        description: 'Аналітичний дашборд у темному режимі для хмарного провайдера з візуалізацією складних потоків даних у реальному часі.',
        technologies: ['Figma', 'React', 'Motion Design'],
      },
      4: {
        title: 'Summer Campaign 2024',
        description: 'Серія конверсійних креативів для соцмереж і веббанерів під сезонний запуск модного бренду.',
        technologies: ['Photoshop', 'After Effects', 'Social Media'],
      },
      12: {
        title: 'Tech Summit Billboards',
        description: 'Великоформатні друковані та цифрові носії для міжнародної технологічної конференції.',
        technologies: ['Print', 'Visual Layout', 'Advertising'],
      },
      5: {
        title: 'Neon City Tales',
        description: 'Цифрова серія ілюстрацій у кіберпанк-естетиці для редакційних матеріалів і постерів.',
        technologies: ['Procreate', 'Digital Painting', 'Color Theory'],
      },
      13: {
        title: "Children's Book Art",
        description: 'Казкові дизайни персонажів і розвороти для дитячої книжки про космічні пригоди.',
        technologies: ['Vector Art', 'Character Design', 'Storytelling'],
      },
      10: {
        title: 'Apex Gaming Assets',
        description: 'Концепт-арт персонажів і середовища для науково-фантастичної RPG з акцентом на атмосферне освітлення та деталізовані текстури.',
        technologies: ['Blender', 'Photoshop', 'Unity'],
      },
      14: {
        title: 'Pixel Quest UI',
        description: 'Елементи інтерфейсу та HUD для ретро-пригодницької гри.',
        technologies: ['Pixel Art', 'Game UI', 'Sprite Design'],
      },
    },
    about: {
      discovery: 'Про мене',
      heading1: 'Про',
      heading2: '',
      experience: 'Досвід',
      years: 'Років',
      proficiencies: 'Навички',
      bio: "Я графічний дизайнер з 5-річним досвідом створення дизайн-рішень та візуальної графіки для цифрових продуктів і брендів.\nПрацюю з Figma, Adobe Illustrator, Photoshop та After Effects. Розробляю брендинг-матеріали, користувацькі інтерфейси, маркетингові візуали та ігрові ресурси, завжди фокусуючись на бізнес-цілях та досвіді користувача.",
      watermark: 'Творчість',
      emphasis: 'Мене',
      portraitAlt: 'Портрет Анни Сергієнко',
       experienceText: '',
      skills: {
        graphicDesign: 'Графічний дизайн',
        uiuxDesign: 'UI/UX дизайн',
        gameArt: 'Ігрова графіка',
        digitalIllustration: 'Цифрова ілюстрація',
        brandIdentity: 'Бренд-айдентика',
        adobeSuite: 'Adobe Creative Suite',
        figma: 'Figma',
        marketingCreatives: 'Маркетингові креативи',
      },
    },
    contact: {
      title: 'Створімо разом',
      subtitle: 'Секцію контактів видалено.',
    },
    appIcons: {
      backToPortfolio: 'Повернутися до портфоліо',
      backToPortfolioAria: 'Повернутися до портфоліо',
      eyebrow: 'Мобільний брендинг',
      titlePrimary: 'Іконки додатків та',
      titleEmphasis: 'Сплеш-екрани',
      lead: 'Колекція яскравих іконок та сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою візуальною айдентикою.',
      appIconsTitle: 'Іконки додатків',
      splashScreensTitle: 'Сплеш-екрани',
      fullCompositionTitle: 'Повна композиція',
      fullCompositionAlt: 'Повна композиція іконок і сплеш-екранів',
      viewMoreProjects: 'Переглянути більше проєктів',
      footerRights: 'Усі права захищено.',
      next: 'Далі',
      previous: 'Назад',
      iconLabels: [
        'Elemental Quest — Alt Icon',
        'Monstrous Evorise',
        'Cat Wars',
        'Fatty Fish',
        'Feed Me',
        'Elemental Quest',
        'RevBack',
        'Selara',
        'Sky Hero',
      ],
      splashLabels: [
        'Cat Wars',
        'Elemental Craft',
        'Elemental Quest',
        'Fatty Fish',
        'Feed Me',
        'Monstrous Evorise',
        'RevBack',
        'Selara',
      ],
    },
    appStoreScreenshots: {
      backToPortfolio: 'Назад до портфоліо',
      headerTag: 'Скріншоти App Store',
      eyebrow: 'Маркетинг',
      title: 'Скріншоти App Store',
      lead: '',
    },
    namelaka: {
      backToPortfolio: 'Назад до портфоліо',
      headerTag: 'Namelaka',
      eyebrow: 'UI/UX дизайн',
      title: 'Namelaka Icons & Illustration',
    },
    mindzy: {
      backToPortfolio: 'Назад до портфоліо',
      eyebrow: 'UI/UX дизайн',
      title: 'Mindzy – Brain Training',
      lead: 'Добірка інтерфейсів Mindzy та відеопереглядів гри.',
      interfaceTitle: 'Інтерфейси ігор',
      videoTitle: 'Відео геймплею',
    },
    marketingVideo: {
      backToPortfolio: 'Назад до портфоліо',
      headerTag: 'Моушн-дизайн',
      eyebrow: 'Моушн-дизайн',
      title: 'Маркетингові відео',
      lead: 'Колекція рекламних відео та моушн-графіки для маркетингових кампаній мобільних додатків.',
      featuredTitle: 'Вибрані відео',
      allVideosTitle: 'Усі відео',
    },
    elementalQuest: {
      backToPortfolio: 'Назад до портфоліо',
      headerTag: 'Ігрове мистецтво',
      eyebrow: 'Ігрове мистецтво та дизайн',
      title: 'Elemental Quest',
      lead: 'Дизайн ігрової карти та візуальні ресурси для пригодницької гри-головоломки.',
      logoAlt: 'Логотип Elemental Quest',
      mapAlt: 'Ігрова карта Elemental Quest',
    },
    combatPlanes: {
      backToPortfolio: 'Назад до портфоліо',
      headerTag: 'Ігрове мистецтво',
      eyebrow: 'Ігрове мистецтво та дизайн',
      title: 'Combat Planes',
      lead: 'Дизайн персонажів, скіни літаків та ігрові карти для мобільної гри з повітряними боями.',
      logoAlt: 'Логотип Combat Planes',
      galleryAlt: 'Ігрове мистецтво Combat Planes',
    },
    fattyFish: {
      backToPortfolio: 'Назад до портфоліо',
      headerTag: 'Ігрове мистецтво',
      eyebrow: 'Ігрове мистецтво та дизайн',
      title: 'Fatty Fish',
      lead: 'Дизайн персонажів, ігрові об\'єкти та візуальні ресурси для веселої водної мобільної гри.',
      logoAlt: 'Логотип Fatty Fish',
      galleryAlt: 'Ігрове мистецтво Fatty Fish',
    },
    footer: {
      rights: 'Усі права захищено.',
      portfolio: 'Портфоліо',
      privacy: 'Політика конфіденційності',
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Helper to get category translation
export const getCategoryTranslation = (category: string, t: Translations): string => {
  const categoryMap: Record<string, keyof Translations['work']['categories']> = {
    'Brand design': 'brandDesign',
    'UI/UX design': 'uiuxDesign',
    'Marketing and advertising': 'marketing',
    'Illustration': 'illustration',
    'Game design': 'gameDesign',
    'Games': 'games',
  };
  const key = categoryMap[category];
  return key ? t.work.categories[key] : category;
};

// Helper to get skill translation
export const getSkillTranslation = (skill: string, t: Translations): string => {
  const skillMap: Record<string, keyof Translations['about']['skills']> = {
    'Graphic Design': 'graphicDesign',
    'UI/UX Design': 'uiuxDesign',
    'Game Art & Assets': 'gameArt',
    'Digital Illustration': 'digitalIllustration',
    'Brand Identity': 'brandIdentity',
    'Adobe Creative Suite': 'adobeSuite',
    'Figma': 'figma',
    'Marketing Creatives': 'marketingCreatives',
  };
  const key = skillMap[skill];
  return key ? t.about.skills[key] : skill;
};
