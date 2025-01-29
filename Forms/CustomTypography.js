import React from 'react';
import Typography from '@mui/material/Typography';

const CustomTypography = ({ text, backgroundColor = 'transparent', color = 'inherit', sx = {} }) => {
    return (
        <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
                backgroundColor,   
                color,             
                padding: '10px',
                display: 'inline-block',  
                ...sx             
            }}
        >
            {text}
        </Typography>
    );
};

export default CustomTypography;
