import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const InfoVerificationItem = ({ icon, label, verified }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center">
                {icon}
                {verified ? (
                    <CheckCircleIcon style={{ color: 'green', marginLeft: '8px' }} />
                ) : (
                    <CancelIcon style={{ color: 'red', marginLeft: '8px' }} />
                )}
            </Box>
            <Typography variant="body2">
                {label} {verified ? 'verified' : 'not verified'}
            </Typography>
        </Box>
    );
};

export default InfoVerificationItem;
