# Google AdSense Entegrasyonu - Kullanım Kılavuzu

## ✅ Yapılan İşlemler

1. ✅ AdSense script'i layout'a eklendi
2. ✅ AdSense meta tag eklendi
3. ✅ Banner komponentleri oluşturuldu
4. ✅ Ana sayfaya 3 banner alanı eklendi

## 📋 AdSense Bilgileri

- **Client ID**: `ca-pub-2176285363097953`
- **Script**: Otomatik yükleniyor
- **Meta Tag**: Layout'a eklendi

## 🎯 Banner Komponentleri

### 1. AdSenseBanner (Genel Banner)

Responsive banner için kullanılır.

```tsx
import { AdSenseBanner } from "@/components/google-adsense";

<AdSenseBanner
  clientId="ca-pub-2176285363097953"
  size="responsive" // veya "728x90", "300x250", "320x100", "970x250"
  className="max-w-7xl mx-auto px-4"
/>;
```

**Boyut Seçenekleri:**

- `responsive`: Otomatik boyutlandırma (önerilen)
- `728x90`: Leaderboard (desktop)
- `300x250`: Medium Rectangle (sidebar)
- `320x100`: Large Mobile Banner
- `970x250`: Billboard (büyük ekranlar)

### 2. AdSenseInArticle (Makale İçi Banner)

İçerik arası banner için kullanılır.

```tsx
import { AdSenseInArticle } from "@/components/google-adsense";

<AdSenseInArticle
  clientId="ca-pub-2176285363097953"
  className="max-w-7xl mx-auto px-4"
/>;
```

### 3. AdSenseSidebar (Sidebar Banner)

Sidebar için sabit banner.

```tsx
import { AdSenseSidebar } from "@/components/google-adsense";

<AdSenseSidebar clientId="ca-pub-2176285363097953" className="sticky top-4" />;
```

### 4. GoogleAdSense (Özel Kullanım)

Tam özelleştirme için.

```tsx
import { GoogleAdSense } from "@/components/google-adsense";

<GoogleAdSense
  clientId="ca-pub-2176285363097953"
  slot="1234567890" // AdSense'den alacağınız slot ID
  format="auto"
  style={{ width: "100%", minHeight: "90px" }}
  responsive={true}
/>;
```

## 📍 Mevcut Banner Konumları

Ana sayfada 3 banner alanı var (AdSense politikalarına uygun):

1. **About sonrası** - İçerikli bölümden sonra (InArticle)
2. **Projects sonrası** - İçerikli bölümden sonra (Banner)
3. **Skills sonrası** - İçerikli bölümden sonra (Banner)

### ⚠️ Politika Uyumluluğu

**Kaldırılan Reklamlar:**
- ❌ Hero sonrası: Yeterince içerik yok (minimal başlık/CTA)
- ❌ Contact sonrası: Form sayfası (davranışsal amaçlı ekran)

**AdSense Politikası:**
- Reklamlar sadece yeterince içerik olan sayfalarda gösterilebilir
- En az 200-300 kelime içerik olmalı
- Navigasyon, uyarı, form veya boş sayfalarda reklam gösterilemez

## 🎨 Banner Ekleme/Çıkarma

### Banner Eklemek

`app/page.tsx` dosyasında istediğiniz yere ekleyin:

```tsx
import { AdSenseBanner } from "@/components/google-adsense";

// Örnek: Projects ve Skills arası
<Projects />
<AdSenseBanner
  clientId="ca-pub-2176285363097953"
  size="responsive"
  className="max-w-7xl mx-auto px-4"
/>
<Skills />
```

### Banner Kaldırmak

`app/page.tsx` dosyasından ilgili `<AdSenseBanner />` satırını silin.

## 🔧 AdSense Slot ID Kullanımı

Eğer AdSense'den özel slot ID aldıysanız:

```tsx
<AdSenseBanner
  clientId="ca-pub-2176285363097953"
  slot="1234567890" // Slot ID'nizi buraya ekleyin
  size="responsive"
/>
```

