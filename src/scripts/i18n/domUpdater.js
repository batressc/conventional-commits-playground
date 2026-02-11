/**
 * DOM Updater for i18n
 * Updates DOM elements based on current language
 * @module i18n/domUpdater
 */

import { t } from './i18n.js';

/**
 * Updates all translatable elements in the DOM
 * Searches for elements with data-i18n-* attributes and updates them
 */
export const updateDOM = () => {
    // Update elements with data-i18n-key (textContent)
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const key = el.getAttribute('data-i18n-key');
        const translated = t(key);
        
        // Check if translation contains HTML
        if (/<\/?[a-z][\s\S]*>/i.test(translated)) {
            el.innerHTML = translated;
        } else {
            el.textContent = translated;
        }
    });
    
    // Update elements with data-i18n-placeholder (placeholder attribute)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    // Update elements with data-i18n-aria-label (aria-label attribute)
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria-label');
        el.setAttribute('aria-label', t(key));
    });
    
    // Update elements with data-i18n-title (title attribute for tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.setAttribute('title', t(key));
    });
    
    // Update data-info attributes for tooltips (special case)
    document.querySelectorAll('[data-i18n-info]').forEach(el => {
        const key = el.getAttribute('data-i18n-info');
        el.setAttribute('data-info', t(key));
    });
};
