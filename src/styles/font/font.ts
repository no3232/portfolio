import localFont from 'next/font/local';

export const suit = localFont({
  src: [
    {
      path: '../font/suit/SUIT-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../font/suit/SUIT-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-suit',
});
