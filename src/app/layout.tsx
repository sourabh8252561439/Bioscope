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
        {/* Original ad scripts */}
        <Script
          src="https://arisefeistyleery.com/b5/50/eb/b550eb69123ed4e5199b2bf3931ef814.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://arisefeistyleery.com/c0/fd/c9/c0fdc90a8f130bd7e41d31784384817a.js"
          strategy="afterInteractive"
        />

        {/* Additional ad scripts */}
        <Script
          src="https://arisefeistyleery.com/d0zf0dbg?key=d0ade1e25b70c28b37576631d9c83cfc"
          strategy="afterInteractive"
        />

        <div id="container-18318b38d73ce552b62fdfb9c479c313"></div>
        <Script
          async
          data-cfasync="false"
          src="https://arisefeistyleery.com/18318b38d73ce552b62fdfb9c479c313/invoke.js"
          strategy="afterInteractive"
        />

        <Script id="atoptions-ac5a" strategy="afterInteractive">
          {`atOptions = { 'key' : 'ac5a212c8b9376d9e30156274c3208db', 'format' : 'iframe', 'height' : 300, 'width' : 160, 'params' : {} };`}
        </Script>
        <Script
          src="https://arisefeistyleery.com/ac5a212c8b9376d9e30156274c3208db/invoke.js"
          strategy="afterInteractive"
        />

        <Script id="atoptions-ea08" strategy="afterInteractive">
          {`atOptions = { 'key' : 'ea0870a4e0eed04e401f97a4c656c194', 'format' : 'iframe', 'height' : 60, 'width' : 468, 'params' : {} };`}
        </Script>
        <Script
          src="https://arisefeistyleery.com/ea0870a4e0eed04e401f97a4c656c194/invoke.js"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F6NY6NC8RS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F6NY6NC8RS');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-3129438098804302"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
