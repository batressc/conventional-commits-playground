/**
 * Main entry point
 * Initializes all modules on DOMContentLoaded
 * @module main
 */

import { initTabs } from './ui/tabs.js';
import { initPlayground } from './ui/playground.js';
import { initLanguageSwitcher } from './ui/languageSwitcher.js';
import { initI18n } from './i18n/i18n.js';

/**
 * Initializes the application
 */
const init = () => {
    // Initialize i18n first to set language and translate DOM
    initI18n();
    
    // Initialize language switcher
    initLanguageSwitcher();
    
    // Initialize UI components
    initTabs();
    initPlayground();
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM already loaded
    init();
}
