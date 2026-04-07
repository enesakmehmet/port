import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Code2, Hash, Smartphone } from "lucide-react";
import { SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiNodedotjs, SiPostgresql, SiExpo, SiPrisma, SiExpress } from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  mainLang: string;
  imageUrl: string;
  topics: string[];
  techs: string[];
  liveUrl: string;
  repoUrl: string;
  playStoreUrl?: string;
  createdAt: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 0,
      title: "AltınPusula - Finans & Portföy Yönetimi",
      description:
        "Kişisel geliştirdiğim, React Native ve Node.js tabanlı full-stack mobil finans ve portföy yönetim uygulamasıdır. İçerisinde canlı altın, döviz ve gümüş fiyat takibi; kullanıcıların alım-satım kayıtlarını tutabildiği kâr/zarar analizli portföy yönetimi ve kişiselleştirilebilir fiyat alarm sistemleri barındırır. Veri bütünlüğü PostgreSQL ve Prisma kullanılarak kurgulanmış, eş zamanlı fiyat güncellemeleri için WebSocket mimarisi entegre edilmiştir. Google AdMob reklam desteği, Expo push bildirim sistemi ve Node-cron tabanlı otomatik günlük piyasa özetleri ile ticari bir ürün niteliği taşır. React (Vite) tabanlı kapsamlı admin paneli aracılığıyla API kaynak yönetimi, anlık trafik takibi, sistem sağlık analizleri ve bildirim zamanlamaları merkezi olarak kontrol edilebilmektedir.",
      mainLang: "TypeScript",
      imageUrl: "/altinpusula.png",
      topics: ["mobile", "react-native", "full-stack", "finance", "ios", "android", "nodejs", "postgresql", "websocket"],
      techs: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js", "WebSocket"],
      liveUrl: "https://apps.apple.com/us/app/altın-pusula/id6759008199",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.altinpusula.app&hl=tr",
      repoUrl: "",
      createdAt: "2026-04-15",
    },
    {
      id: 1,
      title: "FalBaz - AI Destekli Fal Uygulaması",
      description:
        "Kişisel geliştirdiğim, React Native ve Node.js tabanlı full-stack mobil fal uygulamasıdır. İçerisinde kahve falı, el falı ve tarot okuma türleri; Groq, Gemini ve Deepseek entegrasyonuyla yapay zeka destekli yorum üretimi ve günlük ücretsiz kota sistemi barındırır. PostgreSQL ve Prisma kullanılarak sağlam bir veri mimarisi üzerine inşa edilmiştir. Google ile giriş, AdMob reklam entegrasyonu, Expo push bildirim sistemi ve Telegram bot destekli admin bildirimleri ile ticari bir ürün niteliği taşır. React (Vite) tabanlı admin paneli aracılığıyla kullanıcı yönetimi, fal havuzu düzenleme ve yapay zeka ayarları merkezi olarak kontrol edilebilmektedir.",
      mainLang: "TypeScript",
      imageUrl: "/falbaz.png",
      topics: ["mobile", "react-native", "full-stack", "ai", "ios", "android", "nodejs", "postgresql"],
      techs: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js", "AI"],
      liveUrl: "",
      playStoreUrl: "",
      repoUrl: "",
      createdAt: "2026-04-01",
    },
    {
      id: 2,
      title: "Ehliyet Al 2026 - Mobil Uygulama",
      description:
        "Sürücü adayları için geliştirdiğim, React Native ve Node.js tabanlı full-stack sınav hazırlık uygulamasıdır. İçerisinde deneme sınavları, konu anlatımları, kişiselleştirilmiş istatistik takibi ve günlük hedefler barındırır. PostgreSQL ve Prisma kullanılarak sağlam bir veri mimarisi üzerine inşa edilmiştir. AdMob reklam entegrasyonu ve Telegram bot destekli bildirim sistemi ile ticari bir ürün niteliği taşır.",
      mainLang: "TypeScript",
      imageUrl: "/ehliyet-al-2026.png",
      topics: ["mobile", "react-native", "full-stack", "ios", "android", "nodejs", "postgresql", "education"],
      techs: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js"],
      liveUrl: "https://apps.apple.com/us/app/ehliyet-al-2026/id6757499824",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.enesakmehmet.ehliyetal2026",
      repoUrl: "",
      createdAt: "2026-01-01",
    },
    {
      id: 3,
      title: "Donanım Kıyasla - Mobil Uygulama & Yönetim Paneli",
      description:
        "iOS ve Android için full-stack mobil uygulama. CPU/GPU karşılaştırma, darboğaz analizi, PC Builder ve sistem tavsiyesi özellikleri. React Native (Expo) ile mobil uygulama, Node.js/Express backend ve React.js admin paneli. PostgreSQL veritabanı, push bildirim sistemi ve AdMob reklam entegrasyonu.",
      mainLang: "TypeScript",
      imageUrl: "/donanim-kiyasla.png",
      topics: ["mobile", "react-native", "full-stack", "ios", "android", "nodejs", "postgresql"],
      techs: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Expo", "Prisma", "Express.js"],
      liveUrl: "https://apps.apple.com/us/app/donanım-kıyasla/id6756779775",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.enes.donanimkiyasla",
      repoUrl: "",
      createdAt: "2024-11-01",
    },
    {
      id: 4,
      title: "CryptoTrade Exchange",
      description:
        "Modern kripto para alım satım platformu. Gerçek zamanlı fiyat takibi ve güvenli işlem özellikleri. React, TypeScript ve Tailwind CSS ile optimal performans için geliştirildi.",
      mainLang: "TypeScript",
      imageUrl: "https://i.imgur.com/DAMfBJY.png",
      topics: ["react", "typescript", "tailwind", "crypto"],
      techs: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "",
      repoUrl: "https://github.com/enesakmehmet/Cyrpto",
      createdAt: "2024-01-15",
    },
    {
      id: 4,
      title: "Game Key Store",
      description:
        "Modern oyun key pazaryeri platformu. Dijital oyun keylerini güvenli işlemlerle alıp satın. HTML, CSS ve JavaScript ile hızlı ve responsive kullanıcı deneyimi için geliştirildi.",
      mainLang: "JavaScript",
      imageUrl: "https://i.imgur.com/UdSpZmQ.png",
      topics: ["game", "marketplace", "ecommerce", "keys"],
      techs: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "",
      repoUrl: "https://github.com/enesakmehmet/game-web-v3",
      createdAt: "2024-02-20",
    },
    {
      id: 5,
      title: "DoomGame Web",
      description:
        "Klasik Doom oyununun web versiyonu. Modern web teknolojileri ile nostaljik oyun deneyimi için yeniden oluşturuldu.",
      mainLang: "JavaScript",
      imageUrl: "https://i.imgur.com/Gs0vadm.png",
      topics: ["game", "web", "doom", "retro"],
      techs: ["JavaScript", "HTML5", "Canvas"],
      liveUrl: "https://doom-web.vercel.app",
      repoUrl: "https://github.com/enesakmehmet/Doom-web",
      createdAt: "2024-03-10",
    },
    {
      id: 6,
      title: "Movie Web",
      description:
        "Kapsamlı film veritabanı platformu. Detaylı bilgiler, kullanıcı yorumları, puanlar ve fragmanlar. Binlerce filmi gelişmiş arama ve filtreleme seçenekleriyle keşfedin. HTML, CSS ve JavaScript ile geliştirildi.",
      mainLang: "JavaScript",
      imageUrl: "https://i.imgur.com/wRG3Suf.png",
      topics: ["movies", "database", "reviews", "trailers"],
      techs: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "",
      repoUrl: "https://github.com/enesakmehmet/movie-app",
      createdAt: "2024-04-15",
    },
    {
      id: 7,
      title: "Otel Web",
      description:
        "Modern otel rezervasyon platformu. Oda kiralama, müsaitlik kontrolü ve online rezervasyon özellikleri. Kullanıcı dostu arayüz ile kolay rezervasyon deneyimi. HTML, CSS ve JavaScript ile geliştirildi.",
      mainLang: "JavaScript",
      imageUrl: "https://i.imgur.com/2LKWnSO.png",
      topics: ["hotel", "booking", "reservation", "rooms"],
      techs: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "",
      repoUrl: "https://github.com/enesakmehmet/otel-web-v3",
      createdAt: "2024-05-20",
    },
    {
      id: 8,
      title: "Corporate Website",
      description:
        "Professional corporate presentation website with modern design. Showcasing company services, portfolio and contact information. Built with Next.js for optimal performance and SEO. Server-side rendering for fast page loads.",
      mainLang: "TypeScript",
      imageUrl: "https://i.imgur.com/6KBbBP0.png",
      topics: ["nextjs", "corporate", "business", "seo"],
      techs: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "",
      repoUrl: "https://github.com/enesakmehmet/sirket-tanitim",
      createdAt: "2024-06-10",
    },
    {
      id: 9,
      title: "Happy Pets",
      description:
        "Veteriner kliniği web sitesi. Randevu sistemi, hizmet tanıtımı ve evcil hayvan bakım bilgileri. Kullanıcı dostu arayüz ile kolay rezervasyon deneyimi. HTML, CSS ve JavaScript ile geliştirildi.",
      mainLang: "JavaScript",
      imageUrl: "https://i.imgur.com/xU1R48d.png",
      topics: ["veterinary", "pets", "clinic", "appointment"],
      techs: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "",
      repoUrl: "https://github.com/enesakmehmet/Pad-shop-Web-React",
      createdAt: "2024-07-15",
    },
    {
      id: 10,
      title: "Weather Tracker",
      description:
        "Şehir bazlı hava durumu takip sistemi. Anlık hava durumu bilgileri, 5 günlük tahmin ve detaylı meteoroloji verileri. API entegrasyonu ile gerçek zamanlı veri çekimi. HTML, CSS ve JavaScript ile geliştirildi.",
      mainLang: "JavaScript",
      imageUrl: "https://i.imgur.com/W6TBNcA.png",
      topics: ["weather", "api", "forecast", "city"],
      techs: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "",
      repoUrl: "https://github.com/enesakmehmet/weather-app-react",
      createdAt: "2024-08-20",
    },
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react": return <SiReact className="text-[#61DAFB]" />;
      case "react native": return <SiReact className="text-[#61DAFB]" />;
      case "typescript": return <SiTypescript className="text-[#3178C6]" />;
      case "javascript": return <SiJavascript className="text-[#F7DF1E]" />;
      case "tailwind css": return <SiTailwindcss className="text-[#06B6D4]" />;
      case "html5": return <SiHtml5 className="text-[#E34F26]" />;
      case "css3": return <SiCss3 className="text-[#1572B6]" />;
      case "next.js": return <SiNextdotjs className="text-black dark:text-white" />;
      case "node.js": return <SiNodedotjs className="text-[#339933]" />;
      case "postgresql": return <SiPostgresql className="text-[#4169E1]" />;
      case "expo": return <SiExpo className="text-black dark:text-white" />;
      case "prisma": return <SiPrisma className="text-[#2D3748] dark:text-white" />;
      case "express.js": return <SiExpress className="text-black dark:text-white" />;
      case "ai": return <span className="text-purple-500">🤖</span>;
      case "websocket": return <span className="text-green-500">🔌</span>;
      default: return <Code2 size={16} />;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          💼 Projelerim
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Geliştirdiğim modern web uygulamaları ve açık kaynak projeler.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-12">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group flex flex-col h-full hover:border-blue-500/30 dark:hover:border-blue-400/30"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-xl mb-5 aspect-video">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                style={
                  p.id === 0 ? { objectPosition: 'center 50%' } : 
                  p.id === 1 ? { objectPosition: 'center 60%' } : 
                  p.id === 2 ? { objectPosition: 'center 45%' } : 
                  {}
                }
              />
              <div className="absolute top-3 right-3 z-20">
                <span className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md text-white rounded-full border border-white/10">
                  {p.mainLang}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                  <Calendar size={14} className="mr-1" />
                  {new Date(p.createdAt).toLocaleDateString("tr-TR")}
                </div>
              </div>

              <div className="relative group/desc">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-4 flex-grow">
                  {p.description}
                </p>
                {/* Hover'da tam açıklama */}
                <div className="absolute left-0 right-0 bottom-full mb-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover/desc:opacity-100 group-hover/desc:visible transition-all duration-300 z-50 max-w-md">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.techs.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300">
                      {getTechIcon(tech)}
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.topics.map((topic, i) => (
                    <span key={i} className="flex items-center text-xs text-blue-600 dark:text-blue-400">
                      <Hash size={12} className="mr-0.5" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-500/20"
                  >
                    {p.liveUrl.includes('apps.apple.com') ? <Smartphone size={16} /> : <ExternalLink size={16} />}
                    {p.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Canlı Demo'}
                  </a>
                )}
                {p.playStoreUrl && (
                  <a
                    href={p.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors shadow-lg shadow-green-500/20"
                  >
                    <Smartphone size={16} />
                    Google Play
                  </a>
                )}
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${p.liveUrl || p.playStoreUrl
                      ? "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                      : "bg-slate-800 hover:bg-slate-900 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 w-full"
                      }`}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center mt-20">
          <p className="text-slate-500 dark:text-slate-400">Henüz proje eklenmemiş.</p>
        </div>
      )}
    </div>
  );
}
