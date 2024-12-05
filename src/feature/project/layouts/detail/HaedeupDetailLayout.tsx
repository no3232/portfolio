'use client';

import Link from 'next/link';
import CodeBlock from '../../components/detail/CodeBlock';
import styles from './ProjectDetailLayout.module.scss';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import DetailImage from '../../components/detail/DetailImage';
import DetailFooter from '../../components/detail/DetailFooter';
import {
  haedeupDescription,
  haedeupDetailData,
  haedeupSkills,
} from '../../constants/Haedeup';
import DetailOverView from '../../components/detail/DetailOverView';
import DetailDescription from '../../components/detail/DetailDescription';
import DetailSkill from '../../components/detail/DetailSkill';
import HaedeupProblemSolving from '../../components/detail/ProblemSolving/HaedeupProblemSolving copy';

const HaedeupLayout = () => {
  useGSAP(() => {
    // // 인덱스 고정
    // gsap.to('#project-detail-index', {
    //   scrollTrigger: {
    //     trigger: '#project-detail-section-wrapper',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     pin: '#project-detail-index',
    //     refreshPriority: 1,
    //     pinSpacing: false,
    //   },
    // });
  });

  return (
    <>
      <div id='main-contents' style={{ zIndex: 2 }}>
        <DetailImage image='/project/haedeup.png' />
        <div
          className={clsx('grid', styles.detailSectionWrapper)}
          id='project-detail-section-wrapper'
        >
          {/* <div className={styles.detailIndexSection} id='project-detail-index'>
            <div>
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
            </div>
          </div> */}
          <div className={styles.detailContentSection}>
            <DetailOverView {...haedeupDetailData} />
            <DetailDescription description={haedeupDescription} />
            <DetailSkill skillList={haedeupSkills} />
            <HaedeupProblemSolving />
          </div>
        </div>
      </div>
      <DetailFooter />
    </>
  );
};

export default HaedeupLayout;