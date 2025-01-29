import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'; 
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'; 
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';  
import SchoolIcon from '@mui/icons-material/School'; 
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';  
import InfoVerificationItem from './InfoVerificationItem'; 

const AboutAndProfileVerification = () => {
    const verificationData = [
        { label: 'Mobile', verified: true, icon: <PhoneIphoneIcon style={{ fontSize: 40 }} /> },
        { label: 'Govt. ID', verified: false, icon: <AssignmentIndIcon style={{ fontSize: 40 }} /> },
        { label: 'Photo', verified: true, icon: <PhotoCameraIcon style={{ fontSize: 40 }} /> },
        { label: 'Education', verified: false, icon: <SchoolIcon style={{ fontSize: 40 }} /> },
        { label: 'Income', verified: false, icon: <AttachMoneyIcon style={{ fontSize: 40 }} /> },
    ];

    return (
        <Card style={{ maxWidth: 700, margin: '20px auto' }}>
            <CardContent>
                <Typography variant="h6" fontWeight='bold'>About Saranya</Typography>
                <Typography variant="body1" gutterBottom color='black'>
                    My daughter is a software professional with a Master's degree currently working in the private sector in Chennai.
                    We come from a middle-class, nuclear family background with liberal values.
                </Typography>

                <Typography variant="h6" gutterBottom fontWeight='bold'>
                    Profile verification - 2/5
                </Typography>

                <Grid container spacing={2} alignItems="center">
                    {verificationData.map((item, index) => (
                        <Grid item xs={4} key={index}>
                            <InfoVerificationItem 
                                icon={item.icon} 
                                label={item.label} 
                                verified={item.verified} 
                            />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AboutAndProfileVerification;
