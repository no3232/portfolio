import styles from './ProblemSolving.module.scss';
import CodeBlock from '@/feature/project/components/detail/CodeBlock';
import {
  haedeupGQLCode,
  haedeupReportCode1,
  haedeupReportCode2,
  haedeupReportCode3,
} from '@/feature/project/constants/Haedeup';

const HaedeupProblemSolving = () => {
  return (
    <section>
      <p className='text-graytext'>Problem Solving</p>
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30 text-semibold'>백오피스 PDF 툴 구현</p>
        <p className='fs-24'>문제 상황</p>
        <p>
          프로젝트 오너(PO)로부터
          PDF를 일일이 피그마로 작성하여 고객에게 전달하기에는
          인원이 부족하다는 요청을 받았습니다.
          <br />
          따라서 프론트엔드에서 HTML을 PDF로 변환할 수 있는지,
          그리고 백엔드의 추가 작업 없이 JSON 또는 CSV 형식의 파일을 불러와
          사용자
          정보에 따라 PDF 내용을 동적으로 변경할 수 있는지에 대한 요구가 있었습니다.
          <br />
          또한,
          PDF에서 링크 첨부와 텍스트 드래그가 가능한지도 요구사항에 포함되었습니다.
        </p>
        <p className='fs-24'>해결 과정</p>
        <p>
          이전 프로젝트에서 사용한 Puppeteer를 활용하여 페이지를 PDF로
          추출하기로 결정했습니다. Puppeteer는 HTML 기반으로 브라우저에서 넓이와
          높이를 설정하여 PDF를 생성할 수 있어,
          이미지 캡처 방식과 달리 텍스트 복사와 링크
          기능을 적용할 수 있었습니다.
          <br />
          Next.js를 사용하고 있었기 때문에, API Router를 통해
          백엔드 기능을 충분히 활용할 수 있었습니다.
          사용자 정보를 JSON으로 불러오는
          경우, 1차적인 유효성 검증이 필요했습니다.
          이를 위해 간단한 백엔드를 App Router로 구현하기로 했습니다.
          데이터베이스는 파일로 관리할 수 있는 SQLite3를 사용하고,
          ORM은 Prisma를 선택했습니다.
          <br />
          간단한 POST API를 통해 루트 폴더의 JSON 파일을 읽어와,
          Prisma를 통해 유효성 검증을 거쳐 데이터베이스에 저장했습니다.
        </p>
        <CodeBlock code={haedeupReportCode1} language='typescript' />
        <p>
          이후 서버 컴포넌트에서 Prisma
          클라이언트를 사용하여 서버 패치를 통해 HTML을 즉시 생성함으로써 지연
          시간을 최소화했습니다.
        </p>
        <CodeBlock code={haedeupReportCode2} language='typescript' />
        <p>
          마지막으로, Puppeteer를 이용한 PDF 추출 API를 작성하여 PDF를 한
          번에 또는 개별적으로 다운로드할 수 있도록
          설계하고 구현을 완료했습니다.
        </p>
        <CodeBlock code={haedeupReportCode3} language='typescript' />
        <p>
          또한 해당 프로젝트를 마무리하면서 PO에게 리드미 파일을 전달할 때,
          비개발자가 이 프로젝트를 쉽게 사용할 수 있도록 하는 방법을 더욱
          고민해보게 되었습니다.
        </p>
        <p className='fs-24'>결과</p>
        <p>
          200여명의 피부 분석 리포트를 간단한 버튼 클릭만으로 생성하여 고객에게
          성공적으로 전달했습니다. 이 시스템을 통해 앞으로도 다른 고객의
          리포트를 백오피스 툴을 사용하여 효율적으로 생성하고 전달할 수 있게
          되었습니다.
        </p>
      </div>
      <br />
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30 text-semibold'>GraphQL, CodeGen 도입</p>
        <p className='fs-24'>라이브러리 선정 배경</p>
        <p>
          이전 프로젝트에서는 중복되는 API를 많이 생성해야 했습니다.
          <br />
          사이드 프로젝트에서 GraphQL을 사용해본 경험이 있었고,
          이를 통해 중복된 API 문제를 프론트엔드에서 쿼리문을 직접
          작성하여 해결할 수 있었습니다. 또한, CodeGen을
          통해 빠르게 API 함수를 작성할 수 있다는 장점을 경험했습니다.
          <br />
          이러한 이유로 백엔드와 논의 후 GraphQL을 도입하기로 결정했습니다.
        </p>
        <p className='fs-24'>주요 기능 구현</p>
        <p>
          아래의 CodeGen 설정 파일을 작성한 후,
          명령어를 입력하면 자동으로 API 함수들이 generated.ts 파일로 생성됩니다.
        </p>
        <CodeBlock code={haedeupGQLCode} language='typescript' />
        <p className='fs-24'>결과</p>
        <p>
          GraphQL과 CodeGen을 도입함으로써, 백엔드의 Swagger 문서 작성,
          타입 지정, 리액트 쿼리 API 함수 생성 등 다양한
          부분에서 작업량을 줄일 수 있었고, 개발자 경험(DX)을 크게 향상시킬 수
          있었습니다.
        </p>
      </div>
    </section>
  );
};

export default HaedeupProblemSolving;
