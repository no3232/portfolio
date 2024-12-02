'use client';

import Link from 'next/link';
import CodeBlock from '../../components/detail/CodeBlock';
import styles from './ProjectDetailLayout.module.scss';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import DetailImage from '../../components/detail/DetailImage';
import DetailFooter from '../../components/detail/DetailFooter';
import DetailOverView from '../../components/detail/DetailOverView';
import DetailDescription from '../../components/detail/DetailDescription';
import DetailSkill from '../../components/detail/DetailSkill';
import {
  gridaDescription,
  gridaDetailData,
  gridaSkills,
} from '../../constants/GRIDA';

const GridaLayout = () => {
  useGSAP(() => {
    // // 인덱스 고정
    // gsap.to('#project-detail-index', {
    //   scrollTrigger: {
    //     trigger: '#project-detail-section-wrapper',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     pin: '#project-detail-index',
    //     refreshPriority: 1,
    //     pinSpacing: false,
    //   },
    // });
  });

  return (
    <>
      <div id='main-contents' style={{ zIndex: 2 }}>
        <DetailImage image='/project/grida.png' />
        <div
          className={clsx('grid', styles.detailSectionWrapper)}
          id='project-detail-section-wrapper'
        >
          {/* <div className={styles.detailIndexSection} id='project-detail-index'>
            <div>
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
            </div>
          </div> */}
          <div className={styles.detailContentSection}>
            <DetailOverView {...gridaDetailData} />
            <DetailDescription description={gridaDescription} />
            <DetailSkill skillList={gridaSkills} />
            <section>
              <p className='text-graytext'>Problem Solving</p>
              <p className='fs-30'>
                react-hook-form Compound Component Pattern
              </p>
              <p>
                리액트 훅 폼을 이용하면서 중복되는 항목에 대한 Input이 많다는
                생각을 했습니다. 검증 로직 또한 비슷한 항목이 다수 존재했습니다.
                <br />
                예를 들어 로그인, 회원가입, 정보 수정에서 사용되는 id, 비밀번호,
                이름, 이메일, 주소 등의 항목이 있습니다.
                <br />
                따라서 컴파운드 컴포넌트 패턴을 이용해 중복되는 항목을
                컴포넌트화 하여 재사용성을 높였습니다.
              </p>
              <CodeBlock
                code={`const SignupFormContext = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<ISignupForm>({
    defaultValues: {
      id: '',
      ...
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default SignupFormContext;
                  
                  
  const SignupForm: SignupFormComponent = ({ children }) => {
  const { handleSubmit, setError } = useFormContext<ISignupForm>();
  // handleSubmit
  const { mutate: registerMutate, isPending: registerPending } =
    useRegisterMutation();

  const submitVerification = (formData: ISignupForm) => {
    //...검증로직이 위치
  };
  return (
    <form className={S.formWrapper} onSubmit={handleSubmit(submitTest)}>
      {children}
      <BoxButton type='submit' isFull disabled={registerPending}>
        가입하기
      </BoxButton>
    </form>
  );
};

export default SignupForm;

interface SignupFormProps {
  children: React.ReactNode;
}

SignupForm.Address = SignupAddress;
...

interface SignupFormComponent extends React.FC<SignupFormProps> {
  Address: React.FC;
  ...
}`}
                language={'typescript'}
              />
              <p>
                해당 패턴을 이용해 중복되는 항목들에 대해 검증로직을 다시 작성할
                필요가 없었고, 컴포넌트 재사용성을 높일 수 있었습니다.
              </p>
              <br />
              <p className='fs-30'>퍼페티어를 이용한 PDF 다운로드 구현</p>
              <p>
                기획자로부터 견적서, 보고서를 웹 화면에서 볼 수 있고 해당 화면을
                그대로 PDF로 옮겨서 다운로드 할 수 있도록 구현해달라는 요청이
                있었습니다.
                <br />
                이를 위해 puppeteer를 이용해 서버측에서 브라우저를 열고 해당
                견적서의 화면을 스크린샷으로 캡쳐해 PDF로 다운로드 받을 수
                있도록 구현했습니다.
                <br />
                이를 통해 PDF에서 텍스트를 드래그해 복사할 수 있거나 링크를
                삽입해 원하는 동작이 가능하도록 구현했습니다.
                <br />
                코드는 다음과 같습니다.
              </p>
              <CodeBlock
                code={`import type { NextRequest } from 'next/server';
import puppeteer, { PDFOptions } from 'puppeteer';

export async function POST(request: NextRequest) {
  // Puppeteer 인스턴스 실행
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 페이지에 접속
  await page.goto('<http://localhost:3000/test>', {
    waitUntil: 'networkidle0',
    timeout: 0,
  });
  console.log('페이지 접속');

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.evaluate(async () => {
    console.log('이미지 시작');
    const selectors = Array.from(document.querySelectorAll('img'));
    console.log(selectors.length, '개의 이미지를 발견');
    document.body.scrollIntoView(false);
    await Promise.all(
      selectors.map((img) => {
        if (img.complete) return;
        return new Promise((resolve, reject) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', reject);
        });
      }),
    );
  });
  console.log('이미지 로딩 완료');

  const options: PDFOptions = {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate:
      '<div style="font-size:10px; width:100%; text-align:center;">페이지 <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    footerTemplate:
      '<div style="font-size:10px; width: 100%; text-align: center;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    // margin: {
    //   top: '100px',
    //   bottom: '100px',
    //   left: '50px',
    //   right: '50px',
    // },
  };

  // PDF 생성
  const pdf = await page.pdf(options);

  await browser.close();
  console.log('pdf생성끝');

  // PDF 파일을 응답으로 반환
  const response = new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
    },
  });

  return response;`}
                language={'typescript'}
              />
              <p>
                해당 코드는 Next.js에서 구현한 후 백엔드에게 전달해 Nest.js로
                이식되었습니다.
              </p>
              <br />
              <p className='fs-30'>Quill을 이용한 에디터 구현</p>
              <p>
                quill에디터에서 폼으로 전송하는 데이터는 html을 문자열로 변환한
                형식입니다.
                <br />
                따라서 이미지를 업로드하면 base64의 아주 긴 문자열로 전송됩니다.
                <br />
                하지만 백엔드에서는 이런 긴 문자열을 저장하기엔 마땅치 않아
                이미지를 업로드 할 시 AWS S3에 업로드하고 이후 url을 받아와
                에디터에 이미지를 띄워주는 형식으로 구현했습니다.
                <br />
                또한 S3 저장공간의 효율성을 위해 useEffect의 return을 이용해
                저장하지않고 페이지를 이동할 시, 이미지를 삭제하는 요청을
                보내도록 구현했습니다.
                <br />
                코드는 다음과 같습니다.
              </p>
              <CodeBlock
                code={`const QuillEditor = forwardRef<ReactQuill, EnhancedReactQuillProps>(
  (props, ref) => {
    const [content, setContent] = useState('');
    /**
     * 해당 ref를 통해 quill을 조작
     */
    const quillRef = useRef<ReactQuill>(null);

    /**
     * 에디터에서 이미지를 첨부하게 되면 s3를 통해서 이미지를 업로드 후 불러와 사용한다.
     * 다만 현재는 백엔드를 통해서 s3로 업로드 하는 로직으로 구현 해두었음.
     */
    const imageHandler = () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
      input.addEventListener('change', async () => {
        const file = input.files?.[0] as File;
        if (!file) return; // 파일이 선택되지 않은 경우 함수 종료

        const formData = new FormData();
        formData.append('file', file, encodeURIComponent(file.name));

        // useRef를 사용해 에디터에 접근
        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection();
        if (editor && range) {
          // 임시 이미지 URL 설정
          const tempImageUrl = '/loading.gif';
          // 임시 이미지를 에디터에 삽입
          editor.insertEmbed(range.index, 'image', tempImageUrl);

          // 실제 이미지 인덱스 저장 (임시 이미지를 나중에 교체하기 위함)
          const imageIndex = range.index;

          try {
            const uploadAPI = await fetch(
              \`\${process.env.NEXT_PUBLIC_API_URL}/s3/upload/image\`,
              {
                method: 'POST',
                body: formData,
              },
            );

            if (!uploadAPI.ok) {
              throw new Error(
                \`Server responded with status: \${uploadAPI.status}\`,
              );
            }

            const data = await uploadAPI.json();

            // 이미지 업로드 성공 후 임시 이미지를 실제 이미지 URL로 교체
            if (data.uploadImageInfo.fileUrl) {
              // 기존에 삽입된 임시 이미지 삭제
              editor.deleteText(imageIndex, 1);
              // 삭제된 임시 이미지 위치에 실제 이미지 삽입
              editor.insertEmbed(
                imageIndex,
                'image',
                data.uploadImageInfo.fileUrl,
              );
            }
          } catch (error) {
            console.error('Error uploading file: ', error);
          }
        }
      });
    };

    // useMemo를 사용한 이유는 modules가 렌더링마다 변하면 에디터에서 입력이 끊기는 버그가 발생
    const modules = useMemo(
      () => ({
        toolbar: {
          container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ align: ['', 'center', 'right'] }],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
          ],
          handlers: { image: imageHandler },
        },
        imageResize: {
          modules: ['Resize', 'DisplaySize'],
        },
        magicUrl: {
          urlRegularExpression: /(https?:\\/\\/[\\S]+)|(www.[\\S]+)|(tel:[\\S]+)/g,
          globalRegularExpression: /(https?:\\/\\/|www\\.|tel:)[\\S]+/g,
        },
      }),
      [],
    );

    /**
     * 퀼 에디터에서 변화가 발생할 시 동작하는 함수
     */
    const quillOnChange = ({ value }: { value: string }) => {
      if (props.onChange) {
        props.onChange({
          target: { value, name: props.name as unknown as string },
        });
      }
      checkForImageDeletion(content, value);
      setContent(value);
    };

    /**
     * 이전에 입력한 값과 현재 입력한 값을 비교하고
     * 이 때 이미지 태그가 삭제된 것이 있을 경우
     * S3 또는 백엔드를 통해 이미지를 삭제하는 로직
     */
    const checkForImageDeletion = (prev: string, curr: string) => {
      const prevImages = extractImageUrls(prev);
      const currImages = extractImageUrls(curr);

      const deletedImages = prevImages.filter(
        (url) => !currImages.includes(url),
      );
      deletedImages.forEach(deleteImageFromS3);
    };

    /**
     * 현재 들어온 텍스트에서 url을 추출해서 리스트로 반환
     */
    const extractImageUrls = (content: string) => {
      const regex = /<img src="(.*?)"/g;
      const urls = [];
      let match;
      while ((match = regex.exec(content))) {
        urls.push(match[1]);
      }
      return urls;
    };

    const deleteImageFromS3 = async (url: string) => {
      const imageKey = url.split('/').at(-1);
      await fetch(
        \`\${process.env.NEXT_PUBLIC_API_URL}/s3/delete/image/\${imageKey}\`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    };

    let helperStyle = S.helperText;
    if (props.isError) {
      helperStyle = S.helperTextError;
    }

    useEffect(() => {
      return () => {
        checkForImageDeletion(content, '');
      };
    }, []);

    return (
      <div className={S.quillWrapper}>
        <ReactQuillBase
          className={S.quillWrapper}
          forwardedRef={quillRef}
          theme='snow'
          modules={modules}
          formats={formats}
          {...props}
          onChange={(value) => quillOnChange({ value })}
        />
        {props.helperText && (
          <div className={helperStyle}>
            <Txt typo='Caption' mTypo='m-Caption'>
              {props.helperText}
            </Txt>
          </div>
        )}
      </div>
    );
  },
);

export default QuillEditor;`}
                language={'typescript'}
              />
              <p className='fs-30'>Quill을 이용한 에디터 구현</p>
              <p>
                Nest.js, Prisma를 도입하고 트랜잭션 처리를 구현했습니다.
                <br />
                백엔드에서는 레포지토리 패턴을 적용해 실행하고 있었기 때문에
                $transaciton을 이용한 방법은 맞지 않았습니다.
                <br />
                따라서 Node의 Async Local Storage를 이용한
                nestjs-cls라이브러리를 이용해 트랜잭션 처리를 진행했습니다.
                <br />
                자세한 사항은 블로그를 참조해주세요.
                <br />
                <Link
                  href='https://velog.io/@num3232/NestJS-Prisma-Transaction'
                  target='_blank'
                >
                  링크 : https://velog.io/@num3232/NestJS-Prisma-Transaction
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
      <DetailFooter />
    </>
  );
};

export default GridaLayout;
