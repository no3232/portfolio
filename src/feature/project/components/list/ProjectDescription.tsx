import clsx from 'clsx';

import styles from './ProjectDescription.module.scss';
import Link from 'next/link';
import { ProjectDescriptionInterface } from '../../constants/List';

interface ProjectDescriptionProps {
  description: ProjectDescriptionInterface;
}

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  return (
    <div className={styles.projectContentsWrapper}>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>Period</p>
        <p className={clsx('text-white', 'fs-20')}>{description.period}</p>
      </div>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>Role</p>
        <p className={clsx('text-white', 'fs-20')}>{description.role}</p>
      </div>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>Stack</p>
        {description.stack.map((stack, index) => (
          <p key={index} className={clsx('text-white', 'fs-20')}>
            {stack}
          </p>
        ))}
      </div>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>
          Description
        </p>
        <p className={clsx('text-white', 'fs-20')}>{description.description}</p>
      </div>
      <Link href={description.link} scroll={true}>
        <button
          className={clsx('text-white', 'fs-20', styles.viewProjectButton)}
        >
          <p className={clsx('text-bg', 'text-bold', 'fs-30')}>
            See More Info -&gt;
          </p>
        </button>
      </Link>
    </div>
  );
};

export default ProjectDescription;
