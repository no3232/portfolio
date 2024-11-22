'use client';

import Link from 'next/link';
import { CodeBlock } from '../components/detail/CodeBlock';
import styles from './ProjectDetailLayout.module.scss';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import ContactLayout from '@/feature/contact/layouts/ContactLayout';
import { ScrollTrigger } from 'gsap/all';
import DetailImage from '../components/detail/DetailImage';
import DetailFooter from '../components/detail/DetailFooter';

const WoodangLayout = () => {
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
        <DetailImage image='/project/woodang.png' />
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
                <h1 className='text-white h3'>우당네트웍 메인페이지</h1>
              </div>
              <div>
                <p className='text-graytext'>Period</p>
                <p className='text-white fs-26'>2024.01 ~ 2024.02</p>
              </div>
              <div>
                <p className='text-graytext'>Role</p>
                <p className='text-white fs-26'>Front-End(100%)</p>
              </div>
              <div>
                <p className='text-graytext'>Link</p>
                <Link
                  href='https://woodangnetwork.com'
                  className='text-white fs-26'
                  target='_blank'
                >
                  https://woodangnetwork.com
                </Link>
              </div>
              <div>
                <p className='text-graytext'>Team</p>
                <p className='text-white fs-26'>FE - 1</p>
                <p className='text-white fs-26'>BE - 1</p>
                <p className='text-white fs-26'>Designer - 2</p>
                <p className='text-white fs-26'>PM - 1</p>
              </div>
            </section>
            <section>
              <p className='text-graytext'>Description</p>
              <p className='text-white fs-24'>
                (주)우당 네트웍의 메인 홈페이지입니다.
              </p>
              <p className='text-white fs-24'>
                반응형으로 데스크탑, 모바일 모두 지원되며, 다국어 처리(ko, en)를
                지원합니다.
              </p>
              <p className='text-white fs-24'>
                Intersection Observer를 통해 상단의 네비게이션에 해당하는 화면이
                보여지면 네비게이션 인덱스를 활성화 하도록 구현하였습니다.
              </p>
              <p className='text-white fs-24'>
                react-hook-form을 통해 익명의 사용자가 요청하는 문의 폼을
                구현했습니다.
              </p>
            </section>
            <section>
              <p className='text-graytext'>Skill</p>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>Next.js @14.2.3</p>
                <p>
                  SSR, SEO를 위한 메타태그 설정, 이미지 최적화 등 next.js의
                  기능을 활용하기 위해 도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>@vanilla-extract/css @1.15.1</p>
                <p>
                  제로런타임CSS를 통해 보다 빠른 렌더링과 타입 안정성을 가진
                  라이브러리를 사용하기 위해 도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>
                  @tanstack/react-query @5.37.1
                </p>
                <p>
                  서버로부터 받아오는 데이터의 전역 상태, 캐싱, loading 상태
                  등을 관리하기 위해 도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>zustand @4.5.2</p>
                <p>
                  컴포넌트의 상태와 같이 클라이언트 측에서 사용할 전역 상태(ex.
                  모달 등)을 관리하기 위해 도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>next-international @1.2.4</p>
                <p>다국어 처리를 위해 도입했습니다.</p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>react-hook-form @7.51.4</p>
                <p>
                  사용자가 제출하는 form의 검증을 위해 도입했습니다. 컴파운드
                  컴포넌트 패턴을 주로 이용했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>react-quill @2.0.0</p>
                <p>
                  관리자가 Quill로 작성하는 게시글을 받아와 띄워주기 위해 메인
                  페이지에서는 CSS만을 사용했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>swiper @11.1.3</p>
                <p>메인페이지 상단의 슬라이더를 구현하기 위해 도입했습니다.</p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>svgr @8.1.0</p>
                <p>
                  svg를 컴포넌트화 하여 fill, stroke등 간단하게 설정을 조절할 수
                  있어 도입했습니다.
                </p>
              </div>
            </section>
            <section>
              <p className='text-graytext'>Problem Solving</p>
              <p className='fs-30'>Navigation Bar 구현</p>
              <p>
                화면에 반응하는 네비게이션 바를 구현하기 위해 intersection
                observer를 훅으로 추출해 사용했습니다.
              </p>
              <CodeBlock
                code={`import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export default function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: Args,
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef?.current,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
}`}
                language={'typescript'}
              />
              <p>
                해당 훅을 통해 zustand에서 현재 화면에 보이는 section을 추적해
                상태를 업데이트 하도록 구현했습니다.
              </p>
              <p>
                또한 모바일, 배너 등 기존에 설정된 높이와 달라질 경우 해당
                높이를 계산식에 추가하여 높이를 재설정 하도록 훅을 구현했습니다.
              </p>
              <p>
                링크를 클릭할 시 해당 섹션의 최상단이 네비게이션 바로 아래쪽에
                위치하도록 ScrollMarginTop속성을 추가하였습니다.
              </p>
              <CodeBlock
                code={`import { useEffect } from 'react';

import { SECTION_NAME, SectionInfoList } from '@/constants';
import { useCurrentNavSection } from '@/stores';
import { bannerHeight, navHeight } from '@/styles/theme.css';
import pxToNumber from '@/utils/pxToNumber';

import useIntersectionObserver from './useIntersectionObserver';

const useUpdateCurrentSection = ({
  isMobile,
  isBanner,
  sectionName,
  sectionRef,
}: {
  isMobile: boolean;
  isBanner: boolean;
  sectionName: SECTION_NAME;
  sectionRef: React.RefObject<HTMLElement>;
}) => {
  const rootMargin = isMobile ? navHeight.mobile : navHeight.desktop;
  const bannerMargin = isMobile ? bannerHeight.mobile : bannerHeight.desktop;

  const updateCurrentSection = useCurrentNavSection(
    (state) => state.updateCurrent,
  );

  const entry = useIntersectionObserver(sectionRef, {
    rootMargin: rootMargin,
    threshold: 0.01,
  });

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isFullyVisible = rect.bottom <= window.innerHeight;
      const isLastSection = sectionName === SectionInfoList.at(-1);
      const recttopMargin = isMobile
        ? pxToNumber(navHeight.mobile) * 2
        : pxToNumber(navHeight.desktop);
      if (
        rect.top <=
          recttopMargin + pxToNumber(isBanner ? bannerMargin : '0px') &&
        rect.top > -1
      ) {
        updateCurrentSection(sectionName);
      }
      if (isFullyVisible && isLastSection) {
        updateCurrentSection(sectionName);
      }
    }
  };

  useEffect(() => {
    if (entry?.isIntersecting) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [entry?.isIntersecting]);
};

export default useUpdateCurrentSection;
`}
                language={'typescript'}
              />
            </section>
          </div>
        </div>
      </div>
      <DetailFooter />
    </>
  );
};

export default WoodangLayout;
