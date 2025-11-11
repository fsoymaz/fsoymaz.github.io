# Dodo Payments Entegrasyonu - README

Bu dokümantasyon, Next.js projesine Dodo Payments ödeme entegrasyonunun nasıl yapıldığını açıklar.

## 📋 İçindekiler

- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Dodo Payments Panel Ayarları](#dodo-payments-panel-ayarları)
- [Kod Yapısı](#kod-yapısı)
- [Kullanım](#kullanım)
- [Önemli Notlar](#önemli-notlar)
- [Sorun Giderme](#sorun-giderme)

## 🔧 Gereksinimler

### 1. Dodo Payments Hesabı
- [Dodo Payments](https://dodopayments.com) hesabı oluşturun
- Hesabınızı doğrulayın (verification)
- Live Mode'a geçin

### 2. Ürün Oluşturma
- Dodo Payments panelinde "Products" bölümüne gidin
- "Add Product" butonuna tıklayın
- Ürün bilgilerini doldurun:
  - **Product Name**: Ürün adı (örn: "fsoymaz portfolio")
  - **Price**: Fiyat (örn: $0.10)
  - **Pricing Type**: "Single Payment" seçin
  - **Tax Category**: "Digital products" seçin
- Ürünü kaydedin ve **Product ID**'yi not edin (örn: `pdt_jk1u2M6XEnUMxSIIk1K7C`)

### 3. Proje Gereksinimleri
- Next.js 16+
- React 19+
- TypeScript
- Tailwind CSS
- shadcn/ui komponentleri

## 📦 Kurulum

### 1. Bağımlılıklar

Projeye gerekli paketler zaten yüklü olmalı:
- `sonner` (toast bildirimleri için)
- `@radix-ui/react-dialog` (modal için)
- `lucide-react` (ikonlar için)

### 2. Dosya Yapısı

```
components/
  ├── payment.tsx          # Ana ödeme komponenti
  └── ui/
      ├── dialog.tsx       # Modal dialog
      ├── button.tsx       # Buton komponenti
      ├── input.tsx        # Input komponenti
      └── sonner.tsx       # Toast bildirimleri

app/
  ├── payment/
  │   ├── success/
  │   │   └── page.tsx     # Ödeme başarı sayfası
  │   └── error/
  │       └── page.tsx     # Ödeme hata sayfası
  └── layout.tsx           # Toaster eklendi
```

## 🎯 Dodo Payments Panel Ayarları

### 1. Product ID'yi Alın

1. Dodo Payments panelinde "Products" bölümüne gidin
2. Oluşturduğunuz ürünü bulun
3. "Share" veya "Payment Link" butonuna tıklayın
4. Product ID'yi kopyalayın (format: `pdt_XXXXX`)

**ÖNEMLİ**: Product ID'deki karakterlere dikkat edin:
- ✅ Doğru: `pdt_jk1u2M6XEnUMxSIIk1K7C` (büyük I harfleri)
- ❌ Yanlış: `pdt_jk1u2M6XEnUMxSlIk1K7C` (küçük l harfi)

### 2. Payment Link Formatı

Dodo Payments'in ödeme linki formatı:
```
https://checkout.dodopayments.com/buy/{PRODUCT_ID}?quantity={QUANTITY}&redirect_url={REDIRECT_URL}
```

**Parametreler:**
- `PRODUCT_ID`: Ürün ID'si (zorunlu)
- `quantity`: Ürün miktarı (opsiyonel, varsayılan: 1)
- `redirect_url`: Ödeme sonrası yönlendirme URL'i (opsiyonel)

### 3. Advanced Settings (Opsiyonel)

Dodo Payments panelinde "Advanced Settings" bölümünden:
- Kullanıcı bilgilerini önceden doldurabilirsiniz
- Hangi alanların gösterileceğini/gizleneceğini ayarlayabilirsiniz
- Discount kodlarını aktif edebilirsiniz

## 💻 Kod Yapısı

### 1. Payment Komponenti (`components/payment.tsx`)

Ana ödeme komponenti. Özellikler:
- Modal dialog ile ödeme linki oluşturma
- Miktar seçimi
- Ödeme linkini kopyalama
- Dodo Payments checkout sayfasına yönlendirme
- Environment variable desteği

**Kullanım:**
```tsx
import { Payment } from "@/components/payment";

// Basit kullanım
<Payment />

// Özelleştirilmiş kullanım
<Payment
  productId="pdt_XXXXX"
  productName="Ürün Adı"
  price="$10.00"
  redirectUrl="https://example.com/success"
/>
```

**Props:**
- `productId?`: Product ID (varsayılan: env variable veya hardcoded)
- `productName?`: Ürün adı (varsayılan: "fsoymaz portfolio")
- `price?`: Fiyat (varsayılan: "$0.10")
- `redirectUrl?`: Yönlendirme URL'i (varsayılan: ana sayfa)

### 2. Success Sayfası (`app/payment/success/page.tsx`)

Ödeme başarılı olduğunda gösterilen sayfa. URL parametrelerinden:
- `transaction_id`: İşlem ID'si
- `amount`: Ödeme tutarı

### 3. Error Sayfası (`app/payment/error/page.tsx`)

Ödeme başarısız olduğunda gösterilen sayfa. URL parametrelerinden:
- `error`: Hata kodu
- `error_message`: Hata mesajı

### 4. Layout Güncellemesi (`app/layout.tsx`)

Toaster komponenti eklendi (bildirimler için):
```tsx
import { Toaster } from "@/components/ui/sonner";

// body içinde
<Toaster />
```

## 🚀 Kullanım

### 1. Environment Variables (Opsiyonel)

`.env.local` dosyası oluşturun:
```env
NEXT_PUBLIC_DODO_PRODUCT_ID=pdt_jk1u2M6XEnUMxSIIk1K7C
NEXT_PUBLIC_DODO_REDIRECT_URL=https://fsoymaz.github.io/payment/success
```

### 2. Komponenti Sayfaya Ekleme

**Hero bölümüne ekleme:**
```tsx
// components/hero.tsx
import { Payment } from "@/components/payment";

// Butonların yanına
<Payment />
```

**Footer'a ekleme:**
```tsx
// components/footer.tsx
import { Payment } from "@/components/payment";

// Footer içinde
<Payment />
```

### 3. Ödeme Akışı

1. Kullanıcı "Kahve Al" butonuna tıklar
2. Modal açılır
3. Kullanıcı miktar seçer
4. Ödeme linki oluşturulur
5. "Ödemeye Git" butonuna tıklanır
6. Dodo Payments checkout sayfası açılır
7. Ödeme tamamlandıktan sonra `redirect_url`'e yönlendirilir

## ⚠️ Önemli Notlar

### 1. Product ID Doğruluğu
- Product ID'deki her karakter önemlidir
- Büyük/küçük harf farkı vardır
- Dodo Payments panelinden kopyalarken dikkatli olun

### 2. Redirect URL
- `redirect_url` parametresi URL encode edilmelidir
- Kod otomatik olarak `encodeURIComponent()` kullanır
- Ödeme sonrası yönlendirme için gerekli

### 3. Settlement Süresi
- Ödemeler "Successful" olsa bile balance'a yansıması zaman alabilir
- Genellikle birkaç saat içinde görünür
- Payouts için minimum $50.00 eşiği gereklidir

### 4. Currency (Para Birimi)
- Ödemeler farklı para birimlerinde olabilir (USD, TRY, vb.)
- Balances bölümünde para birimini kontrol edin
- "$ Currency" butonundan para birimini değiştirebilirsiniz

### 5. Test vs Live Mode
- Test Mode'da gerçek ödeme alınmaz
- Live Mode'da gerçek ödemeler işlenir
- Production'da mutlaka Live Mode kullanın

## 🔍 Sorun Giderme

### 1. "Not Found" Hatası

**Sorun**: Ödeme linki açıldığında "Something went wrong" hatası alınıyor.

**Çözümler:**
- Product ID'yi kontrol edin (karakterler doğru mu?)
- Ürünün aktif olduğundan emin olun
- Live Mode'da olduğunuzu kontrol edin
- Link formatını kontrol edin

### 2. Ödeme Görünmüyor

**Sorun**: Ödeme "Successful" ama balance'da görünmüyor.

**Çözümler:**
- Birkaç saat bekleyin (settlement süresi)
- Para birimini kontrol edin (USD vs TRY)
- "View Breakdown" butonuna tıklayın
- Transactions > Payments bölümünü kontrol edin

### 3. Build Hatası

**Sorun**: GitHub Actions'da build başarısız.

**Çözümler:**
- `useSearchParams()` Suspense ile sarmalanmalı
- Success/Error sayfalarında Suspense boundary kullanın
- TypeScript hatalarını kontrol edin

### 4. Modal Açılmıyor

**Sorun**: "Kahve Al" butonuna tıklanınca modal açılmıyor.

**Çözümler:**
- Toaster komponenti layout'a eklendi mi?
- Console'da hata var mı kontrol edin
- Dialog komponenti doğru import edildi mi?

## 📝 Örnek Kod

### Basit Kullanım
```tsx
import { Payment } from "@/components/payment";

export default function Home() {
  return (
    <div>
      <Payment />
    </div>
  );
}
```

### Özelleştirilmiş Kullanım
```tsx
import { Payment } from "@/components/payment";

export default function Home() {
  return (
    <div>
      <Payment
        productId="pdt_custom123"
        productName="Özel Ürün"
        price="$25.00"
        redirectUrl="https://example.com/thank-you"
      />
    </div>
  );
}
```

## 🔗 Faydalı Linkler

- [Dodo Payments Dashboard](https://app.dodopayments.com)
- [Dodo Payments Dokümantasyon](https://docs.dodopayments.com)
- [Next.js Dokümantasyon](https://nextjs.org/docs)

## 📄 Lisans

Bu entegrasyon örnek amaçlıdır. Kendi projenizde kullanırken Dodo Payments'in kullanım koşullarına uygun hareket edin.

---

**Son Güncelleme**: 2025-01-XX
**Versiyon**: 1.0.0

