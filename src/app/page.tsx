'use client';

import NavBar from '@/feature/nav/NavBar';
import AboutLayout from '@/feature/about/layouts/AboutLayout';
import SkillLayout from '@/feature/skill/layouts/SkillLayout';
import ProjectLayout from '@/feature/project/layouts/list/ProjectLayout';
import CareerLayout from '@/feature/career/layouts/CareerLayout';
import ContactLayout from '@/feature/contact/layouts/ContactLayout';

export default function Home() {
  return (
    <div>
      <main id='main-contents' style={{ zIndex: 100 }}>
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
