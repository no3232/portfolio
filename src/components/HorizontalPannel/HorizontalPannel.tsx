"use client";

import { useGSAP } from "@gsap/react";
import styles from "./HorizontalPannel.module.scss";
import clsx from "clsx";
import gsap from "gsap";

const HorizontalPannel = () => {
  useGSAP(() => {
    const panels = gsap.utils.toArray(".horizontalItem");

    const timeline = gsap.timeline();

    timeline.to(panels, {
      scrollTrigger: {
        trigger: ".horizontalContainer",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: true,
      },
      xPercent: -100 * (panels.length - 1),
      ease: "none",
    });
  }, []);

  return (
    <div className={clsx(styles.PanelContainer, "horizontalContainer")}>
      <div className={clsx(styles.PanelItem, "horizontalItem")}>test</div>
      <div className={clsx(styles.PanelItem, "horizontalItem")}>test2</div>
      <div className={clsx(styles.PanelItem, "horizontalItem")}>test3</div>
    </div>
  );
};

export default HorizontalPannel;
