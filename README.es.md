# Conventional Commits Playground

Un sitio web interactivo y educativo diseñado para enseñar y practicar la especificación de [Conventional Commits](https://www.conventionalcommits.org/). Construido con JavaScript vanilla, HTML5 y CSS3, este playground ayuda a los desarrolladores a comprender cómo escribir mensajes de commit estructurados que se integran perfectamente con el versionado semántico (SemVer) y herramientas automatizadas.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)]()

## 📋 Tabla de Contenidos

- [Conventional Commits Playground](#conventional-commits-playground)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎯 Motivación](#-motivación)
  - [✨ Características](#-características)
  - [🛠️ Stack Tecnológico](#️-stack-tecnológico)
    - [Tecnologías Base](#tecnologías-base)
    - [Herramientas de Desarrollo](#herramientas-de-desarrollo)
    - [Principios de Arquitectura](#principios-de-arquitectura)
  - [📦 Requisitos Previos](#-requisitos-previos)
  - [🚀 Instalación](#-instalación)
  - [💻 Uso](#-uso)
    - [Servidor de Desarrollo](#servidor-de-desarrollo)
    - [Previsualizar Build de Producción](#previsualizar-build-de-producción)
    - [Asistente Interactivo de Commits](#asistente-interactivo-de-commits)
  - [🏗️ Build para Producción](#️-build-para-producción)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🔄 Flujo de Trabajo de Desarrollo](#-flujo-de-trabajo-de-desarrollo)
    - [Tipos de Ramas](#tipos-de-ramas)
    - [Convención de Nomenclatura de Ramas](#convención-de-nomenclatura-de-ramas)
    - [Creando una Rama Feature](#creando-una-rama-feature)
  - [🏷️ Versionado y Proceso de Release](#️-versionado-y-proceso-de-release)
    - [Estructura de Versión](#estructura-de-versión)
    - [Flujo de Release](#flujo-de-release)
    - [Scripts de Release Disponibles](#scripts-de-release-disponibles)
  - [📝 Guía de Mensajes de Commit](#-guía-de-mensajes-de-commit)
    - [Formato](#formato)
    - [Tipos Válidos](#tipos-válidos)
    - [Breaking Changes](#breaking-changes)
    - [Validación](#validación)
  - [🤝 Contribuir](#-contribuir)
  - [📄 Licencia](#-licencia)

## 🎯 Motivación

Escribir mensajes de commit claros y consistentes es una habilidad fundamental para el desarrollo profesional de software. Sin embargo, muchos desarrolladores luchan con:

- **Historial de commits inconsistente**: Dificulta entender la evolución del proyecto
- **Generación manual de changelog**: Consume tiempo y es propensa a errores
- **Confusión en el manejo de versiones**: Determinar incrementos MAJOR, MINOR o PATCH
- **Colaboración deficiente**: Mensajes de commit poco claros obstaculizan la comunicación del equipo

Este proyecto resuelve estos problemas proporcionando un **entorno de aprendizaje interactivo** donde los desarrolladores pueden:

1. Aprender la especificación de Conventional Commits mediante ejemplos visuales
2. Practicar la escritura de mensajes de commit válidos con validación en tiempo real
3. Comprender la conexión entre tipos de commit y el versionado semántico
4. Ver cómo funcionan las herramientas automatizadas (commitlint, generadores de changelog)

## ✨ Características

- **📚 Guía Interactiva**: Anatomía visual de la estructura de mensajes de commit
- **🏷️ Referencia de Tipos de Commit**: Catálogo completo de tipos (feat, fix, docs, etc.)
- **🚀 Integración con SemVer**: Aprende cómo los commits afectan los números de versión
- **⚡ Zona de Práctica**: Validador en tiempo real para la sintaxis de mensajes de commit
- **🌐 Soporte Bilingüe**: Localización completa en inglés y español
- **🎨 Diseño Responsivo**: Funciona perfectamente en escritorio y móvil
- **♿ Accesibilidad**: Etiquetas ARIA y HTML semántico para todos los usuarios

## 🛠️ Stack Tecnológico

### Tecnologías Base
- **HTML5**: Marcado semántico con características de accesibilidad
- **CSS3**: Estilos modernos con Grid, Flexbox, propiedades personalizadas
- **JavaScript (ES2026+)**: JavaScript vanilla puro, sin frameworks
- **Vite**: Herramienta de build rápida y servidor de desarrollo

### Herramientas de Desarrollo
- **commitlint**: Aplica la especificación de Conventional Commits
- **husky**: Gestiona Git hooks para validación de commits
- **commitizen**: Asistente interactivo de mensajes de commit
- **commit-and-tag-version**: Automatiza el versionado y generación de CHANGELOG

### Principios de Arquitectura
- **Filosofía vanilla-first**: Sin dependencias externas a menos que sea necesario
- **Módulos ES**: Sistema de módulos JavaScript moderno
- **Principios SOLID**: Aplicados a la organización del código frontend
- **Diseño modular**: Componentes independientes y reutilizables

## 📦 Requisitos Previos

- **Node.js**: Versión 18.0.0 o superior
- **npm**: Versión 9.0.0 o superior
- **Git**: Para control de versiones y hooks de commit

## 🚀 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/batressc/conventional-commits-playground.git
   cd conventional-commits-playground
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar Git hooks** (automático después de la instalación mediante el script `prepare`):
   ```bash
   # Los hooks de Husky se configuran automáticamente
   # Verifican que los mensajes de commit sigan Conventional Commits
   ```

## 💻 Uso

### Servidor de Desarrollo

Inicia el servidor de desarrollo de Vite con reemplazo de módulos en caliente:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173` (puerto predeterminado de Vite).

Características durante el desarrollo:
- ⚡ Recarga instantánea en cambios de archivos
- 🔧 Mapas de origen para depuración
- 📱 Acceso de red para pruebas en móvil

### Previsualizar Build de Producción

Construir y previsualizar la versión de producción localmente:

```bash
npm run build
npm run preview
```

### Asistente Interactivo de Commits

Usa Commitizen para creación guiada de mensajes de commit:

```bash
npm run commit
```

Esto inicia un CLI interactivo que te ayuda a construir mensajes válidos de Conventional Commits.

## 🏗️ Build para Producción

Genera assets optimizados de producción:

```bash
npm run build
```

Salida del build:
- **Ubicación**: Directorio `dist/`
- **Optimizaciones**: CSS y JavaScript minificados, assets optimizados
- **Listo para desplegar**: Archivos estáticos listos para cualquier servidor web

## 📁 Estructura del Proyecto

```
conventional-commits-playground/
├── src/                          # Código fuente
│   ├── index.html                # Punto de entrada HTML principal
│   ├── scripts/                  # Módulos JavaScript
│   │   ├── main.js               # Punto de entrada de la aplicación
│   │   ├── constants/            # Constantes y configuración
│   │   ├── i18n/                 # Sistema de internacionalización
│   │   │   ├── locales/          # Archivos de traducción (en.js, es.js)
│   │   │   ├── i18n.js           # Lógica principal de i18n
│   │   │   └── domUpdater.js     # Actualizador de traducción del DOM
│   │   ├── parser/               # Parseo de mensajes de commit
│   │   │   ├── commitParser.js   # Lógica del parser
│   │   │   └── validators.js     # Reglas de validación
│   │   ├── ui/                   # Componentes UI
│   │   │   ├── playground.js     # Playground interactivo
│   │   │   ├── feedback.js       # Retroalimentación de validación
│   │   │   ├── tabs.js           # Navegación por pestañas
│   │   │   └── languageSwitcher.js
│   │   └── utils/                # Funciones auxiliares
│   └── styles/                   # Hojas de estilo CSS
│       ├── main.css              # Punto de entrada (importa todos los demás)
│       ├── variables.css         # Propiedades personalizadas CSS
│       ├── base.css              # Estilos base y resets
│       ├── layout.css            # Estructura de layout
│       ├── components.css        # Componentes reutilizables
│       ├── header.css            # Sección header
│       ├── footer.css            # Sección footer
│       ├── playground.css        # Sección playground
│       └── tabs.css              # Componente de pestañas
├── dist/                         # Salida del build de producción
├── .husky/                       # Configuración de Git hooks
├── commitlint.config.mjs         # Reglas de Commitlint
├── vite.config.js                # Configuración de Vite
├── package.json                  # Dependencias y scripts
├── CONTRIBUTING.md               # Guía de contribución
└── README.md                     # Este archivo
```

## 🔄 Flujo de Trabajo de Desarrollo

Este proyecto sigue la estrategia de branching **Git Flow**:

### Tipos de Ramas

- **`main`**: Solo código listo para producción
- **`develop`**: Rama de integración del desarrollo más reciente
- **`feature/*`**: Nuevas características (desde `develop`)
- **`release/*`**: Preparación de versiones (desde `develop`)
- **`hotfix/*`**: Correcciones urgentes de producción (desde `main`)

### Convención de Nomenclatura de Ramas

Todas las ramas deben seguir este formato:

```
<tipo>/<número>-<descripción>

Ejemplos:
  feature/42-add-dark-mode
  release/1.1.0
  hotfix/123-fix-parser-crash
```

### Creando una Rama Feature

```bash
# Asegurarse de estar en develop
git checkout develop
git pull origin develop

# Crear rama feature
git checkout -b feature/123-tu-nombre-de-feature

# Trabajar en tu feature...
git add .
npm run commit  # Usar Commitizen

# Hacer push y crear Pull Request
git push origin feature/123-tu-nombre-de-feature
```

## 🏷️ Versionado y Proceso de Release

Este proyecto usa **Versionado Semántico (SemVer)** gestionado por `commit-and-tag-version`.

### Estructura de Versión

```
MAJOR.MINOR.PATCH
  |     |     |
  |     |     └── commits fix/perf → incremento PATCH (1.0.0 → 1.0.1)
  |     └────────── commits feat → incremento MINOR (1.0.0 → 1.1.0)
  └──────────────── BREAKING CHANGE → incremento MAJOR (1.0.0 → 2.0.0)
```

### Flujo de Release

1. **Previsualizar siguiente versión** (desde `develop`):
   ```bash
   npm run release:preview
   ```

2. **Crear rama release**:
   ```bash
   git checkout -b release/X.Y.Z
   ```

3. **Generar versión y CHANGELOG**:
   ```bash
   npm run release
   # O especificar: npm run release:major|minor|patch
   ```

4. **Hacer push y crear PR a `main`**:
   ```bash
   git push origin release/X.Y.Z
   # Crear PR, obtener aprobación, fusionar
   ```

5. **Etiquetar en `main`** (después de fusionar):
   ```bash
   git checkout main
   git pull origin main
   git tag -a vX.Y.Z -m "chore(release): X.Y.Z"
   git push origin vX.Y.Z
   ```

6. **Fusionar `main` de vuelta a `develop`**:
   ```bash
   git checkout develop
   git merge main
   git push origin develop
   ```

### Scripts de Release Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run release:preview` | Simulación para ver qué cambiaría |
| `npm run release` | Auto-calcular y hacer release |
| `npm run release:first` | Primer release (0.1.0) |
| `npm run release:major` | Forzar incremento MAJOR |
| `npm run release:minor` | Forzar incremento MINOR |
| `npm run release:patch` | Forzar incremento PATCH |

## 📝 Guía de Mensajes de Commit

Todos los commits **deben** seguir la especificación de [Conventional Commits](https://www.conventionalcommits.org/):

### Formato

```
<tipo>(<alcance opcional>): <descripción>

[cuerpo opcional]

[pie(s) opcional(es)]
```

### Tipos Válidos

| Tipo | Descripción | Impacto en Versión |
|------|-------------|-------------------|
| `feat` | Nueva característica | MINOR |
| `fix` | Corrección de bug | PATCH |
| `docs` | Solo documentación | - |
| `style` | Estilo/formato de código | - |
| `refactor` | Refactorización de código | - |
| `perf` | Mejora de rendimiento | PATCH |
| `test` | Agregar/actualizar tests | - |
| `build` | Cambios en sistema de build | - |
| `ci` | Cambios en configuración CI | - |
| `chore` | Tareas rutinarias | - |
| `revert` | Revertir commit previo | - |

### Breaking Changes

Indicar con `!` después del tipo o pie `BREAKING CHANGE:`:

```bash
feat(api)!: cambiar estructura de respuesta

# O

feat(api): cambiar estructura de respuesta

BREAKING CHANGE: API ahora devuelve objetos en lugar de arrays
```

### Validación

Los commits son validados automáticamente por:
- **commitlint**: Bloquea commits inválidos mediante Git hooks
- **husky**: Gestiona el hook `commit-msg`

Usa el asistente para commits guiados:
```bash
npm run commit
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lee [CONTRIBUTING.md](CONTRIBUTING.md) para guías detalladas sobre:

- Estrategia de branching y convenciones de nomenclatura
- Proceso de Pull Request y requisitos
- Estilo de código y principios de arquitectura
- Convenciones de archivos Markdown (archivos `.h.md` y `.md`)

Checklist rápido:
- [ ] Seguir el modelo de branching Git Flow
- [ ] Usar formato de Conventional Commits
- [ ] Escribir descripciones claras de PR
- [ ] Asegurar que todas las discusiones estén resueltas
- [ ] Obtener mínimo 1 aprobación antes de fusionar

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia Pública General GNU v3.0**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Construido con ❤️ para educar a desarrolladores sobre Conventional Commits**

Para preguntas o problemas, por favor [abre un issue](https://github.com/batressc/conventional-commits-playground/issues).
