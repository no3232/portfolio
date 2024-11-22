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
      'HTML5의 시맨틱 태그를 활용한 웹 표준 마크업',
      'SEO 최적화를 위한 메타태그 활용',
    ],
  },
  {
    title: 'CSS',
    score: 6,
    imageUrl: '/skills/CSS3.svg',
    description: [
      'Flexbox와 Grid를 활용한 반응형 레이아웃 구현',
      'CSS 애니메이션과 트랜지션 구현',
      'GSAP 스크롤 트리거와 순차적 애니메이션 구현',
      'CSS-in-JS, tailwind 활용 경험',
      'SCSS/SASS 활용 경험',
    ],
  },
  {
    title: 'JavaScript',
    score: 5,
    imageUrl: '/skills/JavaScript.svg',
    description: [
      'ES6+ 문법과 최신 JavaScript 기능 활용',
      '비동기 프로그래밍 (Promise, async/await)',
      '브라우저 API와 DOM 조작',
    ],
  },
  {
    title: 'TypeScript',
    score: 4,
    imageUrl: '/skills/TypeScript.svg',
    description: [
      '타입 시스템을 활용한 안정적인 코드 작성',
      '인터페이스와 타입 정의를 통한 코드 품질 향상',
      '타입스크립트 컴파일러 설정 최적화',
    ],
  },
  {
    title: 'React',
    score: 6,
    imageUrl: '/skills/React.svg',
    description: [
      'V-DOM/Fiber 렌더링 원리 이해',
      'Custom Hooks 설계와 상태 관리',
      '전역 상태관리 활용(React Query, Zustand)',
    ],
  },
  {
    title: 'Next.js',
    score: 6,
    imageUrl: '/skills/Nextjs.svg',
    description: [
      'Next.js 14+ 활용',
      'App Router와 Server Components 활용',
      'ISR, SSR, CSR 활용',
      'React Query를 통한 서버 패치 구현',
    ],
  },
  {
    title: 'Nest.js',
    score: 3,
    imageUrl: '/skills/Nestjs.svg',
    description: [
      '간단한 REST API 구현 가능',
      'GraphQL 활용 경험',
      'Passport를 통한 인증 구현',
      'Prisma를 활용한 데이터베이스 연동',
      'Guards와 Interceptors 활용',
    ],
  },
  {
    title: 'Prisma',
    score: 3,
    imageUrl: '/skills/Prisma.svg',
    description: [
      'Schema 설계와 마이그레이션 관리',
      'AsyncLocalStorage를 통한 트랜잭션 처리',
    ],
  },
  {
    title: 'GraphQL',
    score: 3,
    imageUrl: '/skills/GraphQL.svg',
    description: [
      'Apollo Server(Nest.js) 활용',
      'Schema 설계와 Type 정의',
      'Codegen, React Query API 자동 생성',
    ],
  },
  {
    title: 'turborepo',
    score: 4,
    imageUrl: '/skills/turborepo.svg',
    description: [
      '모노레포 아키텍처 설계와 관리',
      '빌드 캐싱과 의존성 관리',
      '워크스페이스 설정',
      'CI/CD 파이프라인 구축',
    ],
  },
  {
    title: 'Git/Github',
    score: 4,
    imageUrl: '/skills/Github.svg',
    description: [
      'Git Flow 전략 활용',
      'Github Actions를 통한 CI/CD',
      'Issue와 PR 템플릿 관리',
    ],
  },
  {
    title: 'AWS EC2',
    score: 3,
    imageUrl: '/skills/AWS.svg',
    description: ['EC2 인스턴스 관리와 배포'],
  },
  {
    title: 'Vercel',
    score: 4,
    imageUrl: '/skills/Vercel.svg',
    description: [
      'Next.js 프로젝트 배포와 관리',
      '모노레포 기반 프로젝트 배포와 관리',
      '도메인 설정과 SSL 인증서 관리',
    ],
  },
  {
    title: 'Docker',
    score: 3,
    imageUrl: '/skills/Docker.svg',
    description: [
      'Dockerfile 작성과 이미지 빌드',
      'Docker Compose를 활용한 개발 환경 구성',
      '멀티 스테이지 빌드 구현 경험',
    ],
  },
] as const;
