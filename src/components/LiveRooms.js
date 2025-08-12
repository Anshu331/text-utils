import React from 'react';
import './LiveRooms.css';

export default function LiveRooms() {
  return (
    <section className="live-rooms poppins-font" aria-label="Live rooms">
      <div className="live-rooms__frame">
        <header className="live-rooms__header">
          <div className="live-rooms__handle-badge">@Takemeforgranted</div>
          <div className="live-rooms__chip">
            <span className="live-rooms__chip-icon" aria-hidden="true" />
            <span className="live-rooms__chip-text">238</span>
          </div>
        </header>

        <div className="live-rooms__content">
          <div className="live-rooms__preview" />
          <div className="live-rooms__overlay-card">
            <div className="live-rooms__overlay-inner">
              <div className="live-rooms__overlay-dot" />
              <div className="live-rooms__overlay-text">LIVE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}