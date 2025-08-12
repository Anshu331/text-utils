import React from 'react';
import './LiveRooms.css';

const LiveRooms = () => {
  return (
    <div className="live-rooms-container">
      {/* Main Live Room Panel */}
      <div className="main-live-panel">
        {/* Live Room Card */}
        <div className="live-room-card">
          {/* User Info Header */}
          <div className="user-info-header">
            <span className="username">@Takemeforgranted</span>
            <div className="viewer-count">
              <div className="viewer-icon">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M9.166 3.125C8.75 2.5 6.875 0.625 5 0.625C3.125 0.625 1.25 2.5 0.834 3.125C0.792 3.208 0.792 3.292 0.834 3.375C1.25 4 3.125 5.875 5 5.875C6.875 5.875 8.75 4 9.166 3.375C9.208 3.292 9.208 3.208 9.166 3.125Z" fill="var(--Text-secondary, #F6EEFF)"/>
                </svg>
              </div>
              <span className="viewer-number">238</span>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions Panel */}
      <div className="suggestions-panel">
        {/* Navigation Header */}
        <div className="suggestions-header">
          <div className="nav-arrow nav-arrow-left">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M14.625 7.5C14.625 7.5 14.625 7.5 14.625 7.5C14.625 7.5 14.625 7.5 14.625 7.5Z" fill="#C8BEDD"/>
            </svg>
          </div>
          <div className="nav-arrow nav-arrow-right">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M0.375 7.5C0.375 7.5 0.375 7.5 0.375 7.5C0.375 7.5 0.375 7.5 0.375 7.5Z" fill="var(--Primary-Color, #6C3B9F)"/>
            </svg>
          </div>
        </div>

        {/* Suggestion Cards Container */}
        <div className="suggestion-cards">
          <div className="suggestion-card">
            {/* Card Header with FREE badge */}
            <div className="card-header">
              <div className="free-badge">
                <span>FREE</span>
                <div className="badge-icon">
                  <div className="icon-inner"></div>
                </div>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="card-content">
              <div className="card-details">
                <h3 className="room-title">Your Lucky Penny</h3>
                <p className="room-subtitle">Your Lucky Penny</p>
                <div className="online-indicator"></div>
              </div>
              <div className="room-thumbnail"></div>
            </div>
          </div>
        </div>

        {/* Divider Lines */}
        <div className="divider divider-1"></div>
        <div className="divider divider-2"></div>
        <div className="divider divider-3"></div>
      </div>
    </div>
  );
};

export default LiveRooms;