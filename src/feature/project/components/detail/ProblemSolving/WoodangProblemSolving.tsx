import {
  woodangFixedNavigationCode,
  woodangIndexLinkCode,
  woodangIntersectionObserverCode,
} from '@/feature/project/constants/Woodang';
import CodeBlock from '../CodeBlock';
import styles from './ProblemSolving.module.scss';

const WoodangProblemSolving = () => {
  return (
    <section>
      <p className='text-graytext'>Problem Solving</p>
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30 text-semibold'>
          인터섹션 옵저버를 이용한 네비게이션 바 구현
        </p>
        <p className='fs-24'>문제 상황</p>
        <p>
          디자이너로부터 네비게이션 바의 디자인과 기능 구현 요청을 받았습니다.
          피그마를 통해 디자인을 확인한 후, 이를 구현할 수 있는지
          문의가 있었습니다.
          <br />
          요청된 기능 명세는 다음과 같습니다:
          <br />
          - 네비게이션 바는 데스크톱에서는 상단에 고정
          <br />
          - 모바일에서는 특정 섹션 이후부터 상단에 고정
          <br />
          - 뷰포트에 위치한 섹션에 따라 네비게이션 바의 해당 섹션 링크가 활성화
          <br />
          요약하자면, 인덱스 활성화와 상단 고정이라는 두 가지 주요 기능이
          필요했습니다. 이를 해결하기 위해 특정 요소가 뷰포트에 위치했는지를
          감지하는 인터섹션 옵저버를 활용하기로 결정했습니다.
        </p>
        <p className='fs-24'>해결 과정</p>
        <p>
          먼저, 인터섹션 옵저버를 어디서든 사용할 수 있도록 커스텀 훅으로
          분리하여 정리했습니다.
        </p>
        <CodeBlock
          code={woodangIntersectionObserverCode}
          language='typescript'
        />
        <p>
          네비게이션 바의 고정 문제는, 해당 바가 스크롤의 최상단에 도달했을 때
          position: fixed 스타일을 적용하여 상단에 고정되도록 처리했습니다.
        </p>
        <CodeBlock code={woodangFixedNavigationCode} language='typescript' />
        <p>
          네비게이션 바의 인덱스 링크 활성화 기능은 각 섹션마다 인터섹션
          옵저버를 활용한 커스텀 훅을 통해 구현했습니다. 특정 섹션이 뷰포트에
          위치할 때, Zustand를 사용하여 현재 위치한 섹션 정보를 업데이트하도록
          설계했습니다.
        </p>
        <CodeBlock code={woodangIndexLinkCode} language='typescript' />
        <p className='fs-24'>결과</p>
        <p>
          이 컴포넌트를 구현하는 과정에서, 로직을 훅으로 분리하는 방법과
          인터섹션 옵저버에 대한 이해를 깊게 할 수 있는 좋은 기회가 되었습니다.
        </p>
      </div>
    </section>
  );
};

export default WoodangProblemSolving;
