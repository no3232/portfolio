'use client';

import clsx from 'clsx';
import styles from './TempResponsiveBlock.module.scss';
import { useRouter } from 'next/navigation';

const TempResponsiveBlock = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.tempResponsiveBlock}>
      <p className={'h3'}>
        현재 모바일 반응형은 <b>준비중에</b> 있습니다.
      </p>
      <p className={'h3'}>
        <b>데스크탑</b>에서 확인해주세요.
      </p>
      <p className={'h3'}>
        화면 넓이는 <b>768px</b> 이상이어야 합니다.
      </p>
      <br />
      <button
        className={clsx(styles.tempButton, 'h3', 'text-bold')}
        onClick={handleGoBack}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default TempResponsiveBlock;
