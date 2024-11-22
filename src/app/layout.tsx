import type { Metadata } from 'next';
import '@/styles/base.scss';
import '@/styles/global.scss';
import { ReactLenis } from 'lenis/react';
import { suit } from '@/styles/font/font';

export const metadata: Metadata = {
  title: '배상준 | Frontend Developer',
  description: '인터랙션을 좋아하는 프론트엔드 개발자 배상준입니다.',
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
