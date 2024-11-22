'use client';

import GridaLayout from '@/feature/project/temp/GRIDA';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';

GSAPConfig.initialize();

export default function GridaPage() {
  return (
    <main>
      <GridaLayout />
    </main>
  );
}
