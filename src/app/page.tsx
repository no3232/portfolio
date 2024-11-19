'use client';

import { GSAPConfig } from '@/lib/gsap/GSAPConfig';
import useImagesLoading from '@/hooks/useImagesLoading';
import NavBar from '@/feature/nav/NavBar';
import AboutLayout from '@/feature/about/layouts/AboutLayout';
import SkillLayout from '@/feature/skill/layouts/SkillLayout';
import ProjectLayout from '@/feature/project/layouts/ProjectLayout';
import CareerLayout from '@/feature/career/layouts/CareerLayout';
import ContactLayout from '@/feature/contact/layouts/ContactLayout';

GSAPConfig.initialize();

export default function Home() {
  const { loadingCount } = useImagesLoading();

  return (
    <div>
      <main
        id='main-contents'
        style={{ zIndex: 100 }}
      >
        <NavBar />
        <AboutLayout />
        <SkillLayout />
        <ProjectLayout />
        <CareerLayout />
      </main>
      <ContactLayout />
    </div>
  );
}
