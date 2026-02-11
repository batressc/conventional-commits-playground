/**
 * Spanish translations
 * @module i18n/locales/es
 */

export default {
    meta: {
        title: 'Guía Interactiva: Conventional Commits',
        description: 'La guía definitiva para escribir mensajes de commit que humanos y máquinas puedan entender.'
    },
    header: {
        badge: 'v1.0.0',
        title: 'Conventional Commits',
        subtitle: 'La guía definitiva para escribir mensajes de commit que humanos y máquinas puedan entender.'
    },
    intro: {
        title: '💡 ¿Por qué es importante?',
        description: 'Escribir un mensaje de commit desordenado es fácil, pero mantener un proyecto a largo plazo no lo es. Conventional Commits ofrece una estructura ligera que permite:',
        benefits: {
            changelog: 'Generar <strong>CHANGELOGs</strong> automáticamente.',
            semver: 'Determinar el siguiente número de versión semántica (<strong>SemVer</strong>) sin intervención humana.',
            history: 'Ayudar a otros desarrolladores a entender la historia del proyecto rápidamente.'
        }
    },
    semver: {
        title: '🚀 Semantic Versioning (SemVer)',
        description: 'Conventional Commits y SemVer van de la mano. La estructura de tu commit dicta cómo debe incrementar la versión de tu software.',
        major: 'Cambios incompatibles en API (BREAKING CHANGE)',
        minor: 'Nueva funcionalidad retro-compatible (feat)',
        patch: 'Corrección de bugs retro-compatible (fix)',
        example: 'Ejemplo: Si estás en la versión <strong>1.0.0</strong> y haces un commit tipo <code>feat: ...</code>, la siguiente versión será <strong>1.1.0</strong>.'
    },
    anatomy: {
        title: '🧩 Anatomía del Mensaje',
        description: 'Pasa el ratón por encima de los componentes para entender su función.',
        type: 'Tipo de cambio (ej: feat, fix)',
        scope: '(Opcional) Módulo afectado',
        bang: '(Opcional) Breaking Change',
        colon: ':',
        desc: 'Breve descripción imperativa',
        note: 'El cuerpo y el pie del mensaje son opcionales y van después de una línea en blanco.'
    },
    commitTypes: {
        title: '🏷️ Tipos de Commits',
        description: 'Selecciona una pestaña para ver los tipos básicos o la lista completa de la convención Angular.',
        tabs: {
            basic: 'Principales',
            angular: 'Convención Angular (Todos)'
        },
        breaking: {
            title: 'BREAKING CHANGE',
            description: 'Un cambio que rompe la compatibilidad. Se indica con <code>!</code> después del tipo o con un pie <code>BREAKING CHANGE:</code>.',
            example: 'feat!: drop node 12 support',
            impact: 'MAJOR'
        },
        feat: {
            title: 'feat',
            description: 'Introduce una nueva característica al código (feature). Equivale a MINOR en SemVer.',
            example: 'feat: allow zoom on images',
            impact: 'MINOR'
        },
        fix: {
            title: 'fix',
            description: 'Arregla un error (bug) en el código. Equivale a PATCH en SemVer.',
            example: 'fix: handle null user id',
            impact: 'PATCH'
        },
        angularIntro: 'Aunque la especificación permite cualquier tipo, estos son los adoptados casi universalmente.',
        docs: {
            title: 'docs',
            description: 'Cambios que afectan únicamente a la documentación (archivos README, comentarios JSDoc, tutoriales), sin modificar el código funcional.'
        },
        style: {
            title: 'style',
            description: 'Cambios de formato que no afectan la lógica del código (espacios en blanco, indentación, puntos y coma faltantes). No confundir con estilos CSS.'
        },
        refactor: {
            title: 'refactor',
            description: 'Un cambio en el código de producción que no corrige errores ni añade funcionalidades, pero mejora la estructura o legibilidad.'
        },
        perf: {
            title: 'perf',
            description: 'Cambios dedicados específicamente a mejorar el rendimiento del sistema (optimización de algoritmos, reducción de tiempos de carga).'
        },
        test: {
            title: 'test',
            description: 'Adición de pruebas unitarias o de integración faltantes, o corrección de pruebas existentes que no funcionaban correctamente.'
        },
        build: {
            title: 'build',
            description: 'Cambios que afectan al sistema de compilación o dependencias externas (ej. npm, maven, gradle, webpack, gulp).'
        },
        ci: {
            title: 'ci',
            description: 'Cambios en los archivos de configuración y scripts de Integración Continua (ej. GitHub Actions, Travis, CircleCI).'
        },
        chore: {
            title: 'chore',
            description: 'Tareas rutinarias que no modifican el código fuente ni las pruebas (ej. actualización de versiones, tareas de mantenimiento de scripts).'
        },
        revert: {
            title: 'revert',
            description: 'Se utiliza para revertir un commit anterior. El cuerpo del mensaje suele contener el hash del commit que se está revirtiendo.'
        }
    },
    examples: {
        title: '📚 Ejemplos Reales',
        basic: {
            title: '1. Commit básico con tipo y ámbito',
            code: 'feat(ui): agregar botón de modo oscuro'
        },
        complete: {
            title: '2. Commit completo con cuerpo y múltiples pies',
            code: `fix: corrección de validación de usuarios

Se ha actualizado la lógica para permitir caracteres especiales en nombres.
Esto soluciona el problema reportado por soporte.

Reviewed-by: J. Doe
Refs: #456`
        },
        breaking: {
            title: '3. Breaking Change (Dos variantes para el mismo cambio)',
            optionA: '<strong>Opción A (Concisa):</strong> Usando <code>!</code> en la cabecera para indicar impacto MAJOR.',
            codeA: 'feat(api)!: cambiar estructura de respuesta de error',
            optionB: '<strong>Opción B (Explicativa):</strong> Usando el footer <code>BREAKING CHANGE</code> cuando se necesita detalle.',
            codeB: `feat(api): cambiar estructura de respuesta de error

BREAKING CHANGE: la propiedad 'error' ahora devuelve un objeto en lugar de un string.`
        }
    },
    playground: {
        title: '⚡ Zona de Práctica',
        description: 'Prueba a escribir un mensaje completo. El validador analizará la cabecera, el cuerpo y el pie por separado.',
        label: 'Redacción del Commit:',
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
            invalidFormat: 'El formato debe ser: tipo(scope): descripción',
            valid: 'Formato correcto. Impacto:',
            majorByFooter: 'Impacto elevado a MAJOR debido a <code>BREAKING CHANGE</code> en footer.',
            majorByBang: 'Impacto MAJOR indicado por <code>!</code>.'
        },
        body: {
            missingBlankLine: 'Falta una línea en blanco entre la cabecera y el cuerpo.',
            duplicateBreakingChange: "Detectado 'BREAKING CHANGE' en el cuerpo y también en el footer. ¿Es un duplicado? Si es distinto, asegúrate de separarlo con líneas en blanco.",
            breakingChangeNeedsBlankLine: "Parece que tienes un 'BREAKING CHANGE' pegado al cuerpo. Debes dejar una línea en blanco antes para que sea un footer válido.",
            valid: 'Cuerpo válido.'
        },
        footer: {
            breakingChangeSeparator: 'Un footer de <code>BREAKING CHANGE</code> debe usar exactamente dos puntos y espacio (<code>: </code>) como separador.',
            breakingChangeEmpty: 'Un footer de <code>BREAKING CHANGE</code> debe tener una descripción.',
            breakingChangeCase: 'El token debe estar en MAYÚSCULAS: <code>BREAKING CHANGE</code>.',
            breakingChangePlural: 'El token es incorrecto. Usa <code>BREAKING CHANGE</code> (singular).',
            tokenWithSpaces: 'El token no debe contener espacios (usa guiones, ej: <code>Reviewed-by</code>).',
            invalidFormat: 'La línea no parece un footer válido (Formato: <code>Token: valor</code>).',
            valid: 'Footer(s) válido(s).',
            hasBreaking: ' <b>(Incluye BREAKING CHANGE)</b>'
        },
        result: {
            valid: 'Mensaje Válido',
            validDescription: ' según la especificación.',
            invalid: 'Hay errores',
            invalidDescription: ' en el formato. Revisa las tarjetas abajo.'
        }
    },
    footer: {
        builtFor: 'Construido para educar sobre',
        link: 'Conventional Commits'
    }
};
