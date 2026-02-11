# Repository Instructions for AI Agents

## Git Flow Branch Strategy

This repository implements Git Flow with two permanent and three temporary branch types.

**Permanent Branches:**
- main: Production code only. Updated via PRs from release/hotfix. Protected.
- develop: Latest development. Integration point for features. Updated via PRs from feature branches. Protected.

**Temporary Branches:**
- feature/*: New features. From develop → to develop. Format: feature/[issue-number]-[description]. Deleted after merge.
- release/*: Version preparation. From develop → to main AND develop. Format: release/[version] or release/[issue-number]-[description]. Deleted after merge.
- hotfix/*: Urgent fixes. From main → to main AND develop. Format: hotfix/[issue-number]-[description]. Deleted after merge.

For complete Git Flow details, see CONTRIBUTING.md section "Branch Strategy"

## Branch Naming Convention

CRITICAL: All branches must follow exact format: [type]/[number]-[description]

type: Must be lowercase: feature, release, or hotfix
number: Issue number or unique identifier
description: Brief description in kebab-case (hyphens only, no underscores or spaces)

Valid Examples:
- feature/123-authentication-system
- feature/456-add-user-dashboard
- release/1.0.0
- release/789-v2.0.0-release
- hotfix/234-fix-login-error
- hotfix/567-security-patch

Invalid Examples:
- feature-authentication (missing /)
- Feature/123-auth (type not lowercase)
- feature/authentication_system (underscores not allowed)
- feature/123 authentication (spaces not allowed)

## Branch Protection Policies

main and develop branches are protected:
- Direct push blocked. All changes require Pull Request.
- Minimum 1 approval required (different from PR author).
- All PR discussions must be resolved before merge.

For complete policies, see CONTRIBUTING.md section "Branch Protection Policies"

## Pull Request Process

When creating a Pull Request:
1. Ensure branch is up to date with target branch (develop or main)
2. Resolve merge conflicts
3. Create PR with descriptive title, detailed description, issue references, and verification checklist

Note: All PRs require minimum 1 approval and all discussions must be resolved before merge.

## Markdown File Conventions - CRITICAL REPOSITORY POLICY

This repository enforces dual-file convention for markdown files consumed by AI tools (agents, chat interfaces, context systems, memory, configuration).

**Dual File Requirement:**

When markdown file serves as input for AI tools, create TWO files:

Human-Readable File (*.h.md):
- Extension: .h.md (h stands for human)
- Language: Spanish (unless explicitly specified otherwise)
- Format: Markdown with moderate visual elements including titles, lists, tables
- Visual elements (emojis, icons) should be used sparingly and purposefully to enhance readability without becoming distracting
- Purpose: Professional and human-friendly version for review and comprehension

AI-Optimized File (*.md):
- Extension: .md
- Location: Same directory as .h.md file with matching base filename
- Language: English (always)
- Format: Optimized for AI comprehension and token efficiency
- Purpose: Agent-ready version for AI consumption
- Can omit organizational visual elements if not needed for comprehension
- Content direct and oriented toward AI understanding
- Token optimization without context loss
- Important: Do not summarize if it causes information loss
- If lists, titles, or structure are necessary for AI comprehension, maintain them

**File Naming Examples:**

Correct:
- docs/AGENTS.h.md (human, Spanish)
- docs/AGENTS.md (AI, English)
- docs/SKILLS.h.md (human, Spanish)
- docs/SKILLS.md (AI, English)

Incorrect:
- docs/AGENTS.es.md (do not use language suffixes)
- docs/AGENTS.en.md
- docs/SKILLS.md (missing .h.md version)

**AI Optimization Principles for .md files:**

Do Not Lose Context: Information must be complete and maintain meaning.
Use English: All .md versions must be in English.
Evaluate Structure: Decide case by case if titles/lists aid AI comprehension.
Direct Prose: Prefer direct paragraphs over visual structure when appropriate.
Maintain Precision: Technical details must not be omitted.

**When to Apply Convention:**

Apply for: Agent configuration files, AI instruction files, Context files for AI tools, Skills and capabilities documentation, Memory and knowledge files, MCP (Model Context Protocol) configuration, Any markdown file consumed by AI tools.

Do not apply for: Project README.md, Standard technical documentation, Changelog files, Files only read by humans.

**Pull Request Verification:**

When reviewing PRs with markdown files:
- If .h.md file exists, corresponding .md file must exist
- .h.md file must be in Spanish (unless explicit exception)
- .md file must be in English
- Content must be equivalent (no information loss)
- .md version must be optimized for AI without losing context

## Critical Rules for AI Agents

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
- When creating or modifying markdown files for AI consumption, always create both .h.md (Spanish, human) and .md (English, AI-optimized) versions
- Maintain content equivalence between .h.md and .md versions without information loss
- Verify dual-file convention compliance in Pull Requests

Last updated: 2026-02-09
Source: CONTRIBUTING.md v1.0.0
