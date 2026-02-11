/**
 * Playground functionality
 * Handles the commit message input and validation display
 * @module ui/playground
 */

import { parseCommitMessage } from '../parser/commitParser.js';
import { validateHeader, validateBody, validateFooter } from '../parser/validators.js';
import {
    CardStatus,
    setCardStatus,
    renderErrors,
    renderSuccess,
    renderInfo,
    getSemVerTag,
    updateResultBox,
    setVisible
} from './feedback.js';

/**
 * DOM element references for the playground
 * @type {Object}
 */
let elements = null;

/**
 * Gets references to all required DOM elements
 * @returns {Object} Object containing all element references
 */
const getElements = () => ({
    input: document.getElementById('commit-input'),
    resultBox: document.getElementById('validation-result'),
    visualStack: document.getElementById('visual-stack'),
    // Cards
    cardHeader: document.getElementById('card-header'),
    cardBody: document.getElementById('card-body'),
    cardFooter: document.getElementById('card-footer'),
    // Content areas
    contentHeader: document.getElementById('content-header'),
    contentBody: document.getElementById('content-body'),
    contentFooter: document.getElementById('content-footer'),
    // Feedback areas
    fbHeader: document.getElementById('feedback-header'),
    fbBody: document.getElementById('feedback-body'),
    fbFooter: document.getElementById('feedback-footer')
});

/**
 * Handles header validation and updates UI
 * @param {Object} parsed - Parsed commit message
 */
const handleHeaderValidation = (parsed) => {
    const { header, hasBreakingFooter } = parsed;
    const { cardHeader, contentHeader, fbHeader } = elements;

    contentHeader.textContent = header;
    const result = validateHeader(header, hasBreakingFooter);

    if (result.isValid) {
        setCardStatus(cardHeader, CardStatus.VALID);
        
        let feedbackHtml = `<div class="message--success">✅ Formato correcto. Impacto: ${getSemVerTag(result.semVerImpact)}</div>`;
        
        // Add info notes about breaking changes
        if (result.semVerImpact === 'MAJOR') {
            if (hasBreakingFooter && !result.hasBreakingIndicator) {
                feedbackHtml += '<div class="message--info">ℹ️ Impacto elevado a MAJOR debido a <code>BREAKING CHANGE</code> en footer.</div>';
            } else if (result.hasBreakingIndicator) {
                feedbackHtml += '<div class="message--info">ℹ️ Impacto MAJOR indicado por <code>!</code>.</div>';
            }
        }
        
        fbHeader.innerHTML = feedbackHtml;
    } else {
        setCardStatus(cardHeader, CardStatus.ERROR);
        renderErrors(fbHeader, result.errors);
    }

    return result;
};

/**
 * Handles body validation and updates UI
 * @param {Object} parsed - Parsed commit message
 */
const handleBodyValidation = (parsed) => {
    const { lines, bodyLines, footerStartIndex } = parsed;
    const { cardBody, contentBody, fbBody } = elements;

    if (lines.length <= 1) {
        setVisible(cardBody, false);
        return { errors: [] };
    }

    setVisible(cardBody, true);
    const bodyText = bodyLines.join('\n').trim();
    contentBody.textContent = bodyText;

    const result = validateBody(lines, footerStartIndex);

    if (result.isEmpty && result.errors.length === 0) {
        setVisible(cardBody, false);
    } else if (result.errors.length > 0) {
        setCardStatus(cardBody, CardStatus.ERROR);
        renderErrors(fbBody, result.errors);
    } else {
        setCardStatus(cardBody, CardStatus.VALID);
        renderSuccess(fbBody, 'Cuerpo válido.');
    }

    return result;
};

/**
 * Handles footer validation and updates UI
 * @param {Object} parsed - Parsed commit message
 */
const handleFooterValidation = (parsed) => {
    const { footerLines, hasBreakingFooter } = parsed;
    const { cardFooter, contentFooter, fbFooter } = elements;

    if (footerLines.length === 0) {
        setVisible(cardFooter, false);
        return { errors: [] };
    }

    setVisible(cardFooter, true);
    contentFooter.textContent = footerLines.join('\n');

    const result = validateFooter(footerLines);

    if (result.errors.length > 0) {
        setCardStatus(cardFooter, CardStatus.ERROR);
        renderErrors(fbFooter, result.errors);
    } else {
        setCardStatus(cardFooter, CardStatus.VALID);
        const extra = hasBreakingFooter ? ' <b>(Incluye BREAKING CHANGE)</b>' : '';
        renderSuccess(fbFooter, `Footer(s) válido(s).${extra}`);
    }

    return result;
};

/**
 * Handles input changes and runs validation
 * @param {Event} event - Input event
 */
const handleInput = (event) => {
    const text = event.target.value;
    const { resultBox, visualStack } = elements;

    // Handle empty input
    if (text.trim() === '') {
        setVisible(resultBox, false);
        visualStack.style.display = 'none';
        return;
    }

    // Show validation UI
    setVisible(resultBox, true);
    visualStack.style.display = 'flex';

    // Parse and validate
    const parsed = parseCommitMessage(text);
    
    const headerResult = handleHeaderValidation(parsed);
    const bodyResult = handleBodyValidation(parsed);
    const footerResult = handleFooterValidation(parsed);

    // Update global status
    const isGloballyValid = 
        headerResult.isValid && 
        bodyResult.errors.length === 0 && 
        footerResult.errors.length === 0;

    updateResultBox(resultBox, isGloballyValid);
};

/**
 * Initializes the playground functionality
 * Sets up the input event listener
 */
export const initPlayground = () => {
    elements = getElements();
    
    if (elements.input) {
        elements.input.addEventListener('input', handleInput);
    }
};
