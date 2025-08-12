import React from 'react';
import styles from './LiveRooms.module.css';

export default function LiveRooms() {
  return (
    <div className={styles.liveRoomsWrapper} aria-label="Live Rooms">
      <div className={styles.canvas}>
        <div className={styles.rootBg} />

        {/* Top-left pill badge */}
        <div className={styles.badgePill}>
          <span className={styles.badgeDot} />
          <span style={{ marginLeft: 4 }}>FREE</span>
        </div>

        {/* Absolute background panel */}
        <div className={styles.panel} />

        {/* Black card */}
        <div className={styles.cardBlack} />

        {/* Button and handle text */}
        <div className={styles.primaryButton}>
          <div className={styles.checkIcon}>
            <svg viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M10.5 1L4.125 7 1 3.875" stroke="#F6EEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className={styles.handle}>@Takemeforgranted</div>
      </div>
    </div>
  );
}