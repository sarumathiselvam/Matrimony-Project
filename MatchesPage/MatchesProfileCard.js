// MatchesProfileCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';

const MatchesProfileCard = ({ profile }) => (
  <Card sx={{ display: 'flex', padding: 2, margin: 2, maxWidth: 600, alignItems: 'center' }}>
    <CardMedia
      component="img"
      sx={{ width: 200, height: 200, borderRadius: '10%', marginRight: 2 }}
      image={profile.image}
      alt={profile.Name}
    />
    <CardContent sx={{ flex: 1 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="h6">{profile.Name}</Typography>

      </Box>
      <Typography variant="body2" color="textSecondary">
        {profile.Age} | {profile.Education} | {profile.Occupation} | {profile.Location}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
        <Typography variant="body2">Interested in her?</Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
        <Typography variant="body2">Contact Now</Typography>
      </Box>


      <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
        <Button variant="outlined" size="small" color="primary" sx={{ borderRadius:'15px'}}>
          Don't Show
        </Button>
        <Button variant="contained" size="small" color="warning" sx={{ marginLeft: 1, borderRadius:'15px'}}>
          Send Interest
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default MatchesProfileCard;
