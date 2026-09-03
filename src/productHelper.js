/**
 * Format label obat apotek standar:
 * Nama Merek (Zat Aktif) Kekuatan — Sediaan
 * Contoh: Sanmol (Paracetamol) 500 mg — Tablet
 */
export function formatProductLabel(p = {}) {
  const brand = (p.brandName || p.name || '').trim();
  const ingredient = (p.activeIngredient || '').trim();

  let identity = brand;
  if (ingredient && brand) {
    if (ingredient.toLowerCase() !== brand.toLowerCase()) {
      identity = `${brand} (${ingredient})`;
    }
  } else if (ingredient) {
    identity = ingredient;
  }

  const str = (p.strength || '').trim();
  const form = (p.dosageForm || '').trim();

  let result = identity;
  if (str) {
    result = result ? `${result} ${str}` : str;
  }
  if (form) {
    result = result ? `${result} — ${form}` : form;
  }
  return result || identity || '';
}
