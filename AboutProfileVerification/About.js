import React from 'react';
import data from './mockData/HerBasicDetails.json'; // Adjust the path based on your project structure

const About = () => {
  // Access the 'aboutMe' field from the JSON data
  const aboutMe = data.data.aboutMe;

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>{aboutMe}</p>
    </div>
  );
};

export default About;
