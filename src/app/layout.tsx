import type { Metadata } from 'next';
import { Black_Ops_One, Inter } from 'next/font/google';
import './globals.css';

const blackOpsOne = Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Granite Studio — Your Business Online',
  description: 'Build a website, launch an online store, optimise your Google listing, and scale your business — all without touching code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${blackOpsOne.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
