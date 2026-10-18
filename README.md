# #4471 follow-up - three issues, not one

Challenge S01E03 ("what it shows") from the MEGA.dev course, reset of 2026-10-18.

The support desk merged **412 reports** into ticket **#4471** on the subject-line rule
(decision 0001) and closed it as one issue. Placed by where each reporter's tenant runs
(`places.ts`) and by the server code each report carries (`fingerprint.ts`), the same 412
reports are **three issues**:

| place | code | reports | people | window | outcome | repo ticket |
|---|---|---|---|---|---|---|
| `sched-prod` | `E-TZ-114` | 349 | 206 | 03:12 → 06:13 | fixed by change #29 | [#1](../../issues/1), closed as a duplicate record |
| `tram-3` | `E-TZ-114` | 44 | 26 | 03:33 → 06:11 | won't fix, boards retired | [#2](../../issues/2), closed |
| `rota-6` | `E-SYNC-04` | 19 | 9 | 03:27 → 06:08 | fixed by change #31 | [#3](../../issues/3), closed |

349 + 44 + 19 = 412. The desk counted by intake tags (`sched-prod` 358 · `tram-3` 41 ·
`rota-6` 13); by place the tags disagree on 9 reports.

## The page, added to the kb

Signed - `signature:` in frontmatter, `<RenderStamp />` at the end, desk ref
`DR-SMJX-E0TF`.

- **`src/routes/kb/incidents/4471-followup/+page.svx`** - the page, in the kb's routes, so
  the desk's kb reads it as a page and lists it in the index.
- **`site/kb/incidents/4471-followup.html`** - the page as the desk will see it: a static
  build of the kb, with the table computed at render time from the exported data.
- `kb-page/4471-followup.svx` - the same page source, standalone copy.
- `kb-page/page-as-desk-sees-it.png` - the same rendered view as an image.

## The tickets

One per issue, filed in this repo's issues, closed out per the desk's engineering update
(rota-6 fixed · change #31; tram-3 won't fix · boards retired):

- [#1](../../issues/1) - sched-prod · E-TZ-114: already fixed by change #29; closed as a
  duplicate record.
- [#2](../../issues/2) - tram-3 · E-TZ-114: closed, won't fix.
- [#3](../../issues/3) - rota-6 · E-SYNC-04: closed, fixed.

## Reproduce

```bash
node analysis/run.mjs
```

Runs the kb's own logic (`src/lib/kb/fingerprint.ts`, and the tenant lookup from
`src/lib/kb/places.ts` semantics) over `data/reports-4471.json`. The downloaded export is
committed as `kb-export.zip` (sha256 in `log.md`).

The render setup (SvelteKit + mdsvex, pins and the layout alias) lives in `render/`;
`render/sync.mjs` copies `src/` and adds the render scaffold; `npm run build` produces the
static site committed as `site/`.

## The page, live

The desk reads it here: https://mega-s01e03-page.sticky-twin.workers.dev/kb/incidents/4471-followup
(taken down after the review; the repo keeps the source and the build).
