'use client';

import Link from 'next/link';
import { CodeBlock } from '../components/detail/CodeBlock';
import styles from './ProjectDetailLayout.module.scss';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import ContactLayout from '@/feature/contact/layouts/ContactLayout';
import { ScrollTrigger } from 'gsap/all';

const ProjectDetailLayout = () => {

  useGSAP(() => {
    // 이미지 섹션 핀 설정
    ScrollTrigger.create({
      trigger: '#project-detail-image',
      start: 'top top',
      pin: true,
      pinSpacing: false,
      refreshPriority: 2
    });

    // 인덱스 고정
    gsap.to('#project-detail-index', {
      scrollTrigger: {
        trigger: '#project-detail-section-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        pin: '#project-detail-index',
        refreshPriority: 1,
      },
    });
  });

  return (
    <>
      <div id='main-contents' style={{ zIndex: 2 }}>
        <div className={styles.detailImageSection} id='project-detail-image'>
          여기는 이미지 풀로 짜는 디브
        </div>
        <div
          className={clsx('grid', styles.detailSectionWrapper)}
          id='project-detail-section-wrapper'
        >
          <div className={styles.detailIndexSection} id='project-detail-index'>
            <div>
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
            </div>
          </div>
          <div className={styles.detailContentSection}>
            <section className={styles.overViewSectionGrid}>
              <div className={styles.projectTitle}>
                <p className='text-graytext'>Project</p>
                <h1 className='text-white h3'>GRIDA</h1>
              </div>
              <div>
                <p className='text-graytext'>Period</p>
                <p className='text-white fs-26'>2024.01.01 ~ 2024.01.01</p>
              </div>
              <div>
                <p className='text-graytext'>Role</p>
                <p className='text-white fs-26'>Front-End(100%)</p>
              </div>
              <div>
                <p className='text-graytext'>Link</p>
                <Link
                  href='https://grida.woodangnetwork.com'
                  className='text-white fs-26'
                  target='_blank'
                >
                  https://grida.woodangnetwork.com
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
              <p className='text-white fs-26'>여기는 디스크립션 영역입니다.</p>
              <p className='text-white fs-26'>여기는 디스크립션 영역입니다.</p>
              <p className='text-white fs-26'>
                여기는 디스크립션 영역입니다. 여기는 디스크립션 영역입니다.
                여기는 디스크립션 영역입니다. 여기는 디스크립션 영역입니다.
                여기는 디스크립션 영역입니다. 여기는 디스크립션 영역입니다.
                여기는 디스크립션 영역입니다.
              </p>
              <p className='text-white fs-26'>
                여기는 디스크립션 영역입니다. 여기는 디스크립션 영역입니다.
                여기는 디스크립션 영역입니다. 여기는 디스크립션 영역입니다.
                여기는 디스크립션 영역입니다. 여기는 디스크립션 영역입니다.
                여기는 디스크립션 영역입니다.
              </p>
            </section>
            <section>
              <p className='text-graytext'>Skill</p>
              <p className='text-white fs-26'>Next.js @ 14.2.14</p>
              <p>
                뭘 위해 넣었는가... SSR... SSR과 서버패치가 필요했기
                때문이다아아아아아아앗!
              </p>
              <p className='text-white fs-26'>Next.js @ 14.2.14</p>
              <p className='text-white fs-26'>Next.js @ 14.2.14</p>
              <p className='text-white fs-26'>Next.js @ 14.2.14</p>
            </section>
            <section>
              <p className='text-graytext'>Problem Solving</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <p>거 저기 뭐냐 그 .... 문제가 이런게 있었는데요...</p>
              <CodeBlock
                code={`const highlightedCode = hljs.highlight(
                      '<span>Hello World!</span>',
                      { language: 'xml' }
                    ).value`}
                language={'typescript'}
              />
              <p>요래 해결 했심다!</p>
              <p>요래 해결 했심다!</p>
              <p>요래 해결 했심다!</p>
              <p>요래 해결 했심다!</p>
              <p>요래 해결 했심다!</p>
            </section>
            <section>
              <p className='text-graytext'>Outcome</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
              <p>여기는 결과 영역입니다.</p>
            </section>
          </div>
        </div>
      </div>
      <ContactLayout />
    </>
  );
};

export default ProjectDetailLayout;
