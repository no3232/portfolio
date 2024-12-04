import { DetailOverViewProps } from '../components/detail/DetailOverView';
import { SkillItem } from '../components/detail/DetailSkill';

const gridaDetailData: DetailOverViewProps = {
  project: 'GRIDA(Service, Admin)',
  period: '2024.01 ~ 2024.07',
  role: 'Front-End(100%)',
  link: [
    'https://grida.woodangnetwork.com',
    'https://grida-admin.woodangnetwork.com',
  ],
  team: ['FE - 1', 'BE - 1', 'Designer - 2', 'PM - 1'],
};

const gridaDescription = `(주)우당 네트웍의 실험 연구 대행서비스 신청 및 관리 페이지 입니다.

[ 상세 구현 사항 ]

[프론트엔드]
유저 페이지(실험신청, 관리, 문의, 결제), 관리자 페이지(실험 관리, 생성, 유저, 관리자 관리) 전체를 구현했습니다.
Next.js 미들웨어를 통해 로그인 쿠키를 검증하는 로직으로 사용자 인증을 구현하였습니다.
나이스 페이먼츠 결제 모듈을 도입하여 사용자 결제를 구현하였습니다.
우당네트웍 홈페이지의 게시글 작성 페이지를 Quill을 이용해 WYSIWYG에디터 형식으로 구현하였습니다. S3를 통해 이미지 업로드 및 라이브러리를 추가해 리사이즈 조절 기능을 추가하였습니다.
3개의 단일 레포 형식으로 되어있던 깃허브 레포지토리를 하나의 모노레포로 통합했습니다. UI를 공통 모듈(package)로 사용하도록 리팩토링을 진행했습니다.

[백엔드]
Pupeeteer를 이용한 견적서, 보고서 pdf 다운로드 로직을 구현하였습니다.
Nest.js, Prisma를 도입하고, NestCLS(Async Local Storage)를 통해 트랜잭션 처리를 구현하였습니다.`;

const gridaSkills: SkillItem[] = [
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
    name: 'cookie',
    version: '@0.6.0',
    description:
      'Next.js 미들웨어에서 쿠키를 통해 사용자의 로그인 검증에 사용했습니다.',
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
      '관리자가 WISIWYG 에디터를 이용해 게시글을 작성할 수 있도록 구현하기위해 도입했습니다.',
  },
  {
    name: 'swiper',
    version: '@11.1.3',
    description: '네비게이션 바 옆의 광고 배너를 만들기 위해 도입했습니다.',
  },
  {
    name: 'svgr',
    version: '@8.1.0',
    description:
      'svg를 컴포넌트화 하여 fill, stroke등 간단하게 설정을 조절할 수 있어 도입했습니다.',
  },
  {
    name: 'puppeteer',
    version: '@22.9.0',
    description:
      '서버측에서 퍼페티어를 이용해 견적서, 보고서 등의 문서를 PDF로 다운로드 받을 수 있도록 구현하기 위해 도입했습니다.',
  },
  {
    name: 'react-daum-postcode',
    version: '@3.1.3',
    description: '회원가입시 주소를 입력받기 위해 도입했습니다.',
  },
  {
    name: 'date-fns',
    version: '@3.6.0',
    description: '간편한 날짜 처리를 위해 도입했습니다.',
  },
];

const gridaHookFormCode1 = `const IdInput = () => {
	// react-hook-form의 컨텍스트 훅을 사용해서 컴파운드 컴포넌트 패턴에서 사용할 수 있도록
  const {
    register,
    ...
  } = useFormContext();

  const watchId = watch('id');

  // ID 유효성 검증 상태 함수가 위치합니다.

  return (
    <div className={S.inputWrapper}>
      <div className={S.inputBoxWrapper}>
        <InputBox
          key={'id-controller'}
          id={'idcontroller'}
          label={'아이디 *'}
          type={'text'}
          placeholder={'6~20자리의 영문, 숫자를 입력해주세요'}
          labelPosition='outside'
          {...register('id', {
            required: { value: true, message: '필수입력사항입니다' },
            minLength: { value: 6, message: '6~20자리를 맞춰주세요' },
            maxLength: { value: 20, message: '6~20자리를 맞춰주세요' },
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: '영문, 숫자만 입력해주세요',
            },
            validate: (value, formValues) =>
              formValues['idConfirm'] !== 'error' ||
              '이미 사용중인 아이디입니다',
          })}
          isError={!!errors['id']}
        >
          <BoxButton
            type='button'
            onClick={onIdConfirmButtonClick}
            disabled={...}
          >
            <Txt typo='Body2M'>
              {getValues('idConfirm') === 'success' ? '확인완료' : '중복확인'}
            </Txt>
          </BoxButton>
        </InputBox>
      </div>
    </div>
  );
};

export default IdInput;
`;

