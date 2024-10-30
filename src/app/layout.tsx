import type { Metadata } from 'next';
import '@/styles/base.scss';
import { ReactLenis } from 'lenis/react';

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
        <body>{children}</body>
      </ReactLenis>
    </html>
  );
}
