import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock'; // For upgrade section

const UpgradeSection = () => (
    <Box style={{ textAlign: 'right' }}>
        <Typography variant="body2" color='black' style={{ marginBottom: '8px' }}>
            <LockIcon fontSize="small" /> Upgrade to view her birth details
        </Typography>
        <Button variant="contained" color="warning">
            Become a Paid Member
        </Button>
    </Box>
);

export default UpgradeSection;
