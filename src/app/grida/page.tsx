'use client';

import GridaLayout from '@/feature/project/layouts/detail/GRIDADetailLayout';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';

GSAPConfig.initialize();

export default function GridaPage() {
  return (
    <main>
      <GridaLayout />
    </main>
  );
}
