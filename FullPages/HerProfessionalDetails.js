import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // For Education
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // For Income
import InfoItem from './InfoItem'; // Importing the InfoItem component

const HerProfessionalDetails = () => {
    return (
        <Box style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Her Professional Details
                    </Typography>

                    <Grid container spacing={2} alignItems="center">

                        <Grid item xs={4}>
                            <InfoItem icon={SchoolIcon} label="Education" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography fontWeight='bold' color='black'>
                                Works in Private Sector
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <InfoItem icon={AttachMoneyIcon} label="Income" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography fontWeight='bold' color='black'>
                                3L - 4L per Annum
                            </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HerProfessionalDetails;
