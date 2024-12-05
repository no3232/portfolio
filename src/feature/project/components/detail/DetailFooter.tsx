'use client';

import styles from './DetailFooter.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';
import { projectPageNavLinks } from '@/feature/nav/constants/NavLinks';

gsap.registerPlugin(ScrollTrigger);

const DetailFooter = () => {
  return (
    <footer className={styles.detailFooterWrapper} id='contact-section'>
      <div className={styles.detailFooterContainer}>
        <Link className={styles.linkWrapper} href='/'>
          <img src='icon/arrow-left.svg' alt='' />
          <p className='h6 text-bold'>Back to Index</p>
        </Link>
        <div>
          <p className='h6 text-bold'>Project List</p>
          <ul className={styles.detailFooterList}>
            {projectPageNavLinks.map(link => (
              <li>
                <Link href={link.href}>
                  <p className='fs-30'>{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default DetailFooter;
