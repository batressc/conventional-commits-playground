# Instrucciones del Repositorio para Agentes de IA

## Estrategia de Ramas Git Flow

Este repositorio implementa Git Flow con gestión estricta de ramas y políticas de protección.

### Ramas Permanentes

**`main`**: 
- Solo código de producción
- Actualizada únicamente vía Pull Requests desde ramas `release` o `hotfix`
- Cada commit representa una versión de producción
- Protegida con políticas de seguridad

**`develop`**: 
- Última versión de desarrollo
- Punto de integración para todas las features
- Actualizada vía Pull Requests desde ramas `feature`
- Base para crear ramas `release`
- Protegida con políticas de seguridad

### Tipos de Ramas Temporales

**`feature/*`**: 
- Nuevas características o funcionalidades
- Creada desde: `develop`
- Se fusiona en: `develop`
- Formato: `feature/[número-issue]-descripción-corta`
- Ejemplo: `feature/1234-user-authentication`
- Se elimina después de fusionar

**`release/*`**: 
- Preparación de versión de producción
- Creada desde: `develop`
- Se fusiona en: `main` Y `develop`
- Formato: `release/[número-versión]` o `release/[número-issue]-descripción`
- Ejemplos: `release/1.2.0` o `release/5678-v1.2.0-release`
- Usada para ajustes finales, correcciones menores, actualización de versiones
- Se elimina después de fusionar

**`hotfix/*`**: 
- Correcciones urgentes de producción
- Creada desde: `main`
- Se fusiona en: `main` Y `develop`
- Formato: `hotfix/[número-issue]-descripción-corta`
- Ejemplo: `hotfix/9012-critical-security-fix`
- Se elimina después de fusionar

## Convención de Nombres de Ramas

### CRÍTICO: Todas las ramas deben seguir el formato exacto

```
[tipo]/[número]-[descripción]
```

**Reglas:**
- `tipo`: Debe ser minúscula: `feature`, `release`, o `hotfix`
- `número`: Número de issue o identificador único
- `descripción`: Descripción breve en kebab-case (solo guiones, sin guiones bajos ni espacios)

### Ejemplos Válidos

- `feature/123-authentication-system`
- `feature/456-add-user-dashboard`
- `release/1.0.0`
- `release/789-v2.0.0-release`
- `hotfix/234-fix-login-error`
- `hotfix/567-security-patch`

### Ejemplos Inválidos

- `feature-authentication` (falta el `/`)
- `Feature/123-auth` (tipo no está en minúscula)
- `feature/authentication_system` (guiones bajos no permitidos)
- `feature/123 authentication` (espacios no permitidos)

## Políticas de Protección de Ramas

Las ramas `main` y `develop` tienen estas protecciones:

### Pull Request Obligatorio
- Push directo está bloqueado
- Todos los cambios deben pasar por Pull Request

### Aprobación Requerida
- Mínimo 1 aprobador debe revisar y aprobar
- El aprobador debe ser diferente del autor del PR

### Resolución de Discusiones
- Todas las conversaciones en el PR deben resolverse antes de fusionar
- El merge está bloqueado si hay discusiones pendientes

### Revisión de Código
- Al menos un miembro del equipo debe revisar el código
- Verificar calidad, seguridad y estilo

## Proceso de Pull Request

### Crear Pull Request

1. Asegurar que la rama está actualizada con la rama destino (`develop` o `main`)
2. Resolver conflictos de fusión
3. Crear Pull Request con:
   - Título descriptivo
   - Descripción detallada de cambios
   - Referencias a issues relacionados
   - Checklist de verificación (si aplica)

### Revisar Pull Request

1. Revisar código cuidadosamente
2. Agregar comentarios constructivos si es necesario
3. Iniciar discusiones para puntos que requieran aclaración
4. Aprobar o solicitar cambios

### Fusionar Pull Request

1. Verificar que se cumplan todos los requisitos:
   - Al menos 1 aprobación
   - Todas las discusiones resueltas
   - Sin conflictos
2. Seleccionar tipo de merge (preferiblemente Squash Merge)
3. Completar el merge
4. Eliminar rama después del merge exitoso

## Estrategia de Merge

