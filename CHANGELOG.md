# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [2.0.1](https://github.com/batressc/conventional-commits-playground/compare/v2.0.0...v2.0.1) (2026-02-11)


### ⚠ BREAKING CHANGES

* idioma predeterminado cambiado de español a inglés

* fix(playground): hide validation result on initial load

Prevents empty validation result element from being visible
on page load by adding 'hidden' class to #validation-result.

* fix(playground): corregir visualización inicial y altura del textarea

Soluciona dos problemas en el área de playground:

1. Prevenir que la tarjeta de header se muestre vacía al iniciar:

   - Agregar clase hidden a #card-header en HTML

   - Mostrar explícitamente con setVisible() en handleHeaderValidation

2. Mejorar visibilidad del placeholder de ejemplo:

   - Agregar atributo rows=9 al textarea

   - Permite visualizar completamente el ejemplo de commit multilinea

### Features

* implementación del sitio web playground básico ([#2](https://github.com/batressc/conventional-commits-playground/issues/2)) ([9c1a8d5](https://github.com/batressc/conventional-commits-playground/commit/9c1a8d54bd3be4a04fd09743f50f835d632dfcd7)), closes [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1)

## 2.0.0 (2026-02-11)


### ⚠ BREAKING CHANGES

* idioma predeterminado cambiado de español a inglés

* fix(playground): hide validation result on initial load

Prevents empty validation result element from being visible
on page load by adding 'hidden' class to #validation-result.

* fix(playground): corregir visualización inicial y altura del textarea

Soluciona dos problemas en el área de playground:

1. Prevenir que la tarjeta de header se muestre vacía al iniciar:

   - Agregar clase hidden a #card-header en HTML

   - Mostrar explícitamente con setVisible() en handleHeaderValidation

2. Mejorar visibilidad del placeholder de ejemplo:

   - Agregar atributo rows=9 al textarea

   - Permite visualizar completamente el ejemplo de commit multilinea

### Features

* implementación del sitio web playground básico ([#2](https://github.com/batressc/conventional-commits-playground/issues/2)) ([9c1a8d5](https://github.com/batressc/conventional-commits-playground/commit/9c1a8d54bd3be4a04fd09743f50f835d632dfcd7)), closes [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1) [#1](https://github.com/batressc/conventional-commits-playground/issues/1)

## 1.0.0 (2026-02-11)


### Features

* **website-content:** Creación de sitio web base ([1debabb](https://github.com/batressc/conventional-commits-playground/commit/1debabb2d75e5985cf2ffd9833453056f0d81ebe))
