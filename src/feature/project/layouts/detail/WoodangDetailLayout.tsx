'use client';

import Link from 'next/link';
import CodeBlock from '../../components/detail/CodeBlock';
import styles from './ProjectDetailLayout.module.scss';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import DetailImage from '../../components/detail/DetailImage';
import DetailFooter from '../../components/detail/DetailFooter';
import {
  woodangDescription,
  woodangDetailData,
  woodangSkills,
} from '../../constants/Woodang';
import DetailOverView from '../../components/detail/DetailOverView';
import DetailDescription from '../../components/detail/DetailDescription';
import DetailSkill from '../../components/detail/DetailSkill';

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
            <DetailOverView {...woodangDetailData} />
            <DetailDescription description={woodangDescription} />
            <DetailSkill skillList={woodangSkills} />
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
