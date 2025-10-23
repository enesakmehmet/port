import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Timeline from "./pages/Timeline";
import Messages from "./pages/Messages";

export default function App() {
  // 🔹 Tema durumu (localStorage ile kalıcı)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // 🔹 Tema değiştikçe HTML class’ına uygula
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        theme === "dark"
          ? "bg-[#0b1120] text-white" // 🔹 Biraz daha açık arka plan (navbar fark edilsin)
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* 🔹 Sabit Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* 🔹 Sayfa içeriği */}
      <main
        className={`pt-24 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto transition-all duration-700 ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </main>
    </div>
  );
}
