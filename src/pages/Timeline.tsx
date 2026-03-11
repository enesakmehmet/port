import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  Award
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Fullstack Developer",
    company: "OnlyJS Akademi",
    description: "Modern web uygulamaları geliştirme",
    fullDescription: "OnlyJS Akademi'de modern web uygulamaları geliştirdim. React ve TypeScript ile büyük ölçekli projeler yönettim.",
    date: "2024-08",
    location: "Uzaktan",
    icon: Code,
    color: "#8B5CF6",
    skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    achievements: ["5+ proje tamamlandı"],
    current: true,
  },
  {
    id: 2,
    title: "Çağrı Merkezi Asistanı",
    company: "Sağlık Bakanlığı",
    description: "Hasta randevu sistemi desteği",
    fullDescription: "Müşteri taleplerini analiz ederek hizmet süreçlerinin iyileştirilmesine katkıda bulundum.",
    date: "2020-2024",
    location: "Türkiye",
    icon: Phone,
    color: "#10B981",
    skills: ["Müşteri İlişkileri", "Problem Çözme"],
    achievements: ["Binlerce hastaya hizmet"],
  },
  {
    id: 3,
    title: "Müşteri Temsilcisi",
    company: "Akbank",
    description: "Bankacılık müşteri hizmetleri",
    fullDescription: "Akbank çağrı merkezinde müşteri hizmetleri görevlisi olarak çalıştım.",
    date: "2019-2020",
    location: "İstanbul",
    icon: Briefcase,
    color: "#F59E0B",
    skills: ["Bankacılık", "İletişim"],
    achievements: ["Müşteri memnuniyeti ödülü"],
  },
  {
    id: 4,
    title: "İşletme Yönetimi",
    company: "Anadolu Üniversitesi",
    description: "Lisans mezuniyeti",
    fullDescription: "Eskişehir Anadolu Üniversitesi İşletme Yönetimi bölümünden mezun oldum.",
    date: "2014-2018",
    location: "Eskişehir",
    icon: GraduationCap,
    color: "#3B82F6",
    skills: ["İşletme", "Yönetim"],
    achievements: ["Lisans derecesi"],
  },
];

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <div className="w-full py-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          📍 Kariyer Yolculuğum
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Profesyonel gelişimim ve deneyimlerim
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto mb-12 px-4"
      >
        <div className="glass-card">
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold text-blue-500">4</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Pozisyon</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold text-purple-500">6+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Yıl</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold text-pink-500">10+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Yetenek</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="space-y-6">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (exp.id - 1) }}
                className="flex gap-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0 pt-1">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative"
                    style={{ backgroundColor: exp.color }}
                  >
                    <Icon size={20} className="text-white" />
                    {exp.current && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div 
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    whileHover={{ y: -2 }}
                    className="glass-card p-5 cursor-pointer hover:shadow-xl transition-all"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                          {exp.title}
                        </h3>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {exp.company}
                        </div>
                      </div>
                      <div 
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown size={20} className="text-slate-400" />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {exp.description}
                    </p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-sm text-slate-600 dark:text-slate-400"
                            >
                              {exp.fullDescription}
                            </motion.p>

                            <div>
                              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Yetenekler
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <motion.span 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-3 py-1 text-xs font-medium rounded-full text-white cursor-default"
                                    style={{ backgroundColor: exp.color }}
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Başarılar
                              </h4>
                              <div className="space-y-2">
                                {exp.achievements.map((ach, i) => (
                                  <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                  >
                                    <Award size={14} style={{ color: exp.color }} />
                                    <span>{ach}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
