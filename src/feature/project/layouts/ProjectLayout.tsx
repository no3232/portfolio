'use client';

import clsx from 'clsx';
import styles from './ProjectLayout.module.scss';
import Link from 'next/link';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import ProjectDescription from '../components/list/ProjectDescription';
import ProjectTitle from '../components/list/ProjectTitle';
import ProjectImages from '../components/list/ProjectImages';

const ProjectLayout = () => {
  useGSAP(() => {
    gsap.to('#project-section', {
      scrollTrigger: {
        trigger: '#project-section-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
      },
    });
  });

  return (
    <div className={styles.projectLayoutWrapper} id='project-section-wrapper'>
      <section
        className={clsx(styles.projectGridSection, 'grid h-full')}
        id='project-section'
      >
        <ProjectTitle />
        <ProjectImages />
        <ProjectDescription />
      </section>
    </div>
  );
};

export default ProjectLayout;
