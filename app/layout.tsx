import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "./components/providers/SmoothScrollProvider";
import { CustomCursor } from "./components/animations/CustomCursor";
import { LoadingScreen } from "./components/animations/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Coach | Premium Coaching for High Performers",
  description:
    "Transform your life and business with premium executive coaching. Unlock your full potential with personalized coaching programs.",
  keywords: [
    "coaching",
    "executive coaching",
    "business coaching",
    "leadership",
    "personal development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
        <SmoothScrollProvider>
          <LoadingScreen />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
