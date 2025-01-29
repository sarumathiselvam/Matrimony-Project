import React from 'react'
import { RadioGroup, FormControlLabel, Radio, FormControl, } from '@mui/material';
import './CustomDetailForm.css'

function CustomRadio({ radios, value, onChange}) {
  
    return (
        <div className="radio-group">
            <FormControl component="fieldset">
                <RadioGroup row value={value} onChange={(event) => onChange(event.target.value)}>
                    {radios.map((type, index) => (
                        <FormControlLabel
                            key={index}
                            value={type}
                            control={<Radio />}
                            label={type} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default CustomRadio
