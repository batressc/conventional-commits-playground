# Contributing to conventional-commits-playground

This repository uses Git Flow branching methodology with branch protection policies and specific merge strategies. This document defines all established processes for contributing to the project.

## Branch Strategy

Project implements Git Flow with two permanent branches and three types of temporary branches.

**Permanent Branches:**

main (or master): Contains latest stable production code. Only updated via Pull Requests from release or hotfix branches. Every commit represents a production version. Protected with security policies.

develop: Contains latest development version. Integration point for all new features. Updated via Pull Requests from feature branches. Base for creating release branches. Protected with security policies.

**Temporary Branch Types (Prefixes):**

feature/*: Used for developing new features or functionality. Naming format is feature/[issue-number]-short-description. Example: feature/1234-user-authentication. Created from develop branch. Merged back to develop branch. Deleted after successful merge.

release/*: Used for preparing new production version. Naming format is release/[version-number] or release/[issue-number]-description. Example: release/1.2.0 or release/5678-v1.2.0-release. Created from develop branch. Merged to both main and develop branches. Used for final adjustments, minor bug fixes, version updates. Deleted after successful merge.

hotfix/*: Used for urgent production fixes. Naming format is hotfix/[issue-number]-short-description. Example: hotfix/9012-critical-security-fix. Created from main branch. Merged to both main and develop branches. Used to solve critical production issues without waiting for next release. Deleted after successful merge.

Reference: https://nvie.com/posts/a-successful-git-branching-model/

## Branch Protection Policies

Following policies are active for main, master, and develop branches:

Pull Request Required: Direct push to these branches is not allowed. All changes must go through Pull Request process.

Approval Required: Minimum 1 approver must review and approve the PR. Approver must be different from PR author.

Discussion Resolution: All conversations and discussions in PR must be resolved. Merge is blocked if discussions are pending.

Code Review: Code must be reviewed by at least one team member. Review should verify quality, security, and style aspects.

## Pull Request Process

Creating Pull Request:
1. Ensure branch is up to date with target branch (develop or main)
2. Resolve any merge conflicts
3. Create Pull Request in GitHub with descriptive title, detailed description of changes, references to related issues, verification checklist if applicable

Reviewing Pull Request:
1. Review code carefully
2. Add constructive comments if necessary
3. Start discussions for points requiring clarification
4. Approve or request changes

Merging Pull Request:
1. Verify all requirements are met: at least 1 approval, all discussions resolved, no conflicts
2. Select merge type (preferably Squash Merge)
3. Complete merge
4. Delete branch after successful merge

## Merge Strategy

All merge types are available but follow these preferences:

Squash Merge (Recommended): Use for feature, release, and hotfix branches merging to main or develop. Keeps history clean and readable. Combines all commits from branch into single commit. Commit message must be descriptive and complete.

Merge Commit: Use for specific cases where preserving complete history is required. Maintains commit history of the branch.

Rebase and Merge: Use when linear history without merge commits is desired. Cleaner history without merge commits.

Best Practices:
- Prefer Squash Merge for main and develop branches
- Write clear commit messages when squashing
- Delete branch immediately after merge
- Verify merge does not introduce issues

## Branch Naming Conventions

All support branches must follow format:
[type]/[number-or-identifier]-[short-description]

type: feature, release, or hotfix
number-or-identifier: Issue number or unique identifier
short-description: Brief description in kebab-case (words separated by hyphens)

Valid Examples:
feature/123-authentication-system
feature/456-add-user-dashboard
release/1.0.0
release/789-v2.0.0-release
hotfix/234-fix-login-error
hotfix/567-security-patch

Invalid Examples:
feature-authentication (missing separator /)
Feature/123-auth (type must be lowercase)
feature/authentication_system (use hyphens not underscores)
feature/123 authentication (no spaces allowed)

## Workflow Examples

Feature Development Flow:
1. Create feature branch from develop: git checkout -b feature/123-new-feature develop
2. Develop feature with commits
3. Keep branch updated with develop: git merge develop
4. Create Pull Request to develop
5. Get approval and resolve discussions
6. Squash merge to develop
7. Delete feature branch

Release Preparation Flow:
1. Create release branch from develop: git checkout -b release/1.0.0 develop
2. Make final adjustments and bug fixes
3. Update version numbers and documentation
4. Create Pull Request to main
5. After approval, merge to main
6. Merge changes back to develop
7. Delete release branch
8. Tag the release in main

Hotfix Flow:
1. Create hotfix branch from main: git checkout -b hotfix/456-critical-fix main
2. Fix the critical issue
3. Create Pull Request to main
4. After approval, merge to main
5. Merge changes back to develop
6. Delete hotfix branch
7. Tag the hotfix in main

## Markdown File Conventions

Project enforces dual-file convention for markdown files consumed by AI tools (agents, chat interfaces, context systems, memory, configuration, etc). Purpose is supporting both human readability and AI optimization.

**Dual File Requirement:** When markdown file serves as input for AI tools, create two files:

Human-Readable File (*.h.md): Extension is .h.md where h stands for human. Written in Spanish unless explicitly specified otherwise. Uses markdown formatting with moderate visual elements including titles, lists, tables. Visual elements (emojis, icons) should be used sparingly and purposefully to enhance readability without becoming distracting. Structure is clear and organized with detailed explanations and illustrative examples. Purpose is human-friendly version for review and comprehension that maintains professional readability.

AI-Optimized File (*.md): Extension is .md. Located in same directory as corresponding .h.md file. Base filename matches .h.md file. Written in English always. Format optimized for AI comprehension and token efficiency. Purpose is agent-ready/ia-ready version for consumption by AI agents and tools. Can omit organizational visual elements if not needed for comprehension. Content is direct and oriented toward AI understanding. Token optimization without context loss. Important: Do not summarize if it causes information loss. If lists, titles, or structure are necessary for AI comprehension, they must be maintained.

**File Naming Examples:**

Correct structure:
- docs/AGENTS.h.md (human version in Spanish)
- docs/AGENTS.md (AI version in English)
- docs/SKILLS.h.md (human version in Spanish)
- docs/SKILLS.md (AI version in English)

Incorrect structure:
- docs/AGENTS.es.md (do not use language suffixes)
- docs/AGENTS.en.md
- docs/SKILLS.md (missing .h.md version)

**AI Optimization Principles for .md files:**

Do Not Lose Context: Information must be complete and maintain meaning. Use English: All .md versions must be in English. Evaluate Structure: Decide case by case if titles/lists aid AI comprehension. Direct Prose: Prefer direct paragraphs over visual structure when appropriate. Maintain Precision: Technical details must not be omitted.

**Example Comparison:**

Human Version (file.h.md) in Spanish with full markdown structure including numbered lists, code blocks with syntax highlighting, bold emphasis, and visual hierarchy.

AI Version (file.md) in English: JWT Authentication Configuration. Install jsonwebtoken dependency with npm install jsonwebtoken. Configure JWT_SECRET environment variable for token signing and JWT_EXPIRATION for token lifetime (example: "1h"). Create authentication middleware in middleware/auth.js file and apply to protected routes. Import middleware and use in route definitions requiring authentication.

**When to Apply Convention:**

Apply for: Agent configuration files, AI instruction files, Context files for AI tools, Skills and capabilities documentation, Memory and knowledge files, MCP (Model Context Protocol) configuration, Any markdown file consumed by AI tools.

Do not apply for: Project README.md, Standard technical documentation, Changelog files, Files only read by humans.

**Pull Request Verification Checklist:**

If .h.md file exists, corresponding .md file must exist. File .h.md must be in Spanish (unless explicit exception). File .md must be in English. Content of both files must be equivalent (no information loss). Version .md must be optimized for AI without losing context.

## Important Notes for AI Agents and Tools

When working with this repository:
- Always check current branch before creating new branches
- Feature branches always originate from develop, never from main
- Hotfix branches always originate from main, never from develop
- Release branches originate from develop and merge to both main and develop
- Never push directly to main or develop branches
- Always create Pull Request for code integration
- Branch names must follow exact format: type/number-description with hyphens
- Squash merge is strongly preferred for cleaner history
- Delete branches after merge to keep repository clean
- All discussions in PR must be resolved before merge is allowed
- Minimum one approval is required for any PR to protected branches

Last updated: 2026-02-07
Version: 1.0.0
