# fsoymaz.github.io

Bu proje .NET Core 8 backend ve React frontend içeren bir full-stack uygulamadır.

## Proje Yapısı

- `Backend/` - .NET Core 8 Web API projesi
- `frontend/` - React TypeScript frontend projesi

## Özellikler

- Kullanıcı kaydı (Register)
- Kullanıcı girişi (Login)
- Ana sayfa (Home)
- PostgreSQL veritabanı entegrasyonu

## Gereksinimler

- .NET 8 SDK
- Node.js 18+
- PostgreSQL

## Kurulum

### Backend

```bash
cd Backend
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
```

Backend varsayılan olarak `http://localhost:5000` adresinde çalışır.

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Veritabanı Yapılandırması

`Backend/appsettings.json` dosyasında PostgreSQL connection string'i yapılandırın:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=fsoymaz_db;Username=postgres;Password=postgres"
  }
}
```

## CI/CD Pipeline

Proje **Jenkins** ile otomatik deploy edilir:

1. **Test Branch**: 
   - Test branch'e push yapıldığında Jenkins pipeline tetiklenir
   - Backend build edilir
   - **Unit testler çalıştırılır**
   - Eğer testler başarısız olursa: Pipeline durur, main branch'e merge yapılmaz, önceki deployment aktif kalır
   - Eğer testler başarılı olursa: Frontend build edilir ve otomatik olarak main branch'e merge edilir
   - **Test dosyaları (Backend.Tests/) main branch'e merge edilmez, sadece test branch'inde kalır**

2. **Main Branch**: 
   - Test branch'ten başarılı merge veya manuel push
   - Backend ve Frontend build edilir
   - GitHub Pages'e deploy edilir

3. **Manuel Deploy**: 
   - Jenkins'te manuel olarak pipeline çalıştırılabilir

Detaylı Jenkins kurulum bilgileri için `JENKINS_SETUP.md` dosyasına bakın.

## Unit Tests

Backend için kapsamlı unit testler yazılmıştır:
- Register endpoint testleri
- Login endpoint testleri
- Email/Username duplicate kontrol testleri
- Password validation testleri

Testler `Backend.Tests/` klasöründe bulunur ve sadece test branch'inde kalır.

## GitHub Pages

Uygulama `https://fsoymaz.github.io` adresinde yayınlanır.

