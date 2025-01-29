import React from 'react';
import { Box, Typography, Divider,Avatar } from '@mui/material';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'; // Example icon, replace with an image if needed

const RequestCard = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Divider sx={{ my: 2 }} />

      {/* Content Area */}
      <Box sx={{ mt: 4 }}>
        {/* Optional Placeholder for an Illustration */}
        <Avatar 
          sx={{ width: 120, height: 120, margin: '0 auto', bgcolor: 'transparent' }}
          src="/images/requestcard.webp"
        >
          <MobileFriendlyIcon sx={{ fontSize: 100, color: '#ccc' }} />
        </Avatar>
        
        <Typography variant="body2" sx={{ color:'black', mt: 2 }}>
          No Requests found till now
        </Typography>
        
        <Typography variant="body1" sx={{ mt: 1, fontWeight:'bold',color:'black' }}>
          View Matches who are online to initiate requests
        </Typography>
        
 
     
      </Box>
    </Box>
  );
};

export default RequestCard;
