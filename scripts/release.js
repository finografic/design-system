/**
 * Scripts/release.ts
 *
 * Bumps versions for both publishable packages, creates a release commit + tags, publishes to GitHub
 * Packages, and pushes.
 *
 * Prerequisites: working tree must be clean — build and commit everything first.
 *
 * Usage: tsx scripts/release.ts <patch|minor|major> Via: pnpm release.patch / release.minor / release.major
 */
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
process.env.NODE_ENV = 'production';
const REGISTRY = 'https://npm.pkg.github.com';
// ── Args ──────────────────────────────────────────────────────────────────────
const bump = process.argv[2];
if (!['patch', 'minor', 'major'].includes(bump ?? '')) {
    console.error('\n  Usage: tsx scripts/release.ts <patch|minor|major>\n');
    process.exit(1);
}
// ── Helpers ───────────────────────────────────────────────────────────────────
function run(cmd, opts = {}) {
    try {
        console.log(`\n  → ${cmd}`);
        execSync(cmd, { stdio: 'inherit', cwd: opts.cwd });
    }
    catch {
        console.error(`\n  ✘ Failed: ${cmd}\n`);
        process.exit(1);
    }
}
function readVersion(path) {
    return JSON.parse(readFileSync(path, 'utf8')).version;
}
// ── Guard: require clean working tree ─────────────────────────────────────────
try {
    execSync('git diff --exit-code --quiet', { stdio: 'pipe' });
    execSync('git diff --cached --exit-code --quiet', { stdio: 'pipe' });
}
catch {
    console.error('\n  ✘  Working tree is dirty.\n' + '     Build and commit all changes before releasing.\n');
    process.exit(1);
}
// ── Gaurd: ensure packages existVersion bumps (no git ops) ────────────────────────────────────────────────
if (!existsSync('packages/design-system/package.json')) {
    console.error('Missing packages/design-system');
    process.exit(1);
}
if (!existsSync('packages/icons/package.json')) {
    console.error('Missing packages/icons');
    process.exit(1);
}
// ── Version bumps (no git ops) ────────────────────────────────────────────────
run(`pnpm version ${bump} --no-git-tag-version`, { cwd: 'packages/icons' });
run(`pnpm version ${bump} --no-git-tag-version`, { cwd: 'packages/design-system' });
const iconsVersion = readVersion('packages/icons/package.json');
const dsVersion = readVersion('packages/design-system/package.json');
console.log(`\n  ✔  icons → ${iconsVersion}   design-system → ${dsVersion}`);
// ── Release commit ────────────────────────────────────────────────────────────
run('git add packages/icons/package.json packages/design-system/package.json');
run(`git commit -m "release v${dsVersion}"`);
// ── Tags ──────────────────────────────────────────────────────────────────────
run(`git tag -a "v${dsVersion}" -m "@finografic/design-system v${dsVersion}"`);
run(`git tag -a "icons-v${iconsVersion}" -m "@finografic/icons v${iconsVersion}"`);
// ── Publish ───────────────────────────────────────────────────────────────────
run(`pnpm --filter @finografic/icons publish --no-git-checks --registry ${REGISTRY}`);
run(`pnpm --filter @finografic/design-system publish --no-git-checks --registry ${REGISTRY}`);
// ── Push ──────────────────────────────────────────────────────────────────────
run('git push --follow-tags');
console.log(`\n  ✔  Released @finografic/design-system@${dsVersion}` + ` + @finografic/icons@${iconsVersion}\n`);
