import React from 'react'
import { useState } from 'react';
import { Card, Container, Typography, Button, TextField, FormControlLabel, Checkbox } from '@mui/material'

const Verification = () => {
    const [check, setCheck] = useState(false);

    return (
        <Container maxWidth="xs" >
            <Card
                sx={{
                    width: '700px',
                    height: '300px',
                    p: 3,
                    backgroundColor: 'lightgray',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    marginTop: '50px',
                }}
            >
                <Typography >
                    You have successfully registered with TamilMatrimony
                </Typography>
                <Typography>
                    Your Matrimony ID is <b>M11080133</b>
                </Typography>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={check}
                            onChange={(e) => setCheck(e.target.checked)}
                        />
                    }
                    label="Keep me logged in (Recommended). Stay logged in always with TamilMatrimony.com"
                    sx={{ mt: 1 }}
                /><hr></hr>
                <Typography variant='h5'>
                    Verify Your Mobile Number
                </Typography>
                <Typography>
                    You will received a 6-digit confirmation code via SMS to <b>9791XXXXXX</b>(Edit)
                </Typography>

                <TextField
                    variant="outlined"
                    label="Enter Code"

                    sx={{
                        mt: 2,
                        mb: 2,
                        backgroundColor: 'white',
                        color: 'black',
                        right: '60px',
                    }}
                /><Button
                    sx={{
                        backgroundColor: 'orange', color: 'white', mt: 3, width: '50px'
                    }}
                >
                    Verify</Button>
                <Typography variant='body2'> Dont't receive code yet? 
                <span style={{ color: "blue", cursor: "pointer" }}>Resend code</span> </Typography>
            </Card>
        </Container>
    )
}

export default Verification