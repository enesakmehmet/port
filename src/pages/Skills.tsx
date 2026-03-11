import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiGithub,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiFigma,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiNestjs,
  SiReactos,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaCode, FaWpforms } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";

// Custom AI Editor Icons
const CursorIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.78-7-4.42-7-8V8.3l7-3.11 7 3.11V12c0 3.58-3.13 7.22-7 8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const WindsurfIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const KiroIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 6l-6 6h4v6h4v-6h4z"/>
  </svg>
);

const OpenCodeIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);

const ZCodeIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5 3h14l-7 9 7 9H5l7-9z"/>
  </svg>
);

const AntigravityIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l5.5 3.07v6.5L12 17.82l-5.5-3.07v-6.5L12 4.18z"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

// Database Tool Icons
const PgAdminIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
  </svg>
);

const DBeaverIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
  </svg>
);

interface Skill {
  id: string;
  name: string;
  icon: IconType;
  color: string;
  unlocked: boolean;
}

interface SkillCategory {
  id: string;
  name: string;
  emoji: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai-editors",
    name: "AI Destekli Editörler",
    emoji: "🤖",
    color: "#A855F7",
    skills: [
      { id: "cursor", name: "Cursor", icon: CursorIcon, color: "#000000", unlocked: true },
      { id: "windsurf", name: "Windsurf", icon: WindsurfIcon, color: "#0EA5E9", unlocked: true },
      { id: "kiro", name: "Kiro", icon: KiroIcon, color: "#8B5CF6", unlocked: true },
      { id: "opencode", name: "OpenCode", icon: OpenCodeIcon, color: "#10B981", unlocked: true },
      { id: "zcode", name: "Z Code", icon: ZCodeIcon, color: "#F59E0B", unlocked: true },
      { id: "antigravity", name: "Antigravity", icon: AntigravityIcon, color: "#EC4899", unlocked: true },
    ],
  },
  {
    id: "database",
    name: "Veritabanı Araçları",
    emoji: "🗄️",
    color: "#06B6D4",
    skills: [
      { id: "postgresql", name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", unlocked: true },
      { id: "mongodb", name: "MongoDB", icon: SiMongodb, color: "#47A248", unlocked: true },
      { id: "pgadmin", name: "pgAdmin 4", icon: PgAdminIcon, color: "#336791", unlocked: true },
      { id: "mongocompass", name: "MongoDB Compass", icon: SiMongodb, color: "#13AA52", unlocked: true },
      { id: "dbeaver", name: "DBeaver", icon: DBeaverIcon, color: "#382923", unlocked: true },
    ],
  },
  {
    id: "tools",
    name: "Araçlar",
    emoji: "🛠️",
    color: "#3B82F6",
    skills: [
      { id: "vscode", name: "VS Code", icon: VscCode, color: "#007ACC", unlocked: true },
      { id: "github", name: "GitHub", icon: SiGithub, color: "#6e5494", unlocked: true },
      { id: "postman", name: "Postman", icon: SiPostman, color: "#FF6C37", unlocked: true },
      { id: "figma", name: "Figma", icon: SiFigma, color: "#F24E1E", unlocked: true },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    emoji: "🎨",
    color: "#8B5CF6",
    skills: [
      { id: "html", name: "HTML", icon: SiHtml5, color: "#E34F26", unlocked: true },
      { id: "css", name: "CSS", icon: SiCss3, color: "#1572B6", unlocked: true },
      { id: "sass", name: "Sass", icon: SiSass, color: "#CC6699", unlocked: true },
      { id: "bootstrap", name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", unlocked: true },
    ],
  },
  {
    id: "programming",
    name: "Programlama",
    emoji: "💻",
    color: "#F59E0B",
    skills: [
      { id: "javascript", name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", unlocked: true },
      { id: "typescript", name: "TypeScript", icon: SiTypescript, color: "#3178C6", unlocked: true },
      { id: "react", name: "React", icon: SiReact, color: "#61DAFB", unlocked: true },
      { id: "reactnative", name: "React Native", icon: SiReactos, color: "#61DAFB", unlocked: true },
      { id: "zustand", name: "Zustand", icon: FaCode, color: "#764ABC", unlocked: true },
      { id: "hookform", name: "Hook Form", icon: FaWpforms, color: "#EC5990", unlocked: true },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    emoji: "⚙️",
    color: "#10B981",
    skills: [
      { id: "nodejs", name: "Node.js", icon: SiNodedotjs, color: "#339933", unlocked: true },
      { id: "express", name: "Express", icon: SiExpress, color: "#68A063", unlocked: true },
      { id: "nestjs", name: "NestJS", icon: SiNestjs, color: "#E0234E", unlocked: true },
      { id: "prisma", name: "Prisma", icon: SiPrisma, color: "#5A67D8", unlocked: true },
    ],
  },
];


// Skill Node bileşeni - Mobil uyumlu
function SkillNode({ skill, index }: { skill: Skill; index: number; categoryColor: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full aspect-square rounded-xl cursor-pointer flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 bg-white dark:bg-slate-800 border-2 transition-all duration-300 shadow-md"
        style={{ 
          borderColor: isHovered ? skill.color : '#e2e8f0',
          boxShadow: isHovered ? `0 0 20px ${skill.color}40` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Glow efekti */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-xl"
            style={{ background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)` }}
          />
        )}

        <Icon 
          className="relative z-10 transition-transform duration-300 w-6 h-6 sm:w-8 sm:h-8"
          style={{ color: skill.color }}
        />
        <span className="text-[9px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400 relative z-10 text-center leading-tight">
          {skill.name}
        </span>

        {/* Unlocked badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.2 }}
          className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center"
        >
          <span className="text-white text-[8px] sm:text-[10px]">✓</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


// Kategori Branch bileşeni - Mobil uyumlu
function SkillBranch({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card"
    >
      {/* Kategori başlığı */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
          style={{ backgroundColor: `${category.color}20`, border: `2px solid ${category.color}` }}
        >
          {category.emoji}
        </motion.div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-slate-100">{category.name}</h3>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {category.skills.length} yetenek
          </div>
        </div>
      </div>

      {/* Skill düğümleri - Grid layout */}
      <div className={`grid gap-3 sm:gap-4 ${
        category.id === "ai-editors" 
          ? "grid-cols-3 sm:grid-cols-6" 
          : category.id === "database"
          ? "grid-cols-3 sm:grid-cols-5"
          : "grid-cols-2 sm:grid-cols-4"
      }`}>
        {category.skills.map((skill, skillIndex) => (
          <SkillNode 
            key={skill.id} 
            skill={skill} 
            index={skillIndex}
            categoryColor={category.color}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          🌳 Yetenek Ağacı
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
          Geliştirme yolculuğumda edindiğim yetenekler
        </p>
      </motion.div>

      {/* Skill Tree - Grid layout */}
      <div className="max-w-5xl mx-auto space-y-6">
        {/* AI Editörler - Tam genişlik */}
        {skillCategories
          .filter((cat) => cat.id === "ai-editors")
          .map((category, index) => (
            <SkillBranch key={category.id} category={category} index={index} />
          ))}

        {/* Veritabanı Araçları - Tam genişlik */}
        {skillCategories
          .filter((cat) => cat.id === "database")
          .map((category, index) => (
            <SkillBranch key={category.id} category={category} index={index + 1} />
          ))}

        {/* Diğer kategoriler - 2 sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories
            .filter((cat) => cat.id !== "ai-editors" && cat.id !== "database")
            .map((category, index) => (
              <SkillBranch key={category.id} category={category} index={index + 2} />
            ))}
        </div>
      </div>

      {/* İstatistikler */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-12 max-w-4xl mx-auto"
      >
        <div className="glass-card">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-4xl font-bold text-blue-500"
              >
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Toplam Yetenek</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-4xl font-bold text-purple-500"
              >
                {skillCategories.length}
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Kategori</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-4xl font-bold text-green-500"
              >
                100%
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Tamamlandı</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-4xl font-bold text-yellow-500"
              >
                ∞
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Öğrenmeye Devam</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
