import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const PremiumBanner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#00A1B1', 
                padding: '16px',
                borderRadius: '8px',
                color: 'white',
                maxWidth: '900px', 
                margin: 'auto',    
                boxShadow: 3,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    component="img"
                    src="path/to/image.jpg" 
                    alt="Banner Image"
                    sx={{
                        height: '60px',
                        width: '60px',
                        borderRadius: '8px',
                        marginRight: '16px',
                    }}
                />

    
                <Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        Premium Members find their life partners faster. Go Premium!
                    </Typography>
                    <Typography variant="body2" component="div">
                        Get a special discount of Euro 16 on 3 month Gold
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ textAlign: 'right' }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FFC107', 
                        color: 'black',
                        borderRadius: '20px',
                       paddingTop: '8px',
                       paddingBottom: '8px',
                    }}
                >
                    Upgrade Now
                </Button>
                <Typography variant="caption" display="block" sx={{ marginTop: '8px', color: 'white' }}>
                    Offer Expires on 29-10-2024
                </Typography>
            </Box>
        </Box>
    );
};

export default PremiumBanner;