Todos los tipos de merge están disponibles, pero sigue estas preferencias:

### Squash Merge (RECOMENDADO)

**Usar para:** Ramas `feature`, `release`, y `hotfix` que se fusionan en `main` o `develop`

Combina todos los commits en un único commit con mensaje descriptivo. Mantiene el historial limpio y legible.

**Mejores prácticas:**
- Preferir Squash Merge para ramas `main` y `develop`
- Escribir mensajes de commit claros al hacer squash
- Eliminar rama inmediatamente después del merge
- Verificar que el merge no introduce problemas

### Merge Commit

**Usar cuando:** Se requiere preservar el historial completo

### Rebase and Merge

**Usar cuando:** Se desea un historial lineal sin commits de merge

## Convenciones de Archivos Markdown

**POLÍTICA CRÍTICA DEL REPOSITORIO**

Este repositorio implementa la convención de doble archivo para archivos markdown consumidos por herramientas de IA (agentes, interfaces de chat, sistemas de contexto, memoria, configuración).

### Requisito de Doble Archivo

Cuando un archivo markdown sirve como entrada para herramientas de IA, crear **DOS archivos**:

#### Archivo Legible para Humanos (`*.h.md`)

- **Extensión:** `.h.md` (h = human)
- **Idioma:** Español (a menos que se especifique explícitamente lo contrario)
- **Formato:** Markdown con elementos visuales moderados
  - Títulos, listas, tablas
  - Elementos visuales (emojis, iconos) usados con moderación y propósito
  - Evitar exceso de elementos que distraigan
  - Estructura clara y organizada
  - Explicaciones detalladas y ejemplos ilustrativos
- **Propósito:** Versión profesional y amigable para revisión y comprensión humana

#### Archivo Optimizado para IA (`*.md`)

- **Extensión:** `.md`
- **Ubicación:** Mismo directorio que el archivo `.h.md` correspondiente
- **Nombre base:** Debe coincidir con el archivo `.h.md`
- **Idioma:** Inglés (siempre)
- **Formato:** Optimizado para comprensión de IA y eficiencia de tokens
  - Puede omitir elementos visuales organizativos si no son necesarios para comprensión
  - Contenido directo y orientado hacia entendimiento de IA
  - Optimización de tokens sin pérdida de contexto
  - **Importante:** No resumir si causa pérdida de información
  - Si listas, títulos o estructura son necesarios para comprensión de IA, mantenerlos
- **Propósito:** Versión agent-ready para consumo por agentes de IA

### Ejemplos de Nomenclatura

#### Estructura Correcta

```
docs/
├── AGENTS.h.md     (Humano, Español)
├── AGENTS.md       (IA, Inglés)
├── SKILLS.h.md     (Humano, Español)
└── SKILLS.md       (IA, Inglés)
```

#### Estructura Incorrecta

```
docs/AGENTS.es.md           (no usar sufijos de idioma)
docs/AGENTS.en.md           (no usar sufijos de idioma)
docs/SKILLS.md              (falta versión .h.md)
```

### Principios de Optimización para IA (archivos `.md`)

| Principio | Descripción |
|-----------|-------------|
| **No Perder Contexto** | La información debe ser completa y mantener el significado |
| **Usar Inglés** | Todas las versiones `.md` deben estar en inglés |
| **Evaluar Estructura** | Decidir caso por caso si títulos/listas ayudan a la comprensión de IA |
| **Prosa Directa** | Preferir párrafos directos sobre estructura visual cuando sea apropiado |
| **Mantener Precisión** | Los detalles técnicos no deben omitirse |

### Cuándo Aplicar la Convención

**Aplicar para:**
- Archivos de configuración de agentes
- Archivos de instrucciones para IA
- Archivos de contexto para herramientas de IA
- Documentación de skills y capacidades
- Archivos de memoria y conocimiento
- Configuración MCP (Model Context Protocol)
- Cualquier archivo markdown consumido por herramientas de IA

**NO aplicar para:**
- README.md del proyecto
- Documentación técnica estándar
- Archivos Changelog
- Archivos solo leídos por humanos

### Verificación en Pull Request

Al revisar PRs con archivos markdown:

