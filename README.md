# 🚀 DevRadar

DevRadar, yalnızca bir GitHub kullanıcı adı girerek kullanıcının GitHub profilini analiz eden modern bir web uygulamasıdır. Uygulama; profil bilgilerini, herkese açık repoları ve kullanılan programlama dillerini görsel ve kullanıcı dostu bir arayüzde sunar.

## ✨ Özellikler

- 🔍 GitHub kullanıcı adı ile profil arama
- 👤 Kullanıcı profil bilgilerini görüntüleme
- 📦 Herkese açık repoları listeleme
- 📊 Programlama dillerinin dağılımını grafik ile gösterme
- 📱 Responsive (mobil uyumlu) tasarım
- ⚡ Hızlı ve güvenilir veri çekme

---

## 🛠️ Kullanılan Teknolojiler

- TypeScript
- React
- Vite
- GitHub REST API
- CSS

---

## 📂 Proje Yapısı

```
src/
├── components/
│   ├── ProfileCard.tsx
│   ├── RepoList.tsx
│   ├── LanguageChart.tsx
│   └── SearchBar.tsx
├── services/
├── types/
├── utils/
└── App.tsx
```

---

## 🧩 Bileşenler

### 👤 ProfileCard

GitHub kullanıcısına ait temel bilgileri gösterir.

Gösterilen bilgiler:

- Profil fotoğrafı
- Ad Soyad
- Kullanıcı adı
- Biyografi
- Takipçi / Takip edilen sayısı
- Açık repo sayısı
- Konum
- GitHub profil bağlantısı

---

### 📦 RepoList

Kullanıcının herkese açık repolarını listeler.

Her repo için:

- Repo adı
- Açıklama
- Yıldız (Stars)
- Fork sayısı
- Kullanılan dil
- GitHub bağlantısı

---

### 📊 LanguageChart

Kullanıcının repolarındaki programlama dillerini analiz ederek grafik halinde gösterir. Böylece geliştiricinin en çok kullandığı teknolojiler kolayca görüntülenebilir.

---

## ⚙️ Kurulum

Projeyi klonlayın:

```bash
git clone https://github.com/Yasori1/devradar.git
```

Klasöre girin:

```bash
cd devradar
```

Bağımlılıkları yükleyin:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Production build oluşturmak için:

```bash
npm run build
```

---

## 💻 Kullanım

Arama kutusuna herhangi bir GitHub kullanıcı adını girmeniz yeterlidir.

Örnek:

```
octocat
```

Uygulama otomatik olarak:

- Profil bilgilerini
- Repo listesini
- Programlama dili analizini

ekrana getirir.

---

## 🎯 Projenin Amacı

Bu proje aşağıdaki konularda pratik yapmak amacıyla geliştirilmiştir:

- TypeScript kullanımı
- React bileşen mimarisi
- GitHub REST API entegrasyonu
- Veri işleme ve görselleştirme
- Responsive arayüz geliştirme
- Component tabanlı frontend geliştirme

---

## 📌 API

Bu proje verileri **GitHub REST API** üzerinden almaktadır.

https://docs.github.com/en/rest

---

## 👨‍💻 Geliştirici

**Yaşar Eren Güre**

Frontend Developer

GitHub: https://github.com/Yasori1

LinkedIn: https://linkedin.com/in/yaşar-eren
