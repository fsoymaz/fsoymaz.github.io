"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

export function ConditionalAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Sadece Vercel domain'inde Analytics yükle
    // GitHub Pages'te devre dışı
    if (
      typeof window !== "undefined" &&
      !window.location.hostname.includes("github.io")
    ) {
      setShouldLoad(true);
    }
  }, []);

  if (!shouldLoad) return null;

  return <Analytics />;
}