- Si existe archivo `.h.md`, debe existir archivo `.md` correspondiente
- Archivo `.h.md` debe estar en español (a menos que haya excepción explícita)
- Archivo `.md` debe estar en inglés
- El contenido de ambos archivos debe ser equivalente (sin pérdida de información)
- Versión `.md` debe estar optimizada para IA sin perder contexto

## Conventional Commits y Herramientas

Este repositorio utiliza **Conventional Commits v1.0.0** para todos los mensajes de commit. Los commits son validados automáticamente.

### Formato Requerido

```
<tipo>(<alcance opcional>): <descripción>
```

### Tipos Válidos

`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

### Herramientas Configuradas

| Herramienta | Propósito | Configuración |
|-------------|----------|---------------|
| **commitlint** | Valida formato de commits | `commitlint.config.js` |
| **husky** | Ejecuta commitlint via hook `commit-msg` | `.husky/commit-msg` |
| **commitizen** | Asistente interactivo (`npm run commit`) | `package.json` > `config.commitizen` |
| **commit-and-tag-version** | Genera versión + CHANGELOG + commit de release | `.versionrc.json` |
| **VS Code Extension** | Asistente visual para commits | `.vscode/extensions.json` (`vivaxy.vscode-conventional-commits`) |

### Impacto en SemVer

- `feat:` → bump MINOR
- `fix:` / `perf:` → bump PATCH
- `BREAKING CHANGE` o `!` → bump MAJOR
- Otros tipos no incrementan versión

## Proceso de Release y Versionado

El proyecto usa **Semantic Versioning 2.0.0** (MAJOR.MINOR.PATCH) con automatización via **commit-and-tag-version**.

### Scripts de Release

| Script | Uso |
|--------|-----|
| `npm run release:preview` | Vista previa de versión (sin cambios) |
| `npm run release` | Calcula versión automáticamente |
| `npm run release:first` | Primer release (solo CHANGELOG) |
| `npm run release:major` | Forzar bump MAJOR |
| `npm run release:minor` | Forzar bump MINOR |
| `npm run release:patch` | Forzar bump PATCH |

### Flujo de Release (Git Flow + commit-and-tag-version)

1. Vista previa desde `develop`: `npm run release:preview` (muestra versión sin modificar archivos)
2. Crear rama `release/X.Y.Z` desde `develop` con el número detectado
3. Ejecutar `npm run release` (actualiza `package.json`, genera `CHANGELOG.md`, crea commit `chore(release): X.Y.Z`)
4. Push + PR a `main`
5. Merge a `main`
6. Crear tag en `main`: `git tag -a vX.Y.Z -m "chore(release): X.Y.Z"` + push tag
7. Merge de `main` de vuelta a `develop`
8. Eliminar rama release

> **Importante:** El tag se crea en `main` después del merge (configuración `skip.tag: true` en `.versionrc.json`), porque el squash merge crea un commit nuevo que no corresponde al de la rama release.

### CHANGELOG

- **Archivo:** `CHANGELOG.md` en la raíz del proyecto
- **Generado automáticamente** por `commit-and-tag-version`
- **No debe editarse manualmente**
- Tipos visibles: Features (`feat`), Bug Fixes (`fix`), Performance (`perf`), Reverts (`revert`)

## Descripción del Proyecto

Este repositorio contiene un sitio web educativo de tipo **playground** para la enseñanza de **Conventional Commits**. El objetivo es que los usuarios puedan aprender y practicar la especificación de conventional commits de forma interactiva directamente en el navegador.

## Stack Tecnológico y Filosofía de Desarrollo

### Tecnologías Base

El sitio se desarrolla exclusivamente con tecnologías web estándar:

- **HTML5**: Maquetación semántica y moderna
- **CSS3**: Estilos con funcionalidades modernas (custom properties, grid, flexbox, etc.)
- **JavaScript (ECMAScript 2026+)**: Lógica e interactividad, usando la especificación más reciente disponible

### Filosofía Vanilla First

Debe evitarse el uso de frameworks y librerías externas en la medida de lo posible. El sitio debe desarrollarse lo más **vanilla** posible. Solo se recurrirá a librerías externas cuando la funcionalidad requerida sea compleja y su implementación manual sea impráctico o pronea a errores.

Cuando sea necesario utilizar librerías externas:
- La gestión de paquetes se realiza con **npm**
- La resolución de módulos y bundling se gestiona con **Vite** si aplica

### Herramientas de Build

- Debe configurarse al menos un **task manager** (como Vite, Gulp o scripts npm) para compilar y procesar el código
- La página final en producción debe servir versiones **minificadas** tanto de scripts como de hojas de estilo
- El proceso de build debe automatizar: minificación de CSS, minificación de JavaScript y cualquier otra optimización necesaria

## Perfil del Agente de Desarrollo

El agente debe actuar como un **desarrollador senior experto** en:
- Desarrollo de sitios web con HTML, CSS y JavaScript vanilla
- Conocimiento empresarial de **Node.js**, **npm** y **Vite**
- Aplicación de principios SOLID en desarrollo frontend
- Buenas prácticas de rendimiento, accesibilidad y estándares web modernos

## Estructura del Proyecto

### Directorio `src/`

Toda el código fuente se encuentra dentro de `src/`. La estructura interna sigue esta organización:

```
src/
├── index.html              # Página principal
├── styles/                 # Hojas de estilo CSS
│   ├── main.css            # Estilos principales (o punto de entrada)
│   └── [módulo].css        # Estilos separados por sección o módulo
├── scripts/                # Scripts JavaScript
│   ├── main.js             # Punto de entrada principal
│   └── [módulo]/           # Subcarpetas por módulo o regla de negocio
│       └── [funcionalidad].js
└── assets/                 # Recursos estáticos (imágenes, fuentes, etc.)
```

### Carpeta `styles/`

- Todos los archivos CSS se almacenan en `src/styles/`
- Los estilos deben organizarse de forma que se pueda identificar qué sección del sitio afectan
- Se permite e incentiva la separación de estilos en múltiples archivos por módulo o sección
- Los comentarios son bienvenidos para delimitar secciones, pero no debe abusarse de ellos para no saturar la hoja de estilos

### Carpeta `scripts/`

- Todos los archivos JavaScript se almacenan en `src/scripts/`
- Dentro de `scripts/` pueden crearse **subcarpetas** organizadas por módulos o reglas de negocio
- Cada módulo debe tener una responsabilidad clara y coherente
- Se usa el sistema de módulos ES (`import`/`export`) para organizar el código

## Lineamientos de HTML

### Maquetación Estructurada

- Utilizar etiquetas **semánticas** de HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, etc.
- Cada sección importante debe estar delimitada con **comentarios de inicio y fin** para guiar a los desarrolladores en la comprensión de la maquetación

Ejemplo de comentarios de sección:
```html
<!-- Hero Section -->
<section class="hero">
  <!-- contenido -->
