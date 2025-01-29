import React from 'react'
import SelfProfile from './SelfProfile'

const profileDetails = {
    "data": {
        "getCommonInfo": {          
            "photoURL": "/images/img4.jpg",
            "name": "Priya Selvam",
            "memberId": "M8692569",
            "isPrimePaid": false
        }
    }
}

function ProfilePhotoURL() {
    return (
        <div>
            <SelfProfile profileDetails={profileDetails.data.getCommonInfo}/>
        </div>
    )
}

export default ProfilePhotoURL