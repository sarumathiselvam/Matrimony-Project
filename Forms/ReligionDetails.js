import React from 'react'
import { useState } from 'react';
import { Card, Box, Typography, Container } from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake'
import CustomRadio from './CustomRadio';
import CustomButton from './CustomButton';
import CustomDropdown from './CustomDropdown';
import InputField from './InputField'

const ReligionDetails = () => {
    const [formData, setFormData] = useState({
        caste: '',
        subCaste: '',
        gothram: '',
        dosham: ''
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
                    width: '800px',
                    height: '450px',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Box display="flex">

                    <Box sx={{ flex: 0.4, backgroundColor: 'green', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <HandshakeIcon style={{ fontSize: 90, color: 'white' }} />
                        <Typography variant='h6' color='white' gutterBottom>
                            Last year 10,000+ profiles found love on Tamil Matrimony
                        </Typography>
                    </Box>


                    <Box sx={{ flex: 0.6, padding: 2 }}>
                        <Typography variant='h6' gutterBottom>
                            Religion details can help us find the right match
                        </Typography>

                        <CustomDropdown
                            label='Caste'
                            name='Caste'
                            value={formData.caste}
                            onChange={handleChange}
                            options={[
                                { value: 'Vishwakarma', label: 'Vishwakarma' },
                                { value: 'Udaiyar', label: 'Udaiyar' },
                                { value: 'Agamudaiyar', label: 'Agamudaiyar' },
                                { value: 'Kownder', label: 'Kownder' }
                            ]}
                        />

                        <CustomDropdown
                            label="Subcaste"
                            name="SubCaste"
                            value={formData.subCaste}
                            onChange={handleChange}
                            options={[
                                { value: 'Kamalar', label: 'Kamalar' },
                                { value: 'Carpentry', label: 'Carpentry' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                                { value: '4 and above', label: '4 and above' },
                            ]}
                            sx={{ marginTop: 2 }}

                        />


                        <InputField
                            type="text"
                            value={formData.gothram}
                            placeholder="Enter Gothra(m)"
                            onChange={handleChange}
                        />

                        <CustomRadio
                            label="Dosham"
                            name="Dosham"
                            value={formData.dosham}
                            onChange={handleChange}
                            options={[
                                { value: 'No', label: 'No' },
                                { value: 'Yes', label: 'Yes' },
                                { value: "Don't know", label: "Don't know" },
                            ]}
                        />


                        <CustomButton text="Continue" onClick={handleChange} />

                    </Box>
                </Box>
            </Card>
        </Container>
    )
}

export default ReligionDetails 