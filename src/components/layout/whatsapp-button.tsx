"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      className={className}
      fill="currentColor"
    >
      <path d="M87.184 14.2c-40.36 0-73.178 32.796-73.194 73.13a72.89 72.89 0 0 0 9.804 36.6L14 160.552l37.6-9.86a73.1 73.1 0 0 0 35.548 9.06h.032c40.344 0 73.178-32.8 73.194-73.138a72.72 72.72 0 0 0-21.42-51.74A72.72 72.72 0 0 0 87.184 14.2zm0 133.78h-.026a60.74 60.74 0 0 1-30.94-8.482l-2.22-1.318-23.014 6.036 6.144-22.438-1.446-2.3a60.57 60.57 0 0 1-9.286-32.352c.014-33.52 27.3-60.79 60.84-60.79a60.4 60.4 0 0 1 42.954 17.83 60.4 60.4 0 0 1 17.786 42.998c-.016 33.524-27.3 60.808-60.792 60.808zm33.368-45.54c-1.83-.916-10.826-5.34-12.504-5.952-1.678-.616-2.898-.916-4.12.916s-4.73 5.952-5.8 7.18c-1.066 1.222-2.134.916-3.964-.002s-7.726-2.848-14.712-9.076c-5.44-4.848-9.112-10.836-10.18-12.664-1.066-1.83-.114-2.822.802-3.734.822-.82 1.83-2.136 2.746-3.202.916-1.066 1.22-1.83 1.83-3.05.612-1.222.306-2.29-.152-3.208-.458-.916-4.12-9.928-5.646-13.592-1.486-3.568-2.998-3.082-4.12-3.14-1.066-.054-2.288-.066-3.508-.066s-3.202.458-4.88 2.29c-1.678 1.83-6.408 6.26-6.408 15.272s6.56 17.716 7.476 18.938c.916 1.222 12.916 19.716 31.296 27.654 4.372 1.888 7.782 3.014 10.442 3.86 4.388 1.394 8.384 1.198 11.54.726 3.52-.526 10.826-4.426 12.352-8.698 1.526-4.272 1.526-7.936 1.068-8.702-.458-.762-1.678-1.222-3.508-2.136z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hello Trisha, I'd like to inquire about booking you for an event."
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
