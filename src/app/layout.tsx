import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import brandConfig from "../../brandConfig.json";
import Navbar from "@/components/Navbar";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const country = headerList.get("x-vercel-ip-country") || "US";
  
  const isPakistan = country === "PK";
  
  return {
    title: isPakistan ? brandConfig.seo.localTitle : brandConfig.seo.globalTitle,
    description: brandConfig.seo.description,
    keywords: brandConfig.seo.keywords,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": brandConfig.brandName,
    "description": brandConfig.seo.description,
    "image": "/logo.png", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pakistan",
      "addressCountry": "PK"
    },
    "serviceType": ["Data Analysis", "Technical Writing"],
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quantitative Research"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Storytelling"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${oswald.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BBH+Bartle&family=BBH+Bogle&family=Cabin:ital,wght@0,400..700;1,400..700&family=Oswald:wght@200..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Special+Gothic+Expanded+One&family=Special+Gothic:wght@400..700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body bg-brand-bg text-brand-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

