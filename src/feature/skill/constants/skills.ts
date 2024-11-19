export interface Skill {
  title: string;
  score: number;
  imageUrl: string;
  description: string[];
}

export const skills: Skill[] = [
  {
    title: 'HTML',
    score: 8,
    imageUrl: '/skills/HTML5.svg',
    description: [
      'HTML5의 시맨틱 태그를 활용한 웹 표준 마크업',
      '웹 접근성을 고려한 WAI-ARIA 속성 활용',
      'SEO 최적화를 위한 메타태그 활용',
      'Canvas API를 활용한 그래픽 구현 경험'
    ],
  },
  {
    title: 'CSS',
    score: 8,
    imageUrl: '/skills/CSS3.svg',
    description: [
      'SCSS/SASS를 활용한 모듈화된 스타일링',
      'Flexbox와 Grid를 활용한 반응형 레이아웃 구현',
      'CSS 애니메이션과 트랜지션 구현',
      'CSS-in-JS 라이브러리 활용 경험'
    ],
  },
  {
    title: 'JavaScript',
    score: 9,
    imageUrl: '/skills/JavaScript.svg',
    description: [
      'ES6+ 문법과 최신 JavaScript 기능 활용',
      '비동기 프로그래밍 (Promise, async/await)',
      '브라우저 API와 DOM 조작',
      '모듈 번들러와 개발 도구 활용'
    ],
  },
  {
    title: 'TypeScript',
    score: 9,
    imageUrl: '/skills/TypeScript.svg',
    description: [
      '타입 시스템을 활용한 안정적인 코드 작성',
      '제네릭과 유틸리티 타입 활용',
      '인터페이스와 타입 정의를 통한 코드 품질 향상',
      '타입스크립트 컴파일러 설정 최적화'
    ],
  },
  {
    title: 'React',
    score: 9,
    imageUrl: '/skills/React.svg',
    description: [
      'React 18의 새로운 기능 활용',
      'Server Components와 Suspense 활용',
      '성능 최적화와 메모이제이션',
      'Custom Hooks 설계와 상태 관리'
    ],
  },
  {
    title: 'Next.js',
    score: 9,
    imageUrl: '/skills/Nextjs.svg',
    description: [
      'App Router와 Server Components 활용',
      'ISR, SSR, CSR 전략적 활용',
      'Next.js 13+ 최신 기능 활용',
      '성능 최적화와 SEO 구현'
    ],
  },
  {
    title: 'Nest.js',
    score: 8,
    imageUrl: '/skills/Nestjs.svg',
    description: [
      '모듈화된 백엔드 아키텍처 설계',
      'TypeORM을 활용한 데이터베이스 연동',
      'Guards와 Interceptors 활용',
      'REST API와 마이크로서비스 구현'
    ],
  },
  {
    title: 'Prisma',
    score: 8,
    imageUrl: '/skills/Prisma.svg',
    description: [
      'Schema 설계와 마이그레이션 관리',
      'TypeScript와의 완벽한 통합',
      'Relations와 트랜잭션 처리',
      'Query 최적화와 성능 모니터링'
    ],
  },
  {
    title: 'GraphQL',
    score: 8,
    imageUrl: '/skills/GraphQL.svg',
    description: [
      'Apollo Server/Client 활용',
      'Schema 설계와 Type 정의',
      'Query 최적화와 캐싱 전략',
      'Subscription을 활용한 실시간 기능 구현'
    ],
  },
  {
    title: 'turborepo',
    score: 7,
    imageUrl: '/skills/Turborepo.svg',
    description: [
      '모노레포 아키텍처 설계와 관리',
      '빌드 캐싱과 의존성 관리',
      '워크스페이스 설정 최적화',
      'CI/CD 파이프라인 구축'
    ],
  },
  {
    title: 'Git/Github',
    score: 9,
    imageUrl: '/skills/Github.svg',
    description: [
      'Git Flow 전략 활용',
      'Github Actions를 통한 CI/CD',
      'Branch 전략과 코드 리뷰',
      'Issue와 PR 템플릿 관리'
    ],
  },
  {
    title: 'AWS EC2',
    score: 7,
    imageUrl: '/skills/AWS.svg',
    description: [
      'EC2 인스턴스 관리와 배포',
      'Load Balancer 설정',
      'Security Group 설정',
      'Auto Scaling 구성'
    ],
  },
  {
    title: 'Vercel',
    score: 8,
    imageUrl: '/skills/Vercel.svg',
    description: [
      'Next.js 프로젝트 배포와 관리',
      'Edge Functions 활용',
      '도메인 설정과 SSL 인증서 관리',
      '성능 모니터링과 분석'
    ],
  },
  {
    title: 'Docker',
    score: 7,
    imageUrl: '/skills/Docker.svg',
    description: [
      'Dockerfile 작성과 이미지 빌드',
      'Docker Compose를 활용한 개발 환경 구성',
      '컨테이너 오케스트레이션',
      '멀티 스테이지 빌드 최적화'
    ],
  },
];
