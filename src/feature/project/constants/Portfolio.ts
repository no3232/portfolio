import { DetailOverViewProps } from '../components/detail/DetailOverView';
import { SkillItem } from '../components/detail/DetailSkill';

const portfolioDetailData: DetailOverViewProps = {
  project: 'Portfolio',
  period: '2024.11 ~ 2024.12',
  role: 'Front-End(100%)',
  link: [
    'https://www.restaurant32.com/',
    'https://github.com/no3232/portfolio',
  ],
  team: ['FE - 1'],
} as const;

const portfolioDescription = `개인 포트폴리오 페이지입니다. 원하는 만큼 인터랙션을 듬뿍 넣어봤습니다.\nGSAP을 활용하여 인터랙션, 애니메이션을 구현하였습니다.\n해당 프로젝트에서 사용한 Lenis 라이브러리의 자동완성 정렬 문제를 issue로 제기해 해결했습니다.`;

const portfolioSkillList: SkillItem[] = [
  {
    name: 'Next.js',
    version: '@14.2.15',
    description:
      '가장 익숙한 스택을 선정했습니다.\n또한 Meta Tag를 쉽게 설정할 수 있고, 리액트의 기능을 활용하기위해사용했습니다.',
  },
  {
    name: 'SASS',
    version: '@1.80.3',
    description:
      '전처리기 CSS를 한 번도 사용해보지 않아 학습을 위해 사용했습니다. 변수, each, mixin 등의 기능을 사용했습니다.',
  },
  {
    name: 'GSAP',
    version: '@3.1.15',
    description:
      '순차적 애니메이션과 스크롤 트리거를 통한 컴포넌트 고정, 애니메이션을 구현하기위해 도입했습니다.',
  },
  {
    name: 'lenis',
    version: '@1.1.17',
    description:
      'GSAP Smooth Scroll 대신 효과를 구현하고 스크롤을 조절하기위해 도입했습니다.',
  },
  {
    name: 'highlight.js',
    version: '@11.11.0',
    description: '코드블럭을 사용하기위해 도입했습니다.',
  },
  {
    name: 'Vercel',
    version: '',
    description:
      '파이프라인, CI/CD 구축에 따른 공수를 줄이기 위해 도입했습니다.',
  },
] as const;

const lenisIssueCode = `// package.json
{
  "exports": {
    ".": {
      "types": "./dist/lenis.d.ts",
      "default": "./dist/lenis.mjs"
    },
    "./dist/*": "./dist/*",  // 문제가 되는 부분
    "./react": {
      "types": "./dist/lenis-react.d.ts", 
      "default": "./dist/lenis-react.mjs"
    }
    // ... 기타 설정들
  }
}` as const;

const gsapCode = `useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#project-grid-section',
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: true,
      snap: {
        snapTo: 1 / 3,
        duration: 0.5,
        ease: 'none',
      },
    },
  });

  tl.fromTo(
    \`#\${projectList[0].title}\`,
    {
      // 초기 상태
    },
    {
      // 애니메이션 상태
    },
  ).fromTo(
    // 다음 애니메이션...
  );
}, []);` as const;

const sassCode = `$typography-scale: (
  // Body sizes
  'body': (
      '10': (size: 1rem, line-height: 1.2em),
      ...
  ),

  // Headings
  'heading': (
      'h1': (size: 18rem, line-height: 1em),
      ...
  )
);

// Font Size
@each $category, $variants in $typography-scale {
  @each $variant, $style in $variants {
      $prefix: if($category == "body", "fs-", "");
      .#{$prefix}#{$variant} {
          font-size: map-get($style, size);
          line-height: map-get($style, line-height);
      }
  }
}

// Font Size Mixins
@mixin typography($category, $variant) {
  @if map-has-key($typography-scale, $category) {
      $category-map: map-get($typography-scale, $category);
      @if map-has-key($category-map, $variant) {
          $style: map-get($category-map, $variant);
          font-size: map-get($style, size);
          line-height: map-get($style, line-height);
      } @else {
          @error "Variant '#{$variant}' not found in #{$category} category";
      }
  } @else {
      @error "Category '#{$category}' not found in typography scale";
  }
}` as const;

export {
  portfolioDetailData,
  portfolioDescription,
  portfolioSkillList,
  lenisIssueCode,
  gsapCode,
  sassCode,
};
