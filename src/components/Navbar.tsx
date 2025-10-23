import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Timeline", path: "/timeline" },
    { name: "Messages", path: "/messages" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[1000] border-b flex items-center justify-between px-6 sm:px-10 py-4 transition-colors duration-500 shadow-sm
        ${
          theme === "dark"
            ? "bg-[#0f172a] border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
    >
      {/* Sol Logo */}
      <NavLink to="/" className="text-lg font-bold text-blue-400">
        Enes Akmehmet
      </NavLink>

      {/* Desktop Menü */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Sağ taraf: Tema butonu + Menü butonu */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:scale-110 transition"
          aria-label="Tema Değiştir"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-blue-600" />
          )}
        </button>

        {/* Hamburger buton (mobil) */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menüyü Aç/Kapat"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 🔹 Mobil Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`absolute top-[64px] left-0 w-full md:hidden border-t shadow-lg
              ${
                theme === "dark"
                  ? "bg-[#0f172a] text-white border-gray-700"
                  : "bg-gray-50 text-gray-900 border-gray-200"
              }`}
          >
            <ul className="flex flex-col items-center py-5 space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors ${
                        isActive
                          ? "text-blue-400 font-semibold"
                          : "hover:text-blue-500"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
