import React from 'react';
import { Button as MUIButton } from '@mui/material';

const CustomButton = ({ label, variant, type = "button" }) => {
  return <MUIButton variant={variant} type={type}>{label}</MUIButton>;
};

export default CustomButton;
