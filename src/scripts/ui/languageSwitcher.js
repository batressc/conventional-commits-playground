/**
 * Language switcher component
 * Handles language selection UI and interactions
 * @module ui/languageSwitcher
 */

import { setLanguage, getCurrentLanguage } from '../i18n/i18n.js';

/**
 * Updates the active state of language buttons
 */
const updateActiveButton = () => {
    const currentLang = getCurrentLanguage();
    const buttons = document.querySelectorAll('.lang-btn');
    
    buttons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) {
            btn.classList.add('lang-btn--active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('lang-btn--active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
};

/**
 * Handles language button click events
 * @param {Event} event - Click event
 */
const handleLanguageChange = (event) => {
    const btn = event.target.closest('.lang-btn');
    if (!btn) return;
    
    const lang = btn.getAttribute('data-lang');
    if (lang) {
        setLanguage(lang);
        updateActiveButton();
    }
};

/**
 * Initializes the language switcher functionality
 * Sets up event listeners and initial state
 */
export const initLanguageSwitcher = () => {
    const switcher = document.querySelector('.language-switcher');
    if (!switcher) {
        console.warn('Language switcher not found in DOM');
        return;
    }
    
    // Add click handler
    switcher.addEventListener('click', handleLanguageChange);
    
    // Set initial active state
    updateActiveButton();
};
