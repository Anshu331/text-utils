import React from 'react';
import './suggestions.css';

export default function Suggestions() {
  return (
    <aside className="suggestions">
      <div className="suggestions__panel">
        <div className="suggestions__scroll">
          <div className="suggestions__block" data-variant="default">
            <div className="suggestions__divider short" />
            <div className="suggestions__divider" />
            <div className="suggestions__divider" />
          </div>
          <div className="suggestions__carousel" data-variant="1">
            <div className="suggestions__carousel-header">
              <button className="suggestions__nav prev" aria-label="Previous">
                <span className="suggestions__nav-icon" />
              </button>
              <button className="suggestions__nav next" aria-label="Next">
                <span className="suggestions__nav-icon primary" />
              </button>
            </div>
            <div className="suggestions__cards">
              <div className="suggestions__card">
                <div className="suggestions__card-top">
                  <div className="suggestions__card-chip">
                    <span className="suggestions__card-chip-dot" />
                    <span className="suggestions__card-chip-label poppins-400">FREE</span>
                  </div>
                  <span className="suggestions__card-meter" />
                </div>
                <div className="suggestions__card-body">
                  <div className="suggestions__card-avatar" />
                  <div className="suggestions__card-text">
                    <div className="suggestions__card-title poppins-500">Your Lucky Penny</div>
                    <div className="suggestions__card-subtitle poppins-400">Your Lucky Penny</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}