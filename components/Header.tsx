"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-sand bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold text-niek"
        >
          De wereld van Niek Zervaas
        </Link>

        <button
          type="button"
          className="rounded border border-sand px-3 py-1 font-sans text-sm text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Sluiten" : "Menu"}
        </button>

        <nav className="hidden md:block" aria-label="Hoofdnavigatie">
          <ul className="flex flex-wrap gap-4 font-sans text-sm text-ink/80">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      active
                        ? "border-b border-niek pb-0.5 text-niek"
                        : "border-b border-transparent pb-0.5 hover:text-niek"
                    }
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="main-nav"
          className="border-t border-sand px-4 py-3 md:hidden"
          aria-label="Hoofdnavigatie"
        >
          <ul className="flex flex-col gap-2 font-sans text-sm text-ink/80">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      active
                        ? "block border-l-2 border-niek py-1 pl-2 text-niek"
                        : "block border-l-2 border-transparent py-1 pl-2 hover:text-niek"
                    }
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
