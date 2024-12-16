import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles['footer-container']}>
      <div>
        <div>
          <div className="flex justify-center items-center gap-10 h-24">
            <Link href="/HomePage">
              <p>HOME</p>
            </Link>
            <Link href="/Profile">
              <p>PROFILE</p>
            </Link>
            <Link href="/Discography">
              <p>DISCOGRAPHY</p>
            </Link>
            <Link href="/Live">
              <p>LIVE</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
