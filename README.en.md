# Conventional Commits Playground

An interactive, educational website designed to teach and practice the [Conventional Commits](https://www.conventionalcommits.org/) specification. Built with vanilla JavaScript, HTML5, and CSS3, this playground helps developers understand how to write structured commit messages that integrate seamlessly with Semantic Versioning (SemVer) and automated tooling.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)]()

## 📋 Table of Contents

- [Conventional Commits Playground](#conventional-commits-playground)
  - [📋 Table of Contents](#-table-of-contents)
  - [🎯 Motivation](#-motivation)
  - [✨ Features](#-features)
  - [🛠️ Technology Stack](#️-technology-stack)
    - [Core Technologies](#core-technologies)
    - [Development Tools](#development-tools)
    - [Architecture Principles](#architecture-principles)
  - [📦 Prerequisites](#-prerequisites)
  - [🚀 Installation](#-installation)
  - [💻 Usage](#-usage)
    - [Development Server](#development-server)
    - [Preview Production Build](#preview-production-build)
    - [Interactive Commit Helper](#interactive-commit-helper)
  - [🏗️ Build for Production](#️-build-for-production)
  - [📁 Project Structure](#-project-structure)
  - [🔄 Development Workflow](#-development-workflow)
    - [Branch Types](#branch-types)
    - [Branch Naming Convention](#branch-naming-convention)
    - [Creating a Feature Branch](#creating-a-feature-branch)
  - [🏷️ Versioning \& Release Process](#️-versioning--release-process)
    - [Version Structure](#version-structure)
    - [Release Workflow](#release-workflow)
    - [Available Release Scripts](#available-release-scripts)
  - [📝 Commit Message Guidelines](#-commit-message-guidelines)
    - [Format](#format)
    - [Valid Types](#valid-types)
    - [Breaking Changes](#breaking-changes)
    - [Validation](#validation)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

## 🎯 Motivation

Writing clear, consistent commit messages is a fundamental skill for professional software development. However, many developers struggle with:

- **Inconsistent commit history**: Makes project evolution difficult to understand
- **Manual changelog generation**: Time-consuming and error-prone
- **Version management confusion**: Determining MAJOR, MINOR, or PATCH bumps
- **Poor collaboration**: Unclear commit messages hinder team communication

This project solves these problems by providing an **interactive learning environment** where developers can:

1. Learn the Conventional Commits specification through visual examples
2. Practice writing valid commit messages with real-time validation
3. Understand the connection between commit types and Semantic Versioning
4. See how automated tools (commitlint, changеlog generators) work

## ✨ Features

- **📚 Interactive Guide**: Visual anatomy of commit message structure
- **🏷️ Commit Types Reference**: Complete type catalog (feat, fix, docs, etc.)
- **🚀 SemVer Integration**: Learn how commits affect version numbers
- **⚡ Practice Zone**: Real-time validator for commit message syntax
- **🌐 Bilingual Support**: Full English and Spanish localization
- **🎨 Responsive Design**: Works seamlessly on desktop and mobile
- **♿ Accessibility**: ARIA labels and semantic HTML for all users

## 🛠️ Technology Stack

### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, custom properties
- **JavaScript (ES2026+)**: Pure vanilla JavaScript, no frameworks
- **Vite**: Fast build tool and development server

### Development Tools
- **commitlint**: Enforces Conventional Commits specification
- **husky**: Manages Git hooks for commit validation
- **commitizen**: Interactive commit message helper
- **commit-and-tag-version**: Automates versioning and CHANGELOG generation

### Architecture Principles
- **Vanilla-first philosophy**: No external dependencies unless necessary
- **ES Modules**: Modern JavaScript module system
- **SOLID principles**: Applied to frontend code organization
- **Modular design**: Independent, reusable components

## 📦 Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: For version control and commit hooks

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/batressc/conventional-commits-playground.git
   cd conventional-commits-playground
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Git hooks** (automatic after install via `prepare` script):
   ```bash
   # Husky hooks are configured automatically
   # Verifies commit messages follow Conventional Commits
   ```

## 💻 Usage

### Development Server

Start the Vite development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (default Vite port).

Features during development:
- ⚡ Instant hot reload on file changes
- 🔧 Source maps for debugging
- 📱 Network access for mobile testing

### Preview Production Build

Build and preview the production version locally:

```bash
npm run build
npm run preview
```

### Interactive Commit Helper

Use Commitizen for guided commit message creation:

```bash
npm run commit
```

This launches an interactive CLI that helps you construct valid Conventional Commits messages.

## 🏗️ Build for Production

Generate optimized production assets:

```bash
npm run build
```

Build output:
- **Location**: `dist/` directory
- **Optimizations**: Minified CSS and JavaScript, optimized assets
- **Ready to deploy**: Static files ready for any web server

## 📁 Project Structure

```
conventional-commits-playground/
├── src/                          # Source code
│   ├── index.html                # Main HTML entry point
│   ├── scripts/                  # JavaScript modules
│   │   ├── main.js               # Application entry point
│   │   ├── constants/            # Constants and configuration
│   │   ├── i18n/                 # Internationalization system
│   │   │   ├── locales/          # Translation files (en.js, es.js)
│   │   │   ├── i18n.js           # I18n core logic
│   │   │   └── domUpdater.js     # DOM translation updater
│   │   ├── parser/               # Commit message parsing
│   │   │   ├── commitParser.js   # Parser logic
│   │   │   └── validators.js     # Validation rules
│   │   ├── ui/                   # UI components
│   │   │   ├── playground.js     # Interactive playground
│   │   │   ├── feedback.js       # Validation feedback
│   │   │   ├── tabs.js           # Tab navigation
│   │   │   └── languageSwitcher.js
│   │   └── utils/                # Helper functions
│   └── styles/                   # CSS stylesheets
│       ├── main.css              # Entry point (imports all others)
│       ├── variables.css         # CSS custom properties
│       ├── base.css              # Base styles and resets
│       ├── layout.css            # Layout structure
│       ├── components.css        # Reusable components
│       ├── header.css            # Header section
│       ├── footer.css            # Footer section
│       ├── playground.css        # Playground section
│       └── tabs.css              # Tab component
├── dist/                         # Production build output
├── .husky/                       # Git hooks configuration
├── commitlint.config.mjs         # Commitlint rules
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies and scripts
├── CONTRIBUTING.md               # Contribution guidelines
└── README.md                     # This file
```

## 🔄 Development Workflow

This project follows **Git Flow** branching strategy:

### Branch Types

- **`main`**: Production-ready code only
- **`develop`**: Latest development integration branch
- **`feature/*`**: New features (from `develop`)
- **`release/*`**: Version preparation (from `develop`)
- **`hotfix/*`**: Urgent production fixes (from `main`)

### Branch Naming Convention

All branches must follow this format:

```
<type>/<number>-<description>

Examples:
  feature/42-add-dark-mode
  release/1.1.0
  hotfix/123-fix-parser-crash
```

### Creating a Feature Branch

```bash
# Ensure you're on develop
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/123-your-feature-name

# Work on your feature...
git add .
npm run commit  # Use Commitizen

# Push and create Pull Request
git push origin feature/123-your-feature-name
```

## 🏷️ Versioning & Release Process

This project uses **Semantic Versioning (SemVer)** managed by `commit-and-tag-version`.

### Version Structure

```
MAJOR.MINOR.PATCH
  |     |     |
  |     |     └── fix/perf commits → PATCH bump (1.0.0 → 1.0.1)
  |     └────────── feat commits → MINOR bump (1.0.0 → 1.1.0)
  └──────────────── BREAKING CHANGE → MAJOR bump (1.0.0 → 2.0.0)
```

### Release Workflow

1. **Preview next version** (from `develop`):
   ```bash
   npm run release:preview
   ```

2. **Create release branch**:
   ```bash
   git checkout -b release/X.Y.Z
   ```

3. **Generate version and CHANGELOG**:
   ```bash
   npm run release
   # Or specify: npm run release:major|minor|patch
   ```

4. **Push and create PR to `main`**:
   ```bash
   git push origin release/X.Y.Z
   # Create PR, get approval, merge
   ```

5. **Tag on `main`** (after merge):
   ```bash
   git checkout main
   git pull origin main
   git tag -a vX.Y.Z -m "chore(release): X.Y.Z"
   git push origin vX.Y.Z
   ```

6. **Merge `main` back to `develop`**:
   ```bash
   git checkout develop
   git merge main
   git push origin develop
   ```

### Available Release Scripts

| Script | Description |
|--------|-------------|
| `npm run release:preview` | Dry-run to see what would change |
| `npm run release` | Auto-calculate and release |
| `npm run release:first` | First release (0.1.0) |
| `npm run release:major` | Force MAJOR bump |
| `npm run release:minor` | Force MINOR bump |
| `npm run release:patch` | Force PATCH bump |

## 📝 Commit Message Guidelines

All commits **must** follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### Valid Types

| Type | Description | Version Impact |
|------|-------------|----------------|
| `feat` | New feature | MINOR |
| `fix` | Bug fix | PATCH |
| `docs` | Documentation only | - |
| `style` | Code style/formatting | - |
| `refactor` | Code refactoring | - |
| `perf` | Performance improvement | PATCH |
| `test` | Add/update tests | - |
| `build` | Build system changes | - |
| `ci` | CI configuration changes | - |
| `chore` | Routine tasks | - |
| `revert` | Revert previous commit | - |

### Breaking Changes

Indicate with `!` after type or `BREAKING CHANGE:` footer:

```bash
feat(api)!: change response structure

# Or

feat(api): change response structure

BREAKING CHANGE: API now returns objects instead of arrays
```

### Validation

Commits are automatically validated by:
- **commitlint**: Blocks invalid commits via Git hooks
- **husky**: Manages the `commit-msg` hook

Use the helper for guided commits:
```bash
npm run commit
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

- Branch strategy and naming conventions
- Pull Request process and requirements
- Code style and architecture principles
- Markdown file conventions (`.h.md` and `.md` files)

Quick checklist:
- [ ] Follow Git Flow branching model
- [ ] Use Conventional Commits format
- [ ] Write clear PR descriptions
- [ ] Ensure all discussions are resolved
- [ ] Get minimum 1 approval before merge

## 📄 License

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ to educate developers about Conventional Commits**

For questions or issues, please [open an issue](https://github.com/batressc/conventional-commits-playground/issues).
