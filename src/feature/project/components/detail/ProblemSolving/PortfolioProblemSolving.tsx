import Link from 'next/link';
import styles from './ProblemSolving.module.scss';
import CodeBlock from '@/feature/project/components/detail/CodeBlock';
import { gsapCode, lenisIssueCode, sassCode } from '@/feature/project/constants/Portfolio';

const PortfolioProblemSolving = () => {
  return (
    <section>
      <p className='text-graytext'>Problem Solving</p>
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30 text-semibold'>
          Lenis 라이브러리 자동완성 이슈 해결 경험
        </p>
        <p className='fs-24'>문제 상황</p>
        <p>
          Lenis 라이브러리 사용 중 IDE에서 자동완성 기능이 Readme와
          다르게 동작하는 문제가 발생했습니다. 정상적인 import 경로
          대신 /dist 폴더의 경로가 우선적으로 추천되었습니다.
        </p>
        <p className='fs-24'>원인 분석</p>
        <p>package.json의 exports 설정에서 문제가 발생했습니다.</p>
        <CodeBlock code={lenisIssueCode} language='json' />
        <p>
          ./dist/* 와일드카드 설정이 다른 경로들보다 상위에 위치하여, 모든
          자동완성 추천에서 /dist 경로가 우선적으로 추천되는 문제가
          발생했습니다.
        </p>
        <p className='fs-24'>해결 방법</p>
        <p>
          1. 문제점을 파악하여 라이브러리의 GitHub 이슈로 제기
          <br />
          2. 컨트리뷰터들이 이슈를 통해 exports 설정의 우선순위 조정 필요성 확인
          <br />
          3. 수정 사항이 반영되어 이슈 해결
          <br />
          링크{' '}
          <Link
            href='https://github.com/darkroomengineering/lenis/issues/414'
            target='_blank'
          >
            https://github.com/darkroomengineering/lenis/issues/414
          </Link>
        </p>
        <p className='fs-24'>결과</p>
        <p>
          exports 설정의 우선순위가 조정되어 의도한 대로 자동완성이 동작하게
          되었습니다. 이를 통해 라이브러리가 1.1.17로 업데이트된 부분에 해당
          코드 수정이 포함되어 개선되었습니다. 오픈소스 프로젝트에 기여하는 좋은
          기회가 되었으며, 패키지의 exports 설정이 자동완성에 미치는 영향을
          이해하는 계기가 되었습니다.
        </p>
      </div>
      <br />
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30 text-semibold'>GSAP을 활용한 애니메이션 구현</p>
        <p className='fs-24'>라이브러리 선정 배경</p>
        <p>
          인터랙션과 애니메이션 구현에 예전부터 관심을 가지고 있었고,
          포트폴리오를 웹페이지로 구현하면서 기술을 적용하며 학습하고자
          도입했습니다. GSAP과 프레이머 모션 중 커뮤니티가 좀 더 많고 널리
          사용되고 있는 GSAP으로 선택했습니다.
          <br />
          복잡한 순차 애니메이션과 스크롤 트리거를 활용한 인터렉션을 주로 활용
          했습니다.
        </p>
        <p className='fs-24'>주요 기능 구현</p>
        <p>
          Scroll Trigger를 이용해 Project List를 구현하였습니다.
          <br />
          Scroll Trigger의 pin 기능을 이용해 프로젝트 섹션을 뷰포트에
          고정시켰습니다. 또한 슬라이더 형식처럼 다음 화면으로 자연스럽게 넘어갈
          수 있도록 snap 기능을 이용해 다른 프로젝트가 일부만 스크롤 되어도
          자동으로 다음 프로젝트로 부드럽게 전환되도록 구현했습니다.
        </p>
        <CodeBlock code={gsapCode} language='javascript' />
      </div>
      <br />
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30 text-semibold'>SASS - CSS 전처리기 사용</p>
        <p className='fs-24'>라이브러리 선정 배경</p>
        <p>
          인터랙션과 애니메이션 구현에 예전부터 관심을 가지고 있었고,
          포트폴리오를 웹페이지로 구현하면서 기술을 적용하며 학습하고자
          도입했습니다. GSAP과 프레이머 모션 중 커뮤니티가 좀 더 많고 널리
          사용되고 있는 GSAP으로 선택했습니다.
          <br />
          복잡한 순차 애니메이션과 스크롤 트리거를 활용한 인터렉션을 주로 활용
          했습니다.
        </p>
        <p className='fs-24'>주요 기능 구현</p>
        <p>
          다양한 스타일링 도구를 사용해본 경험이 있습니다. 순수 CSS부터
          Tailwind와 같은 유틸리티 라이브러리, 그리고 CSS-in-JS까지 폭넓게
          활용해왔습니다. 하지만 CSS 전처리기인 SCSS 계열은 사용해본 적이
          없었기에, 학습 목적으로 도입하게 되었습니다.
          <br />
          SCSS를 통해 변수 지정과 each, mixin을 활용한 클래스 자동 생성 등의
          기능을 주로 사용해 스타일링의 효율성을 높였습니다.
        </p>
        <CodeBlock code={sassCode} language='scss' />
      </div>
    </section>
  );
};

export default PortfolioProblemSolving;
