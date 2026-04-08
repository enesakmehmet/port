# Portfolio Frontend

Backend bağlantısı olmadan çalışan statik portfolio sitesi.

## ✨ Özellikler

- 🎨 Modern ve responsive tasarım
- 🌓 Dark/Light tema desteği
- 🤖 **AI Asistan** - Ziyaretçilerin sorularını yanıtlayan interaktif chatbot
- ⚡ Framer Motion animasyonları
- 📱 Mobil uyumlu
- 🔍 SEO optimizasyonu
- 📊 GitHub API entegrasyonu

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Localhost'ta http://localhost:5173 adresinde çalışacaktır.

## 🤖 AI Asistan Özelliği

Portfolyonuzda sağ alt köşede bir AI asistan bulunuyor. Bu asistan:

- ✅ Profiliniz hakkında bilgi verir
- ✅ Projelerinizi tanıtır
- ✅ Kullandığınız teknolojileri listeler
- ✅ İletişim bilgilerinizi paylaşır
- ✅ Hackathon başarılarınızı anlatır

### AI Asistan İçeriğini Düzenleme

`src/components/AIAssistant.tsx` dosyasındaki `knowledgeBase` objesini düzenleyerek asistanın cevaplarını özelleştirebilirsiniz:

```typescript
const knowledgeBase: Record<string, string> = {
  "profil|hakkında|kim": "Buraya kendi bilgilerinizi yazın...",
  "teknoloji|stack": "Kullandığınız teknolojileri listeleyin...",
  // ... diğer konular
};
```

## Sayfa İçeriklerini Düzenleme

Tüm sayfalar statik veri kullanıyor. İçerikleri düzenlemek için:

### About Sayfası
`src/pages/About.tsx` dosyasındaki veriyi düzenleyin:
```typescript
const about: AboutData = {
  name: "Adınız Soyadınız",
  bio: "Full Stack Developer | React & Node.js Enthusiast",
  github: "https://github.com/kullaniciadi",
  linkedin: "https://linkedin.com/in/kullaniciadi",
  instagram: "https://instagram.com/kullaniciadi",
  cvUrl: "/cv.pdf",
  avatarUrl: "/avatar.jpg"
};
```

### Projects Sayfası
`src/pages/Projects.tsx` dosyasındaki `projects` array'ini düzenleyin.

### Certificates Sayfası
`src/pages/Certificates.tsx` dosyasındaki `certificates` array'ini düzenleyin.

### Timeline Sayfası
`src/pages/Timeline.tsx` dosyasındaki `events` array'ini düzenleyin.

## Dosya Ekleme

- CV dosyanızı `public/cv.pdf` olarak ekleyin
- Avatar resminizi `public/avatar.jpg` olarak ekleyin

## Build

```bash
npm run build
```

Build dosyaları `dist` klasöründe oluşturulacaktır.

## Hosting'e Yükleme

1. `npm run build` komutu ile build alın
2. `dist` klasöründeki dosyaları hosting servisinize yükleyin
3. Vercel, Netlify veya GitHub Pages kullanabilirsiniz

### Vercel için:
```bash
npm install -g vercel
vercel --prod
```

### Netlify için:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🚀 Gelecek Özellikler

- [ ] OpenAI API entegrasyonu (gerçek AI cevapları)
- [ ] Çoklu dil desteği
- [ ] Blog sistemi
- [ ] Proje detay sayfaları
- [ ] İletişim formu backend entegrasyonu

////////////////////////////
