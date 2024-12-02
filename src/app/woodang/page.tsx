'use client';

import ProjectDetailLayout from '@/feature/project/layouts/ProjectDetailLayout';
import WoodangLayout from '@/feature/project/layouts/detail/WoodangDetailLayout';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';

GSAPConfig.initialize();

export default function WoodangPage() {
  return (
    <main>
      <WoodangLayout />
    </main>
  );
}
