"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../assets/icons/arrow.svg";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
];

export function LanguageMenu() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(LANGUAGES[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative ml-1">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 items-center gap-1 rounded px-2 text-[13px] hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-white/50"
      >
        <span className="hidden sm:inline">{current.label}</span>
        <span className="uppercase sm:hidden">{current.code}</span>
        <img src={ChevronDownIcon.src} alt="" className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full z-20 mt-1 w-36 rounded-md border border-black/20 bg-[#2f3532] py-1 text-[13px] shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
        >
          {LANGUAGES.map((lang) => {
            const selected = lang.code === current.code;
            return (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setCurrent(lang);
                    setOpen(false);
                  }}
                  className={`w-full px-3 py-1.5 text-left hover:bg-white/[0.06] hover:text-white ${
                    selected ? "text-white" : "text-[#c9cfcc]"
                  }`}
                >
                  {lang.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
