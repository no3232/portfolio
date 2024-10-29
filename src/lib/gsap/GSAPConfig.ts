import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { flipEffects } from "./effects";

export class GSAPConfig {
  static plugins = [ScrollTrigger, useGSAP];

  static initialize() {
    // 플러그인 등록
    this.registerPlugins();
    // 커스텀 이펙트 등록
    this.registerEffects();
  }

  private static registerPlugins() {
    gsap.registerPlugin(...this.plugins);
  }

  private static registerEffects() {
    flipEffects.initialize();
  }
}

// 모든 GSAP 관련 export를 한 곳에서 관리
export { gsap, ScrollTrigger, useGSAP, flipEffects };
