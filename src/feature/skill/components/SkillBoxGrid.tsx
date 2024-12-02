import styles from './SkillBoxGrid.module.scss';
import { Skill, skills } from '../constants/skills';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment } from 'react';

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
        <Fragment key={skill.title}>
          <SkillBox
            skill={skill}
            setSkillKey={setSkillKey}
            skillKey={skillKey}
          />
          <SkillBoxNone />
        </Fragment>
      ))}
    </div>
  );
};

export default SkillBoxGrid;