const gridaHookFormCode2 = `// SignupForm.tsx
const SignupForm: SignupFormComponent = ({ children }) => {
  const { handleSubmit, setError } = useFormContext<ISignupForm>();
  // handleSubmit
  const { mutate: registerMutate, isPending: registerPending } =
    useRegisterMutation();

  const submitForm = (formData: ISignupForm) => {
		...
  };
  return (
    <form className={S.formWrapper} onSubmit={handleSubmit(submitForm)}>
      {children}
      <BoxButton type='submit' isFull disabled={registerPending}>
        가입하기
      </BoxButton>
    </form>
  );
};

export default SignupForm;

// 반복해서 사용할 인풋 컴포넌트를 불러와서 컴파운드 패턴으로 구현했습니다.
SignupForm.Address = AddressInput;
SignupForm.Id = IdInput;
...

interface SignupFormComponent extends React.FC<SignupFormProps> {
  Address: React.FC;
  Id: React.FC;
  ...
}

// SignupFormContext.tsx
'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { ISignupForm } from '@/types/signup/SignupForm';

const SignupFormContext = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<ISignupForm>({
    defaultValues: {
      id: '',
			...
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default SignupFormContext;

// SignupLayout.tsx
const SignupLayout = () => {
  return (
    <SignupFormContext>
      <SignupForm>
        <div className={S.formBox}>
          <div className={S.titleWrapper}>
            <Txt typo='h4'>회원가입</Txt>
            <Txt typo='Body2M'>*은 필수입력사항입니다</Txt>
          </div>
          <div className={S.inputWrapper}>
            <SignupForm.Id />
            ...
          </div>
        </div>
      </SignupForm>
    </SignupFormContext>
  );
};

export default SignupLayout;`;

const gridaQuillCode = `const QuillEditor = forwardRef<ReactQuill, EnhancedReactQuillProps>(
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
          // 백엔드의 S3 파일 업로드 API를 통해 이미지를 업로드 합니다.
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

    // useMemo를 사용한 이유는 modules가 렌더링마다 변하면 에디터에서 입력이 끊기는 버그가 발생해 렌더링 된 초기만 적용되도록 설정했습니다.
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
          urlRegularExpression: /(https?:\/\/[\S]+)|(www.[\S]+)|(tel:[\S]+)/g,
          globalRegularExpression: /(https?:\/\/|www\.|tel:)[\S]+/g,
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

export default QuillEditor;`;

const gridaPuppeteerCode = `import type { NextRequest } from 'next/server';
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
	
	// 이미지 로딩을 대기
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

	// PDF의 옵션을 설정
  const options: PDFOptions = {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate:
      '<div style="font-size:10px; width:100%; text-align:center;">페이지 <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    footerTemplate:
      '<div style="font-size:10px; width: 100%; text-align: center;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
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

  return response;
`;

const gridaTransactionCode = `
// app.module.ts
import { PrismaService } from './prisma/prisma.service';
import { ClsModule } from 'nestjs-cls';
import { ClsPluginTransactional } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';

@Module({
  imports: [
	  ...
    ClsModule.forRoot({
      plugins: [
        new ClsPluginTransactional({
          imports: [PrismaModule],
          adapter: new TransactionalAdapterPrisma({
            prismaInjectionToken: PrismaService,
          }),
        }),
      ],
      global: true,
    }),
    ...
  ],
  ...
})
export class AppModule {}
// someModel.repository.ts
@Injectable()
export class SomeModelRepository {
  constructor(
    private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,
  ) {}

  async createSomeModel(data: someData) {
    return await this.txHost.tx.someModel.create({
      data: {
        ...someData
      },
    });
  }

  async createElseModel(
    someModelUuid: string,
  ) {
    return await this.txHost.tx.reservationOnUser.create({
      data: {
        someModelUuid: someModelUuid,
      },
    });
  }
}

// someModel.module.ts
@Module({
  ...
  providers: [..., ReservationRepository],
})
export class SomeModelModule {}

// someModel.service.ts
...
import { SomeModelRepository } from './somemodel.repository';
import { Transactional } from '@nestjs-cls/transactional';

@Injectable()
export class SomeModelService {
  constructor(
    private someModelRepository: SomeModelRepository,
  ) {}
  
  @Transactional()
	async createSomeModel(data: someData): Promise<someModel> {
    const someModel = await this.someModelRepository.createSomeModel({data})
    await this.someModelRepository.createElseModel(someModel.uuid)
    return someModel
	}
}
`;

export {
  gridaDetailData,
  gridaDescription,
  gridaSkills,
  gridaHookFormCode1,
  gridaHookFormCode2,
  gridaQuillCode,
  gridaPuppeteerCode,
  gridaTransactionCode,
};
