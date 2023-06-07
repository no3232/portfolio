import React from "react";
import { styled } from "styled-components";
import { aboutShow } from "@/store/layout";
import { useRecoilState } from 'recoil';

import { FaTimes } from "react-icons/fa";

function ResumeModal() {
  const [aboutShowState, setAboutShowState] = useRecoilState(aboutShow);

  const modalCloseHandler = () => {
    setAboutShowState(false)
  }

  return (
    <>
      <ModalSection modalshow={aboutShowState}>
        <span>About Me!</span>
        <button onClick={modalCloseHandler}>
          <FaTimes />
        </button>
        <div className='backdrop' />
        <div className='about'>
          <div>자기소개</div>
          <div>스킬셋</div>
          <div>교육 및 뭐 기타등등</div>
        </div>
      </ModalSection>
    </>
  );
}

export default ResumeModal;

interface ModalSectionProps {
  modalshow: boolean;
}

// const ModalSection = styled.section.attrs<ModalSectionProps>((props) => ({
//   style: {
//     "--modal-show": `${props.modalshow ? "visible" : "hidden"}`,
//   },
// }))`
const ModalSection = styled.section<ModalSectionProps>`
  visibility: ${(props) => (props.modalshow ? "visible" : "hidden")};
  position: relative;
  top: 2rem;

  > .about {
    position: fixed;
    top: calc(2rem + 140px);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100vw;

    margin: 2rem;

    z-index: 2;

    transition: all 0.2s;

    transform: ${(props) =>
      props.modalshow ? "translate3d(0, 0, 0)" : "translate3d(0, 100px, 0)"};
    opacity: ${(props) => (props.modalshow ? "1" : "0")};

    > div {
      flex-grow: 3;
      padding: 1rem;
    }
  }

  > .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    transition: opacity 0.2s;
    opacity: ${(props) => (props.modalshow ? "1" : "0")};

    background-color: rgba(255, 255, 255, 0.919);

    z-index: 1;
  }

  span {
    position: fixed;

    top: 7rem;
    left: 30rem;

    font-family: AgroBold;

    font-size: 2.5rem;

    z-index: 2;

    cursor: default;

    transition: all 0.3s;

    transform: ${(props) =>
      props.modalshow ? "translate3d(0, 0, 0)" : "translate3d(20rem, 0, 0)"};
    opacity: ${(props) => (props.modalshow ? "1" : "0")};
  }

  button {
    position: fixed;

    top: 3rem;
    right: 3rem;

    width: 5rem;
    height: 5rem;

    text-align: center;
    font-size: 3rem;

    z-index: 2;

    transition: 0.3s all;
    transform: ${(props) =>
      props.modalshow ? "translate3d(0, 0, 0)" : "translate3d(10rem, 0, 0)"};
    opacity: ${(props) => (props.modalshow ? "1" : "0")};

    border-radius: 100%;
    border: 1px solid transparent;

    cursor: pointer;

    &:hover {
      border-radius: 100%;
      border: 1px solid black;
      scale: 0.9;
    }
  }
`;
