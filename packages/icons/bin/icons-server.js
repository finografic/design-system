#!/usr/bin/env node

/**
 * bin/icons-server.js
 *
 * CLI entry point for the @finografic/icons icon manager server.
 *
 * Run from a consumer project root:
 *   pnpm exec icons-server
 *
 * The server starts on port 5001, writes lucide-manager.config.json to the CWD,
 * and seeds icons.config.json from DS defaults on first run.
 *
 * Run the picker UI alongside it:
 *   concurrently "icons-server" "lucide-manager"
 *
 * Or add to your package.json scripts:
 *   "icons": "concurrently \"icons-server\" \"lucide-manager\""
 */

import '../dist/server.mjs';
