# GitHub Pages 404 Hatası Çözüm Rehberi

## ✅ Kontrol Listesi

### 1. GitHub Pages Ayarlarını Kontrol Edin

1. **GitHub Repository'ye gidin:**
   - `https://github.com/fsoymaz/fsoymaz.github.io` (veya repo adınız)

2. **Settings → Pages** bölümüne gidin

3. **Source** ayarını kontrol edin:
   - ✅ **"GitHub Actions"** seçili olmalı
   - ❌ "Deploy from a branch" seçili ise, "GitHub Actions" olarak değiştirin

4. **Kaydedin**

### 2. GitHub Actions Deploy Durumunu Kontrol Edin

1. **Actions** sekmesine gidin
2. En son workflow run'ı kontrol edin
3. **"Deploy to GitHub Pages"** job'ının başarılı olduğundan emin olun
4. Eğer hata varsa, log'lara bakın

### 3. Deploy Edilen Dosyaları Kontrol Edin

1. **Actions** sekmesinde başarılı workflow run'a tıklayın
2. **"Deploy to GitHub Pages"** job'ına tıklayın
3. **"Deploy to GitHub Pages"** step'ine tıklayın
4. Deploy edilen URL'i kontrol edin

### 4. Cache Temizleme

Bazen tarayıcı cache'i sorun yaratabilir:

1. **Hard Refresh yapın:**
   - Windows/Linux: `Ctrl + Shift + R` veya `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Incognito/Private Mode'da test edin**

3. **Farklı tarayıcıda test edin**

### 5. GitHub Pages'in Yayınlanmasını Bekleyin

GitHub Pages deploy işlemi 1-5 dakika sürebilir:

1. Deploy tamamlandıktan sonra 2-3 dakika bekleyin
2. `https://fsoymaz.github.io` adresini tekrar kontrol edin

## 🔧 Manuel Kontrol

### Build Çıktısını Kontrol Edin

```bash
# Build yapın
pnpm build

# out klasörünü kontrol edin
ls -la out/

# index.html dosyasının varlığını kontrol edin
test -f out/index.html && echo "✅ index.html var" || echo "❌ index.html yok"
```

### GitHub Pages URL'ini Test Edin

1. `https://fsoymaz.github.io/index.html` - Bu çalışmalı
2. `https://fsoymaz.github.io/` - Bu da çalışmalı

## 🐛 Yaygın Sorunlar ve Çözümleri

### Sorun 1: "Source" Yanlış Ayarlanmış

**Belirtiler:**
- Workflow başarılı ama site 404 veriyor
- GitHub Pages ayarlarında "Deploy from a branch" seçili

**Çözüm:**
- Settings → Pages → Source: "GitHub Actions" seçin

### Sorun 2: Deploy Henüz Tamamlanmamış

**Belirtiler:**
- Workflow çalışıyor ama henüz bitmemiş
- Actions sekmesinde "in progress" görünüyor

**Çözüm:**
- 2-3 dakika bekleyin ve tekrar kontrol edin

### Sorun 3: Cache Sorunu

**Belirtiler:**
- Başkaları siteyi görüyor ama siz göremiyorsunuz
- Hard refresh yaptıktan sonra çalışıyor

**Çözüm:**
- Hard refresh yapın veya incognito mode kullanın

### Sorun 4: Build Hatası

**Belirtiler:**
- Actions sekmesinde workflow başarısız
- Build step'inde hata var

**Çözüm:**
- Actions sekmesinde hata loglarını kontrol edin
- Build'i local'de test edin: `pnpm build`

## 📞 Hala Çalışmıyorsa

1. **GitHub Actions log'larını kontrol edin:**
   - Actions → En son workflow → Build job → Log'ları inceleyin

2. **Deploy edilen dosyaları kontrol edin:**
   - Actions → Deploy job → "Deploy to GitHub Pages" step → URL'i kontrol edin

3. **GitHub Pages ayarlarını tekrar kontrol edin:**
   - Settings → Pages → Source: "GitHub Actions" olduğundan emin olun

4. **Repository adını kontrol edin:**
   - Repository adı `fsoymaz.github.io` formatında olmalı
   - Eğer farklıysa, GitHub Pages URL'i farklı olabilir

## ✅ Başarı Kontrolü

Site çalışıyorsa şunları görmelisiniz:

- ✅ `https://fsoymaz.github.io` - Ana sayfa yükleniyor
- ✅ `https://fsoymaz.github.io/index.html` - Ana sayfa yükleniyor
- ✅ Google Search Console'da doğrulama başarılı
- ✅ Sitemap erişilebilir: `https://fsoymaz.github.io/sitemap.xml`

