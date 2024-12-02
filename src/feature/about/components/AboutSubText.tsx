'use client';

import styles from './AboutSubText.module.scss';
import AboutConstants, {
  AboutConstantsType,
} from '../constants/AboutConstants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import clsx from 'clsx';
import wrapSpan from '../utils/wrapSpan';

const SubTextContent = ({
  content,
  setSubTextKey,
}: {
  content: AboutConstantsType;
  setSubTextKey: (key: AboutConstantsType) => void;
}) => {
  useGSAP(() => {
    const subText = gsap.utils.toArray(`.${content}-inner-text`);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${content}-inner-text-wrapper`,
        start: 'top top+=50%',
        end: 'bottom-=50% bottom-=40%',
        scrub: true,
        onEnter: () => {
          setSubTextKey(content);
        },
        onEnterBack: () => {
          setSubTextKey(content);
        },
      },
    });

    tl.to(subText, {
      color: 'white',
      stagger: {
        each: 0.1,
        from: 'start',
      },
      duration: 1,
    });
  }, []);

  return (
    <div className={styles.aboutSubTextBox} id={`${content}-inner-text-wrapper`}>
      <div className={clsx(styles.textDiv, 'text-regular', 'fs-24')}>
        {wrapSpan(AboutConstants[content].innerText, content)}
      </div>
    </div>
  );
};

interface AboutSubTextProps extends React.HTMLAttributes<HTMLDivElement> {
  setSubTextKey: (key: AboutConstantsType) => void;
}

const AboutSubText = ({ setSubTextKey, ...props }: AboutSubTextProps) => {
  return (
    <div className={styles.aboutSubTextWrapper} {...props}>
      <SubTextContent
        content={'인터랙션을_좋아'}
        setSubTextKey={setSubTextKey}
      />
      <SubTextContent content={'꾸준히_학습'} setSubTextKey={setSubTextKey} />
      <SubTextContent content={'브릿지_역할을'} setSubTextKey={setSubTextKey} />
    </div>
  );
};

export default AboutSubText;
