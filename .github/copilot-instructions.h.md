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

## Ejemplos de Flujos de Trabajo

### Desarrollo de Feature

```bash
# 1. Crear rama feature desde develop
git checkout -b feature/123-new-feature develop

# 2. Desarrollar feature con commits
git commit -m "Add new feature"

# 3. Mantener rama actualizada
git merge develop

# 4. Crear Pull Request a develop
# 5. Obtener aprobación y resolver discusiones
# 6. Squash merge a develop
# 7. Eliminar rama feature
```

### Preparación de Release

```bash
# 1. Crear rama release desde develop
git checkout -b release/1.0.0 develop

# 2. Realizar ajustes finales y correcciones de bugs
# 3. Actualizar números de versión y documentación

# 4. Crear Pull Request a main
# 5. Después de aprobación, fusionar en main
# 6. Fusionar cambios de vuelta a develop
# 7. Eliminar rama release
# 8. Etiquetar el release en main
```

### Hotfix

```bash
# 1. Crear rama hotfix desde main
git checkout -b hotfix/456-critical-fix main

# 2. Corregir el problema crítico
git commit -m "Fix critical issue"

# 3. Crear Pull Request a main
# 4. Después de aprobación, fusionar en main
# 5. Fusionar cambios de vuelta a develop
# 6. Eliminar rama hotfix
# 7. Etiquetar el hotfix en main
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

---

**Última actualización:** 2026-02-08  
**Fuente:** CONTRIBUTING.md v1.0.0
