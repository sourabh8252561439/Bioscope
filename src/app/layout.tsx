import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIOSCOPE — The World's Most Advanced 3D Human Anatomy Platform",
  description:
    "Explore the complete human body from whole body to DNA. Ultra-realistic 3D holographic anatomy, AI medical tutor, disease library, and interactive education for students, doctors, researchers, and healthcare professionals.",
  keywords: [
    "anatomy",
    "3D anatomy",
    "human body",
    "medical education",
    "AI tutor",
    "anatomy atlas",
    "skeletal system",
    "cardiovascular",
    "nervous system",
  ],
  authors: [{ name: "BIOSCOPE" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "BIOSCOPE — Advanced 3D Human Anatomy Platform",
    description:
      "Ultra-realistic 3D holographic anatomy, AI medical tutor, and complete anatomical coverage from whole body to atoms.",
    siteName: "BIOSCOPE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOSCOPE — Advanced 3D Human Anatomy Platform",
    description:
      "Ultra-realistic 3D holographic anatomy, AI medical tutor, and complete anatomical coverage from whole body to atoms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Script
          src="https://arisefeistyleery.com/b5/50/eb/b550eb69123ed4e5199b2bf3931ef814.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://arisefeistyleery.com/c0/fd/c9/c0fdc90a8f130bd7e41d31784384817a.js"
          strategy="afterInteractive"
        />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
