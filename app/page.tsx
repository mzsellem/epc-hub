"use client"; // required in Next.js App Router

import { motion } from "framer-motion";

export default function Home() {
  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1.25, // each child delays by 0.2s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <motion.main
        className="flex min-h-screen w-full flex-col items-center justify-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <img src="/logo.png" alt="EPC Hub Logo" width={125} height={125} />
        </motion.div>

        {/* Logo Title */}
        <motion.div variants={itemVariants}>
          <img src="/logo-title.png" alt="EPC Hub Text Logo" width={400} height={100} />
        </motion.div>

        {/* Home Nav */}
        <motion.ul
          className="flex space-x-8 text-xl home-nav font-light"
          variants={itemVariants}
        >
          <li><a href="/about" className="hover:underline underline-offset-4 decoration-1">About</a></li>
          <li><a href="/books" className="hover:underline underline-offset-4 decoration-1">Books</a></li>
          <li><a href="/coaching" className="hover:underline underline-offset-4 decoration-1">Coaching</a></li>
          <li><a href="/contact" className="hover:underline underline-offset-4 decoration-1">Contact</a></li>
        </motion.ul>
      </motion.main>
    </div>
  );
}
