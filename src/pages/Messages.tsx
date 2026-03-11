import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  User, 
  AtSign, 
  MessageSquare, 
  FileText,
  Github,
  Linkedin,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Loader2
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/enesakmehmet",
    color: "#6e5494",
    username: "@enesakmehmet"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/enes-akmehmet-a061bb206",
    color: "#0A66C2",
    username: "Enes Akmehmet"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/enesakmehmt",
    color: "#E4405F",
    username: "@enesakmehmt"
  },
];

const contactInfo = [
  { icon: Mail, label: "E-posta", value: "enesakmehmet@gmail.com" },
  { icon: MapPin, label: "Konum", value: "Türkiye" },
  { icon: Clock, label: "Yanıt Süresi", value: "24 saat içinde" },
];

export default function Messages() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgzvobd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          💬 İletişime Geç
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
          Proje, işbirliği veya herhangi bir soru için benimle iletişime geçebilirsin
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Sol Panel - İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {/* Sosyal Medya Kartları */}
            <div className="glass-card">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </span>
                Sosyal Medya
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon size={20} style={{ color: social.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-800 dark:text-slate-100 text-sm">
                        {social.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {social.username}
                      </div>
                    </div>
                    <Send size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* İletişim Bilgileri */}
            <div className="glass-card">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </span>
                Bilgiler
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <info.icon size={18} className="text-slate-400" />
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{info.label}</div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>


          {/* Sağ Panel - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full pointer-events-none" />

              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2 relative">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <MessageSquare size={16} className="text-white" />
                </span>
                Mesaj Gönder
              </h3>

              <div className="space-y-4 relative">
                {/* Ad Soyad */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Ad Soyad
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-blue-500/50' : ''}`}>
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'name' ? 'text-blue-500' : 'text-slate-400'}`} size={18} />
                    <input
                      name="name"
                      placeholder="Adınızı girin"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* E-posta */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    E-posta
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-blue-500/50' : ''}`}>
                    <AtSign className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'email' ? 'text-blue-500' : 'text-slate-400'}`} size={18} />
                    <input
                      type="email"
                      name="email"
                      placeholder="ornek@email.com"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Konu */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Konu <span className="text-slate-400 font-normal">(İsteğe bağlı)</span>
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'subject' ? 'ring-2 ring-blue-500/50' : ''}`}>
                    <FileText className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'subject' ? 'text-blue-500' : 'text-slate-400'}`} size={18} />
                    <input
                      name="subject"
                      placeholder="Mesajınızın konusu"
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm"
                    />
                  </div>
                </div>

                {/* Mesaj */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Mesaj
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'message' ? 'ring-2 ring-blue-500/50' : ''}`}>
                    <MessageSquare className={`absolute left-3 top-3 transition-colors ${focusedField === 'message' ? 'text-blue-500' : 'text-slate-400'}`} size={18} />
                    <textarea
                      name="message"
                      placeholder="Mesajınızı buraya yazın..."
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 min-h-[120px] resize-y text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={status === "loading"}
                  type="submit"
                  className={`
                    w-full py-3.5 rounded-xl font-semibold text-white 
                    flex items-center justify-center gap-2 
                    shadow-lg transition-all duration-300
                    ${status === "loading"
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/25 hover:shadow-blue-500/40"
                    }
                  `}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Mesaj Gönder
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-green-600 dark:text-green-400 text-sm">Mesaj Gönderildi!</div>
                      <div className="text-xs text-green-600/70 dark:text-green-400/70">En kısa sürede dönüş yapacağım.</div>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                  >
                    <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-red-600 dark:text-red-400 text-sm">Bir hata oluştu</div>
                      <div className="text-xs text-red-600/70 dark:text-red-400/70">Lütfen daha sonra tekrar deneyin.</div>
                    </div>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
