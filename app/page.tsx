"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Container for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const slowFadeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeOut" } },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.0, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans px-6 sm:px-8 md:px-12">
      {/* Animated radial gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(221,173,17,0.05) 0%, #121212 100%)",
        }}
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Main content */}
      <motion.main
        className="relative flex flex-col items-center justify-center space-y-8 md:space-y-12 z-10 w-full max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={slowFadeVariants}>
          <img src="/logo.png" alt="EPC Hub Logo" width={125} height={125} />
        </motion.div>

        {/* Logo Title */}
        <motion.div variants={fadeVariants}>
          <img src="/logo-title.png" alt="EPC Hub Text Logo" width={400} height={100} />
        </motion.div>

        {/* Navigation */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6 sm:gap-10 text-lg md:text-xl font-bold text-[#DDAD11]"
          variants={fadeVariants}
        >
          {[
            { href: "/about", label: "About" },
            { href: "/books", label: "Books" },
            { href: "/coaching", label: "Coaching" },
            { href: "/contact", label: "Contact" },
          ].map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveIndex(i)} // tap/click glow for tablet + mobile
                className={`
                  relative px-2 transition-all duration-300
                  before:absolute before:inset-0 before:rounded-full
                  before:bg-[#DDAD11] before:blur-xl
                  before:transition-opacity before:duration-300
                  
                  ${activeIndex === i ? "before:opacity-60" : "before:opacity-0"}

                  lg:hover:before:opacity-30  /* desktop hover */
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.main>
    </div>
  );
}
