"use client";

import Link from "next/link";
import { useState } from "react";
import GearIcon from "../assets/icons/GearIcon.svg";
import Logo from "../assets/icons/Logo.svg";
import MailIcon from "../assets/icons/MailIcon.svg";
import MenuIcon from "../assets/icons/MenuIcon.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import { LanguageMenu } from "./LanguageMenu";

const iconButton =
  "grid size-9 place-items-center rounded hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-white/50";

const searchInput =
  "w-full rounded-[5px] border border-transparent bg-[#535c58] text-white placeholder:text-[#eef0ef] focus:border-white/20 focus:bg-[#59615d] focus:outline-none";

type TopBarProps = {
  onMenuClick?: () => void;
};

export function TopBar({ onMenuClick }: TopBarProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-[#2d3131] text-[#eceeed]">
      <div className="flex h-14 items-center gap-3 px-3 sm:h-[81px] sm:px-6">
        {/* Left */}
        <div className="flex flex-1 items-center gap-3 sm:gap-5">
          <button type="button" aria-label="Open navigation" onClick={onMenuClick} className={iconButton}>
            <img src={MenuIcon.src} alt="" />
          </button>
          <Link href="/">
            <img src={Logo.src} alt="Wizbay" width={100} height={17} />
          </Link>
        </div>

        {/* Center: search (md and up) */}
        <form role="search" action="/search" className="hidden w-full max-w-[450px] md:block">
          <label className="relative block">
            <span className="sr-only">Search dashboard</span>
            <img src={SearchIcon.src} alt="" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2" />
            <input type="search" name="q" placeholder="Search dashboard" className={`h-11 pl-12 pr-4 text-[15px] ${searchInput}`} />
          </label>
        </form>

        {/* Right */}
        <div className="flex flex-1 items-center justify-end gap-0.5 sm:gap-1">
          <button
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            aria-controls="mobile-search"
            onClick={() => setSearchOpen((o) => !o)}
            className={`${iconButton} md:hidden`}
          >
            <img src={SearchIcon.src} alt="" width={18} height={18} />
          </button>
          <Link href="/inbox" aria-label="Messages" className={iconButton}>
            <img src={MailIcon.src} alt="" />
          </Link>
          <Link href="/settings" aria-label="Settings" className={iconButton}>
            <img src={GearIcon.src} alt="" />
          </Link>
          <LanguageMenu />
        </div>
      </div>

      {/* Mobile search row */}
      {searchOpen && (
        <form id="mobile-search" role="search" action="/search" className="border-t border-black/15 px-3 pb-3 pt-2 md:hidden">
          <label className="relative block">
            <span className="sr-only">Search dashboard</span>
            <img src={SearchIcon.src} alt="" width={16} height={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="search" name="q" placeholder="Search dashboard" autoFocus className={`h-9 pl-9 pr-3 text-sm ${searchInput}`} />
          </label>
        </form>
      )}
    </header>
  );
}
