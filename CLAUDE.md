@AGENTS.md

# Claude-specific Instructions

## Rules - Claude

- Do not include `Co-Authored-By` lines in commit messages.

## Session Memory

Claude Code maintains a lightweight session log at `.claude/memory.md` (gitignored).

**On session start:** Read `.claude/memory.md` if it exists.
Use it to understand recent context. If a `## Current Session`
block exists, a previous session ended abruptly — resume or
finish that work first.

**On task start:** Write a `## Current Session` block at the
top of the file with:

- Date
- Brief description of the task
- A checklist of planned steps (`- [ ]` / `- [x]`)

**During the session — write early and often. Do not defer.**

- After completing any checklist item: mark it `- [x]` in memory.md immediately.
- After discovering new steps: append them to the checklist right away.
- Every ~20–30 minutes of active work: re-save the current checklist state even if nothing major changed.
- After a git commit: update the checklist to reflect what was just committed. Commits are milestone markers — treat them as mandatory checkpoint triggers.

The goal: a machine shutdown should lose at most one small task worth of context, never an entire session.

**On session end:** Collapse the `## Current Session` block into a normal `## <date>` entry (a 2-4 line summary), and move it below the previous sessions.

Keep only the **last 5 sessions** in the file (delete older entries when appending).
Each entry should be 2-4 lines max — this is a breadcrumb trail, not a journal.

## Handoff Document

Claude Code maintains a handoff document at `.claude/handoff.md` (gitignored).

This file bridges context between local development (Claude Code CLI) and external
conversations (Claude.ai chat), which have no shared visibility. The developer manually
uploads this file to Claude.ai for continuity, and may bring back updates from those
conversations.

**Purpose:** Provide a concise, current snapshot of project state — enough for a separate
Claude instance (with no repo access) to understand what exists, what was decided, and
what's next.

**When to update:** Always after: the first session in a repo, any session that installs
dependencies, changes architecture, adds/removes features, resolves open questions, or
shifts priorities. Skip only read-only sessions (exploration, research, code review) where
nothing was built or decided.

**What to write:** Update only the sections that changed. Keep the entire file under 150
lines. Write for an audience that knows the project goals but has no repo access, no
terminal, and no git history — only this file.

**Structure (maintain these sections in order):**

1. `## Project` — One-liner: package name, purpose, current version/phase.
2. `## Architecture` — Brief description of the system layers and how they connect.
3. `## Stack` — Runtime dependencies and build tools.
4. `## Schema / Types` — List of core types and what they represent.
5. `## Sub-path Exports` — Current export surface.
6. `## Decisions` — Numbered log of significant decisions, most recent first. ~10 max.
7. `## Open Questions` — Active unresolved questions. ~5 max.
8. `## Status` — Current state: done, in progress, next. 3-5 lines.

**Rules:**

- This file is a bridge, not a sync. Accurate enough for Claude.ai to reason about the
  project without seeing the repo.
- Do not duplicate content from `memory.md`.
- Do not include code snippets or file contents — describe what exists, not how it works.
- Write in present tense.
- Keep entries factual and terse.
