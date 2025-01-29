import React from 'react';
import { Card, Box } from '@mui/material';
import BasicDetails from './BasicDetails';
import ReligiousDetails from './ReligiousDetails';
import ProfessionalDetails from './ProfessionalDetails';
import LocationDetails from './LocationDetails';
import LifeStyleDetails from './LifeStyleDetails';
import MatchesProfileData from './MatchesProfileData'

const MatchesPage = () => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', padding: 3 }}>
      <Box sx={{ flex: 0.3, paddingRight: 3,  paddingTop: 3, overflow: 'hidden' }}>
      <BasicDetails />
      <ReligiousDetails />
      <ProfessionalDetails />
      <LocationDetails />
      <LifeStyleDetails />
      </Box>

      <Box sx={{ flex: 0.7, paddingLeft: 3 }}>
      <MatchesProfileData />
      </Box>
    </Card>
  );
};

export default MatchesPage;
