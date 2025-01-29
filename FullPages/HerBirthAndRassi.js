import React from 'react';
import { Card, CardContent, Grid, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // For Date of Birth
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // For Time of Birth
import StarIcon from '@mui/icons-material/Star'; // For Star/Raasi
import InfoItem from './InfoItem'; // Importing the InfoItem component
import UpgradeSection from './UpgradeSection'; // Importing the UpgradeSection component

const HerBirthAndRassi = () => {
    return (
        <Box style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Card style={{ border: '1px solid #ccc', borderRadius: '8px' }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        {/* Date of Birth Section */}
                        <Grid item xs={6}>
                            <InfoItem icon={CalendarTodayIcon} label="Date Of Birth: XXXX" />
                            <InfoItem icon={AccessTimeIcon} label="Time Of Birth: XXXX" />
                            <InfoItem icon={StarIcon} label="Star/Rassi: Star is XX Raasi is XXXX" />
                        </Grid>

                        {/* Upgrade Section */}
                        <Grid item xs={6}>
                            <UpgradeSection />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HerBirthAndRassi;
