import type { Metadata } from 'next';
import { Roboto, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';

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

export const metadata: Metadata = {
  title: 'Artist Company',
  description: 'Artist Company Clone Project',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${roboto.variable} ${notoSansKr.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
