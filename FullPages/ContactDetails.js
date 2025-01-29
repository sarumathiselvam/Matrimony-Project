import React from 'react'; 
import { Card, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import InfoItem from './InfoItem'; // Importing the InfoItem component
import UpgradeSection from './UpgradeSection'; // Importing the UpgradeSection component

const ContactDetails = () => {
    return (
        <Box style={{ maxWidth: '800px', margin: '20px auto' }}>
            <Card style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '8px' }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        {/* Contact Details Header */}
                        <Grid item xs={4}>
                            <Typography fontWeight='bold' color='black'>
                                Contact Details
                            </Typography>
                            <InfoItem icon={PhoneIcon} label="+91 96XXXXXXXX" />
                        </Grid>
                        <Grid item xs={4}>
                            <InfoItem icon={VerifiedIcon} label="Mobile No. Verified" />
                            <Grid>
                                <Button variant="outlined" color="primary" maxWidth>
                                    Call Now
                                </Button>
                            </Grid>
                        </Grid>

                        {/* Upgrade Section */}
                        <Grid item xs={4}>
                            <UpgradeSection />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ContactDetails;
