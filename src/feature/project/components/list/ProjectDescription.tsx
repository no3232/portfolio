import clsx from 'clsx';

import styles from './ProjectDescription.module.scss';
import Link from 'next/link';

const ProjectDescription = () => {
  return (
    <div className={styles.projectContentsWrapper}>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>Period</p>
        <p className={clsx('text-white', 'fs-20')}>2023.09 ~ 2023.11</p>
      </div>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>Role</p>
        <p className={clsx('text-white', 'fs-20')}>Frontend (100%)</p>
      </div>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>Stack</p>
        <p className={clsx('text-white', 'fs-20')}>Next.js @14.2.5</p>
        <p className={clsx('text-white', 'fs-20')}>Next.js @14.2.5</p>
        <p className={clsx('text-white', 'fs-20')}>Next.js @14.2.5</p>
        <p className={clsx('text-white', 'fs-20')}>Next.js @14.2.5</p>
        <p className={clsx('text-white', 'fs-20')}>Next.js @14.2.5</p>
        <p className={clsx('text-white', 'fs-20')}>Next.js @14.2.5</p>
        <p className={clsx('text-white', 'fs-20')}>Next.js @14.2.5</p>
      </div>
      <div className={styles.contentsKey}>
        <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>
          Description
        </p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
        <p className={clsx('text-white', 'fs-20')}>실험 대행 서비스 플랫폼</p>
      </div>
      <Link href='/'>
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
