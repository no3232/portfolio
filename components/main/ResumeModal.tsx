import React from "react";
import { styled } from "styled-components";
import { aboutShow } from "@/store/layout";
import { useRecoilState } from "recoil";

import { FaTimes } from "react-icons/fa";

function ResumeModal() {
  const [aboutShowState, setAboutShowState] = useRecoilState(aboutShow);

  const modalCloseHandler = () => {
    setAboutShowState(false);
  };

  return (
    <>
      <ModalSection modalshow={aboutShowState.toString()}>
        <span className='aboutTitle'>About Me!</span>
        <button onClick={modalCloseHandler}>
          <FaTimes />
        </button>
        <div className='backdrop' />
        <div className='about'>
          <div className='introedu'>
            <h2>Introduce</h2>
            <br />
            <h2>&quot;저는&quot;</h2>
            <h3>&quot;인터랙션 구현을 좋아하는&quot;</h3>
            <span>
              - 수려한 UI와 아름다운 애니메이션을 만드는 것을 좋아합니다.
            </span>
            <span>
              - 사용자에게 새로운 경험을 주는 것이 곧 서비스의 품질의 향상이라고
              생각합니다.
            </span>
            <h3>&quot;직접 만드는 걸 좋아하는&quot;</h3>
            <span>
              - 바로 라이브러리를 도입하기 보다는 UI와 스스로 만들어보고 원리를
              이해하는 것을 즐깁니다.
            </span>
            <h3>&quot;계속해서 학습해 나가는&quot;</h3>
            <span>
              - 빠르게 변화하는 프론트엔드 분야에서 적응해나가기 위해 끊임없이
              학습합니다.
            </span>
            <h3>&quot;프론트엔드 개발자 입니다.&quot;</h3>
            <br />
            <h2>Education</h2>
            <h3>삼성 청년 SW 아카데미</h3>
            <p>2022.07~2023.06</p>
            <span>웹 개발 학습 및 팀 프로젝트</span>
            <h3>경북대학교 경제통상학부</h3>
            <p>2019.02~2022.08</p>
            <h3>계명대학교 회계학과</h3>
            <p>2014.02~2019.01</p>
          </div>
          <div className='skillset'>
            <h2>SKILL SET</h2>
            <br />
            <div>
              <div className='language'>
                <h3>Language</h3>
                <p>JavaScript</p>
                <span>
                  - 자바스크립트 ES6+ 문법에 능숙하며, 프로토타입, 비동기
                  처리(Promise, async/await), 클로저, let/const, 디스트럭처링
                  등을 활용할 수 있습니다.
                  <br />- 웹 브라우저 환경에서 DOM 조작 및 이벤트 처리에
                  익숙합니다.
                </span>
                <p>TypeScript</p>
                <span>
                  - 기본적인 TypeScript 개념에 익숙하며, 변수와 함수 타입 선언,
                  타입 가드 사용 등을 할 수 있습니다.
                </span>
                <p>Python</p>
                <span>
                  - 파이썬 기반의 객체 지향 개념을 이해하고 있으며, 객체 지향의
                  상속을 통한 기능 구현이 가능합니다.
                </span>
                <h3>Tools</h3>
                <p>React.js</p>
                <span>
                  - 가상 DOM(Virtual DOM), 컴포넌트, 상태 관리, 생명주기, 이벤트
                  처리에 대해 이해하고 있으며, 커스텀 훅 패턴을 사용하여
                  컴포넌트 재사용이 가능합니다.
                </span>
                <p>Next.js</p>
                <span>
                  - SSR(Server Side Rendering) 방식을 이해하고 있으며, next13
                  버전을 공부 중입니다.
                </span>
                <p>Django</p>
                <span>
                  - DRF(Django REST Framework) 기반의 Django 동작 원리를
                  이해하고 있으며, 필요에 따라 DRF 기반 라이브러리를
                  오버라이드하여 원하는 기능을 구현할 수 있습니다.
                </span>
                <p>Vue2.js</p>
                <span>
                  - Vue2의 라이프사이클을 이해하고 있으며, Vuex, Vue router를
                  이용하여 소규모 프로젝트를 진행할 수 있습니다.
                </span>
              </div>
              <div className='library'>
                <h3>Library</h3>
                <p>Styled-components/emotion</p>
                <span>
                  - Props를 활용하여 스크립트 내에서 CSS를 조작할 수 있습니다.
                  theme, GlobalStyle을 이용하여 전체적으로 스타일을 적용할 수
                  있으며, @media를 통해 반응형 디자인을 만들 수 있습니다.
                </span>
                <p>Recoil</p>
                <span>
                  - Atom을 이용하여 클라이언트의 전역 상태를 관리할 수 있습니다.
                  Local Storage Persistant를 이용하여 브라우저의 로컬 스토리지를
                  유지하는 것이 가능합니다.
                </span>
                <p>Tanstack-query(React-Query)</p>
                <span>
                  - useQuery, Mutation, useInfinityQuery 등의 기본적인 API를
                  활용할 수 있습니다. Suspense, IntersectionObserver를 함께
                  활용하여 UI 구현이 가능합니다.
                </span>
                <h3>Ect</h3>
                <p>Git, Github</p>
                <p>JIRA</p>
              </div>
            </div>
          </div>
        </div>
      </ModalSection>
    </>
  );
}

