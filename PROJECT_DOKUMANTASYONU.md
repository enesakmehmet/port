# 🚀 Enes Akmehmet - Modern Portfolio (v2) - Proje İncelemesi

Bu doküman, projenin mevcut yapısını, kullanılan teknolojileri ve mimari kararları detaylandırmak amacıyla oluşturulmuştur.

## 📌 Genel Bakış
Bu proje, **Enes Akmehmet** için geliştirilmiş, modern web standartlarını (Vite + React + TS) takip eden, yüksek performanslı ve estetik bir kişisel portfolyo web sitesidir. Tasarımda "Glassmorphism", "Dark Mode First" ve akıcı animasyonlar (Framer Motion) ön plandadır.

---

## 🛠️ Teknik Altyapı (Tech Stack)

### Çekirdek Teknolojiler
- **React 18 & Vite:** Hızlı HMR (Hot Module Replacement) ve optimize edilmiş production çıktıları için.
- **TypeScript:** Kod kalitesini artırmak, hata payını düşürmek ve geliştirici deneyimini iyileştirmek için tüm projede tip güvenliği sağlanmıştır.
- **React Router DOM (v7):** Sayfalar arası hızlı ve akıcı geçişler için modern routing yapısı.

### Stil ve UI/UX
- **Tailwind CSS:** Utility-first yaklaşımı ile hızlı ve tutarlı stil yönetimi.
- **Framer Motion:** Sayfa giriş çıkışları, kart hover efektleri ve mikro etkileşimler için kullanılan güçlü animasyon kütüphanesi.
- **MUI (Material UI & Joy UI):** Profesyonel görünümlü modal, input ve layout bileşenleri.
- **Heroicons & Lucide React:** Minimalist ve modern ikon setleri.

---

## 📂 Proje Yapısı Analizi

### `/src` Klasörü İçeriği
| Klasör / Dosya | Açıklama |
| :--- | :--- |
| `api/` | `axios.ts` ile yapılandırılmış, gelecekteki backend entegrasyonuna hazır API katmanı. |
| `components/` | Navbar, Footer ve AI Assistant gibi global bileşenler. |
| `pages/` | Uygulamanın ana rotalarını temsil eden sayfa bileşenleri (Home, Projects, etc.). |
| `styles/` | `index.css` ve `App.css` ile tanımlanmış global stiller ve mesh gradient arka planlar. |
| `types/` | Uygulama genelinde kullanılan TypeScript arayüz tanımlamaları. |

### Öne Çıkan Bileşenler
- **`AIAssistant.tsx`**: Sağ alt köşede yer alan, ziyaretçilerin Enes hakkında bilgi almasını sağlayan statik bir chatbot. Kelime bazlı eşleşme mantığı ile çalışır ve "hakkında", "teknoloji", "iletişim" gibi konularda anında yanıt verir.
- **`Navbar.tsx`**: `localStorage` destekli bir tema yöneticisine (Dark/Light Mode) sahiptir.

---

## 📄 Sayfa Detayları

1.  **🏠 Home (Ana Sayfa):** Ziyaretçiyi karşılayan, etkileyici bir giriş animasyonu ve "React Typed" ile dinamik başlıkların olduğu bölüm.
2.  **💼 Projects (Projeler):** GitHub ve App Store bağlantılarını içeren, kategori bazlı (Mobile/Web) filtreleme yapılabilecek şekilde tasarlanmış proje galerisi.
3.  **📊 Skills (Yetenekler):** Teknolojik yetkinliklerin seviyelerle veya ikonlarla görselleştirildiği alan.
4.  **🎓 Certificates (Sertifikalar):** Eğitim ve başarı belgelerinin sergilendiği dinamik liste.
5.  **⏳ Timeline (Zaman Çizelgesi):** Kariyer basamaklarını kronolojik olarak sunan dikey akış.
6.  **📩 Messages (İletişim):** Kullanıcıların mesaj bırakabileceği arayüz.

---

## 🔍 Teknik Detaylar & Performans
- **Vite Optimizasyonu:** `vite.config.ts` üzerinden `rolldown-vite` gibi modern paketleyiciler kullanılarak build süreleri minimize edilmiştir.
- **Asset Yönetimi:** Faviconlar ve resimler `public` klasörü altında optimize edilmiş şekilde saklanmaktadır.
- **SEO:** `index.html` üzerinde temel meta etiketleri ve başlık yapılandırmaları yapılmıştır.

---

## 🚀 Geliştirme ve Dağıtım

### Yerel Çalıştırma
```bash
# Bağımlılıkların yüklenmesi
npm install

# Geliştirme sunucusunun başlatılması
npm run dev
```

### Build & Yayına Alma
```bash
# Üretim dosyalarının oluşturulması
npm run build

# Vercel'e dağıtım (Opsiyonel)
vercel --prod
```

### Gelecek Planları
- [ ] OpenAI API entegrasyonu ile AI asistanı daha akıllı hale getirmek.
- [ ] Çoklu dil (i18n) desteği eklemek.
- [ ] Mesajlar sayfası için Node.js tabanlı bir backend bağlamak.

---
> **Not:** Bu doküman, projenin `v2` sürümü analiz edilerek **Antigravity AI** tarafından otomatik olarak güncellenmiştir.
