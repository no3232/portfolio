import clsx from 'clsx';
import styles from './ProjectLayout.module.scss';
import Link from 'next/link';

const ProjectLayout = () => {
  return (
    <div className={styles.projectLayoutWrapper}>
      <section
        className={clsx(styles.projectGridSection, 'grid h-full')}
        id='project-section'
      >
        <div className={styles.projectTitleWrapper}>
          <p className={clsx('text-graytext', 'text-bold', 'fs-20')}>Title</p>
          <p className={clsx('text-white', 'h3', 'text-bold')}>GRIDA</p>
        </div>
        <div className={styles.projectImageWrapper}>
          <div className={styles.imgWrapper}>
            <img
              src='https://cdn.spotvnews.co.kr/news/photo/202311/640986_943029_2612.jpg'
              alt=''
            />
          </div>
        </div>
        <div className={styles.projectContentsWrapper}>
          <div className={styles.contentsKey}>
            <p className={clsx('text-graytext', 'text-bold', 'fs-16')}>
              Period
            </p>
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
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
            <p className={clsx('text-white', 'fs-20')}>
              실험 대행 서비스 플랫폼
            </p>
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
      </section>
    </div>
  );
};

export default ProjectLayout;
