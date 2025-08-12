import React from 'react';
import './live-rooms.css';

export default function LiveRooms() {
  return (
    <section className="live-rooms">
      <div className="live-rooms__panel">
        <div className="live-rooms__header">
          <div className="live-rooms__badge">
            <span className="live-rooms__badge-dot" />
            <span className="live-rooms__badge-text poppins-500">@Takemeforgranted</span>
          </div>
        </div>

        <div className="live-rooms__content">
          <div className="live-rooms__card">
            <div className="live-rooms__card-top">
              <div className="live-rooms__chip">
                <span className="live-rooms__chip-indicator" />
                <span className="live-rooms__chip-label poppins-400">FREE</span>
              </div>
              <div className="live-rooms__meter" />
            </div>
            <div className="live-rooms__card-body">
              <div className="live-rooms__avatar" />
              <div className="live-rooms__title-wrap">
                <div className="live-rooms__title poppins-500">Your Lucky Penny</div>
                <div className="live-rooms__subtitle poppins-400">Your Lucky Penny</div>
              </div>
              <div className="live-rooms__status">
                <span className="live-rooms__status-dot" />
                <span className="live-rooms__status-text">238</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}