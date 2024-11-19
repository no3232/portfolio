'use client';

import clsx from 'clsx';
import AboutMainText from '../components/AboutMainText';
import AboutSubText from '../components/AboutSubText';
import styles from './AboutLayout.module.scss';
import AboutConstants, {
  AboutConstantsType,
} from '../constants/AboutConstants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

const AboutLayout = () => {
  const aboutMainTextRef = useRef<HTMLDivElement>(null);

  const [aboutSubTextKey, setAboutSubTextKey] =
    useState<AboutConstantsType>('브릿지_역할을');

  useGSAP(() => {
    gsap.to(aboutMainTextRef.current, {
      scrollTrigger: {
        trigger: aboutMainTextRef.current,
        start: 'top top',
        end: 'bottom+=200% top',
        pin: '#about-main-text',
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div className={clsx(styles.aboutLayoutWrapper)}>
      <section
        ref={aboutMainTextRef}
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
