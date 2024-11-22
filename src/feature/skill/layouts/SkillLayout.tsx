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
      <section id='skill-section'>
        <div className={styles.skillTitle}>
          <h3 className='h6 text-bold'>
            WHAT CAN I USE<b className='text-primary'>?</b>
          </h3>
        </div>
        <div
          className={clsx('grid', 'h-full', styles.skillRow)}
          id='skill-grid-div'
        >
          <SkillBoxGrid setSkillKey={setSkillKey} skillKey={skillKey} />
          <SkillContent skillKey={skillKey} />
        </div>
      </section>
    </div>
  );
};

export default SkillLayout;
