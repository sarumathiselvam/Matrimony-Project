import React from 'react'
import { IconButton, Typography } from '@mui/material';

const IconWithLabel = ({icon, label, onClick}) => {
  return (
    <IconButton onClick={onClick}>
        {icon}

        <Typography variant='body2' sx={{color:'black', marginLeft: 0.5}}>
            {label}
        </Typography>
    </IconButton>
  )
}

export default IconWithLabel