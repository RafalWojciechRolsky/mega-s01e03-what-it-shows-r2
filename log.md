# log

## 2026-10-18

- start-challenge -> signature ticket (page frontmatter `signature`), issued 2026-10-18, valid until 2026-10-19T14:59Z (stays good on the page after expiry).
- downloaded the kb export from the challenge page: `kb-export-3305c2e3.zip`, 25552 B; unpacked to `kb/`.
- `analysis/run.mjs`: imports the kb's own `fingerprint.ts` (Node 26 type stripping), applies `places.ts` semantics (tenant product by reporter domain, fallback intake product).
  - tenants loaded: 8 (9 domains)
  - reports in file: 427 | unique: 412 | merged into #4471: 412
  - clusters: 3 | ticket issue: sched-prod:E-TZ-114
  - sched-prod E-TZ-114: 349 reports / 206 people, 03:12-06:13
  - tram-3 E-TZ-114: 44 / 26, 03:33-06:11
  - rota-6 E-SYNC-04: 19 / 9, 03:27-06:08
- `analysis/samples.mjs`: 3 sample reports per cluster + reporter-domain breakdown.
- gh repo create RafalWojciechRolsky/mega-s01e03-what-it-shows-r2 --public; kb-export.zip sha256 3305c2e3f3e3ec6d39947314185282223595f159bbfa0e2dde82581c30de2171
- gh issue create x3 (bodies from issues/*.md) -> issues #1 sched-prod, #2 tram-3, #3 rota-6
- render: SvelteKit+mdsvex app around the kb src, static build -> site/
  - fix 1: sync.mjs also writes src/app.html (kit wymaga, eksport kb go nie ma)
  - fix 2: <RenderStamp /> wymaga importu w skrypcie strony (mdsvex nie robi auto-importu)
- claim #1 -> progress: "Two tickets, both real. Leave them open, the desk isn't done with that night yet. Close them out and submit again."
- live page re-read: desk update appeared: rota-6 fixed · change #31 (sync fixed); tram-3 won't fix · boards retired.
- page Outcome section updated per the update; rebuild; push.
- gh issue close 3 --reason completed (change #31); gh issue close 2 --reason "not planned" (boards retired)
- claim #2 -> rejected: "The desk can't find your page." (pliki były na main; raw HTML miał DR-7WD4-4KJ2 i liczby)
- porównanie z repo znanego dobrego rozwiązania (mega-s01e03-what-it-shows): tam kb jest spłaszczony - src/ i data/ na korzeniu, strona w src/routes/kb/incidents/4471-followup/+page.svx, samodzielna kopia w kb-page/, PNG renderu.
- restrukturyzacja: src/ i data/ na korzeń, kb/ usunięty z repo (zip zostaje jako dowód), analysis i render przestawione na nowe ścieżki, przeliczone - liczby identyczne (349/44/19, 3 klastry).
- kb-page/4471-followup.svx + kb-page/page-as-desk-sees-it.png dodane.
- gh issue close 1 --reason completed --comment "already fixed by change #29; closed as a duplicate record"
- claim #3 -> (wynik dopiszę po odpowiedzi)
