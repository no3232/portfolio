'use client';

import styles from './ContactLayout.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const ContactLayout = () => {
  return (
    <footer className={styles.contactLayoutWrapper} id='contact-section'>
      <div className={styles.contentContainer}>
        <p className='h3 text-bold'>Thank you for watching</p>
        <p className='h3 text-bold'>And...</p>
        <p className='h3 text-bold'>Contact Me! plz....</p>
        <div>
          <Link href='mailto:tkdwns1324@gmail.com'>
            <p className='fs-30'>tkdwns1324@gmail.com</p>
          </Link>
          <Link href='tel:01026617076'>
            <p className='fs-30'>010-2661-7076</p>
          </Link>
          <Link href='https://github.com/no3232'>
            <p className='fs-30'>github.com/no3232</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ContactLayout;
