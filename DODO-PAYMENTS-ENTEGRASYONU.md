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

**React/Next.js için gerekli paketler:**

- `sonner` (toast bildirimleri için)
- `@radix-ui/react-dialog` (modal için)
- `lucide-react` (ikonlar için)

**Pure JavaScript için:**

- Hiçbir npm paketi gerekmez
- Sadece vanilla JavaScript kullanılır
- İsteğe bağlı: Toast bildirimleri için basit bir kütüphane (örn: `toastify-js`) veya custom implementasyon

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
<Toaster />;
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
<Payment />;
```

**Footer'a ekleme:**

```tsx
// components/footer.tsx
import { Payment } from "@/components/payment";

// Footer içinde
<Payment />;
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

## 🌐 Pure JavaScript (Vanilla JS) Versiyonu

React/Next.js kullanmıyorsanız, pure JavaScript versiyonunu kullanabilirsiniz.

### Kurulum

1. **HTML'e ekleyin:**

```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dodo Payments Entegrasyonu</title>
    <style>
      /* Modal stilleri */
      .payment-modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .payment-modal-content {
        background-color: #1a1a1a;
        margin: 5% auto;
        padding: 20px;
        border: 1px solid #333;
        width: 90%;
        max-width: 500px;
        border-radius: 8px;
      }
      .payment-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      .payment-modal-close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
      }
      .payment-modal-close:hover {
        color: #fff;
      }
      .payment-input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        background: #2a2a2a;
        border: 1px solid #444;
        border-radius: 4px;
        color: #fff;
      }
      .payment-button {
        padding: 12px 24px;
        background: linear-gradient(to right, #f59e0b, #ea580c);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
      }
      .payment-button:hover {
        opacity: 0.9;
      }
    </style>
  </head>
  <body>
    <!-- Ödeme Butonu -->
    <button id="paymentBtn" class="payment-button">Kahve Al</button>

    <!-- Modal -->
    <div id="paymentModal" class="payment-modal">
      <div class="payment-modal-content">
        <div class="payment-modal-header">
          <h2>Ödeme Linki</h2>
          <span class="payment-modal-close" id="closeModal">&times;</span>
        </div>
        <div>
          <label>Ürün Miktarı:</label>
          <input
            type="number"
            id="quantity"
            class="payment-input"
            value="1"
            min="1"
          />
        </div>
        <div>
          <label>Ürün ID:</label>
          <input
            type="text"
            id="productId"
            class="payment-input"
            value="pdt_jk1u2M6XEnUMxSIIk1K7C"
            readonly
          />
        </div>
        <div>
          <label>Yönlendirme URL'i:</label>
          <input
            type="text"
            id="redirectUrl"
            class="payment-input"
            value="https://example.com"
            readonly
          />
        </div>
        <div>
          <label>Ödeme Linki:</label>
          <input type="text" id="paymentLink" class="payment-input" readonly />
        </div>
        <div style="margin-top: 20px;">
          <button onclick="copyLink()" class="payment-button">
            Linki Kopyala
          </button>
          <button
            onclick="goToPayment()"
            class="payment-button"
            style="margin-left: 10px;"
          >
            Ödemeye Git
          </button>
        </div>
      </div>
    </div>

    <script src="dodo-payment.js"></script>
  </body>
</html>
```

2. **JavaScript dosyası oluşturun (`dodo-payment.js`):**