</section>
<!-- /Hero Section -->

<!-- Playground Area -->
<section class="playground">
  <!-- contenido -->
</section>
<!-- /Playground Area -->
```

### Reglas de Comentarios en HTML

- Los comentarios deben ser **concisos y descriptivos**, indicando solo el inicio (`<!-- Nombre -->`) y fin (`<!-- /Nombre -->`) de secciones relevantes
- No saturar el código con comentarios excesivos o redundantes
- Solo comentar lo necesario para que un desarrollador pueda entender la estructura de la maquetación rápidamente

### Buenas Prácticas HTML

- Usar atributos modernos de HTML5
- Mantener accesibilidad con atributos ARIA cuando sea necesario
- Estructura de documento correcta: `<!DOCTYPE html>`, `<html lang="es">`, `<head>`, `<body>`

## Lineamientos de CSS

### Organización del Código

- Cada archivo CSS debe contener estilos relacionados a una sección o módulo específico del sitio
- Dentro de cada archivo, los estilos deben organizarse de forma que sea fácil identificar qué parte de la interfaz afectan
- Usar **comentarios de sección** para delimitar bloques lógicos, pero sin abusar de ellos

Ejemplo de organización en CSS:
```css
/* === Hero Section === */
.hero { /* ... */ }
.hero__title { /* ... */ }
.hero__subtitle { /* ... */ }

