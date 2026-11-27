"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/over-niek", label: "Over Niek" },
  { href: "/communicatie", label: "Communicatie" },
  { href: "/gedachten", label: "Gedachten" },
  { href: "/media", label: "Media" },
  { href: "/bestellen", label: "Bestellen" },
  { href: "/lezing", label: "Lezing" },
  { href: "/agenda", label: "Agenda" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          De wereld van Niek Zervaas
        </Link>

        <button
          type="button"
          className="rounded border border-gray-300 px-3 py-1 text-sm text-gray-800 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Sluiten" : "Menu"}
        </button>

        <nav className="hidden md:block" aria-label="Hoofdnavigatie">
          <ul className="flex flex-wrap gap-4 text-sm text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gray-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="main-nav"
          className="border-t border-gray-200 px-4 py-3 md:hidden"
          aria-label="Hoofdnavigatie"
        >
          <ul className="flex flex-col gap-2 text-sm text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 hover:text-gray-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
