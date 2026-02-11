/**
 * Utility helper functions
 * @module utils/helpers
 */

/**
 * Escapes HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text safe for innerHTML
 * @example
 * const userInput = '<script>alert("XSS")</script>';
 * const safe = escapeHtml(userInput);
 * // Returns: '&lt;script&gt;alert("XSS")&lt;/script&gt;'
 */
export const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

/**
 * Shows or hides an element
 * @param {HTMLElement} element - Element to show/hide
 * @param {boolean} visible - Whether to show the element
 * @example
 * const modal = document.getElementById('modal');
 * setVisible(modal, true); // Shows modal
 * setVisible(modal, false); // Hides modal
 */
export const setVisible = (element, visible) => {
    element.style.display = visible ? 'block' : 'none';
};
