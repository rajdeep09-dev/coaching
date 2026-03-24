import './globals.css';
import { ThemeProvider } from '@/src/lib/theme-provider';
import Navbar from '@/src/components/layout/navbar';
import Footer from '@/src/components/layout/footer';

export const metadata = {
  title: 'VidyaBharatii - Premier Coaching & Education for All',
  description: 'VidyaBharatii is a premier coaching center providing world-class education, JEE preparation, NEET coaching, and competitive exam training across India.',
  keywords: 'coaching, education, JEE, NEET, competitive exams, India',
  authors: [{ name: 'VidyaBharatii' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#1e3a8a',
  robots: 'index, follow',
  canonical: 'https://vidyabharatii.org',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-background text-text-primary transition-colors duration-300">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
