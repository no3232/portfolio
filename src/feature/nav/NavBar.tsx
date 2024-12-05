'use client';

import Link from 'next/link';
import styles from './NavBar.module.scss';
import { MouseEvent } from 'react';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { mainPageNavLinks, projectPageNavLinks } from './constants/NavLinks';
import { usePathname, useRouter } from 'next/navigation';

const NavBar = () => {
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  // 화면 하단으로 스크롤
  const scrollToBottom = () => {
    if (lenis) {
      lenis.scrollTo(document.body.scrollHeight, { immediate: true });
    }
  };

  // 클릭 시 해당 세션으로 스크롤
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    if (href.includes('#')) {
      if (lenis) {
        const targetId = e.currentTarget.hash;
        lenis.scrollTo(targetId, { immediate: true });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div className={styles.navBarWrapper}>
      <Link href={'/'} className={styles.logoWrapper}>
        <Image src={'/logo/logo.svg'} alt='logo' width={30} height={30} />
      </Link>

      <div>
        {isMainPage
          ? mainPageNavLinks.map(link => (
              <Link
                className={styles.navLink}
                href={link.href}
                onClick={
                  link.href === '#contact-section'
                    ? scrollToBottom
                    : handleClick
                }
              >
                {link.name}
              </Link>
            ))
          : projectPageNavLinks.map(link => (
              <Link
                className={styles.navLink}
                href={link.href}
                onClick={handleClick}
              >
                {link.name}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default NavBar;
