'use client';

import Link from 'next/link';
import { CodeBlock } from '../components/detail/CodeBlock';
import styles from './ProjectDetailLayout.module.scss';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import DetailImage from '../components/detail/DetailImage';
import DetailFooter from '../components/detail/DetailFooter';

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
            <section className={styles.overViewSectionGrid}>
              <div className={styles.projectTitle}>
                <p className='text-graytext'>Project</p>
                <h1 className='text-white h3'>Portfolio</h1>
              </div>
              <div>
                <p className='text-graytext'>Period</p>
                <p className='text-white fs-26'>2024.11 ~ 2024.11</p>
              </div>
              <div>
                <p className='text-graytext'>Role</p>
                <p className='text-white fs-26'>Front-End(100%)</p>
              </div>
              <div>
                <p className='text-graytext'>Link</p>
                <Link
                  href='https://www.restaurant32.com/'
                  className='text-white fs-26'
                  target='_blank'
                >
                  <p>https://www.restaurant32.com/</p>
                </Link>
                <Link
                  href='https://github.com/no3232/portfolio'
                  className='text-white fs-26'
                  target='_blank'
                >
                  <p>https://github.com/no3232/portfolio</p>
                </Link>
              </div>
              <div>
                <p className='text-graytext'>Team</p>
                <p className='text-white fs-26'>FE - 1</p>
              </div>
            </section>
            <section className={styles.descriptionSection}>
              <p className='text-graytext'>Description</p>
              <p className='text-white fs-24'>
                개인 포트폴리오 페이지입니다.
                <br />
                인터랙션과 순차적인 애니메이션을 구현하기위해 GSAP을
                사용했습니다.
                <br />
                smooth scroll을 위해 Lenis를 사용했습니다.
                <br />
                학습을 위해서 Sass를 사용했습니다.
              </p>
            </section>
            <section>
              <p className='text-graytext'>Skill</p>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>Next.js @14</p>
                <p>
                  가장 익숙한 스택을 선정했습니다.
                  <br />
                  또한 Meta Tag를 쉽게 설정할 수 있고, 리액트의 기능을
                  활용하기위해 사용했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>SASS @1.80.3</p>
                <p>
                  전처리기 CSS를 한 번도 사용해보지 않아 학습을 위해
                  사용했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>GSAP @1.80.3</p>
                <p>
                  순차적 애니메이션과 스크롤 트리거를 통한 컴포넌트 고정,
                  애니메이션을 구현하기위해 도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>lenis @1.80.3</p>
                <p>
                  GSAP Smooth Scroll 대신 효과를 구현하고 스크롤을 조절하기 위해
                  도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>highlight.js @1.80.3</p>
                <p>코드블럭을 사용하기 위해 도입했습니다.</p>
              </div>
            </section>
            {/* <section>
              <p className='text-graytext'>Problem Solving</p>
              <p className='fs-30'></p>
            </section> */}
            {/* <section>
              <p className='text-graytext'>Outcome</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
            </section> */}
          </div>
        </div>
      </div>
      <DetailFooter />
    </>
  );
};

export default PortfolioLayout;
