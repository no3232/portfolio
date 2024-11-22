'use client';

import styles from './ContactLayout.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ContactLayout = () => {
  return (
    <footer className={styles.contactLayoutWrapper} id='contact-section'>
      <div className={styles.contentContainer}>
        <p className='h4 text-bold'>감사합니다.</p>
        <div>
          <p>Contact</p>
          <div className={styles.linkContainer}>
            <Image
              src={'/contact/mail.svg'}
              alt='mail'
              width={20}
              height={20}
            />
            <Link href='mailto:tkdwns1324@gmail.com'>
              <p className='fs-20'>tkdwns1324@gmail.com</p>
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Image
              src={'/contact/phone.svg'}
              alt='mail'
              width={20}
              height={20}
            />
            <Link href='tel:01026617076'>
              <p className='fs-20'>010-2661-7076</p>
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Image
              src={'/contact/Github.svg'}
              alt='mail'
              width={16}
              height={16}
            />
            <Link href='https://github.com/no3232'>
              <p className='fs-20'>github.com/no3232</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactLayout;
