import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // Icon for Religion
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'; // Icon for Caste/Subcaste
import FingerprintIcon from '@mui/icons-material/Fingerprint'; // Icon for Gothram
import InfoItem from './InfoItem'; // Importing the InfoItem component

const HerReligiousDetails = () => {
    return (
        <Box style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Her Religious Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <InfoItem icon={AccountBalanceIcon} label="Religion" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography fontWeight='bold' color='black'>Hindu</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <InfoItem icon={FamilyRestroomIcon} label="Caste/Subcaste" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography fontWeight='bold' color='black'>Vishwakarma, Goldsmiths</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <InfoItem icon={FingerprintIcon} label="Gothra(m)" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography style={{ color: 'orange' }}>Request Gothram</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HerReligiousDetails;
