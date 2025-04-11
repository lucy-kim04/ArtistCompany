import type { Metadata } from 'next';
import { Roboto, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Artist Company',
  description: 'Artist Company Clone Project',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${roboto.variable} ${notoSansKr.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
