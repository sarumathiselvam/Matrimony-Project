import React from 'react';

const SelfProfileImage = ({ imgSrc }) => {
  return (
    <div>
    <div className="image-container">
      <img src={imgSrc} alt="Profile" className="profile-image" />
      <div className="image-actions">
        <button className="shortlist-btn">Shortlist</button>
        <div className="sticker">Premium Member</div>
      </div>
    </div>
    </div>
  );
};

export default SelfProfileImage;
