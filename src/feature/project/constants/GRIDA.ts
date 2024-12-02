import { DetailOverViewProps } from '../components/detail/DetailOverView';
import { SkillItem } from '../components/detail/DetailSkill';

const gridaDetailData: DetailOverViewProps = {
  project: 'GRIDA(Service, Admin)',
  period: '2024.01 ~ 2024.07',
  role: 'Front-End(100%)',
  link: [
    'https://grida.woodangnetwork.com',
    'https://grida-admin.woodangnetwork.com',
  ],
  team: ['FE - 1', 'BE - 1', 'Designer - 2', 'PM - 1'],
};

const gridaDescription = `(주)우당 네트웍의 실험 연구 대행서비스 신청 및 관리 페이지 입니다.

[ 상세 구현 사항 ]

[프론트엔드]
유저 페이지(실험신청, 관리, 문의, 결제), 관리자 페이지(실험 관리, 생성, 유저, 관리자 관리) 전체를 구현했습니다.
Next.js 미들웨어를 통해 로그인 쿠키를 검증하는 로직으로 사용자 인증을 구현하였습니다.
나이스 페이먼츠 결제 모듈을 도입하여 사용자 결제를 구현하였습니다.
우당네트웍 홈페이지의 게시글 작성 페이지를 Quill을 이용해 WYSIWYG에디터 형식으로 구현하였습니다. S3를 통해 이미지 업로드 및 라이브러리를 추가해 리사이즈 조절 기능을 추가하였습니다.
3개의 단일 레포 형식으로 되어있던 깃허브 레포지토리를 하나의 모노레포로 통합했습니다. UI를 공통 모듈(package)로 사용하도록 리팩토링을 진행했습니다.

[백엔드]
Pupeeteer를 이용한 견적서, 보고서 pdf 다운로드 로직을 구현하였습니다.
Nest.js, Prisma를 도입하고, NestCLS(Async Local Storage)를 통해 트랜잭션 처리를 구현하였습니다.`;

const gridaSkills: SkillItem[] = [
  {
    name: 'Next.js',
    version: '@14.2.3',
    description:
      'SSR, SEO를 위한 메타태그 설정, 이미지 최적화 등 next.js의 기능을 활용하기 위해 도입했습니다.',
  },
  {
    name: '@vanilla-extract/css',
    version: '@1.15.1',
    description:
      '제로런타임CSS를 통해 보다 빠른 렌더링과 타입 안정성을 가진 라이브러리를 사용하기 위해 도입했습니다.',
  },
  {
    name: '@tanstack/react-query',
    version: '@5.37.1',
    description:
      '서버로부터 받아오는 데이터의 전역 상태, 캐싱, loading 상태 등을 관리하기 위해 도입했습니다.',
  },
  {
    name: 'zustand',
    version: '@4.5.2',
    description:
      '컴포넌트의 상태와 같이 클라이언트 측에서 사용할 전역 상태(ex. 모달 등)을 관리하기 위해 도입했습니다.',
  },
  {
    name: 'cookie',
    version: '@0.6.0',
    description:
      'Next.js 미들웨어에서 쿠키를 통해 사용자의 로그인 검증에 사용했습니다.',
  },
  {
    name: 'react-hook-form',
    version: '@7.51.4',
    description:
      '사용자가 제출하는 form의 검증을 위해 도입했습니다. 컴파운드 컴포넌트 패턴을 주로 이용했습니다.',
  },
  {
    name: 'react-quill',
    version: '@2.0.0',
    description:
      '관리자가 WISIWYG 에디터를 이용해 게시글을 작성할 수 있도록 구현하기위해 도입했습니다.',
  },
  {
    name: 'swiper',
    version: '@11.1.3',
    description: '네비게이션 바 옆의 광고 배너를 만들기 위해 도입했습니다.',
  },
  {
    name: 'svgr',
    version: '@8.1.0',
    description:
      'svg를 컴포넌트화 하여 fill, stroke등 간단하게 설정을 조절할 수 있어 도입했습니다.',
  },
  {
    name: 'puppeteer',
    version: '@22.9.0',
    description:
      '서버측에서 퍼페티어를 이용해 견적서, 보고서 등의 문서를 PDF로 다운로드 받을 수 있도록 구현하기 위해 도입했습니다.',
  },
  {
    name: 'react-daum-postcode',
    version: '@3.1.3',
    description: '회원가입시 주소를 입력받기 위해 도입했습니다.',
  },
  {
    name: 'date-fns',
    version: '@3.6.0',
    description: '간편한 날짜 처리를 위해 도입했습니다.',
  },
];

export { gridaDetailData, gridaDescription, gridaSkills };
