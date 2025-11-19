"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-gold">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <img
          src="/logo.png"
          alt="EPC Hub Logo"
          width={60}
          height={60}
          className="cursor-pointer"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg font-light">
          <a href="/about" className="hover:underline underline-offset-4 text-[#d4af37]">
            About
          </a>
          <a href="/books" className="hover:underline underline-offset-4 text-[#d4af37]">
            Books
          </a>
          <a href="/coaching" className="hover:underline underline-offset-4 text-[#d4af37]">
            Coaching
          </a>
          <a href="/contact" className="hover:underline underline-offset-4 text-[#d4af37]">
            Contact
          </a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-[#d4af37]"></span>
          <span className="w-6 h-0.5 bg-[#d4af37]"></span>
          <span className="w-6 h-0.5 bg-[#d4af37]"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black px-6 pb-4"
          >
            <div className="flex flex-col space-y-4 text-lg">
              <a
                href="/about"
                className="text-[#d4af37] hover:underline underline-offset-4"
              >
                About
              </a>
              <a
                href="/books"
                className="text-[#d4af37] hover:underline underline-offset-4"
              >
                Books
              </a>
              <a
                href="/coaching"
                className="text-[#d4af37] hover:underline underline-offset-4"
              >
                Coaching
              </a>
              <a
                href="/contact"
                className="text-[#d4af37] hover:underline underline-offset-4"
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
