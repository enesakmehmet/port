import { FaFilePdf, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

interface AboutData {
  name: string;
  bio: string;
  github: string;
  linkedin: string;
  instagram: string;
  cvUrl: string;
  avatarUrl?: string;
}

export default function About() {
  const about: AboutData = {
    name: "Enes Akmehmet",
    bio: "Merhaba, ben Enes Akmehmet. Fullstack Developer olarak modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiriyorum. Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.",
    github: "https://github.com/enesakmehmet",
    linkedin: "https://www.linkedin.com/in/enes-akmehmet-a061bb206",
    instagram: "https://www.instagram.com/enesakmehmt",
    cvUrl: "/Enes cv.pdf",
    avatarUrl: "https://i.imgur.com/rDrluXe.jpeg",
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card w-full max-w-3xl text-center relative overflow-hidden group"
      >
        {/* Background Gradient Effect */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 dark:opacity-40" />

        <div className="relative z-10 mt-12">
          {/* Profil resmi */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-40 h-40 mx-auto mb-6 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-white dark:bg-slate-900">
              {about.avatarUrl ? (
                <img
                  src={about.avatarUrl}
                  alt={about.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
                  No Image
                </div>
              )}
            </div>
          </motion.div>

          {/* İsim ve Bio */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
          >
            {about.name}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            {about.bio}
          </motion.p>

          {/* Sosyal Linkler */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { icon: FaGithub, href: about.github, label: "GitHub" },
              { icon: FaLinkedin, href: about.linkedin, label: "LinkedIn" },
              { icon: FaInstagram, href: about.instagram, label: "Instagram" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/30"
              >
                <social.icon size={20} />
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </motion.div>

          {/* CV butonu */}
          {about.cvUrl && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={about.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaFilePdf className="text-xl" />
                <span>CV'yi Görüntüle</span>
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
