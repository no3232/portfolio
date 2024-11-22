'use client';

import ProjectDetailLayout from '@/feature/project/layouts/ProjectDetailLayout';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';

GSAPConfig.initialize();

export default function ProjectPage() {
  return <ProjectDetailLayout />;
}
