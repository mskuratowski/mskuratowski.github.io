"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
          ? "border-b border-border bg-white/80"
          : "bg-white/0"
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
          <ul className="hidden items-center gap-1 rounded-full border border-border bg-white/60 px-1.5 py-1 shadow-sm md:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={resolveHref(item.href)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-accent text-white"
                      : "text-text-secondary hover:bg-gray-100 hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:bg-gray-100 hover:text-text-primary md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white/95 backdrop-blur-md md:hidden">
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
                        : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
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
