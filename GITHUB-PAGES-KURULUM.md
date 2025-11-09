# GitHub Pages Kurulum Rehberi

Bu rehber, sitenizi GitHub Pages'te yayınlamak için gerekli adımları içerir.

## ✅ Otomatik Deploy (GitHub Actions)

GitHub Actions workflow dosyası oluşturuldu. Artık her `main` branch'ine push yaptığınızda otomatik olarak deploy edilecek.

### Yapılması Gerekenler:

1. **GitHub Repository Ayarları:**
   - GitHub repo'nuzda → **Settings** → **Pages** bölümüne gidin
   - **Source** olarak **"GitHub Actions"** seçin
   - Kaydedin

2. **İlk Deploy:**
   - Bu dosyayı commit edip push yapın:
   ```bash
   git add .
   git commit -m "GitHub Actions deploy workflow eklendi"
   git push
   ```

3. **Deploy Durumunu Kontrol:**
   - GitHub repo'nuzda → **Actions** sekmesine gidin
   - Workflow'un çalıştığını göreceksiniz
   - Başarılı olduğunda siteniz `https://fsoymaz.github.io` adresinde yayında olacak

## 🔧 Manuel Deploy (Alternatif)

Eğer GitHub Actions kullanmak istemiyorsanız:

1. **Build yapın:**
   ```bash
   pnpm build
   ```

2. **out klasörünü root'a kopyalayın:**
   ```bash
   cp -r out/* .
   ```

3. **GitHub Pages ayarlarında:**
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`

## ⚠️ Önemli Notlar

- `.nojekyll` dosyası build sırasında otomatik oluşturuluyor
- `404.html` dosyası otomatik kopyalanıyor
- GitHub Pages HTTPS kullanır (SSL otomatik)

## 🐛 Sorun Giderme

### 404 Hatası:
- GitHub Pages ayarlarında source'un "GitHub Actions" olduğundan emin olun
- Actions sekmesinde deploy'un başarılı olduğunu kontrol edin

### Build Hatası:
- `pnpm install` komutunu çalıştırın
- Node.js versiyonunun 20 olduğundan emin olun

## 📚 Daha Fazla Bilgi

- [GitHub Pages Dokümantasyonu](https://docs.github.com/en/pages)
- [GitHub Actions Dokümantasyonu](https://docs.github.com/en/actions)

