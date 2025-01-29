import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const CustomRadio = ({ label, options, name, onChange, value }) => {
    return (
        <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                    
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default CustomRadio;

