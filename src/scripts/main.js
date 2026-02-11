/**
 * Main entry point
 * Initializes all modules on DOMContentLoaded
 * @module main
 */

import { initTabs } from './ui/tabs.js';
import { initPlayground } from './ui/playground.js';

/**
 * Initializes the application
 */
const init = () => {
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
