# 🌌 Nebula — AI-Powered Business Card Scanner

Nebula is a modern, high-performance, single-page marketing website built to showcase the Nebula mobile app. The application features a bold, confident, rounded-sans aesthetic inspired by premium consumer product landing pages. It includes a dark-themed interactive "How It Works" guide, a 5-card Bento grid feature showcase, responsive layouts, and smooth micro-animations.

Live Preview Local Host: `http://localhost:3000`  
Remote Repository: [https://github.com/subhashmalik0001/Nebula.git](https://github.com/subhashmalik0001/Nebula.git)

---

## ✨ Features & Sections

### 1. 🧭 Sticky Frosted Navigation
- Sticky, frosted-glass navbar (`backdrop-blur-sm`) that responds dynamically to scroll triggers.
- Native integration of the original Nebula logo (no color filters or icon overlaps).
- Responsive mobile layout featuring an overlay drawer with a body scroll lock.

### 🚀 2. Hero Section
- Bold, high-personality display typography utilizing **Bricolage Grotesque**.
- Integrated trust badge pill highlighting the global user base (50k+ professionals across 40+ countries).
- Right-column visual showcases the new app interface (`herosec2.png`) floating on a clean backdrop.
- Integrated download badges (iOS & Android) and integrations pills (Gmail, Outlook, HubSpot, Salesforce).

### 📊 3. Interactive Stats Strip ("Why Nebula?")
- Dotted blueprint grids and card structures to outline performance metrics.
- Animated count-up counters that fire once upon entering the viewport.
- Fully styled quote block highlighting real-user testimonials.

### 📱 4. Dark Theme "How It Works"
- Contrast section (`#0E0B1A`) with ambient radial violet glows.
- 3-step pipeline: **Point your camera**, **AI extracts details**, **Saved & Synced**.
- Showcases real app screenshots (`mainapp.png`, `hersection.png`, and `contacts.png`) positioned flush at the bottom of gradient-accented cards.

### 🍱 5. 5-Card Bento Grid Showcase
A beautifully aligned asymmetric grid mimicking the top row and bottom row proportions of premium layouts:
- **Top Row (3 Equal Cards):**
  - **Smart Search:** Search by any field with full-text fuzzy matches (renders `illus1.png`).
  - **QR Sharing:** Generate digital cards that can be scanned with native cameras (renders `ill3.png`).
  - **Card Designer:** Build custom templates with drag-and-drop features (renders `illl4.png`).
- **Bottom Row (2 Asymmetric Rectangular Cards):**
  - **Contacts Hub & CRM:** Wider `7/12` card detailing database filtering and exporting (renders `contacts.png`).
  - **Real-time Analytics:** Narrower `5/12` card displaying user growth and scan graphs (renders `stats.png`).
- *Card Hierarchy:* Content is positioned at the top of the cards, and screenshots are aligned at the bottom—clipped cleanly by card boundaries.

### 📥 6. Final Call to Action
- Prominently showcases the core mobile dashboard (`herosec2.png`) sitting on an ambient glow.
- Large App Store and Google Play download badges.
- Trust bullet points emphasizing offline capability, privacy, and free tier scans.

### 🕋 7. Dark Theme Footer
- Clean, structured column layout containing product and legal links.
- Social links utilizing custom, lightweight inline SVGs to guarantee perfect brand color representation.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom color extensions configured in `tailwind.config.ts`)
- **Animations:** Framer Motion (Optimized with `prefers-reduced-motion` fallbacks)
- **Icons:** Lucide React
- **Typography:** Google Fonts pairing:
  - **Display:** `Bricolage Grotesque` (rounded display grotesque)
  - **Body:** `Inter` (readable UI body text)

---

## 🚀 Getting Started

Follow these steps to run the Nebula marketing website locally.

### Prerequisites

Make sure you have Node.js installed (v18+ recommended):
```bash
node -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/subhashmalik0001/Nebula.git
   cd Nebula
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the live site.

---

## 🎨 Design Tokens (Custom Colors)

All custom design tokens are configured as CSS variables in `app/globals.css`:

```css
:root {
  --primary:         #6A3EEB; /* Nebula Violet */
  --primary-dark:    #4A25C9; /* Hover Violet */
  --primary-light:   #EDE8FC; /* Pastel Violet */
  --bg-dark:         #0E0B1A; /* Contrast Dark Background */
  --bg-mint:         #F2EFFC; /* Accent Tint Background */
  --ink:             #0A0A0A; /* Primary Text Ink */
  --ink-soft:        #6B6B6B; /* Muted Sub-text */
  --border:          #E5E5E5; /* Grid Dotted Borders */
}
```
