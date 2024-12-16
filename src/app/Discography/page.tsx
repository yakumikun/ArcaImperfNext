import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/Discography.module.css';
import ScrollRevealContainer from '../components/ScrollRevealContainer';

export default function Discography() {
  return (
    <div className={styles['discography-container']}>
      <div className="w-96">
        <div className="flex justify-center">
          <ScrollRevealContainer move="top">
            <h1>DISCOGRAPHY</h1>
          </ScrollRevealContainer>
        </div>
        <a href="/firstEP">
          <ScrollRevealContainer move="">
            <div className="flex mt-8 border-y-2 py-5">
              <div>
                <Image src="/1stEP.svg" alt="" width={80} height={80} />
              </div>
              <div className="ml-2">
                <div>
                  <p>1st EP</p>
                </div>
                <div className="font-bold">
                  <p>烽烟、夜に向けて</p>
                </div>
              </div>
            </div>
          </ScrollRevealContainer>
        </a>
      </div>
    </div>
  );
}
