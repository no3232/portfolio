import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { aboutShow } from "@/store/layout";

function BackButton() {
  const router = useRouter();
  const pathName = usePathname();
  const [buttonShow, setButtonShow] = useState(false);
  const aboutShowState = useRecoilValue(aboutShow);

  useEffect(() => {
    return pathName !== "/" ? setButtonShow(true) : setButtonShow(false);
  }, [pathName]);

  const backButtonHandler = () => {
    setButtonShow(false);

    router.push("/");
  };

  return (
    <Backbutton
      className={buttonShow && !aboutShowState ? "buttonShow" : ""}
      onClick={backButtonHandler}
    >
      <FaArrowLeft />
    </Backbutton>
  );
}

export default BackButton;

const Backbutton = styled.button`
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
  transform: translate3d(10rem, 0, 0);
  opacity: 0;

  &.buttonShow {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  border-radius: 100%;
  border: 1px solid transparent;

  cursor: pointer;

  &:hover {
    border-radius: 100%;
    border: 1px solid black;
    scale: 0.9;
  }
`;
