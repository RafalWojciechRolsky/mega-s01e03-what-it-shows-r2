## #4471 follow-up · three issues behind the merge

**Desk ref: DR-7WD4-4KJ2** (derived from the page's signature - `kb-page/4471-followup.svx`, rendered at `site/kb/incidents/4471-followup.html`).

This page follows up on the desk's incident page for #4471 ("All 412 are one issue"). Re-read with the kb's own fingerprint rule (`src/lib/kb/fingerprint.ts`: an issue is decided by **where a report came from** - the reporter's tenant, `places.ts` - and **which server code it raises**), the same 412 merged reports are **three issues**:

| place | code | reports | people | window | outcome (desk's engineering update) |
|---|---|---|---|---|---|
| sched-prod | E-TZ-114 | 349 | 206 | 03:12 → 06:13 | fixed by change #29 - the issue #4471 really was |
| tram-3 | E-TZ-114 | 44 | 26 | 03:33 → 06:11 | won't fix · boards retired |
| rota-6 | E-SYNC-04 | 19 | 9 | 03:27 → 06:08 | fixed · change #31 (sync fixed) |

349 + 44 + 19 = 412.

## The three issues, as filed here

- #1 - sched-prod · E-TZ-114 · shifts moved by an hour - the issue #4471 properly was.
- #2 - tram-3 · E-TZ-114 · platform screens one hour behind the timetable - same code, different place: a different bug.
- #3 - rota-6 · E-SYNC-04 · night rota listed twice - care homes; fixed by change #31.

## The night

First report 03:19 (machine line 03:12, `status: clean (E-TZ-114)`); the queue kept growing until change #29 shipped at 06:15. tram-3 and rota-6 reports kept coming through the same window - merged into #4471 by subject line (decision 0001), never ticketed on their own.

## Why this page exists

The subject rule sweeps; the fingerprint rule checks. Reading both costs minutes.


Live (rendered, hosted): https://mega-s01e03-page.sticky-twin.workers.dev/kb/incidents/4471-followup