## ⚠️ Önemli Notlar

1. **AdSense Onayı**: Reklamların görünmesi için AdSense hesabınızın onaylanması gerekir
2. **İçerik Politikası**: AdSense politikalarına uygun içerik gerekli
3. **Trafik**: Yeterli trafik olmalı (genellikle günlük 100+ ziyaretçi)
4. **Test Modu**: Geliştirme sırasında reklamlar görünmeyebilir (normal)
5. **Politika İhlalleri**: Reklamları sadece içerikli sayfalarda gösterin
   - ❌ Hero/landing sayfalarında (yeterince içerik yok)
   - ❌ Form sayfalarında (davranışsal amaçlı)
   - ❌ Boş/yapım aşamasında sayfalarda
   - ✅ İçerikli sayfalarda (About, Projects, Skills gibi)

## 🚀 AdSense Hesabı Kurulumu

1. [Google AdSense](https://www.google.com/adsense/) hesabı oluşturun
2. Sitenizi ekleyin ve doğrulayın
3. Hesap onayını bekleyin (1-2 hafta)
4. Reklam birimlerini oluşturun (isteğe bağlı)

## 📊 Reklam Performansı

- AdSense dashboard'dan performansı takip edebilirsiniz
- Reklam yerleşimlerini test edin
- Farklı banner boyutlarını deneyin
- Kullanıcı deneyimini bozmayacak şekilde yerleştirin

## 🔍 Sorun Giderme

### Reklamlar Görünmüyor

1. AdSense hesabı onaylandı mı kontrol edin
2. Tarayıcı konsolunda hata var mı bakın
3. Ad blocker'ı kapatın
4. Geliştirme modunda olabilir (normal)

### Reklamlar Çok Büyük/Küçük

- `size` prop'unu değiştirin
- `style` prop'u ile özel boyut verin
- `responsive={true}` kullanın

### Performans Sorunları

- Banner sayısını azaltın (3-4 arası ideal)
- Lazy loading ekleyin (isteğe bağlı)
- Script yükleme stratejisini optimize edin

## 📝 Örnek Kullanımlar

### Blog Sayfası

```tsx
// app/blog/page.tsx
import { AdSenseInArticle } from "@/components/google-adsense";

export default function BlogPost() {
  return (
    <article>
      <h1>Blog Başlığı</h1>
      <p>İlk paragraf...</p>

      {/* İçerik arası reklam */}
      <AdSenseInArticle clientId="ca-pub-2176285363097953" />

      <p>Devam eden içerik...</p>
    </article>
  );
}
```

### Sidebar ile Layout

```tsx
// app/layout.tsx veya özel layout
import { AdSenseSidebar } from "@/components/google-adsense";

<div className="grid grid-cols-3 gap-4">
  <main className="col-span-2">{children}</main>
  <aside className="col-span-1">
    <AdSenseSidebar clientId="ca-pub-2176285363097953" />
  </aside>
</div>;
```

## 🚨 Politika İhlali Düzeltmeleri

### Yapılan Düzeltmeler (2025-01-XX)

**Sorun:** "Yayıncı içeriği olmayan ekranlarda gösterilen reklamlar" ihlali

**Çözüm:**
1. ✅ Hero sonrası reklam kaldırıldı (yeterince içerik yok)
2. ✅ Contact sonrası reklam kaldırıldı (form sayfası)
3. ✅ Reklamlar sadece içerikli bölümlerden sonra gösteriliyor:
   - About sonrası (yeterince içerik var)
   - Projects sonrası (yeterince içerik var)
   - Skills sonrası (yeterince içerik var)

### AdSense Yeniden İnceleme Talebi

1. AdSense panelinde "Sorunları giderdiğimi onaylıyorum" kutusunu işaretleyin
2. "İnceleme iste" butonuna tıklayın
3. 1-2 hafta içinde sonuç alırsınız

---

**Son Güncelleme**: 2025-01-XX
**Versiyon**: 1.1.0 (Politika İhlali Düzeltmeleri)
