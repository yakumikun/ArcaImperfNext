import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/app/styles/ImageChange.module.css';

export default function HoverImage() {
  const [imageChange, setImageChange] = useState<string>('/menubar.svg');
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({
    width: 41,
    height: 29,
  });

  const handleMouseEnter = () => {
    setImageChange('/menubarHover.svg');
    setImageSize({ width: 63, height: 29 });
  };

  const handleMouseLeave = () => {
    setImageChange('/menubar.svg');
    setImageSize({ width: 41, height: 29 });
  };

  return (
    <div className={styles['image-container']}>
      <Image
        src={imageChange}
        alt="hoverImage"
        width={imageSize.width}
        height={imageSize.height}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.image}
      />
    </div>
  );
}
