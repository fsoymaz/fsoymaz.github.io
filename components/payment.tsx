"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Coffee, Copy, ExternalLink, Check } from "lucide-react";
import { toast } from "sonner";

interface PaymentProps {
  productId?: string;
  productName?: string;
  price?: string;
  redirectUrl?: string;
}

export function Payment({
  productId,
  productName = "fsoymaz portfolio",
  price = "$0.10",
  redirectUrl,
}: PaymentProps) {
  // Environment variable'dan product ID'yi al, yoksa default değeri kullan
  const finalProductId =
    productId ||
    (typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_DODO_PRODUCT_ID
      : undefined) ||
    "pdt_jk1u2M6XEnUMxSlIk1K7C";
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Redirect URL'i dinamik olarak al
  const getRedirectUrl = () => {
    if (redirectUrl) return redirectUrl;
    // Environment variable'dan redirect URL'i al
    const envRedirectUrl =
      typeof window !== "undefined"
        ? process.env.NEXT_PUBLIC_DODO_REDIRECT_URL
        : undefined;
    if (envRedirectUrl) return envRedirectUrl;
    // Varsayılan olarak success sayfasına yönlendir
    if (typeof window !== "undefined") {
      return `${window.location.origin}/payment/success`;
    }
    return "https://fsoymaz.github.io/payment/success";
  };

  // Ödeme linkini oluştur
  const generatePaymentLink = () => {
    const baseUrl = "https://checkout.dodopayments.com/buy";
    const redirect = encodeURIComponent(getRedirectUrl());
    return `${baseUrl}/${finalProductId}?quantity=${quantity}&redirect_url=${redirect}`;
  };

  const paymentLink = generatePaymentLink();

  // Linki kopyala
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(paymentLink);
      setCopied(true);
      toast.success("Ödeme linki kopyalandı!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Link kopyalanamadı");
    }
  };

  // Ödemeye yönlendir
  const handlePayment = () => {
    window.open(paymentLink, "_blank");
    setOpen(false);
    toast.success("Ödeme sayfasına yönlendiriliyorsunuz...");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="gap-2 h-12 px-8 text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
        >
          <Coffee className="h-4 w-4" />
          Kahve Al
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Coffee className="h-5 w-5 text-amber-500" />
            {productName} : Ödeme Linki
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Ödeme yapmadan önce ürün miktarını doğru girdiğinizden emin olun.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-base">
              Ürün Miktarı
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 1;
                setQuantity(Math.max(1, value));
              }}
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="redirect-url" className="text-base">
              Yönlendirme URL'i
            </Label>
            <Input
              id="redirect-url"
              type="text"
              value={getRedirectUrl()}
              readOnly
              className="h-12 text-base bg-muted"
            />
            <p className="text-sm text-muted-foreground">
              Ödeme tamamlandıktan sonra bu adrese yönlendirileceksiniz.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment-link" className="text-base">
              Ödeme Linki
            </Label>
            <div className="flex gap-2">
              <Input
                id="payment-link"
                type="text"
                value={paymentLink}
                readOnly
                className="h-12 text-base bg-muted font-mono text-sm"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-12 w-12"
                onClick={handleCopyLink}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Toplam Tutar:
              </span>
              <span className="text-lg font-semibold">
                {price} × {quantity} = $
                {(parseFloat(price.replace("$", "")) * quantity).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto"
          >
            Kapat
          </Button>
          <Button
            type="button"
            onClick={handlePayment}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Ödemeye Git
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
