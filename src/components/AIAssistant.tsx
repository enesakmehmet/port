import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Trash2, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const quickReplies = [
  "Profilini özetle",
  "Hangi teknolojileri kullanıyorsun?",
  "Projelerini göster",
  "İletişim bilgilerin",
];

const knowledgeBase: Record<string, string> = {
  "profil|hakkında|kim|tanı": `Ben Enes Akmehmet, Fullstack Developer olarak modern web ve mobil uygulamalar geliştiriyorum. 
  
🎯 Öne Çıkan Özellikler:
• React, React Native, TypeScript uzmanı
• Full-stack geliştirme (Node.js, PostgreSQL)
• 2 adet yayında mobil uygulama (iOS & Android)
• Performans ve kullanıcı deneyimi odaklı`,

  "teknoloji|stack|araç|kullan": `🛠️ Kullandığım Teknolojiler:

Frontend:
• React & React Native
• TypeScript & JavaScript
• Next.js
• Tailwind CSS

Backend:
• Node.js & Express
• PostgreSQL & Prisma
• RESTful API

Araçlar:
• Git & GitHub
• Docker
• Figma
• VS Code`,

  "proje|uygulama|geliştir": `💼 Öne Çıkan Projelerim:

1. **Ehliyet Al 2026** (Mobil App)
   • iOS & Android'de yayında
   • React Native + Node.js + PostgreSQL
   • Sınav hazırlık ve konu anlatımı

2. **Donanım Kıyasla** (Mobil App)
   • Full-stack mobil uygulama
   • CPU/GPU karşılaştırma sistemi
   • Admin paneli ile yönetim

3. **CryptoTrade Exchange**
   • Modern kripto para platformu
   • React + TypeScript + Tailwind

Daha fazlası için Projeler sayfasını ziyaret edebilirsin!`,

  "hackathon|yarışma|başarı": `🏆 Hackathon Başarılarım:

• **Teknofest 2023** - Finalist
• **Google Solution Challenge** - Katılımcı
• **NASA Space Apps** - Takım Lideri
• Çeşitli üniversite hackathon'larında ödüller

Takım çalışması ve hızlı prototipleme konusunda deneyimliyim.`,

  "iletişim|mail|linkedin|github|sosyal": `📬 İletişim Bilgilerim:

• **GitHub:** github.com/enesakmehmet
• **LinkedIn:** linkedin.com/in/enes-akmehmet-a061bb206
• **Instagram:** @enesakmehmt
• **Email:** Mesajlar sayfasından ulaşabilirsin

Projeler ve iş birlikleri için her zaman açığım!`,

  "deneyim|iş|çalış": `💼 Deneyimim:

• **Fullstack Developer** - Freelance (2022-Günümüz)
  Modern web ve mobil uygulamalar geliştiriyorum

• **Mobile App Developer**
  iOS ve Android için React Native uygulamaları

• **Open Source Contributor**
  GitHub'da aktif olarak katkıda bulunuyorum

Timeline sayfasında detaylı deneyimlerimi görebilirsin!`,

  "eğitim|okul|üniversite": `🎓 Eğitim:

• Bilgisayar Mühendisliği öğrencisi
• Sürekli online kurslar ve sertifikalar
• Udemy, Coursera, freeCodeCamp

Certificates sayfasında tüm sertifikalarımı görebilirsin!`,

  "yetenek|skill|beceri": `⚡ Yeteneklerim:

**Frontend:**
React, React Native, TypeScript, Next.js, Tailwind CSS

**Backend:**
Node.js, Express, PostgreSQL, Prisma, RESTful API

**Araçlar:**
Git, Docker, Figma, VS Code, Postman

**Soft Skills:**
Problem çözme, takım çalışması, hızlı öğrenme

Skills sayfasında detaylı bilgi bulabilirsin!`,
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Merhaba! 👋 Ben Enes'in AI asistanıyım. Sana nasıl yardımcı olabilirim?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const findAnswer = (question: string): string => {
    const normalizedQuestion = question.toLowerCase().trim();

    for (const [keywords, answer] of Object.entries(knowledgeBase)) {
      const keywordList = keywords.split("|");
      if (keywordList.some((keyword) => normalizedQuestion.includes(keyword))) {
        return answer;
      }
    }

    return `Üzgünüm, bu konuda bilgim yok. 😅 
    
Şunları sorabilirsin:
• Profili ve deneyimleri
• Kullandığı teknolojiler
• Projeleri
• İletişim bilgileri
• Hackathon başarıları

Ya da yukarıdaki hızlı sorulardan birini seçebilirsin!`;
  };

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findAnswer(messageText),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome",
        text: "Merhaba! 👋 Ben Enes'in AI asistanıyım. Sana nasıl yardımcı olabilirim?",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white shadow-2xl shadow-blue-500/50 flex items-center justify-center hover:shadow-blue-500/70 transition-all hover:rotate-12"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle size={24} strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[998] w-[360px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-8rem)] rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col"
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 px-4 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg flex-shrink-0">
                  <Bot size={22} className="text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-base leading-tight">AI Asistan</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <p className="text-white/90 text-xs">Çevrimiçi</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClearChat}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                title="Sohbeti Temizle"
              >
                <Trash2 size={19} className="text-white" />
              </button>
            </div>

            {/* Messages - Scrollable */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot size={14} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-xl px-3 py-2.5 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                        : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-md border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    <span
                      className={`text-[10px] mt-1.5 block ${
                        msg.sender === "user" ? "text-blue-100" : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString("tr-TR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl px-4 py-3 shadow-md border border-slate-200 dark:border-slate-700">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies - Fixed */}
            <div className="flex-shrink-0 px-4 py-2.5 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 hover:from-blue-50 hover:to-blue-100 dark:hover:from-slate-700 dark:hover:to-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-all border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input - Fixed */}
            <div className="flex-shrink-0 p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Bir şey sor..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-slate-800 dark:text-slate-100 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-300 disabled:to-slate-300 dark:disabled:from-slate-700 dark:disabled:to-slate-700 disabled:cursor-not-allowed text-white transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:shadow-none flex-shrink-0"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
