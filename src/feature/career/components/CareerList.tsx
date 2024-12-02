'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './CareerList.module.scss';
import calculateOptimalValues from '../util/calcultaeOptimalValues';

const CareerList = () => {
  useGSAP(() => {
    const container = gsap.utils.selector('#career-list-container');
    const panels = gsap.utils.toArray<HTMLElement[]>('.panel');

    const { radius, startAngle, endAngle } = calculateOptimalValues();

    panels.forEach((panel, i) => {
      gsap.set(panel, {
        rotationY: startAngle,
        y: i % 2 === 0 ? 50 : -50,
        z: i % 2 === 0 ? -radius + 100 * i : -radius - 100 * i,
        transformOrigin: `50% 50% ${radius}px`,
      });
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#career-section',
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        pin: true,
      },
    });

    // 각 패널을 왼쪽 끝으로 이동
    timeline.to(panels, {
      rotationY: endAngle,
      ease: 'power1.inOut',
      stagger: {
        from: 'start',
        each: 0.1, // 패널 간 시차
      },
    });
  }, []);

  return (
    <div className={styles.careerListContainer} id='career-list-container'>
      <div className={styles.panelContainer}>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>(주)우당네트웍</h2>
          <div>
            <p className={'fs-32'}>2023.07 ~ 2024.06</p>
          </div>
          <div>
            <p className={'fs-36'}>프론트엔드 개발자</p>
            <p className={'fs-36'}>Haedeup, GRIDA 프로젝트를 진행</p>
          </div>
        </div>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>SSAFY</h2>
          <div>
            <p className={'fs-32'}>2022.07 ~ 2023.06</p>
          </div>
          <div>
            <p className={'fs-36'}>삼성 청년 소프트웨어 아카데미 교육생</p>
            <p className={'fs-36'}>Vue, Django기반의 웹 개발 교육(6개월)</p>
            <p className={'fs-36'}>React기반의 웹 프로젝트 3회(6개월)</p>
          </div>
        </div>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>경북대학교(편입)</h2>
          <div>
            <p className={'fs-32'}>2019.02 ~ 2023.08</p>
          </div>
          <div>
            <p className={'fs-36'}>경제통상 학부 경제학과 졸</p>
            <p className={'fs-36'}>3.8/4.3</p>
          </div>
        </div>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>계명대학교</h2>
          <div>
            <p className={'fs-32'}>2023.07 ~ 2024.06</p>
          </div>
          <div>
            <p className={'fs-36'}>경영학부 회계학과 수료</p>
            <p className={'fs-36'}>3.8/4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerList;
