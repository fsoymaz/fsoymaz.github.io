# GitHub Pages Ayarları - Adım Adım Rehber

## 🔴 ÖNEMLİ: GitHub Pages Ayarlarını Yapın

404 hatası alıyorsanız, muhtemelen GitHub Pages ayarları yanlış yapılandırılmış.

## ✅ Adım Adım Yapılacaklar

### 1. GitHub Repository'ye Gidin

1. Tarayıcınızda şu adrese gidin:
   ```
   https://github.com/fsoymaz/fsoymaz.github.io
   ```
   (veya repo adınız ne ise)

### 2. Settings → Pages Bölümüne Gidin

1. Repository sayfasında üst menüden **"Settings"** sekmesine tıklayın
2. Sol menüden **"Pages"** seçeneğine tıklayın

### 3. Source Ayarlarını Değiştirin

**ŞU ANDA MUHTEMELEN:**

- ❌ **"Deploy from a branch"** seçili
- Branch: `main` veya `gh-pages`
- Folder: `/ (root)` veya `/docs`

**OLMASI GEREKEN:**

- ✅ **"GitHub Actions"** seçili olmalı

### 4. Değişikliği Yapın

1. **"Source"** dropdown menüsünü açın
2. **"GitHub Actions"** seçeneğini seçin
3. **"Save"** butonuna tıklayın

### 5. Bekleyin ve Test Edin

1. 1-2 dakika bekleyin
2. `https://fsoymaz.github.io` adresini ziyaret edin
3. Hard refresh yapın: `Ctrl + Shift + R` (Windows) veya `Cmd + Shift + R` (Mac)

## 📸 Görsel Rehber

### Doğru Ayarlar:

```
Settings → Pages

Source: [GitHub Actions ▼]
         ✓ GitHub Actions  ← Bu seçili olmalı
         - Deploy from a branch
         - None
```

### Yanlış Ayarlar (Şu An Muhtemelen):

```
Settings → Pages

Source: [Deploy from a branch ▼]  ← Bu yanlış!
         - GitHub Actions
         ✓ Deploy from a branch
         - None

Branch: [main ▼]
Folder: [/ (root) ▼]
```

## 🔍 Kontrol Listesi

- [ ] GitHub Repository'ye gittim
- [ ] Settings → Pages bölümüne gittim
- [ ] Source'u "GitHub Actions" olarak değiştirdim
- [ ] Save butonuna tıkladım
- [ ] 1-2 dakika bekledim
- [ ] Siteyi test ettim

## ⚠️ Önemli Notlar

1. **Source "GitHub Actions" olmalı** - Bu en önemli adım!
2. **Deploy işlemi 1-5 dakika sürebilir** - Sabırlı olun
3. **Hard refresh yapın** - Tarayıcı cache'i sorun yaratabilir
4. **Actions sekmesinde deploy'un başarılı olduğundan emin olun**

## 🐛 Hala Çalışmıyorsa

1. **Actions sekmesini kontrol edin:**

   - En son workflow run'ın başarılı olduğundan emin olun
   - "Deploy to GitHub Pages" job'ının yeşil tik olduğundan emin olun

2. **Deploy edilen URL'i kontrol edin:**

   - Actions → En son workflow → Deploy job → "Deploy to GitHub Pages" step
   - URL'i kontrol edin

3. **Repository adını kontrol edin:**
   - Repository adı `fsoymaz.github.io` formatında olmalı
   - Eğer farklıysa, GitHub Pages URL'i farklı olabilir

## ✅ Başarı Kontrolü

Site çalışıyorsa şunları görmelisiniz:

- ✅ `https://fsoymaz.github.io` - Ana sayfa yükleniyor
- ✅ Site içeriği görünüyor (404 hatası yok)
- ✅ Google Search Console'da doğrulama yapabilirsiniz
