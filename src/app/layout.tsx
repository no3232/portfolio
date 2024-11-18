import type { Metadata } from 'next';
import '@/styles/base.scss';
import '@/styles/global.scss';
import { ReactLenis } from 'lenis/react';
import { suit } from '@/styles/font/font';

export const metadata: Metadata = {
  title: '포폴포폴',
  description: '포폴포폴',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReactLenis root>
        <body className={suit.variable}>{children}</body>
      </ReactLenis>
    </html>
  );
}
