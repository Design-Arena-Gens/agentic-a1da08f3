import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Epidemiyolojik ?zellikler (2020?2025) | IBI',
  description:
    'Bebeklerde invaziv bakteriyel infeksiyon (IBI) i?in 2020?2025 epidemiyolojik veriler: insidans, mortalite, mikroorganizma da??l?m? ve klinik sunum.',
  metadataBase: new URL('https://agentic-a1da08f3.vercel.app'),
  openGraph: {
    title: 'Epidemiyolojik ?zellikler (2020?2025) | IBI',
    description:
      'Bebeklerde invaziv bakteriyel infeksiyon (IBI) i?in 2020?2025 epidemiyolojik veriler: insidans, mortalite, mikroorganizma da??l?m? ve klinik sunum.',
    url: 'https://agentic-a1da08f3.vercel.app',
    siteName: 'IBI Epidemiyoloji',
    type: 'website'
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
