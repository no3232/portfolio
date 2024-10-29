import gsap from 'gsap';

interface StaggerConfig {
  amount: number;
  from: string;
}

export const flipEffects = {
  defaultStagger: {
    amount: 0.5,
    from: "random",
  } as StaggerConfig,

  initialize() {
    this.registerFlip();
    this.registerFlipBack();
  },

  registerFlip() {
    gsap.registerEffect({
      name: "flip",
      effect: (targets: any, config: any) => {
        return gsap.to(targets, {
          keyframes: [
            { rotationX: 360, duration: 0 },
            { rotationX: 180, duration: 0.22, ease: "linear" },
            { rotationX: -40, duration: 0.25, ease: "linear" },
            { rotationX: 10, duration: 0.33, ease: "linear" },
            { rotationX: 0, duration: 0.2, ease: "linear" },
          ],
          stagger: config.stagger || this.defaultStagger,
        });
      },
      extendTimeline: true,
    });
  },

  registerFlipBack() {
    gsap.registerEffect({
      name: "flipBack",
      effect: (targets: any, config: any) => {
        return gsap.to(targets, {
          keyframes: [
            { rotateX: 180, duration: 0 },
            { rotateX: 0, duration: 0.22 },
            { rotateX: -220, duration: 0.25 },
            { rotateX: -170, duration: 0.33 },
            { rotateX: -180, duration: 0.2 },
          ],
          stagger: config.stagger || this.defaultStagger,
          ease: "linear",
        });
      },
      extendTimeline: true,
    });
  },
};