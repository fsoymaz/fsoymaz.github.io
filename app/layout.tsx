import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Fatih Soymaz - Full Stack Developer | Yazılım Geliştirici | .NET & React Specialist | İstanbul",
    template: "%s | Fatih Soymaz",
  },
  description:
    "Full Stack Developer Fatih Soymaz. .NET backend, React/Next.js frontend geliştirme, Cypress test otomasyonu. Hepsiburada deneyimi ile kaliteli ve ölçeklenebilir yazılım çözümleri. Yazılım geliştirici, programcı, yazılım mühendisi, web geliştirici, mobil uygulama geliştirici.",
  keywords: [
    // İngilizce Keywords
    "Full Stack Developer",
    "Software Developer",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    ".NET Developer",
    "React Developer",
    "Next.js Developer",
    "C# Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "API Developer",
    "REST API Developer",
    "Software Engineer",
    "Web Engineer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Software Programmer",
    "Web Programmer",
    "Application Developer",
    "Mobile Developer",
    "Desktop Developer",
    "Cypress Test Automation",
    "QA Engineer",
    "Test Automation Engineer",
    "E2E Testing",
    "Software Testing",
    "API Development",
    "Web Development",
    "Software Development",
    "Application Development",
    "Custom Software Development",
    "Enterprise Software Development",
    "ASP.NET Core",
    "Entity Framework",
    "PostgreSQL Developer",
    "SQL Server Developer",
    "MongoDB Developer",
    "Redis Developer",
    "Docker Developer",
    "CI/CD Developer",
    "DevOps Engineer",
    // Türkçe Keywords
    "Yazılım Geliştirici",
    "Yazılım Mühendisi",
    "Programcı",
    "Web Geliştirici",
    "Backend Geliştirici",
    "Frontend Geliştirici",
    "Full Stack Geliştirici",
    ".NET Geliştirici",
    "React Geliştirici",
    "Next.js Geliştirici",
    "C# Geliştirici",
    "TypeScript Geliştirici",
    "JavaScript Geliştirici",
    "Node.js Geliştirici",
    "API Geliştirici",
    "REST API Geliştirici",
    "Yazılım Programcısı",
    "Web Programcısı",
    "Uygulama Geliştirici",
    "Mobil Uygulama Geliştirici",
    "Masaüstü Uygulama Geliştirici",
    "Test Otomasyon Mühendisi",
    "QA Mühendisi",
    "Yazılım Test Mühendisi",
    "E2E Test",
    "Yazılım Testi",
    "API Geliştirme",
    "Web Geliştirme",
    "Yazılım Geliştirme",
    "Uygulama Geliştirme",
    "Özel Yazılım Geliştirme",
    "Kurumsal Yazılım Geliştirme",
    "ASP.NET Core Geliştirici",
    "Entity Framework Geliştirici",
    "PostgreSQL Geliştirici",
    "SQL Server Geliştirici",
    "MongoDB Geliştirici",
    "Redis Geliştirici",
    "Docker Geliştirici",
    "CI/CD Geliştirici",
    "DevOps Mühendisi",
    // İş İlanı ve Hizmet Keywords
    "Yazılım Geliştirici İş İlanları",
    "Full Stack Developer Jobs",
    "Remote Software Developer",
    "Freelance Developer",
    "Yazılım Danışmanı",
    "Software Consultant",
    "Web Development Services",
    "Yazılım Geliştirme Hizmetleri",
    "Custom Software Solutions",
    "Özel Yazılım Çözümleri",
    "Software Development Company",
    "Yazılım Geliştirme Şirketi",
    // Teknoloji Stack Keywords
    "React TypeScript",
    "Next.js TypeScript",
    ".NET C#",
    "ASP.NET Core API",
    "RESTful API",
    "GraphQL API",
    "PostgreSQL Database",
    "SQL Server Database",
    "MongoDB Database",
    "Redis Cache",
    "Docker Container",
    "Kubernetes",
    "Microservices",
    "Clean Architecture",
    "SOLID Principles",
    "Design Patterns",
    "Agile Development",
    "Scrum Methodology",
    // Location Based
    "Software Developer Turkey",
    "Yazılım Geliştirici Türkiye",
    "Software Developer Istanbul",
    "Yazılım Geliştirici İstanbul",
    "Remote Developer Turkey",
    "Türkiye Yazılım Geliştirici",
  ],
  authors: [{ name: "Fatih Soymaz" }],
  creator: "Fatih Soymaz",
  publisher: "Fatih Soymaz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fsoymaz.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://fsoymaz.github.io",
    siteName: "Fatih Soymaz - Portfolio",
    title:
      "Fatih Soymaz - Full Stack Developer | Yazılım Geliştirici | .NET & React Specialist | İstanbul",
    description:
      "Full Stack Developer Fatih Soymaz. .NET backend, React/Next.js frontend geliştirme, Cypress test otomasyonu. Hepsiburada deneyimi ile kaliteli ve ölçeklenebilir yazılım çözümleri.",
    images: [
      {
        url: "/professional-developer-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Fatih Soymaz - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fatih Soymaz - Full Stack Developer | Yazılım Geliştirici | .NET & React Specialist | İstanbul",
    description:
      "Full Stack Developer. .NET backend, React/Next.js frontend geliştirme, Cypress test otomasyonu.",
    images: ["/professional-developer-portrait.jpeg"],
    creator: "@fatihsoymaz", // Twitter handle'ınızı buraya ekleyin
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification code'unuzu buraya ekleyin
    // google: "your-google-verification-code",
    // Yandex verification code'unuzu buraya ekleyin
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fatih Soymaz",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in .NET backend and React/Next.js frontend development",
    url: "https://fsoymaz.github.io",
    image: "https://fsoymaz.github.io/professional-developer-portrait.jpeg",
    sameAs: [
      "https://github.com/fsoymaz",
      "https://www.linkedin.com/in/fatih-soymaz/",
    ],
    email: "fthsymz60@gmail.com",
    knowsAbout: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Cypress",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "REST API",
      "GraphQL",
      "Entity Framework",
      "Docker",
      "CI/CD",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development",
      "Web Development",
      "Software Development",
      "Test Automation",
      "E2E Testing",
      "QA Engineering",
      "Software Engineering",
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Microservices",
      "Agile Development",
      "Scrum",
      "Git",
      "Postman",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Web Applications",
      "Mobile Applications",
      "API Design",
      "Database Design",
      "Software Testing",
      "Code Review",
      "Version Control",
      "DevOps",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "42 Okulları",
    },
    worksFor: {
      "@type": "Organization",
      name: "Hepsiburada",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fatih Soymaz - Portfolio",
    description:
      "Full Stack Developer portfolio showcasing .NET backend and React/Next.js frontend projects",
    url: "https://fsoymaz.github.io",
    author: {
      "@type": "Person",
      name: "Fatih Soymaz",
    },
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
