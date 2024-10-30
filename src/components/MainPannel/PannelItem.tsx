'use client';

import { useGSAP } from '@gsap/react';
import styles from './MainPannel.module.scss';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import calculateBackgroundPosition from './util/calculateBGPosition';
import clsx from 'clsx';

const PannelItem = ({
  index,
  imageDimensions,
  isFlipped,
}: {
  index: number;
  imageDimensions: { width: number; height: number };
  isFlipped: boolean;
}) => {
  // 패널 이미지 위치 세팅
  const [bgState, setBgState] = useState({
    bgPosition: '',
    bgSize: '',
  });
  const pannelItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBgState(
      calculateBackgroundPosition({
        imageDimension: imageDimensions,
        imageRatio: 2 / 1,
        gridRow: 6,
        gridColumn: 6,
        index,
      }),
    );
  }, [imageDimensions, index]);

  // 마우스 호버 애니메이션
  const [isHover, setIsHover] = useState(false);
  useGSAP(() => {
    if (isFlipped) return;
    if (!isHover) return;
    const panel = pannelItemRef.current;

    gsap.effects.flip(panel);
  }, [isHover]);

  const handleMouseEnter = () => {
    if (isHover) return;
    setIsHover(true);
    setTimeout(() => {
      setIsHover(false);
    }, 1000);
  };

  return (
    <div
      className={clsx(styles.mainPannel, 'pannelItem')}
      onMouseEnter={handleMouseEnter}
      ref={pannelItemRef}
    >
      <div
        className={clsx(styles.mainPannelItem, 'pannelItemInner')}
        data-panel-item='front'
        style={{
          backgroundSize: bgState.bgSize,
          backgroundPosition: bgState.bgPosition,
        }}
      />
      <div
        className={clsx(styles.mainPannelItem, 'pannelItemInner')}
        data-panel-item='back'
        style={{
          backgroundSize: bgState.bgSize,
          backgroundPosition: bgState.bgPosition,
        }}
      />
    </div>
  );
};

export default PannelItem;
