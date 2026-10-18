## rota-6 · E-SYNC-04 · night rota listed twice

**19 of #4471's 412 reports are this issue.** Merged into #4471 by subject-line matching
(decision 0001) during the night; the kb's own fingerprint splits them out.

### Numbers (computed, not typed)

| place | code | reports | people | seen | tagged as (intake) |
|---|---|---|---|---|---|
| rota-6 | E-SYNC-04 | 19 | 9 | 03:27 → 06:08 | rota-6 ×13, sched-prod ×6 |

Script: `analysis/run.mjs` (imports the desk's `fingerprint.ts`), output: `analysis/out.txt`.

### Why this is a different issue

`E-SYNC-04` is a server-family code (`SERVER_FAMILIES = ['TZ', 'SYNC']`), and the place is
`rota-6` (care-home rotas), so its fingerprint `rota-6:E-SYNC-04` shares nothing with
#4471's `sched-prod:E-TZ-114` except the time window.

### Place evidence (reporter domains)

- oak-lane-care.co.uk ×12 (Oak Lane Care → rota-6)
- lindholm-hus.se ×7 (Lindholm hus → rota-6)

### Samples

- R-41208 · 03:27 · kasia.hart@oak-lane-care.co.uk · "times are wrong!!" · code typed in
  body: "Night shift tonight shows twice, once with nobody on it. App says error e-sync 04."
- R-41222 · 03:37 · ana.ek+shifts@oak-lane-care.co.uk · "URGENT times wrong" · "Our home has
  the night shift listed twice since the update. App says error e-sync 04."
- R-41261 · 03:53 · mira.hart@oak-lane-care.co.uk · "Thursday is wrong by an hour" ·
  "Two copies of the night rota, one hour apart. Which one is real? (E-SYNC-04)"

### Impact

`rota-6` (care-home rotas): night shifts displayed twice, an hour apart - staff cannot tell
which listing is real. This is the safety-relevant one of the three.


Filed from the #4471 report export, challenge S01E03 (reset 2026-10-18). Evidence: the signed kb page in this repo (`kb-page/4471-followup.svx`), rendered for the desk at `site/kb/incidents/4471-followup.html` (desk ref DR-SMJX-E0TF).

Live (rendered, hosted for the desk): https://mega-s01e03-page.sticky-twin.workers.dev/kb/incidents/4471-followup