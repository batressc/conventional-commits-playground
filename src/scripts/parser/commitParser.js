/**
 * Commit message parser
 * Parses raw commit text into structured components
 * @module parser/commitParser
 */

import { FOOTER_START_REGEX, BREAKING_CHANGE_REGEX } from '../constants/commitTypes.js';

/**
 * @typedef {Object} ParsedCommit
 * @property {string} header - The first line of the commit message
 * @property {string[]} bodyLines - Lines between header and footer (excluding blank separator)
 * @property {string[]} footerLines - Footer lines (after last blank line if valid footer detected)
 * @property {number} footerStartIndex - Index where footer starts (-1 if no footer)
 * @property {boolean} hasBreakingFooter - Whether a BREAKING CHANGE footer was detected
 */

/**
 * Parses a commit message into its components
 * @param {string} text - Raw commit message text
 * @returns {ParsedCommit} Parsed commit structure
 */
export const parseCommitMessage = (text) => {
    const lines = text.split('\n');
    const header = lines[0] || '';
    
    let hasBreakingFooter = false;
    let footerStartIndex = -1;
    let bodyLines = [];
    let footerLines = [];

    // Detect footer section
    if (lines.length > 1) {
        // Find the last blank line
        let lastBlankIndex = -1;
        for (let i = lines.length - 1; i > 0; i--) {
            if (lines[i].trim() === '') {
                lastBlankIndex = i;
                break;
            }
        }

        // Check if content after last blank line looks like a footer
        if (lastBlankIndex !== -1 && lastBlankIndex < lines.length - 1) {
            const potentialFooterStart = lines[lastBlankIndex + 1];
            
            if (FOOTER_START_REGEX.test(potentialFooterStart)) {
                footerStartIndex = lastBlankIndex + 1;
                
                // Check for BREAKING CHANGE in footer lines
                const potentialFooterLines = lines.slice(footerStartIndex);
                potentialFooterLines.forEach(line => {
                    if (BREAKING_CHANGE_REGEX.test(line)) {
                        hasBreakingFooter = true;
                    }
                });
            }
        }
    }

    // Separate body and footer
    if (footerStartIndex !== -1) {
        // Body is from line 1 to blank line before footer (exclusive)
        bodyLines = lines.slice(1, footerStartIndex - 1);
        footerLines = lines.slice(footerStartIndex);
    } else {
        // No footer, everything after header is body
        bodyLines = lines.slice(1);
    }

    return {
        header,
        bodyLines,
        footerLines,
        footerStartIndex,
        hasBreakingFooter,
        lines // Keep original lines for reference
    };
};
