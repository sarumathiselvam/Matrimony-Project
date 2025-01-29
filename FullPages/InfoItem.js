import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoItem = ({ icon: Icon, label }) => (
    <Box display="flex" alignItems="center" marginBottom={1}>
        <Icon color="primary" style={{ marginRight: '8px' }} />
        <Typography color='black'>{label}</Typography>
    </Box>
);

export default InfoItem;
