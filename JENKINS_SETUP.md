# Jenkins CI/CD Kurulum Rehberi

## Gereksinimler

- Jenkins 2.400+
- .NET 8 SDK
- Node.js 18+
- Git

## Jenkins Plugin'leri

Aşağıdaki plugin'leri Jenkins'e yükleyin:

- Git Plugin
- GitHub Plugin (opsiyonel, webhook için)
- Pipeline Plugin
- NodeJS Plugin (opsiyonel)

## Jenkins Pipeline Kurulumu

### 1. Yeni Pipeline Job Oluşturma

1. Jenkins ana sayfasında "New Item" tıklayın
2. "Pipeline" seçin ve bir isim verin (örn: `fsoymaz-github-io`)
3. "OK" tıklayın

### 2. Pipeline Yapılandırması

1. "Pipeline" sekmesine gidin
2. "Definition" altında "Pipeline script from SCM" seçin
3. "SCM" altında "Git" seçin
4. Repository URL'i girin: `https://github.com/fsoymaz/fsoymaz.github.io.git`
5. Credentials ekleyin (gerekirse)
6. "Branch Specifier" için:
   - Test branch için: `*/test`
   - Main branch için: `*/main`
   - Veya tüm branch'ler için: `*/**`
7. "Script Path" için: `Jenkinsfile`
8. "Save" tıklayın

### 3. Environment Variables

Pipeline'da kullanılacak environment variable'ları Jenkins'te tanımlayın:

**Global Environment Variables (Önerilen):**

1. Jenkins → Manage Jenkins → Configure System
2. "Global properties" → "Environment variables" işaretleyin
3. Şu variable'ları ekleyin:
   - `GITHUB_TOKEN`: GitHub personal access token (GitHub Pages deploy için)
   - `GITHUB_REPO`: Repository adı (örn: `fsoymaz/fsoymaz.github.io`)

**Veya Job Seviyesinde:**

1. Job yapılandırmasına gidin
2. "This build is parameterized" işaretleyin
3. "String Parameter" ekleyin:
   - Name: `GITHUB_TOKEN`
   - Default Value: (token'ınızı girin)
4. "String Parameter" ekleyin:
   - Name: `GITHUB_REPO`
   - Default Value: `fsoymaz/fsoymaz.github.io`

### 4. GitHub Token Oluşturma

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" tıklayın
3. İzinler:
   - `repo` (tam erişim)
   - `workflow` (GitHub Actions için, opsiyonel)
4. Token'ı kopyalayın ve Jenkins'te `GITHUB_TOKEN` olarak ekleyin

### 5. Polling veya Webhook Yapılandırması

#### Polling (Basit Yöntem)

1. Job yapılandırmasında "Build Triggers" sekmesine gidin
2. "Poll SCM" işaretleyin
3. Schedule: `H/5 * * * *` (her 5 dakikada bir kontrol eder)

#### Webhook (Önerilen)

1. GitHub repository → Settings → Webhooks
2. "Add webhook" tıklayın
3. Payload URL: `http://your-jenkins-url/github-webhook/`
4. Content type: `application/json`
5. Events: "Just the push event" seçin
6. "Add webhook" tıklayın

Jenkins'te:

1. Job yapılandırmasında "Build Triggers" sekmesine gidin
2. "GitHub hook trigger for GITScm polling" işaretleyin

## Pipeline Akışı

### Test Branch

1. Test branch'e push yapıldığında Jenkins pipeline tetiklenir
2. Backend build edilir
3. **Unit testler çalıştırılır**
4. Eğer testler başarısız olursa:
   - Pipeline durur
   - Main branch'e merge yapılmaz
   - Önceki deployment aktif kalır
5. Eğer testler başarılı olursa:
   - Frontend build edilir
   - Otomatik olarak main branch'e merge yapılır

### Main Branch

1. Main branch'e push yapıldığında (test'ten merge veya manuel)
2. Backend build edilir
3. Frontend build edilir
4. GitHub Pages'e deploy edilir
5. `https://fsoymaz.github.io` adresinde görünür

### Manuel Deploy

1. Jenkins'te job'u açın
2. "Build with Parameters" tıklayın (eğer parametreli ise)
3. Veya direkt "Build Now" tıklayın
4. Pipeline çalışır ve production'a deploy edilir

## Test Dosyaları

Test dosyaları (`Backend.Tests/`) sadece test branch'inde kalır ve main branch'e merge edilmez. Bu `.gitattributes` dosyası ile yönetilir.

## Troubleshooting

### .NET 8 Bulunamıyor

Jenkinsfile'da .NET 8 otomatik yüklenir, ancak sorun yaşarsanız:

- Jenkins sunucusuna manuel olarak .NET 8 SDK yükleyin
- PATH'e ekleyin

### Node.js Bulunamıyor

Jenkinsfile'da Node.js otomatik yüklenir (nvm ile), ancak sorun yaşarsanız:

- Jenkins NodeJS Plugin kullanın
- Veya Jenkins sunucusuna manuel olarak Node.js yükleyin

### GitHub Token Hatası

- Token'ın doğru izinlere sahip olduğundan emin olun
- Jenkins'te credentials'ın doğru tanımlandığını kontrol edin

## Test Sonuçları

Test sonuçları Jenkins'te "Test Results" sekmesinde görüntülenir. TRX formatında kaydedilir.
