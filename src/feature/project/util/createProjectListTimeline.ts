import gsap from 'gsap';
import { ProjectDescriptionInterface } from '../layouts/list/ProjectLayout';

export function createProjectListTimeline(
  pinId: string,
  projectList: ProjectDescriptionInterface[],
  setCurrentProject: (index: number) => void,
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#project-grid-section',
      // 섹션이 화면 최상단에 도달하면 시작
      start: 'top top',
      // 원래 섹션 높이의 프로젝트 리스트 길이만큼 스크롤 가능
      end: '+=300%',
      // 섹션을 화면에 고정
      pin: true,
      // 스크롤 위치에 따라 애니메이션 실행
      scrub: true,
      // 전체를 프로젝트 리스트의 갯수 -1 만큼 스냅포인트 생성
      // 스냅을 통해 자연스럽게 다음 프로젝트로 넘어가도록 설정
      snap: {
        snapTo: 1 / (projectList.length - 1),
        duration: 0.5,
        ease: 'none',
      },
    },
  });

  projectList.forEach((project, index) => {
    if (projectList[index + 1]) {
      // 프로젝트 페이드아웃
      tl.fromTo(
        `#${project.title}`,
        {
          '--clipIn': '0%',
          '--clipOut': '100%',
          '--imgScale': '1',
          '--imgDirection': '-1',
          '--imgTrans': '0',
        },
        {
          '--clipIn': '0%',
          '--clipOut': '0%',
          '--imgScale': '0',
          '--imgDirection': '-1',
          '--imgTrans': '100%',
          ease: 'none',
        },
      );

      // 프로젝트 페이드인
      console.log(projectList[index + 1].title);
      tl.fromTo(
        `#${projectList[index + 1].title}`,
        {
          '--clipIn': '100%',
          '--clipOut': '100%',
          '--imgDirection': '1',
          '--imgScale': '1.4',
          '--imgTrans': '100%',
        },
        {
          '--clipIn': '0%',
          '--clipOut': '100%',
          '--imgDirection': '1',
          '--imgScale': '1',
          '--imgTrans': '0%',
          ease: 'none',
          onComplete: () => {
            setCurrentProject(index + 1);
          },
          onReverseComplete: () => {
            setCurrentProject(index);
          },
        },
        '<',
      );
    }
  });

  return tl;
}
