import type { Metadata } from "next";
import { DM_Serif_Display, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-dm-serif'
});

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://getbplus.com'),
  title: "GetB+ | Your Card Works Everywhere in India",
  description: "Link your Visa, Mastercard, or Amex and pay at any shop, street stall, or restaurant across India — just scan the QR code. No Indian bank account needed.",
  openGraph: {
    type: "website",
    title: "GetB+ | Your Card Works Everywhere in India",
    description: "Link your Visa, Mastercard, or Amex and pay at any shop, street stall, or restaurant across India — just scan the QR code. No Indian bank account needed.",
    url: "https://getbplus.com",
    siteName: "GetB+",
    images: [{
      url: "/og-image.jpg", // Assuming an OG image
      width: 1200,
      height: 630,
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "GetB+ | Your Card Works Everywhere in India",
    description: "Link your Visa, Mastercard, or Amex and pay at any shop, street stall, or restaurant across India — just scan the QR code.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GetB+",
    "legalName": "Adeshilps E-XP & TravelWithU Private Limited",
    "url": "https://getbplus.com",
    "logo": "https://getbplus.com/logo.png",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Aadesh S Jain"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${dmSerifDisplay.variable} ${sora.variable} font-sans bg-navy text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}