import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: number;
  title: string;
  platform: string;
  imageUrl?: string;
  link?: string;
  description?: string; // 🆕 Açıklama alanı
}

export default function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/certificates`)
      .then((res) => setCertificates(res.data))
      .catch((err) => console.error("Sertifikalar alınamadı:", err));
  }, []);

  return (
    <main className="container mx-auto px-6 py-12 mt-16">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10 drop-shadow-md">
        🎓 Sertifikalarım
      </h2>

      {certificates.length === 0 ? (
        <p className="text-center text-gray-400">Henüz sertifika eklenmedi.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl shadow-lg cursor-pointer overflow-hidden"
              onClick={() => setSelected(cert)}
            >
              {cert.imageUrl && (
                <img
                  src={`${import.meta.env.VITE_API_URL.replace("/api", "")}${cert.imageUrl}`}
                  alt={cert.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{cert.platform}</p>

                {/* 🆕 Kartta kısa açıklama (önizleme) */}
                {cert.description && (
                  <p
                    className="text-gray-400 text-sm mb-3 line-clamp-3"
                    title={cert.description}
                  >
                    {cert.description.length > 100
                      ? cert.description.slice(0, 100) + "..."
                      : cert.description}
                  </p>
                )}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🔗 Doğrulama Linki
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* 🧩 Sertifika Detay Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-[#0f172a] rounded-2xl p-6 max-w-4xl w-[90%] text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Kapatma butonu */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              {selected.imageUrl && (
                <img
                  src={`${import.meta.env.VITE_API_URL.replace("/api", "")}${selected.imageUrl}`}
                  alt={selected.title}
                  className="w-full h-[420px] object-contain rounded-lg mb-5"
                />
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {selected.title}
              </h3>
              <p className="text-gray-400 mb-3">{selected.platform}</p>

              {/* 🆕 Açıklama detaylı gösterim */}
              {selected.description && (
                <p className="text-gray-300 mb-5 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                  {selected.description}
                </p>
              )}

              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 font-medium hover:underline"
                >
                  🔗 Sertifikayı Görüntüle
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
