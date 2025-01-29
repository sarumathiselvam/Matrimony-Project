// MatchesProfileData.js
import React from 'react';
import { Box } from '@mui/material';
import ProfileList from './ProfileList';
import MatchesData from '../mockData/MatchesData.json'

const MatchesProfileData = () => {
  const profilesData = MatchesData.datafetch.allMatches.data;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <ProfileList data={profilesData} />
    </Box>
  );
};

export default MatchesProfileData;
