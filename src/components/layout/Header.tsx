"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all ${
        scrolled || mobileOpen
          ? "border-b border-border bg-white/80 dark:bg-neutral-950/80"
          : "bg-white/0 dark:bg-neutral-950/0"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a href="/" className="text-lg font-semibold text-text-primary">
            <span className="text-text-tertiary">{"{ "}</span>
            ms
            <span className="text-text-tertiary">{" }"}</span>
          </a>

          {/* Desktop capsule nav */}
          <div className="hidden items-center gap-2 md:flex">
            <ul className="flex items-center gap-1 rounded-full border border-border bg-white/60 dark:bg-neutral-900/60 px-1.5 py-1 shadow-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={resolveHref(item.href)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-accent text-white"
                        : "text-text-secondary hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-text-secondary transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-text-primary"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-text-primary"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-text-primary"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md md:hidden">
          <Container>
            <ul className="space-y-1 py-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={resolveHref(item.href)}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-accent-light text-accent"
                        : "text-text-secondary hover:bg-gray-50 dark:hover:bg-neutral-800 hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
