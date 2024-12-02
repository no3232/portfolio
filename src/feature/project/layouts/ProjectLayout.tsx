'use client';

import clsx from 'clsx';
import styles from './ProjectLayout.module.scss';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import ProjectDescription from '../components/list/ProjectDescription';
import ProjectTitle from '../components/list/ProjectTitle';
import { useState } from 'react';
import { createProjectListTimeline } from '../util/createProjectListTimeline';

export interface ProjectDescriptionInterface {
  title: string;
  period: string;
  role: string;
  stack: string[];
  description: string;
  link: string;
  image: string;
}

const gridaDescription: ProjectDescriptionInterface = {
  title: 'GRIDA',
  period: '2024.01 ~ 2024.07',
  role: 'Front-End Developer',
  stack: [
    'Nextjs @14.2.3',
    'vanilla-extarct @1.15.1',
    '@tanstack/react-query @5.37.1',
    'zustand @4.5.2',
    'cookie @0.6.0',
    'react-hook-form @7.51.4',
    'react-quill @2.0.0',
    'etc',
  ],
  description: '우당네트웍의 실험 연구 대행 서비스 신청 및 관리페이지',
  link: '/grida',
  image: '/project/grida.png',
};

const haedeupDescription: ProjectDescriptionInterface = {
  title: 'HAEDEUP',
  period: '2024.09 ~ 2024.10',
  role: 'Front-End Developer',
  stack: [
    'Nextjs @14.2.3',
    'tailwindcss @3.4.10',
    'shadcn/UI @2.1.0',
    '@tanstack/react-query @5.37.1',
    'zustand @4.5.2',
    'GraphQL',
    '@graphql-codegen/cli @5.0.2',
    'turbo @2.1.0',
    'etc',
  ],
  description: '우당 네트웍의 피부검사 및 리포트 발행 헬스 케어 서비스',
  link: '/haedeup',
  image: '/project/haedeup.png',
};

const woodangDescription: ProjectDescriptionInterface = {
  title: 'WOODANG',
  period: '2024.01 ~ 2024.03',
  role: 'Front-End Developer',
  stack: [
    'Nextjs @14.2.3',
    'vanilla-extarct @1.15.1',
    '@tanstack/react-query @5.37.1',
    'zustand @4.5.2',
    'react-hook-form @7.51.4',
    'react-quill @2.0.0',
    'etc',
  ],
  description: '우당 네트웍의 피부검사 및 리포트 발행 헬스 케어 서비스',
  link: '/woodang',
  image: '/project/woodang.png',
};

const portfolioDescription: ProjectDescriptionInterface = {
  title: 'Portfolio',
  period: '2024.11 ~ 2024.12',
  role: 'Front-End Developer',
  stack: [
    'Next.js @14',
    'SASS @1.80.3',
    'GSAP @1.80.3',
    'lenis @1.80.3',
    'highlight.js @1.80.3',
  ],
  description: '개인 포트폴리오 사이드 프로젝트',
  link: '/portfolio',
  image: '/project/portfolio.png',
};

const projectList: ProjectDescriptionInterface[] = [
  haedeupDescription,
  gridaDescription,
  woodangDescription,
  portfolioDescription,
];

const ProjectLayout = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useGSAP(() => {
    createProjectListTimeline(
      'project-grid-section',
      projectList,
      setCurrentProject,
    );
  }, []);

  return (
    <div className={styles.projectLayoutWrapper} id='project-section-wrapper'>
      <section id='project-section'>
        <div className={styles.skillTitle}>
          <h3 className='h6 text-bold'>
            WHAT I DID<b className='text-primary'>?</b>
          </h3>
        </div>
        <div
          className={clsx(styles.projectGridSection, 'grid h-full')}
          id='project-grid-section'
        >
          <ProjectTitle title={projectList[currentProject].title} />
          <div className={styles.imageListGrid}>
            {projectList.map((project, index) => (
              <a
                className={styles.projectThumbnailImage}
                key={`${project.title}-list`}
                href={project.link}
                id={`${project.title}`}
                style={{
                  zIndex: projectList.length - index,
                }}
              >
                <div className={styles.thumbnailImageWrapper}>
                  <div className={styles.thumbnailImageInner}>
                    <img
                      className={styles.thumbnailImage}
                      src={project.image}
                      alt='haedeup'
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <ProjectDescription description={projectList[currentProject]} />
        </div>
      </section>
    </div>
  );
};

export default ProjectLayout;
