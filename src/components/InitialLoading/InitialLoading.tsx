'use client';

import styles from './InitialLoading.module.scss';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';

import { useLenis } from 'lenis/react';

const InitialLoading = ({ loadingCount }: { loadingCount: number }) => {
  const lenis = useLenis();

  useGSAP(() => {
    if (!lenis) return;

    lenis.stop();

    const timeline = gsap.timeline({
      onStart: () => {
        lenis.stop();
      },
      onComplete: () => {
        // lenis.start();
        // lenis.resize();
      },
    });

    timeline
      .to('.wave', {
        marginTop: gsap.utils.interpolate(-240, -510, loadingCount / 100),
        ease: 'expo.out',
      })
      .to('#loadingWrapper', {
        top: '-100%',
        duration: 0.5,
        delay: 0.5,
      })
      .to('#loadingWrapper', {
        display: 'none',
        onComplete: () => {
          // 마지막 애니메이션이 완료된 후 명시적으로 lenis 시작
          lenis.start();
        },
      });

    return () => {
      // cleanup 함수에서도 lenis 시작 보장
      lenis.resize();
      lenis.start();
    };
  }, [lenis, loadingCount]);

  return (
    <div className={styles.loadingWrapper} id='loadingWrapper'>
      <div className={styles.box}>
        <div className={clsx(styles.wave, styles['-three'], 'wave')}></div>
        <div className={clsx(styles.wave, styles['-two'], 'wave')}></div>
        <div className={clsx(styles.wave, 'wave')}></div>
        <div className={styles.title}>{loadingCount}%</div>
      </div>
    </div>
  );
};

export default InitialLoading;
