# CS360 Assignment 5 — Transcript Manager maintenance

This repository is the Assignment 5 maintenance exercise. Starting from the
starter `TranscriptStore` API, three reported bugs were fixed and one duplicated
validation block was refactored. Every ticket has a GitHub issue, its own
branch, a test-first commit, a reviewed pull request and a merge into `main`.

## Tickets

| Ticket | Outcome | Branch | Issue | PR |
| --- | --- | --- | --- | --- |
| BUG-101 | Deleting a student also deletes their stored grades; later grade requests return `404` | `bugfix/BUG-101-delete-grades` | [#1](https://github.com/Komil-goat/cs360-assignment5/issues/1) | [#5](https://github.com/Komil-goat/cs360-assignment5/pull/5) |
| BUG-102 | A duplicate grade is rejected with `Grade already exists for course <COURSE>`; `changeGrade` remains the correction path | `bugfix/BUG-102-duplicate-grade` | [#2](https://github.com/Komil-goat/cs360-assignment5/issues/2) | [#6](https://github.com/Komil-goat/cs360-assignment5/pull/6) |
| BUG-103 | Name search trims whitespace and ignores case without changing the stored display name | `bugfix/BUG-103-name-search` | [#3](https://github.com/Komil-goat/cs360-assignment5/issues/3) | [#7](https://github.com/Komil-goat/cs360-assignment5/pull/7) |
| REF-201 | Course and grade validation extracted into shared private helpers with no public behavior change | `refactor/REF-201-shared-validation` | [#4](https://github.com/Komil-goat/cs360-assignment5/issues/4) | [#8](https://github.com/Komil-goat/cs360-assignment5/pull/8) |

## Run

```bash
npm install
npm test
npm start        # http://localhost:4001 (override with PORT)
```

## API

| Method | Path | Body | Success | Errors |
| --- | --- | --- | --- | --- |
| `POST` | `/transcripts` | `{"name":"Ada"}` | `201 {"studentID":1}` | `409` missing name |
| `GET` | `/studentids?name=` | — | `200 [1]` | — |
| `GET` | `/transcripts/:id` | — | `200` transcript | `404` unknown student |
| `DELETE` | `/transcripts/:id` | — | `204` | `404` unknown student |
| `POST` | `/transcripts/:id/:course` | `{"grade":85}` | `201` created grade | `409` duplicate grade or invalid input |
| `PUT` | `/transcripts/:id/:course` | `{"grade":92}` | `200` changed grade | `404` missing grade, `409` invalid input |
| `GET` | `/transcripts/:id/:course` | — | `200 {studentID, course, grade}` | `404` missing grade |

## Test-first sequence

Each bug branch has two commits: a regression test that fails on the bug, then
the smallest fix that makes it pass.

```text
test: add failing regression test for BUG-101   -> fix: remove stored grades... (BUG-101)
test: add failing regression test for BUG-102   -> fix: reject duplicate grades... (BUG-102)
test: add failing regression test for BUG-103   -> fix: trim and case-fold... (BUG-103)
test: pin shared ... validation for REF-201     -> refactor: extract shared ... validation (REF-201)
```

Two merges produced real conflicts in `test/transcriptStore.test.js` (and the
refactor also overlapped `addGrade` with BUG-102). Both were resolved by keeping
every regression test and combining the duplicate-grade guard with the shared
helpers. The resolution was re-tested before each merge.

## Evidence

- `docs/screenshots/` — issue board, each issue, branches, open and merged pull
  requests, diffs, both conflict states, merged commit history, final test run.
- `docs/evidence/` — failing and passing `npm test` logs for every ticket, PR
  diffs, merge-conflict output, the final test run, and an end-to-end API smoke
  test.
- `docs/evidence/final-tests.html` and
  `docs/evidence/conflict-resolution.html` — the rendered terminal evidence.

## Final verification

`npm test` on `main` after all merges:

```text
tests 9
pass 9
fail 0
```

The API smoke test also confirms the three fixes together: duplicate grade
returns `409`, padded mixed-case search returns the student, and both grade and
transcript requests return `404` after deletion.
