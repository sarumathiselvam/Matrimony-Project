import React from 'react'



function GetGreetingUser() {
    const greeting = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours;
        const minutes = currentTime.getMinutes;
        const time = hours + minutes / 60;

        if (time >= 4 && time < 12) {
            return 'Good Morning!'
        } else
            if (time >= 12 && time < 15) {
                return 'Good Afternoon!'
            } else
                if (time >= 15 && time < 19) {
                    return 'Good Evening!'
                }
                else {
                    return 'Good Night!'
                }

    }
    return (
        <div>
            <div>{greeting()}</div>
        </div>
    )
}

export default GetGreetingUser