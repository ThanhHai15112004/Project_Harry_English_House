/**
 * Autoload all JSON database files in src/db/ using Vite's import.meta.glob
 */
const dbModules = import.meta.glob('./*.json', { eager: true });
const masterDb = {};

for (const path in dbModules) {
  // Extract key name (e.g., './courses.json' -> 'courses')
  const match = path.match(/\.\/([a-zA-Z0-9-_]+)\.json$/);
  if (match) {
    const key = match[1];
    if (key !== 'db') {
      masterDb[key] = dbModules[path].default || dbModules[path];
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

export default masterDb;
