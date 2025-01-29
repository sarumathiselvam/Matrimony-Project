import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text, onClick, type = 'button', variant = 'contained', color = 'primary', fullWidth = true, sx }) => {
    return (
        <Button
            type={type}
            variant={variant}
            color={color}
            fullWidth={fullWidth}
            onClick={onClick}
            sx={{
                mt: 2,
                borderRadius: '50px',
                backgroundColor: '#FF3C00',
            }}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
