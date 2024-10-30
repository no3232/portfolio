'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './MainPannel.module.scss';
import PannelItem from './PannelItem';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

const MainPannel = () => {
  const lenis = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const updateImageSize = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.target === containerRef.current) {
        const { width, height } = entry.contentRect;
        setImageDimensions({ width, height });
      }
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(updateImageSize);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [updateImageSize]);

  // 스크롤 트리거를 통해 스크롤 하면 뒤집히는 애니메이션 실행
  const [isFlipped, setIsFlipped] = useState(false);

  useGSAP(() => {
    if (!lenis) return;

    // 주황색으로 뒤집기
    const flipTimeline = gsap.timeline({
      onStart: () => {
        lenis.resize();
        setIsFlipped(true);
        lenis.stop();
      },
      onComplete: () => {
        lenis.start();
      },
      paused: true,
    });

    flipTimeline
      .add(
        gsap.effects.flipBack('.pannelItem', {
          stagger: {
            amount: 0.4,
            from: 'random',
          },
          duration: 0.3,
        }),
      )
      .to(
        '#gridContainer',
        {
          gap: 0,
        },
        '<',
      )
      .to(
        '.pannelItemInner',
        {
          borderRadius: '0px',
        },
        '<',
      )
      .to(
        '#mainPannelWrap',
        {
          backgroundColor: '#ff5c00',
          duration: 0.1,
          delay: 0.7,
        },
        '<',
      );

    // 흰색으로 뒤집기
    const flipBackTimeline = gsap.timeline({
      onStart: () => {
        lenis.stop();
      },
      onComplete: () => {
        setIsFlipped(false);
        lenis.start();
      },
      paused: true,
    });

    flipBackTimeline
      .to('#gridContainer', {
        gap: '3px',
        duration: 0,
        backgroundColor: 'transparent',
      })
      .to('.pannelItemInner', {
        borderRadius: 'var(--borderRadius)',
        duration: 0,
      })
      .to(
        '#mainPannelWrap',
        {
          backgroundColor: '#1c1d21',
        },
        '<',
      )
      .add(
        gsap.effects.flip('.pannelItem', {
          stagger: {
            amount: 0.4,
            from: 'random',
          },
        }),
      );

    ScrollTrigger.create({
      trigger: '#mainPannelWrap',
      start: 'top top',
      end: '+=10%',
      endTrigger: '#mainPannelWrap',
      scrub: true,
      pin: true,
      refreshPriority: 1,
      onUpdate: self => {
        const isAboveHalf = self.progress > 0.1; // 10% 지점을 기준으로
        const wasAboveHalf =
          (self.vars as { wasAboveHalf?: boolean }).wasAboveHalf ?? false;

        if (isAboveHalf !== wasAboveHalf) {
          (self.vars as { wasAboveHalf?: boolean }).wasAboveHalf = isAboveHalf;

          if (isAboveHalf) {
            flipTimeline.restart();
          } else {
            flipBackTimeline.restart();
          }
        }
      },
    });
  }, [lenis]);

  return (
    <div className={styles.mainPannelWrap} id='mainPannelWrap'>
      <div
        className={styles.mainPannelImage}
        ref={containerRef}
        id='gridContainer'
      >
        {Array.from({ length: 36 }).map((_, index) => (
          <PannelItem
            key={index}
            index={index}
            imageDimensions={imageDimensions}
            isFlipped={isFlipped}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPannel;
