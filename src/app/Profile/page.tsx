import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/Profile.module.css';
import ScrollRevealContainer from '@/app/components/ScrollRevealContainer';

export default function Profile() {
  return (
    <div className="flex justify-center">
      <div className={styles['profile-container']}>
        <ScrollRevealContainer move="top">
          <h1 className="flex justify-center">PROFILE</h1>
        </ScrollRevealContainer>
        <div className="flex justify-center mt-5">
          <ScrollRevealContainer move="">
            <Image src="/profileImage.svg" alt="" width={400} height={400} />
          </ScrollRevealContainer>
        </div>
        <ScrollRevealContainer move="left">
          <div className="flex justify-center gap-x-8 mt-5">
            <p>Dr.小林紘己</p>
            <p>Ba.大井智</p>
            <p>Gt./Vo.山内当音</p>
          </div>
        </ScrollRevealContainer>
        <div className="max-w-3xl text-center mt-5">
          <ScrollRevealContainer move="right">
            <p>
              2023年9月に始動した、東京発のスリーピースロックバンド、八王子をメインに都内各所で活動している。
              <br />
              詩的な歌詞と力強い演奏との重なりが生み出す中毒性で着実に人気を集めている。
              <br />
              インディーズ系音楽プラットフォーム「Eggs」では、3月26日リリースの「Midnight Dive」が
              <br />
              楽曲デイリーランキングの1位にランクインした実績を持つ。
            </p>
          </ScrollRevealContainer>
        </div>
      </div>
    </div>
  );
}
