const AboutConstants = {
  인터랙션을_좋아: {
    innerText:
      'Lorem **ipsum** dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ***labore et dolore magna aliqua**. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. **Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imper**diet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.',
  },
  브릿지_역할을: {
    innerText: `**start: "top top"** triggers when the orange element's top edge hits the top of the viewport. **end: "bottom 150px"** stops pinning when the bottom of the orange element hits 150px down from the top of the viewport (measurements are relative to the top).`,
  },
  꾸준히_학습: {
    innerText:
      'Sit amet nulla **facilisi morbi tempus**. Nulla facilisi cras fermentum odio eu. Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas mae***cenas**. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.',
  },
} as const;

export type AboutConstantsType = keyof typeof AboutConstants;

export default AboutConstants;