/* === Playground Section === */
.playground { /* ... */ }
.playground__input { /* ... */ }
```

### Convenciones de Estilo CSS

- Aprovechar funcionalidades modernas de CSS: **Custom Properties** (`--variables`), **Grid**, **Flexbox**, **Container Queries**, `clamp()`, `min()`, `max()`, etc.
- Preferir unidades relativas (`rem`, `em`, `%`, `vw`, `vh`) sobre unidades absolutas cuando sea apropiado
- Mantener especificidad baja y predecible
- Se recomienda seguir una convención de nomenclatura consistente (ejemplo: BEM o similar) para las clases CSS

## Lineamientos de JavaScript

### Versión y Sintaxis

- Utilizar **ECMAScript 2026+** (la versión moderna más reciente)
- Preferir **funciones flecha** (`=>`) para definición de funciones, siempre que no complique la legibilidad o el contexto de `this`
- Usar `const` por defecto, `let` cuando sea necesario reasignar, nunca `var`
- Usar **template literals** para concatenación de strings
- Aprovechar **destructuring**, **spread/rest operators**, **optional chaining** (`?.`), **nullish coalescing** (`??`) y demás funcionalidades modernas

### Principios SOLID

El código JavaScript debe desarrollarse siguiendo los principios SOLID adaptados al contexto frontend:

| Principio | Aplicación |
|-----------|------------|
| **S - Responsabilidad Única** | Cada función y módulo debe tener una sola responsabilidad claramente definida |
| **O - Abierto/Cerrado** | Los módulos deben ser extensibles sin necesidad de modificar el código existente |
| **L - Sustitución de Liskov** | Las abstracciones deben ser intercambiables sin alterar el comportamiento esperado |
| **I - Segregación de Interfaces** | Exportar solo lo necesario desde cada módulo, evitar interfaces "gordas" |
| **D - Inversión de Dependencias** | Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones |

### Organización Modular

- El código debe organizarse en **módulos ES** (`import`/`export`)
- Cada módulo debe corresponder a una regla de negocio o funcionalidad específica
- Las funciones deben realizar **tareas específicas y bien definidas**, evitando funciones monolíticas
- Un archivo no debe contener demasiada lógica; si crece demasiado, debe dividirse en submódulos

### Ejemplo de Estructura Modular

```
src/scripts/
├── main.js                     # Punto de entrada: inicialización y orquestación
├── parser/
│   ├── commitParser.js         # Lógica de parsing de commits
│   └── validators.js           # Validaciones de formato
├── ui/
│   ├── playground.js           # Lógica del área de playground
│   ├── feedback.js             # Sistema de retroalimentación al usuario
│   └── themes.js               # Gestión de temas visuales
├── utils/
│   └── helpers.js              # Utilidades generales reutilizables
└── constants/
    └── commitTypes.js           # Constantes y configuraciones
```

### Documentación del Código JavaScript

- Las funciones exportadas deben tener documentación **JSDoc** breve que describa su propósito, parámetros y retorno
- Comentarios inline solo cuando la lógica no sea autoexplicativa
- Preferir código autoexplicativo con nombres descriptivos sobre comentarios excesivos

Ejemplo:
```javascript
/**
 * Parses a conventional commit message and returns its components.
 * @param {string} message - The raw commit message to parse
 * @returns {{ type: string, scope: string|null, description: string }} Parsed commit object
 */
const parseCommitMessage = (message) => {
  // ...implementation
};
```

## Lineamientos de Rendimiento y Producción

### Minificación y Optimización

- Todo el CSS y JavaScript del sitio debe minificarse para producción
- El proceso de build debe configurarse para generar archivos `.min.css` y `.min.js` (o bundles equivalentes optimizados)
- Deben utilizarse herramientas de build como Vite, scripts npm u otra herramienta de task management para automatizar este proceso

### Buenas Prácticas de Rendimiento

- Carga diferida de scripts con `defer` o `type="module"`
- Optimización de imágenes y recursos estáticos
- Uso eficiente del DOM: preferir manipulación mínima y batch de cambios
- Evitar reflows y repaints innecesarios

## Ejemplos de Flujos de Trabajo

### Desarrollo de Feature

```bash
# 1. Crear rama feature desde develop
git checkout -b feature/123-new-feature develop

