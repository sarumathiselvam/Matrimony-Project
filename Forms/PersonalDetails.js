import React from 'react'
import { useState } from 'react';
import { Card, Box, Typography, Container } from '@mui/material'
import HeartIcon from '@mui/icons-material/Favorite';
import CustomRadio from './CustomRadio';
import CustomButton from './CustomButton';
import CustomDropdown from './CustomDropdown';

const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        maritalStatus: '',
        children: '',
        height: '',
        familyStatus: '',
        familyType: '',
        familyValues: '',
        disability: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.value]: e.target.value,
        });
    }

    return (
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Card
                sx={{
                    display: 'flex',
                    width: '1000px',
                    height: '750px',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Box display="flex">

                    <Box sx={{ flex: 0.4, backgroundColor: 'green', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <HeartIcon style={{ fontSize: 90, color: 'white' }} />
                        <Typography variant='h6' color='white' gutterBottom>
                            Not only charming and caring.  Most importantly-right for your brother!
                        </Typography>
                    </Box>


                    <Box sx={{ flex: 0.6, padding: 2 }}>
                        <Typography variant='h6' gutterBottom>
                            Tell us about your brother's personal details
                        </Typography>

                        <CustomRadio
                            label='Marital Status'
                            name='maritalStatus'
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            options={[
                                { value: 'Never Married', label: 'Never Married' },
                                { value: 'Widowed', label: 'Widowed' },
                                { value: 'Divorced', label: 'Divorced' },
                                { value: 'Awaiting divorce', label: 'Awaiting divorce' }
                            ]}
                        />

                        <CustomRadio
                            label="No. of Children"
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            options={[
                                { value: 'None', label: 'None' },
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                                { value: '4 and above', label: '4 and above' },
                            ]}
                        />
                        <CustomDropdown
                            label="Height"
                            value={formData.height}
                            onChange={handleChange}
                            name="feet"
                            options={[
                                { label: '1 inches 4 feet' },
                                { label: '2 inches 5 feet' },
                                { label: '3 inches 6 feet' },
                                { label: '4 inches 4 feet' },
                                { label: '5 inches 7 feet' }
                            ]}
                        />


                        <CustomRadio
                            label="Family Status"
                            name="familyStatus"
                            value={formData.familyStatus}
                            onChange={handleChange}
                            options={[
                                { value: 'Middle class', label: 'Middle class' },
                                { value: 'Upper middle class', label: 'Upper middle class' },
                                { value: 'High class', label: 'High class' },
                                { value: 'Rich/Affluent', label: 'Rich/Affluent' },
                            ]}
                        />
                        <CustomRadio
                            label="Family Type"
                            name="familyType"
                            value={formData.familyType}
                            onChange={handleChange}
                            options={[
                                { value: 'Joint', label: 'Joint' },
                                { value: 'Nuclear', label: 'Nuclear' },
                            ]}
                        />
                        <CustomRadio
                            label="Family Value"
                            name="familyValue"
                            value={formData.familyValues}
                            onChange={handleChange}
                            options={[
                                { value: 'Orthodox', label: 'Orthodox' },
                                { value: 'Tradition', label: 'Tradition' },
                                { value: 'Moderate', label: 'Moderate' },
                                { value: 'Liberal', label: 'Liberal' },
                            ]}
                        />
                        <CustomRadio
                            label="Any Disability"
                            name="disability"
                            value={formData.disability}
                            onChange={handleChange}
                            options={[
                                { value: 'None', label: 'None' },
                                { value: 'Physically challenged', label: 'Physically challenged' },
                            ]}
                        />

                        <CustomButton text="Continue" onClick={handleChange} />

                    </Box>
                </Box>
            </Card>
        </Container>
    )
}

export default PersonalDetails