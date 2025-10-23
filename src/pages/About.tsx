import { useEffect, useState } from "react";
import axios from "axios";
import { FaFilePdf, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/about`);
        setAbout(res.data);
      } catch (err) {
        console.error("About verisi alınamadı:", err);
      }
    }
    fetchAbout();
  }, []);

  if (!about) {
    return (
      <main className="container mx-auto p-6 text-center text-gray-400">
        <p>Yükleniyor...</p>
      </main>
    );
  }

  // ✅ API_URL'den "/api" kısmını kaldırıyoruz (CV bağlantısı düzelsin)
  const baseUrl = import.meta.env.VITE_API_URL.replace("/api", "");

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="bg-[#0e1629] text-white rounded-2xl shadow-lg p-10 w-full max-w-2xl text-center border border-blue-500/30">
        {/* Profil resmi */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-blue-500 flex items-center justify-center overflow-hidden">
          {about.avatarUrl ? (
            <img
              src={`${baseUrl}${about.avatarUrl}`}
              alt={about.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm text-gray-400">No Image</span>
          )}
        </div>

        {/* İsim ve Bio */}
        <h2 className="text-3xl font-bold mb-2">{about.name}</h2>
        <p className="text-gray-300 mb-6">{about.bio}</p>

        {/* Sosyal Linkler */}
        <div className="flex justify-center gap-6 text-lg mb-6">
          <a
            href={about.github}
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={about.linkedin}
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={about.instagram}
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        {/* CV butonu */}
        {about.cvUrl && (
          <a
            href={`${baseUrl}${about.cvUrl}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            <FaFilePdf className="text-xl" />
            <span>CV’yi Görüntüle</span>
          </a>
        )}
      </div>
    </main>
  );
}
