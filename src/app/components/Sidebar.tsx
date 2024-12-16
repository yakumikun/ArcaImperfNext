import React from 'react';
import styles from '@/app/styles/Sidebar.module.css';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles['close-btn']} onClick={toggleSidebar}>
        <span className={styles.line}></span>
      </div>
      <div className={styles['menu-items']}>
        <ul>
          <li>
            <Link href="/HomePage">
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link href="/Profile">
              <p>PROFILE</p>
            </Link>
          </li>
          <li>
            <Link href="/Discography">
              <p>DISCOGRAPHY</p>
            </Link>
          </li>
          <li>
            <Link href="/Live">
              <p>LIVE</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
