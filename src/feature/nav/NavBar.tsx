'use client';

import Link from 'next/link';
import styles from './NavBar.module.scss';
import { MouseEvent } from 'react';
import { useLenis } from 'lenis/react';

const NavBar = () => {
  const lenis = useLenis();

  // 클릭 시 해당 세션으로 스크롤
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;

    if (href.includes('#')) {
      if (lenis) {
        const targetId = e.currentTarget.hash;
        lenis.scrollTo(targetId);
      }
    }
  };

  // 화면 하단으로 스크롤
  const scrollToBottom = () => {
    if (lenis) {
      lenis.scrollTo(document.body.scrollHeight);
    }
  };

  return (
    <div className={styles.navBarWrapper}>
      <div>
        <p>Number3232</p>
      </div>
      <div>
        <Link
          className={styles.navLink}
          href={'#about-section'}
          onClick={handleClick}
        >
          About Me
        </Link>
        <Link
          className={styles.navLink}
          href={'#skill-section'}
          onClick={handleClick}
        >
          Skills
        </Link>
        <Link
          className={styles.navLink}
          href={'#project-section'}
          onClick={handleClick}
        >
          Projects
        </Link>
        <Link
          className={styles.navLink}
          href={'#career-section'}
          onClick={handleClick}
        >
          Career
        </Link>
        <Link
          className={styles.navLink}
          href={'#contact-section'}
          onClick={scrollToBottom}
        >
          Contact Me!
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
