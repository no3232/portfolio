"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect, Fragment } from "react";
import { keyframes, styled } from "styled-components";

interface pjtInfo {
  pjtName: string;
  pjtDate: string;
  pjtLink: string;
}

const PJTList: pjtInfo[] = [
  { pjtName: "포트폴리오", pjtDate: "2023/06", pjtLink: "/portfolio" },
  { pjtName: "디텍토", pjtDate: "2023/05", pjtLink: "/detecto" },
  { pjtName: "여가 어때", pjtDate: "2023/04", pjtLink: "/howplay" },
  { pjtName: "마이풋 트립", pjtDate: "2023/03", pjtLink: "/myfoottrip" },
  { pjtName: "SSEKER", pjtDate: "2023/01", pjtLink: "/portfolio" },
  { pjtName: "버닝타임", pjtDate: "2022/11", pjtLink: "/burningtime" },
  { pjtName: "LLATROF", pjtDate: "2022/11", pjtLink: "/portfolio" },
];

const ProjectListItem = ({
  pjtInfo,
  nth,
  selected,
  selecthandler,
}: {
  pjtInfo: pjtInfo;
  nth: number;
  selected: boolean;
  selecthandler: () => void;
}) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(false);

  const linkClickHandler = () => {
    selecthandler();
    setSelectedItem(true);
    setTimeout(() => {
      router.push(pjtInfo.pjtLink);
    }, 1500);
  };

  return (
    <ProjectListli
      nth={nth}
      beforecontent={pjtInfo.pjtDate}
      onClick={linkClickHandler}
      className={selected ? "selected" : ""}
    >
      <div className={selectedItem ? "selectedpjt" : ""}>
        <a href={pjtInfo.pjtLink} onClick={e => e.preventDefault()}>
          {pjtInfo.pjtName.split(" ").map((text, idx) => (
            <Fragment key={idx + text}>
              {text}
              <br />
            </Fragment>
          ))}
        </a>
      </div>
    </ProjectListli>
  );
};

function ProjectList() {
  const [perspectiveY, setPerspectiveY] = useState(0);
  const [selected, setSelected] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPerspectiveY(window.innerHeight / 3);
  }, []);

  const selectHandler = () => {
    setSelected(true);
  };

  return (
    <ProjectListDiv perspective_y={perspectiveY} ref={divRef}>
      <main>
        <ul>
          {PJTList.map((pjt, index) => {
            return (
              <ProjectListItem
                key={pjt.pjtName + "PJT"}
                pjtInfo={pjt}
                nth={index}
                selected={selected}
                selecthandler={selectHandler}
              />
            );
          })}
        </ul>
      </main>
    </ProjectListDiv>
  );
}

export default ProjectList;

interface ProjectListDivProps {
  perspective_y: number;
}

const MainStart = keyframes`
  0% {
		transform: translate3d(0, -150%, 0);
	}
	100% {
		transform: translate3d(0, 0, 0);
	}
`;

const ListStart = keyframes`
  0% {
    transform: rotate3d(-0.1, 1, 0, -120deg) translateZ(0) scale(1);
    opacity: 0;
  }

  80% {
    transform: rotate3d(-0.1, 1, 0, -44deg) translateZ(0) scale(1);
  }

  100% {
    transform: rotate3d(-0.1, 1, 0, -45deg) translateZ(0) scale(1);
    opacity: 1;
  }
`;

const ListEnd = keyframes`
  100% {
    transform: rotate3d(-0.1, 1, 0, -120deg) translateZ(0) scale(1);
    opacity: 0;
  }
`;

const ListSelect = keyframes`

  20% {
    transform: rotate3d(-0.1, 1, 0, 0deg) translateZ(0) scale(1);
  }

  50% {
    transform: rotate3d(-0.1, 1, 0, 0deg) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: rotate3d(-0.1, 1, 0, 0deg) translateZ(0) scale(0.5);
    opacity: 0;
  }
`;

const ProjectListli = styled.li<{ nth: number; beforecontent: string }>`
  line-height: 1;

  transform-style: preserve-3d;

  cursor: pointer;

  &:hover {
    div {
      transform: rotate3d(0, 1, 0, -25deg) translateZ(0) scale(1);
    }
    a {
      color: ${(props) => props.theme.colors.white};
      -webkit-text-stroke: 0.1rem black;
      &::before {
        color: ${(props) => props.theme.colors.black};
      }
      &::after {
        color: ${(props) => props.theme.colors.black};
      }
    }
  }

  div {
    display: flex;
    justify-content: end;

    margin-bottom: 1rem;

    transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    transform: rotate3d(-0.1, 1, 0, -45deg) translateZ(0) scale(1);
    transform-origin: right center;
    transform-style: preserve-3d;
    will-change: transform;

    animation: ${ListStart} 2s;
    animation-delay: ${(props) => `${1 - props.nth / 10}s`};
  }

  &.selected {
    .selectedpjt {
      a {
        color: ${(props) => props.theme.colors.white};
        -webkit-text-stroke: 0.1rem black;
        &::before {
          color: ${(props) => props.theme.colors.black};
        }
        &::after {
          color: ${(props) => props.theme.colors.black};
        }
      }
      animation: ${ListSelect} 2s forwards;
    }
    div:not(.selectedpjt) {
      animation: ${ListEnd} 0.5s forwards;
      animation-delay: ${(props) => `${1 - props.nth / 10}s`};
    }
  }

  a {
    position: relative;
    font-family: AgroBold, sans-serif, Arial;
    font-size: 9.6vw;

    color: #000;
    -webkit-text-stroke: 2px #000;

    transform-style: preserve-3d;

    &::after {
      content: "";
      position: absolute;
      top: -0.2rem;
      left: -2rem;
      width: 2px;
      height: 0.85em;
      background-color: #000;
      transform: rotate(25deg);
      pointer-events: none;
    }

    &::before {
      font-family: AgroLight, sans-serif, Arial;
      font-size: 1rem;
      content: "${(props) => props.beforecontent}";
      position: absolute;
      left: -7rem;
      top: 0;
      -webkit-text-stroke: 0px black;
    }
  }
`;

const ProjectListDiv = styled.div.attrs<ProjectListDivProps>((props) => ({
  style: {
    "--perspective-y": `${props.perspective_y}px`,
  },
}))`
  width: 100%;
  height: 100vh;

  transform-style: preserve-3d;
  transform: translateZ(0);

  z-index: 0;

  will-change: perspective-origin;
  perspective: 100vw;
  perspective-origin: 50% var(--perspective-y);

  overflow-x: hidden;
  main {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: calc(100% - 5vw);
    padding: 5vw 5vw calc(7.5vw + 67px) 0;
    transform-style: preserve-3d;

    transform: translate3d(0, 0, 0);

    animation: ${MainStart} 2s;
  }

  ul {
    position: relative;
    transform-style: preserve-3d;

    width: 95%;

    text-align: right;
  }
`;
