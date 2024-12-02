export interface Skill {
  title: string;
  score: number;
  imageUrl: string;
  description: string[];
}

export const skills: Skill[] = [
  {
    title: 'HTML',
    score: 5,
    imageUrl: '/skills/HTML5.svg',
    description: [
      'HTML5의 시맨틱 태그를 활용한 웹 표준 마크업을 할 수 있습니다.',
      'SEO 최적화를 위한 메타태그를 활용할 수 있습니다.',
    ],
  },
  {
    title: 'CSS',
    score: 6,
    imageUrl: '/skills/CSS3.svg',
    description: [
      'Flexbox와 Grid를 활용한 반응형 레이아웃을 구현할 수 있습니다.',
      'GSAP을 활용하여 순차적 애니메이션, 스크롤 인터랙션을 구현할 수 있습니다.',
      'CSS-in-JS, tailwind 활용 경험이 있습니다.',
      'SCSS/SASS 활용 경험이 있습니다.',
    ],
  },
  {
    title: 'JavaScript',
    score: 5,
    imageUrl: '/skills/JavaScript.svg',
    description: [
      'ES6+문법과 비동기 프로그래밍(Promise, async/await)를 활용할 수 있습니다.',
      '브라우저 API와 DOM 조작을 할 수 있습니다.',
    ],
  },
  {
    title: 'TypeScript',
    score: 4,
    imageUrl: '/skills/TypeScript.svg',
    description: [
      '인터페이스와 타입 정의를 통해 개발환경에서 타입 안정성을 높일 수 있습니다.',
      '제네릭과 같은 문법을 이해하고 사용합니다.',
    ],
  },
  {
    title: 'React',
    score: 6,
    imageUrl: '/skills/React.svg',
    description: [
      'V-DOM/Fiber의 렌더링 원리를 이해하고 사용합니다.',
      'Custom Hook 패턴을 사용할 수 있습니다.',
      '전역 상태 관리(tanstackQuery, zustand)를 활용할 수 있습니다.',
    ],
  },
  {
    title: 'Next.js',
    score: 6,
    imageUrl: '/skills/Nextjs.svg',
    description: [
      '14+, App router, ServerComponent를 활용할 수 있습니다.',
      'SSR, 서버 패치를 활용할 수 있습니다.',
      'App Router기반의 백엔드 API를 구현할 수 있습니다.',
    ],
  },
  {
    title: 'Nest.js',
    score: 3,
    imageUrl: '/skills/Nestjs.svg',
    description: [
      'Rest API, BFF(GraphQL) API를 구현 할 수 있습니다.',
      'Passport, Guards, Interceptors를 통해 사용자 인증, 가입, 토큰 발급의 절차를 구현할 수 있습니다.',
      'Prisma ORM, DB연결, 트랜잭션 처리를 활용할 수 있습니다.',
    ],
  },
  {
    title: 'Prisma',
    score: 3,
    imageUrl: '/skills/Prisma.svg',
    description: [
      'Schema 설계와 마이그레이션 관리를 할 수 있습니다.',
      'AsyncLocalStorage를 통한 트랜잭션 처리를 할 수 있습니다.',
    ],
  },
  {
    title: 'GraphQL',
    score: 3,
    imageUrl: '/skills/GraphQL.svg',
    description: [
      'Apollo Server(Nest.js)를 활용할 수 있습니다.',
      'Schema 설계와 Type 정의를 할 수 있습니다.',
      'Codegen, React Query API를 자동 생성할 수 있습니다.',
    ],
  },
  {
    title: 'turborepo',
    score: 4,
    imageUrl: '/skills/turborepo.svg',
    description: [
      '모노레포를 app과 package로 구분해 설계하고 관리할 수 있습니다.',
      'turborepo의 빌드 기능을 통해 CI/CD파이프라인을 구축할 수 있습니다.',
    ],
  },
  {
    title: 'Git/Github',
    score: 4,
    imageUrl: '/skills/Github.svg',
    description: [
      'Git Flow전략을 이해하고 사용합니다.',
      'Github Action을 통해 파이프라인을 구축할 수 있습니다.',
    ],
  },
  {
    title: 'AWS EC2',
    score: 3,
    imageUrl: '/skills/AWS.svg',
    description: ['EC2 인스턴스 관리와 배포 경험이 있습니다.'],
  },
  {
    title: 'Vercel',
    score: 4,
    imageUrl: '/skills/Vercel.svg',
    description: [
      'Next.js 프로젝트 배포와 관리 경험이 있습니다.',
      '모노페포 기반 프로젝트 배포와 관리가 가능합니다.',
    ],
  },
  {
    title: 'Docker',
    score: 3,
    imageUrl: '/skills/Docker.svg',
    description: [
      'Dockerfile 작성과 이미지 빌드가 가능합니다.',
      '멀티 스테이지 빌드를 구현해본 경험이 있습니다.',
    ],
  },
] as const;
