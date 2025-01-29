import React from 'react'
import { TextField } from '@mui/material'

const InputField = ({ label, type, value, onChange, placeholder, InputProps }) => {
    return (
        <TextField
            fullWidth
            variant='outlined'
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            InputProps={InputProps}
            margin='normal'
        />
    )
}

export default InputField