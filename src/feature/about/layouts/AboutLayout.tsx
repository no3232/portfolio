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

    gsap.to('.scrollDownWrapper', {
      y: 20,
      duration: 1.5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.scrollDownWrapper', {
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top top',
        end: '+=10%',
        onLeave: () => {
          gsap.set('.scrollDownWrapper', { visibility: 'hidden' });
        },
        onEnterBack: () => {
          gsap.set('.scrollDownWrapper', { visibility: 'visible' });
        },
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
      <div className={clsx(styles.scrollDownWrapper, 'scrollDownWrapper')}>
        <img src={'icon/scrollDown.svg'} alt='' />
        <p className={'fs-20 text-semibold'}>Scroll Down</p>
      </div>
    </div>
  );
};

export default AboutLayout;
