import styles from './SkillBoxGrid.module.scss';
import { Skill, skills } from '../constants/skills';
import clsx from 'clsx';
import Image from 'next/image';

const SkillBoxNone = () => {
  return <div className={styles.skillBoxNone}></div>;
};

const SkillBox = ({
  skill,
  setSkillKey,
  skillKey,
}: {
  skill: Skill;
  setSkillKey: (key: string) => void;
  skillKey: string;
}) => {
  return (
    <div
      className={clsx(
        styles.skillBox,
        skillKey === skill.title && styles.active,
      )}
      onMouseEnter={() => setSkillKey(skill.title)}
    >
      <Image src={skill.imageUrl} alt={skill.title} width={50} height={50} />
      <p className='fs-24'>{skill.title}</p>
    </div>
  );
};

const SkillBoxGrid = ({
  setSkillKey,
  skillKey,
}: {
  setSkillKey: (key: string) => void;
  skillKey: string;
}) => {
  return (
    <div className={styles.skillBoxGrid}>
      {skills.map(skill => (
        <>
          <SkillBox
            key={skill.title}
            skill={skill}
            setSkillKey={setSkillKey}
            skillKey={skillKey}
          />
          <SkillBoxNone />
        </>
      ))}
    </div>
  );
};

export default SkillBoxGrid;
