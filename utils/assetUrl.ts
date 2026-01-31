const assetUrl = (path: string): string => new URL(`../assets/${path}`, import.meta.url).href;

export default assetUrl;
