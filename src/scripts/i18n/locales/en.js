/**
 * English translations
 * @module i18n/locales/en
 */

export default {
    meta: {
        title: 'Interactive Guide: Conventional Commits',
        description: 'The definitive guide to writing commit messages that both humans and machines can understand.'
    },
    header: {
        badge: 'v1.0.0',
        title: 'Conventional Commits',
        subtitle: 'The definitive guide to writing commit messages that both humans and machines can understand.'
    },
    intro: {
        title: '💡 Why is it important?',
        description: 'Writing a messy commit message is easy, but maintaining a project long-term is not. Conventional Commits offers a lightweight structure that allows:',
        benefits: {
            changelog: 'Generate <strong>CHANGELOGs</strong> automatically.',
            semver: 'Determine the next semantic version number (<strong>SemVer</strong>) without human intervention.',
            history: 'Help other developers understand the project history quickly.'
        }
    },
    semver: {
        title: '🚀 Semantic Versioning (SemVer)',
        description: 'Conventional Commits and SemVer go hand in hand. The structure of your commit dictates how your software version should increment.',
        major: 'Incompatible API changes (BREAKING CHANGE)',
        minor: 'New backward-compatible functionality (feat)',
        patch: 'Backward-compatible bug fixes (fix)',
        example: 'Example: If you are on version <strong>1.0.0</strong> and you make a <code>feat: ...</code> commit, the next version will be <strong>1.1.0</strong>.'
    },
    anatomy: {
        title: '🧩 Message Anatomy',
        description: 'Hover over components to understand their function.',
        type: 'Type of change (e.g., feat, fix)',
        scope: '(Optional) Affected module',
        bang: '(Optional) Breaking Change',
        colon: ':',
        desc: 'Brief imperative description',
        note: 'The body and footer of the message are optional and come after a blank line.'
    },
    commitTypes: {
        title: '🏷️ Commit Types',
        description: 'Select a tab to see the basic types or the full Angular convention list.',
        tabs: {
            basic: 'Main Types',
            angular: 'Angular Convention (All)'
        },
        breaking: {
            title: 'BREAKING CHANGE',
            description: 'A change that breaks compatibility. Indicated with <code>!</code> after the type or with a <code>BREAKING CHANGE:</code> footer.',
            example: 'feat!: drop node 12 support',
            impact: 'MAJOR'
        },
        feat: {
            title: 'feat',
            description: 'Introduces a new feature to the code (feature). Equivalent to MINOR in SemVer.',
            example: 'feat: allow zoom on images',
            impact: 'MINOR'
        },
        fix: {
            title: 'fix',
            description: 'Fixes a bug in the code. Equivalent to PATCH in SemVer.',
            example: 'fix: handle null user id',
            impact: 'PATCH'
        },
        angularIntro: 'Although the specification allows any type, these are almost universally adopted.',
        docs: {
            title: 'docs',
            description: 'Changes affecting only documentation (README files, JSDoc comments, tutorials), without modifying functional code.'
        },
        style: {
            title: 'style',
            description: 'Format changes that do not affect code logic (whitespace, indentation, missing semicolons). Not to be confused with CSS styles.'
        },
        refactor: {
            title: 'refactor',
            description: 'A change to production code that neither fixes bugs nor adds features, but improves structure or readability.'
        },
        perf: {
            title: 'perf',
            description: 'Changes specifically dedicated to improving system performance (algorithm optimization, reducing load times).'
        },
        test: {
            title: 'test',
            description: 'Addition of missing unit or integration tests, or fixing existing tests that were not working correctly.'
        },
        build: {
            title: 'build',
            description: 'Changes affecting the build system or external dependencies (e.g., npm, maven, gradle, webpack, gulp).'
        },
        ci: {
            title: 'ci',
            description: 'Changes to Continuous Integration configuration files and scripts (e.g., GitHub Actions, Travis, CircleCI).'
        },
        chore: {
            title: 'chore',
            description: 'Routine tasks that do not modify source code or tests (e.g., version updates, script maintenance tasks).'
        },
        revert: {
            title: 'revert',
            description: 'Used to revert a previous commit. The message body usually contains the hash of the commit being reverted.'
        }
    },
    examples: {
        title: '📚 Real Examples',
        basic: {
            title: '1. Basic commit with type and scope',
            code: 'feat(ui): add dark mode button'
        },
        complete: {
            title: '2. Complete commit with body and multiple footers',
            code: `fix: fix user validation

Updated logic to allow special characters in names.
This solves the issue reported by support.

Reviewed-by: J. Doe
Refs: #456`
        },
        breaking: {
            title: '3. Breaking Change (Two variants for the same change)',
            optionA: '<strong>Option A (Concise):</strong> Using <code>!</code> in the header to indicate MAJOR impact.',
            codeA: 'feat(api)!: change error response structure',
            optionB: '<strong>Option B (Explanatory):</strong> Using the <code>BREAKING CHANGE</code> footer when detail is needed.',
            codeB: `feat(api): change error response structure

BREAKING CHANGE: the 'error' property now returns an object instead of a string.`
        }
    },
    playground: {
        title: '⚡ Practice Zone',
        description: 'Try writing a complete message. The validator will analyze the header, body, and footer separately.',
        label: 'Commit Draft:',
        placeholder: `feat(auth): add google login support

This adds the ability to login with google.
We needed to update the user schema.

Reviewed-by: J. Doe
BREAKING CHANGE: login api v1 is removed`,
        cards: {
            header: 'Header',
            body: 'Body',
            footer: 'Footer(s)'
        }
    },
    validation: {
        header: {
            invalidFormat: 'Format must be: type(scope): description',
            valid: 'Correct format. Impact:',
            majorByFooter: 'Impact elevated to MAJOR due to <code>BREAKING CHANGE</code> in footer.',
            majorByBang: 'MAJOR impact indicated by <code>!</code>.'
        },
        body: {
            missingBlankLine: 'Missing blank line between header and body.',
            duplicateBreakingChange: "Detected 'BREAKING CHANGE' in body and also in footer. Is it a duplicate? If different, make sure to separate it with blank lines.",
            breakingChangeNeedsBlankLine: "It seems you have a 'BREAKING CHANGE' attached to the body. You must leave a blank line before it to make it a valid footer.",
            valid: 'Valid body.'
        },
        footer: {
            breakingChangeSeparator: 'A <code>BREAKING CHANGE</code> footer must use exactly colon and space (<code>: </code>) as separator.',
            breakingChangeEmpty: 'A <code>BREAKING CHANGE</code> footer must have a description.',
            breakingChangeCase: 'Token must be in UPPERCASE: <code>BREAKING CHANGE</code>.',
            breakingChangePlural: 'Token is incorrect. Use <code>BREAKING CHANGE</code> (singular).',
            tokenWithSpaces: 'Token must not contain spaces (use hyphens, e.g., <code>Reviewed-by</code>).',
            invalidFormat: 'Line does not appear to be a valid footer (Format: <code>Token: value</code>).',
            valid: 'Valid footer(s).',
            hasBreaking: ' <b>(Includes BREAKING CHANGE)</b>'
        },
        result: {
            valid: 'Valid Message',
            validDescription: ' according to the specification.',
            invalid: 'There are errors',
            invalidDescription: ' in the format. Check the cards below.'
        }
    },
    footer: {
        builtFor: 'Built to educate about',
        link: 'Conventional Commits'
    }
};
