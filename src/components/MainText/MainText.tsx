import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import clsx from 'clsx';

import styles from './MainText.module.scss';

const textExample =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

const MainText = () => {
  useGSAP(() => {
    const text = gsap.utils.toArray('.mainText');

    gsap.to(text, {
      scrollTrigger: {
        trigger: '.mainTextWrapper',
        start: 'top top',
        end: 'top+=20% top',
        scrub: true,
        markers: true,
        refreshPriority: -1,
      },
      color: '#ffffff',
      scrub: true,
      stagger: {
        each: 0.1,
        from: 'start',
      },
    });
  }, []);

  return (
    <div className={clsx(styles.mainTextWrapper, 'mainTextWrapper')}>
      <p>
        {textExample.split('').map((char, idx) => (
          <span key={idx} className={clsx(styles.text, 'mainText')}>
            {char === ' ' ? '\u00A0' : char} {/* 공백을 &nbsp;로 변환 */}
          </span>
        ))}
      </p>
    </div>
  );
};

export default MainText;
