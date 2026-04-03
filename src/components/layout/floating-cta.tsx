"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Hide on the booking page itself
  const isBookingPage = pathname === "/book";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isBookingPage) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-4 right-4 z-40 sm:hidden"
        >
          <Link
            href="/book"
            className="flex items-center justify-center w-full px-6 py-3.5 bg-gold text-navy font-semibold text-base rounded-full shadow-xl shadow-gold/20 hover:bg-gold-light transition-all duration-300"
          >
            Book Trisha
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
