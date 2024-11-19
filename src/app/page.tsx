'use client';

import { GSAPConfig } from '@/lib/gsap/GSAPConfig';
import useImagesLoading from '@/hooks/useImagesLoading';
import NavBar from '@/feature/nav/NavBar';
import AboutLayout from '@/feature/about/layouts/AboutLayout';
import SkillLayout from '@/feature/skill/layouts/SkillLayout';

GSAPConfig.initialize();

export default function Home() {
  const { loadingCount } = useImagesLoading();

  return (
    <div>
      <NavBar />
      <AboutLayout />
      <SkillLayout />
    </div>
  );
}
