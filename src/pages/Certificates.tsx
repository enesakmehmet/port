import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Award } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  platform: string;
  imageUrl?: string;
  link?: string;
  description?: string;
}

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "FullStack Geliştirici Programı",
      platform: "OnlyJS Akademi",
      imageUrl: "https://i.imgur.com/HVgNGLP.png",
      link: "https://drive.google.com/file/d/14hJSmR6TCygd7KWgn92mB0uVcJ1-ESDL/view",
      description: "2024 Ağustos - 2025 Temmuz\n11 aylık kapsamlı FullStack geliştirici programı.\n\n27 adet ödev, 15 adet proje ve 924 saat yayın (126 saat canlı yayın, 690 saat mentorluk yayını, 108 saat video) ile tamamlandı."
    },
    {
      id: 2,
      title: "Claude Code in Action",
      platform: "Anthropic",
      imageUrl: "https://image2url.com/r2/default/images/1772744376815-a39da363-ef86-421f-bb35-95e9c6aef85c.png",
      link: "https://verify.skilljar.com/c/or4ryzbo4abk",
      description: "2 Mart 2026 tarihinde Anthropic tarafından verilen Claude Code in Action sertifikası.\n\nYapay zeka destekli kod geliştirme, Claude AI ile programlama ve modern AI araçlarının yazılım geliştirme süreçlerine entegrasyonu konularında yetkinlik kazanıldı.\n\nSertifika No: or4ryzbo4abk"
    },
    {
      id: 3,
      title: "Profesyonel Gelişim Sertifikası",
      platform: "Enes Akmehmet",
      imageUrl: "/Enes Akmehmet.jpg",
      link: "#",
      description: "Yazılım geliştirme ve teknoloji alanında edinilen yetkinlikleri belgeleyen profesyonel sertifika.\n\nModern web teknolojileri, full-stack geliştirme ve yazılım mühendisliği prensipleri konularında kapsamlı bilgi ve deneyim kazanıldı."
    },
    {
      id: 4,
      title: "İhracat & Dış Ticaret Uzmanlığı",
      platform: "T.C. Sanayi ve Teknoloji Bakanlığı - DOKA",
      imageUrl: "https://i.imgur.com/OWtUjJl.jpeg",
      link: "#",
      description: "T.C. Sanayi ve Teknoloji Bakanlığı ile DOKA işbirliğinde gerçekleştirilen eğitim programını tamamlayarak, ihracat stratejisi oluşturma ve dış ticaret departmanı yönetimi konularında sertifika sahibi oldum.\n\nRize ekonomisinin küresel pazarlara entegrasyonuna katkı sağlamak üzere gerekli bilgi ve becerileri edindim."
    },
    {
      id: 5,
      title: "Yazılım & Teknoloji Eğitim Programı",
      platform: "Coderspace - Yazılım & Teknoloji Okulu",
      imageUrl: "https://i.imgur.com/PCzMh69.jpeg",
      link: "#",
      description: "Akbank, Burgan Bank, DefineX, Doğa Koleji, Garanti BBVA, Intertech, İyzico, Softtech, Türkiye Technology ve Türkiye İş Bankası'nın desteklediği 4 haftalık kapsamlı yazılım eğitim programını başarıyla tamamladım.\n\nModern teknoloji yığınları ve endüstri standartlarında pratik deneyim kazandım."
    },
    {
      id: 6,
      title: "Yapay Zeka ve Dijital Dönüşüm",
      platform: "Kodluyoruz & Microsoft",
      imageUrl: "https://i.imgur.com/9Iy7QP8.jpeg",
      link: "#",
      description: "Kodluyoruz ve Microsoft iş birliğiyle 24 Şubat 2025 tarihinde düzenlenen \"Yapay Zeka ile Dönüştürelim\" programına katılarak, 5 saatlik yoğun çevrim içi eğitimde yapay zeka teknolojileri ve dijital dönüşüm süreçleri hakkında kapsamlı bilgi edindim."
    },
    {
      id: 7,
      title: "Cloud & DevOps Day 2025",
      platform: "Coderspace",
      imageUrl: "https://i.imgur.com/btGICgU.jpeg",
      link: "#",
      description: "Modern bulut mimarileri, DevOps metodolojileri ve sürekli entegrasyon/dağıtım (CI/CD) süreçleri üzerine düzenlenen tam gün etkinliğe katılarak, endüstri uzmanlarından cloud ve DevOps teknolojilerinin güncel uygulamaları hakkında bilgi edindim (Şubat 2025)."
    },
    {
      id: 8,
      title: "React ile Frontend Geliştirme",
      platform: "Turkcell Akademi - Geleceği Yazanlar",
      imageUrl: "https://i.imgur.com/HxP1ANV.jpeg",
      link: "#",
      description: "11 Şubat 2025 tarihinde Turkcell Akademi tarafından düzenlenen \"Geleceği Yazanlar\" projesi kapsamında React 401 eğitim programını başarıyla tamamlayarak, modern frontend geliştirme ve React kütüphanesi konularında ileri seviye yetkinlik kazandım."
    },
    {
      id: 9,
      title: "React ile Web Programcılığı",
      platform: "BTK Akademi",
      imageUrl: "https://i.imgur.com/xByi3rD.jpeg",
      link: "#",
      description: "Bilgi Teknolojileri ve İletişim Kurumu'nun resmi eğitim platformu BTK Akademi aracılığıyla React ile Web Programcılığı eğitimini tamamladım. React.js kütüphanesi, component yapısı, JSX syntax ve modern frontend geliştirme teknikleri konularında bilgi sahibi oldum (Şubat 2025)."
    },
    {
      id: 10,
      title: "Herkes için Yapay Zeka Eğitimi",
      platform: "Coderspace",
      imageUrl: "https://i.imgur.com/eYKYdVt.jpeg",
      link: "#",
      description: "OpenAI, Anthropic, Google ve diğer önde gelen teknoloji şirketlerinin AI araçlarını kapsayan 3 haftalık yoğun eğitim programını tamamladım. Yapay zeka temelleri, prompt engineering, AI destekli geliştirme ve modern AI araçlarının iş süreçlerine entegrasyonu konularında yetkinlik kazandım (Nisan 2025)."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          🎓 Sertifikalarım
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Kazandığım yetkinlikler ve başarılar.
        </p>
      </motion.div>

      {certificates.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400">
          Henüz sertifika eklenmedi.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card cursor-pointer group overflow-hidden hover:border-blue-500/30 dark:hover:border-blue-400/30"
              onClick={() => setSelected(cert)}
            >
              <div className="relative h-48 overflow-hidden rounded-xl mb-4 bg-slate-100 dark:bg-slate-800">
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award size={48} className="text-slate-300 dark:text-slate-600" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  {cert.platform}
                </p>
                <p className="text-xs text-blue-500 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Detayları Görüntüle →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Sertifika Detay Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1001]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="fixed inset-4 sm:inset-8 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90%] md:max-w-4xl z-[1002] outline-none flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-card bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 shadow-2xl max-h-full md:max-h-[90vh] overflow-y-auto w-full">
                <button
                  onClick={() => setSelected(null)}
                  className="sticky top-0 float-right ml-auto m-4 p-2 rounded-full bg-white/95 dark:bg-slate-800/95 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors z-50 backdrop-blur-sm shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <X size={20} className="text-slate-500" />
                </button>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6">
                  <div className="w-full md:w-1/2">
                    {selected.imageUrl ? (
                      <img
                        src={selected.imageUrl}
                        alt={selected.title}
                        className="w-full h-auto rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                        <Award size={64} className="text-slate-300 dark:text-slate-600" />
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                      {selected.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                      {selected.platform}
                    </p>

                    {selected.description && (
                      <div className="prose dark:prose-invert max-w-none mb-4 sm:mb-6">
                        <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                          {selected.description}
                        </p>
                      </div>
                    )}

                    {selected.link && (
                      <a
                        href={selected.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-500/20 text-sm sm:text-base"
                      >
                        <ExternalLink size={16} />
                        Sertifikayı Görüntüle
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
