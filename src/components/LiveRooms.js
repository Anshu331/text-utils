import React from 'react';
import './LiveRooms.css';

// NOTE: This component is **not** imported anywhere yet in the app so it will
// not change the current behaviour of the project. Integrators can mount it
// where required without touching existing components.

const sampleRooms = [
  {
    id: 1,
    title: 'Your Lucky Penny',
    creator: '@Takemeforgranted',
    viewers: 238,
    isFree: true,
  },
  {
    id: 2,
    title: 'Daily Vibes',
    creator: '@cool_stuff',
    viewers: 102,
    isFree: false,
  },
  {
    id: 3,
    title: 'Music & Chill',
    creator: '@lofi_beats',
    viewers: 876,
    isFree: true,
  },
];

const sampleSuggestions = [
  'Product Design',
  'Web 3.0',
  'UI/UX Tips',
  'Cryptocurrency',
  'Digital Art',
  'Street Photography',
];

function LiveRooms() {
  return (
    <div className="live-rooms-wrapper">
      {/* Live rooms container */}
      <section className="live-rooms-container">
        {sampleRooms.map((room) => (
          <article className="room-card" key={room.id}>
            {/* Thumbnail stub */}
            <div className="room-thumbnail">
              <span className="room-tag">{room.isFree ? 'FREE' : 'PAID'}</span>
            </div>

            {/* Room details */}
            <div className="room-info">
              <h4 className="room-title">{room.title}</h4>
              <p className="room-creator">{room.creator}</p>
              <div className="room-viewers">
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6C1 6 3.5 1 9 1C14.5 1 17 6 17 6C17 6 14.5 11 9 11C3.5 11 1 6 1 6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="6"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{room.viewers}</span>
              </div>
            </div>

            <button className="room-join-btn">Join</button>
          </article>
        ))}
      </section>

      {/* Suggestions */}
      <aside className="suggestions-panel">
        <h3 className="suggestions-heading">Suggestions</h3>
        <hr className="suggestions-separator" />
        <ul className="suggestions-list">
          {sampleSuggestions.map((item, idx) => (
            <li className="suggestion-item" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default LiveRooms;