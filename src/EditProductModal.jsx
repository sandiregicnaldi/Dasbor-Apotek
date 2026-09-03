import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { formatProductLabel } from './productHelper';

const fmt = n => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n || 0);

export default function EditProductModal({ product, close, save }) {
  const base = product.units?.find(u => u.default) || product.units?.[0];
  const [v, setV] = useState({
    brandName: product.brandName || product.name || '',
    activeIngredient: product.activeIngredient || '',
    strength: product.strength || '',
    dosageForm: product.dosageForm || '',
    sku: product.sku || '',
    barcode: product.barcode || '',
    category: product.category || '',
    baseUnit: product.baseUnit || '',
    min: String(product.min ?? ''),
    mode: 'manual',
    purchase: String(base?.purchase || 0),
    sell: String(base?.sell || 0),
    vat: '11',
    margin: '25'
  });

  const f = (k, l, t = 'text', req = true) => (
    <label>
      {l}
      <input
        required={req}
        type={t}
        value={v[k]}
        onChange={e => setV({ ...v, [k]: e.target.value })}
      />
    </label>
  );

  const cost = +v.purchase || 0;
  const auto = Math.round(cost * (1 + (+v.vat || 0) / 100) * (1 + (+v.margin || 0) / 100) / 50) * 50;
  const price = v.mode === 'manual' ? (+v.sell || 0) : auto;

  const previewLabel = formatProductLabel({
    brandName: v.brandName,
    activeIngredient: v.activeIngredient,
    strength: v.strength,
    dosageForm: v.dosageForm
  });

  const submit = () => {
    if (!v.brandName.trim() || !v.sku.trim() || !v.barcode.trim() || !v.category.trim() || !v.baseUnit.trim() || +v.min < 0 || price <= 0) return;

    save({
      ...product,
      name: previewLabel,
      brandName: v.brandName.trim(),
      activeIngredient: v.activeIngredient.trim(),
      strength: v.strength.trim(),
      dosageForm: v.dosageForm.trim(),
      sku: v.sku.trim(),
      barcode: v.barcode.trim(),
      category: v.category.trim(),
      baseUnit: v.baseUnit.trim(),
      min: +v.min,
      units: product.units.map(u => u.default ? { ...u, purchase: cost, sell: price } : u)
    });
  };

  return (
    <div className="overlay">
      <form className="modal" onSubmit={e => e.preventDefault()}>
        <div className="modalhead">
          <h2>Edit Produk</h2>
          <button type="button" onClick={close}><X /></button>
        </div>

        <div className="formgrid product-form">
          <div className="form-section">
            <h3>Identitas Obat</h3>
            {f('brandName', 'NAMA OBAT / MEREK')}
            {f('activeIngredient', 'KANDUNGAN / ZAT AKTIF', 'text', false)}

            <div className="formgrid compact">
              {f('strength', 'KEKUATAN (cth: 500 mg)', 'text', false)}
              {f('dosageForm', 'SEDIAAN (cth: Tablet, Kapsul)', 'text', false)}
            </div>

            <div className="product-identity-preview">
              <small><Sparkles size={14} /> PREVIEW LABEL LENGKAP</small>
              <strong>{previewLabel || '—'}</strong>
            </div>

            <div className="formgrid compact">
              {f('sku', 'SKU / KODE OBAT')}
              {f('barcode', 'BARCODE')}
            </div>

            <div className="formgrid compact">
              {f('category', 'KATEGORI')}
              {f('baseUnit', 'SATUAN DASAR')}
            </div>

            {f('min', 'MINIMUM STOK', 'number')}
          </div>

          <div className="form-section">
            <h3>Harga Satuan Dasar</h3>
            <p className="hint">Konversi satuan yang sudah ada tetap dipertahankan.</p>
            <div className="price-mode">
              <button type="button" className={v.mode === 'manual' ? 'selected' : ''} onClick={() => setV({ ...v, mode: 'manual' })}>
                Manual<small>Harga beli + jual</small>
              </button>
              <button type="button" className={v.mode === 'margin' ? 'selected' : ''} onClick={() => setV({ ...v, mode: 'margin' })}>
                PPN + Margin<small>Harga jual otomatis</small>
              </button>
            </div>
            {f('purchase', 'HARGA BELI / SATUAN DASAR', 'number')}
            {v.mode === 'manual' ? (
              f('sell', 'HARGA JUAL / SATUAN DASAR', 'number')
            ) : (
              <>
                <div className="formgrid compact">
                  {f('vat', 'PPN (%)', 'number')}
                  {f('margin', 'MARGIN (%)', 'number')}
                </div>
                <div className="price-preview">
                  Harga jual otomatis <b>{fmt(auto)}</b>
                  <small>Harga beli + PPN, lalu margin. Dibulatkan Rp50.</small>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="modalfoot">
          <button type="button" className="ghost" onClick={close}>BATAL</button>
          <button className="primary" onClick={submit}>SIMPAN PERUBAHAN</button>
        </div>
      </form>
    </div>
  );
}
