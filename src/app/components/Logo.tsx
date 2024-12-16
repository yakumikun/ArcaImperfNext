'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import styles from '@/app/styles/Logo.module.css';

const letters = [
  { char: 'A', src: '/logo/A.png' },
  { char: 'r', src: '/logo/r.png' },
  { char: 'c', src: '/logo/c.png' },
  { char: 'a', src: '/logo/smallA.png' },
  { char: 'I', src: '/logo/I.png' },
  { char: 'm', src: '/logo/m.png' },
  { char: 'p', src: '/logo/p.png' },
  { char: 'e', src: '/logo/e.png' },
  { char: 'r', src: '/logo/r.png' },
  { char: 'f', src: '/logo/f.png' },
];

const Logo = () => {
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: 'power2.out',
      },
    );

    const anchorIndex = letters.findIndex((letter) => letter.char === 'I');
    if (anchorIndex !== -1) {
      gsap.fromTo(
        lettersRef.current[anchorIndex],
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'bounce.out',
          delay: 0.3 * anchorIndex + 4,
        },
      );
    }
  }, []);

  return (
    <div className={styles.logo}>
      {letters.map((letter, index) => (
        <div
          key={index}
          className={`${styles.letter} ${letter.char === 'I' ? styles.anchor : ''}`}
          ref={(el: HTMLDivElement | null): void => {
            lettersRef.current[index] = el;
          }}
        >
          <Image src={letter.src} alt={letter.char} width={300} height={300} />
        </div>
      ))}
    </div>
  );
};

export default Logo;
