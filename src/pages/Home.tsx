import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
      title: "🔥 GitHub Streak",
      img: "https://streak-stats.demolab.com?user=enesakmehmet&theme=tokyonight&hide_border=true",
    },
    {
      title: "📊 Genel İstatistikler",
      img: "https://github-readme-stats.vercel.app/api?username=enesakmehmet&show_icons=true&theme=tokyonight&hide_border=true",
    },
    {
      title: "💡 En Çok Kullanılan Diller",
      img: "https://github-readme-stats.vercel.app/api/top-langs/?username=enesakmehmet&layout=compact&theme=tokyonight&hide_border=true",
    },
  ];

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* 🎯 Hero */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "850px",
          marginBottom: "80px",
          padding: "0 15px",
        }}
      >
        {/* 👋 Animasyonlu başlık */}
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3rem)",
            fontWeight: "700",
            color: "#3b82f6",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          Merhaba <span className="wave">👋</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
            marginBottom: "10px",
          }}
        >
          Ben <strong>Enes Akmehmet</strong>
        </p>

        <ReactTyped
          strings={[
            "Fullstack Developer 💻",
            "React & TypeScript Specialist ⚛️",
            "Backend Engineer 🚀",
            "Open Source Contributor 🌍",
          ]}
          typeSpeed={60}
          backSpeed={35}
          backDelay={1200}
          loop
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            fontWeight: "500",
            color: "#60a5fa",
            display: "inline-block",
            marginBottom: "25px",
          }}
        />

        <p
          style={{
            fontSize: "1.05rem",
            color: "#9ca3af",
            marginTop: "20px",
            maxWidth: "600px",
            marginInline: "auto",
            lineHeight: 1.6,
          }}
        >
          Web teknolojileri, modern arayüzler ve performans odaklı uygulamalar
          geliştiriyorum. 🚀
        </p>
      </motion.section>

      {/* ✨ Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 1 }}
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(147,197,253,1) 50%, rgba(59,130,246,0) 100%)",
          marginBottom: "60px",
          borderRadius: "2px",
        }}
      ></motion.div>

      {/* 💎 GitHub Kartları */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          width: "100%",
          maxWidth: "1000px",
          justifyItems: "center",
          zIndex: 1,
          padding: "0 10px",
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            layoutId={`card-${i}`}
            onClick={() => setSelectedCard(i)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59,130,246,0.4)",
            }}
            className="glass-card"
          >
            <h3>{card.title}</h3>
            <img src={card.img} alt={card.title} />
          </motion.div>
        ))}
      </section>

      {/* 🌌 Hafif Büyüyen Modal */}
      <AnimatePresence>
        {selectedCard !== null && (
          <>
            {/* Arka plan blur */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
                zIndex: 10,
              }}
            />
            {/* Kart */}
            <motion.div
              key="card"
              layoutId={`card-${selectedCard}`}
              onClick={() => setSelectedCard(null)}
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: 1.3,
                opacity: 1,
                x: "-50%",
                y: "-50%",
              }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 18,
              }}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "auto",
                maxWidth: "800px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(25px)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "25px",
                zIndex: 20,
                boxShadow:
                  "0 0 35px rgba(59,130,246,0.6), inset 0 0 20px rgba(255,255,255,0.05)",
                cursor: "pointer",
              }}
            >
              <h2
                style={{
                  marginBottom: "15px",
                  color: "#93c5fd",
                  fontWeight: 600,
                }}
              >
                {cards[selectedCard].title}
              </h2>
              <img
                src={cards[selectedCard].img}
                alt={cards[selectedCard].title}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                  boxShadow: "0 0 20px rgba(147,197,253,0.4)",
                }}
              />
              <p style={{ color: "#d1d5db", marginTop: "10px" }}>
                Kapatmak için herhangi bir yere tıklayın ✨
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 💫 Stil */}
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          width: 100%;
          max-width: 320px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .glass-card h3 {
          color: #93c5fd;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        .glass-card img {
          width: 100%;
          border-radius: 10px;
          object-fit: contain;
        }
        /* 👋 El sallama animasyonu */
        .wave {
          display: inline-block;
          animation: wave-animation 1.8s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
        @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60%, 100% { transform: rotate(0deg); }
        }

        /* 🌐 Mobil uyum */
        @media (max-width: 600px) {
          .glass-card {
            width: 100%;
            max-width: 100%;
            padding: 15px;
          }
        }
      `}</style>
    </main>
  );
}
