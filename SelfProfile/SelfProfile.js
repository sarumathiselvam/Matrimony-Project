import React, { useState } from 'react';
import './SelfProfileStyle.css';
import GetGreetingUser from './GetGreetingUser';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Card, CardContent, Menu, MenuItem } from '@mui/material';
import IconWithLabel from './IconWithLabel';

function SelfProfile({ profileDetails }) {
    const [anchorEl, setAnchorEl] = useState(null);  

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget); 
    };

    const handleClose = () => {
        setAnchorEl(null);  
    };

    return (
        <div className="profileContainer">
            <Card className="profileCard" sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
                <CardContent>
                    <img src={profileDetails.photoURL} alt="Profile" className="photoURL" />
                    <GetGreetingUser />
                    <div className="name">{profileDetails.name}</div>
                    <p>{profileDetails.memberId}</p>
                    <p className="membership">Membership: {profileDetails.isPrimePaid ? 'Paid' : 'Free'}</p>
                    <p>Become a paid member now</p>
                    <button className='upgrade-btn'>Upgrade</button>

                    <div className="profile-actions">
                        <IconWithLabel icon={<EditIcon fontSize="small" />} label="Edit Profile" onClick={handleMenuClick} />
                        <IconWithLabel icon={<StarIcon fontSize="small" />} label="Edit Preference" onClick={handleMenuClick} />
                        <IconWithLabel icon={<EditIcon fontSize="small" />} label="View/Edit Horoscope" onClick={handleMenuClick} />
                        <IconWithLabel icon={<SettingsIcon fontSize="small" />} label="Settings" onClick={handleMenuClick} />
                        <IconWithLabel icon={<HelpIcon fontSize="small" />} label="Help" onClick={handleMenuClick} />
                        <IconWithLabel icon={<SecurityIcon fontSize="small" />} label="Safe Matrimony" onClick={handleMenuClick} />
                        <IconWithLabel icon={<CheckCircleIcon fontSize="small" />} label="Success Stories" onClick={handleMenuClick} />
                    </div>

                   
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Edit Preference</MenuItem>
                        <MenuItem onClick={handleClose}>View/Edit Horoscope</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>Help</MenuItem>
                        <MenuItem onClick={handleClose}>Safe Matrimony</MenuItem>
                        <MenuItem onClick={handleClose}>Success Stories</MenuItem>
                    </Menu>
                </CardContent>
            </Card>
        </div>
    );
}

export default SelfProfile;
