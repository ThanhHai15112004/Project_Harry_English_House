/**
 * Autoload all JSON database files in src/db/ using Vite's import.meta.glob
 */
const dbModules = import.meta.glob('./*.json', { eager: true });

/**
 * Autoload all static image assets in src/assets/ so Vite automatically bundles and hashes them on production
 */
const assetModules = import.meta.glob(
  '/src/assets/**/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG,WEBP,gif,GIF,ico,ICO}',
  { eager: true, import: 'default' }
);

/**
 * Helper to recursively resolve static image path strings (e.g. "/src/assets/...") to bundled asset URLs
 */
const resolveAssets = (data) => {
  if (!data) return data;
  if (typeof data === 'string') {
    if (assetModules[data]) {
      return assetModules[data];
    }
    const fromAlias = data.replace(/^@\/assets\//, '/src/assets/');
    if (assetModules[fromAlias]) {
      return assetModules[fromAlias];
    }
    return data;
  }
  if (Array.isArray(data)) {
    return data.map(resolveAssets);
  }
  if (typeof data === 'object') {
    const resolvedObj = {};
    for (const key in data) {
      resolvedObj[key] = resolveAssets(data[key]);
    }
    return resolvedObj;
  }
  return data;
};

const masterDb = {};

for (const path in dbModules) {
  // Extract key name (e.g., './courses.json' -> 'courses')
  const match = path.match(/\.\/([a-zA-Z0-9-_]+)\.json$/);
  if (match) {
    const key = match[1];
    if (key !== 'db') {
      const rawData = dbModules[path].default || dbModules[path];
      masterDb[key] = resolveAssets(rawData);
    }
  }
}

export const db = masterDb;
export const teacher = masterDb.teacher || {};
export const courses = masterDb.courses || [];
export const roadmap = masterDb.roadmap || {};
export const pricing = masterDb.pricing || {};
export const certificates = masterDb.certificates || [];
export const testimonials = masterDb.testimonials || {};
export const media = masterDb.media || {};
export const methodology = masterDb.methodology || {};
export const classes = masterDb.classes || {};
export const programs = masterDb.programs || {};

export default masterDb;
