function Navbar() {
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="w-full py-6 px-8 flex justify-start items-center">
      <div className="flex gap-8 text-gray-300">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative hover:text-white transition-colors duration-300 group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar