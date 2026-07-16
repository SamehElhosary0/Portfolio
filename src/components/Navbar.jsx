import { motion } from "framer-motion";

function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full py-6 px-8 flex justify-start items-center fixed top-0 left-0 z-50 backdrop-blur-md bg-[#08122f]/40 border-b border-blue-500/10">

      <div className="flex gap-8">

        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
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
            "
          >
            {link.name}
          </motion.a>
        ))}

      </div>

    </nav>
  );
}

export default Navbar;