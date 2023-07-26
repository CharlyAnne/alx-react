import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <>
      <div className="Notifications">
        {/* Button element with inline styling */}
        <button
          style={{
            backgroundColor: 'white',
            border: 'none',
            padding: '5px',
            float: 'right',
          }}
          aria-label="Close"
        >
          <img src={closeIcon} alt="close" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
    </>
  );
}

export default Notifications;
