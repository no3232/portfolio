import styles from './DetailSkill.module.scss';

export interface SkillItem {
  name: string;
  version: string;
  description: string;
}

export interface DatailSkillProps {
  skillList: SkillItem[];
}

const DetailSkill = ({ skillList }: DatailSkillProps) => {
  return (
    <section>
      <p className='text-graytext'>Skill</p>
      {skillList.map(skill => (
        <div className={styles.skillItemDiv}>
          <p className='text-white fs-24'>{skill.name} {skill.version}</p>
          <p className={styles.skillDescription}>{skill.description}</p>
        </div>
      ))}
    </section>
  );
};

export default DetailSkill;
