import Link from 'next/link';
import CodeBlock from '../CodeBlock';
import {
  gridaHookFormCode1,
  gridaHookFormCode2,
  gridaPuppeteerCode,
  gridaQuillCode,
  gridaTransactionCode,
} from '@/feature/project/constants/GRIDA';

import styles from './ProblemSolving.module.scss';

const GRIDAProblemSolving = () => {
  return (
    <section>
      <p className='text-graytext'>Problem Solving</p>
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30'>react-hook-form Compound Component Pattern</p>
        <p className='fs-24'>문제 상황</p>
        <p>
          여러 입력을 받는 폼을 구현하면서, 유효성 검증을 위해 react-hook-form
          라이브러리를 도입했습니다. 그러나 회원가입 폼, 정보 수정 폼 등 비슷한
          입력과 키 값을 사용하는 input 컴포넌트가 많아지면서, 이를 효율적으로
          관리할 수 있는 디자인 패턴이 필요했습니다.
        </p>
        <p className='fs-24'>원인 분석</p>
        <p>
          비슷한 입력값을 처리하고 동일한 검증 로직을 적용하는 폼이 많아지면서,
          각 도메인 폴더(Login, Signup, UserInfo 등)마다 중복된 컴포넌트가
          생성되었습니다. 이로 인해 코드 중복이 발생하고, 하나의 검증 로직을
          수정할 때 여러 컴포넌트를 수정해야 하는 비효율적인 상황이
          발생했습니다.
          <br />
          이를 해결하기 위해 컴파운드 컴포넌트 패턴을 도입하여, 동일한 input
          컴포넌트를 하나로 통합하고, 각 폼에서 컴파운드 컴포넌트 형식을 통해
          효율적으로 관리하고자 했습니다.
        </p>
        <p className='fs-24'>해결 과정</p>
        <p>
          공통된 키값이나 라벨을 가진 컴포넌트들을 추출하여 공통 컴포넌트로
          만들었습니다. 예를 들어, IdInput 컴포넌트를 생성하여 react-hook-form의
          컨텍스트 훅을 사용해 컴파운드 컴포넌트 패턴에서 사용할 수 있도록
          했습니다. 이 컴포넌트는 ID 유효성 검증 로직을 포함하고 있으며,
          SignupForm 컴포넌트의 하위 컴포넌트로 사용됩니다.
        </p>
        <CodeBlock code={gridaHookFormCode1} language={'typescript'} />
        <p>
          SignupForm 컴포넌트는 useFormContext를 통해 폼의 상태를 관리하며,
          SignupFormContext 컴포넌트는 FormProvider를 사용해 폼의 상태를
          공유합니다. SignupLayout 컴포넌트는 이러한 구조를 활용하여 폼을
          구성합니다.
        </p>
        <CodeBlock code={gridaHookFormCode2} language={'typescript'} />
        <p className='fs-24'>결과</p>
        <p>
          레이아웃과 로직이 분리되어 코드가 더 깔끔해졌고, 코드의 반복을 줄일 수
          있었습니다. 이를 통해 유지보수성이 향상되고, 새로운 폼을 추가할 때도
          쉽게 확장할 수 있게 되었습니다.
        </p>
      </div>
      <br />
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30'>Quill을 이용한 WISYWIG에디터 구현</p>
        <p className='fs-24'>문제 상황</p>
        <p>
          기획자로부터 네이버 블로그와 유사한 텍스트 에디터를 사용하여
          게시글 작성 화면을 구현해달라는 요청을 받았습니다. 이를
          위해 WYSIWYG 에디터인 Quill을 선택했습니다. 그러나
          기본 Quill 에디터는 이미지를 base64 형식의 긴 문자열로 변환하여
          업로드하는 방식이었고, DB의 글자수 제한 때문에 다른 형식의 이미지
          업로드가 필요했습니다.
        </p>
        <p className='fs-24'>원인 분석</p>
        <p>
          base64 형식의 이미지를 그대로 백엔드에 업로드할 경우, 문자열 길이
          제한에 걸릴 수 있었습니다. 따라서 이미지를 URL 형식으로 업로드한 후,
          해당 URL을 img 태그에 삽입하는 방식으로 구현하기로 결정했습니다.
        </p>
        <p className='fs-24'>해결 과정</p>
        <p>
          사용자가 이미지를 업로드하면, AWS S3에 이미지를 저장하고 해당
          URL을 반환받아 img 태그의 src 속성에 삽입하도록 구현했습니다. 또한,
          이미지를 업로드한 후 게시글이 생성되지 않으면, S3에서 해당 이미지의 키
          값을 사용하여 삭제 요청을 보내도록 설계했습니다.
        </p>
        <CodeBlock code={gridaQuillCode} language={'typescript'} />
      </div>
      <br />
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30'>pupeteer를 이용한 PDF 다운로드 로직 구현</p>
        <p className='fs-24'>문제 상황</p>
        <p>
          실험 결과 보고서, 영수증, 견적서 등을 브라우저에서 볼 수 있어야 하며,
          동일한 화면을 기반으로 PDF를 다운로드할 수 있어야
          한다는 요구사항이 있었습니다. 특히, 실험
          리스트의 문서 아이콘을 클릭했을 때 PDF가 다운로드되어야 했습니다.
        </p>
        <p className='fs-24'>원인 분석</p>
        <p>
          Canvas를 이용하는 방식과 백엔드에서 브라우저를 띄운 뒤
          해당 화면을 PDF로 전환하는 두 가지 방안을 고려했습니다.
          그러나 Canvas를 사용하면 리스트에서 PDF를 직접 다운로드할 수
          없었습니다. 따라서 백엔드에서 브라우저를 띄워 화면을 캡처한 후,
          프론트엔드로 파일을 전달하는 방식으로 결정하고 설계했습니다.
        </p>
        <p className='fs-24'>해결 과정</p>
        <p>
          백엔드도 프론트엔드와 마찬가지로 Node 기반의 Nest.js를 사용했기
          때문에, 라이브러리를 공유할 수 있었습니다. 이에 따라 프론트엔드의
          Next.js App Router를 이용해 간단한 API를 만든 후,
          이를 백엔드로 이식하기로 결정했습니다. Puppeteer를 사용하여 PDF의
          헤더와 푸터를 먼저 퍼블리싱한 다음, API를 구현해야 했습니다.
          <br />
          사용자 인증은 쿠키를 통해 이루어졌기 때문에, 요청의 헤더에서 JWT를
          가져왔습니다. Puppeteer를 불러와 해당 JWT를 setCookie로 설정했습니다.
          이후, 해당 페이지에 접속하여 PDF 캡처 템플릿에 맞춰 페이지를 PDF로
          캡처했습니다.
          <br />
          캡처 도중 이미지 파일이 큰 경우 로딩이 느릴 수 있으므로,
          모든 이미지를 로딩한 후 캡처를 시작하는 조건을 추가했습니다.
          마지막으로, 클라이언트에게 파일을 응답으로 반환했습니다.
        </p>
        <CodeBlock code={gridaPuppeteerCode} language={'typescript'} />
      </div>
      <br />
      <div className={styles.problemSolvingDiv}>
        <p className='fs-30'>Nest.js Prisma Transaction 처리</p>
        <p className='fs-24'>문제 상황</p>
        <p>
          백엔드에서 Repository 패턴을 사용하고 있었으며, 모든 Prisma 쿼리는
          별도의 repository 파일에서 관리하도록 설계되어 있었습니다. 이 상황에서
          전혀 연관이 없는 두 테이블을 동시에 생성해야 하는 요구사항이
          발생했습니다. 이를 위해 Prisma의 $transaction 함수를 사용하려 했으나,
          동일한 로직의 코드를 중복 작성해야 하는 문제가 있었습니다.
        </p>
        <p className='fs-24'>해결 과정</p>
        <p>
          Prisma의 $transaction 함수는 함수 자체에서 동일한 Prisma 클라이언트
          인스턴스를 이용해야하기 때문 함수 내에서 새로운 Prisma 쿼리를 작성해야
          했습니다. Repository 패턴을 적용한 상황에서는,
          해당 함수들을 repository에서 호출하여 처리하는 것이 불가능했습니다.
          <br />
          대안으로, 모든 repository 함수의 인자로
          Prisma 클라이언트를 전달받도록 설계를 변경하는 방법이 있었으나,
          이는 구현 비용이 너무 커서 포기했습니다. 대신, Nest CLS(Async Local
          Storage)라이브러리를 활용하여 문제를 해결할 수 있는 방안을 찾았습니다.
          <br />
          서버로 request가 들어오면 Nest CLS 라이브러리에서 Prisma에 주입시킬
          토큰 값을 생성하고 해당 프리즈마 클라이언트 인스턴스를 요청이
          끝날때까지 지속적으로 사용합니다. 따라서 프리즈마 트랜잭션 함수와 같이
          항상 특정 클라이언트 인스턴스를 적용하기 때문에 트랜잭션 처리가
          가능해집니다.
        </p>
        <CodeBlock code={gridaTransactionCode} language={'typescript'} />
        <p>
          해당 주제를 다룬 블로그 링크입니다.
          <Link
            href='https://velog.io/@num3232/NestJS-Prisma-Transaction'
            target='_blank'
          >
            (https://velog.io/@num3232/NestJS-Prisma-Transaction)
          </Link>
        </p>
      </div>
    </section>
  );
};

export default GRIDAProblemSolving;
