// ProfilesList.js
import React from 'react';
import { Box } from '@mui/material';
import MatchesProfileCard from './MatchesProfileCard';

const ProfilesList = ({ data }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    {data.map((profile, index) => (
      <MatchesProfileCard key={index} profile={profile} />
    ))}
  </Box>
);

export default ProfilesList;
