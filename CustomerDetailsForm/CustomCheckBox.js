import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import './CustomDetailForm.css';

function CustomCheckbox({ checkBox, value, onChange }) {

    const handleChange = (event) => {
        const { name, checked } = event.target;
        let updatedValues;
        if (checked) {
            updatedValues = [...value, name];
        } else {
            updatedValues = value.filter((v) => v !== name);
        }
        onChange(updatedValues);
    };

    return (
        <div className="checkbox-group">
            <FormGroup row>
                {checkBox.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Checkbox
                                checked={value.includes(option)}
                                onChange={handleChange}
                                name={option}
                            />
                        }
                        label={option}
                    />
                ))}
            </FormGroup>
        </div>
    );
}

export default CustomCheckbox;