export default ResumeModal;

interface ModalSectionProps {
  modalshow: string;
}

// const ModalSection = styled.section.attrs<ModalSectionProps>((props) => ({
//   style: {
//     "--modal-show": `${props.modalshow ? "visible" : "hidden"}`,
//   },
// }))`
const ModalSection = styled.section<ModalSectionProps>`
  visibility: ${(props) => (props.modalshow === "true" ? "visible" : "hidden")};
  position: relative;
  top: 2rem;

  width: 100vw;

  > .about {
    position: fixed;
    top: calc(2rem + 140px);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;

    width: calc(100vw - 2rem);
    height: calc(100vh - 2rem - 140px);

    margin-left: 2rem;

    z-index: 2;

    transition: all 0.7s;

    transform: ${(props) =>
      props.modalshow === "true"
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, 100px, 0)"};
    opacity: ${(props) => (props.modalshow === "true" ? "1" : "0")};

    > .introedu {
      display: flex;
      flex-direction: column;

      width: 100%;
      flex-grow: 1;
      padding: 1rem;
      flex-basis: 0;
    }

    > .skillset {
      display: flex;
      flex-direction: column;

      width: 100%;
      flex-grow: 2;
      padding: 1rem;
      flex-basis: 0;

      > div {
        display: flex;
        flex-direction: row;

        .language,
        .library {
          margin-right: 2rem;
        }

        @media (max-width: 600px) {
          flex-direction: column;

          .language,
          .library {
            margin-right: 0;
          }
        }
      }
    }
  }

  > .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    transition: opacity 0.2s;
    opacity: ${(props) => (props.modalshow === "true" ? "1" : "0")};

    background-color: rgba(255, 255, 255, 0.919);

    z-index: 1;
  }

  .aboutTitle {
    position: fixed;

    top: 7.7rem;
    left: 20rem;

    font-family: AgroBold, sans-serif;

    font-size: 2.5rem;

    z-index: 2;

    cursor: default;

    transition: all 0.7s;

    transform: ${(props) =>
      props.modalshow === "true"
        ? "translate3d(0, 0, 0)"
        : "translate3d(20rem, 0, 0)"};
    opacity: ${(props) => (props.modalshow === "true" ? "1" : "0")};
  }

  button {
    position: fixed;
    top: 3rem;
    right: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 5rem;
    height: 5rem;

    text-align: center;
    font-size: 3rem;

    z-index: 2;

    transition: 0.7s all;
    transform: ${(props) =>
      props.modalshow === "true"
        ? "translate3d(0, 0, 0)"
        : "translate3d(10rem, 0, 0)"};
    opacity: ${(props) => (props.modalshow === "true" ? "1" : "0")};

    border-radius: 100%;
    border: 1px solid transparent;

    cursor: pointer;

    &:hover {
      border-radius: 100%;
      border: 1px solid black;
      scale: 0.9;
    }
  }

  p {
    white-space: pre-line;
    font-size: 1.5rem;
  }

  span {
    white-space: pre-line;
  }

  h3 {
    margin-top: 1rem;
  }
`;
