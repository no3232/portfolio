'use client';

import styles from './DetailFooter.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const DetailFooter = () => {
  return (
    <footer className={styles.detailFooterWrapper} id='contact-section'>
      <div className={styles.detailFooterContainer}>
        <Link href='/'>
          <p className='h6 text-bold'>{'<-'} Back to Index</p>
        </Link>
        <div>
          <p className='h6 text-bold'>Project List</p>
          <ul className={styles.detailFooterList}>
            <li>
              <Link href='/haedeup'>
                <p className='fs-30'>Haedeup</p>
              </Link>
            </li>
            <li>
              <Link href='/grida'>
                <p className='fs-30'>GRIDA</p>
              </Link>
            </li>
            <li>
              <Link href='/woodang'>
                <p className='fs-30'>WoodangMainPage</p>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <p className='fs-30'>Portfolio</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default DetailFooter;
