import React from 'react';
import SelfData from './SelfData';
import './SelfBasicDetails.css'; // Import the CSS for background styling


const SelfBasicDetails = () => {
  const profileData = [
    // { label: 'About Saranya', value: "My daughter is a software professional with a Master's degree currently working in private sector in Chennai. We come from a middle class, nuclear family background with liberal values"},
    { label: 'Age', value: '26 Years and 3 months', icon: '🎂' },
    { label: 'Physique', value: '5\'2" | Normal', icon: '🧍‍♀️' },
    { label: 'Spoken Languages', value: 'Tamil (Mother Tongue)', icon: '🗣️' },
    { label: 'Eating Habits', value: 'Request Eating Habits', icon: '🍽️' },
    { label: 'Smoking Habits', value: 'Request Smoking Habits', icon: '🚬' },
    { label: 'Drinking Habits', value: 'Request Drinking Habits', icon: '🍷' },
    { label: 'Profile Created By', value: 'Parents', icon: '👨‍👩‍👧' },
    { label: 'Marital Status', value: 'Never Married', icon: '💍' },
    { label: 'Lives In', value: 'Chennai, Tamil Nadu', icon: '🏠' },
    { label: 'Citizenship', value: 'Indian Citizen', icon: '🇮🇳' },
  ];

  return (
    <div className="profile-container">
      <h1 className="profile-title">Her Basic Details</h1>
      <SelfData details={profileData} />
    </div>
  );
};

export default SelfBasicDetails;
