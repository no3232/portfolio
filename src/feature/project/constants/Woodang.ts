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

const woodangIntersectionObserverCode = `// threshold, rootMargin 등을 설정해서 IntersectionObserver의 설정을 할 수 있도록 정의
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
    const node = elementRef?.current;
    // CSR 환경에서만 동작하도록 조건문
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    // 새로운 인터섹션 옵저버를 생성
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

		// 해당 컴포넌트가 언마운트 되면 옵저버를 삭제
    return () => observer.disconnect();
  }, [
    elementRef?.current,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
}`;

const woodangFixedNavigationCode = `// 모바일 네브바의 경우 Zustand를 통해 뷰포트 최상단에 위치하는지를 감지
export default function MobileNavBar() {
  const isTop = useNavIsTop((state) => state.isTop);
	...
}

// 모바일에서 네브바가 위치한 섹션
const GridaSection = () => {
	// 뷰포트의 넓이가 모바일인지 확인하는 훅
  const isMoblie = useIsMobile();
  // 배너의 경우 최상단에 위치하기 때문에 배너가 있으면 고정하는 위치가 달라집니다.
  // 배너의 상태 또한 여러군데서 사용할 수 있기 떄문에 훅으로 뺴두었습니다.
  const { isBanner } = useBanner();

  const sectionRef = useRef<HTMLDivElement | null>(null);

	// 인터섹션 옵저버 훅을 통해 해당 섹션에서 네비게이션의 위치를 계산
  const entry = useIntersectionObserver(sectionRef, {
    threshold: 0,
    rootMargin: \`\${
      -pxToNumber(navHeight.mobile) - pxToNumber(bannerHeight.mobile)
    }px\`,
  });

	// zustand를 통해 뷰포트의 최상단에 위치했다면 true로 변경하도록 전역 상태로 설정
  const updateIsTop = useNavIsTop((state) => state.updateIsTop);

  useEffect(() => {
    if (entry) updateIsTop(!entry.isIntersecting);
  }, [entry]);
  ...
}`;

const woodangIndexLinkCode = `// zustand를 통한 현재 섹션 위치 관리
const currentSection = useCurrentNavSection((state) => state.current);

// 섹션마다 현재 위치를 업데이트 할 수 있도록 훅으로 로직을 추출
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
	// 모바일과 데스크탑, 배너의 유무에 따라 루트 마진을 설정
  const rootMargin = isMobile ? navHeight.mobile : navHeight.desktop;
  const bannerMargin = isMobile ? bannerHeight.mobile : bannerHeight.desktop;

	// zustand를 이용한 전역 섹션 상태 관리
  const updateCurrentSection = useCurrentNavSection(
    (state) => state.updateCurrent,
  );

	// 인터섹션 옵저버를 활용해 뷰포트에 위치하는 것을 감지
  const entry = useIntersectionObserver(sectionRef, {
    rootMargin: rootMargin,
    threshold: 0.01,
  });

	// 스크롤 이벤트에 따라 섹션을 설정하도록 함수를 구현했습니다.
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

export default useUpdateCurrentSection;`;

export { woodangDetailData, woodangDescription, woodangSkills, woodangIntersectionObserverCode, woodangFixedNavigationCode, woodangIndexLinkCode };
