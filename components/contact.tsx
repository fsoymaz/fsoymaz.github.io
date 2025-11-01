"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  DotsPattern,
  AnimatedMeshGradient,
} from "@/components/background-patterns";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      alert(
        "Formspree kimliği ayarlı değil. Lütfen NEXT_PUBLIC_FORMSPREE_ID ekleyin."
      );
      return;
    }
    try {
      setSubmitting(true);
      setSent(null);
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSent("ok");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSent("err");
      }
    } catch {
      setSent("err");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-muted/20 via-background to-background"
    >
      {/* Creative Background for Contact */}
      <AnimatedMeshGradient className="opacity-40" />
      <DotsPattern className="opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--accent)/0.08),_transparent)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight">
              İletişime Geçin
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto pt-4">
              Bir projeniz mi var? Birlikte çalışmak ister misiniz? Benimle
              iletişime geçmekten çekinmeyin!
            </p>
          </div>

          {/* İki sütunlu düzen: Sol bilgi kartları, sağ form */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Sorularınız, önerileriniz veya iş birliği talepleriniz için bana
                ulaşabilirsiniz. En kısa sürede geri dönüş yaparım.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-base mb-1">Adres</div>
                      <div className="text-sm text-muted-foreground">
                        İstanbul, Türkiye
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-base mb-1">
                        E‑posta
                      </div>
                      <a
                        href="mailto:fthsymz60@gmail.com"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        fthsymz60@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-base mb-1">
                        Telefon
                      </div>
                      <a
                        href="tel:+905551402602"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        +90 555 140 26 02
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-base mb-1">
                        Çalışma Saatleri
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Hafta içi: 09:00 – 18:00
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl md:text-3xl">
                  Mesaj Gönderin
                </CardTitle>
                <CardDescription className="text-base md:text-lg pt-2">
                  Tüm alanları doldurarak bana ulaşabilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 pb-4 md:pt-6 md:pb-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ad Soyad</Label>
                      <Input
                        id="name"
                        placeholder="Adınız ve soyadınız"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E‑posta</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        placeholder="+90 (5xx) xxx xx xx"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Konu</Label>
                      <Select>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Konu seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="genel">Genel</SelectItem>
                          <SelectItem value="teklif">Proje Teklifi</SelectItem>
                          <SelectItem value="isbirligi">İş Birliği</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı buraya yazınız..."
                      rows={7}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="min-h-[140px] text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 md:h-14 text-base md:text-lg gap-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 disabled:opacity-70 transition-all hover:shadow-lg"
                    size="lg"
                  >
                    <Send className="h-5 w-5" />{" "}
                    {submitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </Button>
                  {sent === "ok" && (
                    <p className="text-sm text-emerald-600">
                      Mesajınız gönderildi. Teşekkürler!
                    </p>
                  )}
                  {sent === "err" && (
                    <p className="text-sm text-red-600">
                      Gönderim başarısız. Lütfen daha sonra tekrar deneyin.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
