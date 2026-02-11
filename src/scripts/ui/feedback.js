/**
 * Feedback UI utilities
 * Handles visual feedback updates for validation results
 * @module ui/feedback
 */

import { escapeHtml } from '../utils/helpers.js';
import { t } from '../i18n/i18n.js';

/**
 * Card status types
 * @type {Object<string, string>}
 */
export const CardStatus = {
    VALID: 'valid',
    ERROR: 'error',
    NEUTRAL: 'neutral'
};

/**
 * Updates a card's visual status
 * @param {HTMLElement} card - The card element
 * @param {string} status - One of CardStatus values
 */
export const setCardStatus = (card, status) => {
    card.className = `visual-breakdown__card visual-breakdown__card--${status}`;
};

/**
 * Renders error messages to a feedback container
 * @param {HTMLElement} container - The feedback container element
 * @param {string[]} errors - Array of error keys (will be translated automatically)
 */
export const renderErrors = (container, errors) => {
    container.innerHTML = '';
    errors.forEach(errorKey => {
        const div = document.createElement('div');
        div.className = 'message--error';
        const translatedError = t(errorKey);
        
        // Check if translation contains HTML tags
        if (/<\/?[a-z][\s\S]*>/i.test(translatedError)) {
            div.innerHTML = `❌ ${translatedError}`;
        } else {
            div.textContent = `❌ ${translatedError}`;
        }
        container.appendChild(div);
    });
};

/**
 * Renders a success message to a feedback container
 * @param {HTMLElement} container - The feedback container element
 * @param {string} message - Success message (plain text, will be escaped)
 */
export const renderSuccess = (container, message) => {
    container.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'message--success';
    div.textContent = `✅ ${message}`;
    container.appendChild(div);
};

/**
 * Renders an info message to a feedback container
 * @param {HTMLElement} container - The feedback container element
 * @param {string} message - Info message (plain text, will be escaped)
 */
export const renderInfo = (container, message) => {
    const div = document.createElement('div');
    div.className = 'message--info';
    div.textContent = `ℹ️ ${message}`;
    container.appendChild(div);
};

/**
 * Generates the SemVer impact HTML tag
 * @param {'MAJOR' | 'MINOR' | 'PATCH' | 'NONE'} impact - SemVer impact level
 * @returns {string} HTML string for the semver tag
 */
export const getSemVerTag = (impact) => {
    const tagClasses = {
        MAJOR: 'sv-major',
        MINOR: 'sv-minor',
        PATCH: 'sv-patch',
        NONE: 'sv-none'
    };
    const tagLabels = {
        MAJOR: 'MAJOR',
        MINOR: 'MINOR',
        PATCH: 'PATCH',
        NONE: 'NO RELEASE'
    };
    
    const cssClass = tagClasses[impact] || 'sv-none';
    const label = tagLabels[impact] || 'NO RELEASE';
    
    return `<span class="semver-tag ${cssClass}">${label}</span>`;
};

/**
 * Updates the global validation result box
 * @param {HTMLElement} resultBox - The result box element
 * @param {boolean} isValid - Whether the commit is globally valid
 */
export const updateResultBox = (resultBox, isValid) => {
    resultBox.innerHTML = '';
    const icon = isValid ? '✅' : '⚠️';
    const strongText = isValid ? t('validation.result.valid') : t('validation.result.invalid');
    const description = isValid ? t('validation.result.validDescription') : t('validation.result.invalidDescription');
    
    const iconText = document.createTextNode(`${icon} `);
    const strong = document.createElement('strong');
    strong.textContent = strongText;
    const descText = document.createTextNode(description);
    
    resultBox.appendChild(iconText);
    resultBox.appendChild(strong);
    resultBox.appendChild(descText);
    resultBox.className = isValid ? 'validation-result--valid' : 'validation-result--invalid';
};

/**
 * Renders a success message with safe HTML content (for internal use only)
 * @param {HTMLElement} container - The feedback container element
 * @param {string} htmlContent - Safe HTML content (generated internally, not user input)
 */
export const renderSuccessWithHtml = (container, htmlContent) => {
    container.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'message--success';
    div.innerHTML = `✅ ${htmlContent}`;
    container.appendChild(div);
};

/**
 * Renders an info message with safe HTML content (for internal use only)
 * @param {HTMLElement} container - The feedback container element
 * @param {string} htmlContent - Safe HTML content (generated internally, not user input)
 */
export const renderInfoWithHtml = (container, htmlContent) => {
    const div = document.createElement('div');
    div.className = 'message--info';
    div.innerHTML = `ℹ️ ${htmlContent}`;
    container.appendChild(div);
};
