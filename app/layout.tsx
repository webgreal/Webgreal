import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const interDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Webgreal | Premium Web Design & Digital Marketing Agency',
  description: 'We help brands worldwide generate more leads, sales, and visibility through high-converting websites, Google Ads, Meta Ads, and creative content.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-800">
        {children}
      </body>
    </html>
  );
}
