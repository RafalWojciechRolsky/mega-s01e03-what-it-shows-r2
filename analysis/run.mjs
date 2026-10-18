// Analiza #4471 kodem samego kb.
// fingerprint.ts importowany 1:1 z eksportu (Node 26: type stripping).
// places.ts używa Vite'owego import.meta.glob, więc jego semantykę odwzorowuję 1:1:
// miejsce = produkt tenanta po domenie reportera (reporterKey), fallback = product z intake.
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  uniqueById,
  clusterReports,
  ticketIssue,
  reporterKey,
} from '../src/lib/kb/fingerprint.ts';

const here = dirname(fileURLToPath(import.meta.url));
const srcDir = join(here, '..', 'src');

const reports = JSON.parse(
  readFileSync(join(here, '..', 'data', 'reports-4471.json'), 'utf8'),
);

const tenantDir = join(srcDir, 'lib/data/tenants');
const tenants = readdirSync(tenantDir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(tenantDir, f), 'utf8')));
const productByDomain = new Map(
  tenants.flatMap((t) => t.domains.map((d) => [d, t.product])),
);

// places.ts: placeOf(r) = productByDomain.get(domena reportera) ?? r.product
const placeOf = (r) =>
  productByDomain.get(reporterKey(r.reporter).split('@')[1]) ?? r.product;

const unique = uniqueById(reports);
const merged = unique.filter((r) => r.mergedInto === 4471);
const clusters = clusterReports(merged, placeOf);
const issue = ticketIssue(clusters, 4471);

console.log('tenants loaded:', tenants.length, '| domains:', productByDomain.size);
console.log(
  'reports in file:', reports.length,
  '| unique:', unique.length,
  '| merged into #4471:', merged.length,
);
console.log('clusters (distinct issues):', clusters.length);
console.log('ticket issue (most of its reports):', issue);
console.log('');
console.log('place        code        reports people first  last  tagged');
for (const c of clusters) {
  const tags = Object.entries(c.taggedAs)
    .sort((a, b) => b[1] - a[1])
    .map(([p, n]) => `${p}×${n}`)
    .join(' ');
  console.log(
    c.place.padEnd(12),
    c.code.padEnd(11),
    String(c.reports.length).padStart(4),
    String(c.people).padStart(6),
    ' ',
    c.firstSeen.slice(11, 16),
    ' ',
    c.lastSeen.slice(11, 16),
    ' ',
    tags,
  );
}
