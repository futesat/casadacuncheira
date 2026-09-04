# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| `creating, opening, or preparing PRs for review.` | `branch-pr` | `/Users/futesat/.gemini/skills/branch-pr/SKILL.md` |
| `PRs over 400 lines, stacked PRs, review slices. Split oversized changes into chained PRs that protect review focus.` | `chained-pr` | `/Users/futesat/.gemini/skills/chained-pr/SKILL.md` |
| `writing guides, READMEs, RFCs, onboarding, architecture, or review-facing docs.` | `cognitive-doc-design` | `/Users/futesat/.gemini/skills/cognitive-doc-design/SKILL.md` |
| `PR feedback, issue replies, reviews, Slack messages, or GitHub comments.` | `comment-writer` | `/Users/futesat/.gemini/skills/comment-writer/SKILL.md` |
| `bench, journey, journeys, driven mode, gentle-ai-bench, journey corpus, j-numbers, bench axis.` | `gentle-ai-bench` | `/Users/futesat/.gemini/skills/gentle-ai-bench/SKILL.md` |
| `Go tests, go test coverage, Bubbletea teatest, golden files. Apply focused Go testing patterns.` | `go-testing` | `/Users/futesat/.gemini/skills/go-testing/SKILL.md` |
| `issue creation, bug reports, feature requests, or issue approval. Create and triage GitHub issues from repository evidence.` | `issue-creation` | `/Users/futesat/.gemini/skills/issue-creation/SKILL.md` |
| `judgment day, dual review, adversarial review, juzgar. Run explicit blind dual review with at most two scoped fix/re-judgment rounds.` | `judgment-day` | `/Users/futesat/.gemini/skills/judgment-day/SKILL.md` |
| `RDD, receipt-driven development, review authority, receipt/lineage, correction/recovery, delivery gate/kill switch, bounded review defects.` | `rdd-defect-workflow` | `/Users/futesat/.gemini/skills/rdd-defect-workflow/SKILL.md` |
| `new skills, agent instructions, documenting AI usage patterns. Create LLM-first skills with valid frontmatter.` | `skill-creator` | `/Users/futesat/.gemini/skills/skill-creator/SKILL.md` |
| `improve skills, audit skills, refactor skills, skill quality. Audit and upgrade existing LLM-first skills.` | `skill-improver` | `/Users/futesat/.gemini/skills/skill-improver/SKILL.md` |
| `new issue, bug report, triage, backlog, issue flood, community report, root cause, dead-end, blocked user. Attack issues by root class, never one-by-one.` | `systemic-issue-triage` | `/Users/futesat/.gemini/skills/systemic-issue-triage/SKILL.md` |
| `implementation, commit splitting, chained PRs, or keeping tests and docs with code.` | `work-unit-commits` | `/Users/futesat/.gemini/skills/work-unit-commits/SKILL.md` |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### branch-pr
- Never submit PRs without an associated approved issue; link issue explicitly.
- Use conventional commits format for PR title and commit messages.
- Verify tests and clean build before opening or requesting review.
- Never include AI attribution or "Co-Authored-By" trailers in commits or PR description.
- Keep PR descriptions concise, structured, and focused on behavioral delta.

### chained-pr
- Trigger when diff exceeds 400 lines or SDD indicates high budget risk.
- Split into sequential, self-contained work-unit PRs that build and pass tests independently.
- Base each child PR on its immediate parent branch; merge bottom-up.
- Never code-golf or delete tests/docs just to fit the 400-line budget.
- Document chain hierarchy and dependency order in each PR description.

### cognitive-doc-design
- Design documentation to minimize cognitive load and maximize retention.
- Use clear visual hierarchy: tables, lists, and progressive disclosure over long prose.
- Frontload critical constraints, prerequisites, and actionable takeaways.
- Provide concrete, minimal code snippets rather than abstract explanations.
- Remove redundant boilerplate and keep documentation tight and scannable.

### comment-writer
- Keep comments warm, direct, constructive, and free of fluff or performative cheerleading.
- State clearly WHAT needs attention, WHY it matters, and HOW to address it.
- Include actionable code suggestions or clear references whenever pointing out an issue.
- Match context language (English for code/PR reviews unless project/user specifies otherwise).
- Respect author intent; focus on correctness, architecture, and maintainability.

### gentle-ai-bench
- Use for gentle-ai benchmark journeys and driven-mode execution verification.
- `go test ./bench` does not prove driven execution; use proper bench verification harness.
- Pin behavioral semantics and journeys explicitly; avoid floating expectations.
- Keep journeys deterministic and isolated from external network state.

### go-testing
- Use standard library `testing` package conventions; favor table-driven tests.
- For Bubbletea TUI testing, use `teatest` and golden files.
- Keep tests hermetic, fast, and co-located with implementation (`*_test.go`).
- Assert observable behavior and errors specifically, avoiding brittle string checks.
- Clean up test resources using `t.Cleanup()`.

### issue-creation
- Ground issue creation in concrete repository evidence and reproducible steps.
- Always include environment details, expected vs actual behavior, and error logs.
- Choose appropriate issue template and fill all required fields.
- Distinguish between symptoms and root causes; avoid premature architectural leaps.
- Verify whether the issue is already tracked or addressed in an existing branch.

### judgment-day
- Run two independent blind reviews simultaneously on the exact target.
- Synthesize findings into confirmed issues vs false positives.
- Apply targeted fixes only for confirmed issues.
- Maximum 2 iterations of fix and re-judgment before escalating.
- Never run traditional 4R and Judgment Day together on the same target.

### rdd-defect-workflow
- Follow receipt-driven development for defect tracking and bounded verification.
- Validate defect lineage and ensure delivery gate criteria are met before close.
- Verify fixes against explicit reproduction tests rather than speculative claims.
- Maintain transparent audit receipts and clear handoffs between defect discovery and fix.

### skill-creator
- Skills must be runtime instructions for LLMs, not human tutorial documents.
- Keep skill body concise (180–450 tokens target, hard max 1000).
- Separate concerns: assets go in `assets/`, background in `references/`.
- Provide unambiguous triggers in frontmatter description.
- Use compact decision tables for branching logic instead of verbose prose.

### skill-improver
- Treat `SKILL.md` as source of truth; preserve author intent and core rules.
- Audit before modifying; do not modify files unless explicitly requested.
- Trim narrative fluff, tutorials, and long examples into `references/`.
- Enforce valid frontmatter (`name`, quoted `description`, `license`, `metadata`).
- Never delete meaningful domain rules or triggers during refactoring.

### systemic-issue-triage
- Group incoming issues by root cause cluster; never fix symptoms one-by-one.
- N issues sharing a single root cause = ONE fix at the root closing all of them.
- Close issues only against named, verified test evidence, never promises.
- Over-engineering test: avoid adding new states, flags, or gates; prefer simplifying or deleting.
- Reproduce exact scenario before implementing; verify runnable exits in refusal messages.

### work-unit-commits
- Commit by deliverable work unit, not by file type (never commit just "models" then "services").
- Keep tests and docs co-located in the same commit with the code they verify/document.
- Each commit must leave the repository in a compilable, passing state.
- Write conventional commit messages that explain intent and behavioral delta.
- Prepare commits as prospective PR slices if work exceeds budget.

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| `guidelines/Guidelines.md` | `guidelines/Guidelines.md` | Project general & design system guidelines template |

Read the convention files listed above for project-specific patterns and rules. All referenced paths have been extracted — no need to read index files to discover more.
