import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/Waves.module.css';

const Waves = () => {
  return (
    <div className={styles.container}>
      <Image src="/wave.svg" alt="Wave" fill className={styles.wave} />
    </div>
  );
};

export default Waves;
