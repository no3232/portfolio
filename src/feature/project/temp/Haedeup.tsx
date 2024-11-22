'use client';

import Link from 'next/link';
import { CodeBlock } from '../components/detail/CodeBlock';
import styles from './ProjectDetailLayout.module.scss';


import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import DetailImage from '../components/detail/DetailImage';
import DetailFooter from '../components/detail/DetailFooter';

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
            <section className={styles.overViewSectionGrid}>
              <div className={styles.projectTitle}>
                <p className='text-graytext'>Project</p>
                <h1 className='text-white h3'>Haedeup</h1>
              </div>
              <div>
                <p className='text-graytext'>Period</p>
                <p className='text-white fs-26'>2024.09 ~ 2024.10</p>
              </div>
              <div>
                <p className='text-graytext'>Role</p>
                <p className='text-white fs-26'>Front-End(100%)</p>
              </div>
              <div>
                <p className='text-graytext'>Link</p>
                <Link
                  href='https://haedeup.com'
                  className='text-white fs-26'
                  target='_blank'
                >
                  <p>https://haedeup.com</p>
                </Link>
              </div>
              <div>
                <p className='text-graytext'>Team</p>
                <p className='text-white fs-26'>FE - 1</p>
                <p className='text-white fs-26'>BE - 1</p>
                <p className='text-white fs-26'>Designer - 1</p>
                <p className='text-white fs-26'>PM - 1</p>
                <p className='text-white fs-26'>PO - 1</p>
              </div>
            </section>
            <section className={styles.descriptionSection}>
              <p className='text-graytext'>Description</p>
              <p className='text-white fs-24'>
                (주)우당 네트웍의 헬스 케어 서비스입니다.
                <br />
                유저가 사용하는 서비스(설문, 결과 캡쳐, 소셜 로그인 등)와
                <br />
                유저에게 전송하는 보고서를 자동으로 만드는 PDF 백 오피스툴을
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
                  <br />
                  리액트 쿼리를 이용한 서버패치도 사용했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>tailwindcss @3.4.10</p>
                <p>
                  tailwindCSS를 통해 디자인 시스템을 구성하고, css를 파일 대신
                  클래스 네임으로 사용하도록 도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>shadcn/UI @2.1.0</p>
                <p>
                  shadcn/UI를 통해 빠르게 디자인 시스템을 구성하고, 컴포넌트를
                  재사용하기 위해 도입했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>
                  @tanstack/react-query @5.37.1
                </p>
                <p>
                  서버로부터 받아오는 데이터의 전역 상태, 캐싱, loading 상태
                  등을 관리하기 위해 도입했습니다.
                  <br />
                  또한 ApolloClient 대신 GraphQL의 상태관리를 위해 사용합니다.
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
                <p className='text-white fs-24'>GraphQL</p>
                <p>
                  클라이언트 측에서 원하는 데이터를 조회하기 위해 도입했습니다.
                  <br />
                  API 문서 작성, 반복되는 API 중복을 줄이기 위해 사용했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>@graphql-codegen/cli @5.0.2</p>
                <p>
                  GraphQL 코드 생성을 통해 쿼리문을 작성하면 리액트 쿼리를 통해
                  API 함수를 자동으로 작성해줍니다.
                  <br />
                  코드 작성 시간을 줄이기 위해 사용했습니다.
                </p>
              </div>
              <div className={styles.skillItemDiv}>
                <p className='text-white fs-24'>turbo @2.1.0</p>
                <p>
                  모노레포를 통해 일관된 lint, config를 유지하고,
                  <br />
                  공통 컴포넌트를 package화 해서 재활용하기 위해 도입했습니다.
                </p>
              </div>
            </section>
            <section>
              <p className='text-graytext'>Problem Solving</p>
              <p className='fs-30'>History API를 이용한 usePannel 훅</p>
              <p>
                리액트 훅 폼을 이용하면서 중복되는 항목에 대한 Input이 많다는
                생각을 했습니다. 검증 로직 또한 비슷한 항목이 다수 존재했습니다.
                <br />
                예를 들어 로그인, 회원가입, 정보 수정에서 사용되는 id, 비밀번호,
                이름, 이메일, 주소 등의 항목이 있습니다.
                <br />
                따라서 컴파운드 컴포넌트 패턴을 이용해 중복되는 항목을
                컴포넌트화 하여 재사용성을 높였습니다.
              </p>
              <br />
              <p className='fs-30'>GraphQL 코드 생성기</p>
              <br />
              <p className='fs-30'>History API를 이용한 usePannel 훅</p>
              <br />
              <p className='fs-30'>History API를 이용한 usePannel 훅</p>
            </section>
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

export default HaedeupLayout;
