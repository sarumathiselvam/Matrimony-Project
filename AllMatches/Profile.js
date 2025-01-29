import React from 'react'


function Profile({profile, index}) {
    return (
        <div key={index} >
            <div  className='ContainerOne' >
                <div>
                    <img src={profile.image} alt="" />
                </div>
                <div className='ContainerTwo'>
                    <div>{profile.Name}</div>
                    <p>{profile.Age}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile