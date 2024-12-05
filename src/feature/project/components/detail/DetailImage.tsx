'use client';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

import { useLenis } from 'lenis/react';

import styles from './DetailImage.module.scss';
import clsx from 'clsx';

const DetailImage = ({ image }: { image: string }) => {
  const lenis = useLenis();

  useGSAP(() => {
    // 이미지 섹션 핀 설정
    gsap.to('#project-detail-image', {
      scrollTrigger: {
        trigger: '#project-detail-image',
        start: 'top top',
        pin: true,
        pinSpacing: false,
        refreshPriority: 2,
      },
    });

    gsap.to('.scrollDownWrapper', {
      y: 20,
      duration: 1.5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div
      className={styles.detailImageSection}
      id='project-detail-image'
      onClick={() => {
        if (lenis) {
          lenis.scrollTo('#project-detail-section-wrapper');
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.imgWrapper}>
        <img src={image} alt='' />
      </div>
      <div className={clsx(styles.scrollDownWrapper, 'scrollDownWrapper')}>
        <img src={'icon/scrollDown.svg'} alt='' />
        <p className={'fs-20 text-semibold'}>Scroll Down Or Click</p>
      </div>
    </div>
  );
};

export default DetailImage;
