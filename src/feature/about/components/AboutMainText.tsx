'use client';

import styles from './AboutMainText.module.scss';

interface AboutMainTextProps extends React.HTMLAttributes<HTMLDivElement> {
  subTextKey: string;
}

const AboutMainText = ({ subTextKey, ...props }: AboutMainTextProps) => {
  return (
    <div className={styles.aboutMainTextWrapper} {...props}>
      <p className='text-bold h6'>
        WHO AM I<b className={styles.importantText}>?</b>
      </p>
      <h1 className='text-bold h3'>
        {`\${`}
        <b className={styles.importantText}>{subTextKey}</b>
        {`}하는`}
      </h1>
      <h1 className='text-bold h3'>프론트엔드 개발자</h1>
      <h1 className='text-bold h3'>배상준 입니다.</h1>
    </div>
  );
};

export default AboutMainText;