# 2. Desarrollar feature con commits convencionales
git commit -m "feat(scope): add new feature"

# 3. Mantener rama actualizada
git merge develop

# 4. Crear Pull Request a develop
# 5. Obtener aprobación y resolver discusiones
# 6. Squash merge a develop
# 7. Eliminar rama feature
```

### Preparación de Release

```bash
# 1. Vista previa de versión desde develop
git checkout develop
git pull origin develop
npm run release:preview
# Output: "bumping version from 1.0.0 to 1.1.0"

# 2. Crear rama release con versión detectada
git checkout -b release/X.Y.Z

# 3. Ejecutar release (genera versión + CHANGELOG + commit)
npm run release
# Para primer release: npm run release:first
# Para forzar versión: npm run release:major / release:minor / release:patch

# 4. Push de la rama
git push origin release/X.Y.Z

# 5. Crear Pull Request a main
# 6. Después de aprobación, fusionar en main

# 7. Crear tag en main
git checkout main
git pull origin main
git tag -a vX.Y.Z -m "chore(release): X.Y.Z"
git push origin vX.Y.Z

# 8. Fusionar cambios de vuelta a develop
git checkout develop
git merge main
git push origin develop

# 9. Eliminar rama release
git branch -d release/X.Y.Z
git push origin --delete release/X.Y.Z
```

### Hotfix

```bash
# 1. Crear rama hotfix desde main
git checkout main
git pull origin main
git checkout -b hotfix/456-critical-fix

# 2. Corregir el problema crítico
git commit -m "fix(module): description of the fix"

# 3. Ejecutar release (generalmente patch)
npm run release:patch

# 4. Push de la rama
git push origin hotfix/456-critical-fix

# 5. Crear Pull Request a main
# 6. Después de aprobación, fusionar en main

# 7. Crear tag en main
git checkout main
git pull origin main
git tag -a vX.Y.Z -m "chore(release): X.Y.Z"
git push origin vX.Y.Z

# 8. Fusionar cambios de vuelta a develop
git checkout develop
git merge main
git push origin develop

# 9. Eliminar rama hotfix
git branch -d hotfix/456-critical-fix
git push origin --delete hotfix/456-critical-fix
```

## Reglas Críticas para Agentes de IA

Al trabajar con este repositorio:

- Siempre verificar la rama actual antes de crear nuevas ramas
- Ramas `feature` siempre se originan desde `develop`, nunca desde `main`
- Ramas `hotfix` siempre se originan desde `main`, nunca desde `develop`
- Ramas `release` se originan desde `develop` y se fusionan en `main` Y `develop`
- Nunca hacer push directo a ramas `main` o `develop`
- Siempre crear Pull Request para integrar código
- Nombres de ramas deben seguir formato exacto: `tipo/número-descripción` con guiones
- Squash merge es fuertemente preferido para historial más limpio
- Eliminar ramas después de fusionar para mantener repositorio limpio
- Todas las discusiones en PR deben resolverse antes de permitir merge
- Mínimo una aprobación es requerida para cualquier PR a ramas protegidas
- Al crear o modificar archivos markdown para consumo de IA, siempre crear ambas versiones `.h.md` (español, humano) y `.md` (inglés, optimizado para IA)
- Mantener equivalencia de contenido entre versiones `.h.md` y `.md` sin pérdida de información
- Verificar cumplimiento de convención de doble archivo en Pull Requests
- **Todos los commits deben seguir formato Conventional Commits** (`tipo(alcance): descripción`)
- **Usar `npm run commit`** para asistente interactivo o la extensión de VS Code `vivaxy.vscode-conventional-commits`
- **Nunca editar `CHANGELOG.md` manualmente**; se genera automáticamente con `commit-and-tag-version`
- **Seguir el Proceso de Release** documentado: ejecutar `npm run release` en rama release, crear tag en `main` después del merge
- **Los tags se crean en `main`** después del merge, nunca en la rama release

---

**Última actualización:** 2026-02-10  
**Fuente:** CONTRIBUTING.md v2.0.0
