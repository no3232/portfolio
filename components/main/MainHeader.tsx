import { aboutShow } from '@/store/layout';
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilValue } from 'recoil';
import { keyframes, styled } from "styled-components";

function MainHeader() {
  const pathName = usePathname();
  const aboutShowState = useRecoilValue(aboutShow);

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  return (
    <MainHeaderDiv className={`${pathName !== "/" || aboutShowState ? "toTop" : "toBottom"}`}>
      <a href='/'>
        <span className='slideup'>
          <h2>프론트엔드 개발자</h2>
        </span>
        <span className='slideup'>
          <h1>배상준</h1>
        </span>
      </a>
      <span className='slideup'>
        <p>&quot;인터랙션을 좋아하는 개발자&quot;</p>
      </span>
      <span className='slideup'>
        <p>사용자의 새로운 경험에 관심이 많습니다.</p>
      </span>
      <span className='slideup'>
        <p>항상 성장하기 위해 노력합니다.</p>
      </span>
    </MainHeaderDiv>
  );
}

export default MainHeader;

const WordStart = keyframes`
  0% {
    transform: translate3d(0, 120%, 0);
  }

  100% {
    transform: translate3d(0, 5%, 0);
  }
`;

const MainHeaderDiv = styled.header`
  position: fixed;
  top: 2rem;
  left: 3rem;
  transform: translate3d(0, calc(100vh - 26rem), 0);
  
  transition: 0.5s all cubic-bezier(.23,-0.21,.01,1);
  &:not(.toBottom) {
    transform: translate3d(0, 0, 0);
    h1, h2 {
      animation: ${WordStart} 0.3s forwards;
    }

    p {
      transition: 0.2s;
      opacity: 0;
      visibility: hidden;
    }
  }
  z-index: 2;

  .slideup {
    display: block;
    overflow: hidden;
  }

  h1 {
    font-family: AgroBold;
    font-size: 5rem;

    transform: translate3d(0, 120%, 0);

    transition: color 0.3s;

    animation: ${WordStart} 1s forwards;
    animation-delay: 2s;
  }

  h2 {
    font-family: AgroBold;
    font-size: 2.5rem;

    transform: translate3d(0, 120%, 0);

    transition: color 0.3s;

    animation: ${WordStart} 1s forwards;
    animation-delay: 2s;
  }

  p {
    font-size: 1.5rem;

    transition: 0.5s;

    transform: translate3d(0, 120%, 0);

    animation: ${WordStart} 1s forwards;
    animation-delay: 2s;

    line-height: 2rem;
  }

  a {
    &:hover {
      h2,
      h1 {
        color: transparent;
        -webkit-text-stroke: 2px black;
      }
    }
  }
`;
