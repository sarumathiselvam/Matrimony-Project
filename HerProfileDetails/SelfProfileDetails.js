import React from 'react';
import SelfProfileImage from './SelfProfileImage';
import SelfProfileCard from './SelfProfileCard';
import './SelfProfileDetails.css'


const SelfProfileDetails = () => {
    const imgSrc = "/images/img2.jpg"; 
    const profileData = {
        name: 'Abirami',
        age: '26 Yrs',
        height: "5'2\"",
        caste: 'Vishwakarma',
        education: 'B.A.',
        occupation: 'Executive',
        location: 'Chennai, Tamil Nadu',
        id: 'M11041785',
        lastSeen: 'Last seen a few hours ago',
    
    };

    return (
        <div className="profile-card">
            <SelfProfileImage imgSrc={imgSrc} />
            <SelfProfileCard {...profileData} />
        </div>
    );
};

export default SelfProfileDetails;
