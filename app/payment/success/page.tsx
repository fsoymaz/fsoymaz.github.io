"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Home, Coffee } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const transactionId = searchParams.get("transaction_id");
  const amount = searchParams.get("amount");

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-muted/20 via-background to-background">
      <Card className="max-w-md w-full border-2">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-500/10 p-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <CardTitle className="text-3xl">Ödeme Başarılı!</CardTitle>
          <CardDescription className="text-base">
            Ödemeniz başarıyla tamamlandı. Desteğiniz için teşekkür ederiz!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {transactionId && (
            <div className="rounded-lg bg-muted/50 p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">İşlem ID:</span>
                <span className="font-mono font-medium">{transactionId}</span>
              </div>
              {amount && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tutar:</span>
                  <span className="font-semibold">{amount}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Ana Sayfaya Dön
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full"
            >
              <Link href="/#contact">
                <Coffee className="h-4 w-4 mr-2" />
                İletişime Geç
              </Link>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-4">
            Ödeme işleminiz Dodo Payments tarafından işlenmiştir. Herhangi bir
            sorunuz varsa lütfen bizimle iletişime geçin.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

