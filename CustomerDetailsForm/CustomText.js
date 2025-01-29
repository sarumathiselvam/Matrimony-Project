import React from 'react'
import { TextField } from '@mui/material';
import './CustomDetailForm.css';

function CustomText({ value, onChange }) {
  return (
    <div >
      <TextField type='text' placeholder='Enter your Name' fullWidth
       value={value}
      onChange={(event) => onChange(event.target.value)} />
    </div>
  )
}

export default CustomText