```javascript
// Dodo Payments Entegrasyonu - Pure JavaScript
class DodoPayment {
  constructor(config = {}) {
    this.productId = config.productId || "pdt_jk1u2M6XEnUMxSIIk1K7C";
    this.productName = config.productName || "fsoymaz portfolio";
    this.price = config.price || "$0.10";
    this.redirectUrl = config.redirectUrl || window.location.origin;
    this.baseUrl = "https://checkout.dodopayments.com/buy";

    this.init();
  }

  init() {
    const modal = document.getElementById("paymentModal");
    const btn = document.getElementById("paymentBtn");
    const closeBtn = document.getElementById("closeModal");
    const quantityInput = document.getElementById("quantity");

    // Modal açma
    if (btn) {
      btn.addEventListener("click", () => {
        this.updatePaymentLink();
        modal.style.display = "block";
      });
    }

    // Modal kapatma
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    // Dışarı tıklayınca kapat
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // Miktar değiştiğinde linki güncelle
    if (quantityInput) {
      quantityInput.addEventListener("input", () => {
        this.updatePaymentLink();
      });
    }

    // İlk linki oluştur
    this.updatePaymentLink();
  }

  generatePaymentLink(quantity = 1) {
    const redirect = encodeURIComponent(this.redirectUrl);
    return `${this.baseUrl}/${this.productId}?quantity=${quantity}&redirect_url=${redirect}`;
  }

  updatePaymentLink() {
    const quantityInput = document.getElementById("quantity");
    const paymentLinkInput = document.getElementById("paymentLink");
    const productIdInput = document.getElementById("productId");
    const redirectUrlInput = document.getElementById("redirectUrl");

    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
    const link = this.generatePaymentLink(quantity);

    if (paymentLinkInput) {
      paymentLinkInput.value = link;
    }
    if (productIdInput) {
      productIdInput.value = this.productId;
    }
    if (redirectUrlInput) {
      redirectUrlInput.value = this.redirectUrl;
    }
  }

  copyLink() {
    const paymentLinkInput = document.getElementById("paymentLink");
    if (paymentLinkInput) {
      paymentLinkInput.select();
      document.execCommand("copy");
      this.showToast("Ödeme linki kopyalandı!", "success");
    }
  }

  goToPayment() {
    const quantityInput = document.getElementById("quantity");
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
    const link = this.generatePaymentLink(quantity);

    console.log("Opening Payment Link:", link);
    window.open(link, "_blank", "noopener,noreferrer");

    const modal = document.getElementById("paymentModal");
    if (modal) {
      modal.style.display = "none";
    }

    this.showToast("Ödeme sayfasına yönlendiriliyorsunuz...", "success");
  }

  showToast(message, type = "info") {
    // Basit toast implementasyonu
    const toast = document.createElement("div");
    toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            background: ${type === "success" ? "#10b981" : "#3b82f6"};
            color: white;
            border-radius: 6px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideOut 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Global fonksiyonlar (HTML'den çağrılabilir)
function copyLink() {
  if (window.dodoPayment) {
    window.dodoPayment.copyLink();
  }
}

function goToPayment() {
  if (window.dodoPayment) {
    window.dodoPayment.goToPayment();
  }
}

// Sayfa yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", () => {
  // Yapılandırma (isteğe bağlı)
  const config = {
    productId: "pdt_jk1u2M6XEnUMxSIIk1K7C", // Environment variable'dan veya config'den alınabilir
    productName: "fsoymaz portfolio",
    price: "$0.10",
    redirectUrl: window.location.origin, // veya 'https://example.com/success'
  };

  window.dodoPayment = new DodoPayment(config);
});
```

### Kullanım

**Basit kullanım:**

```html
<script src="dodo-payment.js"></script>
<button id="paymentBtn">Kahve Al</button>
```

**Özelleştirilmiş kullanım:**

```javascript
const payment = new DodoPayment({
  productId: "pdt_custom123",
  productName: "Özel Ürün",
  price: "$25.00",
  redirectUrl: "https://example.com/success",
});
```

### Bağımlılıklar

**Pure JavaScript versiyonu için:**

- ✅ Hiçbir npm paketi gerekmez
- ✅ Sadece vanilla JavaScript
- ✅ Modern tarayıcı desteği (ES6+)
- ✅ CSS (custom veya Tailwind)

**Opsiyonel iyileştirmeler:**

- Toast bildirimleri için: `toastify-js` (npm: `toastify-js`)
- İkonlar için: Font Awesome veya SVG ikonlar
- Modal için: Daha gelişmiş bir modal kütüphanesi (isteğe bağlı)

### Avantajlar

- ✅ Framework bağımlılığı yok
- ✅ Küçük dosya boyutu
- ✅ Kolay entegrasyon
- ✅ Herhangi bir projede kullanılabilir

## 📄 Lisans

Bu entegrasyon örnek amaçlıdır. Kendi projenizde kullanırken Dodo Payments'in kullanım koşullarına uygun hareket edin.

---

**Son Güncelleme**: 2025-01-XX
**Versiyon**: 1.0.0
