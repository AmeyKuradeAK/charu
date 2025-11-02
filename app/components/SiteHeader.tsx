"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About Us" },
  { href: "#courses", label: "Courses" },
  { href: "#trainers", label: "Trainers" },
  { href: "#reviews", label: "Reviews" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#start", label: "Start Your Journey" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-40 mx-auto w-full max-w-6xl px-6 transition-transform duration-200 ${
        scrolled ? "scale-102 shadow-soft" : ""
      }`}
    >
      <nav className="backdrop-blur-sm rounded-full bg-white/60 dark:bg-black/60 border border-transparent px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-semibold text-[var(--text)]">
            Charu Trading Academy
          </Link>
        </div>

          <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative inline-block text-sm font-medium text-var-text hover:text-[var(--accent)] transition-colors"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 block h-0.5 w-0 bg-[var(--accent)] transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
