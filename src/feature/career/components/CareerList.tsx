import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './CareerList.module.scss';

const CareerList = () => {
  const calculateOptimalValues = () =>
     {
    const viewportWidth = window.innerWidth;
    const panelWidth = viewportWidth * 0.5; // 50vw를 픽셀로 변환

    // radius를 패널 너비에 비례하여 계산
    // 패널이 더 평평하게 보이도록 패널 너비의 약 4배로 설정
    const radius = panelWidth * 4;

    // 패널이 화면 밖으로 나가는 각도 계산
    // 아크탄젠트를 사용하여 패널 너비의 절반이 만드는 각도 계산
    const angleInRadians = Math.atan(panelWidth / 2 / radius);
    const angleInDegrees = (angleInRadians * 180) / Math.PI;

    // 시작과 끝 각도를 계산된 각도의 약 1.2배로 설정
    const startAngle = -angleInDegrees * 4;
    const endAngle = angleInDegrees * 4;

    return { radius, startAngle, endAngle };
  };

  useGSAP(() => {
    const container = document.querySelector('#career-list-container');
    const panels = gsap.utils.toArray<HTMLElement[]>('.panel');

    const { radius, startAngle, endAngle } = calculateOptimalValues();

    gsap.set(container, {
      perspective: '800rem',
      transformStyle: 'preserve-3d',
    });

    panels.forEach((panel, i) => {
      gsap.set(panel, {
        rotationY: startAngle,
        y: i % 2 === 0 ? 100 : -100,
        z: i % 2 === 0 ? -radius + 100 * i : -radius - 100 * i,
        transformOrigin: `50% 50% ${radius}px`,
      });
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#career-section',
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        pin: true,
      },
    });

    // 각 패널을 왼쪽 끝으로 이동
    timeline.to(panels, {
      rotationY: endAngle,
      ease: 'power1.inOut',
      stagger: {
        from: 'start',
        each: 0.1, // 패널 간 시차
      },
    });
  }, []);

  return (
    <div className={styles.careerListContainer} id='career-list-container'>
      <div className={styles.panelContainer}>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>(주)우당네트웍</h2>
          <div>
            <p className={'fs-32'}>2023.07 ~ 2024.06</p>
          </div>
          <div>
            <p className={'fs-36'}>프론트엔드 개발자</p>
            <p className={'fs-36'}>Haedeup, GRIDA 프로젝트를 진행</p>
          </div>
        </div>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>SSAFY</h2>
          <div>
            <p className={'fs-32'}>2022.07 ~ 2023.06</p>
          </div>
          <div>
            <p className={'fs-36'}>삼성 청년 소프트웨어 아카데미 교육생</p>
            <p className={'fs-36'}>Vue, Django기반의 웹 개발 교육(6개월)</p>
            <p className={'fs-36'}>React기반의 웹 프로젝트 3회(6개월)</p>
          </div>
        </div>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>경북대학교(편입)</h2>
          <div>
            <p className={'fs-32'}>2019.02 ~ 2023.08</p>
          </div>
          <div>
            <p className={'fs-36'}>경제통상 학부 경제학과 졸</p>
            <p className={'fs-36'}>3.8/4.3</p>
          </div>
        </div>
        <div className={`${styles.panel} panel`}>
          <h2 className='h3 text-bold'>계명대학교</h2>
          <div>
            <p className={'fs-32'}>2023.07 ~ 2024.06</p>
          </div>
          <div>
            <p className={'fs-36'}>경영학부 회계학과 수료</p>
            <p className={'fs-36'}>3.8/4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerList;
