import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/timeline`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("❌ Timeline alınamadı:", err));
  }, []);

  return (
    <section className="container mx-auto px-6 py-20 mt-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-14 flex items-center justify-center gap-2">
        ⏳{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Gelişim Timeline
        </span>
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-400">
          Henüz timeline olayları eklenmemiş.
        </p>
      ) : (
        <div className="relative border-l border-blue-600/30 pl-8 space-y-10">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Nokta animasyonu */}
              <div className="absolute -left-[1.15rem] top-5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_15px_#7dd3fc] group-hover:scale-125 transition-transform"></div>

              {/* Kart */}
              <div className="bg-[#0a1021]/80 border border-blue-900/40 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {ev.title}
                  </h3>
                  <span className="text-sm text-blue-400">
                    {new Date(ev.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                {ev.description && (
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    {ev.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-12 h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
    </section>
  );
}
