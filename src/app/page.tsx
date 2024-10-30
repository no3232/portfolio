'use client';

import HorizontalPannel from '@/components/HorizontalPannel/HorizontalPannel';
import MainPannel from '@/components/MainPannel/MainPannel';
import InitialLoading from '@/components/InitialLoading/InitialLoading';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';
import MainText from '@/components/MainText/MainText';
import useImagesLoading from '@/hooks/useImagesLoading';

GSAPConfig.initialize();

export default function Home() {
  const { loadingCount } = useImagesLoading();
  return (
    <div>
      <InitialLoading loadingCount={loadingCount} />
      <MainPannel />
      <MainText />
      <HorizontalPannel />
    </div>
  );
}
