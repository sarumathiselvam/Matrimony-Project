import React from 'react';
import CustomProfileSlider from './CustomProfileSlider';
import MatchesInfo from './MatchesInfo';



// Example match information
const matchInfo = {
  "Code": "allMatches",
  "description": "All Matches",
  "detailDescription": "Members who match your partner preferences",
  "Count": 2356,
  // "Link": "./ProfileList"
};

// Example JSON data for profiles
const profileData = {
  "datafetch": {
    "allMatches": {
      "count": 477,
      "community": null,
      "data": [
        {
          "Name": "Janifer",
          "image": "/images/img1.jpg",
          "Age": "24Yrs, 5'4\""
        },
        {
          "Name": "Lavanya Venkat",
          "image": "/images/img2.jpg",
          "Age": "27Yrs, 5'4\""
        },
        {
          "Name": "Nandhini Palanisamy",
          "image": "/images/img3.jpg",
          "Age": "24Yrs, 5'3\""
        },
        {
          "Name": "Pavithra Kaniyappan",
          "image": "/images/img4.jpg",
          "Age": "29Yrs, 5'4\""
        },
        {
          "Name": "Parvathi Ezhumalai",
          "image": "/images/img5.jpg",
          "Age": "25Yrs, 5'5\""
        },
        {
          "Name": "Raveena Murugan",
          "image": "/images/img6.jpg",
          "Age": "29Yrs, 5'1\""
        },
        {
          "Name": "Saranya Boominathan",
          "image": "/images/img7.jpg",
          "Age": "26Yrs, 5'3\""
        },
        {
          "Name": "Ezhilarasi E",
          "image": "/images/img8.jpg",
          "Age": "29Yrs, 5'0\""
        }
      ]
    }
  }
};

const App = () => {
  return (
    <div className="App">
      <MatchesInfo data={matchInfo} />
      <CustomProfileSlider profiles={profileData.datafetch.allMatches.data} />

    </div>
  );
};

export default App;
