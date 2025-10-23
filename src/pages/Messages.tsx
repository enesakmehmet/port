import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Messages() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await axios.post("http://localhost:3001/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error("❌ Mesaj gönderilemedi:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#0f172a]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-4xl font-extrabold text-blue-400 flex items-center gap-3">
          <Mail className="text-blue-500" size={35} />
          İletişime Geç
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto">
          Proje, işbirliği veya genel bir soru için bana ulaşabilirsin 🚀
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-[#111827]/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-5 border border-gray-800"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-4">
          <input
            name="name"
            placeholder="👤 Ad Soyad"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1f2937] text-white outline-none border border-gray-700 focus:border-blue-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="📧 E-posta"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1f2937] text-white outline-none border border-gray-700 focus:border-blue-500 transition"
            required
          />
          <input
            name="subject"
            placeholder="📝 Konu (isteğe bağlı)"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1f2937] text-white outline-none border border-gray-700 focus:border-blue-500 transition"
          />
          <textarea
            name="message"
            placeholder="💬 Mesajınız..."
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1f2937] text-white outline-none h-32 resize-none border border-gray-700 focus:border-blue-500 transition"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "loading"}
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
            status === "loading"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
          }`}
        >
          {status === "loading" ? (
            "Gönderiliyor..."
          ) : (
            <>
              Gönder
              <Send size={18} />
            </>
          )}
        </motion.button>

        {status === "success" && (
          <p className="text-green-400 mt-3 animate-pulse">✅ Mesaj başarıyla gönderildi!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-3">❌ Bir hata oluştu. Lütfen tekrar deneyin.</p>
        )}
      </motion.form>

      <footer className="mt-10 text-gray-500 text-sm">
        <p>📬 Her zaman ulaşabilirsin — <span className="text-blue-400">enesakmehmet@gmail.com</span></p>
      </footer>
    </div>
  );
}
