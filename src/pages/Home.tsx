import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, Star, Code, Briefcase, Layers } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs, SiReactos } from "react-icons/si";
import { Link } from "react-router-dom";

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number; color: string }[];
}

// Teknoloji Stack
const techStack = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "React Native", icon: SiReactos, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
];

const GITHUB_USERNAME = "enesakmehmet";

// Dil renkleri
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Vue: "#41b883",
  SCSS: "#c6538c",
  default: "#6e7681"
};

export default function Home() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Kullanıcı bilgilerini çek
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error("User fetch failed");
        const userData = await userRes.json();

        // Repoları çek
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        if (!reposRes.ok) throw new Error("Repos fetch failed");
        const reposData = await reposRes.json();

        // Toplam yıldız hesapla
        const totalStars = reposData.reduce((acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count, 0);

        // Dil istatistiklerini hesapla
        const langCount: Record<string, number> = {};
        reposData.forEach((repo: { language: string | null }) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });

        const totalLangs = Object.values(langCount).reduce((a, b) => a + b, 0);
        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangs) * 100),
            color: languageColors[name] || languageColors.default
          }));

        setGithubData({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          topLanguages
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Blobs - Mobil için küçültüldü */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse delay-1000" />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl px-4 sm:px-6 mt-6 sm:mt-10 mb-12 sm:mb-20"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight leading-none text-slate-900 dark:text-white">
            Enes Akmehmet
          </h1>
        </motion.div>

        {/* Animated Role */}
        <motion.div 
          className="h-14 sm:h-16 mb-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ReactTyped
            strings={[
              "Fullstack Developer",
              "React & TypeScript",
              "Mobile App Developer",
              "Backend Engineer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={2000}
            loop
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300"
          />
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Modern web ve mobil uygulamalar geliştiriyorum.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/projects"
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 text-center"
          >
            <span className="flex items-center justify-center gap-2">
              <Briefcase size={20} />
              Projelerimi İncele
            </span>
          </Link>
          
          <Link
            to="/about"
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold transition-all hover:scale-105 text-center"
          >
            <span className="flex items-center justify-center gap-2">
              <Code size={20} />
              Hakkımda
            </span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>


      {/* GitHub Kartları */}
      <section className="w-full max-w-6xl px-4 sm:px-6 pb-12 sm:pb-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-slate-500">
            GitHub verileri yüklenemedi. Lütfen daha sonra tekrar deneyin.
          </div>
        ) : githubData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {/* Genel İstatistikler Kartı */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <FaGithub className="text-blue-500" size={20} />
                GitHub İstatistikleri
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{githubData.publicRepos}</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                    <Briefcase size={12} /> Repo
                  </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-500">{githubData.totalStars}</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                    <Star size={12} /> Yıldız
                  </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-500">{githubData.followers}</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Takipçi</div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-500">{githubData.following}</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Takip</div>
                </div>
              </div>
            </motion.div>

            {/* En Çok Kullanılan Diller Kartı */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Code className="text-purple-500" size={20} />
                En Çok Kullanılan Diller
              </h3>
              <div className="space-y-3">
                {githubData.topLanguages.map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{lang.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Teknoloji Stack Kartı */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Layers className="text-green-500" size={20} />
                Teknoloji Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:shadow-lg transition-all cursor-pointer group/tech"
                    title={tech.name}
                  >
                    <tech.icon 
                      className="w-5 h-5 sm:w-6 sm:h-6 group-hover/tech:drop-shadow-lg transition-all"
                      style={{ color: tech.color }}
                    />
                    <span className="text-[8px] sm:text-[10px] mt-1 text-slate-500 dark:text-slate-400 truncate w-full text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
