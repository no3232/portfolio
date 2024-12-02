'use client';

import styles from './ProjectDetailLayout.module.scss';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import DetailImage from '../../components/detail/DetailImage';
import DetailFooter from '../../components/detail/DetailFooter';
import DetailOverView from '../../components/detail/DetailOverView';
import PortfolioProblemSolving from '../../components/detail/ProblemSolving/PortfolioProblemSolving';
import DetailSkill from '../../components/detail/DetailSkill';
import DetailDescription from '../../components/detail/DetailDescription';
import {
  portfolioDescription,
  portfolioDetailData,
  portfolioSkillList,
} from '../../constants/Portfolio';

const PortfolioLayout = () => {
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
        <DetailImage image='/project/portfolio.png' />
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
            <DetailOverView {...portfolioDetailData} />
            <DetailDescription description={portfolioDescription} />
            <DetailSkill skillList={portfolioSkillList} />
            <PortfolioProblemSolving />
          </div>
        </div>
      </div>
      <DetailFooter />
    </>
  );
};

export default PortfolioLayout;
