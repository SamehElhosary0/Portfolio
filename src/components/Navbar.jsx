import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const linkClass = `
    relative
    text-gray-300
    font-medium
    cursor-pointer
    transition-all
    duration-300
    hover:text-cyan-400
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  `;

  return (
    <nav className="w-full py-6 px-8 flex justify-between md:justify-start items-center fixed top-0 left-0 z-50 backdrop-blur-md bg-[#08122f]/40 border-b border-blue-500/10">

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={linkClass}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden text-cyan-400 z-50"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
            md:hidden
            absolute
            top-full
            left-0
            w-full
            bg-[#08122f]/95
            backdrop-blur-md
            border-b
            border-blue-500/10
            flex
            flex-col
            gap-6
            px-8
            py-6
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 font-medium hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
