/**
 * Internationalization (i18n) engine
 * Vanilla JavaScript implementation for bilingual support
 * @module i18n/i18n
 */

import en from './locales/en.js';
import es from './locales/es.js';
import { updateDOM } from './domUpdater.js';

/**
 * Available translations
 * @type {Object}
 */
const translations = { en, es };

/**
 * Current active language
 * @type {string}
 */
let currentLang = 'en'; // Default language is English

/**
 * Translates a key using dot notation
 * @param {string} key - Translation key (e.g., 'header.title')
 * @returns {string} Translated text or key if not found
 * @example
 * t('header.title') // Returns: 'Conventional Commits'
 */
export const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value !== undefined ? value : key;
};

/**
 * Gets the current active language
 * @returns {string} Current language code ('en' or 'es')
 */
export const getCurrentLanguage = () => currentLang;

/**
 * Detects the user's preferred language
 * Priority: localStorage > browser language > default (en)
 * @returns {string} Detected language code
 */
export const detectLanguage = () => {
    // Check localStorage first
    const stored = localStorage.getItem('preferredLanguage');
    if (stored && translations[stored]) {
        return stored;
    }
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.startsWith('es')) {
        return 'es';
    }
    
    // Default to English
    return 'en';
};

/**
 * Sets the active language and updates the DOM
 * @param {string} lang - Language code ('en' or 'es')
 * @example
 * setLanguage('es'); // Changes to Spanish
 */
export const setLanguage = (lang) => {
    if (!translations[lang]) {
        console.warn(`Language '${lang}' not available. Keeping current language.`);
        return;
    }
    
    currentLang = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update document title
    document.title = t('meta.title');
    
    // Persist preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all translatable content in DOM
    updateDOM();
};

/**
 * Initializes the i18n system
 * Detects language and applies initial translations
 */
export const initI18n = () => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
};
