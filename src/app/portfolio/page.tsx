'use client';

import PortfolioLayout from '@/feature/project/layouts/detail/PortfolioDetailLayout';
import { GSAPConfig } from '@/lib/gsap/GSAPConfig';

GSAPConfig.initialize();

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioLayout />
    </main>
  );
}
