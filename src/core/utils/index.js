import { getLenis } from '../hooks';

/**
 * Scroll smoothly to an element by id
 * @param {string} id 
 */
export const scrollToSection = (id) => {
  const cleanId = id.replace('#', '');
  const element = document.getElementById(cleanId);
  if (element) {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(element, { offset: -80, duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

/**
 * Format string numbers to currency format (VND)
 * @param {number|string} amount 
 * @returns {string}
 */
export const formatCurrency = (amount) => {
  if (!amount) return '';
  if (typeof amount === 'string' && amount.includes('VNĐ')) return amount;
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(amount));
};

/**
 * Truncate text with ellipsis
 * @param {string} text 
 * @param {number} maxLen 
 * @returns {string}
 */
export const truncateText = (text, maxLen = 100) => {
  if (!text || text.length <= maxLen) return text;
  return text.slice(0, maxLen) + '...';
};

/**
 * Remove Vietnamese diacritics / accents (convert to non-accented form)
 * @param {string} str
 * @returns {string}
 */
export const removeVietnameseTones = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll('đ', 'd')
    .replaceAll('Đ', 'D');
};

/**
 * Format student name based on active language (unaccented for English)
 * @param {string} name
 * @param {string} lang
 * @returns {string}
 */
export const formatStudentName = (name, lang = 'vi') => {
  if (!name || typeof name !== 'string') return '';
  if (lang?.startsWith('en')) {
    return removeVietnameseTones(name);
  }
  return name;
};
