'use client';

import clsx from 'clsx';
import styles from './SkillLayout.module.scss';
import SkillBoxGrid from '../components/SkillBoxGrid';
import { useRef, useState } from 'react';
import SkillContent from '../components/SkillContent';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SkillLayout = () => {
  const [skillKey, setSkillKey] = useState('');

  return (
    <div className={styles.skillLayoutWrapper}>
      <section
        className={clsx('grid', 'h-full', styles.skillRow)}
        id='skill-section'
      >
        <SkillBoxGrid setSkillKey={setSkillKey} skillKey={skillKey} />
        <SkillContent skillKey={skillKey} />
      </section>
    </div>
  );
};

export default SkillLayout;
