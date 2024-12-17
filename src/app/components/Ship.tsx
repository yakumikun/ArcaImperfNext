'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from '@/app/styles/Ship.module.css';

const Ship = () => {
  const shipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shipRef.current) {
      const tl = gsap.timeline();
      tl.to(shipRef.current, {
        x: '100vw',
        rotation: 10,
        duration: 5,
        ease: 'power1.inOut',
        onUpdate: () => {
          const y = Math.sin(tl.progress() * Math.PI * 2) * 20;
          gsap.set(shipRef.current, { y });
        },
      });
    }
  }, []);

  return (
    <div className={styles.ship} ref={shipRef}>
      <Image src="/ship.png" alt="Ship" width={400} height={330} />
    </div>
  );
};

export default Ship;
