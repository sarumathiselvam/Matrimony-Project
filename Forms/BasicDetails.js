import React, { useState } from 'react';
import { Box, Typography, Container, Card } from '@mui/material';
import CustomDropdown from './CustomDropdown';
import InputField from './InputField';
import CustomButton from './CustomButton';

const BasicDetails = () => {
    const [religion, setReligion] = useState('');
    const [motherTongue, setMotherTongue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleContinue = () => {
        
        console.log({
            email,
            password,
            religion,
            motherTongue,
        });
    };

    const religions = [
        { value: 'hindu', label: 'Hindu' },
        { value: 'muslim', label: 'Muslim' },
        { value: 'christian', label: 'Christian' },
        
    ];

    const motherTongues = [
        { value: 'tamil', label: 'Tamil' },
        { value: 'english', label: 'English' },
        { value: 'telugu', label: 'Telugu' },
 
    ];

    return (
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Card
                sx={{
                    display: 'flex',
                    width: '1000px',   
                    height: '600px',  
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
               
                <Box sx={{ flex: 0.4, backgroundColor: 'green', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h5" color="white" textAlign="center">
                        Your search for a caring companion for your brother begins here
                    </Typography>
                </Box>

                
                <Box sx={{ flex: 0.6, padding: 3 }}>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>
                            Tell us about your brother's basic details
                        </Typography>
                        <InputField
                            label="Brother's Name"
                            type="text"
                            value=""
                            onChange={() => {}}
                            placeholder="Enter your brother's name"
                        />
                        <InputField
                           
                            type="date"
                            value=""
                            onChange={() => {}}
                            InputProps={{ inputProps: { max: new Date().toISOString().split("T")[0] } }}  
                        />
                        <CustomDropdown
                            label="Religion"
                            options={religions}
                            value={religion}
                            onChange={(e) => setReligion(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <CustomDropdown
                            label="Mother Tongue"
                            options={motherTongues}
                            value={motherTongue}
                            onChange={(e) => setMotherTongue(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <InputField
                            label="Email ID"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <CustomButton
                            text="Continue"
                            onClick={handleContinue}
                            sx={{
                                marginTop: 2,
                                border: 'none',
                                boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
                                borderRadius: '0',
                                width: '50%',  
                            }}
                        />
                     
                </Box>
            </Card>
        </Container>
    );
};

export default BasicDetails;
