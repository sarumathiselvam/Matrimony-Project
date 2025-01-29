import React from 'react'
import JourneyCard from './JourneyCard'

const data = [
    {
        count: 26,
        label: 'Acceptances received',
        avatarURL: '/images/img1.jpg',
        color: '#CCEEFF'
    },
    {
        count: 7,
        label: 'Interests received ',
        avatarURL: '/images/img2.jpg',  
         color: '#F2F2F2'
    },
    {
        count: 7,
        label: 'Shortlisted You',
        avatarURL: '/images/img3.jpg',
        color: '#D8A7B1' 
    },
    {
        count: 488,
        label: 'Viewed You',
        avatarURL: '/images/img3.jpg',
         color: '#D8C6D8'
    }
];

const JourneyData = () => {
  return (
    <div>
        <JourneyCard data={data}/>
    </div>
  )
}

export default JourneyData