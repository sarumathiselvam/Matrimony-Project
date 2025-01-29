import React from 'react';

const SelfProfileCard = ({ name, age, height, caste, education, occupation, location, lastSeen, id }) => {
    return (
        <div>
            <div className="profile-details">
                <h2>{name}</h2>
                <p>  {id} | {lastSeen}</p>
                <div>
                    {age}, {height}<br />
                    {caste}<br />
                    {education}, {occupation}<br />
                    {location}
                </div>
                <div className="profile-actions">
                    <button className="btn">Don't Show</button>
                    <button className="btn">Skip</button>
                    <button className="btn highlight">Send Interest</button>
                </div>
            </div>
        </div>
    );
};

export default SelfProfileCard;
