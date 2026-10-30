export interface ShoeItem {
  id: string;
  name: string;
  series: string;
  price: string;
  colorway: string;
  description: string;
  details: string[];
  sizes: string[];
  row: 1 | 2;
  col: number; // 0 to 4
  accentColor: string;
  glowColor: string;
  shoeType: string;
  imageSrc: string;
}

export const SHOES_DATA: ShoeItem[] = [
  // Top Row (5 shoes)
  {
    id: "mercurial-superfly-9",
    name: "MERCURIAL ACADEMY",
    series: "LAST DEPT. / 01",
    price: "€165",
    colorway: "Glacier Blue / Deep Lagoon",
    description: "High-speed synthetic upper with dynamic fit collar and targeted micro-groove ball touch.",
    details: [
      "Streamlined textured upper for precision handling",
      "Dynamic Fit stretchy knit collar hugging the ankle",
      "Multi-directional specialized turf soleplate",
      "Cushioned impact-absorbing lightweight insole"
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 42.5", "EU 43", "EU 44", "EU 45"],
    row: 1,
    col: 0,
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.8)",
    shoeType: "Speed Turf Cleat",
    imageSrc: "/shoes/shoe_1.png"
  },
  {
    id: "adizero-takumi-sen-10",
    name: "TAKUMI SEN 10",
    series: "LAST DEPT. / 02",
    price: "€190",
    colorway: "Royal Violet / Acid Solar Lime",
    description: "Lightstrike Pro dual-density foam paired with glass-fiber EnergyRods for explosive transitions.",
    details: [
      "Lightstrike Pro ultra-responsive lightweight midsole",
      "Engineered featherlight monomesh breathable upper",
      "Refined glass-infused ENERGYRODS 2.0 propulsion",
      "Continental™ Rubber forefoot traction zone"
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    row: 1,
    col: 1,
    accentColor: "#84cc16",
    glowColor: "rgba(132, 204, 22, 0.85)",
    shoeType: "Lightweight Road Racer",
    imageSrc: "/shoes/shoe_2.png"
  },
  {
    id: "phantom-stealth-black",
    name: "STEALTH RUNNER",
    series: "LAST DEPT. / 03",
    price: "€180",
    colorway: "Triple Black / Carbon Grey",
    description: "Minimalist stealth architecture featuring seamless engineered ballistic mesh and contoured arch support.",
    details: [
      "Monochrome deep black woven mesh chassis",
      "Molded high-density EVA shock cushioning",
      "Reinforced carbon-fiber heel counter stability",
      "Reflective subtle tonal eyelet trim"
    ],
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    row: 1,
    col: 2,
    accentColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.75)",
    shoeType: "Urban Performance",
    imageSrc: "/shoes/shoe_3.png"
  },
  {
    id: "inferno-crimson-racer",
    name: "INFERNO SPORT",
    series: "LAST DEPT. / 04",
    price: "€175",
    colorway: "Crimson Scarlet / Bright White",
    description: "High-contrast dynamic speed runner engineered with pressurized heel cushioning and aerodynamic curves.",
    details: [
      "Vibrant high-contrast scarlet textile upper",
      "Spring-back responsive polyurethane midsole",
      "Sculpted lateral airflow ventilation channels",
      "High-grip multi-surface rubber outsole"
    ],
    sizes: ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43"],
    row: 1,
    col: 3,
    accentColor: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.8)",
    shoeType: "Athletic Speed Trainer",
    imageSrc: "/shoes/shoe_4.png"
  },
  {
    id: "heritage-jordan-court",
    name: "RETRO HERITAGE",
    series: "LAST DEPT. / 05",
    price: "€210",
    colorway: "Vintage Court / University Red / Black",
    description: "Legendary high-top court silhouette handcrafted in genuine leather with stitched cupsole cushioning.",
    details: [
      "Full-grain premium leather paneling and collar",
      "Encapsulated authentic Air-Sole heel unit",
      "Solid rubber outsole with deep flex grooves",
      "Classic woven tongue label and retro accents"
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"],
    row: 1,
    col: 4,
    accentColor: "#dc2626",
    glowColor: "rgba(220, 38, 38, 0.85)",
    shoeType: "Heritage Court High",
    imageSrc: "/shoes/shoe_5.png"
  },

  // Bottom Row (5 shoes)
  {
    id: "mercurial-superfly-pro",
    name: "MERCURIAL PRO ED.",
    series: "LAST DEPT. / 06",
    price: "€185",
    colorway: "Aqua Marine / Glacier Wave",
    description: "Pro-edition sculpted sockline with chevron micro-texture for instantaneous high-velocity direction changes.",
    details: [
      "Ultra-thin NikeSkin overlay for bare-foot feel",
      "Speed cage internal structure securing the foot",
      "Generative turf traction pattern",
      "Padded insole with anti-slip liner"
    ],
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    row: 2,
    col: 0,
    accentColor: "#0284c7",
    glowColor: "rgba(2, 132, 199, 0.8)",
    shoeType: "Speed Turf Cleat",
    imageSrc: "/shoes/shoe_6.png"
  },
  {
    id: "adizero-takumi-sen-ltd",
    name: "TAKUMI SEN RACER",
    series: "LAST DEPT. / 07",
    price: "€200",
    colorway: "Solar Lime / Cobalt Blue",
    description: "Competition road-racing shoe with anatomical fit and explosive toe-off geometry.",
    details: [
      "Ultra-lightweight mesh engineered for elite racing",
      "Optimized toe-spring rocker profile",
      "Direct power delivery glass-fiber EnergyRods",
      "Breathable heat-welded side reinforcements"
    ],
    sizes: ["EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    row: 2,
    col: 1,
    accentColor: "#a3e635",
    glowColor: "rgba(163, 230, 53, 0.85)",
    shoeType: "Marathon Racer",
    imageSrc: "/shoes/shoe_7.png"
  },
  {
    id: "phantom-stealth-pro",
    name: "STEALTH PROTO 08",
    series: "LAST DEPT. / 08",
    price: "€195",
    colorway: "Onyx Black / Dark Smoke",
    description: "Tactical performance low sneaker with reinforced sidewall stability and stealth reflective branding.",
    details: [
      "Water-resistant ballistic nylon upper",
      "Dual-density high rebound foam base",
      "Molded thermoplastic TPU lateral heel cage",
      "Shock-dampening ergonomic footbed"
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    row: 2,
    col: 2,
    accentColor: "#ea580c",
    glowColor: "rgba(234, 88, 12, 0.75)",
    shoeType: "Tactical Low",
    imageSrc: "/shoes/shoe_8.png"
  },
  {
    id: "inferno-crimson-elite",
    name: "INFERNO ELITE 09",
    series: "LAST DEPT. / 09",
    price: "€190",
    colorway: "Blaze Red / Pure Snow",
    description: "Engineered track trainer featuring high-visibility color blocking and flared heel cupsole stability.",
    details: [
      "Dual-layered breathable mesh panels",
      "Flared heel cup preventing pronation",
      "Padded tongue and ankle collar support",
      "Traction-tuned split rubber sole"
    ],
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    row: 2,
    col: 3,
    accentColor: "#f43f5e",
    glowColor: "rgba(244, 63, 94, 0.8)",
    shoeType: "Elite Track Trainer",
    imageSrc: "/shoes/shoe_9.png"
  },
  {
    id: "heritage-jordan-high",
    name: "RETRO COURT 10",
    series: "LAST DEPT. / 10",
    price: "€225",
    colorway: "Chicago Classic / Black / Red",
    description: "The timeless silhouette that revolutionized footwear culture, crafted in supple leather with heritage finishes.",
    details: [
      "Supple tumbled full-grain leather construction",
      "Perforated toe vamp for vintage breathability",
      "High-cut padded ankle cuff with Wings emblem",
      "Heritage rubber cupsole with pivot circle grip"
    ],
    sizes: ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    row: 2,
    col: 4,
    accentColor: "#e11d48",
    glowColor: "rgba(225, 29, 72, 0.85)",
    shoeType: "High Court Icon",
    imageSrc: "/shoes/shoe_10.png"
  }
];
