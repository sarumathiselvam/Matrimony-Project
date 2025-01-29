import React from 'react'
import { useState } from 'react';
import { Card, Container, TextField, Typography, Box } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import CustomButton from './CustomButton';

const AboutPerson = () => {
    const [data, setData] = useState('')

    const handleChange = (e) =>{
        setData(e.target.value)
    }
    return (
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Card
                sx={{
                    display: 'flex',
                    width: '800px',
                    height: '380px',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Box display="flex">

                    <Box sx={{ flex: 0.4, backgroundColor: 'green', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PeopleIcon style={{ fontSize: 90, color: 'white' }} />
                        <Typography variant='h6' color='white' gutterBottom>
                            Be the one to find someone your brother admire
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 0.6, padding: 2 }}>
                        <Typography variant='h6' gutterBottom>
                            Let the world know about your brother's awesomeness
                        </Typography>
                       
                        <TextField
                            variant="outlined"
                            label="About Your Brother"
                            multiline
                            rows={7}  
                            value={data}
                            onChange= {handleChange}
                            sx={{ mb: 2 }}
                        />

<CustomButton text="Continue" onClick={handleChange} />
                    </Box>
                </Box>
            </Card>
        </Container>

    )
}

export default AboutPerson