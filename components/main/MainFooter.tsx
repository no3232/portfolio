import React from "react";
import { keyframes, styled } from "styled-components";

function MainFooter() {
  return (
    <MainFooterDiv>
      <ul>
        <li>
          <button>Resume</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>
            <a href='mailto:tkdwns1324@gmail.com'>
              Email: tkdwns1324@gmail.com
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href='https://github.com/no3232' target='_blank'>
              GitHub
            </a>
          </button>
        </li>
        <li>
          <button>
            <a
              href='https://www.notion.so/no3232/Portfolio-d4a7e119678440e4856e0d44dacae8bb?pvs=4'
              target='_blank'
            >
              NotionPortfolio
            </a>
          </button>
        </li>
      </ul>
    </MainFooterDiv>
  );
}

export default MainFooter;

const FooterStart = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainFooterDiv = styled.footer`
  position: fixed;
  bottom: 2rem;
  left: 3rem;

  
  display: flex;
  flex-direction: column;
  
  z-index: 2;
  
  button {
    width: 100%;
    font-size: 1.5rem;
    transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    transform-origin: left;

    &:hover {
      scale: 0.9;
    }

    cursor: pointer;
  }

  li {
    opacity: 0;
    transform: translateY(50%);
    animation: ${FooterStart} 1.5s forwards;
    animation-delay: 2.5s;
  }
`;
