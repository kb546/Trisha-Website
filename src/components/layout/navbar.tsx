"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <span
                className={cn(
                  "font-heading text-2xl sm:text-3xl font-bold tracking-wide transition-colors duration-500",
                  scrolled ? "text-ivory" : "text-white"
                )}
              >
                TRISHA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md hover:bg-white/10",
                          scrolled ? "text-ivory/90 hover:text-ivory" : "text-white/90 hover:text-white",
                          link.children.some((c) => pathname === c.href) && "text-gold"
                        )}
                      >
                        {link.label}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      className="bg-navy border-navy-light min-w-[220px]"
                    >
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link
                            href={child.href}
                            className={cn(
                              "text-ivory/80 hover:text-gold focus:text-gold cursor-pointer",
                              pathname === child.href && "text-gold"
                            )}
                          >
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md hover:bg-white/10",
                      scrolled ? "text-ivory/90 hover:text-ivory" : "text-white/90 hover:text-white",
                      pathname === link.href && "text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Book CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gold text-navy font-semibold text-sm rounded-full tracking-wide hover:bg-gold-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Trisha
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 rounded-md transition-colors",
                  scrolled ? "text-ivory" : "text-white"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
