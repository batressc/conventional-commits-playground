# Guía de Contribución - conventional-commits-playground

Bienvenido al proyecto **conventional-commits-playground**. Este documento establece los lineamientos y procedimientos para contribuir al proyecto de manera efectiva y consistente.

## 📋 Tabla de Contenidos

1. [Estrategia de Ramas](#estrategia-de-ramas)
2. [Flujo de Trabajo Git Flow](#flujo-de-trabajo-git-flow)
3. [Políticas de Protección de Ramas](#políticas-de-protección-de-ramas)
4. [Proceso de Pull Requests](#proceso-de-pull-requests)
5. [Estrategia de Merge](#estrategia-de-merge)
6. [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
7. [Convenciones de Archivos Markdown](#convenciones-de-archivos-markdown)
8. [Procedimientos Recomendados (To-Do)](#procedimientos-recomendados-to-do)

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
develop ─┬─> release/1.0.0
         │         │
         │         │ (preparación, bugfixes)
         │         │
main ────┴─────────┴─> (merge via PR)
         │
develop ─┴─────────> (merge de cambios de release)
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

### 🔲 Estrategia de Versionado

**Estado**: Pendiente de definir

Se recomienda establecer:
- Adopción de **Semantic Versioning 2.0.0** (MAJOR.MINOR.PATCH)
- Criterios para incrementar cada nivel de versión
- Proceso de creación y gestión de tags
- Documentación del proceso de generación de releases
- Changelog automatizado basado en commits

**Recursos**:
- [Semantic Versioning Specification](https://semver.org/)

### 🔲 Convenciones de Commits

**Estado**: Pendiente de definir

Se recomienda establecer:
- Adopción de **Conventional Commits** para mensajes de commit
- Formato estándar: `<tipo>(<alcance>): <descripción>`
- Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Generación automática de CHANGELOG
- Validación de mensajes de commit mediante hooks

**Ejemplo**:
```
feat(auth): add JWT token validation
fix(api): resolve timeout in user endpoint
docs(readme): update installation instructions
```

**Recursos**:
- [Conventional Commits](https://www.conventionalcommits.org/)

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

**Última actualización**: 2026-02-07  
**Versión**: 1.0.0
