#!/usr/bin/env node
/**
 * Generate CSS custom properties from lib/theme.js (single source of truth).
 * Output: styles/_theme-vars.css
 */
const path = require('path')
const fs = require('fs')
const { colors } = require('../lib/theme.js')

const vars = {
  '--color-brand': colors.brand,
  '--color-brand-dark': colors.brandDark,
  '--color-cta': colors.cta,
  '--color-gray': colors.gray,
  '--color-gray-dark': colors.grayDark,
  '--dark-svg-color': colors.svgDark,
  '--light-svg-color': colors.svgLight,
}

const lines = [
  '/* Generated from lib/theme.js – do not edit */',
  ':root {',
  ...Object.entries(vars).map(([key, value]) => `  ${key}: ${value};`),
  '}',
  '',
]

const outPath = path.join(__dirname, '..', 'styles', '_theme-vars.css')
fs.writeFileSync(outPath, lines.join('\n'), 'utf8')
console.log('Generated', outPath)
