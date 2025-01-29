import React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './CustomDetailForm.css'

const CustomDropDown = ({ options, option0, value, onChange }) => {
     return (
        <div>
            <FormControl fullWidth className="custom-dropdown">
                <InputLabel>{option0}</InputLabel>
                <Select value={value || ''} onChange={(event) => onChange(event.target.value)} className="dropdown-select">
                <MenuItem value="" disabled> {option0} </MenuItem>
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>

                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default CustomDropDown