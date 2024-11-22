'use client';

import HaedeupLayout from '@/feature/project/temp/Haedeup';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';

GSAPConfig.initialize();

export default function HaedeupPage() {
  return (
    <main>
      <HaedeupLayout />
    </main>
  );
}
