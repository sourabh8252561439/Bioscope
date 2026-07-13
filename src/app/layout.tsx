import type { Metadata } from "next";
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
  // Theme is set to "dark" by default on the server. No inline <script> is used
  // because browser extensions (uBlock/AdGuard ExtendedCss) can mutate inline
  // script content before React hydrates, causing hydration mismatches. The
  // client useTheme() hook reads localStorage after mount and switches if the
  // user previously chose "light".
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
