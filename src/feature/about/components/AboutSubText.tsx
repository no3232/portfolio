'use client';

import styles from './AboutSubText.module.scss';
import AboutConstants, {
  AboutConstantsType,
} from '../constants/AboutConstants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import wrapSpan from '../utils/wrapSpan';

const SubTextContent = ({
  content,
  setSubTextKey,
}: {
  content: AboutConstantsType;
  setSubTextKey: (key: AboutConstantsType) => void;
}) => {
  const SubTextContentRef = useRef<HTMLDivElement>(null);
  const [isCursor, setIsCursor] = useState<boolean>(false);

  useGSAP(() => {
    const subText = gsap.utils.toArray(`.${content}-inner-text`);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SubTextContentRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
        onLeave: () => {
          setIsCursor(false);
        },
        onLeaveBack: () => {
          setIsCursor(false);
        },
        onEnter: () => {
          setSubTextKey(content);
          setIsCursor(true);
        },
        onEnterBack: () => {
          setSubTextKey(content);
          setIsCursor(true);
        },
      },
    });

    tl.to(subText, {
      display: 'inline',
      stagger: {
        each: 0.1,
        from: 'start',
      },
      duration: 80,
    }).to(subText, {
      display: 'none',
      stagger: {
        each: 0.1,
        from: 'end',
      },
    });
  }, []);

  return (
    <div className={styles.aboutSubTextBox} ref={SubTextContentRef}>
      <div
        className={clsx(
          styles.textDiv,
          'text-regular',
          'h5',
          isCursor && styles.cursorAfter,
        )}
      >
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
      <SubTextContent content={'브릿지_역할을'} setSubTextKey={setSubTextKey} />
      <SubTextContent content={'꾸준히_학습'} setSubTextKey={setSubTextKey} />
    </div>
  );
};

export default AboutSubText;
