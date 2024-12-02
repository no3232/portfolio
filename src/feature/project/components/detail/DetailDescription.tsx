import clsx from 'clsx';
import styles from './DetailDescription.module.scss';

export interface DetailDescriptionProps {
  description: string;
}

const DetailDescription = ({ description }: DetailDescriptionProps) => {
  return (
    <section className={styles.descriptionSection}>
      <p className='text-graytext'>Description</p>
      <p className={clsx('text-white fs-24', styles.description)}>
        {description}
      </p>
    </section>
  );
};

export default DetailDescription;
