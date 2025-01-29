import React from 'react';
import { Card, Box, Grid, Typography } from '@mui/material';
import ProfilePhotoURL from '../SelfProfile/ProfileDetailsURL';
import JourneyData from './JourneyData';
import PremiumBanner from './PremiumBanner';
import ProfileCard from '../DailyRecommendation/ProfileCard';

const HomePage = () => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', padding: 3 }}>
      <Box sx={{ flex: 0.3, paddingRight: 3,  paddingTop: 3, overflow: 'hidden' }}>
        <ProfilePhotoURL />
      </Box>

      <Box sx={{ flex: 0.7, paddingLeft: 3 }}>
        <Box sx={{ marginBottom: 3 }}>
          <JourneyData />
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <PremiumBanner />
        </Box>

        <Box>
          <Grid container spacing={1}>
            <ProfileCard />
          </Grid>

          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Time left to view your daily matches: <span style={{ color: '#f00' }}>02 : 33 : 18</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default HomePage;
