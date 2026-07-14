import type { RegionDetail } from "./types";

/**
 * Loads the detailed regulatory content for a region slug.
 *
 * Each region should have its own file at `./{slug}.ts` that default-exports a
 * `RegionDetail` object. Missing files return `null`, and the detail page falls
 * back to a generic overview.
 */
export async function getRegionDetail(slug: string): Promise<RegionDetail | null> {
  try {
    const mod = (await import(`./${slug}`)) as { default?: RegionDetail };
    return mod.default ?? null;
  } catch {
    return null;
  }
}
