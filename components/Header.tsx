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

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean) {
  return active
    ? "text-niek underline decoration-niek/40 decoration-2 underline-offset-4"
    : "text-ink no-underline hover:text-niek";
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold leading-tight text-niek no-underline sm:text-xl"
        >
          De wereld van Niek Zervaas
        </Link>

        <button
          type="button"
          className="shrink-0 rounded border border-ink/20 px-3 py-1 text-sm text-ink hover:border-niek hover:text-niek md:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Sluiten" : "Menu"}
        </button>

        <nav className="hidden md:block" aria-label="Hoofdnavigatie">
          <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={navLinkClass(active)}
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
          className="border-t border-ink/10 px-4 py-3 md:hidden"
          aria-label="Hoofdnavigatie"
        >
          <ul className="flex flex-col gap-2 text-sm">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-1 ${navLinkClass(active)}`}
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
