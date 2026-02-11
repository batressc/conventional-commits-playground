/**
 * Constants for Conventional Commits specification
 * Defines valid commit types and regex patterns for validation
 * @module constants/commitTypes
 */

/**
 * Valid commit types according to Conventional Commits specification
 * Each type has a specific semantic meaning for version control and changelogs
 * - feat: New feature (MINOR version bump)
 * - fix: Bug fix (PATCH version bump)
 * - perf: Performance improvement (PATCH)
 * - build, chore, ci, docs, refactor, revert, style, test: No version bump
 * @type {string[]}
 * @example
 * VALID_TYPES.includes('feat') // true
 * VALID_TYPES.includes('feature') // false
 */
export const VALID_TYPES = [
    'build',
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test'
];

/**
 * Regex pattern for validating commit header format
 * Format: type(scope)!: description
 * - type: one of the valid types (required)
 * - scope: optional, alphanumeric with hyphens/underscores in parentheses
 * - !: optional breaking change indicator
 * - description: required, any text after colon and space
 * @type {RegExp}
 * @example
 * HEADER_REGEX.test('feat(auth): add login') // true
 * HEADER_REGEX.test('feat!: breaking change') // true
 * HEADER_REGEX.test('invalid: header') // false
 */
export const HEADER_REGEX = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([a-z0-9\-_]+\))?(!)?:\s.+$/;

/**
 * Regex pattern for detecting footer start lines
 * Matches tokens followed by ": " or " #"
 * Permissive to allow detection, then validator enforces strict rules
 * @type {RegExp}
 */
export const FOOTER_START_REGEX = /^(BREAKING CHANGE|BREAKING-CHANGE|[\w\s-]+)(: | #)/;

/**
 * Regex pattern for parsing footer line components
 * Captures: token, separator, value
 * @type {RegExp}
 */
export const FOOTER_LINE_REGEX = /^([^#:]+)(: | #)(.*)/;

/**
 * Regex pattern for detecting BREAKING CHANGE token variations
 * @type {RegExp}
 */
export const BREAKING_CHANGE_REGEX = /^BREAKING[- ]CHANGE(: | #)/;
