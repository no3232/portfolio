'use client';

import clsx from 'clsx';
import AboutMainText from '../components/AboutMainText';
import AboutSubText from '../components/AboutSubText';
import styles from './AboutLayout.module.scss';
import { AboutConstantsType } from '../constants/AboutConstants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

const AboutLayout = () => {
  const [aboutSubTextKey, setAboutSubTextKey] =
    useState<AboutConstantsType>('인터랙션을_좋아');

  useGSAP(() => {
    gsap.to('#about-section', {
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top top',
        end: '+=200%',
        pin: '#about-main-text',
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div className={clsx(styles.aboutLayoutWrapper)}>
      <section
        className={clsx('grid', styles.aboutRow, 'h-full')}
        id='about-section'
      >
        <AboutMainText id='about-main-text' subTextKey={aboutSubTextKey} />
        <AboutSubText id='about-sub-text' setSubTextKey={setAboutSubTextKey} />
      </section>
    </div>
  );
};

export default AboutLayout;
