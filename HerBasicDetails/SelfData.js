import React from 'react';
import './SelfBasicDetails.css'; // Import the CSS for background styling

const SelfData = ({ details }) => {
  return (
    <ul className="profile-list">
     
      {details.map((detail, index) => (
        <li key={index} className="profile-list-item">
          <div className="profile-icon">{detail.icon}</div>
          <div className="profile-info">
            <strong className="profile-label">{detail.label}</strong>
            <span 
              className={`profile-value ${
                detail.value.includes('Request') ? 'highlight' : ''
              }`}>
              {detail.value}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SelfData;
