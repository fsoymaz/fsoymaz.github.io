export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Hakkımda</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                42 Okulları'nda 2 yıl eğitim aldıktan sonra Hepsiburada'da 12 ay staj yaptım. Önce Quality Assurance
                tarafında manuel ve otomasyon (Cypress) testleri geliştirdim; ardından backend alanına geçerek .NET ile
                servis geliştirme deneyimi kazandım.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Test süreçlerinde kalite odaklı yaklaşım benimsiyorum; API tasarımında temiz mimari, dokümantasyon ve
                otomasyonla sürdürülebilirliği önemsiyorum. Şu an .NET/C# ekosisteminde derinleşirken, web teknolojileri
                ve ürün geliştirme pratiklerine devam ediyorum.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Deneyim</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-accent pl-4 py-2">
                    <p className="font-medium">Stajyer • Quality Assurance → Backend (.NET)</p>
                    <p className="text-sm text-muted-foreground">Hepsiburada • 12 Ay</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Eğitim</h3>
                <div className="border-l-2 border-accent pl-4 py-2">
                  <p className="font-medium">42 Okulları</p>
                  <p className="text-sm text-muted-foreground">2 Yıl • Yazılım ve Problem Çözme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
