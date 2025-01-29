import React from 'react';
import { Card, Typography, Button, Avatar, Box } from '@mui/material';

const ChatHeader = () => {
    return (

        <Card style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#EBF2FA',
            paddingBottom:'20px'
        }}>
            <div >
            <Box flex="1" p={2} overflow="auto" >

                <Typography variant="h6">
                    <Avatar
                        src='./images/img7.jpg'
                        sx={{
                            width: 40,
                            height: 40,
                            marginLeft: '10px',
                            border: '2px solid white',
                        }}
                    />
                    Keerthana R</Typography>
                <Typography variant='body2' color="black"> Last seen few hours ago</Typography>
                <Typography variant="body2" color="black">
                    27 yrs • 4'10" • BE • Administrative Professional • Cuddalore
                </Typography>
                <Typography variant="body2" color="black">
                    Become a paid member to communicate further
                </Typography>
</Box>            </div>
            <Button variant="contained" color="warning">
                Pay Now
            </Button>
        </Card>
    );
};

export default ChatHeader;
