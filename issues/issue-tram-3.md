## tram-3 · E-TZ-114 · platform screens one hour behind the timetable

**44 of #4471's 412 reports are this issue, not the sched-prod one.** They were merged into
#4471 by subject-line matching (decision 0001) during the night; the kb's own fingerprint
splits them out.

### Numbers (computed, not typed)

| place | code | reports | people | seen | tagged as (intake) |
|---|---|---|---|---|---|
| tram-3 | E-TZ-114 | 44 | 26 | 03:33 → 06:11 | tram-3 ×41, sched-prod ×3 |

Script: `analysis/run.mjs` (imports the desk's `fingerprint.ts`), output: `analysis/out.txt`.

### Why this is a different issue than sched-prod E-TZ-114

Straight from the kb's code (`fingerprint.ts`):

> Same code from a different place is a different bug: tram-3 E-TZ-114 is not sched-prod
> E-TZ-114.

The place comes from the reporter's tenant domain (`places.ts`), not from what intake
guessed at night.

### Place evidence (reporter domains)

- tramvaj-ostrava.cz ×21 (Tramvaj Ostrava → tram-3)
- metro-lund.se ×20 (Metro Lund → tram-3)
- ml-trafik.se ×3 (Metro Lund → tram-3)

### Samples

- R-41215 · 03:33 · mira.falk@metro-lund.se · "Wrong times showing" · code typed in body:
  "Platform screens are one hour behind the timetable. (E-TZ-114)"
- R-41219 · 03:35 · Tom.falk@tramvaj-ostrava.cz · "Wrong times showing" · meta E-TZ-114 ·
  "Platform screens are one hour behind the timetable."
- R-41225 · 03:39 · marek.falk@ml-trafik.se · "URGENT times wrong" · intake tagged it
  sched-prod, but the domain places it tram-3: "Everything on our screens is an hour late
  since last night. (E-TZ-114)" - an example of intake's `product` being a guess.

### Impact

`tram-3` (departure boards): every platform screen showed times one hour behind the
timetable for the whole night window.


Filed from the #4471 report export, challenge S01E03 (reset 2026-10-18). Evidence: the signed kb page in this repo (`kb-page/4471-followup.svx`), rendered for the desk at `site/kb/incidents/4471-followup.html` (desk ref DR-SMJX-E0TF).

Live (rendered, hosted for the desk): https://mega-s01e03-page.sticky-twin.workers.dev/kb/incidents/4471-followup