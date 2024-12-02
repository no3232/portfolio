'use client';

import HaedeupLayout from '@/feature/project/layouts/detail/HaedeupDetailLayout';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';

GSAPConfig.initialize();

export default function HaedeupPage() {
  return (
    <main>
      <HaedeupLayout />
    </main>
  );
}
