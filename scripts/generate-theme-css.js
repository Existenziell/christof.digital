#!/usr/bin/env node
'use strict'
/**
 * Generate CSS custom properties from lib/theme.js (single source of truth).
 * Output: styles/_theme-vars.css
 */
const path = require('path')
const fs = require('fs')
const { colors, mauve, mauveDark, light, dark } = require('../lib/theme.js')

const baseVars = {
  '--color-brand': colors.brand,
  '--color-brand-dark': colors.brandDark,
  '--color-cta': colors.cta,
  '--color-gray': colors.gray,
  '--color-gray-dark': colors.grayDark,
  '--dark-svg-color': colors.svgDark,
  '--light-svg-color': colors.svgLight,
}

const semanticKeys = [
  ['pageBg', 'page-bg'],
  ['sectionBg', 'section-bg'],
  ['sectionAlt', 'section-alt'],
  ['surface', 'surface'],
  ['surfaceMuted', 'surface-muted'],
  ['textPrimary', 'text-primary'],
  ['textMuted', 'text-muted'],
  ['border', 'border'],
  ['headerBg', 'header-bg'],
  ['headerFg', 'header-fg'],
]

function mauveVars(scale) {
  return Object.fromEntries(
    Object.entries(scale).map(([step, value]) => [`--color-mauve-${step}`, value])
  )
}

function buildVars(themeObj) {
  const semantic = Object.fromEntries(
    semanticKeys.map(([key, cssKey]) => [`--color-${cssKey}`, themeObj[key]])
  )
  return { ...baseVars, ...semantic }
}

const rootVars = {
  ...buildVars(light),
  ...mauveVars(mauve),
}
const darkVars = {
  ...buildVars(dark),
  ...mauveVars(mauveDark),
}

const lines = [
  '/* Generated from lib/theme.js – do not edit */',
  ':root {',
  ...Object.entries(rootVars).map(([key, value]) => `  ${key}: ${value};`),
  '}',
  '',
  '.dark {',
  ...Object.entries(darkVars).map(([key, value]) => `  ${key}: ${value};`),
  '}',
  '',
]

const outPath = path.join(__dirname, '..', 'styles', '_theme-vars.css')
fs.writeFileSync(outPath, lines.join('\n'), 'utf8')
console.warn('Generated', outPath)
