"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black header sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center py-4 px-6 justify-between layout-width">
        
        {/* Logo */}
        <img
          src="/logo.png"
          alt="EPC Hub Logo"
          width={40}
          height={20}
          className="cursor-pointer"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg font-light">
          <a href="/about" className="hover:underline underline-offset-4">About</a>
          <a href="/books" className="hover:underline underline-offset-4">Books</a>
          <a href="/coaching" className="hover:underline underline-offset-4">Coaching</a>
          <a href="/contact" className="hover:underline underline-offset-4">Contact</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1 border"
          onClick={() => setOpen(true)}
        >
          <span className="w-7 h-0.5 bg-[#d4af37]"></span>
          <span className="w-7 h-0.5 bg-[#d4af37]"></span>
          <span className="w-7 h-0.5 bg-[#d4af37]"></span>
          <span className="w-7 h-0.5 bg-[#d4af37]"></span>
        </button>
      </div>

      {/* 🔥 Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex flex-col px-8 pt-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="ml-auto mb-10"
            >
              <span className="block w-8 h-0.5 bg-[#d4af37] rotate-45 translate-y-1"></span>
              <span className="block w-8 h-0.5 bg-[#d4af37] -rotate-45 -translate-y-1"></span>
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-8 text-3xl font-light">
              <a onClick={() => setOpen(false)} href="/about" className="hover:underline underline-offset-4">About</a>
              <a onClick={() => setOpen(false)} href="/books" className="hover:underline underline-offset-4">Books</a>
              <a onClick={() => setOpen(false)} href="/coaching" className="hover:underline underline-offset-4">Coaching</a>
              <a onClick={() => setOpen(false)} href="/contact" className="hover:underline underline-offset-4">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
