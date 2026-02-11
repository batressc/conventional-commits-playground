/**
 * Commit message validators
 * Pure validation functions for header, body, and footer
 * @module parser/validators
 */

import { HEADER_REGEX, FOOTER_LINE_REGEX } from '../constants/commitTypes.js';

/**
 * @typedef {Object} HeaderValidationResult
 * @property {boolean} isValid - Whether the header is valid
 * @property {boolean} hasBreakingIndicator - Whether ! is present before colon
 * @property {string} semVerImpact - 'MAJOR' | 'MINOR' | 'PATCH' | 'NONE'
 * @property {string[]} errors - List of error messages
 */

/**
 * Validates the commit header
 * @param {string} header - The header line
 * @param {boolean} hasBreakingFooter - Whether a BREAKING CHANGE footer exists
 * @returns {HeaderValidationResult} Validation result
 */
export const validateHeader = (header, hasBreakingFooter = false) => {
    const errors = [];
    let isValid = false;
    let hasBreakingIndicator = false;
    let semVerImpact = 'NONE';

    if (HEADER_REGEX.test(header)) {
        isValid = true;
        
        const parts = header.split(':');
        const prefix = parts[0];
        hasBreakingIndicator = prefix.includes('!');

        // Determine SemVer impact
        if (hasBreakingIndicator || hasBreakingFooter) {
            semVerImpact = 'MAJOR';
        } else if (prefix.startsWith('feat')) {
            semVerImpact = 'MINOR';
        } else if (prefix.startsWith('fix')) {
            semVerImpact = 'PATCH';
        } else {
            semVerImpact = 'NONE';
        }
    } else {
        errors.push('El formato debe ser: <code>tipo(scope): descripción</code>');
    }

    return {
        isValid,
        hasBreakingIndicator,
        hasBreakingFooter,
        semVerImpact,
        errors
    };
};

/**
 * @typedef {Object} BodyValidationResult
 * @property {boolean} isValid - Whether the body is valid
 * @property {boolean} isEmpty - Whether body has content
 * @property {string[]} errors - List of error messages
 */

/**
 * Validates the commit body
 * @param {string[]} lines - All original commit lines
 * @param {number} footerStartIndex - Index where footer starts (-1 if none)
 * @returns {BodyValidationResult} Validation result
 */
export const validateBody = (lines, footerStartIndex = -1) => {
    const errors = [];
    
    // If only header, body is not required
    if (lines.length <= 1) {
        return { isValid: true, isEmpty: true, errors };
    }

    // Get body lines
    let bodyLines;
    if (footerStartIndex !== -1) {
        bodyLines = lines.slice(1, footerStartIndex - 1);
    } else {
        bodyLines = lines.slice(1);
    }

    const bodyText = bodyLines.join('\n').trim();
    const isEmpty = bodyText === '';

    // Rule: Blank line after header
    if (lines[1].trim() !== '') {
        errors.push('Falta una línea en blanco entre la cabecera y el cuerpo.');
    }

    // Check for misplaced BREAKING CHANGE in body
    if (/^BREAKING CHANGE:/m.test(bodyText)) {
        if (footerStartIndex !== -1) {
            errors.push("Detectado 'BREAKING CHANGE' en el cuerpo y también en el footer. ¿Es un duplicado? Si es distinto, asegúrate de separarlo con líneas en blanco.");
        } else {
            errors.push("Parece que tienes un 'BREAKING CHANGE' pegado al cuerpo. Debes dejar una línea en blanco antes para que sea un footer válido.");
        }
    }

    return {
        isValid: errors.length === 0,
        isEmpty,
        bodyText,
        errors
    };
};

/**
 * @typedef {Object} FooterValidationResult
 * @property {boolean} isValid - Whether footer is valid
 * @property {boolean} hasBreakingChange - Whether BREAKING CHANGE footer exists
 * @property {string[]} errors - List of error messages
 */

/**
 * Validates footer lines
 * @param {string[]} footerLines - Array of footer lines
 * @returns {FooterValidationResult} Validation result
 */
export const validateFooter = (footerLines) => {
    const errors = [];
    let hasBreakingChange = false;

    if (footerLines.length === 0) {
        return { isValid: true, hasBreakingChange, errors };
    }

    footerLines.forEach((line, index) => {
        if (line.trim() === '') return;

        const tokenMatch = line.match(FOOTER_LINE_REGEX);

        if (tokenMatch) {
            const token = tokenMatch[1];
            const separator = tokenMatch[2];
            const value = tokenMatch[3];

            if (token === 'BREAKING CHANGE' || token === 'BREAKING-CHANGE') {
                hasBreakingChange = true;
                
                // Strict validation for BREAKING CHANGE
                if (separator !== ': ') {
                    errors.push('Un footer de <code>BREAKING CHANGE</code> debe usar exactamente dos puntos y espacio (<code>: </code>) como separador.');
                } else if (!value || value.trim() === '') {
                    errors.push('Un footer de <code>BREAKING CHANGE</code> debe tener una descripción.');
                }
            } else {
                // Validation for other tokens
                if (/\s/.test(token)) {
                    if (token.toUpperCase() === 'BREAKING CHANGE') {
                        errors.push(`El token '${token}' debe estar en MAYÚSCULAS: <code>BREAKING CHANGE</code>.`);
                    } else if (token.toUpperCase() === 'BREAKING CHANGES') {
                        errors.push(`El token '${token}' es incorrecto. Usa <code>BREAKING CHANGE</code> (singular).`);
                    } else {
                        errors.push(`El token '${token}' no debe contener espacios (usa guiones, ej: <code>Reviewed-by</code>).`);
                    }
                }
            }
        } else {
            // First line must be valid footer format
            if (index === 0) {
                errors.push(`La línea '${line}' no parece un footer válido (Formato: <code>Token: valor</code>).`);
            }
        }
    });

    return {
        isValid: errors.length === 0,
        hasBreakingChange,
        errors
    };
};

/**
 * Determines the SemVer impact based on commit type and breaking changes
 * @param {string} type - Commit type (feat, fix, etc.)
 * @param {boolean} hasBreakingChange - Whether there's a breaking change
 * @returns {'MAJOR' | 'MINOR' | 'PATCH' | 'NONE'} SemVer impact level
 */
export const determineSemVerImpact = (type, hasBreakingChange) => {
    if (hasBreakingChange) return 'MAJOR';
    if (type === 'feat') return 'MINOR';
    if (type === 'fix') return 'PATCH';
    return 'NONE';
};
