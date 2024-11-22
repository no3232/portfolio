'use client';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import styles from './CareerLayout.module.scss';
import CareerList from '../components/CareerList';

const CareerLayout = () => {
  return (
    <section id='career-section' className={styles.careerSection}>
      <div className={styles.careerTitle}>
        <h1 className='h3'>프론트엔드 2년차</h1>
        <h1 className='h3'>커리어를 이어가고 있습니다.</h1>
      </div>  
      <CareerList />
    </section>
  );
};

export default CareerLayout;
