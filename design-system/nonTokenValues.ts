export const nonTokenValues = {
  /**
   * Viewport- or content-specific sizing that doesn't map to spacing tokens.
   * Kept here to avoid scattered magic numbers.
   */
  layout: {
    fullViewportHeight: '100vh',
    fullViewportWidth: '100vw',
    navWidth: '95%',
    navMaxWidth: '1024px',
    heroContentMaxWidth: '960px',
    heroLeadMaxWidth: '560px',
    contactMaxWidth: '720px',
    contactSubtitleMaxWidth: '480px',
    workHeadingMaxWidth: '520px',
    workModalMaxWidth: '1150px',
    workModalMaxHeight: '90vh',
    workModalMediaHeight: '300px',
    aboutExperienceMaxWidth: '200px',
    appIconsHeroLeadMaxWidth: '560px',
    aboutWatermarkFontSize: '20vw',
    aboutWatermarkOffsetX: '-5%',
  },
  /**
   * Component-specific measurements that aren't part of the spacing scale.
   */
  sizing: {
    progressBarHeight: '3px',
    hairline: '1px',
    scrollbarWidth: '6px',
    heroFloatLeftOffset: '-48px',
    heroFloatRightOffset: '-48px',
    heroFloatRightTop: '80px',
    heroFloatLeftAlt: '40px',
    heroFloatRightBottom: '40px',
    carouselShellPadding: '0 20px',
    carouselSlidePadding: '0 8px',
    carouselSlidePaddingSm: '0 4px',
    carouselCaptionOffsetSm: '10px',
    carouselCaptionOffsetLg: '18px',
    dashedBorderWidth: '2px',
  },
  /**
   * Effects using alpha colors/gradients and blur values not defined in tokens.
   */
  effects: {
    blurBlob: '120px',
    blurSoft: '10px',
    blurGlass: '12px',
    blurStrong: '18px',
    blurMenu: '20px',
    blobOpacity: 0.7,
    glassWhite80: 'rgba(255, 255, 255, 0.8)',
    glassWhite70: 'rgba(255, 255, 255, 0.7)',
    glassWhite50: 'rgba(255, 255, 255, 0.5)',
    glassWhite95: 'rgba(255, 255, 255, 0.95)',
    glassWhite10: 'rgba(255, 255, 255, 0.1)',
    glassWhite20: 'rgba(255, 255, 255, 0.2)',
    overlayDark95: 'rgba(15, 23, 42, 0.95)',
    overlayDark80: 'rgba(15, 23, 42, 0.8)',
    overlayWhite60: 'rgba(255, 255, 255, 0.6)',
    sectionWash: 'rgba(248, 250, 252, 0.6)',
    overlayWhite98: 'rgba(255, 255, 255, 0.98)',
    overlayWhite40: 'rgba(255, 255, 255, 0.4)',
    blobBlue: 'rgba(59, 130, 246, 0.2)',
    blobPurple: 'rgba(124, 58, 237, 0.2)',
    blobPink: 'rgba(236, 72, 153, 0.2)',
    cardOverlayGradient: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)',
    aboutOverlayGradient: 'linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)',
    appIconsBackground: 'linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6))',
    carouselBackground: 'linear-gradient(180deg, #020617, #0f172a, #020617)',
    carouselBackdrop: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%)',
    compositionGradient: 'linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6))',
    carouselDropShadow: 'drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45))',
    carouselCardShadow: '0 24px 50px rgba(0, 0, 0, 0.35)',
    carouselCaptionMuted: 'rgba(226, 232, 240, 0.8)',
    carouselCardOpacity: 0.55,
    carouselCaptionOpacity: 0.6,
  },
  /**
   * Motion offsets/scales used in transforms where tokens don't exist.
   */
  motion: {
    floatOffset: '-20px',
    revealOffset: '30px',
    hoverLiftSm: '-1px',
    hoverLiftMd: '-4px',
    hoverLiftLg: '-8px',
    arrowDrop: '4px',
    iconLift: '-10px',
    scaleHover: 1.02,
    scaleActive: 1.05,
    scaleDown: 0.9,
    scaleCaptionDown: 0.92,
  },
  /**
   * Layering values tied to UI structure rather than a global token scale.
   */
  zIndex: {
    background: 0,
    foreground: 1,
    stickyHeader: 20,
    mobileMenu: 40,
    nav: 50,
    modal: 100,
    closeButton: 2,
    progress: 100,
  },
  /**
   * Behavioral thresholds (not visual tokens).
   */
  navigation: {
    scrollThreshold: 20,
  },
  /**
   * Slider configuration values not covered by design tokens.
   */
  carousel: {
    centerPaddingLg: '60px',
    centerPaddingMd: '40px',
    centerPaddingSm: '0px',
    slidesToShowLg: 5,
    slidesToShowMd: 3,
    slidesToShowSm: 3,
    slidesToScrollSm: 1,
    speed: 500,
    autoplaySpeed: 2800,
    breakpointLg: 1024,
    breakpointSm: 640,
    breakpointXs: 520,
  },
} as const;
