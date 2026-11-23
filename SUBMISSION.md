# CS360 Assignment 5 — Submission

- **GitHub username:** Komil-goat
- **Public repository:** https://github.com/Komil-goat/cs360-assignment5

The repository contains the full maintenance history: four issues, four
branches, test-first commits, reviewed pull requests, two real merge conflicts
with resolutions, and the merged `main` branch.

## Ticket map

| Ticket | Issue | Branch | Pull request | Merge commit |
| --- | --- | --- | --- | --- |
| BUG-101 | https://github.com/Komil-goat/cs360-assignment5/issues/1 | `bugfix/BUG-101-delete-grades` | https://github.com/Komil-goat/cs360-assignment5/pull/5 | `7b4edc5` |
| BUG-102 | https://github.com/Komil-goat/cs360-assignment5/issues/2 | `bugfix/BUG-102-duplicate-grade` | https://github.com/Komil-goat/cs360-assignment5/pull/6 | `e44a046` |
| BUG-103 | https://github.com/Komil-goat/cs360-assignment5/issues/3 | `bugfix/BUG-103-name-search` | https://github.com/Komil-goat/cs360-assignment5/pull/7 | `4328fdb` |
| REF-201 | https://github.com/Komil-goat/cs360-assignment5/issues/4 | `refactor/REF-201-shared-validation` | https://github.com/Komil-goat/cs360-assignment5/pull/8 | `1c3837c` |

## Evidence map

| Requirement | File |
| --- | --- |
| Issue board with all four tickets | `docs/screenshots/01-issues-board.jpeg` |
| BUG-101 report | `docs/screenshots/02-issue-BUG-101.jpeg` |
| BUG-102 report | `docs/screenshots/03-issue-BUG-102.jpeg` |
| BUG-103 report | `docs/screenshots/04-issue-BUG-103.jpeg` |
| REF-201 request | `docs/screenshots/05-issue-REF-201.jpeg` |
| One branch per ticket | `docs/screenshots/06-branches.jpeg` |
| Pull requests opened | `docs/screenshots/07-pull-requests.jpeg` |
| Code review and diff inspection | `docs/screenshots/08-pr-REF-201-review.jpeg`, `09-pr-REF-201-diff.jpeg`, `10-pr-BUG-102-diff.jpeg` |
| Merge conflicts before resolution | `docs/screenshots/11-conflict-BUG-103.jpeg`; REF-201 merge conflict in `docs/evidence/conflict-ref-201-merge.txt` |
| Conflict resolution and re-test | `docs/screenshots/19-conflict-resolution.png`, `docs/evidence/conflict-ref-201-merge.txt` |
| Merged pull requests | `docs/screenshots/13-merged-pull-requests.jpeg`, `16-pr-REF-201-merged.jpeg`, `17-pr-BUG-101-merged.jpeg` |
| Closed issues | `docs/screenshots/14-issues-closed.jpeg` |
| Commit and merge history | `docs/screenshots/15-commits-main.jpeg` |
| Final `npm test` output | `docs/screenshots/18-final-tests.jpeg`, `docs/evidence/final-tests.txt` |
| End-to-end API smoke test | `docs/evidence/api-smoke-test.txt` |

## Final result

```text
npm test
tests 9
pass 9
fail 0
```

All three bugs are fixed, the refactor preserves behavior, and the API smoke
test confirms the expected `404`, `409`, and trimmed case-insensitive search
responses.

## Run

```bash
npm install
npm test
npm start
```
