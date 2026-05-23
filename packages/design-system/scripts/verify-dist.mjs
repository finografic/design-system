import { access } from 'node:fs/promises';
import { resolve } from 'node:path';

const required = [
  'dist/index.js',
  'dist/components/avatar/avatar.js',
  'dist/components/avatar/avatar.recipe.js',
  'dist/components/button/button.recipe.js',
];

const root = resolve(import.meta.dirname, '..');

for (const file of required) {
  await access(resolve(root, file));
}

console.log('verify-dist: ok —', required.length, 'required files present');
