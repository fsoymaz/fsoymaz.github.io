"use client";

import { useEffect } from "react";
import Script from "next/script";

interface GoogleAdSenseProps {
  clientId: string;
  slot?: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  style?: React.CSSProperties;
  className?: string;
  responsive?: boolean;
}

export function GoogleAdSense({
  clientId,
  slot,
  format = "auto",
  style,
  className = "",
  responsive = true,
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className={`adsbygoogle ${className}`}
        style={{
          display: "block",
          ...style,
        }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </>
  );
}

// Önceden tanımlanmış banner boyutları
export function AdSenseBanner({
  clientId,
  slot,
  size = "responsive",
  className = "",
}: {
  clientId: string;
  slot?: string;
  size?: "responsive" | "728x90" | "300x250" | "320x100" | "970x250";
  className?: string;
}) {
  const sizeStyles: Record<string, React.CSSProperties> = {
    responsive: {
      width: "100%",
      minHeight: "90px",
    },
    "728x90": {
      width: "728px",
      height: "90px",
    },
    "300x250": {
      width: "300px",
      height: "250px",
    },
    "320x100": {
      width: "320px",
      height: "100px",
    },
    "970x250": {
      width: "970px",
      height: "250px",
    },
  };

  return (
    <div
      className={`flex justify-center items-center my-4 ${className}`}
      style={{ minHeight: size === "responsive" ? "90px" : undefined }}
    >
      <GoogleAdSense
        clientId={clientId}
        slot={slot}
        format="auto"
        style={sizeStyles[size]}
        responsive={size === "responsive"}
      />
    </div>
  );
}

// Sidebar için küçük banner
export function AdSenseSidebar({
  clientId,
  slot,
  className = "",
}: {
  clientId: string;
  slot?: string;
  className?: string;
}) {
  return (
    <div className={`sticky top-4 ${className}`}>
      <GoogleAdSense
        clientId={clientId}
        slot={slot}
        format="auto"
        style={{ width: "300px", minHeight: "250px" }}
        responsive={true}
      />
    </div>
  );
}

// İçerik arası banner (makale içi)
export function AdSenseInArticle({
  clientId,
  slot,
  className = "",
}: {
  clientId: string;
  slot?: string;
  className?: string;
}) {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <GoogleAdSense
        clientId={clientId}
        slot={slot}
        format="auto"
        style={{ width: "100%", maxWidth: "728px", minHeight: "90px" }}
        responsive={true}
      />
    </div>
  );
}
