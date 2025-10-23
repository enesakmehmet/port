import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  // .env’de /api varsa:
  const API_ROOT = (import.meta.env.VITE_API_URL as string).replace(/\/$/, ""); // sondaki /’ı sil
  const PUBLIC_ROOT = API_ROOT.replace(/\/api$/, ""); // /api’yi kaldır => http://localhost:3001

  useEffect(() => {
    axios
      .get(`${API_ROOT}/skills`)
      .then((res) => setSkills(res.data))
      .catch((err) => console.error("Yetenekler alınamadı:", err))
      .finally(() => setLoading(false));
  }, [API_ROOT]);

  if (loading) {
    return (
      <main className="container mx-auto p-10 text-center text-gray-400">
        Yükleniyor...
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-12 mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-400 drop-shadow-md">
        💡 Yeteneklerim (Skills)
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
        }}
      >
        {skills.map((skill) => {
          // 👇 DEĞİŞİKLİK BURADA YAPILDI 👇
          const fullIconUrl = !skill.icon
            ? null
            : skill.icon.startsWith("http")
              ? skill.icon
              : skill.icon.startsWith("/")
                ? `${PUBLIC_ROOT}${skill.icon}`
                : `${PUBLIC_ROOT}/uploads/icons/${skill.icon.toLowerCase().replace(/si|fa/g, "")}.png`;

          return (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.07, boxShadow: "0 0 25px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              {fullIconUrl ? (
                <motion.img
                  src={fullIconUrl}
                  alt={skill.name}
                  className="w-14 h-14 object-contain mb-1 drop-shadow-[0_0_6px_#3b82f6]"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 text-white text-xl font-bold">
                  {skill.name[0]}
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 mt-1 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-400 to-indigo-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-xs text-gray-400">{skill.level}%</p>
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}