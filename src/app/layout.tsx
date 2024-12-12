import type { Metadata } from 'next';
import '@/styles/base.scss';
import '@/styles/global.scss';
import { ReactLenis } from 'lenis/react';
import { suit } from '@/styles/font/font';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';
import NavBar from '@/feature/nav/NavBar';
import TempResponsiveBlock from '@/components/TempResponsiveBlock';

export const metadata: Metadata = {
  title: '배상준 | Frontend Developer',
  description: '인터랙션을 좋아하는 프론트엔드 개발자 배상준입니다.',
  icons: {
    icon: '/logo/logo.svg',
  },
};

GSAPConfig.initialize();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReactLenis root>
        <body className={suit.variable}>
          <TempResponsiveBlock />
          <NavBar />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
