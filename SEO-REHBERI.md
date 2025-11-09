# SEO (Search Engine Optimization) Rehberi

Bu dokümantasyon, web sitenizde uygulanan SEO optimizasyonlarını ve SEO hakkında temel bilgileri içerir.

## 📋 İçindekiler

1. [SEO Nedir?](#seo-nedir)
2. [Uygulanan SEO Optimizasyonları](#uygulanan-seo-optimizasyonları)
3. [SEO Best Practices](#seo-best-practices)
4. [Önemli SEO Terimleri](#önemli-seo-terimleri)
5. [SEO Kontrol Listesi](#seo-kontrol-listesi)
6. [SEO Araçları](#seo-araçları)

---

## 🔍 SEO Nedir?

**SEO (Search Engine Optimization)** = Arama Motoru Optimizasyonu

SEO, web sitenizin arama motorlarında (Google, Bing, Yandex vb.) daha üst sıralarda görünmesi için yapılan teknik ve içerik optimizasyonlarıdır.

### SEO'nun Amacı:

- ✅ Organik (ücretsiz) trafik kazanmak
- ✅ Hedef kitleye ulaşmak
- ✅ Marka bilinirliğini artırmak
- ✅ Dönüşüm oranlarını yükseltmek

### SEO Türleri:

1. **On-Page SEO**: Sitenin içindeki optimizasyonlar (meta tags, içerik, görseller)
2. **Off-Page SEO**: Sitenin dışındaki faktörler (backlinkler, sosyal medya)
3. **Technical SEO**: Teknik optimizasyonlar (hız, mobil uyumluluk, structured data)

---

## ✅ Uygulanan SEO Optimizasyonları

### 1. Metadata Optimizasyonu

**Dosya:** `app/layout.tsx`

#### Title Tag

```typescript
title: {
  default: "Fatih Soymaz - Full Stack Developer | .NET & React Specialist",
  template: "%s | Fatih Soymaz",
}
```

- ✅ Açıklayıcı ve anahtar kelime içeren başlık
- ✅ 50-60 karakter aralığında
- ✅ Her sayfa için benzersiz

#### Meta Description

```typescript
description: "Full Stack Developer Fatih Soymaz. .NET backend, React/Next.js frontend...";
```

- ✅ 150-160 karakter aralığında
- ✅ Anahtar kelimeler içeriyor
- ✅ Kullanıcıyı tıklamaya teşvik ediyor

#### Keywords

```typescript
keywords: [
  "Full Stack Developer",
  ".NET Developer",
  "React Developer",
  // ...
];
```

- ✅ İlgili anahtar kelimeler listelenmiş
- ⚠️ Not: Google keywords meta tag'ini artık kullanmıyor, ama diğer arama motorları için faydalı

### 2. Open Graph (OG) Tags

**Sosyal medya paylaşımları için:**

```typescript
openGraph: {
  type: "website",
  locale: "tr_TR",
  url: "https://fsoymaz.github.io",
  title: "...",
  description: "...",
  images: [...]
}
```

**Faydaları:**

- ✅ Facebook, LinkedIn, WhatsApp'ta paylaşımda güzel görünüm
- ✅ Büyük görsel önizleme
- ✅ Daha fazla tıklama oranı

### 3. Twitter Cards

```typescript
twitter: {
  card: "summary_large_image",
  title: "...",
  description: "...",
  images: [...]
}
```

**Faydaları:**

- ✅ Twitter'da paylaşımda zengin görünüm
- ✅ Büyük görsel önizleme
- ✅ Profesyonel görünüm

### 4. Structured Data (JSON-LD)

**Dosya:** `app/layout.tsx`

#### Person Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Fatih Soymaz",
  "jobTitle": "Full Stack Developer"
  // ...
}
```

**Faydaları:**

- ✅ Google'da zengin sonuçlar (Rich Snippets)
- ✅ Arama sonuçlarında daha fazla bilgi gösterimi
- ✅ Daha yüksek tıklama oranı

#### WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Fatih Soymaz - Portfolio"
  // ...
}
```

### 5. Robots.txt

**Dosyalar:** `app/robots.ts` ve `public/robots.txt`

```txt
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://fsoymaz.github.io/sitemap.xml
```

**Faydaları:**

- ✅ Arama motorlarına hangi sayfaları tarayacağını söyler
- ✅ Gereksiz sayfaları taramaktan korur
- ✅ Sitemap konumunu belirtir

### 6. Sitemap.xml

**Dosyalar:** `app/sitemap.ts` ve `public/sitemap.xml`

**Faydaları:**

- ✅ Arama motorlarına tüm sayfaları bildirir
- ✅ Sayfaların önem sırasını belirtir
- ✅ Güncelleme sıklığını belirtir

### 7. Image Optimization

**Alt Text:**

```html
<img
  alt="Fatih Soymaz - Full Stack Developer, .NET ve React uzmanı"
  width="{600}"
  height="{600}"
  loading="eager"
/>
```

**Faydaları:**

- ✅ Görme engelliler için erişilebilirlik
- ✅ Arama motorları görselleri anlayabilir
- ✅ Görsel aramalarda görünürlük

**Loading Attributes:**

- `loading="eager"`: Önemli görseller için (hero image)
- `loading="lazy"`: Diğer görseller için (performans)

### 8. Semantic HTML

**Kullanılan HTML5 Elementleri:**

- `<section>`: İçerik bölümleri
- `<header>`, `<footer>`: Sayfa yapısı
- `<nav>`: Navigasyon
- `<main>`: Ana içerik
- `<article>`: Bağımsız içerik

**Faydaları:**

- ✅ Arama motorları sayfa yapısını anlar
- ✅ Erişilebilirlik artar
- ✅ Daha iyi sıralama

### 9. Canonical URL

```typescript
alternates: {
  canonical: "/",
}
```

**Faydaları:**

- ✅ Duplicate content sorununu önler
- ✅ SEO değerini tek URL'de toplar

---

## 🎯 SEO Best Practices

### 1. İçerik Optimizasyonu

#### ✅ Yapılması Gerekenler:

- **Kaliteli ve Orijinal İçerik**: Benzersiz, değerli içerik üretin
- **Anahtar Kelime Kullanımı**: Doğal şekilde anahtar kelimeleri kullanın
- **Başlık Hiyerarşisi**: H1 → H2 → H3 sırasını takip edin
- **İç Linkleme**: İlgili sayfalara link verin
- **Düzenli Güncelleme**: İçeriği düzenli olarak güncelleyin

#### ❌ Yapılmaması Gerekenler:

- Keyword stuffing (anahtar kelime doldurma)
- Duplicate content (kopya içerik)
- Thin content (zayıf içerik)
- Cloaking (farklı içerik gösterme)

### 2. Teknik SEO

#### ✅ Yapılması Gerekenler:

- **Hızlı Yükleme**: Sayfa hızını optimize edin (< 3 saniye)
- **Mobil Uyumluluk**: Responsive tasarım kullanın
- **HTTPS**: SSL sertifikası kullanın
- **404 Sayfaları**: Kullanıcı dostu 404 sayfaları oluşturun
- **XML Sitemap**: Sitemap oluşturun ve Google Search Console'a ekleyin

#### ❌ Yapılmaması Gerekenler:

- Broken links (kırık linkler)
- Slow loading (yavaş yükleme)
- Mobile-unfriendly (mobil uyumsuz)
- Mixed content (HTTP/HTTPS karışımı)

### 3. Backlink Stratejisi

#### ✅ Yapılması Gerekenler:

- **Kaliteli Backlinkler**: Güvenilir sitelerden link alın
- **Sosyal Medya**: İçeriği sosyal medyada paylaşın
- **Guest Posting**: İlgili sitelerde misafir yazı yazın
- **Dizinler**: Profesyonel dizinlere kayıt olun

#### ❌ Yapılmaması Gerekenler:

- Link farm'ları (link çiftlikleri)
- Spam backlinkler
- Satın alınan sahte linkler

---

## 📚 Önemli SEO Terimleri

### 1. **SERP (Search Engine Results Page)**

Arama motoru sonuç sayfası. Google'da arama yaptığınızda gördüğünüz sayfa.

### 2. **Organic Search**

Ücretli olmayan, organik arama sonuçları.

### 3. **Keyword**

Arama motorlarında aranan kelime veya kelime öbekleri.

### 4. **Long-tail Keyword**

Uzun kuyruk anahtar kelimeler. Örnek: "istanbul full stack developer iş ilanları"

### 5. **Backlink**

Başka bir siteden sizin sitenize verilen link.

### 6. **Domain Authority (DA)**

Bir domain'in arama motorlarındaki güvenilirlik skoru (0-100).

### 7. **Page Authority (PA)**

Bir sayfanın arama motorlarındaki güvenilirlik skoru (0-100).

### 8. **Bounce Rate**

Kullanıcıların sitenizde tek sayfa görüntüleyip çıkma oranı.

### 9. **CTR (Click-Through Rate)**

Tıklama oranı. Arama sonuçlarında görünme sayısına göre tıklanma oranı.

### 10. **Rich Snippets**

Arama sonuçlarında görünen zengin içerik (yıldızlar, görseller, ek bilgiler).

### 11. **Core Web Vitals**

Google'ın sayfa performans metrikleri:

- **LCP (Largest Contentful Paint)**: En büyük içeriğin yüklenme süresi
- **FID (First Input Delay)**: İlk etkileşim gecikmesi
- **CLS (Cumulative Layout Shift)**: Görsel kayma

---

## ✅ SEO Kontrol Listesi

### Teknik SEO

- [x] Title tag optimize edildi
- [x] Meta description eklendi
- [x] Open Graph tags eklendi
- [x] Twitter Cards eklendi
- [x] Structured Data (JSON-LD) eklendi
- [x] robots.txt oluşturuldu
- [x] sitemap.xml oluşturuldu
- [x] Canonical URL eklendi
- [x] Image alt text'leri eklendi
- [x] Semantic HTML kullanıldı
- [ ] SSL sertifikası (HTTPS) - Production'da kontrol edin
- [ ] Sayfa hızı optimize edildi
- [ ] Mobil uyumluluk test edildi

### İçerik SEO

- [ ] H1 tag kullanıldı (her sayfada bir tane)
- [ ] H2, H3 tag'leri mantıklı hiyerarşide
- [ ] İç linkleme yapıldı
- [ ] Dış linkleme (nofollow gerekirse)
- [ ] İçerik düzenli güncelleniyor

### Off-Page SEO

- [ ] Google Search Console'a kayıt olundu
- [ ] Google Analytics kuruldu
- [ ] Sosyal medya profilleri oluşturuldu
- [ ] Backlink stratejisi planlandı

---

## 🛠️ SEO Araçları

### 1. **Google Search Console**

- ✅ Sitemap gönderme
- ✅ Arama performansı analizi
- ✅ Hata tespiti
- ✅ URL inceleme

**Kurulum:**

1. https://search.google.com/search-console adresine gidin
2. Sitenizi ekleyin
3. Verification code'u `app/layout.tsx` içindeki `verification.google` alanına ekleyin

### 2. **Google Analytics**

- ✅ Ziyaretçi analizi
- ✅ Trafik kaynakları
- ✅ Kullanıcı davranışları

### 3. **PageSpeed Insights**

- ✅ Sayfa hızı analizi
- ✅ Core Web Vitals metrikleri
- ✅ Optimizasyon önerileri

**URL:** https://pagespeed.web.dev/

### 4. **Schema Markup Validator**

- ✅ Structured data doğrulama
- ✅ JSON-LD testi

**URL:** https://validator.schema.org/

### 5. **Rich Results Test**

- ✅ Rich snippets testi
- ✅ Google görünüm önizlemesi

**URL:** https://search.google.com/test/rich-results

### 6. **Ahrefs / SEMrush**

- ✅ Backlink analizi
- ✅ Keyword araştırması
- ✅ Rakip analizi

### 7. **Screaming Frog SEO Spider**

- ✅ Site tarama
- ✅ Teknik SEO analizi
- ✅ Broken link tespiti

---

## 📈 SEO Metrikleri ve Takip

### Önemli Metrikler:

1. **Organic Traffic**: Organik arama trafiği
2. **Keyword Rankings**: Anahtar kelime sıralamaları
3. **Backlinks**: Gelen linkler
4. **Bounce Rate**: Çıkış oranı
5. **Average Session Duration**: Ortalama oturum süresi
6. **Pages per Session**: Oturum başına sayfa sayısı

### Takip Etmeniz Gerekenler:

- ✅ Haftalık trafik raporları
- ✅ Aylık keyword sıralamaları
- ✅ Backlink değişiklikleri
- ✅ Teknik hatalar (404, broken links)

---

## 🚀 Sonraki Adımlar

### 1. Domain ve Hosting

- [x] Domain kullanılıyor: https://fsoymaz.github.io
- [ ] SSL sertifikası kurun (Let's Encrypt ücretsiz)
- [ ] `app/layout.tsx` içindeki URL'leri güncelleyin

### 2. Google Search Console

- [ ] Sitenizi Google Search Console'a ekleyin
- [ ] Sitemap'i gönderin
- [ ] Verification code'u ekleyin

### 3. Google Analytics

- [ ] Google Analytics hesabı oluşturun
- [ ] Tracking code'u ekleyin

### 4. İçerik Güncellemeleri

- [ ] Blog yazıları ekleyin
- [ ] Proje açıklamalarını detaylandırın
- [ ] Düzenli içerik güncellemeleri yapın

### 5. Sosyal Medya

- [ ] LinkedIn profilini optimize edin
- [ ] GitHub profilini güncelleyin
- [ ] İçeriği sosyal medyada paylaşın

---

## 📝 Notlar

### Önemli Hatırlatmalar:

1. **SEO bir süreçtir**, hemen sonuç beklemeyin (3-6 ay)
2. **Kaliteli içerik** her zaman önceliklidir
3. **Teknik SEO** temeldir, önce bunu halledin
4. **Mobile-first** yaklaşımı benimseyin
5. **Düzenli takip** yapın ve optimize edin

### Domain Güncellemesi:

Domain güncellemesi tamamlandı: `https://fsoymaz.github.io` kullanılıyor. Aşağıdaki dosyalarda domain güncellendi:

- `app/layout.tsx` (metadataBase, openGraph.url, structured data)
- `app/robots.ts`
- `app/sitemap.ts`
- `public/robots.txt`
- `public/sitemap.xml`

---

## 📚 Ek Kaynaklar

- [Google SEO Başlangıç Rehberi](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Next.js SEO Dokümantasyonu](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Dokümantasyonu](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

---

**Son Güncelleme:** 2024

**Hazırlayan:** SEO Optimizasyon Ekibi
