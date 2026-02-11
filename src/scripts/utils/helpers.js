/**
 * Utility helper functions
 * @module utils/helpers
 */

/**
 * Escapes HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text safe for innerHTML
 */
export const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

/**
 * Checks if a string is empty or contains only whitespace
 * @param {string} str - String to check
 * @returns {boolean} True if empty or whitespace only
 */
export const isBlank = (str) => !str || str.trim() === '';

/**
 * Joins array elements with newlines and trims the result
 * @param {string[]} lines - Array of lines
 * @returns {string} Joined and trimmed string
 */
export const joinLines = (lines) => lines.join('\n').trim();
