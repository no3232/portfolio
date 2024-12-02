import { DetailOverViewProps } from '../components/detail/DetailOverView';
import { SkillItem } from '../components/detail/DetailSkill';

const haedeupDetailData: DetailOverViewProps = {
  project: 'Haedeup',
  period: '2024.09 ~ 2024.10',
  role: 'Front-End(100%)',
  link: ['https://haedeup.com'],
  team: ['FE - 1', 'BE - 1', 'Designer - 1', 'PM - 1', 'PO - 1'],
};

const haedeupDescription = `(주)우당 네트웍의 헬스 케어 서비스입니다.

[ 상세 구현 사항 ]

[프론트엔드]
엔드 포인트 관리와 ui 재사용성을 위해 모노레포를 도입했습니다.
tailwind기반의 빠른 스타일링, 디자인 토큰 생성 및 커스터마이징을 위해 shadcn/ui를 도입했습니다.
useFunnel훅을 이용해 추후 개발 예정이었던 웹뷰 형식에서 앱과 비슷한 동작을 할 수 있도록 구현했습니다.
백엔드와 원활한 소통 및 API문서 작업 공수를 줄이기 위해 GraphQL 도입, code generater를 통한 API, 타입, react query 작성을 자동화 했습니다.
해듭의 피부 분석 리포트 PDF 자동화 백 오피스 툴을 구현했습니다. Next.js puppeteer, API Router, Prisma, SQLite를 통해 간단한 백엔드를 구현했습니다.

[백엔드]
Nest.js 기반 GraphQL을 도입했습니다.
`;

const haedeupSkills: SkillItem[] = [
  {
    name: 'Next.js',
    version: '@14.2.3',
    description: `SSR, SEO를 위한 메타태그 설정, 이미지 최적화 등 next.js의 기능을 활용하기 위해 도입했습니다.\n리액트 쿼리를 이용한 서버패치도 사용했습니다.`,
  },
  {
    name: 'tailwindcss',
    version: '@3.4.10',
    description:
      'tailwindCSS를 통해 디자인 시스템을 구성하고, css를 파일 대신 클래스 네임으로 사용하도록 도입했습니다.',
  },
  {
    name: 'shadcn/UI',
    version: '@2.1.0',
    description:
      'shadcn/UI를 통해 빠르게 디자인 시스템을 구성하고, 컴포넌트를 재사용하기 위해 도입했습니다.',
  },
  {
    name: '@tanstack/react-query',
    version: '@5.37.1',
    description: `서버로부터 받아오는 데이터의 전역 상태, 캐싱, loading 상태 등을 관리하기 위해 도입했습니다.\n또한 ApolloClient 대신 GraphQL의 상태관리를 위해 사용합니다.`,
  },
  {
    name: 'zustand',
    version: '@4.5.2',
    description:
      '컴포넌트의 상태와 같이 클라이언트 측에서 사용할 전역 상태(ex. 모달 등)을 관리하기 위해 도입했습니다.',
  },
  {
    name: 'GraphQL',
    version: '',
    description: `클라이언트 측에서 원하는 데이터를 조회하기 위해 도입했습니다.\nAPI 문서 작성, 반복되는 API 중복을 줄이기 위해 사용했습니다.`,
  },
  {
    name: '@graphql-codegen/cli',
    version: '@5.0.2',
    description: `GraphQL 코드 생성을 통해 쿼리문을 작성하면 리액트 쿼리를 통해 API 함수를 자동으로 작성해줍니다.\n코드 작성 시간을 줄이기 위해 사용했습니다.`,
  },
  {
    name: 'turbo',
    version: '@2.1.0',
    description: `모노레포를 통해 일관된 lint, config를 유지하고, 공통 컴포넌트를 package화 해서 재활용하기 위해 도입했습니다.`,
  },
];

export { haedeupDetailData, haedeupDescription, haedeupSkills };
