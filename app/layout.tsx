import type { Metadata } from "next";
import { Asap, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const asap = Asap({ 
  subsets: ["latin"],
  variable: '--font-asap',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Customer Insight & Strategy | GRADA Sydney",
  description: "Expert customer strategy consulting in Sydney. Transform your business with actionable customer insights. Fast, flexible engagement designed to make consulting accessible.",
  keywords: ["customer insight", "customer strategy", "business consulting Sydney", "customer experience", "strategy consulting", "customer research"],
  authors: [{ name: "GRADA" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "GRADA - Customer Insight & Strategy",
    description: "Expert customer strategy consulting in Sydney. Transform your business with actionable customer insights.",
    url: "https://grada.com.au",
    siteName: "GRADA",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRADA - Customer Insight & Strategy",
    description: "Expert customer strategy consulting in Sydney.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here once you have it
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${openSans.variable} ${asap.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
