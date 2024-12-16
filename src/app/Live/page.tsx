import React from 'react';
import styles from '@/app/styles/Live.module.css';
import ScrollRevealContainer from '../components/ScrollRevealContainer';

export default function Live() {
  return (
    <div className="flex justify-center">
      <div className={styles.container}>
        <div>
          <ScrollRevealContainer move="top">
            <h1>LIVE</h1>
          </ScrollRevealContainer>
        </div>
        <div>
          <ScrollRevealContainer move="left">
            <h2>---2024---</h2>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="left">
            <div className={styles['live-info']}>
              <p>1/11</p>
              <h3>八王子RIPS</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="right">
            <div className={styles['live-info']}>
              <p>1/18</p>
              <h3>Spotify O-Crest</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="left">
            <div className={styles['live-info']}>
              <p>2/14</p>
              <h3>八王子RIPS</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="right">
            <div className={styles['live-info']}>
              <p>3/22</p>
              <h3>八王子Match Vox</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="left">
            <div className={styles['live-info']}>
              <p>4/1</p>
              <h3>八王子Match Vox(弾き語り)</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="right">
            <div className={styles['live-info']}>
              <p>4/18</p>
              <h3>府中Flight(弾き語り)</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="left">
            <div className={styles['live-info']}>
              <p>4/27&nbsp;,&nbsp;4/30&nbsp;,&nbsp;5/2</p>
              <h3>八王子RIPS</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="right">
            <div className={styles['live-info']}>
              <p>5/14</p>
              <h3>Buzzfronf横浜</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="left">
            <div className={styles['live-info']}>
              <p>7/17</p>
              <h3>大塚Deepa</h3>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="right">
            <div className={styles['live-info']}>
              <p>7/27</p>
              <h3>名古屋・栄R.A.D mini</h3>
            </div>
          </ScrollRevealContainer>
        </div>
      </div>
    </div>
  );
}
