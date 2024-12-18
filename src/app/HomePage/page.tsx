import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/HomePage.module.css';
import ScrollRevealContainer from '../components/ScrollRevealContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import TwitterWidgets from '@/app/components/TwitterWidgets';

export default function HomePage() {
  return (
    <div className="w-screen h-full">
      <div className="pt-8 flex items-center justify-center xl:pt-32">
        <ScrollRevealContainer move="left">
          <div className={styles['member1-info']}>
            <p>Gt. / Vo.</p>
            <p>Atene Yamanouchi</p>
          </div>
        </ScrollRevealContainer>
        <div>
          <ScrollRevealContainer move="right">
            <Image src="/member/member1.svg" alt="member1" width={760} height={450} />
          </ScrollRevealContainer>
        </div>
      </div>
      <div className="pt-12 flex items-center justify-center xl:pt-48">
        <div>
          <ScrollRevealContainer move="top">
            <Image src="/member/member2.svg" alt="member2" width={760} height={450} />
          </ScrollRevealContainer>
        </div>
        <ScrollRevealContainer move="">
          <div className={styles['member2-info']}>
            <p>Dr.</p>
            <p>Hiroki Kobayashi</p>
          </div>
        </ScrollRevealContainer>
      </div>
      <div className="pt-12 flex items-center justify-center xl:pt-48">
        <div>
          <ScrollRevealContainer move="left">
            <Image src="/member/member3.svg" alt="member3" width={760} height={450} />
          </ScrollRevealContainer>
        </div>
        <ScrollRevealContainer move="right">
          <div className={styles['member3-info']}>
            <p>Ba.</p>
            <p>Satoshi Oi</p>
          </div>
        </ScrollRevealContainer>
      </div>
      <div className="pt-28 flex justify-center items-center xl:pt-48">
        <ScrollRevealContainer move="left">
          <div className={styles.icons}>
            <li>
              <a href="https://twitter.com/arcaimperf?ref_src=twsrc%5Etfw">
                <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/arcaimperf_official/?igshid=MzMyNGUyNmU2YQ%3D%3D">
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/intl-ja/artist/7etN0fxG5JwrESaoqro3fN">
                <FontAwesomeIcon icon={faSpotify} className={styles.icon} />
              </a>
            </li>
          </div>
        </ScrollRevealContainer>
        <ScrollRevealContainer move="right">
          <div className="ml-10 mb-20">
            <TwitterWidgets />
          </div>
        </ScrollRevealContainer>
      </div>
    </div>
  );
}
