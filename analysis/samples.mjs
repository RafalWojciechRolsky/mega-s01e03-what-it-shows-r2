// Przykładowe zgłoszenia z każdego klastra #4471 - dowody do treści ticketów.
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  uniqueById,
  clusterReports,
  ticketIssue,
  reporterKey,
  fingerprint,
} from '../src/lib/kb/fingerprint.ts';

const here = dirname(fileURLToPath(import.meta.url));
const srcDir = join(here, '..', 'src');
const reports = JSON.parse(readFileSync(join(here, '..', 'data', 'reports-4471.json'), 'utf8'));

const tenantDir = join(srcDir, 'lib/data/tenants');
const tenants = readdirSync(tenantDir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(tenantDir, f), 'utf8')));
const productByDomain = new Map(tenants.flatMap((t) => t.domains.map((d) => [d, t.product])));
const placeOf = (r) => productByDomain.get(reporterKey(r.reporter).split('@')[1]) ?? r.product;

const merged = uniqueById(reports).filter((r) => r.mergedInto === 4471);
const clusters = clusterReports(merged, placeOf);
const issue = ticketIssue(clusters, 4471);

for (const c of clusters) {
  console.log(`\n=== ${c.fingerprint} ${c.fingerprint === issue ? '(ticket issue #4471)' : '(merged into #4471 bez własnego ticketa)'} ===`);
  const samples = c.reports.slice(0, 3);
  for (const r of samples) {
    const domain = reporterKey(r.reporter).split('@')[1] ?? '(brak adresu)';
    console.log(`- ${r.id} | ${r.receivedAt} | intake product: ${r.product} | place: ${placeOf(r)} | fp: ${fingerprint({ ...r, place: placeOf(r) })}`);
    console.log(`  reporter: ${r.reporter} (domena: ${domain})`);
    console.log(`  subject: ${r.subject}`);
    console.log(`  meta.errorCode: ${r.meta?.errorCode ?? '(brak)'}`);
    console.log(`  body: ${r.body}`);
  }
  // Rozkład domen w klastrze (dowód na "miejsce z domeny tenanta")
  const byDomain = {};
  for (const r of c.reports) {
    const d = reporterKey(r.reporter).split('@')[1] ?? '(brak)';
    byDomain[d] = (byDomain[d] ?? 0) + 1;
  }
  console.log('  domeny reporterów:', Object.entries(byDomain).sort((a, b) => b[1] - a[1]).map(([d, n]) => `${d}×${n}`).join(' '));
}
