import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/sections/Header";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Edunite - AI-Powered School Management Platform',
  description: 'Leverage cutting-edge artificial intelligence and comprehensive tools to efficiently run a modern educational institution with automated workflows.',
  keywords: ['school management', 'education', 'AI', 'student management', 'educational technology'],
  authors: [{ name: 'Edunite Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Edunite - AI-Powered School Management Platform',
    description: 'Leverage cutting-edge artificial intelligence and comprehensive tools to efficiently run a modern educational institution with automated workflows.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edunite - AI-Powered School Management Platform',
    description: 'Leverage cutting-edge artificial intelligence and comprehensive tools to efficiently run a modern educational institution with automated workflows.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased" suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
