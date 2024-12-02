import Link from 'next/link';
import styles from './DetailOverView.module.scss';

export interface DetailOverViewProps {
  project: string;
  period: string;
  role: string;
  link: string[];
  team: string[];
}

const DetailOverView = ({
  project,
  period,
  role,
  link,
  team,
}: DetailOverViewProps) => {
  return (
    <section className={styles.overViewSectionGrid}>
      <div className={styles.projectTitle}>
        <p className='text-graytext'>Project</p>
        <h1 className='text-white h3'>{project}</h1>
      </div>
      <div>
        <p className='text-graytext'>Period</p>
        <p className='text-white fs-26'>{period}</p>
      </div>
      <div>
        <p className='text-graytext'>Role</p>
        <p className='text-white fs-26'>{role}</p>
      </div>
      <div>
        <p className='text-graytext'>Link</p>
        {link.map((item, index) => (
          <Link href={item} className='text-white fs-26' target='_blank'>
            <p>{item}</p>
          </Link>
        ))}
      </div>
      <div>
        <p className='text-graytext'>Team</p>
        {team.map((item, index) => (
          <p className='text-white fs-26' key={`${index}-${item}`}>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
};

export default DetailOverView;
