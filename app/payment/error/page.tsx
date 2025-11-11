"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { XCircle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

function PaymentErrorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get("error");
  const errorMessage = searchParams.get("error_message");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-muted/20 via-background to-background">
      <Card className="max-w-md w-full border-2 border-destructive/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-destructive/10 p-4">
              <XCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-3xl">Ödeme Başarısız</CardTitle>
          <CardDescription className="text-base">
            Ödeme işlemi tamamlanamadı. Lütfen tekrar deneyin veya farklı bir
            ödeme yöntemi kullanın.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <div className="rounded-lg bg-destructive/10 p-4 space-y-2 border border-destructive/20">
              <div className="text-sm font-semibold text-destructive">
                Hata Detayı:
              </div>
              <div className="text-sm text-muted-foreground">
                {errorMessage || error}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Button onClick={() => router.back()} size="lg" className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Tekrar Dene
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Ana Sayfaya Dön
              </Link>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-4">
            Sorun devam ederse lütfen bizimle iletişime geçin. Size yardımcı
            olmaktan memnuniyet duyarız.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Yükleniyor...</div>
        </div>
      }
    >
      <PaymentErrorContent />
    </Suspense>
  );
}
