import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import clsx from 'clsx';

import styles from './MainText.module.scss';
import { ScrollTrigger } from 'gsap/all';

const textExample =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

const MainText = () => {
  useGSAP(() => {
    const text = gsap.utils.toArray('.mainText');

    gsap.to(text, {
      scrollTrigger: {
        trigger: '.mainTextWrapper',
        start: 'top top+=50%',
        end: 'top top',
        scrub: true,
        refreshPriority: 10,
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
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default MainText;
