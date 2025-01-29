import React from 'react';
import { Box, Typography, Card, Avatar } from '@mui/material';

const JourneyCard = ({ data }) => {  

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                Your Journey So Far
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                {data.map((item, index) => ( 
                    <Card
                        key={index}
                        sx={{
                            backgroundColor: item.color,
                            padding: 2,
                            display: 'flex',
                            alignItems: 'center',
                            width: '180px',
                            height: '100px',
                            borderRadius: '12px'
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                {item.count}
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Avatar
                            src={item.avatarURL} // Correctly reference the avatarURL property
                            sx={{
                                width: 40,
                                height: 40,
                                marginLeft: '10px',
                                border: '2px solid white',
                            }}
                        />
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default JourneyCard;
