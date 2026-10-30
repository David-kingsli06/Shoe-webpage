"use client";

import React, { useState, useEffect } from "react";
import { SHOES_DATA, ShoeItem } from "./shoesData";
import { ShoeVisual } from "./ShoeVisual";

export default function Home() {
  const [selectedShoe, setSelectedShoe] = useState<ShoeItem | null>(null);
  const [hoveredShoe, setHoveredShoe] = useState<ShoeItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [bagCount, setBagCount] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"collection" | "studio">("collection");
  const [isAddedToast, setIsAddedToast] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  // When a shoe is selected in detail view, default its size
  useEffect(() => {
    if (selectedShoe) {
      setSelectedSize(selectedShoe.sizes[2] || selectedShoe.sizes[0]);
      setDetailsOpen(false);
    }
  }, [selectedShoe]);

  const handleAddToBag = () => {
    setBagCount((prev) => prev + 1);
    setIsAddedToast(true);
    setTimeout(() => setIsAddedToast(false), 2400);
  };

  const handleNextShoe = () => {
    if (!selectedShoe) return;
    const currentIndex = SHOES_DATA.findIndex((s) => s.id === selectedShoe.id);
    const nextIndex = (currentIndex + 1) % SHOES_DATA.length;
    setSelectedShoe(SHOES_DATA[nextIndex]);
  };

  const handlePrevShoe = () => {
    if (!selectedShoe) return;
    const currentIndex = SHOES_DATA.findIndex((s) => s.id === selectedShoe.id);
    const prevIndex = (currentIndex - 1 + SHOES_DATA.length) % SHOES_DATA.length;
    setSelectedShoe(SHOES_DATA[prevIndex]);
  };

  const topRow = SHOES_DATA.filter((s) => s.row === 1);
  const bottomRow = SHOES_DATA.filter((s) => s.row === 2);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedShoe(null);
      } else if (e.key === "ArrowRight") {
        handleNextShoe();
      } else if (e.key === "ArrowLeft") {
        handlePrevShoe();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const [mousePos, setMousePos] = useState({ x: 50, y: 35 });

  // Interactive mouse lighting tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full showroom-wall concrete-texture text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Dynamic Interactive Studio Spotlight on Wall */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-60"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 250, 245, 0.07) 0%, rgba(255, 230, 210, 0.02) 40%, transparent 70%)`,
        }}
      />

      {/* Background Soft Studio Wall Light Cast */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[550px] rounded-full blur-[160px] opacity-25 transition-all duration-700 z-0"
        style={{
          background: selectedShoe
            ? selectedShoe.glowColor
            : hoveredShoe
            ? hoveredShoe.glowColor
            : "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 70%)"
        }}
      />

      {/* Atmospheric Wall Texture / Studio Perimeter Shadow Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-black/10 to-black/85 z-0" />

      {/* TOP NAVIGATION BAR */}
      <header className="relative z-50 flex items-center justify-between px-6 sm:px-12 py-5 sm:py-7 border-b border-white/[0.04]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSelectedShoe(null)}
            className="flex items-center gap-2.5 text-left group transition-all cursor-pointer"
          >
            <div className="w-6 h-6 rounded border border-white/40 flex items-center justify-center font-bold text-[10px] tracking-tighter text-white group-hover:border-white transition-colors">
              LD
            </div>
            <span className="font-extrabold tracking-widest text-sm text-zinc-200 group-hover:text-white uppercase transition-colors">
              LASTDEPT.
            </span>
          </button>
        </div>

        {/* Center Switcher: Collection / Studio */}
        <nav className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm uppercase tracking-wider font-medium">
          <button
            onClick={() => {
              setActiveTab("collection");
              setSelectedShoe(null);
            }}
            className={`relative py-1 transition-all cursor-pointer ${
              activeTab === "collection"
                ? "text-white font-semibold"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Collection
            {activeTab === "collection" && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white rounded-full" />
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab("studio");
            }}
            className={`relative py-1 transition-all cursor-pointer ${
              activeTab === "studio"
                ? "text-white font-semibold"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Studio
            {activeTab === "studio" && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white rounded-full" />
            )}
          </button>
        </nav>

        {/* Right Nav: Currency & Bag */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <span className="text-zinc-500 hidden sm:inline">EUR / €</span>
          <div className="relative">
            <button
              onClick={() => alert(`Your Bag contains ${bagCount} items.`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all text-zinc-200 hover:text-white cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>Bag</span>
              <span className="text-zinc-400">[{bagCount}]</span>
            </button>
          </div>
        </div>
      </header>

      {/* SUB-HEADER / PERSPECTIVE TAGLINE */}
      <div className="px-6 sm:px-12 pt-3 sm:pt-4 z-40 flex items-center justify-between">
        <div>
          <span className="block text-[11px] sm:text-xs text-zinc-500 font-mono tracking-widest uppercase">
            {selectedShoe ? selectedShoe.series : "CURATED SERIES // 2026"}
          </span>
          <h2 className="text-sm sm:text-base text-zinc-300 font-light tracking-wide mt-0.5">
            {selectedShoe ? selectedShoe.colorway : "A different perspective."}
          </h2>
        </div>

        {/* Quick controls when in detail view */}
        {selectedShoe && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevShoe}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Previous shoe (Left Arrow)"
            >
              ←
            </button>
            <span className="text-xs font-mono text-zinc-500 px-1">
              {SHOES_DATA.findIndex((s) => s.id === selectedShoe.id) + 1} / {SHOES_DATA.length}
            </span>
            <button
              onClick={handleNextShoe}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Next shoe (Right Arrow)"
            >
              →
            </button>
            <button
              onClick={() => setSelectedShoe(null)}
              className="ml-2 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded border border-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              ESC / Close
            </button>
          </div>
        )}
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="relative flex-1 flex flex-col justify-center items-center px-4 sm:px-10 py-6 sm:py-8 z-30">
        {/* VIEW 1: FULL WALL / 2-ROW FLOATING GLASS SHELVES */}
        {!selectedShoe && (
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 my-auto">
            {/* Top Row of 5 shoes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-6 lg:gap-8 items-end justify-items-center">
              {topRow.map((shoe) => {
                const isHovered = hoveredShoe?.id === shoe.id;
                return (
                  <div
                    key={shoe.id}
                    onMouseEnter={() => setHoveredShoe(shoe)}
                    onMouseLeave={() => setHoveredShoe(null)}
                    onClick={() => setSelectedShoe(shoe)}
                    className="group relative flex flex-col items-center cursor-pointer w-full max-w-[210px] transition-transform duration-300 hover:-translate-y-2"
                  >
                    {/* Floating Shoe Visual sitting directly atop pedestal */}
                    <div className="relative w-full flex items-end justify-center z-10 px-2 transition-transform duration-300 group-hover:scale-105">
                      <ShoeVisual
                        id={shoe.id}
                        imageSrc={shoe.imageSrc}
                        name={shoe.name}
                        accentColor={shoe.accentColor}
                        glowColor={shoe.glowColor}
                      />
                    </div>

                    {/* Acrylic Glass Pedestal Shelf */}
                    <div className="w-full relative flex flex-col items-center">
                      <div
                        className={`w-full h-3 sm:h-3.5 rounded-sm transition-all duration-300 border border-white/20 ${
                          isHovered
                            ? "acrylic-pedestal-active border-amber-300/80 shadow-[0_0_20px_rgba(251,146,60,0.7)]"
                            : "acrylic-pedestal"
                        }`}
                      />
                      {/* Cast shadow under the acrylic shelf */}
                      <div
                        className={`w-4/5 h-2 rounded-full filter blur-[4px] -mt-1 transition-opacity duration-300 ${
                          isHovered ? "opacity-90 bg-amber-500/40" : "opacity-40 bg-black"
                        }`}
                      />
                    </div>

                    {/* Hover Label metadata */}
                    <div className="mt-3 text-center transition-opacity duration-200">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 group-hover:text-zinc-300">
                        {shoe.series}
                      </p>
                      <p className="text-xs font-semibold text-zinc-300 group-hover:text-white tracking-wide">
                        {shoe.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                        {shoe.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row of 5 shoes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-6 lg:gap-8 items-end justify-items-center">
              {bottomRow.map((shoe) => {
                const isHovered = hoveredShoe?.id === shoe.id;
                return (
                  <div
                    key={shoe.id}
                    onMouseEnter={() => setHoveredShoe(shoe)}
                    onMouseLeave={() => setHoveredShoe(null)}
                    onClick={() => setSelectedShoe(shoe)}
                    className="group relative flex flex-col items-center cursor-pointer w-full max-w-[210px] transition-transform duration-300 hover:-translate-y-2"
                  >
                    {/* Floating Shoe Visual sitting directly atop pedestal */}
                    <div className="relative w-full flex items-end justify-center z-10 px-2 transition-transform duration-300 group-hover:scale-105">
                      <ShoeVisual
                        id={shoe.id}
                        imageSrc={shoe.imageSrc}
                        name={shoe.name}
                        accentColor={shoe.accentColor}
                        glowColor={shoe.glowColor}
                      />
                    </div>

                    {/* Acrylic Glass Pedestal Shelf */}
                    <div className="w-full relative flex flex-col items-center">
                      <div
                        className={`w-full h-3 sm:h-3.5 rounded-sm transition-all duration-300 border border-white/20 ${
                          isHovered
                            ? "acrylic-pedestal-active border-amber-300/80 shadow-[0_0_20px_rgba(251,146,60,0.7)]"
                            : "acrylic-pedestal"
                        }`}
                      />
                      {/* Cast shadow under the acrylic shelf */}
                      <div
                        className={`w-4/5 h-2 rounded-full filter blur-[4px] -mt-1 transition-opacity duration-300 ${
                          isHovered ? "opacity-90 bg-amber-500/40" : "opacity-40 bg-black"
                        }`}
                      />
                    </div>

                    {/* Hover Label metadata */}
                    <div className="mt-3 text-center transition-opacity duration-200">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 group-hover:text-zinc-300">
                        {shoe.series}
                      </p>
                      <p className="text-xs font-semibold text-zinc-300 group-hover:text-white tracking-wide">
                        {shoe.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                        {shoe.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: CINEMATIC ZOOM / DETAIL FOCUS VIEW (Matching Reference) */}
        {selectedShoe && (
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative my-auto animate-fade-in">
            {/* LEFT COLUMN: TITLE & SPECS */}
            <div className="w-full lg:w-1/4 flex flex-col order-2 lg:order-1 text-center lg:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                {selectedShoe.series}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-1 uppercase">
                {selectedShoe.name}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-3 max-w-sm mx-auto lg:mx-0">
                {selectedShoe.description}
              </p>

              {/* Tag / Category indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] text-zinc-300">
                  {selectedShoe.shoeType}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] text-zinc-300">
                  {selectedShoe.colorway}
                </span>
              </div>
            </div>

            {/* CENTER: MASSIVE ZOOMED SHOE ON ILLUMINATED PEDESTAL */}
            <div className="w-full lg:w-2/4 flex flex-col items-center justify-center relative order-1 lg:order-2 py-6">
              {/* Surrounding Ambient Underglow */}
              <div
                className="absolute w-[85%] h-36 rounded-full blur-[80px] pointer-events-none opacity-60 transition-all duration-700"
                style={{ background: selectedShoe.glowColor }}
              />

              {/* Massive Shoe Graphic */}
              <div className="relative w-full max-w-[580px] flex items-center justify-center z-10 transition-transform duration-500 hover:scale-105">
                <ShoeVisual
                  id={selectedShoe.id}
                  imageSrc={selectedShoe.imageSrc}
                  name={selectedShoe.name}
                  accentColor={selectedShoe.accentColor}
                  glowColor={selectedShoe.glowColor}
                  isDetailed={true}
                />
              </div>

              {/* Illuminated Glass Base Pedestal with glowing orange neon strip */}
              <div className="w-full max-w-[540px] relative -mt-4 flex flex-col items-center z-20">
                {/* Acrylic Slab */}
                <div className="w-full h-5 sm:h-6 rounded-sm acrylic-pedestal-active border border-amber-300/80 shadow-[0_0_35px_rgba(251,146,60,0.85)] relative overflow-hidden">
                  {/* Internal Neon Glow Line */}
                  <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 shadow-[0_0_15px_#f97316]" />
                </div>
                {/* Surface Reflection Floor Glow */}
                <div className="w-[85%] h-6 bg-gradient-to-b from-orange-500/30 to-transparent blur-md -mt-1 rounded-full" />
              </div>
            </div>

            {/* RIGHT COLUMN: PRICE, SIZES & ADD TO BAG */}
            <div className="w-full lg:w-1/4 flex flex-col order-3 text-center lg:text-left bg-zinc-900/40 lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-white/5 lg:border-none backdrop-blur-sm lg:backdrop-blur-none">
              {/* Series and Price */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                    SERIES 01 // FOOTWEAR
                  </span>
                  <div className="text-xs text-zinc-300">{selectedShoe.colorway}</div>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                  {selectedShoe.price}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span>Choose your size</span>
                  <span className="font-mono text-[11px] text-zinc-500">True to size</span>
                </div>

                <div className="relative">
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-zinc-900/80 border border-white/10 text-white rounded-lg px-3 py-2.5 text-xs font-mono appearance-none focus:outline-none focus:border-white/40 cursor-pointer"
                  >
                    {selectedShoe.sizes.map((sz) => (
                      <option key={sz} value={sz} className="bg-zinc-900 text-white">
                        {sz} — In Stock
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Add to Bag Button (Pill button with bag icon matching reference) */}
              <button
                onClick={handleAddToBag}
                className="mt-4 w-full py-3.5 px-4 rounded-xl bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
              >
                <span>Add to Bag</span>
                <span className="text-zinc-500">•</span>
                <span>{selectedShoe.price}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>

              {/* Design Details Accordion */}
              <div className="mt-5 border-t border-white/[0.08] pt-3">
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className="w-full flex items-center justify-between text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
                >
                  <span className="uppercase tracking-wider text-[11px] font-mono">
                    Design details
                  </span>
                  <span className="text-sm font-mono">{detailsOpen ? "−" : "+"}</span>
                </button>

                {detailsOpen && (
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-400 font-mono border-l border-white/10 pl-3">
                    {selectedShoe.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER BAR */}
      <footer className="relative z-40 px-6 sm:px-12 py-4 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
        <div className="flex items-center gap-4">
          <span>© 2026 LASTDEPT. LAB</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">HIGH-FIDELITY 3D SHOWROOM</span>
        </div>

        <div className="flex items-center gap-4">
          {selectedShoe ? (
            <span className="text-amber-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Use ← → keys to cycle models • ESC to exit
            </span>
          ) : (
            <span>Click any shoe to inspect full view</span>
          )}
        </div>
      </footer>

      {/* TOAST NOTIFICATION WHEN ADDED TO BAG */}
      {isAddedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-white/20 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="text-xs">
            <span className="font-semibold">{selectedShoe?.name}</span> ({selectedSize}) added to bag.
          </div>
        </div>
      )}
    </div>
  );
}
