import React from 'react'
import { useState } from 'react'
import { Card, Container } from '@mui/material'
import CustomTypography from './CustomTypography'
import CustomDropdown from './CustomDropdown'
import CustomButton from './CustomButton'
import InputFiled from './InputField'


const PerfectMatch = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputFiled, setInputFiled] = useState('')

    const options = [
        { value: '1', label: 'Profile 1' },
        { value: '2', label: 'Profile 2' },
        { value: '3', label: 'Profile 3' },
    ];


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Container maxWidth="xs">
            <Card
                sx={{
                    width: '450px',
                    height: '400px',
                    p: 4,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    marginTop: '50px',
                }}
            >
                <CustomTypography text="Create a Matrimony Profile" backgroundColor="green" color="white" />
                <h3>Find Your Perfect Match</h3>

                <CustomDropdown
                    label="Select Profile"
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                    fullWidth={true} />
                <InputFiled
                    type="text"
                    value={inputFiled}
                    placeholder="Enter Name"
                    onChange={(e) => setInputFiled(e.target.value)}
                />
                <InputFiled
                    type="text"
                    value={inputFiled}
                    placeholder="Enter Mobile Number"
                    onChange={(e) => setInputFiled(e.target.value)}
                />
                 <CustomButton
                        text="Register Free   -->"
                        onClick={handleChange}
                        type="submit" />
            </Card>
        </Container>
    )
}

export default PerfectMatch