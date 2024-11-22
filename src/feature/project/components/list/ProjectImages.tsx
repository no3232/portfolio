import styles from './ProjectImages.module.scss';

const ProjectImages = ({image}: {image: string}) => {
  return (
    <div className={styles.projectImageWrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default ProjectImages;
