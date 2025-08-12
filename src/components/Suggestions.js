import React from 'react';
import './Suggestions.css';

export default function Suggestions() {
  return (
    <aside className="suggestions poppins-font" aria-label="Suggestions">
      <div className="suggestions__frame">
        <div className="suggestions__divider suggestions__divider--short" />
        <div className="suggestions__divider suggestions__divider--long" />
        <div className="suggestions__divider suggestions__divider--medium" />

        <section className="suggestions__card" aria-label="Your Lucky Penny">
          <div className="suggestions__card-banner">
            <div className="suggestions__badge">
              <span className="suggestions__badge-icon" />
              <span className="suggestions__badge-text">FREE</span>
            </div>
            <div className="suggestions__card-indicator" />
          </div>
          <div className="suggestions__card-footer">
            <div className="suggestions__title">Your Lucky Penny</div>
            <div className="suggestions__subtitle">Your Lucky Penny</div>
            <div className="suggestions__status">
              <span className="suggestions__dot" />
              <span className="suggestions__status-text">LIVE</span>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}