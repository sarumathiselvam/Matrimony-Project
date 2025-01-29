import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CustomDropdown = ({ label, options, value, onChange, fullWidth = true, sx = {} }) => {
    return (
        <FormControl fullWidth={fullWidth} sx={sx}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label={label}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdown;

