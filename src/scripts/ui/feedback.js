/**
 * Feedback UI utilities
 * Handles visual feedback updates for validation results
 * @module ui/feedback
 */

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
 * @param {string[]} errors - Array of error messages (can contain HTML)
 */
export const renderErrors = (container, errors) => {
    container.innerHTML = errors
        .map(error => `<div class="message--error">❌ ${error}</div>`)
        .join('');
};

/**
 * Renders a success message to a feedback container
 * @param {HTMLElement} container - The feedback container element
 * @param {string} message - Success message (can contain HTML)
 */
export const renderSuccess = (container, message) => {
    container.innerHTML = `<div class="message--success">✅ ${message}</div>`;
};

/**
 * Renders an info message to a feedback container
 * @param {HTMLElement} container - The feedback container element
 * @param {string} message - Info message (can contain HTML)
 */
export const renderInfo = (container, message) => {
    container.innerHTML += `<div class="message--info">ℹ️ ${message}</div>`;
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
    if (isValid) {
        resultBox.innerHTML = '✅ <strong>Mensaje Válido</strong> según la especificación.';
        resultBox.className = 'validation-result--valid';
    } else {
        resultBox.innerHTML = '⚠️ <strong>Hay errores</strong> en el formato. Revisa las tarjetas abajo.';
        resultBox.className = 'validation-result--invalid';
    }
};

/**
 * Shows or hides an element
 * @param {HTMLElement} element - Element to show/hide
 * @param {boolean} visible - Whether to show the element
 */
export const setVisible = (element, visible) => {
    element.style.display = visible ? 'block' : 'none';
};
