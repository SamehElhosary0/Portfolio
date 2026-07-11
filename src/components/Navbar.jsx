function Navbar() {
  return (
    <nav className="w-full py-6 px-8 flex justify-end items-center">

      <div className="flex gap-8 text-gray-300">

        <a href="#about" className="hover:text-white transition">
          About
        </a>

        <a href="#skills" className="hover:text-white transition">
          Skills
        </a>

        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>

      </div>

    </nav>
  )
}

export default Navbar