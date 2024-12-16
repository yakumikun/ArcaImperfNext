import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/firstEP.module.css';
import ScrollRevealContainer from '../components/ScrollRevealContainer';

export default function firstEP() {
  return (
    <div className="flex justify-center">
      <div className={styles['first-ep-container']}>
        <div className="w-full">
          <div className="text-center">
            <ScrollRevealContainer move="top">
              <h1>DISCOGRAPHY</h1>
            </ScrollRevealContainer>
            <a href="/Discography" className="absolute right-16">
              <Image src="/closeButton.svg" alt="" width={19} height={19} />
            </a>
          </div>
          <ScrollRevealContainer move="right">
            <div className="mt-9 mb-8 flex justify-center">
              <Image src="/1stEP.svg" alt="" width={200} height={200} />
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="left">
            <div className={styles['ep-info']}>
              <div className="mt-4 pl-10 pb-4 border-b-2">
                <div>
                  <p>1st EP</p>
                </div>
                <div className="font-bold">
                  <p>烽烟、夜に向けて</p>
                </div>
              </div>
              <div className="text-center font-bold pt-8 text-lg">
                <h2>[収録曲]</h2>
              </div>
              <div className="pl-5">
                <ul>
                  <li>
                    <p className="border-b-2">1.Midnight Dive</p>
                  </li>
                  <li>
                    <p className="border-b-2">2.17才</p>
                  </li>
                  <li>
                    <p className="border-b-2">3.またどこかで</p>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollRevealContainer>
        </div>
      </div>
    </div>
  );
}
