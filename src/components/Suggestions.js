import React from 'react';
import styles from './Suggestions.module.css';

export default function Suggestions() {
  return (
    <div className={styles.suggestionsWrapper} aria-label="Suggestions">
      <div className={styles.canvas}>
        <div className={styles.container}>
          {/* Horizontal rules */}
          <div className={styles.hrShort} />
          <div className={styles.hrMiddle} />
          <div className={styles.hrBottom} />

          {/* Card */}
          <div className={styles.card}>
            <div className={styles.cardPoster}>
              <div className={styles.cardPosterTopBar}>
                <div className={styles.posterTopRow}>
                  <div className={styles.posterBadge}>
                    <div className={styles.posterBadgeDot} />
                    <div className={styles.posterBadgeLine} />
                    <span>FREE</span>
                  </div>
                </div>
                <div className={styles.posterBottomBar}>
                  <div className={styles.posterAvatar} />
                  <div className={styles.titleBlock}>
                    <div className={styles.titlePrimary}>Your Lucky Penny</div>
                    <div className={styles.titleSecondary}>Your Lucky Penny</div>
                  </div>
                  <div className={styles.statusDot} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}