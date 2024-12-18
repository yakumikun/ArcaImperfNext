// 'use client';

// import React, { ReactNode } from 'react';
// import { FC, useRef, useEffect } from 'react';
// import scrollReveal from 'scrollreveal';

// interface ScrollRevealContainerProps {
//   children: ReactNode;
//   move?: string;
// }

// const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({ children, move }) => {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (sectionRef.current)
//       scrollReveal().reveal(sectionRef.current, {
//         reset: true,
//         delay: 400,
//         opacity: 0,
//         origin: move === 'left' ? 'left' : move === 'right' ? 'right' : move === 'top' ? 'top' : 'bottom',
//         distance: '100px',
//       });
//   }, [sectionRef, move]);

//   return <section ref={sectionRef}>{children}</section>;
// };
// export default ScrollRevealContainer;

'use client';

import React, { ReactNode } from 'react';
import { FC, useRef, useEffect } from 'react';

interface ScrollRevealContainerProps {
  children: ReactNode;
  move?: string;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({ children, move }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadScrollReveal = async () => {
      // サーバーサイドでは何もしない
      if (typeof window === 'undefined') return;

      const scrollReveal = (await import('scrollreveal')).default;

      if (sectionRef.current) {
        scrollReveal().reveal(sectionRef.current, {
          reset: true,
          delay: 400,
          opacity: 0,
          origin:
            move === 'left'
              ? 'left'
              : move === 'right'
              ? 'right'
              : move === 'top'
              ? 'top'
              : 'bottom',
          distance: '100px',
        });
      }
    };

    loadScrollReveal();
  }, [move]);

  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealContainer;