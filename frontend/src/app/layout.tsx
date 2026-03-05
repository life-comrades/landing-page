import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getISRData } from "@/lib/api";

export const revalidate = 3600; // Enable ISR (1 hour)
export const dynamicParams = true;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const { content } = await getISRData();
  return {
    title: content?.globalMetadata?.title || "Life Comrades",
    description: content?.globalMetadata?.description || "Trusted Home Nursing",
    keywords: content?.globalMetadata?.keywords || [],
  };
}

import { AuthProvider } from "@/context/AuthContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { content } = await getISRData();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header content={content} />
          {children}
          <Footer content={content} />
        </AuthProvider>
      </body>
    </html>
  );
}
