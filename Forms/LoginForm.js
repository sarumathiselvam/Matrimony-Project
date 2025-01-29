import React, { useState } from 'react';
import { Container, Checkbox, Card, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import  InputField from './InputField'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CustomButton from './CustomButton'
import CustomTypography from './CustomTypography';    

const LoginForm = () => {
    const [emailOrnumber, setEmailOrnumber] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login', { emailOrnumber, password, check });
    };

    return (
        <Container maxWidth="xs">
            <Card
                sx={{
                    width: '400px', 
                    height: '300px',
                    p: 4,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',   
                    marginTop: '50px',
                }}
            >
                <CustomTypography text="Member Login" backgroundColor="green" color="white" />
                <form onSubmit={handleLogin}>
                    <InputField
                        type="text"
                        value={emailOrnumber}
                        placeholder="Email or Number"
                        onChange={(e) => setEmailOrnumber(e.target.value)}
                    />

                    <InputField
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        placeholder="Password"          
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={check}
                                onChange={(e) => setCheck(e.target.checked)}
                            />
                        }
                        label="Keep me logged in"
                        sx={{ mt: 1 }}
                    />

                    <CustomButton
                        text="Login"
                        onClick={handleLogin}
                        type="submit" />

                </form>
            </Card>
        </Container>
    );
};

export default LoginForm;
