import styles from './ProjectImages.module.scss';

const ProjectImages = () => {
  return (
    <div className={styles.projectImageWrapper}>
      <div className={styles.imgWrapper}>
        <img
          src='https://cdn.spotvnews.co.kr/news/photo/202311/640986_943029_2612.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default ProjectImages;
