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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance tracking-tight">
              İletişime Geçin
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bir projeniz mi var? Birlikte çalışmak ister misiniz? Benimle
              iletişime geçmekten çekinmeyin!
            </p>
          </div>

          {/* İki sütunlu düzen: Sol bilgi kartları, sağ form */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Sorularınız, önerileriniz veya iş birliği talepleriniz için bana
                ulaşabilirsiniz. En kısa sürede geri dönüş yaparım.
              </p>

              <div className="space-y-4">
                <Card className="border-transparent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-5 flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-medium">Adres</div>
                      <div className="text-sm text-muted-foreground">
                        İstanbul, Türkiye
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-transparent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-5 flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-medium">E‑posta</div>
                      <a
                        href="mailto:fthsymz60@gmail.com"
                        className="text-sm text-muted-foreground hover:text-accent"
                      >
                        fthsymz60@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-transparent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-5 flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-medium">Telefon</div>
                      <a
                        href="tel:+905551402602"
                        className="text-sm text-muted-foreground hover:text-accent"
                      >
                        +90 555 140 26 02
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-transparent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-5 flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-medium">Çalışma Saatleri</div>
                      <div className="text-sm text-muted-foreground">
                        Hafta içi: 09:00 – 18:00
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="max-w-3xl border-muted-foreground/10 shadow-md">
              <CardHeader className="pb-2 md:pb-3">
                <CardTitle className="text-2xl">Mesaj Gönderin</CardTitle>
                <CardDescription className="text-base">
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
                    className="w-full h-12 text-base gap-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent disabled:opacity-70"
                    size="lg"
                  >
                    <Send className="h-4 w-4" />{" "}
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
