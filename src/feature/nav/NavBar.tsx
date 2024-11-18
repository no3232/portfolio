'use client';

import Link from 'next/link';
import styles from './NavBar.module.scss';
import { MouseEvent } from 'react';
import { useLenis } from 'lenis/react';

const NavBar = () => {
  const lenis = useLenis();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.href;

    if (href.includes('#')) {
      e.preventDefault();
      if (lenis) {
        const targetId = e.currentTarget.hash;
        lenis.scrollTo(targetId);
      }
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
        <Link className={styles.navLink} href={'#'}>
          Projects
        </Link>
        <Link className={styles.navLink} href={'#'}>
          Contact Me!
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
