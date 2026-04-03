"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-navy shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-heading text-xl font-bold text-ivory tracking-wide">
                  TRISHA
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-ivory/70 hover:text-ivory transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.children ? (
                        <>
                          <button
                            onClick={() =>
                              setExpandedItem(
                                expandedItem === link.label ? null : link.label
                              )
                            }
                            className={cn(
                              "flex items-center justify-between w-full px-3 py-3 text-lg font-medium text-ivory/80 hover:text-ivory transition-colors rounded-lg hover:bg-white/5",
                              link.children.some((c) => pathname === c.href) &&
                                "text-gold"
                            )}
                          >
                            {link.label}
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform duration-200",
                                expandedItem === link.label && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedItem === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 flex flex-col gap-1 pb-2">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={onClose}
                                      className={cn(
                                        "px-3 py-2.5 text-base text-ivory/60 hover:text-gold transition-colors rounded-lg hover:bg-white/5",
                                        pathname === child.href && "text-gold"
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className={cn(
                            "block px-3 py-3 text-lg font-medium text-ivory/80 hover:text-ivory transition-colors rounded-lg hover:bg-white/5",
                            pathname === link.href && "text-gold"
                          )}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Bottom CTA */}
              <div className="px-6 py-6 border-t border-white/10">
                <Link
                  href="/book"
                  onClick={onClose}
                  className="flex items-center justify-center w-full px-6 py-3.5 bg-gold text-navy font-semibold text-base rounded-full tracking-wide hover:bg-gold-light transition-all duration-300"
                >
                  Book Trisha
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
