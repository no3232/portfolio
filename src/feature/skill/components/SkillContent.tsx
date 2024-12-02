'use client';

import styles from './SkillContent.module.scss';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { Skill, skills } from '../constants/skills';

const defaultSkillDescription: Skill = {
  title: 'Skill',
  score: 0,
  imageUrl: '',
  description: [
    '해당 스택과 관련된 설명이',
    '위치하게 됩니다.',
    '보고싶은 스택을 호버해주세요',
  ],
};

const SkillContent = ({ skillKey }: { skillKey: string }) => {
  const skill =
    skills.find(skill => skill.title === skillKey) || defaultSkillDescription;

  const circumference = 2 * Math.PI * 40; // 2 * PI * radius

  const scoreRef = useRef<SVGCircleElement>(null);
  const scoreNumberRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to('#skill-content', {
      scrollTrigger: {
        trigger: '#skill-grid-div',
        start: 'top top',
        end: `bottom bottom`,
        pin: '#skill-content',
        pinSpacing: false,
      },
    });
  }, []);

  const timelineRef = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    const title = gsap.utils.toArray('.skillTitle');

    const description = gsap.utils.toArray('.skillDescription');

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    gsap.set(scoreRef.current, { strokeDashoffset: circumference });
    gsap.set(scoreNumberRef.current, { innerHTML: '0' });
    timelineRef.current = gsap.timeline({});

    timelineRef.current
      .to(scoreRef.current, {
        strokeDashoffset: circumference,
        duration: 0,
      })
      .fromTo(
        title,
        {
          opacity: 0,
          y: '10rem',
        },
        {
          opacity: 1,
          y: 0,
        },
      )
      .to(scoreRef.current, {
        strokeDashoffset: circumference * (1 - skill.score / 10),
        duration: 1,
        ease: 'power2.out',
      })
      .to(
        scoreNumberRef.current,
        {
          innerHTML: skill.score,
          duration: 1,
          snap: { innerHTML: 1 },
          ease: 'power2.out',
          value: {
            startAt: 0,
            endAt: skill.score,
          },
        },
        '<',
      )
      .fromTo(
        description,
        {
          opacity: 0,
          y: '3rem',
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
        },
        '<',
      );

    gsap.to('#skill-content', {
      scrollTrigger: {
        trigger: '#skill-grid-div',
        start: 'top-=200px top',
        end: `bottom bottom`,
        onEnter: () => {
          timelineRef.current?.play();
        },
      },
    });
  }, [skillKey]);

  return (
    <div className={styles.skillContent} id='skill-content'>
      <div className={styles.skillTitleWrapper}>
        <h3
          className={clsx('h3', 'skillTitle', styles.skillTitle, 'text-bold')}
        >
          {skill.title}
        </h3>
        <div className={styles.skillScore}>
          <p
            className={clsx(
              'fs-36',
              'text-bold',
              'skillTitle',
              styles.skillTitle,
            )}
          >
            <b ref={scoreNumberRef}>0</b>/10
          </p>
          <svg viewBox='0 0 100 100'>
            <circle
              className={styles.backgroundCircle}
              r='40'
              cx='50'
              cy='50'
              fill='none'
              stroke='#575858'
              strokeWidth='8'
            />
            <circle
              ref={scoreRef}
              r='40'
              cx='50'
              cy='50'
              fill='none'
              stroke='url(#circleGradient)'
              strokeWidth='8'
              strokeLinecap='round'
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
            />
            <defs>
              <linearGradient
                id='circleGradient'
                x1='0%'
                y1='0%'
                x2='0%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#ff4800' />
                <stop offset='100%' stopColor='#e07400' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <ul className={styles.skillContentList}>
        {skill.description.map((el, idx) => {
          return (
            <li
              className={clsx(
                'fs-36',
                styles.skillDescription,
                'skillDescription',
              )}
              key={el + idx}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillContent;
