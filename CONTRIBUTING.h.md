# Guía de Contribución - conventional-commits-playground

Bienvenido al proyecto **conventional-commits-playground**. Este documento establece los lineamientos y procedimientos para contribuir al proyecto de manera efectiva y consistente.

## 📋 Tabla de Contenidos

1. [Estrategia de Ramas](#estrategia-de-ramas)
2. [Flujo de Trabajo Git Flow](#flujo-de-trabajo-git-flow)
3. [Políticas de Protección de Ramas](#políticas-de-protección-de-ramas)
4. [Proceso de Pull Requests](#proceso-de-pull-requests)
5. [Estrategia de Merge](#estrategia-de-merge)
6. [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
7. [Conventional Commits](#conventional-commits)
8. [Versionado Semántico (SemVer)](#versionado-semántico-semver)
9. [Proceso de Release](#proceso-de-release)
10. [CHANGELOG](#changelog)
11. [Convenciones de Archivos Markdown](#convenciones-de-archivos-markdown)
12. [Procedimientos Recomendados (To-Do)](#procedimientos-recomendados-to-do)

---

## Estrategia de Ramas

El proyecto utiliza la metodología **Git Flow** para la gestión de ramas. Esta estrategia proporciona un marco robusto para manejar el desarrollo, releases y correcciones de errores.

### Ramas Principales

#### `main` (o `master`)
- Contiene la última versión estable del código en producción
- Solo se actualiza mediante Pull Requests desde ramas `release` o `hotfix`
- Cada commit en esta rama debe corresponder a una versión de producción
- Protegida con políticas estrictas de seguridad

#### `develop`
- Contiene la última versión en desarrollo del proyecto
- Punto de integración para todas las nuevas características
- Se actualiza mediante Pull Requests desde ramas `feature`
- Base para crear ramas `release`
- Protegida con políticas de seguridad

### Ramas de Soporte

Estas no son ramas permanentes, sino prefijos para crear ramas temporales:

#### `feature/*`
- **Propósito**: Desarrollo de nuevas características o funcionalidades
- **Nomenclatura**: `feature/[número-issue]-descripcion-corta`
- **Ejemplo**: `feature/1234-user-authentication`
- **Origen**: Se crean desde `develop`
- **Destino**: Se fusionan de vuelta a `develop`
- **Ciclo de vida**: Se eliminan después del merge exitoso

#### `release/*`
- **Propósito**: Preparación de una nueva versión para producción
- **Nomenclatura**: `release/[número-version]` o `release/[número-issue]-descripcion`
- **Ejemplo**: `release/1.2.0` o `release/5678-v1.2.0-release`
- **Origen**: Se crean desde `develop`
- **Destino**: Se fusionan a `main` y `develop`
- **Uso**: Ajustes finales, corrección de bugs menores, actualización de versiones
- **Ciclo de vida**: Se eliminan después del merge exitoso

#### `hotfix/*`
- **Propósito**: Correcciones urgentes en producción
- **Nomenclatura**: `hotfix/[número-issue]-descripcion-corta`
- **Ejemplo**: `hotfix/9012-critical-security-fix`
- **Origen**: Se crean desde `main`
- **Destino**: Se fusionan a `main` y `develop`
- **Uso**: Solucionar problemas críticos en producción sin esperar el próximo release
- **Ciclo de vida**: Se eliminan después del merge exitoso

---

## Flujo de Trabajo Git Flow

Para más detalles sobre la metodología Git Flow, consulta la documentación oficial:  
🔗 [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

### Flujo Típico para Features

```
develop ─┬─> feature/123-nueva-funcionalidad
         │         │
         │         │ (desarrollo)
         │         │
         └─────────┘ (merge via PR)
```

### Flujo Típico para Releases

```
develop ─┬─> release/1.1.0
         │         │
         │         │ npm run release
         │         │ (versión + CHANGELOG + commit)
         │         │
         │         │ Push + PR a main
         │         │
main ────┴─────────┴─> (merge via PR)
         │         │
         │    git tag v1.1.0 (en main)
         │    git push origin v1.1.0
         │
develop ─┴─────────> (merge de main a develop)
```

### Flujo Típico para Hotfixes

```
main ─┬─> hotfix/456-error-critico
      │         │
      │         │ (corrección urgente)
      │         │
      └─────────┴─> (merge via PR a main)
      │
develop ─────────> (merge de cambios de hotfix)
```

---

## Políticas de Protección de Ramas

Las siguientes políticas están activas para las ramas **`main`**, **`master`** y **`develop`**:

### Requisitos Obligatorios

1. **Pull Request Obligatorio**
   - No se permite hacer push directo a estas ramas
   - Todo cambio debe pasar por un Pull Request

2. **Aprobación Requerida**
   - Mínimo **1 aprobador** debe revisar y aprobar el PR
   - El aprobador debe ser diferente al autor del PR

3. **Resolución de Discusiones**
   - Todas las conversaciones y discusiones en el PR deben estar resueltas
   - No se puede hacer merge con discusiones pendientes

4. **Revisión de Código**
   - El código debe ser revisado por al menos un miembro del equipo
   - Se deben verificar aspectos de calidad, seguridad y estilo

---

## Proceso de Pull Requests

### Creación de Pull Request

1. **Asegurar que la rama está actualizada**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout tu-rama
   git merge develop
   ```

2. **Resolver conflictos** si los hay

3. **Crear el Pull Request** en GitHub con:
   - Título descriptivo
   - Descripción detallada de los cambios
   - Referencias a issues relacionados
   - Checklist de verificación si aplica

### Revisión de Pull Request

1. **Revisar el código** cuidadosamente
2. **Agregar comentarios** constructivos si es necesario
3. **Iniciar discusiones** para puntos que requieren aclaración
4. **Aprobar o solicitar cambios**

### Merge de Pull Request

1. **Verificar** que todos los requisitos estén cumplidos:
   - ✅ Al menos 1 aprobación
   - ✅ Todas las discusiones resueltas
   - ✅ Sin conflictos

2. **Seleccionar el tipo de merge** (preferiblemente Squash Merge)

3. **Completar el merge**

4. **Eliminar la rama** después del merge exitoso

---

## Estrategia de Merge

### Tipos de Merge Disponibles

Si bien están activos todos los tipos de merge en el repositorio, se recomienda seguir estas preferencias:

#### **Squash Merge** (Recomendado)
- **Cuándo usar**: Para ramas `feature`, `release` y `hotfix` que se fusionan a `main` o `develop`
- **Ventaja**: Mantiene el historial limpio y legible
- **Resultado**: Todos los commits de la rama se combinan en un único commit
- **Formato del mensaje**: Debe ser descriptivo y completo

#### Merge Commit
- **Cuándo usar**: Casos específicos donde se requiere preservar el historial completo
- **Ventaja**: Mantiene el historial de commits de la rama

#### Rebase and Merge
- **Cuándo usar**: Cuando se desea un historial lineal sin commits de merge
- **Ventaja**: Historial más limpio sin commits de merge

### Buenas Prácticas

1. **Preferir Squash Merge** para `main` y `develop`
2. **Escribir mensajes de commit claros** al hacer squash
3. **Eliminar la rama** inmediatamente después del merge
4. **Verificar** que el merge no introduzca problemas

---

## Convenciones de Nomenclatura

### Formato de Ramas

Todas las ramas de soporte deben seguir el formato:

```
[tipo]/[número-o-identificador]-[descripcion-corta]
```

- **tipo**: `feature`, `release`, o `hotfix`
- **número-o-identificador**: Número de issue o identificador único
- **descripcion-corta**: Descripción breve en kebab-case (palabras separadas por guiones)

### Ejemplos Válidos

✅ `feature/123-authentication-system`  
✅ `feature/456-add-user-dashboard`  
✅ `release/1.0.0`  
✅ `release/789-v2.0.0-release`  
✅ `hotfix/234-fix-login-error`  
✅ `hotfix/567-security-patch`  

### Ejemplos No Válidos

❌ `feature-authentication` (falta separador `/`)  
❌ `Feature/123-auth` (tipo debe estar en minúsculas)  
❌ `feature/authentication_system` (usar guiones, no guiones bajos)  
❌ `feature/123 authentication` (no usar espacios)  

---

## Conventional Commits

Este proyecto adopta la especificación [Conventional Commits v1.0.0](https://www.conventionalcommits.org/) para todos los mensajes de commit. Esta convención permite generar automáticamente el CHANGELOG, determinar la versión semántica y mantener un historial de commits limpio y legible.

### Formato del Mensaje

```
<tipo>(<alcance opcional>): <descripción>

[cuerpo opcional]

[pie de página opcional]
```

### Tipos Válidos

| Tipo | Descripción | Impacto en SemVer |
|------|-------------|-------------------|
| `feat` | Nueva funcionalidad | MINOR |
| `fix` | Corrección de error | PATCH |
| `docs` | Cambios en documentación | - |
| `style` | Formato, punto y coma, etc. (sin cambio de código) | - |
| `refactor` | Refactorización de código | - |
| `perf` | Mejora de rendimiento | PATCH |
| `test` | Agregar o corregir tests | - |
| `build` | Cambios en sistema de build o dependencias | - |
| `ci` | Cambios en configuración de CI/CD | - |
| `chore` | Tareas de mantenimiento | - |
| `revert` | Revertir un commit anterior | - |

### Breaking Changes

Los cambios incompatibles con versiones anteriores se indican de dos formas:

1. **Con `!` después del tipo/alcance**: `feat!: remove deprecated API`
2. **Con footer `BREAKING CHANGE:`**:
   ```
   feat(api): change response format

   BREAKING CHANGE: the response now returns an array instead of an object
   ```

Cualquier breaking change incrementa la versión **MAJOR**.

### Ejemplos

```bash
# Feature simple
feat(playground): add real-time commit validation

# Fix con alcance
fix(parser): resolve incorrect footer detection

# Documentación
docs(readme): update installation instructions

# Breaking change
feat(api)!: redesign commit parser output format

BREAKING CHANGE: parseCommit() now returns a structured object instead of a string array

# Commit con cuerpo y footer
feat(ui): add dark mode toggle

Implement theme switching with CSS custom properties.
Persist user preference in localStorage.

Closes #42
```

### Herramientas Instaladas

#### commitlint + husky (Validación Automática)

Cada commit es validado automáticamente mediante un **git hook**. Si el mensaje no cumple con el formato Conventional Commits, el commit será **rechazado**.

- **commitlint**: Valida el formato del mensaje de commit
- **husky**: Ejecuta commitlint automáticamente en cada commit via el hook `commit-msg`
- **Configuración**: `commitlint.config.js` en la raíz del proyecto

> ⚠️ Si intentas hacer un commit con un mensaje inválido como `"updated stuff"`, será rechazado. Debes usar el formato `tipo: descripción` como mínimo.

#### commitizen (Asistente Interactivo por Terminal)

Para facilitar la creación de commits válidos, se incluye **commitizen** como asistente interactivo:

```bash
npm run commit
```

Esto abre un asistente paso a paso que pregunta:
1. Tipo de cambio (feat, fix, docs, etc.)
2. Alcance del cambio (opcional)
3. Descripción corta
4. Descripción larga (opcional)
5. Breaking changes (opcional)
6. Issues relacionados (opcional)

#### Extensión de VS Code (Conventional Commits)

El proyecto recomienda la extensión **Conventional Commits** (`vivaxy.vscode-conventional-commits`) para Visual Studio Code. Al abrir el proyecto, VS Code sugerirá instalarla.

**Cómo usarla:**
1. Abrir el panel **Source Control** (Ctrl+Shift+G)
2. Hacer clic en el ícono de ✔️ círculo (Conventional Commits) en la barra superior del panel
3. Seguir el asistente visual paso a paso
4. El mensaje se genera automáticamente en el campo de commit

---

## Versionado Semántico (SemVer)

El proyecto adopta **Semantic Versioning 2.0.0** ([semver.org](https://semver.org/)) para gestionar las versiones.

### Formato de Versión

```
MAJOR.MINOR.PATCH
```

| Componente | Cuándo se incrementa | Ejemplo |
|------------|---------------------|---------|
| **MAJOR** | Cambios incompatibles (breaking changes) | `1.0.0` → `2.0.0` |
| **MINOR** | Nueva funcionalidad compatible hacia atrás | `1.0.0` → `1.1.0` |
| **PATCH** | Correcciones de bugs compatibles | `1.0.0` → `1.0.1` |

### Cálculo Automático

La versión se calcula automáticamente basándose en los commits desde la última versión:

- Commit `feat:` → incrementa **MINOR**
- Commit `fix:` → incrementa **PATCH**
- Commit `perf:` → incrementa **PATCH**
- Commit con `BREAKING CHANGE` o `!` → incrementa **MAJOR**
- Otros tipos (`docs`, `style`, `refactor`, etc.) → no incrementan versión

### Herramienta: commit-and-tag-version

Se utiliza **commit-and-tag-version** (sucesor de `standard-version`) para automatizar:

1. Cálculo de la siguiente versión basado en commits
2. Actualización de `package.json` con la nueva versión
3. Generación/actualización de `CHANGELOG.md`
4. Creación de un commit de release (`chore(release): X.Y.Z`)

**Configuración:** `.versionrc.json` en la raíz del proyecto.

> ⚠️ **Nota sobre tags en Git Flow:** El tag NO se crea automáticamente (configuración `skip.tag: true`). El tag se crea manualmente en `main` después del merge, para que apunte al commit correcto en la rama protegida.

### Scripts Disponibles

| Script | Comando | Uso |
|--------|---------|-----|
| `npm run release:preview` | `commit-and-tag-version --dry-run` | Vista previa de la siguiente versión (sin modificar archivos) |
| `npm run release` | `commit-and-tag-version` | Release automático (calcula versión) |
| `npm run release:first` | `commit-and-tag-version --first-release` | Primer release (solo genera CHANGELOG) |
| `npm run release:major` | `commit-and-tag-version --release-as major` | Forzar bump MAJOR |
| `npm run release:minor` | `commit-and-tag-version --release-as minor` | Forzar bump MINOR |
| `npm run release:patch` | `commit-and-tag-version --release-as patch` | Forzar bump PATCH |

---

## Proceso de Release

El proceso de release integra **Git Flow** con **commit-and-tag-version** para automatizar el versionado y la generación de CHANGELOG.

### Flujo Completo Paso a Paso

```bash
# 1. Verificar qué versión se calculará (sin modificar archivos)
git checkout develop
git pull origin develop
npm run release:preview
# Output muestra: "bumping version from 1.0.0 to 1.1.0"

# 2. Crear rama release con el número de versión detectado
git checkout -b release/X.Y.Z

# 3. Ejecutar el release (calcula versión + actualiza CHANGELOG + crea commit)
npm run release
# Para el primer release del proyecto:
npm run release:first
# Para forzar una versión específica:
npm run release:major  # o release:minor o release:patch

# 4. Push de la rama release
git push origin release/X.Y.Z

# 5. Crear Pull Request de release/X.Y.Z → main
#    - Obtener aprobación
#    - Resolver discusiones
#    - Merge (preferiblemente Squash Merge)

# 6. Crear tag en main (después del merge)
git checkout main
git pull origin main
git tag -a vX.Y.Z -m "chore(release): X.Y.Z"
git push origin vX.Y.Z

# 7. Merge de main de vuelta a develop
git checkout develop
git merge main
git push origin develop

# 8. Eliminar rama release
git branch -d release/X.Y.Z
git push origin --delete release/X.Y.Z
```

### ¿Por Qué el Tag se Crea en `main` y no en la Rama Release?

Al usar **Squash Merge** (estrategia recomendada), los commits de la rama release se combinan en un único commit en `main`. Si el tag se creara en la rama release, apuntaría a un commit que **no existe en `main`** después del squash. Por eso:

1. `commit-and-tag-version` está configurado con `skip.tag: true`
2. El tag se crea **manualmente** en `main` después del merge
3. Esto garantiza que el tag apunte al commit correcto en la rama de producción

### Proceso para Hotfix

Los hotfixes siguen un proceso similar pero desde `main`:

```bash
# 1. Crear rama hotfix desde main
git checkout main
git pull origin main
git checkout -b hotfix/NNN-descripcion

# 2. Realizar la corrección
# 3. Ejecutar release (generalmente patch)
npm run release:patch

# 4. Push + PR a main + merge
# 5. Tag en main (igual que en release)
# 6. Merge de main a develop
# 7. Eliminar rama hotfix
```

---

## CHANGELOG

El archivo `CHANGELOG.md` se genera y actualiza **automáticamente** mediante `commit-and-tag-version`. **No debe editarse manualmente.**

### Estructura del CHANGELOG

El CHANGELOG agrupa los cambios por versión y tipo:

```markdown
# Changelog

## [1.1.0](link-comparación) (2026-02-15)

### Features
* **playground:** add real-time validation (commit-hash)
* **ui:** add dark mode toggle (commit-hash)

### Bug Fixes
* **parser:** resolve incorrect footer detection (commit-hash)
```

### Tipos Visibles en el CHANGELOG

Por configuración en `.versionrc.json`, solo estos tipos aparecen en el CHANGELOG:
- **Features** (commits `feat:`)
- **Bug Fixes** (commits `fix:`)
- **Performance Improvements** (commits `perf:`)
- **Reverts** (commits `revert:`)

Otros tipos (`docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`) están ocultos por defecto para mantener el CHANGELOG enfocado en cambios relevantes para el usuario final.

---

## Convenciones de Archivos Markdown

Este proyecto establece una convención específica para archivos markdown que son consumidos por herramientas de inteligencia artificial (agentes, chats, contexto, memoria, configuración, etc.). El objetivo es facilitar tanto la lectura humana como la optimización para herramientas de IA.

### Regla de Archivos Duales

Siempre que un archivo markdown sea insumo para una herramienta de IA, se deben generar **dos archivos**:

#### Archivo para Lectura Humana (`*.h.md`)

- **Extensión**: `.h.md` (h = human)
- **Idioma**: Español (a menos que se especifique lo contrario)
- **Formato**: Markdown con elementos visuales moderados
- **Propósito**: Versión profesional y "human-friendly" para revisión y comprensión humana
- **Características**:
  - Uso de elementos markdown (títulos, listas, tablas)
  - Elementos visuales (emojis, iconos) usados con moderación y propósito específico
  - Evitar exceso de elementos que distraigan al lector
  - Estructura clara y organizada que facilite la lectura profesional
  - Explicaciones detalladas
  - Ejemplos ilustrativos

#### Archivo para Herramientas de IA (`*.md`)

- **Extensión**: `.md`
- **Ubicación**: Mismo directorio que el archivo `.h.md`
- **Nombre**: Mismo nombre base que el archivo `.h.md`
- **Idioma**: Inglés (siempre)
- **Formato**: Optimizado para comprensión de IA y tokens
- **Propósito**: Versión "agent-ready"/"ia-ready" para consumo por agentes y herramientas de IA
- **Características**:
  - Puede omitir elementos de organización visual si no son necesarios
  - Contenido directo y orientado a la comprensión de IA
  - Optimización de tokens sin pérdida de contexto
  - **Importante**: No resumir si causa pérdida de información
  - Si listas, títulos o estructura son necesarios para la comprensión de IA, deben mantenerse

### Ejemplos de Nomenclatura

#### Correcto ✅

```
docs/
  ├── AGENTS.h.md          (versión humana en español)
  ├── AGENTS.md            (versión IA en inglés)
  ├── SKILLS.h.md          (versión humana en español)
  └── SKILLS.md            (versión IA en inglés)
```

#### Incorrecto ❌

```
docs/
  ├── AGENTS.es.md         (no usar sufijos de idioma)
  ├── AGENTS.en.md
  └── SKILLS.md            (falta versión .h.md)
```

### Principios de Optimización para IA

Al crear la versión `.md` optimizada para IA:

1. **No Perder Contexto**: La información debe ser completa y mantener su significado
2. **Usar Inglés**: Todas las versiones `.md` deben estar en inglés
3. **Evaluar Estructura**: Decidir caso por caso si títulos/listas ayudan o no a la comprensión de IA
4. **Prosa Directa**: Preferir párrafos directos sobre estructura visual cuando sea apropiado
5. **Mantener Precisión**: Los detalles técnicos no deben omitirse

### Ejemplo Comparativo

**Versión Humana (archivo.h.md) - Español:**

~~~markdown
### Configuración de Autenticación

Para configurar la autenticación JWT en el proyecto:

1. **Instalar dependencias**:
   ```bash
   npm install jsonwebtoken
   ```

2. **Configurar variables de entorno**:
   - `JWT_SECRET`: Clave secreta para firmar tokens
   - `JWT_EXPIRATION`: Tiempo de expiración (ejemplo: "1h")

3. **Implementar middleware**:
   - Crear archivo `middleware/auth.js`
   - Importar y usar en rutas protegidas
~~~

**Versión IA (archivo.md) - Inglés:**

~~~markdown
## JWT Authentication Configuration

Install jsonwebtoken dependency with npm install jsonwebtoken. Configure JWT_SECRET environment variable for token signing and JWT_EXPIRATION for token lifetime (example: "1h"). Create authentication middleware in middleware/auth.js file and apply to protected routes. Import middleware and use in route definitions requiring authentication.
~~~

### Cuándo Aplicar Esta Convención

Esta convención aplica para:

- ✅ Archivos de configuración de agentes
- ✅ Archivos de instrucciones para IA
- ✅ Archivos de contexto para herramientas de IA
- ✅ Documentación de skills y capacidades
- ✅ Archivos de memoria y conocimiento
- ✅ Configuración de MCPs (Model Context Protocols)
- ✅ Cualquier archivo markdown consumido por herramientas de IA

Esta convención **NO aplica** para:

- ❌ README.md del proyecto
- ❌ Documentación técnica estándar
- ❌ Archivos de changelog
- ❌ Archivos que solo leen humanos

### Verificación

Al revisar un Pull Request, verificar:

- [ ] Si hay archivo `.h.md`, existe su correspondiente `.md`
- [ ] El archivo `.h.md` está en español (salvo excepción explícita)
- [ ] El archivo `.md` está en inglés
- [ ] El contenido de ambos archivos es equivalente (sin pérdida de información)
- [ ] La versión `.md` está optimizada para IA sin perder contexto

---

## Procedimientos Recomendados (To-Do)

Las siguientes secciones contienen procedimientos recomendados que aún no han sido implementados pero que se sugieren para mejorar el proceso de contribución:

### ✅ Estrategia de Versionado

**Estado**: ~~Pendiente de definir~~ **Implementado** (v2.0.0)

Ver sección [Versionado Semántico (SemVer)](#versionado-semántico-semver) y [Proceso de Release](#proceso-de-release).

### ✅ Convenciones de Commits

**Estado**: ~~Pendiente de definir~~ **Implementado** (v2.0.0)

Ver sección [Conventional Commits](#conventional-commits).

### 🔲 Integración CI/CD

**Estado**: Pendiente de definir

Se recomienda establecer:
- Definición de pipelines de CI/CD
- Ramas donde se ejecutan builds automáticos
- Requisitos de tests para aprobar PRs
- Criterios de calidad de código (coverage mínimo, linting)
- Configuración de status checks obligatorios
- Proceso de deployment automático

### 🔲 Estándares de Código

**Estado**: Pendiente de definir

Se recomienda establecer:
- Guías de estilo de código por lenguaje
- Configuración de linters y formatters
- Reglas de análisis estático de código
- Estándares de documentación de código
- Requisitos de cobertura de tests

### 🔲 Proceso de Code Review

**Estado**: Pendiente de definir

Se recomienda establecer:
- Checklist detallado para revisiones de código
- Tiempo máximo de respuesta para revisiones
- Criterios de aprobación
- Proceso de escalación para revisiones bloqueadas
- Templates para comentarios de revisión

### 🔲 Gestión de Bugfixes en Develop

**Estado**: Pendiente de definir

Se recomienda clarificar:
- Si bugfixes en `develop` se manejan como `feature/*` o tienen prefijo propio `bugfix/*`
- Proceso para bugfixes que afectan múltiples releases
- Priorización de bugfixes vs features

### 🔲 Configuración de Code Owners

**Estado**: Pendiente de definir

Se recomienda establecer:
- Archivo CODEOWNERS para áreas críticas del código
- Revisores automáticos por área
- Requisitos de aprobación por propietarios de código

### 🔲 Política de Seguridad

**Estado**: Pendiente de definir

Se recomienda establecer:
- Proceso para reportar vulnerabilidades de seguridad
- Flujo de trabajo para security patches
- Análisis de dependencias y vulnerabilidades
- Requisitos de seguridad para PRs

---

## Recursos Adicionales

- [Git Flow Original Article](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## Contacto y Soporte

Si tienes preguntas sobre estos procedimientos o necesitas ayuda, por favor:

1. Consulta la documentación existente
2. Revisa issues similares en el repositorio
3. Crea un nuevo issue con la etiqueta `question` o `help wanted`
4. Contacta a los maintainers del proyecto

---

**Última actualización**: 2026-02-10  
**Versión**: 2.0.0
