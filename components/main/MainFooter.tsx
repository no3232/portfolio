import React from "react";
import { keyframes, styled } from "styled-components";

function MainFooter() {
  return (
    <MainFooterDiv>
      <ul>
        <li><button>Resume</button></li>
        <li><button>Email</button></li>
        <li><button>GitHub</button></li>
        <li><button>NotionPortfolio</button></li>
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
`

const MainFooterDiv = styled.footer`
  position: fixed;
  bottom: 2rem;
  left: 1rem;

  display: flex;
  flex-direction: column;

  z-index: 2;
  
  button {
    font-size: 1.5rem;
    transition: 0.1s ease;

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
