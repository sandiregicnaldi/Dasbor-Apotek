---
name: Clinical Precision System
colors:
  surface: '#f6faf9'
  surface-dim: '#d7dbda'
  surface-bright: '#f6faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f3'
  surface-container: '#ebefee'
  surface-container-high: '#e5e9e8'
  surface-container-highest: '#dfe3e2'
  on-surface: '#181c1c'
  on-surface-variant: '#3e4949'
  inverse-surface: '#2c3131'
  inverse-on-surface: '#edf2f1'
  outline: '#6e7979'
  outline-variant: '#bdc9c8'
  surface-tint: '#006a6a'
  primary: '#006565'
  on-primary: '#ffffff'
  primary-container: '#008080'
  on-primary-container: '#e3fffe'
  inverse-primary: '#76d6d5'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#8b4823'
  on-tertiary: '#ffffff'
  tertiary-container: '#a96039'
  on-tertiary-container: '#fff9f7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#93f2f2'
  primary-fixed-dim: '#76d6d5'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#733512'
  background: '#f6faf9'
  on-background: '#181c1c'
  surface-variant: '#dfe3e2'
  medical-blue: '#0056b3'
  status-critical: '#dc3545'
  status-warning: '#f59e0b'
  status-success: '#10b981'
  border-subtle: '#e9ecef'
  data-surface: '#ffffff'
typography:
  display-lg:
    fontFamily: geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: jetbrainsMono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  data-mono:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.2'
  label-caps:
    fontFamily: geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
spacing:
  unit: 4px
  gutter: 16px
  margin-page: 24px
  density-high: 8px
  density-tight: 4px
---

## Brand & Style

The design system is engineered for the high-stakes environment of pharmacy management. It prioritizes **Clinical Precision** and **Operational Efficiency**, evoking a sense of trust, hygiene, and technical reliability. The aesthetic is strictly functional, stripping away decorative elements to focus entirely on data density and legibility.

### Design Movement: Technical Minimalism
The style blends **Minimalism** with **Brutalist** structural integrity. It uses a high-precision, sharp-edged aesthetic that mimics professional laboratory equipment. 
- **Information Density:** Optimized for pharmacists who need to scan hundreds of stock items quickly.
- **Zero-Friction UI:** No rounded corners, no soft shadows, and no organic shapes. Every pixel serves a structural or informational purpose.
- **Offline Reliability:** Visual cues prioritize "system status" (sync indicators, local storage state) to ensure the user feels in control even without connectivity.

## Colors

The palette is rooted in a "Lab-Light" theme. The primary **Teal (#008080)** provides a sophisticated, calming, yet authoritative anchor for the interface.

### Color Strategy
- **Functional Primaries:** Teal is used for primary actions and brand presence. Medical Blue is reserved for secondary navigation or specific medical-grade identifiers.
- **Neutral Foundation:** We use a hierarchy of grays (`#f8f9fa` for backgrounds, `#e9ecef` for structural borders) to create a clean, sterile environment.
- **Semantic Alerts:** Functional signaling is prioritized over aesthetics. 
    - **Critical (#dc3545):** Used for expired stock or sync errors. 
    - **Warning (#f59e0b):** Used for low stock levels or offline warnings.
    - **Success (#10b981):** Used for successful cloud synchronization and completed transactions.

## Typography

This design system employs a dual-mono typographic strategy to maximize technical clarity.

- **Headlines (Geist):** Used for structural hierarchy, page titles, and card headers. Its clean, geometric nature provides the "Modern Professional" look.
- **Data & Body (JetBrains Mono):** All transactional data, stock counts, batch numbers, and prices use JetBrains Mono. Its distinct character shapes prevent reading errors (e.g., distinguishing '0' from 'O' or '1' from 'l'), which is critical for medical SKU management.
- **Scale:** High contrast between labels and data. Labels are often small and uppercase to act as metadata for the more prominent monospaced values.

## Layout & Spacing

The layout philosophy is based on a **Rigid Grid** that maximizes screen real estate for data entry and monitoring.

### Layout Model
- **12-Column Grid:** A standard 12-column grid for desktop views, reflowing to a single column for mobile monitoring (Owner view).
- **High-Density Spacing:** We use a 4px base unit. Gaps between table rows and form fields are kept to a minimum (`density-tight`) to allow pharmacists to view more data without scrolling.
- **Reflow Rules:** 
    - **Desktop:** Dashboard uses a masonry-style layout for alert panels.
    - **POS:** A fixed-height sidebar for the cart/total and a fluid center for product selection.
    - **Mobile:** All data tables transform into condensed cards for legibility on small screens.

## Elevation & Depth

To maintain the "Laboratory" feel, this design system avoids shadows entirely, opting for **Tonal Layers** and **Bold Outlines**.

- **Z-Axis Hierarchy:** Depth is conveyed by shifting background colors. 
    - **Level 0 (App Background):** `#f8f9fa` (Light Gray).
    - **Level 1 (Cards/Tables):** `#ffffff` (Pure White).
    - **Level 2 (Modals/Overlays):** `#ffffff` with a 2px solid `#000000` or `#008080` border.
- **Borders over Shadows:** UI elements are separated by 1px solid borders (`#e9ecef`). Active states use a 2px primary color border to indicate focus without needing a "lift" effect.
- **Offline State:** When the system is offline, a persistent, high-visibility 4px top-border is applied to the entire viewport using the Warning color.

## Shapes

In alignment with the high-precision, technical narrative, all UI elements utilize **Zero Roundedness**. 

- **Hard Edges:** All buttons, input fields, cards, and dropdowns have 90-degree corners. This reinforces the "unrefined" brutalist clarity and ensures maximum space usage within data grids.
- **Visual Rhythm:** The lack of curves creates a strict, architectural rhythm that feels like a professional terminal or an industrial control panel.

## Components

### Buttons
- **Primary:** Solid Teal (#008080), white JetBrains Mono text, 0px radius.
- **Ghost:** Transparent background, 1px Teal border. Used for secondary actions (e.g., "Add Batch").
- **Critical:** Solid Red (#dc3545) for "Delete" or "Void Transaction".

### Data Tables (High Density)
- **Header:** Light gray background (#f8f9fa), Geist Mono bold uppercase text.
- **Rows:** White background, 1px bottom border only (#e9ecef).
- **Cells:** JetBrains Mono for all numeric values (SKU, Batch, Price).

### Input Fields
- **Default:** 1px border (#ced4da), white background.
- **Focus:** 2px primary teal border. No glow/shadow.
- **Monospaced Input:** All quantity and price inputs must use JetBrains Mono to align with table data.

### Status Indicators (Offline/Online)
- **Online:** A small teal dot next to "Cloud Synced" text.
- **Offline:** A bold amber banner at the top of the screen indicating "Local Mode - [X] Transactions Pending Sync".

### Alert Cards
- **Near-Expiry:** A card with a 4px left-border in Amber.
- **Expired:** A card with a 4px left-border in Red.
- **Low Stock:** Uses the primary teal with a "Stock Level" progress bar that turns red when it hits the `min_stock` threshold.