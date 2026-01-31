import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'uk';

interface Translations {
  // Navigation
  nav: {
    work: string;
    about: string;
    cv: string;
    hireMe: string;
  };
  // Hero
  hero: {
    available: string;
    heading1: string;
    heading2: string;
    viewWork: string;
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
    };
    emptyState: string;
    viewProject: string;
    technologies: string;
  };
  // About
  about: {
    discovery: string;
    heading1: string;
    heading2: string;
    experience: string;
    years: string;
    proficiencies: string;
    bio: string;
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
    },
    hero: {
      available: 'Available for new projects',
      heading1: 'Where ideas turn into',
      heading2: 'visual reality.',
      viewWork: 'View My Work',
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
      },
      emptyState: 'Quietly awaiting new masterpieces...',
      viewProject: 'View Project',
      technologies: 'Technologies',
    },
    about: {
      discovery: 'Discovery',
      heading1: 'Designing',
      heading2: 'Through Craft.',
      experience: 'Experience',
      years: 'Years',
      proficiencies: 'Proficiencies',
      bio: "My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.",
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
    },
    hero: {
      available: 'Відкрита для нових проєктів',
      heading1: 'Де ідеї перетворюються на',
      heading2: 'візуальну реальність.',
      viewWork: 'Переглянути роботи',
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
      },
      emptyState: 'Тихо очікуємо нових шедеврів...',
      viewProject: 'Переглянути проєкт',
      technologies: 'Технології',
    },
    about: {
      discovery: 'Знайомство',
      heading1: 'Дизайн',
      heading2: 'Через майстерність.',
      experience: 'Досвід',
      years: 'Років',
      proficiencies: 'Навички',
      bio: "Мене звати Анна Сергієнко. Я працюю графічним дизайнером вже 5 років. Спеціалізуюся на створенні цілісних візуальних мов у різних медіа. Чи то створення унікальної ідентичності бренду, проєктування інтуїтивних інтерфейсів користувача, чи розробка захоплюючих ігрових ресурсів — я привношу креативність і точність у кожен проєкт.",
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
