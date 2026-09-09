import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Tazitani Faith & Growth Foundation | Sungwala',
  description: 'Empowering communities through faith, opportunity and sustainable development in Matabeleland North Province, Zimbabwe.',
  openGraph: {
    title: 'Tazitani Faith & Growth Foundation',
    description: 'Empowering communities through faith, opportunity and sustainable development in Matabeleland North Province, Zimbabwe.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
