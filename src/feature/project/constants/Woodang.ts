import { DetailOverViewProps } from '../components/detail/DetailOverView';
import { SkillItem } from '../components/detail/DetailSkill';

const woodangDetailData: DetailOverViewProps = {
  project: '우당네트웍 메인페이지',
  period: '2024.01 ~ 2024.02',
  role: 'Front-End(100%)',
  link: ['https://woodangnetwork.com'],
  team: ['FE - 1', 'BE - 1', 'Designer - 2', 'PM - 1'],
} as const;

const woodangDescription: string = `(주)우당 네트웍의 메인 홈페이지입니다.

[프론트엔드]
반응형 웹사이트를 구현하였습니다
인터섹션 옵저버를 이용한 useIntersection Hook과 전역 상태관리를 이용해 특정 섹션에 위치하면 반응하는 네비게이션 바를 구현하였습니다.
I18n을 활용한 다국어 기능을 구현하였습니다.
네이버 지도 API를 활용해 본사의 위치 정보를 표시하는 지도를 구현하였습니다.
` as const;

const woodangSkills: SkillItem[] = [
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
    name: 'next-international',
    version: '@1.2.4',
    description: '다국어 처리를 위해 도입했습니다.',
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
      '관리자가 Quill로 작성하는 게시글을 받아와 띄워주기 위해 메인 페이지에서는 CSS만을 사용했습니다.',
  },
  {
    name: 'swiper',
    version: '@11.1.3',
    description: '메인페이지 상단의 슬라이더를 구현하기 위해 도입했습니다.',
  },
  {
    name: 'svgr',
    version: '@8.1.0',
    description:
      'svg를 컴포넌트화 하여 fill, stroke등 간단하게 설정을 조절할 수 있어 도입했습니다.',
  },
  {
    name: 'Vercel',
    version: '',
    description:
      ' 트래픽의 예상치가 높지 않아 비용 대비 AWS EC2와 비교했을때 파이프라인, CI/CD 구축의 공수가 더 적다는 판단으로 도입했습니다.',
  },
  {
    name: 'turborepo',
    version: '@2.0.0',
    description:
      'GRIDA 서비스와 UI를 공유하고 있었기 때문에 모노레포로 관리의 효율성을 높이기위해 리팩토링을 진행하며 도입했습니다.',
  },
] as const;

export { woodangDetailData, woodangDescription, woodangSkills };
