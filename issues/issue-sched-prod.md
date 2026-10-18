## sched-prod · E-TZ-114 · shifts moved by an hour

**This is the issue most of #4471's reports share** (the ticket issue, by the kb's own
fingerprint logic). #4471 was merged by subject line (decision 0001), which swept in two
more issues - filed separately in this repo.

### What happened

Night of Wednesday 17 Sep (export data): `sched-prod` reporters (shift planning, ~300k
people) report Thursday shifts moved by an hour. First entry 03:12 is a machine line
(`status: clean (E-TZ-114)`), first human report 03:19.

### Numbers (computed, not typed)

Run with the kb's own code (`src/lib/kb/fingerprint.ts`, `clusterReports`) over the desk's
export (`src/lib/data/reports-4471.json`, 412 unique reports merged into #4471):

| place | code | reports | people | seen | tagged as (intake) |
|---|---|---|---|---|---|
| sched-prod | E-TZ-114 | 349 | 206 | 03:12 → 06:13 | sched-prod ×349 |
| tram-3 | E-TZ-114 | 44 | 26 | 03:33 → 06:11 | tram-3 ×41, sched-prod ×3 |
| rota-6 | E-SYNC-04 | 19 | 9 | 03:27 → 06:08 | rota-6 ×13, sched-prod ×6 |

This is the first row. Script: `analysis/run.mjs`, output: `analysis/out.txt`,
data: `kb/support-kb/src/lib/data/reports-4471.json`.

### Samples

- R-41201 · 03:19 · ana.lis@zorza-care.pl (tenant Zorza Care → sched-prod) · "Times moved by
  an hour" · E-TZ-114 · "My Thursday shifts have moved by an hour."
- R-41202 · 03:21 · ilona.vik+work@brightwell.org (tenant Brightwell → sched-prod) · same
  subject · meta E-TZ-114.
- R-41200 · 03:12 · reporter "—" · body "status: clean (E-TZ-114)" - the machine entry that
  carries the server code.

### Why this is one issue

Same place (`sched-prod`, from the reporter's tenant domain) plus the same server code
(`E-TZ-114` is in `SERVER_FAMILIES`). Reporter domains in this cluster: clinic-north.eu ×101,
zorza-care.pl ×85, casa-sol.es ×82, brightwell.org ×80, untagged ×1.

### Relation to #4471

The desk's page says "All 412 are one issue". By the kb's own rule (`fingerprint.ts`:
"Same code from a different place is a different bug"), #4471 properly holds these 349;
the other 63 are the two sibling tickets in this repo.


Filed from the #4471 report export, challenge S01E03 (reset 2026-10-18). Evidence: the signed kb page in this repo (`kb-page/4471-followup.svx`), rendered for the desk at `site/kb/incidents/4471-followup.html` (desk ref DR-SMJX-E0TF).

Live (rendered, hosted for the desk): https://mega-s01e03-page.sticky-twin.workers.dev/kb/incidents/4471-followup