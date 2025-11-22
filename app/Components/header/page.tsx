"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="relative bg-black">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-#757575 to-[#1f1f1f] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-6 text-[#d4af37] layout-width">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="EPC Hub Logo"
              width={40}
              height={60}
              className="cursor-pointer relative z-10"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10 text-sm sm:text-base md:text-lg font-light relative z-10">
            <a href="/about" className="hover:underline underline-offset-4">About</a>
            <a href="/books" className="hover:underline underline-offset-4">Books</a>
            <a href="/coaching" className="hover:underline underline-offset-4">Coaching</a>
            <a href="/contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute block w-7 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>

            <span
              className={`absolute block w-7 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>

        {/* FULL SCREEN MOBILE MENU */}
        <div
          className={`md:hidden fixed inset-0 bg-black text-[#d4af37] flex flex-col items-center justify-center space-y-8 text-xl font-light transition-opacity duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <a href="/about" onClick={() => setOpen(false)} className="hover:underline underline-offset-4">About</a>
          <a href="/books" onClick={() => setOpen(false)} className="hover:underline underline-offset-4">Books</a>
          <a href="/coaching" onClick={() => setOpen(false)} className="hover:underline underline-offset-4">Coaching</a>
          <a href="/contact" onClick={() => setOpen(false)} className="hover:underline underline-offset-4">Contact</a>
        </div>
      </div>
    </header>
  );
}
