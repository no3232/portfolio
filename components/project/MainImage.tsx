import { useRef, useEffect } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image, { StaticImageData } from "next/image";
import { keyframes, styled } from "styled-components";
import { useSetRecoilState } from "recoil";
import { scrollend } from "@/store/layout";

interface IMainImage {
  imgsrc: StaticImageData;
  title: string;
}

function MainImage({ imgsrc, title }: IMainImage) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isIntersecting = useIntersectionObserver(titleRef, {});
  const setScrollend = useSetRecoilState(scrollend);

  const titleScrolling = () => {
    if (titleRef.current) {
      titleRef.current.style.transform = `translateY(${window.scrollY/15}%)`;
    }
  };

  useEffect(() => {
    if (isIntersecting) {
      setScrollend(true);
      window.addEventListener("scroll", titleScrolling);
    } else {
      setScrollend(false);
      window.removeEventListener("scroll", titleScrolling);
    }
  }, [isIntersecting]);

  return (
    <ImageDiv>
      <h1 className='ProjectTitle' ref={titleRef}>
        {title}
      </h1>
      <Image
        src={imgsrc}
        alt='main-image'
        fill={true}
        sizes='100vw'
        style={{ objectFit: "cover" }}
      />
    </ImageDiv>
  );
}

export default MainImage;

const TitleStart = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageAfterShow = keyframes`
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
  }
`;

const ImageDiv = styled.div`
  position: relative;

  height: 35rem;

  h1 {
    position: absolute;
    top: -3rem;
    right: 5vw;

    font-size: 7vw;

    color: transparent;

    -webkit-text-stroke: 1px black;

    z-index: 2;

    pointer-events: none;
    -webkit-user-drag: none;

    transition: 0.2s ease-out;

    animation: ${TitleStart} 0.7s cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }

  img {
    animation: name duration timing-function delay iteration-count direction
      fill-mode;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100%;
    background-color: #ffffff;
    transform: scaleY(1);
    transform-origin: center top;

    animation: ${ImageAfterShow} 0.7s forwards
      cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
`;
