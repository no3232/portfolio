import clsx from 'clsx';
import styles from './ProjectTitle.module.scss';

const ProjectTitle = ({title}: {title: string}) => {
  return (
    <div className={styles.projectTitleWrapper}>
      <p className={clsx('text-graytext', 'text-bold', 'fs-20')}>Title</p>
      <p className={clsx('text-white', 'h3', 'text-bold')}>{title}</p>
    </div>
  );
};

export default ProjectTitle;
