# Master Prompt: 3D Shoe Showroom Webpage (LASTDEPT. Style)

Use this prompt whenever you want an AI assistant to build this exact project from scratch without needing reference videos or screenshots.

---

## 🎯 The Prompt

```markdown
Build a futuristic luxury sneaker showroom hero section for a brand named "LASTDEPT." using Next.js (App Router), TypeScript, and Tailwind CSS. Ensure full responsiveness across Desktop, Laptop, Tablet, and Mobile devices.

### 1. Aesthetic & Atmosphere
- **Theme**: Dark, minimalist luxury showroom (graphite/charcoal background `#121214` with ambient radial lighting).
- **Physical Concept**: Shoes displayed in an exhibition hall, resting on floating acrylic/frosted glass pedestals with edge highlights and cast shadows.
- **Micro-Interactions**: Ambient glow effects, glowing neon shelf lights, smooth scale-up transitions, and clean typography.

### 2. Core Experience — 2 Seamless Modes
The application must dynamically switch between two main views:

#### A. Showroom Wall Mode (Overview)
- Display a dual-row exhibition wall holding 10 unique designer sneakers (5 shoes per row on desktop).
- Each shoe sits atop an acrylic glass shelf.
- **Hover interaction**: 
  - The shoe floats upward slightly (`translate-y`).
  - Its pedestal illuminates with an intense warm neon orange/amber under-glow.
  - Subtitle, model name, and price appear beneath each shelf.

#### B. Cinematic Detail Mode (Single Shoe Focus)
- Clicking any sneaker smoothly zooms into a 3-column spotlight layout:
  - **Left Column**: Series classification tag (e.g. `LAST DEPT. / 03`), bold uppercase model title (e.g. `HANGAR 03`, `GRADE 10`), technical description, and shoe type badge.
  - **Center Stage**: Large zoomed-in shoe graphic positioned directly on an illuminated acrylic slab with an integrated neon glowing edge and ambient glow matching the shoe's color scheme.
  - **Right Column**: Live price in Euros (e.g. `€185`), colorway tag, "Choose your size" dropdown selector, a pill-shaped "Add to Bag" button with bag icon, and an expandable "Design details" accordion.
  - **Controls**: Include previous/next arrow buttons (`←` / `→`) and keyboard arrow key listener to cycle between models, plus an `ESC` key or "Overview" button to return to the wall.

### 3. Header & Navigation
- **Top Left**: `LD LASTDEPT.` minimalist brand mark.
- **Top Center**: Tab switcher (`Collection` with active underline indicator & `Studio`).
- **Top Right**: Interactive `Bag [n]` counter with toast notification when an item is added.
- **Sub-header**: Series indicator and tagline *"A different perspective."*

### 4. Responsiveness
- **Desktop/Laptop**: Full 5-column, 2-row wall grid; spacious 3-column layout in Detail Mode.
- **Tablet**: Reflowed 3-column wall grid with touch-friendly targets.
- **Mobile**: Clean 2-column grid reflow, stacked layout for Detail Mode with sticky bag actions.
```

---

## 💡 Prompt Engineering Breakdown

When prompting complex web applications without visual assets, follow these 4 pillars:

| Pillar | What to Include | Example |
| :--- | :--- | :--- |
| **1. Spatial Metaphor** | Don't just say "e-commerce page". Describe the physical world analogy. | *"Shoes resting on floating acrylic glass pedestals in a dark showroom"* |
| **2. State & Mode Structure** | Clearly delineate the different application states. | *"Mode A: 2-Row Wall Overview" vs "Mode B: 3-Column Focus Detail"* |
| **3. Spatial Column Breakdown** | Break complex views down by screen position. | *"Left: Name & Specs, Center: Big Shoe + Glow, Right: Price & Size"* |
| **4. Micro-Interactions & Hotkeys** | Mention tactile details that make the UI feel alive. | *"Pedestal neon under-glow on hover, keyboard arrow cycling, ESC to exit"* |
