import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://fsoymaz.github.io";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"], // Eğer varsa
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

