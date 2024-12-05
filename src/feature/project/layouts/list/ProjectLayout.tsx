'use client';

import clsx from 'clsx';
import styles from './ProjectLayout.module.scss';

import { useGSAP } from '@gsap/react';
import ProjectDescription from '../../components/list/ProjectDescription';
import ProjectTitle from '../../components/list/ProjectTitle';
import { useState } from 'react';
import { createProjectListTimeline } from '../../util/createProjectListTimeline';
import { projectList } from '../../constants/List';



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
        <div
          className={clsx(styles.projectGridSection, 'grid h-full')}
          id='project-grid-section'
        >
        <div className={styles.skillTitle}>
          <h3 className='h6 text-bold'>
            WHAT I DID<b className='text-primary'>?</b>
          </h3>
        </div>
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
