"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(null);

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="relative bg-black">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-#757575 to-[#1f1f1f] pointer-events-none"></div>

        <div className="relative max-w-4xl w-full mx-auto flex items-center justify-between py-4 px-6 text-[#d4af37]">
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
  <nav className="hidden md:flex space-x-6 lg:space-x-10 text-sm sm:text-base md:text-lg font-bold relative z-10">
    <a href="/about" className="tracking-wide transition hover:drop-shadow-[0_0_12px_rgba(221,173,17,1.0)]">About</a>
    <a href="/books" className="tracking-wide transition hover:drop-shadow-[0_0_12px_rgba(221,173,17,1.0)]">Book</a>
    <a href="/coaching" className="tracking-wide transition hover:drop-shadow-[0_0_12px_rgba(221,173,17,1.0)]">Coaching</a>
    <a href="/contact" className="tracking-wide transition hover:drop-shadow-[0_0_12px_rgba(221,173,17,1.0)]">Contact</a>
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
          className={`md:hidden fixed inset-0 bg-black text-[#d4af37] text-2xl flex flex-col items-center justify-center space-y-8 font-bold transition-opacity duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="/about"
            onClick={() => {
              setActiveMobileIndex(0);
              setOpen(false);
            }}
            className={`
              relative px-2 transition-all duration-300
              before:absolute before:inset-0 before:rounded-full
              before:bg-[#DDAD11] before:blur-xl
              before:transition-opacity before:duration-300
              ${activeMobileIndex === 0 ? "before:opacity-60" : "before:opacity-0"}
            `}
          >
            About
          </a>
          <a
            href="/books"
            onClick={() => {
              setActiveMobileIndex(1);
              setOpen(false);
            }}
            className={`
              relative px-2 transition-all duration-300
              before:absolute before:inset-0 before:rounded-full
              before:bg-[#DDAD11] before:blur-xl
              before:transition-opacity before:duration-300
              ${activeMobileIndex === 1 ? "before:opacity-60" : "before:opacity-0"}
            `}
          >
            Book
          </a>

          <a
            href="/coaching"
            onClick={() => {
              setActiveMobileIndex(2);
              setOpen(false);
            }}
            className={`
              relative px-2 transition-all duration-300
              before:absolute before:inset-0 before:rounded-full
              before:bg-[#DDAD11] before:blur-xl
              before:transition-opacity before:duration-300
              ${activeMobileIndex === 2 ? "before:opacity-60" : "before:opacity-0"}
            `}
          >
            Coaching
          </a>

          <a
            href="/contact"
            onClick={() => {
              setActiveMobileIndex(3);
              setOpen(false);
            }}
            className={`
              relative px-2 transition-all duration-300
              before:absolute before:inset-0 before:rounded-full
              before:bg-[#DDAD11] before:blur-xl
              before:transition-opacity before:duration-300
              ${activeMobileIndex === 3 ? "before:opacity-60" : "before:opacity-0"}
            `}
          >
            Contact
          </a>

        </div>
      </div>
    </header>
  );
}
